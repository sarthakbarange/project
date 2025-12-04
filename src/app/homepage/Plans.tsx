'use client';

import React, { useState, useEffect } from 'react';

const plans = [
  {
    name: 'Daily Flexi',
    price: '₹120/day',
    desc: 'Perfect for changing schedules.',
    features: ['Pause anytime', 'Same-day changes', 'Home delivery'],
    popular: false,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=95',
  },
  {
    name: 'Monthly Saver',
    price: '₹2799/mo',
    desc: 'Best value for regular office-goers.',
    features: ['15% cheaper', 'Free delivery', 'Weekly menu change'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea28c674675?auto=format&fit=crop&w=800&q=95',
  },
  {
    name: 'Corporate',
    price: 'Talk to us',
    desc: 'For teams and offices with 10+ people.',
    features: ['Central billing', 'Multiple menus', 'Dedicated support'],
    popular: false,
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=95',
  },
];

const Plans: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- Styles ---

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    padding: isMobile ? '40px 12px' : '80px 24px',
    background: '#fde1af',
    fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
    color: '#673200',
    overflow: 'hidden',
    minHeight: '100vh',
  };

  const gridOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `
      linear-gradient(rgba(253, 225, 175, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(253, 225, 175, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
    zIndex: 0,
    pointerEvents: 'none',
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: isMobile ? '32px' : '80px',
    position: 'relative',
    zIndex: 2,
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'all 0.8s ease-out',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '2.5rem' : 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '800',
    color: '#673200',
    margin: '0',
    textTransform: 'uppercase',
    letterSpacing: '-1px',
    lineHeight: '1',
    background: 'linear-gradient(90deg, #673200 0%, #673200 60%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const getGridStyle = (): React.CSSProperties => ({
    display: 'grid',
    gap: isMobile ? '20px' : '48px',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(500px, 1fr))',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  });

  const getCardStyle = (index: number, isPopular: boolean): React.CSSProperties => {
    const isHovered = hoveredIndex === index;
    return {
      position: 'relative',
      background: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '16px',
      boxShadow: isHovered
        ? '0 25px 50px -12px rgba(103, 50, 0, 0.25)'
        : '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      border: isPopular ? '1px solid rgba(103, 50, 0, 0.4)' : '1px solid rgba(0,0,0,0.05)',
      overflow: 'hidden',
      opacity: mounted ? 1 : 0,
      animation: `fadeInUp 0.6s ease-out forwards ${index * 0.15}s`,
      display: 'flex',
      flexDirection: 'row',
      height: isMobile ? '280px' : '380px', 
    };
  };

  const contentSectionStyle: React.CSSProperties = {
    flex: isMobile ? '0 0 55%' : '0 0 55%', 
    padding: isMobile ? '16px 12px' : '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 2,
  };

  const imageSectionStyle: React.CSSProperties = {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '55%',
    clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)', 
    overflow: 'hidden',
    zIndex: 1,
  };

  const diagonalBorderWrapperStyle: React.CSSProperties = {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '55%',
    clipPath: 'polygon(19.5% 0, 100% 0, 100% 100%, -0.5% 100%)', 
    background: '#673200', 
    zIndex: 0,
    display: 'block',
  };

  const imageStyle = (isHovered: boolean): React.CSSProperties => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.7s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  });

  const planNameStyle: React.CSSProperties = {
    fontSize: isMobile ? '16px' : '20px',
    fontWeight: '700',
    color: '#673200',
    textTransform: 'uppercase',
    letterSpacing: isMobile ? '1px' : '2px',
    marginBottom: isMobile ? '4px' : '8px',
    whiteSpace: 'nowrap',
  };

  const priceStyle: React.CSSProperties = {
    fontSize: isMobile ? '22px' : '32px',
    fontWeight: '800',
    color: '#673200',
    marginBottom: isMobile ? '8px' : '16px',
    display: 'flex',
    alignItems: 'baseline',
    gap: '4px',
  };

  const descStyle: React.CSSProperties = {
    fontSize: isMobile ? '12px' : '15px',
    color: '#673200',
    marginBottom: isMobile ? '12px' : '24px',
    lineHeight: '1.4',
    maxWidth: '95%',
    display: '-webkit-box',
    WebkitLineClamp: isMobile ? 2 : 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  };

  const listStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: isMobile ? '0 0 16px 0' : '0 0 24px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '6px' : '10px',
  };

  const listItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: isMobile ? '11px' : '14px',
    color: '#673200',
    fontWeight: '600',
  };

  const buttonStyle = (index: number): React.CSSProperties => {
    const isHovered = hoveredIndex === index;
    return {
      padding: isMobile ? '10px 16px' : '14px 28px',
      background: isHovered ? '#673200' : '#fde1af',
      color: isHovered ? '#fff' : '#673200',
      border: 'none',
      borderRadius: '8px',
      fontWeight: '700',
      fontSize: isMobile ? '12px' : '14px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width: 'fit-content',
    };
  };

  return (
    <section id="plans" style={containerStyle}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700;800&display=swap');
        
        /* Animated Grid Background */
        .tech-grid-animated {
          position: absolute;
          inset: 0;
          background: transparent;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .tech-grid-animated::before,
        .tech-grid-animated::after {
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

        .tech-grid-animated::after {
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

        /* Flowing Lines */
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

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Animated Grid Background */}
      <div className="tech-grid-animated" />
      
      {/* Flowing Lines */}
      <div className="animated-lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <div className="line line-4"></div>
        <div className="line line-5"></div>
        <div className="line line-6"></div>
      </div>

      <div style={gridOverlayStyle}></div>

      {/* Header */}
      <div style={headerStyle}>
        <div style={{ 
          display: 'inline-block', 
          padding: '6px 16px', 
          border: '1px solid #673200', 
          borderRadius: '50px', 
          color: '#673200', 
          fontWeight: '700', 
          fontSize: '12px', 
          marginBottom: '16px',
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(4px)'
        }}>
          MEAL SUBSCRIPTIONS
        </div>
        <h2 style={titleStyle}>Choose Plan</h2>
      </div>

      {/* Grid */}
      <div style={getGridStyle()}>
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={getCardStyle(index, plan.popular)}
          >
            {/* 1. The Red Diagonal Border Line (Background Layer) */}
            <div style={diagonalBorderWrapperStyle}></div>

            {/* 2. The Image Section (Right Side) */}
            <div style={imageSectionStyle}>
              <img 
                src={plan.image} 
                alt={plan.name} 
                style={imageStyle(hoveredIndex === index)} 
              />
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(to right, rgba(255,255,255,0.2), transparent)',
                pointerEvents: 'none'
              }}></div>
            </div>

            {/* 3. The Content Section (Left Side) */}
            <div style={contentSectionStyle}>
              <div style={planNameStyle}>{plan.name}</div>
              <div style={priceStyle}>
                {plan.price}
                {plan.popular && !isMobile && (
                  <span style={{ 
                    fontSize: '12px', 
                    background: '#673200', 
                    color: '#fde1af', 
                    padding: '2px 8px', 
                    borderRadius: '4px',
                    verticalAlign: 'middle',
                    marginLeft: '8px'
                  }}>POPULAR</span>
                )}
              </div>
              <p style={descStyle}>{plan.desc}</p>

              <ul style={listStyle}>
                {plan.features.map((f, i) => (
                  <li key={i} style={listItemStyle}>
                    <span style={{ color: '#673200', fontSize: isMobile ? '10px' : '14px' }}>✓</span> {f}
                  </li>
                ))}
              </ul>

              <button style={buttonStyle(index)}>
                Select <span>→</span>
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;