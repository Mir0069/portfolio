// About.jsx
export default function About() {
  return (
    <section 
      style={{
        // 1. Make it at least the height of the screen
        minHeight: "100vh",
        // 2. Pitch black background hides the fixed Canvas underneath
        backgroundColor: "#000", 
        // 3. Ensure it sits on top of the Canvas
        position: "relative",
        zIndex: 10,
        // 4. Re-enable pointer events so users can highlight text or click links here
        pointerEvents: "auto",
        
        // Just some basic styling
        padding: "120px 10%",
        color: "white",
        borderTop: "1px solid rgba(255,255,255,0.1)" // Optional subtle line to show the section start
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "4rem", fontWeight: 300, marginBottom: "2rem", color: "#55aaff" }}>
          ABOUT.
        </h2>
        <p style={{ fontSize: "1.5rem", lineHeight: 1.8, opacity: 0.8 }}>
          I am a creative developer specializing in WebGL, interactive experiences, 
          and high-performance frontend architectures. When you scroll down to this 
          section, the 3D canvas is completely hidden behind this black div.
        </p>
      </div>
    </section>
  );
}