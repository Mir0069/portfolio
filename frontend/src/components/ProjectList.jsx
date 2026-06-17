import React, { useState, useEffect, useRef } from "react";
import Experience from "./Experience";
export default function ProjectList() {
  // Start as null so NO images show by default
  const [activeIndex, setActiveIndex] = useState(null);
  
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    // If the mouse leaves this entire section, reset index to null (hiding all images)
    <section 
      ref={sectionRef}
      className="l-projects" 
      onMouseLeave={() => setActiveIndex(null)}
      style={{ backgroundColor: "#050505", minHeight: "100vh", position: "relative", width: "100%" }}
    >
      
      <style>{`
        .l-inner {
          max-width: 100vw;
          margin: 0 ;
          padding: 15vh 5vw;
          position: relative;
        }

        .p-menu-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          
          /* Fade Up Animation */
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? '0' : '50px'});
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* --- THE LEFT MENU --- */
        .p-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          width: 100%; /* Use full horizontal space */
          position: relative;
          z-index: 10;
        }

        @media (max-width: 768px) {
          .p-menu {
            width: 100%;
          }
          
          /* Decrease font size of titles on mobile */
          .p-menu .title {
            font-size: 3.5rem !important;
          }
          
          .p-menu a {
            padding: 1rem 1.5rem !important;
          }
          
          .p-thumbnail {
            display: none !important;
          }
        }

        .p-menu li {
          margin-bottom: 1rem;
        }

        /* THE TEXT DIV (Updated for the Pop Effect) */
        .p-menu a {
          display: flex;
          align-items: flex-start;
          text-decoration: none;
          cursor: pointer;
          width: 100%; /* Ensure link takes full width */
          
          padding: 1.5rem 2rem;
          border-radius: 16px;
          border: 1px solid transparent;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Hover States for the overall Div */
        .p-menu a:hover {
          background-color: rgba(255, 255, 255, 0.03); 
          transform: scale(1.02) translateX(10px);
          border: 1px solid rgba(85, 170, 255, 0.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
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
          
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
          transition: all 0.5s ease;
        }

        /* Hover States for Menu Text */
        .p-menu a:hover .no {
          color: #55aaff;
        }

        .p-menu a:hover .title {
          -webkit-text-stroke: 0px;
          background: linear-gradient(to right, #55aaff, #0077ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 20px rgba(85, 170, 255, 0.4));
        }

        /* --- THE RIGHT THUMBNAILS --- */
        .p-thumbnail {
          list-style: none;
          padding: 0;
          margin: 0;
          position: fixed; 
          right: 10vw;
          top: 50%;
          transform: translateY(-50%);
          width: 25vw;
          aspect-ratio: 3/4;
          z-index: 20; /* Displayed above the menu (z-index 10) */
          pointer-events: none; 
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
        <div id="experience" style={{ pointerEvents: "auto" }}>
  <Experience />
</div>
        <div className="p-menu-wrap">
          
          {/* =========================================
              LEFT: THE TEXT MENU
              ========================================= */}
          <ul className="p-menu">
            
            {/* 01: MEDIVAC */}
            <li data-index="0">
              <a 
                href="#medivac" 
                onMouseEnter={() => setActiveIndex(0)}
              >
                <span className="no">01</span>
                <div className="title">medivac</div>
              </a>
            </li>

            {/* 02: ETHENIUM */}
            <li data-index="1">
              <a 
                href="#ethenium" 
                onMouseEnter={() => setActiveIndex(1)}
              >
                <span className="no">02</span>
                <div className="title">Ethenium</div>
              </a>
            </li>

            {/* 03: STATS-CRIC */}
            <li data-index="2">
              <a 
                href="#stats-cric" 
                onMouseEnter={() => setActiveIndex(2)}
              >
                <span className="no">03</span>
                <div className="title">Stats-Cric</div>
              </a>
            </li>

          </ul>

          {/* =========================================
              RIGHT: THE IMAGE THUMBNAILS
              ========================================= */}
          <ul className="p-thumbnail">
            
            {/* Image 01: Medivac */}
            <li className={activeIndex === 0 ? "thumb-active" : "thumb-inactive"}>
              <img src="/medivac.jpg" alt="Medivac" />
            </li>

            {/* Image 02: Ethenium */}
            <li className={activeIndex === 1 ? "thumb-active" : "thumb-inactive"}>
              <img src="/ethenium.jpg" alt="Ethenium" />
            </li>

            {/* Image 03: Stats-Cric */}
            <li className={activeIndex === 2 ? "thumb-active" : "thumb-inactive"}>
              <img src="/stats-cric.jpg" alt="Stats-Cric" />
            </li>

          </ul>

        </div>
      </div>
    </section>
  );
}