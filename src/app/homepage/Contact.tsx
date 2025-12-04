'use client';

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // --- Styles ---

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    padding: '80px 16px',
    background: '#fde1af',
    fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
    color: '#673200',
    overflow: 'hidden',
    width: '100%',
    boxSizing: 'border-box',
  };

  const innerContainerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gap: '60px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    alignItems: 'start',
  };

  // --- Left Content ---

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 16px',
    background: 'rgba(103, 50, 0, 0.1)',
    border: '1px solid rgba(103, 50, 0, 0.3)',
    color: '#673200',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '24px',
    clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%, 0% 25%)',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '800',
    marginBottom: '24px',
    textTransform: 'uppercase',
    lineHeight: '1',
    color: '#673200',
    textShadow: '2px 2px 0px rgba(103, 50, 0, 0.15)',
  };

  const descStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#673200',
    marginBottom: '40px',
    lineHeight: '1.6',
    maxWidth: '480px',
    opacity: 0.85,
  };

  const contactInfoStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    borderLeft: '2px solid rgba(103, 50, 0, 0.3)',
    paddingLeft: '24px',
  };

  const infoItemStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
  };

  const infoLabelStyle: React.CSSProperties = {
    fontSize: '11px',
    fontWeight: '700',
    color: '#673200',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '4px',
  };

  const infoValueStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#673200',
    fontFamily: '"Rajdhani", sans-serif',
  };

  // --- Right Content (Form) ---

  const formCardStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(103, 50, 0, 0.2)',
    padding: '40px',
    clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)',
    boxShadow: '0 20px 50px rgba(103, 50, 0, 0.1)',
    position: 'relative',
  };

  const formGridStyle: React.CSSProperties = {
    display: 'grid',
    gap: '24px',
    marginBottom: '24px',
    gridTemplateColumns: '1fr',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '12px',
    fontWeight: '700',
    color: '#673200',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const inputStyle = (fieldName: string): React.CSSProperties => ({
    width: '100%',
    background: focusedField === fieldName ? 'rgba(103, 50, 0, 0.05)' : 'rgba(0, 0, 0, 0.02)',
    border: 'none',
    borderBottom: focusedField === fieldName ? '2px solid #673200' : '2px solid rgba(103, 50, 0, 0.2)',
    padding: '12px 16px',
    fontSize: '16px',
    color: '#673200',
    outline: 'none',
    transition: 'all 0.3s ease',
    fontFamily: '"Rajdhani", sans-serif',
    fontWeight: '500',
  });

  const buttonStyle: React.CSSProperties = {
    padding: '16px 32px',
    background: '#673200',
    color: '#fde1af',
    border: 'none',
    fontWeight: '700',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    cursor: 'pointer',
    clipPath: 'polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
    justifyContent: 'center',
  };

  return (
    <section id="contact" style={containerStyle}>
      {/* Animated Background Grid & Lines */}
      <div className="tech-grid" />
      <div className="animated-lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <div className="line line-4"></div>
        <div className="line line-5"></div>
        <div className="line line-6"></div>
      </div>

      <div style={innerContainerStyle}>
        <div style={gridStyle}>
          
          {/* Left Column: Info */}
          <div>
            <div style={badgeStyle}>
              <span className="pulse-dot"></span>
              Secure Channel
            </div>
            
            <h2 style={titleStyle}>
              Establish <br />
              <span style={{ color: '#8b4513' }}>Uplink</span>
            </h2>
            
            <p style={descStyle}>
              Encountering anomalies? Transmit your query. Our support node is active and ready to assist with partnership protocols or system feedback.
            </p>
            
            <div style={contactInfoStyle}>
              <div style={infoItemStyle}>
                <span style={infoLabelStyle}>Comm Vector (Email)</span>
                <span style={infoValueStyle}>support@tiffinos.com</span>
              </div>
              <div style={infoItemStyle}>
                <span style={infoLabelStyle}>Operational Window</span>
                <span style={infoValueStyle}>10:00 - 19:00 (Mon-Sat)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div style={formCardStyle}>
            {/* Tech Decoration */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '40px',
              height: '40px',
              borderTop: '2px solid rgba(103, 50, 0, 0.3)',
              borderRight: '2px solid rgba(103, 50, 0, 0.3)',
              pointerEvents: 'none'
            }}></div>

            <div style={{ marginBottom: '32px', borderBottom: '1px solid rgba(103, 50, 0, 0.1)', paddingBottom: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', textTransform: 'uppercase', color: '#673200' }}>Transmission Data</h3>
            </div>

            <div style={formGridStyle}>
              <div>
                <label htmlFor="contact-name" style={labelStyle}>Identity</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="ENTER NAME"
                  style={inputStyle('name')}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
              <div>
                <label htmlFor="contact-email" style={labelStyle}>Return Vector</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="ENTER EMAIL"
                  style={inputStyle('email')}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label htmlFor="contact-message" style={labelStyle}>Data Packet</label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="TYPE MESSAGE..."
                style={{ ...inputStyle('message'), resize: 'vertical' }}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            <button 
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#8b4513';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(139, 69, 19, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#673200';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Initiate Transmission
              <span>»</span>
            </button>
            
            {/* Decorative Tech Corner */}
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '20px',
              height: '20px',
              background: '#673200',
              clipPath: 'polygon(0 100%, 100% 100%, 0 0)'
            }}></div>
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700;800&display=swap');

        /* Animated Tech Grid Background */
        .tech-grid {
          position: absolute;
          inset: 0;
          background: transparent;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .tech-grid::before,
        .tech-grid::after {
          content: '';
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background-image: 
            linear-gradient(90deg, transparent 0%, transparent calc(100% - 1px), rgba(103, 50, 0, 0.08) calc(100% - 1px), rgba(103, 50, 0, 0.08) 100%),
            linear-gradient(0deg, transparent 0%, transparent calc(100% - 1px), rgba(103, 50, 0, 0.08) calc(100% - 1px), rgba(103, 50, 0, 0.08) 100%);
          background-size: 80px 80px;
          animation: gridFlow 20s linear infinite;
          opacity: 0.6;
        }

        .tech-grid::after {
          background-size: 120px 120px;
          animation: gridFlow 30s linear infinite reverse;
          opacity: 0.4;
        }

        @keyframes gridFlow {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(40px, 40px) rotate(0deg);
          }
        }

        /* Diagonal flowing lines */
        .animated-lines {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
        }

        .line {
          position: absolute;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(103, 50, 0, 0.15) 50%, 
            transparent 100%);
          transform-origin: center;
        }

        .line-1 {
          width: 200%;
          height: 2px;
          top: 10%;
          left: -100%;
          animation: flowRight 15s ease-in-out infinite;
          animation-delay: 0s;
        }

        .line-2 {
          width: 2px;
          height: 200%;
          left: 20%;
          top: -100%;
          animation: flowDown 18s ease-in-out infinite;
          animation-delay: 2s;
        }

        .line-3 {
          width: 200%;
          height: 1px;
          top: 40%;
          left: -100%;
          animation: flowRight 20s ease-in-out infinite;
          animation-delay: 4s;
        }

        .line-4 {
          width: 1px;
          height: 200%;
          left: 60%;
          top: -100%;
          animation: flowDown 16s ease-in-out infinite;
          animation-delay: 6s;
        }

        .line-5 {
          width: 200%;
          height: 2px;
          top: 70%;
          left: -100%;
          animation: flowRight 22s ease-in-out infinite;
          animation-delay: 8s;
        }

        .line-6 {
          width: 2px;
          height: 200%;
          left: 80%;
          top: -100%;
          animation: flowDown 19s ease-in-out infinite;
          animation-delay: 10s;
        }

        @keyframes flowRight {
          0% {
            left: -100%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }

        @keyframes flowDown {
          0% {
            top: -100%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #673200;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(103, 50, 0, 0.7);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(103, 50, 0, 0.7); }
          70% { box-shadow: 0 0 0 6px rgba(103, 50, 0, 0); }
          100% { box-shadow: 0 0 0 0 rgba(103, 50, 0, 0); }
        }
        
        /* Responsive Grid tweak */
        @media (min-width: 640px) {
           div[style*="gridTemplateColumns: '1fr'"] {
              grid-template-columns: 1fr 1fr !important;
           }
        }
      `}</style>
    </section>
  );
};

export default Contact;