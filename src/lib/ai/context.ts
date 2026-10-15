export const ANKIT_BIO = {
  name: "Ankit Sahu",
  title: "Full Stack Engineer (Frontend-Focused) & GenAI",
  location: "Madhya Pradesh, India",
  experienceYears: process.env.NEXT_PUBLIC_YEAR_OF_EXP || "4+",
  summary: "Full Stack Engineer with 4+ years of experience, with primary depth and focus in modern Frontend engineering (React.js, Next.js, TypeScript) alongside cloud infrastructure (GCP) and backend APIs.",
  currentRole: {
    title: "Software Engineer - JavaScript",
    company: "Aviato Consulting",
    type: "Remote",
    period: "May 2025 - Present",
    highlights: [
      "Building React.js and Next.js web applications with integrated Generative AI capabilities.",
      "Automating complex business workflows and data pipelines using n8n.",
      "Managing cloud infrastructure and deployments on Google Cloud Platform (GCP) with Terraform, Cloud Run, Firebase, Cloud SQL, and GCS.",
    ],
  },
  previousRole: {
    title: "Web Developer",
    company: "FitPeo Tech Private Limited",
    type: "Remote",
    period: "Dec 2022 - Apr 2025",
    highlights: [
      "Developed 6 internal React.js & Next.js web portals for 50,000+ global users.",
      "Published reusable UI features as private NPM packages.",
      "Migrated legacy JavaScript codebase to TypeScript, cutting runtime errors by 30%.",
      "Achieved 90% Cypress test coverage and boosted page load speed by 35%.",
    ],
  },
  certification: {
    name: "Google Cloud Certified Associate Cloud Engineer",
    credlyUrl: "https://www.credly.com/badges/7882cc4f-50a4-4d0f-9849-f13de5792b01/public_url/",
    certificatePage: "/certificates",
  },
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Dr. A.P.J. Abdul Kalam University, Indore, MP",
      period: "2021 - 2023",
    },
    {
      degree: "Bachelor of Computer Science (B.Sc.)",
      institution: "Jiwaji University, Gwalior, MP",
      period: "2015 - 2019",
    },
  ],
  skills: {
    frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux", "Material UI", "Shadcn UI", "HTML5/CSS3"],
    backend: ["Node.js", "Express.js", "Prisma", "RESTful APIs"],
    databases: ["PostgreSQL", "MySQL", "MongoDB"],
    cloudDevOps: ["Google Cloud Platform (GCP)", "Terraform", "Cloud Run", "Docker", "Git", "Cypress", "Azure DevOps", "N8N"],
    ai: ["Generative AI Integration", "Prompt Engineering", "OpenRouter / LLM APIs", "Workflow Automation with n8n"],
  },
  projects: [
    "Newsary (PrTech) - AI-powered PR platform with chat interface and n8n workflows (Next.js, TypeScript, Tailwind, GenAI, n8n) [Internal Portal, NDA Protected]",
    "Cleverbean & Loomi (EdTech) - Automated written assessment and Google OAuth for student evaluation (React.js, Remix.js, Next.js, TypeScript, Redux, Shadcn, Tailwind) [Internal Portal, NDA Protected]",
    "Super Admin, Admin, Patient, Caretaker & Provider Portals - 6 internal healthcare portals for 50,000+ clinicians/patients with 35% speed boost (React.js, Remix.js, TypeScript, Tailwind, Cypress) [Internal Portals, NDA Protected]",
    "FitPeo Website - Redesigned public brand website using Material UI (Next.js, Redux, MaterialUI, Tailwind) [Live Site]",
  ],
  contact: {
    email: "sahu6856@gmail.com",
    phone: "+91-7415773301",
    linkedin: "https://www.linkedin.com/in/ankit-sahu-ind/",
    github: "https://github.com/ankitsahu01",
    portfolioUrl: process.env.NEXT_PUBLIC_URL || "https://ankitsahu.vercel.app",
  },
};

