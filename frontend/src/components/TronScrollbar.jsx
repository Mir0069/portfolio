import React, { useState, useEffect, useRef } from 'react';

const TronScrollbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  // Track scroll progress inside the container
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const totalHeight = container.scrollHeight - container.clientHeight;
    if (totalHeight === 0) return;

    const progress = (container.scrollTop / totalHeight) * 100;
    setScrollProgress(progress);
  };

  return (
    <div className="flex h-screen w-full bg-black text-white font-mono p-8 justify-center items-center">
      {/* Main UI Window */}
      <div className="relative w-full max-w-4xl h-[500px] border border-cyan-900/30 bg-[#05070a] rounded-sm flex overflow-hidden">
        
        {/* Left Side: Scrollable Content Area */}
        <div 
          ref={containerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto pr-6 scrollbar-none" // Hiding default scrollbar
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="p-6 space-y-6 text-sm text-gray-400">
            <h2 className="text-cyan-400 font-bold tracking-widest text-lg uppercase">
              // SYSTEM_LOG_DUMP //
            </h2>
            <p className="text-xs text-cyan-600/70">NEURO-OPTIC ENCLOSURE // V4.0</p>
            <hr className="border-cyan-900/50" />
            
            {/* Dummy content to force scrolling */}
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-white font-semibold">SEGMENT_0{i + 1}_ANALYSIS</h3>
                <p>
                  Subsurface scattering simulated at IOR 1.8. Thin-film interference active. 
                  Structure: Elongated parabolic capsule. Internal data filaments processing at peak luminance. 
                  Quantum state stability remains within nominal parameters.
                </p>
                <p className="text-xs text-gray-600">
                  CRITICAL_PATH_NODE_{i * 12} // LATENCY: 0.04ms // STATUS: OPERATIONAL
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Custom Tron Scrollbar */}
        <div className="w-8 border-l border-cyan-900/20 flex flex-col items-center py-4 justify-between relative bg-black/40">
          
          {/* Top Decorative Tech Notch */}
          <div className="w-2 h-[2px] bg-cyan-500/30 mb-2"></div>

          {/* Scroll Track */}
          <div className="relative flex-1 w-[4px] bg-cyan-950/40 rounded-full overflow-hidden">
            
            {/* Glowing Active Track Line (Optional background fill) */}
            <div 
              className="absolute top-0 left-0 w-full bg-cyan-950"
              style={{ height: '100%' }}
            />

            {/* Scroll Thumb (The Moving Glowing Core) */}
            <div 
              className="absolute left-0 w-full bg-cyan-400 rounded-full transition-all duration-75 ease-out"
              style={{ 
                height: '20%', // Size of the scroll thumb
                top: `${scrollProgress * 0.8}%`, // Maps 0-100% progress into the track boundaries
                boxShadow: '0 0 12px #22d3ee, 0 0 4px #22d3ee'
              }}
            />
          </div>

          {/* Bottom Decorative Tech Notch */}
          <div className="w-2 h-[2px] bg-cyan-500/30 mt-2"></div>

          {/* Digital Progress Indicator Percentage */}
          <div className="text-[9px] text-cyan-500/60 mt-2 tracking-tighter tabular-nums">
            {Math.round(scrollProgress)}%
          </div>

        </div>

      </div>
    </div>
  );
};

export default TronScrollbar;