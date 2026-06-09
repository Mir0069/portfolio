import { useState, useRef, useEffect } from "react";

// The characters that will flash during the glitch effect
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;':,./<>?";

export default function ScrambleText({ text, className, style, onClick }) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  const triggerScramble = () => {
    let iteration = 0;
    
    // Clear any existing interval to prevent overlapping animations
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((currentText) => {
        return text
          .split("")
          .map((char, index) => {
            // Ignore spaces
            if (char === " ") return " ";
            
            // If the iteration has passed this index, lock in the correct character
            if (index < iteration) {
              return text[index];
            }
            
            // Otherwise, return a random glitch character
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
      });

      // Stop the interval once all characters are revealed
      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      // The fraction controls the speed of the reveal. 
      // 1/3 means it takes 3 interval ticks (90ms) to lock in one character.
      iteration += 1 / 3; 
    }, 30); // 30ms per frame update
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

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