import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  pauseDuration?: number;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 40,
  pauseDuration = 4000,
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && index < text.length) {
      // Typing phase
      timer = setTimeout(() => {
        setDisplayedText(text.substring(0, index + 1));
        setIndex((prev) => prev + 1);
      }, speed);
    } else if (!isDeleting && index === text.length) {
      // Finished typing, pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && index > 0) {
      // Deleting phase (faster)
      timer = setTimeout(() => {
        setDisplayedText(text.substring(0, index - 1));
        setIndex((prev) => prev - 1);
      }, speed / 2);
    } else if (isDeleting && index === 0) {
      // Reset for next iteration
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, text, speed, pauseDuration]);

  // Highlight special keywords in the typed substring if they are present
  const renderFormattedText = (fullTyped: string) => {
    const keywords = ["web developer", "HTML, CSS, and JavaScript"];
    let parts: { text: string; isHighlight: boolean }[] = [{ text: fullTyped, isHighlight: false }];

    keywords.forEach((keyword) => {
      const newParts: { text: string; isHighlight: boolean }[] = [];
      parts.forEach((part) => {
        if (part.isHighlight) {
          newParts.push(part);
        } else {
          const splitText = part.text.split(keyword);
          splitText.forEach((st, idx) => {
            if (st) newParts.push({ text: st, isHighlight: false });
            if (idx < splitText.length - 1) {
              newParts.push({ text: keyword, isHighlight: true });
            }
          });
        }
      });
      parts = newParts;
    });

    return parts.map((part, i) =>
      part.isHighlight ? (
        <span key={i} className="text-[#FFF7ED] font-bold border-b border-[#e8590c]/50">
          {part.text}
        </span>
      ) : (
        <span key={i}>{part.text}</span>
      )
    );
  };

  return (
    <p className={`min-h-[4.5rem] sm:min-h-[3.5rem] leading-relaxed text-zinc-300 ${className}`}>
      {renderFormattedText(displayedText)}
      <span className="inline-block w-[3px] h-[1.1em] ml-1 bg-[#e8590c] align-middle rounded-full animate-pulse glow-orange" />
    </p>
  );
};
