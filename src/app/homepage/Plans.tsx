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
    background: 'linear-gradient(135deg, #fef2f2 0%, #ffffff 50%, #fce7f3 100%)',
    fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
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
      linear-gradient(rgba(213, 56, 56, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(213, 56, 56, 0.03) 1px, transparent 1px)
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
    color: '#111',
    margin: '0',
    textTransform: 'uppercase',
    letterSpacing: '-1px',
    lineHeight: '1',
    background: 'linear-gradient(90deg, #d53838 0%, #111 60%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const getGridStyle = (): React.CSSProperties => ({
    display: 'grid',
    gap: isMobile ? '20px' : '48px',
    // On mobile 1 column, desktop auto-fit
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
        ? '0 25px 50px -12px rgba(213, 56, 56, 0.25)'
        : '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      border: isPopular ? '1px solid rgba(213, 56, 56, 0.3)' : '1px solid rgba(0,0,0,0.05)',
      overflow: 'hidden',
      opacity: mounted ? 1 : 0,
      animation: `fadeInUp 0.6s ease-out forwards ${index * 0.15}s`,
      display: 'flex',
      // FORCE ROW DIRECTION EVEN ON MOBILE
      flexDirection: 'row',
      // Mobile height is shorter to fit screen better
      height: isMobile ? '280px' : '380px', 
    };
  };

  // --- Left Side: Content ---
  const contentSectionStyle: React.CSSProperties = {
    // Take up slightly less space on mobile to ensure image is visible
    flex: isMobile ? '0 0 55%' : '0 0 55%', 
    padding: isMobile ? '16px 12px' : '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 2,
  };

  // --- Right Side: Image Container with Diagonal Clip ---
  const imageSectionStyle: React.CSSProperties = {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '55%', // Ensures overlap with text section
    height: '100%',
    // Same Diagonal Cut on Mobile and Desktop
    clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)', 
    overflow: 'hidden',
    zIndex: 1,
  };

  // --- The "Dash Type Line" (Visual Separator) ---
  const diagonalBorderWrapperStyle: React.CSSProperties = {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '55%',
    // Start slightly earlier (19.5%) to create the red border line
    clipPath: 'polygon(19.5% 0, 100% 0, 100% 100%, -0.5% 100%)', 
    background: '#d53838', 
    zIndex: 0,
    display: 'block', // Always show
  };

  const imageStyle = (isHovered: boolean): React.CSSProperties => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.7s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  });

  // --- Typography & Elements (Responsive sizes) ---

  const planNameStyle: React.CSSProperties = {
    fontSize: isMobile ? '16px' : '20px',
    fontWeight: '700',
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: isMobile ? '1px' : '2px',
    marginBottom: isMobile ? '4px' : '8px',
    whiteSpace: 'nowrap', // Prevent wrapping on small lines
  };

  const priceStyle: React.CSSProperties = {
    fontSize: isMobile ? '22px' : '32px',
    fontWeight: '800',
    color: '#111',
    marginBottom: isMobile ? '8px' : '16px',
    display: 'flex',
    alignItems: 'baseline',
    gap: '4px',
  };

  const descStyle: React.CSSProperties = {
    fontSize: isMobile ? '12px' : '15px',
    color: '#555',
    marginBottom: isMobile ? '12px' : '24px',
    lineHeight: '1.4',
    maxWidth: '95%',
    display: '-webkit-box',
    WebkitLineClamp: isMobile ? 2 : 3, // Limit text lines on mobile
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
    color: '#444',
    fontWeight: '600',
  };

  const buttonStyle = (index: number): React.CSSProperties => {
    const isHovered = hoveredIndex === index;
    return {
      padding: isMobile ? '10px 16px' : '14px 28px',
      background: isHovered ? '#111' : '#d53838',
      color: 'white',
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
      <div style={gridOverlayStyle}></div>

      {/* Header */}
      <div style={headerStyle}>
        <div style={{ 
          display: 'inline-block', 
          padding: '6px 16px', 
          border: '1px solid #d53838', 
          borderRadius: '50px', 
          color: '#d53838', 
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
                    background: '#d53838', 
                    color: 'white', 
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
                    <span style={{ color: '#d53838', fontSize: isMobile ? '10px' : '14px' }}>✓</span> {f}
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

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700;800&display=swap');
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Plans;