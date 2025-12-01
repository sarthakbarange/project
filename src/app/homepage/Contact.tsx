'use client';

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // --- Styles ---

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    padding: '80px 16px',
    background: 'linear-gradient(135deg, #fef2f2 0%, #ffffff 50%, #fce7f3 100%)',
    fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
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
    background: 'rgba(213, 56, 56, 0.05)',
    border: '1px solid rgba(213, 56, 56, 0.2)',
    color: '#d53838',
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
    color: '#111',
  };

  const descStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#6b7280',
    marginBottom: '40px',
    lineHeight: '1.6',
    maxWidth: '480px',
  };

  const contactInfoStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    borderLeft: '2px solid rgba(213, 56, 56, 0.2)',
    paddingLeft: '24px',
  };

  const infoItemStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
  };

  const infoLabelStyle: React.CSSProperties = {
    fontSize: '11px',
    fontWeight: '700',
    color: '#d53838',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '4px',
  };

  const infoValueStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1f2937',
    fontFamily: '"Rajdhani", sans-serif',
  };

  // --- Right Content (Form) ---

  const formCardStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(213, 56, 56, 0.1)',
    padding: '40px',
    // Tech shape: Angled top-left and bottom-right
    clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.05)',
    position: 'relative',
  };

  const formGridStyle: React.CSSProperties = {
    display: 'grid',
    gap: '24px',
    marginBottom: '24px',
    gridTemplateColumns: '1fr', // Mobile default
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '12px',
    fontWeight: '700',
    color: '#4b5563',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const inputStyle = (fieldName: string): React.CSSProperties => ({
    width: '100%',
    background: focusedField === fieldName ? 'rgba(213, 56, 56, 0.03)' : 'rgba(0, 0, 0, 0.02)',
    border: 'none',
    borderBottom: focusedField === fieldName ? '2px solid #d53838' : '2px solid rgba(0, 0, 0, 0.1)',
    padding: '12px 16px',
    fontSize: '16px',
    color: '#111',
    outline: 'none',
    transition: 'all 0.3s ease',
    fontFamily: '"Rajdhani", sans-serif',
    fontWeight: '500',
  });

  const buttonStyle: React.CSSProperties = {
    padding: '16px 32px',
    background: '#111',
    color: 'white',
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

  // Particle Background
  const particleStyle = (size: string, top: string, left: string, delay: string): React.CSSProperties => ({
    position: 'absolute',
    width: size,
    height: size,
    top: top,
    left: left,
    background: 'linear-gradient(45deg, rgba(213, 56, 56, 0.05), rgba(255, 255, 255, 0))',
    border: '1px solid rgba(213, 56, 56, 0.1)',
    borderRadius: '50%',
    animation: `float 10s ease-in-out infinite ${delay}`,
    zIndex: 0,
    pointerEvents: 'none',
  });

  return (
    <section id="contact" style={containerStyle}>
      {/* Background Ambience */}
      <div style={particleStyle('300px', '-5%', '-5%', '0s')}></div>
      <div style={particleStyle('200px', '80%', '90%', '2s')}></div>

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
              <span style={{ color: '#d53838' }}>Uplink</span>
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
              borderTop: '2px solid rgba(213, 56, 56, 0.2)',
              borderRight: '2px solid rgba(213, 56, 56, 0.2)',
              pointerEvents: 'none'
            }}></div>

            <div style={{ marginBottom: '32px', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', textTransform: 'uppercase', color: '#111' }}>Transmission Data</h3>
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
                e.currentTarget.style.background = '#d53838';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(213, 56, 56, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#111';
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
              background: '#d53838',
              clipPath: 'polygon(0 100%, 100% 100%, 0 0)'
            }}></div>
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700;800&display=swap');

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #d53838;
          border-radius: 50%;
          box-shadow: 0 0 10px #d53838;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(213, 56, 56, 0.7); }
          70% { box-shadow: 0 0 0 6px rgba(213, 56, 56, 0); }
          100% { box-shadow: 0 0 0 0 rgba(213, 56, 56, 0); }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
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