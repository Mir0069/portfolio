export default function ResumeButton() {
  return (
    <>
      {/* We inject the CSS keyframes directly here so this remains a 
        clean, single-file component without needing external CSS files.
      */}
      <style>
        {`
          .liquid-btn {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            z-index: 100;
            pointer-events: auto;
            padding: 1.2rem 2.5rem;
            
            /* LIQUID GLASS EFFECT */
            background: rgba(85, 170, 255, 0.05);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border-radius: 50px; /* Pill shape */
            border: none; /* No hard borders */
            
            /* The inset shadow creates the "glass edge" illusion */
            box-shadow: 
              inset 0 0 20px rgba(85, 170, 255, 0.15),
              inset 0 2px 5px rgba(255, 255, 255, 0.1),
              0 8px 32px rgba(0, 0, 0, 0.5);
              
            color: white;
            text-decoration: none;
            font-family: monospace;
            font-size: 1rem;
            letter-spacing: 0.15em;
            cursor: pointer;
            overflow: hidden; /* Keeps the dino inside the glass */
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }

          /* Hover Glow */
          .liquid-btn:hover {
            background: rgba(85, 170, 255, 0.15);
            box-shadow: 
              inset 0 0 30px rgba(85, 170, 255, 0.3),
              inset 0 2px 5px rgba(255, 255, 255, 0.2),
              0 0 20px rgba(85, 170, 255, 0.4);
            transform: translateY(-3px);
          }

          .btn-text {
            position: relative;
            z-index: 2;
          }

          /* The Dinosaur Setup */
          .dino {
            position: absolute;
            left: -50px; /* Hidden outside the left edge */
            top: 50%;
            transform: translateY(-50%);
            width: 35px; /* Adjust this based on your SVG's actual size */
            height: auto;
            z-index: 3;
            pointer-events: none;
          }

          /* TRIGGER ANIMATIONS ON HOVER */
          .liquid-btn:hover .dino {
            animation: dinoSprint 1s linear forwards;
          }

          .liquid-btn:hover .btn-text {
            animation: textChomp 1s linear forwards;
          }

          /* DINO RUNNING KEYFRAMES (Adds a slight running bounce) */
          @keyframes dinoSprint {
            0%   { left: -50px; transform: translateY(-50%); }
            10%  { transform: translateY(-65%) rotate(10deg); }
            20%  { transform: translateY(-50%) rotate(0deg); }
            30%  { transform: translateY(-65%) rotate(10deg); }
            40%  { transform: translateY(-50%) rotate(0deg); }
            50%  { transform: translateY(-65%) rotate(10deg); }
            60%  { transform: translateY(-50%) rotate(0deg); }
            70%  { transform: translateY(-65%) rotate(10deg); }
            80%  { transform: translateY(-50%) rotate(0deg); }
            100% { left: 120%; transform: translateY(-50%); } /* Runs off the right edge */
          }

          /* TEXT EATEN KEYFRAMES */
          @keyframes textChomp {
            0%, 35% { opacity: 1; transform: scale(1); }
            45% { opacity: 0; transform: scale(0.8); } /* Text vanishes as Dino crosses center */
            75% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); } /* Text pops back */
          }
        `}
      </style>

      <a
        href="/resume.pdf"
        download="Mirchandani_Resume.pdf"
        className="liquid-btn"
      >
        <span className="btn-text">RESUME</span>
        {/* Make sure dino.svg is in your public folder! */}
        <img src="/dino.svg" alt="Running Dino" className="dino" />
      </a>
    </>
  );
}