import React from "react";

interface Props {
  text: string;
}

const ChatFormattedText: React.FC<Props> = ({ text }) => {
  return (
    <>
      {text.split("\n").map((line, i) => {
        const parts = line.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g);
        return (
          <span key={i} className="block min-h-[1.25rem] text-left">
            {parts.map((part, j) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong key={j} className="text-pink-400 font-semibold">
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
                    className="text-pink-400 underline font-medium hover:text-pink-300 transition-colors"
                  >
                    {label}
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
