import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { SYSTEM_PROMPT } from "@/lib/ai/context";

interface IncomingMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body as { messages?: IncomingMessage[] };

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request: messages array is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey || apiKey.startsWith("your_") || apiKey.trim() === "") {
      return NextResponse.json({
        message: {
          role: "assistant",
          content:
            "👋 Hi! I am **Ankit's AI Portfolio Assistant**.\n\nThe `GROQ_API_KEY` has not been configured yet in your `.env.local` file. Once you provide a key, I can answer anything about Ankit's 4+ years of full-stack experience, Aviato Consulting, GCP certification, and tech stack!\n\nIn the meantime, feel free to check out his [Resume](/resume) or [Contact](/contact) page.",
        },
      });
    }

    // Keep the last 4 messages (2 conversation turns) and cap length to 400 chars to minimize tokens
    const sanitizedMessages = messages
      .filter(
        (m) =>
          m &&
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string" &&
          m.content.trim().length > 0
      )
      .slice(-4)
      .map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content.slice(0, 400),
      }));

    const groq = new Groq({ apiKey });
    const model = process.env.GROQ_MODEL || "openai/gpt-oss-120b";

    const chatCompletion = await groq.chat.completions.create({
      model,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...sanitizedMessages,
      ],
      temperature: 0.2,
      max_tokens: 300,
    });

    if (chatCompletion.choices && chatCompletion.choices.length > 0) {
      const choice = chatCompletion.choices[0];
      let text = choice?.message?.content || "";

      // Sanitize: Strip any thinking blocks or "Thinking Process:" artifacts if present
      text = text
        .replace(/<think>[\s\S]*?<\/think>/gi, "")
        .replace(/^Thinking Process:[\s\S]*?(?=\n\n[^\n]|$)/gi, "")
        .trim();

      // If the model prepended a boilerplate decline before giving the actual answer, strip the prefix
      const declinePrefixPattern = /^I can only answer questions related to Ankit Sahu's (?:professional )?background(?:, experience)?(?:, and portfolio)?\.?\s*/i;
      if (declinePrefixPattern.test(text)) {
        const remainder = text.replace(declinePrefixPattern, "").trim();
        if (remainder.length > 0) {
          text = remainder;
        }
      }

      if (!text) {
        text = "I can only answer questions related to Ankit Sahu's professional background and skills.";
      }

      return NextResponse.json({
        message: {
          role: "assistant",
          content: text,
        },
      });
    }

    return NextResponse.json({
      message: {
        role: "assistant",
        content: "I didn't receive a valid answer. Please feel free to ask again or explore Ankit's [Resume](/resume).",
      },
    });
  } catch (err: unknown) {
    console.error("Groq Chat API Error:", err);
    let detail = "Upstream provider error";
    if (err instanceof Error) {
      detail = err.message;
    } else if (typeof err === "object" && err !== null && "message" in err) {
      detail = String((err as { message: unknown }).message);
    }

    // Return a professional, visitor-friendly message instead of leaking raw API provider details
    return NextResponse.json(
      {
        message: {
          role: "assistant",
          content: "I'm temporarily experiencing high traffic. Please try again in a moment, or feel free to explore Ankit's [Resume](/resume) and [Contact](/contact) page!",
        },
        error: detail,
      },
      { status: 200 }
    );
  }
}
