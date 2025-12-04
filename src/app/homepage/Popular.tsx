'use client';

import React, { useEffect, useState } from 'react';

type Provider = {
  id: number;
  name: string;
  area: string;
  rating: number;
  cuisines: string;
  price: string;
  reviews: number;
  trending: boolean;
  image: string;
};

const providers: Provider[] = [
  {
    id: 1,
    name: 'Maa ke Haath Ka Khana',
    area: 'Andheri East',
    rating: 4.9,
    cuisines: 'North Indian, Roti-Sabzi',
    price: '₹120/day',
    reviews: 1240,
    trending: true,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581612b66?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Spice Route Tiffins',
    area: 'Powai',
    rating: 4.7,
    cuisines: 'Multi-cuisine, Veg/Non-veg',
    price: '₹150/day',
    reviews: 890,
    trending: false,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Healthy Bento Dabbas',
    area: 'BKC',
    rating: 4.8,
    cuisines: 'Low-oil, High-protein',
    price: '₹180/day',
    reviews: 1050,
    trending: true,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
  },
];

const Popular: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [decodedText, setDecodedText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const fullText = "POPULAR TIFFIN SERVICES";

  useEffect(() => {
    setIsVisible(true);

    let iteration = 0;
    const interval = setInterval(() => {
      setDecodedText(
        fullText
          .split('')
          .map((letter, index) => {
            if (index < iteration) return letter;
            return letter === ' ' ? ' ' : String.fromCharCode(65 + Math.floor(Math.random() * 26));
          })
          .join('')
      );
      if (iteration >= fullText.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // --- Styles ---

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #fef2f2 0%, #ffffff 50%, #fce7f3 100%)',
    padding: isMobile ? '60px 12px' : '80px 16px',
    fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
    position: 'relative',
    overflow: 'hidden',
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
    backgroundSize: '50px 50px',
    opacity: 0.5,
    zIndex: 0,
    pointerEvents: 'none',
  };

  const headerContainerStyle: React.CSSProperties = {
    marginBottom: '60px',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
  };

  const badgeContainerStyle: React.CSSProperties = {
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
  };

  const mainHeadingStyle: React.CSSProperties = {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontWeight: '800',
    marginBottom: '16px',
    color: '#d53838',
    letterSpacing: '-1px',
    textTransform: 'uppercase',
    textShadow: '0 0 20px rgba(213, 56, 56, 0.3)',
    animation: 'textGlow 2s ease-in-out infinite',
  };

  const subtitleStyle: React.CSSProperties = {
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto',
    fontSize: '16px',
    lineHeight: '1.6',
  };

  const getGridStyle = (): React.CSSProperties => ({
    display: 'grid',
    gap: isMobile ? '16px' : '32px',
    gridTemplateColumns: isMobile
      ? 'repeat(2, minmax(0, 1fr))'
      : 'repeat(auto-fit, minmax(320px, 1fr))',
    maxWidth: '1280px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  });

  const getCardWrapperStyle = (index: number): React.CSSProperties => ({
    animation: isMobile
      ? 'none'
      : `cardFloat 6s ease-in-out infinite ${index * 0.3}s`,
    perspective: '1000px',
    transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transitionDelay: `${index * 150}ms`,
  });

  const getCardStyle = (index: number): React.CSSProperties => {
    const isHovered = hoveredCard === index;
    return {
      position: 'relative',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(30px)',
      borderRadius: isMobile ? '24px' : '32px',
      border: isHovered ? '2px solid rgba(213, 56, 56, 0.4)' : '2px solid rgba(213, 56, 56, 0.15)',
      boxShadow: isHovered
        ? '0 30px 60px rgba(213, 56, 56, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.5) inset'
        : '0 20px 40px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5) inset',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
      overflow: 'hidden',
      cursor: 'pointer',
    };
  };

  const imageContainerStyle: React.CSSProperties = {
    height: isMobile ? '150px' : '220px',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: isMobile ? '24px 24px 0 0' : '32px 32px 0 0',
  };

  const getImageStyle = (index: number): React.CSSProperties => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s ease, filter 0.3s ease',
    transform: hoveredCard === index ? 'scale(1.15)' : 'scale(1)',
    filter: hoveredCard === index ? 'grayscale(0%) brightness(1.1)' : 'grayscale(10%)',
  });

  const contentStyle: React.CSSProperties = {
    padding: isMobile ? '14px 12px 18px' : '32px',
    position: 'relative',
  };

  const trendingBadgeStyle: React.CSSProperties = {
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: 'linear-gradient(135deg, #d53838 0%, #b92e2e 100%)',
    color: 'white',
    padding: '8px 16px',
    fontSize: '11px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    borderRadius: '50px',
    zIndex: 5,
    boxShadow: '0 8px 20px rgba(213, 56, 56, 0.4)',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    animation: 'badgePulse 2s ease-in-out infinite',
  };

  const areaTagStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: isMobile ? '4px 8px' : '6px 12px',
    background: 'rgba(213, 56, 56, 0.1)',
    color: '#d53838',
    fontSize: isMobile ? '9px' : '12px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    borderRadius: '20px',
    marginBottom: isMobile ? '8px' : '12px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? '17px' : '26px',
    fontWeight: '800',
    color: '#111',
    textTransform: 'uppercase',
    marginBottom: isMobile ? '8px' : '12px',
    lineHeight: '1.2',
  };

  const cuisineStyle: React.CSSProperties = {
    fontSize: isMobile ? '11px' : '14px',
    color: '#666',
    marginBottom: isMobile ? '14px' : '20px',
    lineHeight: '1.5',
  };

  const statGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginBottom: '24px',
  };

  const statBoxStyle = (isActive: boolean): React.CSSProperties => ({
    background: isActive ? 'linear-gradient(135deg, #d53838 0%, #b92e2e 100%)' : 'rgba(213, 56, 56, 0.08)',
    color: isActive ? '#fff' : '#d53838',
    padding: isMobile ? '10px' : '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16px',
    transition: 'all 0.3s ease',
    border: isActive ? 'none' : '1px solid rgba(213, 56, 56, 0.2)',
    boxShadow: isActive ? '0 8px 20px rgba(213, 56, 56, 0.3)' : 'none',
  });

  const priceContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: isMobile ? '16px' : '24px',
    padding: isMobile ? '10px 12px' : '16px',
    background: 'linear-gradient(135deg, rgba(213, 56, 56, 0.05), rgba(213, 56, 56, 0.02))',
    borderRadius: '16px',
    border: '1px solid rgba(213, 56, 56, 0.1)',
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: isMobile ? '10px 12px' : '16px 20px',
    background: 'linear-gradient(135deg, #111 0%, #2a2a2a 100%)',
    color: 'white',
    border: 'none',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    cursor: 'pointer',
    fontSize: isMobile ? '11px' : '14px',
    borderRadius: '999px',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    overflow: 'hidden',
  };

  return (
    <div style={containerStyle}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700;800&display=swap');
        
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(213, 56, 56, 0.3); }
          50% { text-shadow: 0 0 30px rgba(213, 56, 56, 0.6); }
        }

        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 8px 20px rgba(213, 56, 56, 0.4); }
          50% { box-shadow: 0 8px 30px rgba(213, 56, 56, 0.6); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes imageFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }

        .btn-hover:hover {
          background: linear-gradient(135deg, #d53838 0%, #b92e2e 100%) !important;
          box-shadow: 0 15px 35px rgba(213, 56, 56, 0.5) !important;
          transform: translateY(-2px) !important;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 10px white;
          animation: pulse 2s infinite;
        }
      `}</style>

      <div style={gridOverlayStyle}></div>

      {/* Floating Decorative Images */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '300px',
        height: '300px',
        opacity: 0.04,
        animation: 'imageFloat 8s ease-in-out infinite',
        pointerEvents: 'none',
        zIndex: 1,
      }}>
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="#d53838"/>
          <path d="M100 30 Q130 50 130 80 Q130 110 100 130 Q70 110 70 80 Q70 50 100 30Z" fill="#d53838"/>
          <circle cx="100" cy="75" r="25" fill="#d53838"/>
        </svg>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-5%',
        width: '350px',
        height: '350px',
        opacity: 0.04,
        animation: 'imageFloat 10s ease-in-out infinite 2s',
        pointerEvents: 'none',
        zIndex: 1,
      }}>
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="100" cy="80" rx="50" ry="30" fill="#d53838"/>
          <rect x="60" y="75" width="80" height="15" fill="#d53838"/>
          <circle cx="100" cy="110" r="35" fill="#d53838"/>
          <path d="M70 130 L70 180 L130 180 L130 130 Q130 125 100 125 Q70 125 70 130Z" fill="#d53838"/>
        </svg>
      </div>

      <div style={headerContainerStyle}>
        <div style={badgeContainerStyle}>
          <span className="pulse-dot"></span>
          SYSTEM ONLINE
        </div>
        <h2 style={mainHeadingStyle}>{decodedText}</h2>
        <p style={subtitleStyle}>
          Discover the most trusted and loved tiffin services in your area. 
          <br/>
          <span style={{color: '#d53838', fontWeight: '700'}}>Verified Quality • Daily Fresh • Home Delivery</span>
        </p>
      </div>

      <div style={getGridStyle()}>
        {providers.map((provider, index) => (
          <div
            key={provider.id}
            style={getCardWrapperStyle(index)}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={getCardStyle(index)}>
              
              {/* Transparent Food Icon Overlay */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '250px',
                height: '250px',
                opacity: 0.03,
                animation: 'rotate 20s linear infinite',
                pointerEvents: 'none',
                zIndex: 0,
              }}>
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="80" stroke="#d53838" strokeWidth="2"/>
                  <circle cx="100" cy="100" r="60" stroke="#d53838" strokeWidth="2"/>
                  <circle cx="100" cy="100" r="40" stroke="#d53838" strokeWidth="2"/>
                  <path d="M100 20 L100 180 M20 100 L180 100" stroke="#d53838" strokeWidth="2"/>
                </svg>
              </div>

              {/* Corner Accents */}
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                width: '40px',
                height: '40px',
                borderTop: '3px solid #d53838',
                borderLeft: '3px solid #d53838',
                borderRadius: '32px 0 0 0',
                opacity: 0.3,
                zIndex: 1,
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                width: '40px',
                height: '40px',
                borderBottom: '3px solid #d53838',
                borderRight: '3px solid #d53838',
                borderRadius: '0 0 32px 0',
                opacity: 0.3,
                zIndex: 1,
              }}></div>

              {/* Image Section */}
              <div style={imageContainerStyle}>
                <img src={provider.image} alt={provider.name} style={getImageStyle(index)} />
                {provider.trending && (
                  <div style={trendingBadgeStyle}>
                    <span>⚡</span>
                    <span>Trending</span>
                  </div>
                )}
                
                {/* Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '60px',
                  background: 'linear-gradient(to top, rgba(255,255,255,1), transparent)',
                }}></div>
              </div>

              {/* Content Section */}
              <div style={contentStyle}>
                <div style={areaTagStyle}>
                  <span>📍</span>
                  <span>{provider.area}</span>
                </div>

                <h3 style={titleStyle}>{provider.name}</h3>
                <p style={cuisineStyle}>{provider.cuisines}</p>

                {/* Stats Grid */}
                <div style={statGridStyle}>
                  <div style={statBoxStyle(hoveredCard === index)}>
                    <span style={{fontSize: '10px', textTransform: 'uppercase', marginBottom: '4px', opacity: 0.8}}>Rating</span>
                    <span style={{fontSize: isMobile ? '18px' : '24px', fontWeight: 'bold'}}>⭐ {provider.rating}</span>
                  </div>
                  <div style={statBoxStyle(false)}>
                    <span style={{fontSize: '10px', textTransform: 'uppercase', marginBottom: '4px', opacity: 0.8}}>Reviews</span>
                    <span style={{fontSize: isMobile ? '18px' : '24px', fontWeight: 'bold'}}>{provider.reviews}</span>
                  </div>
                </div>

                {/* Price Section */}
                <div style={priceContainerStyle}>
                  <div>
                    <div style={{fontSize: '10px', color: '#999', textTransform: 'uppercase', marginBottom: '4px'}}>Daily Rate</div>
                    <div style={{fontSize: isMobile ? '20px' : '28px', fontWeight: '800', color: '#d53838', lineHeight: '1'}}>{provider.price}</div>
                  </div>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(213, 56, 56, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                  }}>
                    🍱
                  </div>
                </div>

                {/* Order Button */}
                <button 
                  className="btn-hover" 
                  style={buttonStyle}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;