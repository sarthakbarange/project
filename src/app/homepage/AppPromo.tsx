'use client';

import React, { useState, useEffect } from 'react';

const AppPromo: React.FC = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Simulate a loading progress bar for the "Coming Soon" effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => (prev < 94 ? prev + 1 : 94)); // Stalls at 94%
    }, 100);
    return () => clearInterval(interval);
  }, []);

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

  const cardStyle: React.CSSProperties = {
    background: '#0a0a0a', // Dark screen aesthetic
    color: 'white',
    padding: '48px',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    position: 'relative',
    // Tech shape: Cut corner bottom-right
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
  };

  // Responsive layout handling via CSS class (simulated here with simple logic or media queries in style tag)
  const desktopLayout = {
    '@media (min-width: 768px)': {
      flexDirection: 'row',
      alignItems: 'center',
    }
  };

  const leftContentStyle: React.CSSProperties = {
    flex: 1,
    zIndex: 2,
  };

  const badgeContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    marginBottom: '24px',
  };

  const badgeStyle: React.CSSProperties = {
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    padding: '6px 12px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#9ca3af',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '800',
    marginBottom: '16px',
    textTransform: 'uppercase',
    lineHeight: '1',
    background: 'linear-gradient(90deg, #fff 0%, #999 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const descStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#9ca3af',
    marginBottom: '32px',
    maxWidth: '480px',
    lineHeight: '1.6',
  };

  // Progress Bar Styles
  const progressContainerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '300px',
    height: '4px',
    background: 'rgba(255, 255, 255, 0.1)',
    marginBottom: '8px',
    position: 'relative',
    overflow: 'hidden',
  };

  const progressBarInnerStyle: React.CSSProperties = {
    height: '100%',
    width: `${loadingProgress}%`,
    background: '#d53838',
    boxShadow: '0 0 10px #d53838',
    transition: 'width 0.1s linear',
  };

  const progressTextStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#d53838',
    fontFamily: 'monospace',
    marginBottom: '32px',
    display: 'block',
  };

  // Right Side (Form)
  const formCardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '380px',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '24px',
    position: 'relative',
    zIndex: 2,
    backdropFilter: 'blur(5px)',
  };

  const formLabelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '12px',
    color: '#d53838',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '16px',
  };

  const inputGroupStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0',
    position: 'relative',
  };

  const inputStyle: React.CSSProperties = {
    flex: 1,
    background: 'transparent',
    border: 'none',
    borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
    padding: '12px 0',
    color: 'white',
    fontSize: '14px',
    outline: 'none',
    fontFamily: '"Rajdhani", sans-serif',
    transition: 'border-color 0.3s',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '12px 24px',
    background: '#d53838',
    color: 'white',
    border: 'none',
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: '12px',
    letterSpacing: '1px',
    cursor: 'pointer',
    clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)', // Tech shape
    marginLeft: '16px',
    transition: 'all 0.3s ease',
  };

  // Decorative grid background inside the card
  const gridBackgroundStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
    zIndex: 1,
    pointerEvents: 'none',
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
    <section id="app" style={containerStyle}>
      {/* Background Ambience */}
      <div style={particleStyle('300px', '-10%', '80%', '0s')}></div>
      <div style={particleStyle('200px', '80%', '10%', '2s')}></div>

      <div style={innerContainerStyle}>
        <div style={cardStyle} className="app-promo-card">
          <div style={gridBackgroundStyle}></div>
          
          {/* Border Glow Animation */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #d53838, transparent)',
            animation: 'scan 3s linear infinite',
            zIndex: 3
          }}></div>

          {/* Left Content */}
          <div style={leftContentStyle}>
            <div style={badgeContainerStyle}>
              <span style={badgeStyle}>
                <span className="pulse-dot"></span>
                System: iOS / Android
              </span>
              <span style={badgeStyle}>Ver: 1.0 Alpha</span>
            </div>

            <h2 style={titleStyle}>
              Mobile Interface <br />
              <span style={{ color: '#d53838' }}>Initializing...</span>
            </h2>

            <p style={descStyle}>
              Establish remote connection. Track your nutritional payload, modify subscription protocols, and analyze consumption data on the move.
            </p>

            {/* Loading Bar */}
            <div style={progressContainerStyle}>
              <div style={progressBarInnerStyle}></div>
            </div>
            <span style={progressTextStyle}>
              &gt; INSTALLATION PROGRESS: {loadingProgress}%
            </span>

            <div style={badgeContainerStyle}>
              <span style={badgeStyle}>Get Launch Updates</span>
              <span style={badgeStyle}>Priority Access</span>
            </div>
          </div>

          {/* Right Content: Input Form */}
          <div style={formCardStyle}>
            <label htmlFor="app-email" style={formLabelStyle}>
              Request Access Key
            </label>
            
            <div style={inputGroupStyle}>
              <input
                id="app-email"
                type="email"
                placeholder="USER_ID@EMAIL.COM"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#d53838'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
              />
              <button 
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = '#d53838';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#d53838';
                  e.currentTarget.style.color = 'white';
                }}
              >
                Notify
              </button>
            </div>

            {/* Decorative Tech Corner */}
            <div style={{
              position: 'absolute',
              top: '0',
              right: '0',
              width: '10px',
              height: '10px',
              borderTop: '2px solid #d53838',
              borderRight: '2px solid #d53838'
            }}></div>
             <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '10px',
              height: '10px',
              borderBottom: '2px solid #d53838',
              borderLeft: '2px solid #d53838'
            }}></div>
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700;800&display=swap');

        .app-promo-card {
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 768px) {
          .app-promo-card {
            flex-direction: row;
            align-items: center;
          }
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          background: #d53838;
          border-radius: 50%;
          box-shadow: 0 0 8px #d53838;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }

        @keyframes scan {
          0% { left: -100%; }
          100% { left: 100%; }
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

export default AppPromo;