'use client';

import React, { useState, useEffect } from 'react';

// Placeholder images with a futuristic/transparent feel.
const cardImages = {
  kitchen: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  badges: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  policy: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
};

const points = [
  {
    id: '01',
    title: 'Verified kitchens only',
    text: 'FSSAI, hygiene scores, and periodic audits for every partner kitchen.',
    imageUrl: cardImages.kitchen,
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
    imageUrl: cardImages.badges,
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
    imageUrl: cardImages.policy,
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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // --- Styles ---

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    padding: '80px 16px',
    background: '#fde1af',
    fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
    color: '#673200',
    overflow: 'hidden',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    perspective: '1000px',
  };

  const techGridOverlay: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'radial-gradient(rgba(103, 50, 0, 0.18) 1px, transparent 1px)',
    backgroundSize: '30px 30px',
    opacity: 0.5,
    zIndex: 0,
    pointerEvents: 'none',
  };

  const innerContainerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    width: '100%',
    position: 'relative',
    zIndex: 2,
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '70px',
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'all 0.8s ease-out',
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 24px',
    background: 'rgba(255, 255, 255, 0.9)',
    border: '1px solid rgba(103, 50, 0, 0.4)',
    boxShadow: '0 0 15px rgba(103, 50, 0, 0.3), inset 0 0 10px rgba(103, 50, 0, 0.15)',
    color: '#673200',
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '24px',
    clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0% 100%, 0% 30%)',
    backdropFilter: 'blur(4px)',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '800',
    marginBottom: '16px',
    textTransform: 'uppercase',
    letterSpacing: '-1px',
    background: 'linear-gradient(90deg, #673200 20%, #673200 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0px 2px 4px rgba(0,0,0,0.1)',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: '#673200',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
    fontWeight: '500',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gap: '40px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    perspective: '1000px',
  };

  const getCardWrapperStyle = (index: number): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.2}s`,
  });

  const getCardStyle = (index: number): React.CSSProperties => {
    const isHovered = hoveredIndex === index;
    return {
      position: 'relative',
      background: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      padding: '40px 32px',
      clipPath: 'polygon(12% 0, 100% 0, 100% 88%, 88% 100%, 0 100%, 0 12%)',
      border: '1px solid transparent',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      transform: isHovered ? 'translateY(-15px) rotateX(5deg) scale(1.02)' : 'translateY(0) rotateX(0) scale(1)',
      transformStyle: 'preserve-3d',
      boxShadow: isHovered 
        ? '0 30px 60px -15px rgba(103, 50, 0, 0.3), inset 0 0 20px rgba(103, 50, 0, 0.15)' 
        : '0 10px 30px -10px rgba(0,0,0,0.1)',
      overflow: 'hidden',
    };
  };

  const getCardImageOverlayStyle = (index: number, imageUrl: string): React.CSSProperties => {
    const isHovered = hoveredIndex === index;
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: isHovered ? 0.15 : 0.05,
      filter: isHovered ? 'grayscale(0%) contrast(120%)' : 'grayscale(100%) contrast(100%)',
      mixBlendMode: 'overlay',
      transition: 'all 0.5s ease',
      zIndex: 0,
      pointerEvents: 'none',
      transform: isHovered ? 'scale(1.1)' : 'scale(1.0)',
    };
  };

  const getIconBoxStyle = (index: number): React.CSSProperties => ({
    position: 'relative',
    width: '70px',
    height: '70px',
    background: hoveredIndex === index ? 'linear-gradient(135deg, #673200, #673200)' : 'rgba(103, 50, 0, 0.08)',
    color: hoveredIndex === index ? '#fde1af' : '#673200',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    transition: 'all 0.4s ease',
    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
    zIndex: 2,
    animation: hoveredIndex === index ? 'iconPulse 1.5s infinite' : 'none',
  });

  const cardContentStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 2,
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: '22px',
    fontWeight: '800',
    color: '#673200',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const cardTextStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#673200',
    lineHeight: '1.6',
    fontWeight: '500',
  };

  const indexNumberStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    right: '15px',
    fontSize: '64px',
    fontWeight: '900',
    background: 'linear-gradient(180deg, rgba(103, 50, 0, 0.2) 0%, rgba(255,255,255,0) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    pointerEvents: 'none',
    fontFamily: '"Rajdhani", sans-serif',
    zIndex: 1,
  };

  const getScannerStyle = (index: number): React.CSSProperties => ({
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '20px',
    background: 'linear-gradient(180deg, rgba(103, 50, 0, 0.25), transparent)',
    borderBottom: '2px solid #673200',
    boxShadow: '0 0 15px rgba(103, 50, 0, 0.9)',
    opacity: hoveredIndex === index ? 1 : 0,
    animation: hoveredIndex === index ? 'scan 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite' : 'none',
    pointerEvents: 'none',
    zIndex: 3,
  });

  const getBorderTraceStyle = (index: number): React.CSSProperties => ({
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(45deg, transparent, rgba(103, 50, 0, 0.8), transparent)',
    zIndex: 1,
    opacity: hoveredIndex === index ? 1 : 0,
    transition: 'opacity 0.3s ease',
    mixBlendMode: 'overlay',
    pointerEvents: 'none',
  });

  const particleStyle = (size: string, top: string, left: string, delay: string, color: string): React.CSSProperties => ({
    position: 'absolute',
    width: size,
    height: size,
    top: top,
    left: left,
    background: `radial-gradient(circle, ${color} 0%, rgba(255, 255, 255, 0) 70%)`,
    borderRadius: '50%',
    animation: `float 12s ease-in-out infinite ${delay}`,
    zIndex: 0,
    pointerEvents: 'none',
    opacity: 0.4,
  });

  return (
    <section id="hygiene" style={containerStyle}>
      {/* Animated Background Grid & Lines (from first code) */}
      <div className="tech-grid" />
      <div className="animated-lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <div className="line line-4"></div>
        <div className="line line-5"></div>
        <div className="line line-6"></div>
      </div>

      <div style={techGridOverlay}></div>

      <div style={particleStyle('400px', '-10%', '-10%', '0s', 'rgba(103, 50, 0, 0.12)')}></div>
      <div style={particleStyle('300px', '70%', '80%', '3s', 'rgba(103, 50, 0, 0.1)')}></div>
      <div style={particleStyle('200px', '30%', '40%', '1.5s', 'rgba(255, 255, 255, 0.8)')}></div>

      <div style={innerContainerStyle}>
        
        <div style={headerStyle}>
          <div style={{ display: 'inline-block' }}>
            <span style={badgeStyle}>
              <span className="pulse-dot"></span>
              Protocol: Bio-Safety // ACTIVE
            </span>
          </div>
          <h2 style={titleStyle}>Hygiene & Verification Network</h2>
          <p style={subtitleStyle}>
            All provider nodes undergo rigorous bio-safety checks. Partner verification status: CONFIRMED.
          </p>
        </div>

        <div style={gridStyle}>
          {points.map((p, index) => (
            <div key={p.title} style={getCardWrapperStyle(index)}>
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={getCardStyle(index)}
                className="tech-card"
              >
                <div style={getCardImageOverlayStyle(index, p.imageUrl)}></div>

                <div style={getScannerStyle(index)}></div>
                
                <div style={getBorderTraceStyle(index)} className="border-trace"></div>

                <div style={indexNumberStyle}>{p.id}</div>

                <div style={cardContentStyle}>
                  <div style={getIconBoxStyle(index)}>
                    {p.icon}
                  </div>

                  <h3 style={cardTitleStyle}>{p.title}</h3>
                  <p style={cardTextStyle}>{p.text}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700;800;900&display=swap');

        /* Animated Background Grid */
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
          box-shadow: 0 0 10px rgba(103, 50, 0, 0.9);
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .tech-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(103, 50, 0, 0.5), transparent 40%, transparent 60%, rgba(103, 50, 0, 0.5));
            z-index: -1;
            margin: -2px;
            clip-path: polygon(12% 0, 100% 0, 100% 88%, 88% 100%, 0 100%, 0 12%);
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .tech-card:hover::before {
            opacity: 1;
        }

        .border-trace {
            background-size: 200% 200%;
            animation: borderGradient 3s ease infinite;
        }

        @keyframes borderGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(103, 50, 0, 0.7); opacity: 1; }
          70% { box-shadow: 0 0 0 10px rgba(103, 50, 0, 0); opacity: 0; }
          100% { box-shadow: 0 0 0 0 rgba(103, 50, 0, 0); opacity: 0; }
        }

        @keyframes iconPulse {
           0% { box-shadow: 0 0 0 0 rgba(103, 50, 0, 0.4); }
           70% { box-shadow: 0 0 0 15px rgba(103, 50, 0, 0); }
           100% { box-shadow: 0 0 0 0 rgba(103, 50, 0, 0); }
        }

        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes scan {
          0% { top: -20px; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hygiene;