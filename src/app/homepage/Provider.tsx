'use client';

import React, { useState } from 'react';

const Provider: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // --- Styles ---

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    padding: '80px 16px',
    background: 'linear-gradient(135deg, #fef2f2 0%, #ffffff 50%, #fce7f3 100%)',
    fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
    overflow: 'hidden',
  };

  const innerContainerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  };

  const mainCardStyle: React.CSSProperties = {
    display: 'grid',
    gap: '40px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(213, 56, 56, 0.1)',
    // Angled corners
    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%)',
    padding: '48px',
    position: 'relative',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.05)',
  };

  // --- Left Content Styles ---

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 16px',
    background: 'rgba(17, 24, 39, 0.9)', // Dark badge for contrast
    color: 'white',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '24px',
    clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '800',
    marginBottom: '16px',
    textTransform: 'uppercase',
    lineHeight: '1.1',
    color: '#111',
  };

  const highlightTextStyle: React.CSSProperties = {
    color: '#d53838',
  };

  const descStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#6b7280',
    marginBottom: '32px',
    lineHeight: '1.6',
    maxWidth: '480px',
  };

  const listStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '40px',
  };

  const listItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    fontSize: '15px',
    fontWeight: '500',
    color: '#374151',
  };

  const checkIconStyle: React.CSSProperties = {
    minWidth: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '2px solid #d53838',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#d53838',
    fontSize: '12px',
    marginTop: '2px',
    background: 'rgba(213, 56, 56, 0.1)',
  };

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
    clipPath: 'polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)', // Tech shape
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
  };

  // --- Right Content (Info Card) Styles ---

  const infoCardStyle: React.CSSProperties = {
    background: '#d53838', // Red background for the info card
    color: 'white',
    padding: '40px',
    position: 'relative',
    // Inverted angled corners
    clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 10%)',
    boxShadow: '0 20px 40px rgba(213, 56, 56, 0.3)',
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
  };

  const infoTitleStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '8px',
    color: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const infoTextStyle: React.CSSProperties = {
    fontSize: '15px',
    marginBottom: '24px',
    lineHeight: '1.6',
    color: 'white',
    fontWeight: '500',
  };

  const decorativeLineStyle: React.CSSProperties = {
    width: '100%',
    height: '1px',
    background: 'rgba(255, 255, 255, 0.2)',
    marginBottom: '24px',
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
    <section id="provider" style={containerStyle}>
      {/* Background Ambience */}
      <div style={particleStyle('400px', '20%', '-10%', '0s')}></div>
      <div style={particleStyle('300px', '-10%', '80%', '2s')}></div>

      <div style={innerContainerStyle}>
        <div style={mainCardStyle}>
          
          {/* Left Column: Content */}
          <div>
            <div style={badgeStyle}>
              <span className="pulse-dot-white"></span>
              Recruitment Open
            </div>

            <h2 style={titleStyle}>
              Become a <span style={highlightTextStyle}>Tiffin Provider</span>
            </h2>

            <p style={descStyle}>
              Initialize your kitchen node. List your service, pass verification protocols, and establish a connection with local offices and students.
            </p>

            <div style={listStyle}>
              <div style={listItemStyle}>
                <div style={checkIconStyle}>✓</div>
                <span>Zero entry cost protocol (No listing fee)</span>
              </div>
              <div style={listItemStyle}>
                <div style={checkIconStyle}>✓</div>
                <span>Full dashboard control: Menu, Pricing, Logistics</span>
              </div>
              <div style={listItemStyle}>
                <div style={checkIconStyle}>✓</div>
                <span>Trust certification badges upon hygiene verification</span>
              </div>
            </div>

            <button 
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#d53838';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(213, 56, 56, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#111';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Initiate Signup
              <span style={{ fontSize: '18px' }}>→</span>
            </button>
          </div>

          {/* Right Column: Info Card */}
          <div 
            style={infoCardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Tech Pattern Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              opacity: 0.3,
              pointerEvents: 'none',
            }}></div>

            <div style={infoTitleStyle}>
              <span style={{ width: '6px', height: '6px', background: 'white', borderRadius: '50%' }}></span>
              Eligibility Criteria
            </div>
            <p style={infoTextStyle}>
              Home chefs, small tiffin centers, and cloud kitchens capable of delivering consistent daily nutritional payloads.
            </p>

            <div style={decorativeLineStyle}></div>

            <div style={infoTitleStyle}>
              <span style={{ width: '6px', height: '6px', background: 'white', borderRadius: '50%' }}></span>
              Required Documentation
            </div>
            <p style={{ ...infoTextStyle, marginBottom: 0 }}>
              Basic food safety certification, sample menu data, and facility imagery for verification scanning.
            </p>

            {/* Decorative Icon */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              opacity: 0.2,
            }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
              </svg>
            </div>
          </div>

          {/* Decorative Corner Ticks for Main Card */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '40px', borderTop: '2px solid #d53838', borderLeft: '2px solid #d53838' }}></div>
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: '40px', height: '40px', borderBottom: '2px solid #d53838', borderRight: '2px solid #d53838' }}></div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700;800&display=swap');

        .pulse-dot-white {
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 8px white;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default Provider;