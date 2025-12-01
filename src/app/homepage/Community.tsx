'use client';

import React, { useState } from 'react';

const Community: React.FC = () => {
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
    display: 'flex',
    flexDirection: 'column', // Default mobile
    gap: '40px',
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(213, 56, 56, 0.2)',
    padding: '48px',
    // Tech shape: Cut corners
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.05)',
    position: 'relative',
  };

  // Responsive switch for desktop
  const desktopFlexStyle = {
    '@media (min-width: 768px)': {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    }
  };

  const contentSideStyle: React.CSSProperties = {
    flex: '1',
    maxWidth: '600px',
  };

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
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '800',
    marginBottom: '16px',
    textTransform: 'uppercase',
    lineHeight: '1.1',
    color: '#111',
  };

  const descStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#6b7280',
    marginBottom: '32px',
    lineHeight: '1.6',
  };

  const listStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  const listItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '15px',
    fontWeight: '600',
    color: '#374151',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const bulletStyle: React.CSSProperties = {
    width: '8px',
    height: '8px',
    background: '#d53838',
    transform: 'rotate(45deg)', // Diamond shape
  };

  // --- Terminal/Forum Preview Styles ---

  const terminalWrapperStyle: React.CSSProperties = {
    flex: '0 0 auto',
    width: '100%',
    maxWidth: '400px',
    position: 'relative',
    animation: 'float 6s ease-in-out infinite',
  };

  const terminalCardStyle: React.CSSProperties = {
    background: '#111',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '24px',
    color: 'white',
    // Inverted tech corner
    clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 10%)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    position: 'relative',
  };

  const terminalHeaderStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    paddingBottom: '12px',
  };

  const terminalTitleStyle: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#6b7280',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const chatBubbleStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.05)',
    borderLeft: '2px solid #d53838',
    padding: '16px',
    marginBottom: '20px',
  };

  const userLabelStyle: React.CSSProperties = {
    fontSize: '11px',
    color: '#d53838',
    fontWeight: '700',
    marginBottom: '4px',
    display: 'block',
    textTransform: 'uppercase',
  };

  const messageTextStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#e5e7eb',
    lineHeight: '1.4',
    fontFamily: '"Rajdhani", sans-serif', // Monospaced feel
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    background: isHovered ? '#d53838' : 'transparent',
    color: isHovered ? 'white' : '#d53838',
    border: '1px solid #d53838',
    fontWeight: '700',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
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
    <section id="community" style={containerStyle}>
      {/* Background Ambience */}
      <div style={particleStyle('350px', '-10%', '-10%', '0s')}></div>
      <div style={particleStyle('250px', '70%', '85%', '2s')}></div>

      <div style={innerContainerStyle}>
        
        {/* Main Glass Panel */}
        <div style={mainCardStyle} className="community-card">
          
          {/* Left: Info */}
          <div style={contentSideStyle}>
            <div style={badgeStyle}>
              <span className="pulse-dot"></span>
              Node: Community
            </div>

            <h2 style={titleStyle}>
              User Data <span style={{ color: '#d53838' }}>Exchange</span>
            </h2>

            <p style={descStyle}>
              Access shared protocols. Observe how other units manage daily nutritional intake, download recipes, and identify high-value providers in your sector.
            </p>

            <div style={listStyle}>
              <div style={listItemStyle}>
                <div style={bulletStyle}></div>
                <span>Meal Prep Efficiency Hacks</span>
              </div>
              <div style={listItemStyle}>
                <div style={bulletStyle}></div>
                <span>Operator Logs from Home Kitchens</span>
              </div>
              <div style={listItemStyle}>
                <div style={bulletStyle}></div>
                <span>Sector-Specific Tiffin Guides</span>
              </div>
            </div>
          </div>

          {/* Right: Terminal Preview */}
          <div style={terminalWrapperStyle}>
            <div style={terminalCardStyle}>
              {/* Header */}
              <div style={terminalHeaderStyle}>
                <div style={terminalTitleStyle}>
                  <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 5px #22c55e' }}></span>
                  Live Comms Feed
                </div>
                <div style={{ fontSize: '10px', color: '#4b5563' }}>CH-01</div>
              </div>

              {/* Message */}
              <div style={chatBubbleStyle}>
                <span style={userLabelStyle}>User_ID: Rohan_K [Powai Sector]</span>
                <p style={messageTextStyle}>
                  "Query: Identifying optimal veg providers near Powai. Latency requirements: Low. Recommendations?"
                </p>
              </div>

              <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '16px', fontStyle: 'italic' }}>
                &gt; 12 Units responding...
              </div>

              {/* Action Button */}
              <button 
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Establish Link
                <span style={{ transform: isHovered ? 'translateX(4px)' : 'none', transition: 'transform 0.3s' }}>»</span>
              </button>

              {/* Decorative Tech Elements */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '20px', height: '20px', borderTop: '2px solid #d53838', borderRight: '2px solid #d53838' }}></div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '20px', height: '20px', borderBottom: '2px solid #d53838', borderLeft: '2px solid #d53838' }}></div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700;800&display=swap');

        .community-card {
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 768px) {
          .community-card {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

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
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default Community;