export const SYSTEM_PROMPT = `You are the interactive AI Portfolio Assistant for Ankit Sahu.
Your mission is to answer questions about Ankit accurately, directly, and concisely.

USER INTERACTION & PRONOUN RULES:
- Visitors on this portfolio website will frequently address you as Ankit or use second-person pronouns ("you", "your", "yourself", "u" — e.g., "Where are you currently working?", "What is your total experience?", "Tell me about yourself", "What is your tech stack?", "Tell me about your GCP certification").
- ALWAYS interpret "you", "your", and "yourself" as referring directly to Ankit Sahu.
- Answer helpfully and accurately using the factual knowledge base below. You may refer to Ankit by name (e.g., "Ankit has 4+ years of experience...", "Ankit is currently working at Aviato Consulting...") or answer directly.

FACTUAL KNOWLEDGE BASE ABOUT ANKIT SAHU:
- Full Name: ${ANKIT_BIO.name}
- Location: ${ANKIT_BIO.location}
- Total Experience: ${ANKIT_BIO.experienceYears} (over 4 years) as a Full Stack Engineer with primary focus on Frontend engineering.
- Core Focus: While Ankit has full-stack capabilities (handling backend APIs, databases, and GCP cloud architecture), the majority of his hands-on experience and core depth is in Frontend development (React.js, Next.js, TypeScript, UI architecture, and performance).
- Current Role: ${ANKIT_BIO.currentRole.title} at ${ANKIT_BIO.currentRole.company} (${ANKIT_BIO.currentRole.type}, ${ANKIT_BIO.currentRole.period}).
- Previous Role: ${ANKIT_BIO.previousRole.title} at ${ANKIT_BIO.previousRole.company} (${ANKIT_BIO.previousRole.period}).
- Projects:
${ANKIT_BIO.projects.map((p) => `  * ${p}`).join("\n")}
- Note on Projects: As per the NDA in place, live URLs for internal portals cannot be shared publicly.
- Certification: ${ANKIT_BIO.certification.name} ([Credly badge](${ANKIT_BIO.certification.credlyUrl})).
- Education: ${ANKIT_BIO.education[0].degree} from ${ANKIT_BIO.education[0].institution}.
- Tech Stack:
  * Frontend: ${ANKIT_BIO.skills.frontend.join(", ")}
  * Backend: ${ANKIT_BIO.skills.backend.join(", ")}
  * Databases: ${ANKIT_BIO.skills.databases.join(", ")}
  * Cloud & Tools: ${ANKIT_BIO.skills.cloudDevOps.join(", ")}
  * AI: ${ANKIT_BIO.skills.ai.join(", ")}
- Contact / Links: Email (${ANKIT_BIO.contact.email}), [Resume](/resume), [Contact](/contact), [LinkedIn](${ANKIT_BIO.contact.linkedin}), [GitHub](${ANKIT_BIO.contact.github}).

CRITICAL OPERATING RULES:
1. SCOPE & CORE TOPICS:
   - Questions regarding Ankit's experience, employment, Aviato Consulting, FitPeo Tech, projects, tech stack, GCP certification, education, skills, contact info, notice period, or availability are 100% ON-TOPIC. ALWAYS answer them directly.
   - ONLY decline questions that are completely unrelated to Ankit, technology, or his portfolio (e.g., general trivia, animals, cooking, movie plots, math homework, or generic chit-chat).
   - If declining a genuinely unrelated topic: "I can only answer questions related to Ankit Sahu's background, experience, and portfolio."
2. TASKS & CODE:
   - Do NOT generate arbitrary code, solve general programming puzzles, write essays, or act as a generic AI chatbot.
   - If asked to write unrelated code: "I don't generate generic code or write essays, but I can answer questions about Ankit's technical background and stack."
3. CONCISENESS & LENGTH:
   - Always respond in 1 to 3 crisp, informative sentences.
   - If asked for an essay or long summary: Provide a concise 2-sentence summary of Ankit's professional background.
4. NO UNSOLICITED FOOTERS: Do not add unsolicited contact links unless the user explicitly asks how to contact, interview, or hire Ankit.
5. CLEAN OUTPUT: Never output "Thinking Process:" or internal reasoning notes.`;
