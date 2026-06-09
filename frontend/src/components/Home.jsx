import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Cat from "./Cat"; 
import FluidBackground from "./FluidBackground";
import FloatingElements from "./FloatingElements";
import Projects from "./Projects"; // Make sure you rename your About.jsx to Projects.jsx!
import ScrambleText from "./ScrambleText"; 
import ResumeButton from "./ResumeButton";

// Static configs to keep the React 19 Compiler happy
const cameraConfig = { position: [0, 0.2, 2.5], fov: 40 };
const glConfig = { antialias: false, powerPreference: "high-performance" };
const bgColor = ["#050505"];

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showArrow, setShowArrow] = useState(true);

  // Smooth scroll handler for the arrow
  const scrollToProjects = () => {
    setShowArrow(false);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      setShowArrow(window.scrollY <= 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialize based on current scroll position
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ width: "100%", backgroundColor: "#000", position: "" }}>
      <ResumeButton classname="liquid-btn sticky"/>
      
      {/* =========================================
          LAYER 1: FIXED 3D CANVAS
          ========================================= */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100%", zIndex: 0 }}>
        <Canvas 
          camera={cameraConfig} 
          gl={glConfig} 
          eventSource={document.body}
          eventPrefix="client"
        >          
          <color attach="background" args={bgColor} />
          <FluidBackground />
          <FloatingElements />
          <Cat />
          <EffectComposer disableNormalPass>
            <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} radius={0.4} />
          </EffectComposer>
        </Canvas>
      </div>

      {/* =========================================
          LAYER 2: SCROLLING DOM CONTENT
          ========================================= */}
      <div style={{ position: "relative", zIndex: 10, pointerEvents: "none" }}>
        
        <section style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
          
          <nav style={{ display: "flex", justifyContent: "space-between", padding: "2rem 4rem" }}>
            
            {/* THE BRAND NAME */}
            <div style={{ 
              color: "white", fontSize: "1.2rem", fontWeight: "bold", letterSpacing: "0.2em", mixBlendMode: "difference"
            }}>
              <a href="/" style={{ pointerEvents: "auto", cursor: "pointer", color: "white", textDecoration: "none" }}>
                <ScrambleText text="MIRCHANDANI" />
              </a>
            </div>
            
            {/* THE CONTACT DROPDOWN */}
            <div 
              style={{ pointerEvents: "auto", position: "relative" }}
              onMouseEnter={() => setIsContactOpen(true)}
              onMouseLeave={() => setIsContactOpen(false)}
            >
              <div style={{ color: "white", fontSize: "0.9rem", letterSpacing: "0.1em", mixBlendMode: "difference", cursor: "pointer" }}>
                <ScrambleText text="CONTACT" />
              </div>

              {/* Dropdown Menu */}
              <div style={{
                position: "absolute",
                top: "100%",
                right: 0,
                marginTop: "1rem",
                backgroundColor: "rgba(5, 5, 5, 0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(85, 170, 255, 0.2)",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                minWidth: "180px",
                opacity: isContactOpen ? 1 : 0,
                visibility: isContactOpen ? "visible" : "hidden",
                transform: isContactOpen ? "translateY(0)" : "translateY(-10px)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }}>
                
                {/* LinkedIn */}
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "white", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn
                </a>

                {/* Email */}
                <a href="mailto:your.email@gmail.com" style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "white", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  Gmail
                </a>

                {/* Phone */}
                <a href="tel:+1234567890" style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "white", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  +1 (234) 567-890
                </a>

              </div>
            </div>
          </nav>

          {/* HERO TITLE */}
        <>
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&display=swap');
    `}
  </style>


</>

          {/* SCROLL DOWN ARROW */}
          {showArrow && (
            <div style={{
              position: "fixed",
              left: 0,
              right: 0,
              bottom: "2rem",
              display: "flex",
              justifyContent: "center",
              pointerEvents: "auto",
              zIndex: 20
            }}>
              <div
                 onClick={scrollToProjects}
                 style={{
                   flexDirection: "column",
                   width: "100px",
                   height: "100px",
                   color: "white",
                   backgroundColor: "transparent",
                   borderRadius: "10%",
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "center",
                   cursor: "pointer",
                   transition: "transform 0.3s ease",
                 }}
                 onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                 onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
               >
                 <img 
                   src="/arrow.png" 
                   alt="Scroll Down" 
                   style={{ 
                     width: "50px", 
                     transform: "rotate(90deg)",
                     filter: "brightness(0) invert(1)" // white color
                   }} 
                 />
                 Scroll Down
               </div>
             </div>
          )}
        </section>

        {/* PROJECTS SECTION (Solid Black Curtain) */}
        <div id="projects" style={{ pointerEvents: "auto" }}>
          <Projects />
        </div>

      </div>
    </div>
  );
}