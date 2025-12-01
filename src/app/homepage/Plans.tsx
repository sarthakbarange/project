'use client';

import React, { useState } from 'react';

const plans = [
  {
    name: 'Daily Flexi',
    price: '₹120/day',
    desc: 'Perfect if your schedule keeps changing. Pause or skip any day.',
    features: ['Pause anytime', 'Same-day changes', 'Office & home delivery'],
    popular: false,
  },
  {
    name: 'Monthly Saver',
    price: '₹2799/month',
    desc: 'Most value for regular office-goers and students.',
    features: ['Up to 15% cheaper', 'Free delivery', 'One menu change per week'],
    popular: true,
  },
  {
    name: 'Custom Corporate',
    price: 'Talk to us',
    desc: 'For teams and offices with 10+ people.',
    features: ['Central billing', 'Multiple menus', 'Dedicated support'],
    popular: false,
  },
];

const Plans: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // --- Styles ---

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    padding: '80px 16px',
    background: 'linear-gradient(135deg, #fef2f2 0%, #ffffff 50%, #fce7f3 100%)',
    fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
    overflow: 'hidden',
    minHeight: '100vh',
  };

  // Ambient floating particles (matching previous component)
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

  const contentWrapperStyle: React.CSSProperties = {
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
    background: 'rgba(213, 56, 56, 0.08)',
    color: '#d53838',
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '24px',
    clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%, 0% 25%)',
    borderLeft: '3px solid #d53838',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '800',
    color: '#111',
    marginBottom: '16px',
    textTransform: 'uppercase',
    letterSpacing: '-1px',
    background: 'linear-gradient(90deg, #d53838 0%, #111 100%)',
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
    gap: '40px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    padding: '20px',
  };

  const getCardStyle = (index: number, isPopular: boolean): React.CSSProperties => ({
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(12px)',
    // Tech shape: cut corners
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
    padding: '40px 32px 60px 32px',
    border: hoveredIndex === index 
      ? '1px solid #d53838' 
      : (isPopular ? '1px solid rgba(213, 56, 56, 0.4)' : '1px solid rgba(0,0,0,0.1)'),
    transition: 'all 0.4s ease',
    transform: hoveredIndex === index ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
    boxShadow: hoveredIndex === index 
      ? '0 20px 40px rgba(213, 56, 56, 0.15)' 
      : '0 4px 20px rgba(0,0,0,0.05)',
    animation: `float 6s ease-in-out infinite ${index * 2}s`, // Floating animation
  });

  const popularBadgeStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    right: 0,
    background: '#d53838',
    color: 'white',
    padding: '8px 20px',
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  };

  const planNameStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: '800',
    color: '#111',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const priceStyle: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: '800',
    color: '#d53838',
    marginBottom: '16px',
    display: 'block',
    letterSpacing: '-1px',
  };

  const descStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '32px',
    lineHeight: '1.5',
    minHeight: '42px', // Alignment fix
  };

  const listStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 40px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const listItemStyle: React.CSSProperties = {
    fontSize: '15px',
    color: '#374151',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    fontWeight: '500',
  };

  // Tech checkmark style
  const checkStyle: React.CSSProperties = {
    minWidth: '16px',
    height: '16px',
    borderRadius: '2px',
    border: '1px solid #d53838',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#d53838',
    fontSize: '10px',
    marginTop: '3px',
    background: 'rgba(213, 56, 56, 0.1)',
  };

  const buttonStyle = (isHovered: boolean, isPopular: boolean): React.CSSProperties => ({
    width: '100%',
    padding: '16px',
    background: isHovered || isPopular ? '#d53838' : 'transparent',
    color: isHovered || isPopular ? 'white' : '#d53838',
    border: '2px solid #d53838',
    borderRadius: '0',
    fontWeight: '700',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    cursor: 'pointer',
    // Tech button shape
    clipPath: 'polygon(0 0, 95% 0, 100% 30%, 100% 100%, 5% 100%, 0 70%)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  });

  // Scanner beam effect
  const scannerStyle = (isActive: boolean): React.CSSProperties => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, transparent, rgba(213, 56, 56, 0.1), transparent)',
    transform: isActive ? 'translateY(100%)' : 'translateY(-100%)',
    transition: isActive ? 'transform 1.5s ease-in-out' : 'none',
    pointerEvents: 'none',
    zIndex: 2,
  });

  return (
    <section id="plans" style={containerStyle}>
      {/* Background Ambience */}
      <div style={particleStyle('400px', '-10%', '-5%', '0s')}></div>
      <div style={particleStyle('300px', '60%', '85%', '2s')}></div>

      <div style={contentWrapperStyle}>
        
        {/* Header */}
        <div style={headerStyle}>
          <div style={{ display: 'inline-block' }}>
            <span style={badgeStyle}>
              <span className="pulse-dot"></span>
              Subscription Modules
            </span>
          </div>
          <h2 style={titleStyle}>Select Protocol</h2>
          <p style={subtitleStyle}>
            Choose a plan that matches your consumption frequency. System optimized for home-style delivery.
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
              {/* Scanner Effect */}
              <div style={scannerStyle(hoveredIndex === index)}></div>

              {/* Popular Badge */}
              {plan.popular && (
                <div style={popularBadgeStyle}>
                  <span className="blink">●</span> RECOMMENDED
                </div>
              )}

              {/* Content */}
              <h3 style={planNameStyle}>{plan.name}</h3>
              <span style={priceStyle}>{plan.price}</span>
              <p style={descStyle}>{plan.desc}</p>

              <ul style={listStyle}>
                {plan.features.map((f) => (
                  <li key={f} style={listItemStyle}>
                    <span style={checkStyle}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button style={buttonStyle(hoveredIndex === index, plan.popular)}>
                Initialize Plan
                {hoveredIndex === index && (
                  <span style={{ marginLeft: '8px', display: 'inline-block', animation: 'slideRight 0.5s infinite alternate' }}>»</span>
                )}
              </button>

              {/* Decorative Tech Corner */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '30px',
                height: '30px',
                borderRight: '2px solid #d53838',
                borderBottom: '2px solid #d53838',
                opacity: hoveredIndex === index ? 1 : 0.3,
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

        .blink {
          animation: blink 1s infinite step-start;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(213, 56, 56, 0.7); }
          70% { box-shadow: 0 0 0 6px rgba(213, 56, 56, 0); }
          100% { box-shadow: 0 0 0 0 rgba(213, 56, 56, 0); }
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        @keyframes slideRight {
          from { transform: translateX(0); }
          to { transform: translateX(5px); }
        }
      `}</style>
    </section>
  );
};

export default Plans;