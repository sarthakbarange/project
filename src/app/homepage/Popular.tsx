'use client';

import React, { useEffect, useState } from 'react';

type Provider = {
  name: string;
  area: string;
  rating: number;
  cuisines: string;
  price: string;
  reviews: number;
  trending: boolean;
};

const providers: Provider[] = [
  {
    name: 'Maa ke Haath Ka Khana',
    area: 'Andheri East',
    rating: 4.9,
    cuisines: 'North Indian, Roti-Sabzi',
    price: '₹120/day',
    reviews: 1240,
    trending: true,
  },
  {
    name: 'Spice Route Tiffins',
    area: 'Powai',
    rating: 4.7,
    cuisines: 'Multi-cuisine, Veg/Non-veg',
    price: '₹150/day',
    reviews: 890,
    trending: false,
  },
  {
    name: 'Healthy Bento Dabbas',
    area: 'BKC',
    rating: 4.8,
    cuisines: 'Low-oil, High-protein',
    price: '₹180/day',
    reviews: 1050,
    trending: true,
  },
];

const Popular: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // --- Styles ---

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    // Original background preserved
    background: 'linear-gradient(135deg, #fef2f2 0%, #ffffff 50%, #fce7f3 100%)',
    padding: '80px 16px',
    fontFamily: '"Rajdhani", "Segoe UI", sans-serif', // Assuming a tech font, falls back to sans
    position: 'relative',
    overflow: 'hidden',
  };

  // Background floating tech particles (Ambient animation)
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

  const innerContainerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  };

  const headerContainerStyle: React.CSSProperties = {
    marginBottom: '80px',
    textAlign: 'center',
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.2, 0.8, 0.2, 1)',
  };

  const trendingBadgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 24px',
    // Tech shape: cut corners
    clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%, 0% 25%)',
    background: 'rgba(213, 56, 56, 0.1)',
    borderLeft: '4px solid #d53838',
    color: '#d53838',
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '24px',
    backdropFilter: 'blur(4px)',
  };

  const mainHeadingStyle: React.CSSProperties = {
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    fontWeight: '800',
    marginBottom: '16px',
    background: 'linear-gradient(90deg, #d53838 0%, #111 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-1px',
    textTransform: 'uppercase',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: '#6b7280',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
    letterSpacing: '0.5px',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gap: '40px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    padding: '20px',
  };

  const getCardWrapperStyle = (index: number): React.CSSProperties => ({
    position: 'relative',
    transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
    transitionDelay: `${index * 150}ms`,
    // Ambient float animation for each card
    animation: `float 6s ease-in-out infinite ${index * 1.5}s`,
  });

  const getCardStyle = (index: number): React.CSSProperties => ({
    position: 'relative',
    height: '100%',
    // Futuristic Shape: Angled bottom-right corner
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(20px)',
    border: hoveredCard === index ? '1px solid rgba(213, 56, 56, 0.6)' : '1px solid rgba(255, 255, 255, 0.8)',
    boxShadow: hoveredCard === index 
      ? '0 20px 60px -10px rgba(213, 56, 56, 0.3)' 
      : '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.4s ease',
    cursor: 'pointer',
    transform: hoveredCard === index ? 'scale(1.03) translateY(-5px)' : 'scale(1)',
  });

  // The "Scanner" beam effect
  const getScannerStyle = (index: number): React.CSSProperties => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, transparent, rgba(213, 56, 56, 0.1), transparent)',
    transform: hoveredCard === index ? 'translateY(100%)' : 'translateY(-100%)',
    transition: hoveredCard === index ? 'transform 1.5s ease-in-out' : 'none',
    pointerEvents: 'none',
    zIndex: 2,
  });

  const trendingBadgeContainerStyle: React.CSSProperties = {
    position: 'absolute',
    top: '0',
    right: '0',
    zIndex: 10,
    background: '#d53838',
    padding: '8px 16px',
    // Inverted tech corner
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)',
  };

  const trendingTextStyle: React.CSSProperties = {
    color: 'white',
    fontSize: '12px',
    fontWeight: '800',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  };

  const cardContentStyle: React.CSSProperties = {
    padding: '32px 24px 48px 24px', // Extra bottom padding for the cut corner
    position: 'relative',
    zIndex: 1,
  };

  const providerNameStyle: React.CSSProperties = {
    fontSize: '22px',
    fontWeight: '800',
    color: '#111827',
    marginBottom: '4px',
    letterSpacing: '-0.5px',
    textTransform: 'uppercase',
  };

  const locationContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    color: '#d53838',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '16px',
  };

  const statsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginBottom: '20px',
  };

  const statBoxStyle: React.CSSProperties = {
    background: 'rgba(213, 56, 56, 0.03)',
    border: '1px solid rgba(213, 56, 56, 0.1)',
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%)',
  };

  const priceValueStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: '800',
    color: '#d53838',
    letterSpacing: '-1px',
  };

  const orderButtonStyle: React.CSSProperties = {
    width: '100%',
    padding: '16px',
    marginTop: '24px',
    background: hoveredCard !== null ? '#d53838' : 'transparent',
    color: hoveredCard !== null ? 'white' : '#d53838',
    border: '2px solid #d53838',
    fontWeight: '700',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    cursor: 'pointer',
    clipPath: 'polygon(0 0, 95% 0, 100% 30%, 100% 100%, 5% 100%, 0 70%)', // Tech button shape
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  };

  const viewAllContainerStyle: React.CSSProperties = {
    marginTop: '80px',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
  };

  const viewAllButtonStyle: React.CSSProperties = {
    background: 'transparent',
    border: 'none',
    color: '#d53838',
    fontSize: '18px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '4px',
    cursor: 'pointer',
    padding: '16px 40px',
    position: 'relative',
  };

  const viewAllBorderTopStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '30%',
    height: '2px',
    background: '#d53838',
    transition: 'width 0.5s ease',
  };
  
  const viewAllBorderBottomStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '30%',
    height: '2px',
    background: '#d53838',
    transition: 'width 0.5s ease',
  };

  const [viewAllHovered, setViewAllHovered] = useState(false);

  return (
    <div style={containerStyle}>
      {/* Ambient Background Tech Elements */}
      <div style={particleStyle('300px', '-100px', '-100px', '0s')}></div>
      <div style={particleStyle('200px', '40%', '90%', '2s')}></div>
      <div style={particleStyle('150px', '80%', '10%', '4s')}></div>

      <div style={innerContainerStyle}>
        {/* Header */}
        <div style={headerContainerStyle}>
          <div style={{ display: 'inline-block' }}>
            <div style={trendingBadgeStyle}>
              <span className="pulse-dot"></span>
              <span>System Status: Trending</span>
            </div>
          </div>
          
          <h2 style={mainHeadingStyle}>
            Sector: Popular Tiffins
          </h2>
          
          <p style={subtitleStyle}>
            [INITIATING SCAN...] Identifying high-rated meal providers in your local grid. Freshness probability: 100%.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={gridStyle}>
          {providers.map((provider, index) => (
            <div
              key={provider.name}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={getCardWrapperStyle(index)}
            >
              <article style={getCardStyle(index)}>
                {/* Scanner Beam Effect */}
                <div style={getScannerStyle(index)}></div>

                {/* Trending Corner Badge */}
                {provider.trending && (
                  <div style={trendingBadgeContainerStyle}>
                    <span style={trendingTextStyle}>
                      <span className="blink">●</span> HOT
                    </span>
                  </div>
                )}

                <div style={cardContentStyle}>
                  <div style={locationContainerStyle}>
                    <span style={{ fontSize: '16px' }}>⌖</span>
                    {provider.area}
                  </div>

                  <h3 style={providerNameStyle}>{provider.name}</h3>
                  <div style={{ height: '2px', width: '40px', background: '#d53838', marginBottom: '20px' }}></div>

                  {/* Tech Stats Grid */}
                  <div style={statsGridStyle}>
                    <div style={statBoxStyle}>
                      <span style={{fontSize: '11px', color:'#6b7280', textTransform:'uppercase'}}>Rating</span>
                      <span style={{fontWeight:'800', color:'#111', fontSize:'16px'}}>★ {provider.rating}</span>
                    </div>
                    <div style={statBoxStyle}>
                      <span style={{fontSize: '11px', color:'#6b7280', textTransform:'uppercase'}}>Logs</span>
                      <span style={{fontWeight:'800', color:'#111', fontSize:'16px'}}>{provider.reviews}</span>
                    </div>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <p style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', marginBottom: '4px' }}>Cuisine Module</p>
                    <p style={{ fontSize: '15px', color: '#374151', fontWeight: '600' }}>{provider.cuisines}</p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 'auto' }}>
                    <div>
                      <p style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', letterSpacing:'1px' }}>Sub. Cost</p>
                      <p style={priceValueStyle}>{provider.price}</p>
                    </div>
                  </div>

                  <button style={orderButtonStyle}>
                    Initialize Order
                    {hoveredCard === index && (
                      <span style={{ marginLeft: '8px', display: 'inline-block', animation: 'slideRight 0.5s infinite alternate' }}>»</span>
                    )}
                  </button>
                </div>
                
                {/* Decorative corner lines */}
                <div style={{ position:'absolute', bottom:'0', right:'0', width:'20px', height:'20px', borderRight:'2px solid #d53838', borderBottom:'2px solid #d53838', pointerEvents:'none' }}></div>
              </article>
            </div>
          ))}
        </div>

        {/* View All */}
        <div 
          style={viewAllContainerStyle}
          onMouseEnter={() => setViewAllHovered(true)}
          onMouseLeave={() => setViewAllHovered(false)}
        >
          <button style={viewAllButtonStyle}>
            <div style={{...viewAllBorderTopStyle, width: viewAllHovered ? '100%' : '30%'}}></div>
            <div style={{...viewAllBorderBottomStyle, width: viewAllHovered ? '100%' : '30%'}}></div>
            Load All Data Nodes
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap');

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
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(213, 56, 56, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(213, 56, 56, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(213, 56, 56, 0); }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        @keyframes slideRight {
          from { transform: translateX(0); }
          to { transform: translateX(5px); }
        }
      `}</style>
    </div>
  );
};

export default Popular;