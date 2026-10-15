import React from "react";

interface Props {
  text: string;
  isUser?: boolean;
}

const ChatFormattedText: React.FC<Props> = ({ text, isUser = false }) => {
  return (
    <>
      {text.split("\n").map((line, i) => {
        // Split by markdown links, bold tags, or raw URLs
        const parts = line.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*|https?:\/\/[^\s)]+)/g);
        return (
          <span key={i} className="block min-h-[1.25rem] text-left break-words [overflow-wrap:anywhere]">
            {parts.map((part, j) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong
                    key={j}
                    className={
                      isUser
                        ? "text-primary-foreground font-bold"
                        : "text-primary-container font-semibold"
                    }
                  >
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
              if (linkMatch) {
                const [, label, href] = linkMatch;
                const isExternal = href.startsWith("http");
                return (
                  <a
                    key={j}
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className={`underline font-medium break-all transition-colors ${
                      isUser
                        ? "text-primary-foreground hover:opacity-80"
                        : "text-primary-container hover:text-primary"
                    }`}
                  >
                    {label}
                  </a>
                );
              }
              if (part.startsWith("http://") || part.startsWith("https://")) {
                return (
                  <a
                    key={j}
                    href={part}
                    target="_blank"
                    rel="noreferrer"
                    className={`underline font-medium break-all transition-colors ${
                      isUser
                        ? "text-primary-foreground hover:opacity-80"
                        : "text-primary-container hover:text-primary"
                    }`}
                  >
                    {part}
                  </a>
                );
              }
              return part;
            })}
          </span>
        );
      })}
    </>
  );
};

export default ChatFormattedText;
