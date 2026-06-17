import React, { useEffect, useRef, useState } from "react";

export default function Experience() {
  const containerRef = useRef(null);
  const [targetProgress, setTargetProgress] = useState(0);
  const [lerpedProgress, setLerpedProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on container's position relative to the viewport center
      const startTrigger = windowHeight * 0.6; 
      const totalScrollable = rect.height;
      const currentScroll = startTrigger - rect.top;
      
      let progress = (currentScroll / totalScrollable) * 100;
      
      if (progress < 0) progress = 0;
      if (progress > 100) progress = 100;
      
      setTargetProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let animationFrameId;
    
    const render = () => {
      setLerpedProgress(prev => {
        // Lerp with a factor of 0.05 for a "good delay" (inertia)
        const diff = targetProgress - prev;
        if (Math.abs(diff) < 0.1) return targetProgress;
        return prev + diff * 0.05;
      });
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetProgress]);

  const careerData = [
    {
      role: "AI Engineer",
      company: "AmberFlux Edge AI Pvt Ltd",
      date: "NOW",
      desc: "Working with AmberFlux Edge AI Pvt Ltd, developing intelligent edge AI solutions and contributing to advanced machine learning projects."
    },
    {
      role: "B.E. Computer Science",
      company: "Thadomal Shahani Engineering College",
      date: "NOW",
      desc: "Pursuing Bachelor of Engineering with a CGPA of 8.71. Focusing on Data Structures, Algorithms, OOP, DBMS, and Operating Systems."
    },
    {
      role: "Web Dev & Ops Intern",
      company: "La'Mina Pvt Ltd",
      date: "2025",
      desc: "Improved client visibility by 20% through business website creation using Justdial's tools. Supported operations, boosting inquiries by 15%."
    },
    {
      role: "Design Head",
      company: "TSEC Devs Club",
      date: "2024",
      desc: "Led UI/UX redesign of the mobile app, improving adoption by 35%. Managed digital strategy and social media, boosting engagement by 43%."
    },
    {
      role: "Junior Committee",
      company: "TSEC Codecell",
      date: "2024",
      desc: "Coordinated TSEC Hacks (300+ participants). Developed a dynamic leaderboard web app with real-time score updates."
    }
  ];

  return (
    <section className="career-section" style={{ backgroundColor: "#000", color: "white", padding: "15vh 0", position: "relative", width: "100%", overflow: "hidden" }} ref={containerRef}>
      
      <style>{`
        .career-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 5vw;
        }

        .career-container h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 500;
          text-align: center;
          margin-bottom: 5rem;
          color: #fff;
          line-height: 1.1;
        }

        .career-container h2 span {
          font-family: 'Syne', sans-serif;
          font-style: italic;
        }
        
        .career-container h2 .highlight {
          color: #55aaff;
        }

        .career-info {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }

        /* THE STATIC TIMELINE LINE */
        .career-timeline {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, rgba(85, 170, 255, 0.1), rgba(0, 119, 255, 0.5), rgba(85, 170, 255, 0.1));
          transform: translateX(-50%);
          z-index: 1;
        }

        /* THE MOVING DOT */
        .career-dot-container {
          position: absolute;
          left: 50%;
          top: 0;
          width: 2px;
          height: 100%;
          transform: translateX(-50%);
          z-index: 2;
          pointer-events: none;
        }

        .career-dot {
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 16px;
          height: 16px;
          background: #cceeff;
          border-radius: 50%;
          box-shadow: 0 0 25px 8px rgba(85, 170, 255, 0.8), 0 0 10px 2px #fff;
        }

        /* THE BOXES */
        .career-info-box {
          position: relative;
          z-index: 3;
          display: flex;
          width: 100%;
          align-items: center;
        }

        .career-info-in {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 50%;
          padding-right: 4vw; /* Gap to the center line */
        }

        .career-role {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .career-role h4 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.2rem, 2vw, 1.8rem);
          font-weight: 700;
          margin: 0;
          color: #fff;
        }

        .career-role h5 {
          font-family: monospace;
          font-size: clamp(0.85rem, 1vw, 1rem);
          color: #a0a0a0;
          margin: 0.5rem 0 0 0;
          font-weight: 400;
        }

        .career-info-in h3 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3.5rem); /* Made date larger like the screenshot */
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          padding-left: 2rem;
          text-align: right; 
        }

        .career-info-box p {
          width: 50%;
          padding-left: 4vw; /* Gap to the center line */
          font-family: 'Syne', sans-serif;
          font-size: clamp(0.9rem, 1.1vw, 1.05rem);
          line-height: 1.7;
          color: #909090;
          margin: 0;
        }

        /* Fade Up Animation Class */
        .fade-up-item {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fade-up-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* RESPONSIVENESS */
        @media (max-width: 768px) {
          .career-timeline, .career-dot-container {
            left: 20px;
            transform: none;
          }
          
          .career-info {
            gap: 4rem;
          }

          .career-info-box {
            flex-direction: column;
            align-items: flex-start;
          }

          .career-info-in {
            width: 100%;
            padding-left: 50px;
            padding-right: 0;
            justify-content: flex-start;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
            margin-bottom: 1rem;
          }

          .career-role {
            width: 100%;
          }

          .career-info-box p {
            width: 100%;
            padding-left: 50px;
            padding-right: 0;
            font-size: 1rem;
            text-align: left;
          }
          
          .career-info-in h3 {
            order: -1;
            font-size: 2rem;
            color: #55aaff;
            width: 100%;
            text-align: left;
            padding-left: 0;
          }
        }
      `}</style>

      <div className="career-container">
        <h2>My career <span>&amp;</span><br /> <span className="highlight">experience</span></h2>
        
        <div className="career-info">
          {/* Static faded line */}
          <div className="career-timeline"></div>
          
          {/* Smoothly translating dot */}
          <div className="career-dot-container">
            <div className="career-dot" style={{ top: `${lerpedProgress}%` }}></div>
          </div>
          
          {careerData.map((item, index) => {
            const itemTrigger = (index / Math.max(1, careerData.length - 1)) * 100;
            const isVisible = lerpedProgress > itemTrigger - 20;
            
            return (
              <div 
                className={`career-info-box fade-up-item ${isVisible ? 'visible' : ''}`}
                key={index}
              >
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>{item.role}</h4>
                    <h5>{item.company}</h5>
                  </div>
                  <h3>{item.date}</h3>
                </div>
                <p>{item.desc}</p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}