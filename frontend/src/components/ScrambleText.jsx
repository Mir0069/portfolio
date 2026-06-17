import { useState, useRef, useEffect } from "react";

// The characters that will flash during the glitch effect
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;':,./<>?";

export default function ScrambleText({ text, className, style, onClick, scrambleOnChange = false }) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  const triggerScramble = () => {
    let iteration = 0;
    
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((currentText) => {
        return text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
      });

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }
      iteration += 1 / 3; 
    }, 30);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (scrambleOnChange) {
      triggerScramble();
    } else {
      setDisplayText(text);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, scrambleOnChange]);

  return (
    <span 
      onMouseEnter={triggerScramble} 
      onClick={onClick}
      className={className}
      style={{ ...style, display: "inline-block" }}
    >
      {displayText}
    </span>
  );
}