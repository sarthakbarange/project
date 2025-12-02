'use client';

import React, { useState, useEffect } from 'react';

// Updated image URLs to q=95 for HD quality
const plans = [
  {
    name: 'Daily Flexi',
    price: '₹120/day',
    desc: 'Perfect if your schedule keeps changing. Pause or skip any day.',
    features: ['Pause anytime', 'Same-day changes', 'Office & home delivery'],
    popular: false,
    // HD Clear bowl image
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=95',
  },
  {
    name: 'Monthly Saver',
    price: '₹2799/month',
    desc: 'Most value for regular office-goers and students.',
    features: ['Up to 15% cheaper', 'Free delivery', 'One menu change per week'],
    popular: true,
    // HD stacked meal image
    image: 'https://images.unsplash.com/photo-1606491956689-2ea28c674675?auto=format&fit=crop&w=800&q=95',
  },
  {
    name: 'Custom Corporate',
    price: 'Talk to us',
    desc: 'For teams and offices with 10+ people.',
    features: ['Central billing', 'Multiple menus', 'Dedicated support'],
    popular: false,
    // HD feast/group image
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=95',
  },
];

const Plans: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // --- Styles ---

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    padding: '80px 16px',
    background: 'linear-gradient(135deg, #fef2f2 0%, #ffffff 50%, #fce7f3 100%)',
    fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
    overflow: 'hidden',
    minHeight: '100vh',
    perspective: '1000px',
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

  const contentWrapperStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '80px',
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'all 0.8s ease-out',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(3rem, 6vw, 5rem)',
    fontWeight: '800',
    color: '#111',
    margin: '0',
    textTransform: 'uppercase',
    letterSpacing: '-2px',
    lineHeight: '1',
    background: 'linear-gradient(90deg, #d53838 0%, #111 60%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0px 2px 0px rgba(0,0,0,0.1))',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gap: '40px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', // Increased minimum width slightly
    padding: '20px',
  };

  const getCardStyle = (index: number, isPopular: boolean): React.CSSProperties => {
    const isHovered = hoveredIndex === index;
    return {
      position: 'relative',
      // Slightly more opaque background so text is readable against potential image overlap
      background: 'rgba(255, 255, 255, 0.85)', 
      backdropFilter: 'blur(20px)',
      // Complex HUD shape handles clipping the image automatically
      clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)',
      padding: '0',
      border: 'none',
      transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      transform: isHovered 
        ? 'translateY(-15px) scale(1.02)' 
        : 'translateY(0) scale(1)',
      boxShadow: isHovered
        ? '0 30px 60px rgba(213, 56, 56, 0.25), 0 0 0 1px rgba(213, 56, 56, 0.5)'
        : '0 10px 30px rgba(0,0,0,0.05), 0 0 0 1px rgba(255,255,255, 0.5)',
      opacity: mounted ? 1 : 0,
      animation: `fadeInUp 0.6s ease-out forwards ${index * 0.2}s`,
      overflow: 'hidden', // Ensure image stays within bounds before clip-path kicks in
    };
  };

  // NEW: Image container fills the right half
  const imageContainerStyle = (isHovered: boolean): React.CSSProperties => ({
    position: 'absolute',
    top: '0',
    right: '0',
    width: '50%', // Occupy right half
    height: '100%',
    overflow: 'hidden',
    transition: 'all 0.6s ease',
    zIndex: 1,
    // Removed maskImage for sharp HD look
  });

  // NEW: HD Image style
  const imageStyle = (isHovered: boolean): React.CSSProperties => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    transition: 'transform 0.6s ease',
    // Slight zoom effect on hover within its container
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    // Removed mixBlendMode for vivid HD colors
  });

  // Updated content area to stay on the left
  const cardInnerStyle: React.CSSProperties = {
    padding: '40px 20px 90px 32px',
    position: 'relative',
    zIndex: 2,
    maxWidth: '50%', // Restrict text to left half
  };

  const popularBadgeStyle: React.CSSProperties = {
    position: 'absolute',
    top: '0',
    left: '0',
    background: '#d53838',
    color: 'white',
    padding: '6px 20px',
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase',
    clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
    zIndex: 10,
    boxShadow: '0 4px 10px rgba(213, 56, 56, 0.3)',
  };

  const planNameStyle: React.CSSProperties = {
    fontSize: '24px', // Slightly smaller to fit
    fontWeight: '800',
    color: '#111',
    marginBottom: '4px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    position: 'relative',
    zIndex: 2,
  };

  const priceStyle: React.CSSProperties = {
    fontSize: '36px', // Slightly smaller to fit
    fontWeight: '800',
    color: '#d53838',
    marginBottom: '20px',
    display: 'block',
    letterSpacing: '-1px',
    textShadow: '0 0 20px rgba(213, 56, 56, 0.2)',
    position: 'relative',
    zIndex: 2,
  };

  const descStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#555',
    marginBottom: '32px',
    lineHeight: '1.5',
    fontWeight: '600',
    position: 'relative',
    zIndex: 2,
  };

  const listStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 30px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    position: 'relative',
    zIndex: 2,
  };

  const featureItemStyle = (index: number): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    color: '#444',
    fontWeight: '700',
    animation: `slideRight 0.5s ease-out forwards ${0.5 + (index * 0.1)}s`,
    opacity: 0,
  });

  const checkIconStyle: React.CSSProperties = {
    minWidth: '18px',
    height: '18px',
    background: 'linear-gradient(135deg, #d53838 0%, #ff6b6b 100%)',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '10px',
    boxShadow: '0 2px 5px rgba(213, 56, 56, 0.3)',
  };

  const buttonContainerStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    padding: '0',
    zIndex: 3,
  };

  const buttonStyle = (isHovered: boolean): React.CSSProperties => ({
    width: '100%',
    padding: '20px',
    background: isHovered ? '#111' : '#d53838',
    color: 'white',
    border: 'none',
    fontWeight: '700',
    fontSize: '16px',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  });

  const techLineStyle = (isHovered: boolean): React.CSSProperties => ({
    position: 'absolute',
    bottom: '60px',
    right: '0',
    width: isHovered ? '50%' : '10%', // Adjusted width animation
    height: '3px',
    background: '#d53838',
    transition: 'width 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
    zIndex: 3,
    boxShadow: '0 0 15px #d53838',
  });

  return (
    <section id="plans" style={containerStyle}>
      <div style={gridOverlayStyle}></div>

      <div style={contentWrapperStyle}>
        
        {/* Header */}
        <div style={headerStyle}>
          <div style={{ 
            display: 'inline-block', 
            padding: '8px 20px', 
            border: '1px solid #d53838', 
            borderRadius: '100px', 
            color: '#d53838', 
            fontWeight: '600', 
            fontSize: '14px', 
            marginBottom: '20px',
            background: 'rgba(213, 56, 56, 0.05)'
          }}>
            SYSTEM: ONLINE
          </div>
          <h2 style={titleStyle}>Select Module</h2>
          <p style={{ color: '#666', fontSize: '18px', marginTop: '16px', maxWidth: '500px', marginInline: 'auto' }}>
            Initialize your nutrition protocol. 
            <br />Optimized for taste and efficiency.
          </p>
        </div>

        {/* Grid */}
        <div style={gridStyle}>
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={getCardStyle(index, plan.popular)}
            >
              {/* HD Image filling right half */}
              <div style={imageContainerStyle(hoveredIndex === index)}>
                <img src={plan.image} alt={plan.name} style={imageStyle(hoveredIndex === index)} />
              </div>

              {/* Popular Badge */}
              {plan.popular && (
                <div style={popularBadgeStyle}>
                  Best Value
                </div>
              )}

              {/* Inner Content - Left Half */}
              <div style={cardInnerStyle}>
                <h3 style={planNameStyle}>{plan.name}</h3>
                <span style={priceStyle}>{plan.price}</span>
                <p style={descStyle}>{plan.desc}</p>

                <ul style={listStyle}>
                  {plan.features.map((f, i) => (
                    <li key={f} style={featureItemStyle(i)}>
                      <span style={checkIconStyle}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Decoration */}
              <div style={techLineStyle(hoveredIndex === index)}></div>

              {/* Action Button */}
              <div style={buttonContainerStyle}>
                <button style={buttonStyle(hoveredIndex === index)}>
                  Activate
                  <span style={{ 
                    transform: hoveredIndex === index ? 'translateX(5px)' : 'translateX(0)', 
                    transition: 'transform 0.3s' 
                  }}>
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700;800&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Plans;