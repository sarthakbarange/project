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
  
  const fullText = "SECTOR: POPULAR TIFFINS";

  // Entry Animation & Text Decoding Effect
  useEffect(() => {
    setIsVisible(true);
    let iteration = 0;
    const interval = setInterval(() => {
      setDecodedText(fullText
        .split("")
        .map((letter, index) => {
          if (index < iteration) return letter;
          return String.fromCharCode(65 + Math.floor(Math.random() * 26));
        })
        .join("")
      );
      if (iteration >= fullText.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // --- Styles ---

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    // Preserved Original Background
    background: 'linear-gradient(135deg, #fef2f2 0%, #ffffff 50%, #fce7f3 100%)',
    padding: '80px 16px',
    fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
    position: 'relative',
    overflow: 'hidden',
  };

  // Tech Grid Overlay (New Background Detail)
  const gridOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `
      linear-gradient(rgba(213, 56, 56, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(213, 56, 56, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
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

  const mainHeadingStyle: React.CSSProperties = {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontWeight: '800',
    marginBottom: '8px',
    color: '#d53838',
    letterSpacing: '-1px',
    textTransform: 'uppercase',
    textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
  };

  const subtitleStyle: React.CSSProperties = {
    fontFamily: 'monospace',
    color: '#d53838',
    opacity: 0.8,
    letterSpacing: '2px',
    fontSize: '14px',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gap: '30px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    maxWidth: '1280px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  };

  const getCardWrapperStyle = (index: number): React.CSSProperties => ({
    animation: `float ${6 + index}s ease-in-out infinite ${index * 0.5}s`,
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
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      // New Futuristic Shape: Notched corners
      clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)',
      border: isHovered ? '1px solid rgba(213, 56, 56, 0.8)' : '1px solid rgba(213, 56, 56, 0.2)',
      boxShadow: isHovered 
        ? '0 25px 50px -12px rgba(213, 56, 56, 0.25)' 
        : '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      transform: isHovered ? 'rotateX(2deg) rotateY(-2deg) scale(1.02)' : 'rotateX(0) rotateY(0) scale(1)',
      overflow: 'hidden',
      cursor: 'pointer',
    };
  };

  const imageContainerStyle: React.CSSProperties = {
    height: '180px',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '2px solid #d53838',
  };

  const getImageStyle = (index: number): React.CSSProperties => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s ease',
    transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
    filter: hoveredCard === index ? 'grayscale(0%)' : 'grayscale(20%)',
  });

  const contentStyle: React.CSSProperties = {
    padding: '24px',
    position: 'relative',
  };

  // Scanning Line Animation
  const getScanLineStyle = (index: number): React.CSSProperties => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: '#d53838',
    opacity: 0.6,
    boxShadow: '0 0 10px #d53838',
    animation: hoveredCard === index ? 'scan 1.5s linear infinite' : 'none',
    display: hoveredCard === index ? 'block' : 'none',
    zIndex: 10,
    pointerEvents: 'none',
  });

  // HUD Corner Markers
  const cornerMarkerStyle = (top: boolean, left: boolean): React.CSSProperties => ({
    position: 'absolute',
    width: '10px',
    height: '10px',
    borderColor: '#d53838',
    borderTopWidth: top ? '2px' : '0',
    borderBottomWidth: !top ? '2px' : '0',
    borderLeftWidth: left ? '2px' : '0',
    borderRightWidth: !left ? '2px' : '0',
    top: top ? '8px' : 'auto',
    bottom: !top ? '8px' : 'auto',
    left: left ? '8px' : 'auto',
    right: !left ? '8px' : 'auto',
    transition: 'all 0.3s ease',
    opacity: 0.5,
  });

  const trendingBadgeStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'rgba(255, 255, 255, 0.9)',
    color: '#d53838',
    padding: '4px 12px',
    fontSize: '11px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)',
    border: '1px solid #d53838',
    zIndex: 5,
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: '800',
    color: '#111',
    textTransform: 'uppercase',
    marginBottom: '8px',
    lineHeight: '1.1',
  };

  const detailRowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    fontSize: '13px',
    fontFamily: 'monospace',
    color: '#555',
  };

  const statGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px',
    marginBottom: '20px',
  };

  const statBoxStyle = (active: boolean): React.CSSProperties => ({
    background: active ? '#d53838' : 'rgba(213, 56, 56, 0.05)',
    color: active ? '#fff' : '#d53838',
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%)',
    transition: 'all 0.3s ease',
  });

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px',
    background: 'transparent',
    color: '#d53838',
    border: '1px solid #d53838',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    fontSize: '14px',
    clipPath: 'polygon(5% 0, 100% 0, 100% 100%, 95% 100%, 0 100%, 0 0)',
    transition: 'all 0.3s ease',
  };

  const buttonHoverOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#d53838',
    transform: 'translateX(-100%)',
    transition: 'transform 0.3s ease',
    zIndex: -1,
  };

  return (
    <div style={containerStyle}>
      {/* Dynamic Style Injection for Keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700;800&display=swap');
        
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        .btn-hover:hover .overlay {
          transform: translateX(0) !important;
        }
        .btn-hover:hover {
          color: white !important;
          box-shadow: 0 0 15px rgba(213, 56, 56, 0.6);
        }
      `}</style>

      <div style={gridOverlayStyle}></div>

      <div style={headerContainerStyle}>
        <div style={{display: 'inline-block', border: '1px solid #d53838', padding: '4px 8px', marginBottom: '16px'}}>
          <span style={subtitleStyle}>SYSTEM_READY // v2.0.4</span>
        </div>
        <h2 style={mainHeadingStyle}>{decodedText}</h2>
        <p style={{color: '#666', maxWidth: '600px', margin: '0 auto'}}>
          Scanning local grid for optimal nutrition providers. <br/>
          <span style={{color: '#d53838', fontWeight: 'bold'}}>3 Entities Found.</span>
        </p>
      </div>

      <div style={gridStyle}>
        {providers.map((provider, index) => (
          <div
            key={provider.id}
            style={getCardWrapperStyle(index)}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={getCardStyle(index)}>
              {/* Scan Line */}
              <div style={getScanLineStyle(index)}></div>

              {/* HUD Markers */}
              <div style={cornerMarkerStyle(true, true)}></div>
              <div style={cornerMarkerStyle(true, false)}></div>
              <div style={cornerMarkerStyle(false, true)}></div>
              <div style={cornerMarkerStyle(false, false)}></div>

              {/* Image Section */}
              <div style={imageContainerStyle}>
                <img src={provider.image} alt={provider.name} style={getImageStyle(index)} />
                {provider.trending && (
                  <div style={trendingBadgeStyle}>
                    ⚡ Trending
                  </div>
                )}
                {/* Tech Overlay on Image */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, 
                  height: '40px', 
                  background: 'linear-gradient(to top, rgba(255,255,255,1), transparent)'
                }}></div>
              </div>

              {/* Content Section */}
              <div style={contentStyle}>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#d53838', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px'}}>
                  <span>⌖ {provider.area}</span>
                  <span style={{height: '1px', flex: 1, background: 'rgba(213,56,56,0.2)'}}></span>
                </div>

                <h3 style={titleStyle}>{provider.name}</h3>
                
                <div style={detailRowStyle}>
                  <span>TYPE: {provider.cuisines.split(',')[0]}</span>
                  <span>ID: #{1024 + index}</span>
                </div>

                {/* Stats Grid */}
                <div style={statGridStyle}>
                  <div style={statBoxStyle(hoveredCard === index)}>
                    <span style={{fontSize: '10px', textTransform: 'uppercase', marginBottom: '2px'}}>RATING</span>
                    <span style={{fontSize: '18px', fontWeight: 'bold'}}>{provider.rating}</span>
                  </div>
                  <div style={statBoxStyle(false)}>
                    <span style={{fontSize: '10px', textTransform: 'uppercase', marginBottom: '2px'}}>LOGS</span>
                    <span style={{fontSize: '18px', fontWeight: 'bold'}}>{provider.reviews}</span>
                  </div>
                </div>

                {/* Price & Action */}
                <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '16px'}}>
                  <div>
                    <div style={{fontSize: '10px', color: '#999', textTransform: 'uppercase'}}>SUBSCRIPTION COST</div>
                    <div style={{fontSize: '28px', fontWeight: '800', color: '#d53838', lineHeight: '1'}}>{provider.price}</div>
                  </div>
                </div>

                <div style={{marginTop: '20px'}}>
                  <button className="btn-hover" style={buttonStyle}>
                    <div className="overlay" style={buttonHoverOverlayStyle}></div>
                    <span style={{position: 'relative', zIndex: 1}}>Initialize Order</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;