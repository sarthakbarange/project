'use client';

import React, { useState, useEffect } from 'react';

const Provider: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);

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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(30px)',
    border: '2px solid rgba(213, 56, 56, 0.15)',
    borderRadius: '32px',
    padding: '60px',
    position: 'relative',
    boxShadow: '0 30px 80px rgba(213, 56, 56, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.5) inset',
    animation: 'cardFloat 6s ease-in-out infinite',
    overflow: 'hidden',
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    background: 'linear-gradient(135deg, #111 0%, #1f1f1f 100%)',
    color: 'white',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    marginBottom: '24px',
    borderRadius: '50px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    animation: 'badgePulse 3s ease-in-out infinite',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
    fontWeight: '800',
    marginBottom: '20px',
    textTransform: 'uppercase',
    lineHeight: '1.1',
    color: '#111',
    animation: 'titleSlideIn 1s ease-out',
  };

  const highlightTextStyle: React.CSSProperties = {
    color: '#d53838',
    position: 'relative',
    display: 'inline-block',
    animation: 'textGlow 2s ease-in-out infinite',
  };

  const descStyle: React.CSSProperties = {
    fontSize: '17px',
    color: '#6b7280',
    marginBottom: '36px',
    lineHeight: '1.7',
    maxWidth: '540px',
    animation: 'fadeInUp 1s ease-out 0.2s backwards',
  };

  const listStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    marginBottom: '40px',
  };

  const listItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
    fontSize: '15px',
    fontWeight: '500',
    color: '#374151',
    animation: 'slideInLeft 0.8s ease-out backwards',
    transition: 'transform 0.3s ease',
  };

  const checkIconStyle: React.CSSProperties = {
    minWidth: '24px',
    height: '24px',
    borderRadius: '50%',
    border: '2px solid #d53838',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#d53838',
    fontSize: '12px',
    marginTop: '2px',
    background: 'linear-gradient(135deg, rgba(213, 56, 56, 0.15), rgba(213, 56, 56, 0.05))',
    boxShadow: '0 0 15px rgba(213, 56, 56, 0.3)',
    animation: 'checkPulse 2s ease-in-out infinite',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '18px 40px',
    background: 'linear-gradient(135deg, #111 0%, #2a2a2a 100%)',
    color: 'white',
    border: 'none',
    fontWeight: '700',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
    cursor: 'pointer',
    borderRadius: '50px',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    animation: 'buttonFloat 3s ease-in-out infinite',
  };

  const infoCardStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #d53838 0%, #b92e2e 100%)',
    color: 'white',
    padding: '50px',
    position: 'relative',
    borderRadius: '32px',
    boxShadow: '0 30px 60px rgba(213, 56, 56, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
    animation: 'cardSlideIn 1s ease-out 0.3s backwards',
    overflow: 'hidden',
  };

  const infoTitleStyle: React.CSSProperties = {
    fontSize: '13px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
    marginBottom: '12px',
    color: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const infoTextStyle: React.CSSProperties = {
    fontSize: '16px',
    marginBottom: '28px',
    lineHeight: '1.7',
    color: 'rgba(255, 255, 255, 0.95)',
    fontWeight: '500',
  };

  const decorativeLineStyle: React.CSSProperties = {
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1))',
    marginBottom: '28px',
    animation: 'lineExpand 2s ease-out',
  };

  const particleStyle = (size: string, top: string, left: string, delay: string): React.CSSProperties => ({
    position: 'absolute',
    width: size,
    height: size,
    top: top,
    left: left,
    background: 'radial-gradient(circle, rgba(213, 56, 56, 0.1) 0%, transparent 70%)',
    border: '1px solid rgba(213, 56, 56, 0.15)',
    borderRadius: '50%',
    animation: `float 12s ease-in-out infinite ${delay}`,
    zIndex: 0,
    pointerEvents: 'none',
  });

  const glowOrbStyle = (top: string, left: string): React.CSSProperties => ({
    position: 'absolute',
    width: '300px',
    height: '300px',
    top: top,
    left: left,
    background: 'radial-gradient(circle, rgba(213, 56, 56, 0.15) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: 'pulse 8s ease-in-out infinite',
    zIndex: 0,
    pointerEvents: 'none',
  });

  return (
    <section id="provider" style={containerStyle}>
      {/* Animated Background Elements */}
      <div style={particleStyle('500px', '10%', '-15%', '0s')}></div>
      <div style={particleStyle('350px', '-5%', '75%', '3s')}></div>
      <div style={particleStyle('400px', '60%', '85%', '5s')}></div>
      <div style={glowOrbStyle('-10%', '20%')}></div>
      <div style={glowOrbStyle('70%', '60%')}></div>

      {/* Grid Pattern Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(rgba(213, 56, 56, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(213, 56, 56, 0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        opacity: 0.5,
        zIndex: 0,
        pointerEvents: 'none',
      }}></div>

      <div style={innerContainerStyle}>
        <div style={mainCardStyle}>
          
          {/* Large Transparent Food Image Behind Left Content */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '5%',
            transform: 'translateY(-50%)',
            width: '450px',
            height: '450px',
            opacity: 0.06,
            animation: 'slowRotate 30s linear infinite',
            pointerEvents: 'none',
            zIndex: 0,
          }}>
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" fill="#d53838" opacity="0.3"/>
              <path d="M100 20 Q140 40 140 80 Q140 120 100 140 Q60 120 60 80 Q60 40 100 20Z" fill="#d53838" opacity="0.5"/>
              <circle cx="100" cy="75" r="25" fill="#d53838" opacity="0.4"/>
              <ellipse cx="85" cy="70" rx="8" ry="12" fill="#fff" opacity="0.3"/>
              <ellipse cx="115" cy="70" rx="8" ry="12" fill="#fff" opacity="0.3"/>
              <path d="M75 90 Q100 105 125 90" stroke="#fff" strokeWidth="4" opacity="0.3" strokeLinecap="round"/>
              <rect x="80" y="130" width="40" height="60" rx="8" fill="#d53838" opacity="0.4"/>
              <line x1="50" y1="170" x2="150" y2="170" stroke="#d53838" strokeWidth="5" opacity="0.4" strokeLinecap="round"/>
              <circle cx="70" cy="170" r="4" fill="#d53838"/>
              <circle cx="130" cy="170" r="4" fill="#d53838"/>
            </svg>
          </div>

          {/* Small Decorative Tech Pattern */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '150px',
            height: '150px',
            opacity: 0.05,
            animation: 'rotate 20s linear infinite',
            pointerEvents: 'none',
            zIndex: 0,
          }}>
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" stroke="#d53838" strokeWidth="2"/>
              <circle cx="100" cy="100" r="60" stroke="#d53838" strokeWidth="2"/>
              <circle cx="100" cy="100" r="40" stroke="#d53838" strokeWidth="2"/>
              <path d="M100 20 L100 180 M20 100 L180 100" stroke="#d53838" strokeWidth="2"/>
              <path d="M45 45 L155 155 M155 45 L45 155" stroke="#d53838" strokeWidth="2"/>
            </svg>
          </div>

          {/* Animated Corner Accents */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '60px',
            height: '60px',
            borderTop: '3px solid #d53838',
            borderLeft: '3px solid #d53838',
            borderRadius: '12px 0 0 0',
            animation: 'cornerGlow 3s ease-in-out infinite',
            zIndex: 1,
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            width: '60px',
            height: '60px',
            borderBottom: '3px solid #d53838',
            borderRight: '3px solid #d53838',
            borderRadius: '0 0 12px 0',
            animation: 'cornerGlow 3s ease-in-out infinite 1.5s',
            zIndex: 1,
          }}></div>

          {/* Left Column: Content */}
          <div style={{ position: 'relative', zIndex: 2 }}>
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
              {[
                { text: 'Zero entry cost protocol (No listing fee)', delay: '0.4s' },
                { text: 'Full dashboard control: Menu, Pricing, Logistics', delay: '0.6s' },
                { text: 'Trust certification badges upon hygiene verification', delay: '0.8s' }
              ].map((item, index) => (
                <div 
                  key={index}
                  style={{ ...listItemStyle, animationDelay: item.delay }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(10px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={checkIconStyle}>✓</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <button 
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #d53838 0%, #b92e2e 100%)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(213, 56, 56, 0.5)';
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #111 0%, #2a2a2a 100%)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              <span>Initiate Signup</span>
              <span style={{ fontSize: '18px', transition: 'transform 0.3s ease' }}>→</span>
            </button>
          </div>

          {/* Right Column: Info Card with Transparent Image */}
          <div 
            style={infoCardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Animated Grid Pattern */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              opacity: 0.5,
              animation: 'gridMove 20s linear infinite',
              pointerEvents: 'none',
            }}></div>

            {/* Large Transparent Chef/Kitchen Image */}
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              right: '-30px',
              width: '280px',
              height: '280px',
              opacity: 0.12,
              animation: 'imageFloat 5s ease-in-out infinite',
              pointerEvents: 'none',
            }}>
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Chef Hat */}
                <ellipse cx="100" cy="80" rx="50" ry="30" fill="white"/>
                <rect x="60" y="75" width="80" height="15" fill="white"/>
                {/* Face */}
                <circle cx="100" cy="110" r="35" fill="white" opacity="0.8"/>
                {/* Body/Apron */}
                <path d="M70 130 L70 180 L130 180 L130 130 Q130 125 100 125 Q70 125 70 130Z" fill="white" opacity="0.8"/>
                {/* Spoon */}
                <ellipse cx="145" cy="140" rx="8" ry="12" fill="white" opacity="0.6"/>
                <rect x="142" y="145" width="6" height="40" fill="white" opacity="0.6"/>
                {/* Fork */}
                <rect x="52" y="140" width="6" height="45" fill="white" opacity="0.6"/>
                <rect x="50" y="137" width="2" height="8" fill="white" opacity="0.6"/>
                <rect x="54" y="137" width="2" height="8" fill="white" opacity="0.6"/>
                <rect x="58" y="137" width="2" height="8" fill="white" opacity="0.6"/>
                {/* Steam Lines */}
                <path d="M90 60 Q85 50 90 40" stroke="white" strokeWidth="2" opacity="0.4" strokeLinecap="round"/>
                <path d="M100 55 Q95 45 100 35" stroke="white" strokeWidth="2" opacity="0.4" strokeLinecap="round"/>
                <path d="M110 60 Q115 50 110 40" stroke="white" strokeWidth="2" opacity="0.4" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Small Food Icon Top Left */}
            <div style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              width: '60px',
              height: '60px',
              opacity: 0.15,
              animation: 'bounce 3s ease-in-out infinite',
              pointerEvents: 'none',
            }}>
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="60" fill="white"/>
                <circle cx="100" cy="80" r="20" fill="white" opacity="0.6"/>
                <circle cx="80" cy="95" r="15" fill="white" opacity="0.6"/>
                <circle cx="120" cy="95" r="15" fill="white" opacity="0.6"/>
                <ellipse cx="100" cy="130" rx="40" ry="10" fill="white" opacity="0.4"/>
              </svg>
            </div>

            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={infoTitleStyle}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: 'white',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px white',
                  animation: 'pulse 2s infinite',
                }}></div>
                Eligibility Criteria
              </div>
              <p style={infoTextStyle}>
                Home chefs, small tiffin centers, and cloud kitchens capable of delivering consistent daily nutritional payloads.
              </p>

              <div style={decorativeLineStyle}></div>

              <div style={infoTitleStyle}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: 'white',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px white',
                  animation: 'pulse 2s infinite 1s',
                }}></div>
                Required Documentation
              </div>
              <p style={{ ...infoTextStyle, marginBottom: 0 }}>
                Basic food safety certification, sample menu data, and facility imagery for verification scanning.
              </p>
            </div>

            {/* Animated Corner Accent on Card */}
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              width: '40px',
              height: '40px',
              borderTop: '2px solid rgba(255, 255, 255, 0.5)',
              borderRight: '2px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '0 8px 0 0',
              animation: 'fadeInScale 2s ease-out',
            }}></div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700;800&display=swap');

        .pulse-dot-white {
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 12px white;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          75% { transform: translateY(-10px) translateX(-10px); }
        }

        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); }
          50% { box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4); }
        }

        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 10px rgba(213, 56, 56, 0.3); }
          50% { text-shadow: 0 0 20px rgba(213, 56, 56, 0.6); }
        }

        @keyframes titleSlideIn {
          from { 
            opacity: 0; 
            transform: translateX(-50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes slideInLeft {
          from { 
            opacity: 0; 
            transform: translateX(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes checkPulse {
          0%, 100% { 
            box-shadow: 0 0 15px rgba(213, 56, 56, 0.3); 
          }
          50% { 
            box-shadow: 0 0 25px rgba(213, 56, 56, 0.6); 
          }
        }

        @keyframes buttonFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }

        @keyframes cardSlideIn {
          from { 
            opacity: 0; 
            transform: translateX(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes lineExpand {
          from { 
            width: 0%; 
          }
          to { 
            width: 100%; 
          }
        }

        @keyframes imageFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(3deg); 
          }
        }

        @keyframes rotate {
          from { 
            transform: rotate(0deg); 
          }
          to { 
            transform: rotate(360deg); 
          }
        }

        @keyframes slowRotate {
          from { 
            transform: translateY(-50%) rotate(0deg); 
          }
          to { 
            transform: translateY(-50%) rotate(360deg); 
          }
        }

        @keyframes cornerGlow {
          0%, 100% { 
            box-shadow: 0 0 10px rgba(213, 56, 56, 0.3); 
            opacity: 1; 
          }
          50% { 
            box-shadow: 0 0 20px rgba(213, 56, 56, 0.6); 
            opacity: 0.7; 
          }
        }

        @keyframes gridMove {
          from { 
            background-position: 0 0; 
          }
          to { 
            background-position: 20px 20px; 
          }
        }

        @keyframes fadeInScale {
          from { 
            opacity: 0; 
            transform: scale(0.5); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }

        @keyframes bounce {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
          }
          50% { 
            transform: translateY(-10px) scale(1.05); 
          }
        }
      `}</style>
    </section>
  );
};

export default Provider;