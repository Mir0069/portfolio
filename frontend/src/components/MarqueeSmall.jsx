import React from 'react';

export default function MarqueeSmall({ speed = "35s" }) {
  return (
    <div className="marquee-small-container" style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '1rem 0', background: '#050505', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      
      <style>{`
        .marquee-small-track {
          display: flex;
          width: fit-content;
          /* REVERSED: Started at -50% and moved to 0 */
          animation: scroll-small-reverse ${speed} linear infinite;
        }

        .marquee-small-item {
          display: flex;
          align-items: center;
          white-space: nowrap;
          font-size: 0.85rem;
          font-family: 'Syne', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.6);
        }

        .marquee-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #55aaff;
          box-shadow: 0 0 8px rgba(85, 170, 255, 0.8);
          margin: 0 3vw;
        }

        /* REVERSED: Translation logic flipped */
        @keyframes scroll-small-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      
      <div className="marquee-small-track">
        
        {/* --- FIRST HALF --- */}
        <span className="marquee-small-item"><span className="marquee-dot"></span>Tell me what you're building</span>
        <span className="marquee-small-item"><span className="marquee-dot"></span>Remote-friendly</span>
        <span className="marquee-small-item"><span className="marquee-dot"></span>Replies within 48 hours</span>
        <span className="marquee-small-item"><span className="marquee-dot"></span>Timezone: IST (Mumbai)</span>
        
        <span className="marquee-small-item"><span className="marquee-dot"></span>Tell me what you're building</span>
        <span className="marquee-small-item"><span className="marquee-dot"></span>Remote-friendly</span>
        <span className="marquee-small-item"><span className="marquee-dot"></span>Replies within 48 hours</span>
        <span className="marquee-small-item"><span className="marquee-dot"></span>Timezone: IST (Mumbai)</span>

        {/* --- SECOND HALF --- */}
        <span className="marquee-small-item"><span className="marquee-dot"></span>Tell me what you're building</span>
        <span className="marquee-small-item"><span className="marquee-dot"></span>Remote-friendly</span>
        <span className="marquee-small-item"><span className="marquee-dot"></span>Replies within 48 hours</span>
        <span className="marquee-small-item"><span className="marquee-dot"></span>Timezone: IST (Mumbai)</span>
        
        <span className="marquee-small-item"><span className="marquee-dot"></span>Tell me what you're building</span>
        <span className="marquee-small-item"><span className="marquee-dot"></span>Remote-friendly</span>
        <span className="marquee-small-item"><span className="marquee-dot"></span>Replies within 48 hours</span>
        <span className="marquee-small-item"><span className="marquee-dot"></span>Timezone: IST (Mumbai)</span>

      </div>
    </div>
  );
}