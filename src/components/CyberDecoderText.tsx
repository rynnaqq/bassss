import React, { useState, useEffect, useCallback, useRef } from 'react';

interface CyberDecoderTextProps {
  text: string;
  className?: string;
  highlightText?: string; // Text fragment to render with orange highlight
  speed?: number; // ms per decode tick
  repeatInterval?: number; // ms interval to re-trigger decoding (e.g. 10000 for 10s)
}

const CYBER_CHARS = '0123456789ABCDEF!@#$%^&*()_+-=[]{}|;:<>';

export const CyberDecoderText: React.FC<CyberDecoderTextProps> = ({
  text,
  className = '',
  highlightText,
  speed = 40,
  repeatInterval,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isDecoding, setIsDecoding] = useState(false);
  const activeCleanupRef = useRef<(() => void) | null>(null);

  const startDecode = useCallback(() => {
    if (activeCleanupRef.current) {
      activeCleanupRef.current();
    }
    setIsDecoding(true);
    let frame = 0;
    const maxFrames = text.length * 3;

    const interval = setInterval(() => {
      frame++;

      const scrambled = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          // If enough frames have passed for this character index, show real char
          if (frame >= index * 2 + 6) {
            return char;
          }
          // Otherwise show random cyber symbol
          return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
        })
        .join('');

      setDisplayText(scrambled);

      if (frame >= maxFrames + 6) {
        clearInterval(interval);
        setDisplayText(text);
        setIsDecoding(false);
      }
    }, speed);

    const cleanup = () => {
      clearInterval(interval);
      setDisplayText(text);
      setIsDecoding(false);
    };

    activeCleanupRef.current = cleanup;
    return cleanup;
  }, [text, speed]);

  useEffect(() => {
    // Initial decode
    const cleanup = startDecode();

    let repeatTimer: NodeJS.Timeout | null = null;
    if (repeatInterval && repeatInterval > 0) {
      repeatTimer = setInterval(() => {
        startDecode();
      }, repeatInterval);
    }

    return () => {
      if (cleanup) cleanup();
      if (repeatTimer) clearInterval(repeatTimer);
    };
  }, [startDecode, repeatInterval]);

  const handleMouseEnter = () => {
    if (!isDecoding) {
      startDecode();
    }
  };

  // Helper to highlight a specific substring if highlightText is provided
  const renderFormatted = (currentText: string) => {
    if (!highlightText || !currentText) {
      return <span>{currentText}</span>;
    }

    const highlightIndex = text.indexOf(highlightText);

    if (highlightIndex === -1) {
      return <span>{currentText}</span>;
    }

    const before = currentText.slice(0, highlightIndex);
    const highlightedPart = currentText.slice(highlightIndex, highlightIndex + highlightText.length);
    const after = currentText.slice(highlightIndex + highlightText.length);

    return (
      <>
        <span>{before}</span>
        <span className="text-[#e8590c] relative inline-block transition-all">
          {highlightedPart}
          <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#e8590c]/50 rounded-full glow-orange" />
        </span>
        <span>{after}</span>
      </>
    );
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      className={`inline-block cursor-pointer select-none font-mono ${
        isDecoding ? 'text-[#FFF7ED] text-shadow-orange' : ''
      } ${className}`}
      title="Hover or wait 10s to re-trigger cyber decode"
    >
      {renderFormatted(displayText || text)}
      {isDecoding && (
        <span className="inline-block w-2 h-[0.9em] ml-1 bg-[#e8590c] animate-pulse align-baseline rounded-sm" />
      )}
    </span>
  );
};
