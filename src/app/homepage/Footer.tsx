'use client';

import React from 'react';

const Footer: React.FC = () => {
  // --- Styles ---

  const footerStyle: React.CSSProperties = {
    position: 'relative',
    marginTop: '60px',
    padding: '60px 20px 40px 20px',
    background: '#050505',
    color: 'rgba(255, 255, 255, 0.6)',
    fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
    // Tech shape: Cut top-left corner
    clipPath: 'polygon(0 20px, 40px 0, 100% 0, 100% 100%, 0 100%)',
    borderTop: '1px solid rgba(213, 56, 56, 0.3)',
    // CRITICAL FIX: overflow hidden prevents the scanline animation from creating a side scrollbar
    overflow: 'hidden', 
    width: '100%',
    boxSizing: 'border-box'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    position: 'relative',
    zIndex: 2, // Ensure text is above background effects
  };

  const topRowStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '40px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    paddingBottom: '40px',
  };

  const brandColumnStyle: React.CSSProperties = {
    maxWidth: '300px',
  };

  const logoTextStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: '800',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const logoDotStyle: React.CSSProperties = {
    width: '10px',
    height: '10px',
    background: '#d53838',
    borderRadius: '50%',
    boxShadow: '0 0 10px #d53838',
  };

  const descStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#6b7280',
    lineHeight: '1.6',
  };

  const linkGroupStyle: React.CSSProperties = {
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap',
  };

  const linkStyle: React.CSSProperties = {
    color: '#d1d5db',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    position: 'relative',
    transition: 'color 0.3s ease',
  };

  const bottomRowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '12px',
    color: '#4b5563',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const statusBadgeStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '4px 12px',
    background: 'rgba(213, 56, 56, 0.1)',
    border: '1px solid rgba(213, 56, 56, 0.2)',
    borderRadius: '2px',
    color: '#d53838',
    fontWeight: '700',
  };

  // Decorative Elements (CSS only, NO Canvas)
  const gridBackgroundStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '300px',
    height: '100%',
    // Pure CSS Grid Pattern
    backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    pointerEvents: 'none',
    opacity: 0.5,
    zIndex: 1,
  };

  const scanLineStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, #d53838, transparent)',
    animation: 'scanLine 4s linear infinite',
    zIndex: 3,
  };

  return (
    <footer style={footerStyle} className="sci-fi-footer">
      {/* Background Tech Grid (CSS) */}
      <div style={gridBackgroundStyle}></div>

      {/* Top Red Laser Scanner */}
      <div style={scanLineStyle}></div>

      <div style={containerStyle}>
        {/* Top Section */}
        <div style={topRowStyle}>
          <div style={brandColumnStyle}>
            <div style={logoTextStyle}>
              <span style={logoDotStyle}></span>
              TIFFIN OS
            </div>
            <p style={descStyle}>
              Next-gen nutritional logistics. Decentralized kitchen network verified for optimal hygiene and delivery latency.
            </p>
          </div>

          <nav style={linkGroupStyle}>
            <a href="#hero" className="footer-link" style={linkStyle}>Command Center</a>
            <a href="#plans" className="footer-link" style={linkStyle}>Subscription Nodes</a>
            <a href="#provider" className="footer-link" style={linkStyle}>Provider Protocol</a>
            <a href="#contact" className="footer-link" style={linkStyle}>Secure Comms</a>
          </nav>
        </div>

        {/* Bottom Section */}
        <div style={bottomRowStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
             <span>© 2024 TIFFIN NETWORK</span>
             <span style={{ color: '#374151' }}>|</span>
             <span>SYS.VER 2.4.0</span>
          </div>

          <div style={statusBadgeStyle}>
            <span className="blink">●</span>
            SYSTEM ONLINE
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700;800&display=swap');

        .footer-link:hover {
          color: #d53838 !important;
          text-shadow: 0 0 10px rgba(213, 56, 56, 0.5);
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 1px;
          background: #d53838;
          transition: width 0.3s ease;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        @media (max-width: 640px) {
          .sci-fi-footer {
             text-align: center;
          }
          /* Force column layout on mobile to prevent overflow */
          div[style*="justify-content: space-between"] {
            justify-content: center !important;
          }
          div[style*="align-items: flex-start"] {
             align-items: center !important;
          }
        }

        .blink {
          animation: blink 1s infinite step-start;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        @keyframes scanLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;