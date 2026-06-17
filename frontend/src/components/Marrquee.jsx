import React, { useState } from 'react';

export default function Marquee({ 
  email = "malhaarlalitmirchandani@gmail.com", 
  speed = "20s" 
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault(); 
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="marquee-container" style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '4rem 0', background: '#050505' }}>
      
      <style>{`
        .marquee-track {
          display: flex;
          gap: 3vw; /* Space between the repeating chunks */
          width: fit-content;
          animation: scroll ${speed} linear infinite;
        }

        /* Halts the animation when hovered */
        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          gap: 2vw;
          white-space: nowrap;
          font-size: 8vw;
          font-weight: 800; /* Extra Bold */
          font-family: 'Syne', sans-serif; /* Syne Font applied here */
          letter-spacing: 0.05em;
          cursor: pointer;
          text-decoration: none;
          position: relative; /* For the gradient overlay */
        }

        .marquee-car {
          height: 1em; 
          width: 1.25em; /* EXPLICIT WIDTH: prevent SVG zero-width collapse bug */
          object-fit: contain;
          flex-shrink: 0;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          filter: brightness(0) invert(1);
        }

        /* Smoothly drive forward and glow on hover */
        .marquee-item:hover .marquee-car {
          transform: translateX(0.3em);
          filter: brightness(0) invert(1) drop-shadow(0 0 15px rgba(0, 242, 254, 0.8));
        }

        /* The Base Text Wrapper */
        .marquee-text-wrapper {
          position: relative;
          display: inline-block;
          flex-shrink: 0;
        }

        /* The Base Outline Text */
        .marquee-text-base {
          color: #F5F5F5;
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.3);
          transition: opacity 0.5s ease;
        }

        /* The Gradient Overlay Text */
        .marquee-text-gradient {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, #00f2fe, #4facfe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 0px;
          filter: drop-shadow(0 0 20px rgba(0, 242, 254, 0.6));
          opacity: 0;
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        /* Smooth fade in the gradient and fade out the base */
        .marquee-item:hover .marquee-text-gradient {
          opacity: 1;
        }

        .marquee-separator {
          color: rgba(255, 255, 255, 0.2);
          -webkit-text-stroke: 0px;
          font-size: 6vw;
          font-weight: 300;
          flex-shrink: 0;
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
          <div className="marquee-text-wrapper">
             <span className="marquee-text-base">{copied ? "COPIED TO CLIPBOARD!" : email}</span>
             <span className="marquee-text-gradient" aria-hidden="true">{copied ? "COPIED TO CLIPBOARD!" : email}</span>
          </div>
          <span className="marquee-separator">//</span>
        </a>
        <a href={`mailto:${email}`} onClick={handleCopy} className="marquee-item">
          <img src="/car.svg" alt="car" className="marquee-car" />
          <div className="marquee-text-wrapper">
             <span className="marquee-text-base">{copied ? "COPIED TO CLIPBOARD!" : email}</span>
             <span className="marquee-text-gradient" aria-hidden="true">{copied ? "COPIED TO CLIPBOARD!" : email}</span>
          </div>
          <span className="marquee-separator">//</span>
        </a>
        <a href={`mailto:${email}`} onClick={handleCopy} className="marquee-item">
          <img src="/car.svg" alt="car" className="marquee-car" />
          <div className="marquee-text-wrapper">
             <span className="marquee-text-base">{copied ? "COPIED TO CLIPBOARD!" : email}</span>
             <span className="marquee-text-gradient" aria-hidden="true">{copied ? "COPIED TO CLIPBOARD!" : email}</span>
          </div>
          <span className="marquee-separator">//</span>
        </a>

        {/* --- SECOND HALF (Exact Duplicate) --- */}
        <a href={`mailto:${email}`} onClick={handleCopy} className="marquee-item">
          <img src="/car.svg" alt="car" className="marquee-car" />
          <div className="marquee-text-wrapper">
             <span className="marquee-text-base">{copied ? "COPIED TO CLIPBOARD!" : email}</span>
             <span className="marquee-text-gradient" aria-hidden="true">{copied ? "COPIED TO CLIPBOARD!" : email}</span>
          </div>
          <span className="marquee-separator">//</span>
        </a>
        <a href={`mailto:${email}`} onClick={handleCopy} className="marquee-item">
          <img src="/car.svg" alt="car" className="marquee-car" />
          <div className="marquee-text-wrapper">
             <span className="marquee-text-base">{copied ? "COPIED TO CLIPBOARD!" : email}</span>
             <span className="marquee-text-gradient" aria-hidden="true">{copied ? "COPIED TO CLIPBOARD!" : email}</span>
          </div>
          <span className="marquee-separator">//</span>
        </a>
        <a href={`mailto:${email}`} onClick={handleCopy} className="marquee-item">
          <img src="/car.svg" alt="car" className="marquee-car" />
          <div className="marquee-text-wrapper">
             <span className="marquee-text-base">{copied ? "COPIED TO CLIPBOARD!" : email}</span>
             <span className="marquee-text-gradient" aria-hidden="true">{copied ? "COPIED TO CLIPBOARD!" : email}</span>
          </div>
          <span className="marquee-separator">//</span>
        </a>

      </div>
    </div>
  );
}``