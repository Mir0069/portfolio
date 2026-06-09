import React, { useState } from 'react';

export default function Marquee({ 
  email = "malhaar@mirchandani.com", 
  speed = "20s" 
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault(); // Prevents the mail app from opening automatically so they can just copy it
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    // Revert back to email after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="marquee-container" style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '4rem 0', background: '#050505' }}>
      
      <style>{`
        .marquee-track {
          display: flex;
          width: fit-content;
          animation: scroll ${speed} linear infinite;
        }

        /* Pause the animation when the user hovers */
        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          white-space: nowrap;
          font-size: 8vw;
          font-weight: 800; /* Extra Bold */
          font-family: 'Syne', sans-serif; /* Syne Font applied here */
          letter-spacing: 0.05em;
          cursor: pointer;
          text-decoration: none;
        }

        .marquee-car {
          height: 1em; /* Scales perfectly with the text size */
          margin-right: 0.5em;
          transition: transform 0.4s ease;
        }

        /* Make the car drive forward slightly on hover */
        .marquee-item:hover .marquee-car {
          transform: translateX(0.2em);
        }

        .marquee-text {
          /* The Base Outline Effect */
          color: #F5F5F5;
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.3);
          transition: all 0.4s ease;
        }

        /* The Ubuntu Pink/Purple Gradient Glow Effect on Hover */
        .marquee-item:hover .marquee-text {
          background: linear-gradient(to right, #E95420, #772953);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 0px;
          filter: drop-shadow(0 0 20px rgba(233, 84, 32, 0.4));
        }

        .marquee-separator {
          color: rgba(255, 255, 255, 0.2);
          -webkit-text-stroke: 0px;
          margin: 0 3vw;
          font-size: 6vw;
          font-weight: 300;
        }

        /* The mathematically perfect loop */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      
      <div className="marquee-track">
        
        {/* --- FIRST HALF --- */}
        <a href={`mailto:${email}`} onClick={handleCopy} className="marquee-item">
          <img src="/car.svg" alt="car" className="marquee-car" />
          <span className="marquee-text">{copied ? "COPIED TO CLIPBOARD!" : email}</span>
          <span className="marquee-separator">//</span>
        </a>
        <a href={`mailto:${email}`} onClick={handleCopy} className="marquee-item">
          <img src="/car.svg" alt="car" className="marquee-car" />
          <span className="marquee-text">{copied ? "COPIED TO CLIPBOARD!" : email}</span>
          <span className="marquee-separator">//</span>
        </a>
        <a href={`mailto:${email}`} onClick={handleCopy} className="marquee-item">
          <img src="/car.svg" alt="car" className="marquee-car" />
          <span className="marquee-text">{copied ? "COPIED TO CLIPBOARD!" : email}</span>
          <span className="marquee-separator">//</span>
        </a>

        {/* --- SECOND HALF (Exact Duplicate) --- */}
        <a href={`mailto:${email}`} onClick={handleCopy} className="marquee-item">
          <img src="/car.svg" alt="car" className="marquee-car" />
          <span className="marquee-text">{copied ? "COPIED TO CLIPBOARD!" : email}</span>
          <span className="marquee-separator">//</span>
        </a>
        <a href={`mailto:${email}`} onClick={handleCopy} className="marquee-item">
          <img src="/car.svg" alt="car" className="marquee-car" />
          <span className="marquee-text">{copied ? "COPIED TO CLIPBOARD!" : email}</span>
          <span className="marquee-separator">//</span>
        </a>
        <a href={`mailto:${email}`} onClick={handleCopy} className="marquee-item">
          <img src="/car.svg" alt="car" className="marquee-car" />
          <span className="marquee-text">{copied ? "COPIED TO CLIPBOARD!" : email}</span>
          <span className="marquee-separator">//</span>
        </a>

      </div>
    </div>
  );
}``