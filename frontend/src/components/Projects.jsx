import React from 'react'
import Marquee from './Marrquee'
import MarqueeSmall from './MarqueeSmall'
import ProjectList from './ProjectList'
const Projects = () => {
  return (
    <div className='100%'>
       <section 
      style={{
        // 1. Make it at least the height of the screen
        minHeight: "100vh",
        minWidth: "100%",
        // 2. Pitch black background hides the fixed Canvas underneath
        backgroundColor: "#000", 
        // 3. Ensure it sits on top of the Canvas
        position: "",
        zIndex: 10,
        // 4. Re-enable pointer events so users can highlight text or click links here
        pointerEvents: "auto",
        
        // Just some basic styling
       
        color: "white",
        borderTop: "1px solid rgba(255,255,255,0.1)" // Optional subtle line to show the section start
      }}
    >
      <div>
        
          <Marquee email="malhaarlalitmirchandani@gmail.com" />
          <MarqueeSmall speed="35s" />
          <ProjectList></ProjectList>
      </div>
    </section>
    </div>
  )
}

export default Projects
