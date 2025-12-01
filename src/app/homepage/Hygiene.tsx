'use client';

import React, { useState } from 'react';

const points = [
  {
    id: '01',
    title: 'Verified kitchens only',
    text: 'FSSAI, hygiene scores, and periodic audits for every partner kitchen.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: '02',
    title: 'Transparent hygiene badges',
    text: 'See hygiene level, last inspection date, and photos before you subscribe.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: '03',
    title: 'No-compromise policy',
    text: 'Instant refunds and provider suspension if hygiene standards are broken.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
];

const Hygiene: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // --- Styles ---

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    padding: '80px 16px',
    background: 'linear-gradient(135deg, #fef2f2 0%, #ffffff 50%, #fce7f3 100%)',
    fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
    overflow: 'hidden',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const innerContainerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    width: '100%',
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
    background: 'white',
    border: '1px solid rgba(213, 56, 56, 0.2)',
    boxShadow: '0 4px 20px rgba(213, 56, 56, 0.1)',
    color: '#d53838',
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '24px',
    // Tech shape
    clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%, 0% 25%)',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '800',
    marginBottom: '16px',
    textTransform: 'uppercase',
    letterSpacing: '-1px',
    background: 'linear-gradient(90deg, #111 0%, #d53838 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: '#6b7280',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gap: '32px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  };

  const getCardStyle = (index: number): React.CSSProperties => ({
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(12px)',
    padding: '40px 32px',
    // Tech shape: cut corners top-left and bottom-right
    clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)',
    border: hoveredIndex === index ? '1px solid #d53838' : '1px solid rgba(213, 56, 56, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)',
    boxShadow: hoveredIndex === index 
      ? '0 20px 40px -10px rgba(213, 56, 56, 0.2)' 
      : '0 4px 10px rgba(0,0,0,0.05)',
  });

  const getIconBoxStyle = (index: number): React.CSSProperties => ({
    width: '64px',
    height: '64px',
    background: hoveredIndex === index ? '#d53838' : 'rgba(213, 56, 56, 0.05)',
    color: hoveredIndex === index ? 'white' : '#d53838',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    transition: 'all 0.3s ease',
    // Hexagon-ish shape
    clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
  });

  const cardTitleStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: '700',
    color: '#111',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const cardTextStyle: React.CSSProperties = {
    fontSize: '15px',
    color: '#6b7280',
    lineHeight: '1.6',
  };

  const indexNumberStyle: React.CSSProperties = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '48px',
    fontWeight: '800',
    color: 'rgba(213, 56, 56, 0.05)',
    pointerEvents: 'none',
    fontFamily: '"Rajdhani", sans-serif',
  };

  // Scanning laser effect
  const getScannerStyle = (index: number): React.CSSProperties => ({
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '4px',
    background: 'linear-gradient(90deg, transparent, #d53838, transparent)',
    boxShadow: '0 0 10px #d53838',
    opacity: hoveredIndex === index ? 1 : 0,
    animation: hoveredIndex === index ? 'scan 1.5s linear infinite' : 'none',
    pointerEvents: 'none',
  });

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
    <section id="hygiene" style={containerStyle}>
      {/* Background Ambience */}
      <div style={particleStyle('300px', '10%', '-5%', '0s')}></div>
      <div style={particleStyle('250px', '60%', '90%', '2s')}></div>

      <div style={innerContainerStyle}>
        
        {/* Header */}
        <div style={headerStyle}>
          <div style={{ display: 'inline-block' }}>
            <span style={badgeStyle}>
              <span className="pulse-dot"></span>
              Protocol: Bio-Safety
            </span>
          </div>
          <h2 style={titleStyle}>Hygiene & Verification</h2>
          <p style={subtitleStyle}>
            All provider nodes undergo rigorous bio-safety checks. Partner verification status: CONFIRMED.
          </p>
        </div>

        {/* Grid */}
        <div style={gridStyle}>
          {points.map((p, index) => (
            <div
              key={p.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={getCardStyle(index)}
            >
              {/* Scanner Line */}
              <div style={getScannerStyle(index)}></div>

              {/* Background Index Number */}
              <div style={indexNumberStyle}>{p.id}</div>

              {/* Icon */}
              <div style={getIconBoxStyle(index)}>
                {p.icon}
              </div>

              {/* Content */}
              <h3 style={cardTitleStyle}>{p.title}</h3>
              <p style={cardTextStyle}>{p.text}</p>

              {/* Decorative Tech Corners */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '10px',
                height: '10px',
                borderLeft: '2px solid #d53838',
                borderTop: '2px solid #d53838',
                opacity: hoveredIndex === index ? 1 : 0,
                transition: 'opacity 0.3s'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '10px',
                height: '10px',
                borderRight: '2px solid #d53838',
                borderBottom: '2px solid #d53838',
                opacity: hoveredIndex === index ? 1 : 0,
                transition: 'opacity 0.3s'
              }}></div>
            </div>
          ))}
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

        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hygiene;