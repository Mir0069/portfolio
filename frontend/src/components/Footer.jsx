import React from 'react';
import ScrambleText from './ScrambleText';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#050505',
      color: '#fff',
      padding: '6rem 4rem 2rem 4rem',
      position: 'relative',
      zIndex: 20,
      borderTop: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        {/* Large Contact Heading */}
        <div style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '4vw',
          fontWeight: '800',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          Let's Build Something
        </div>

        {/* Links / Contact Container */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '4rem',
          justifyContent: 'center',
          fontFamily: "monospace",
          fontSize: '0.9rem',
          letterSpacing: '0.1em',
          color: 'rgba(255, 255, 255, 0.6)'
        }}>
          
          <a href="mailto:malhaarlalitmirchandani@gmail.com" style={{
            color: 'inherit',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#55aaff'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
          >
            <ScrambleText text="EMAIL" />
          </a>

          <a href="https://www.linkedin.com/in/malhaar-mirchandani-a8188b287/" target="_blank" rel="noreferrer" style={{
            color: 'inherit',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#55aaff'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
          >
            <ScrambleText text="LINKEDIN" />
          </a>

          <a href="https://github.com/Mir0069/" target="_blank" rel="noreferrer" style={{
            color: 'inherit',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#55aaff'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
          >
            <ScrambleText text="GITHUB" />
          </a>

        </div>

        {/* Bottom Credits */}
        <div style={{
          marginTop: '6rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '2rem',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.75rem',
          color: 'rgba(255, 255, 255, 0.3)',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}>
          <div>© {new Date().getFullYear()} Malhaar Mirchandani.</div>
          <div>All rights reserved.</div>
        </div>

      </div>
    </footer>
  );
}
