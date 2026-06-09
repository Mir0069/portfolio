import React, { useState } from "react";

export default function ProjectList() {
  // Track which project is currently hovered to show the corresponding image
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="l-projects" style={{ backgroundColor: "#050505", minHeight: "100vh", position: "relative", width: "100%" }}>
      
      {/* Vanilla CSS scoped to this specific layout */}
      <style>{`
        .l-inner {
          max-width: 100vw;
          margin: 0 auto;
          padding: 15vh 5vw;
          position: relative;
        }

        .p-menu-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        /* --- THE LEFT MENU --- */
        .p-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          width: 55%;
          position: relative;
          z-index: 10;
        }

        .p-menu li {
          margin-bottom: 2rem;
        }

        .p-menu a {
          display: flex;
          align-items: flex-start;
          text-decoration: none;
          cursor: pointer;
        }

        /* The Numbers (01, 02, etc) */
        .p-menu .no {
          font-family: monospace;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.3);
          letter-spacing: 0.15em;
          margin-right: 2rem;
          margin-top: 1vw;
          transition: color 0.4s ease;
        }

        /* The Massive Titles */
        .p-menu .title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 7vw;
          line-height: 0.9;
          text-transform: uppercase;
          
          /* Outline Effect */
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
          transition: all 0.5s ease;
        }

        /* Hover States for Menu */
        .p-menu a:hover .no {
          color: #55aaff;
        }

        .p-menu a:hover .title {
          -webkit-text-stroke: 0px;
          background: linear-gradient(to right, #E95420, #772953);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 20px rgba(233, 84, 32, 0.3));
        }

        /* --- THE RIGHT THUMBNAILS --- */
        .p-thumbnail {
          list-style: none;
          padding: 0;
          margin: 0;
          position: fixed; /* Fixes image to the right side of screen */
          right: 10vw;
          top: 50%;
          transform: translateY(-50%);
          width: 25vw;
          aspect-ratio: 3/4;
          z-index: 5;
          pointer-events: none; /* Let mouse pass through to the canvas */
        }

        .p-thumbnail li {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 4px;
          overflow: hidden;
          transition: opacity 0.6s ease, transform 0.6s ease, filter 0.6s ease;
        }

        .p-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Active vs Inactive Image States */
        .thumb-active {
          opacity: 1;
          transform: scale(1);
          filter: blur(0px);
        }

        .thumb-inactive {
          opacity: 0;
          transform: scale(1.05);
          filter: blur(10px);
        }

        /* Subtle scanline over images */
        .p-thumbnail::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 100% 4px;
          z-index: 2;
        }
      `}</style>

      <div className="l-inner">
        <div className="p-menu-wrap">
          
          {/* =========================================
              LEFT: THE TEXT MENU
              ========================================= */}
          <ul className="p-menu">
            
            {/* 01: VORTEX */}
            <li data-index="0">
              <a 
                href="#vortex" 
                onMouseEnter={() => setActiveIndex(0)}
              >
                <span className="no">01</span>
                <div className="title">Vortex</div>
              </a>
            </li>

            {/* 02: LAZARUS */}
            <li data-index="1">
              <a 
                href="#lazarus" 
                onMouseEnter={() => setActiveIndex(1)}
              >
                <span className="no">02</span>
                <div className="title">Lazarus</div>
              </a>
            </li>

            {/* 03: AGENTIC AI */}
            <li data-index="2">
              <a 
                href="#agentic-ai" 
                onMouseEnter={() => setActiveIndex(2)}
              >
                <span className="no">03</span>
                <div className="title">Agentic AI</div>
              </a>
            </li>

            {/* 04: OPENGL ENGINE */}
            <li data-index="3">
              <a 
                href="#opengl" 
                onMouseEnter={() => setActiveIndex(3)}
              >
                <span className="no">04</span>
                <div className="title">OpenGL Engine</div>
              </a>
            </li>

          </ul>

          {/* =========================================
              RIGHT: THE IMAGE THUMBNAILS
              ========================================= */}
          <ul className="p-thumbnail">
            
            {/* Image 01 */}
            <li className={activeIndex === 0 ? "thumb-active" : "thumb-inactive"}>
              <img src="/vortex.jpg" alt="Vortex" />
            </li>

            {/* Image 02 */}
            <li className={activeIndex === 1 ? "thumb-active" : "thumb-inactive"}>
              <img src="/lazarus.jpg" alt="Lazarus" />
            </li>

            {/* Image 03 */}
            <li className={activeIndex === 2 ? "thumb-active" : "thumb-inactive"}>
              <img src="/agentic-ai.jpg" alt="Agentic AI" />
            </li>

            {/* Image 04 */}
            <li className={activeIndex === 3 ? "thumb-active" : "thumb-inactive"}>
              <img src="/opengl.jpg" alt="OpenGL Engine" />
            </li>

          </ul>

        </div>
      </div>
    </section>
  );
}