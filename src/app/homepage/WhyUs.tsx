'use client';

import React, { useState } from 'react';

const items = [
  {
    id: '01',
    title: 'Built for daily use',
    text: 'Everything is designed for people who eat from a tiffin almost every day.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    )
  },
  {
    id: '02',
    title: 'Local but verified',
    text: 'Local home kitchens and tiffin centers with clear hygiene information.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
    )
  },
  {
    id: '03',
    title: 'On-time tracking',
    text: 'Track your dabba like any modern delivery, while keeping the dabbawala spirit.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="22" y1="12" x2="18" y2="12"></line>
        <line x1="6" y1="12" x2="2" y2="12"></line>
        <line x1="12" y1="6" x2="12" y2="2"></line>
        <line x1="12" y1="22" x2="12" y2="18"></line>
      </svg>
    )
  },
  {
    id: '04',
    title: 'Flexible plans',
    text: 'Pause, skip, or switch providers without long lock-in periods.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
      </svg>
    )
  },
];

const WhyUs: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    padding: '80px 16px',
    background: '#fde1af',
    fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
    color: '#673200',
    overflow: 'hidden',
  };

  const innerContainerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '64px',
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 24px',
    background: 'rgba(103, 50, 0, 0.1)',
    border: '1px solid rgba(103, 50, 0, 0.3)',
    color: '#673200',
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '24px',
    clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%, 0% 25%)',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
    fontWeight: '800',
    marginBottom: '16px',
    textTransform: 'uppercase',
    letterSpacing: '-1px',
    color: '#673200',
    textShadow: '2px 2px 0px rgba(103, 50, 0, 0.15)',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: '#673200',
    maxWidth: '650px',
    margin: '0 auto',
    lineHeight: '1.6',
    opacity: 0.85,
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gap: '32px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  };

  const getCardStyle = (index: number): React.CSSProperties => ({
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(10px)',
    padding: '32px 24px',
    clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
    border: hoveredIndex === index ? '2px solid #673200' : '1px solid rgba(103, 50, 0, 0.2)',
    transition: 'all 0.3s ease',
    transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)',
    boxShadow: hoveredIndex === index 
      ? '0 15px 30px rgba(103, 50, 0, 0.2)' 
      : '0 4px 10px rgba(0,0,0,0.05)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  });

  const iconContainerStyle = (index: number): React.CSSProperties => ({
    width: '56px',
    height: '56px',
    background: hoveredIndex === index ? '#673200' : 'rgba(103, 50, 0, 0.1)',
    color: hoveredIndex === index ? '#fde1af' : '#673200',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    transition: 'all 0.3s ease',
    borderRadius: '4px',
    position: 'relative',
    zIndex: 2,
  });

  const cardTitleStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: '700',
    color: '#673200',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    position: 'relative',
    zIndex: 2,
  };

  const cardTextStyle: React.CSSProperties = {
    fontSize: '15px',
    color: '#673200',
    lineHeight: '1.5',
    position: 'relative',
    zIndex: 2,
    opacity: 0.85,
  };

  const backgroundNumberStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '60px',
    fontWeight: '800',
    color: 'rgba(103, 50, 0, 0.05)',
    fontFamily: '"Rajdhani", sans-serif',
    pointerEvents: 'none',
    zIndex: 1,
  };

  return (
    <section id="why-us" style={containerStyle}>
      {/* Animated Background Grid & Lines from first code */}
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
        
        {/* Header */}
        <div style={headerStyle}>
          <div style={{ display: 'inline-block' }}>
            <span style={badgeStyle}>
              <span className="pulse-dot"></span>
              Core Advantages
            </span>
          </div>
          <h2 style={titleStyle}>Platform Architecture</h2>
          <p style={subtitleStyle}>
            Combining the reliability of traditional dabba networks with advanced digital transparency protocols.
          </p>
        </div>

        {/* Grid */}
        <div style={gridStyle}>
          {items.map((item, index) => (
            <div
              key={item.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={getCardStyle(index)}
            >
              <div style={backgroundNumberStyle}>{item.id}</div>

              <div style={iconContainerStyle(index)}>
                {item.icon}
                <div style={{
                  position: 'absolute',
                  inset: '-4px',
                  border: '1px solid rgba(103, 50, 0, 0.3)',
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition: 'opacity 0.3s',
                  transform: 'scale(1.1)',
                  pointerEvents: 'none'
                }}></div>
              </div>

              <h3 style={cardTitleStyle}>{item.title}</h3>
              <p style={cardTextStyle}>{item.text}</p>

              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                height: '3px',
                background: '#673200',
                transition: 'width 0.4s ease',
                width: hoveredIndex === index ? '100%' : '0%'
              }}></div>
            </div>
          ))}
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
      `}</style>
    </section>
  );
};

export default WhyUs;