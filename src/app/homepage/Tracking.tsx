'use client';

import React, { useState, useEffect } from 'react';

const Tracking: React.FC = () => {
  const [scanLine, setScanLine] = useState(0);

  // Animation loop for the scanner effect inside the map
  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // --- Styles ---

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

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gap: '60px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    alignItems: 'center',
  };

  // --- Left Content Styles ---

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 16px',
    background: 'rgba(253, 225, 175, 0.4)',
    border: '1px solid rgba(103, 50, 0, 0.6)',
    color: '#673200',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '24px',
    clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)',
    animation: 'glowPulse 3s ease-in-out infinite',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: '800',
    marginBottom: '24px',
    lineHeight: '1.1',
    textTransform: 'uppercase',
    background: 'linear-gradient(90deg, #673200 0%, #673200 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-1px',
  };

  const descStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#673200',
    marginBottom: '40px',
    lineHeight: '1.6',
    maxWidth: '480px',
  };

  const listStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  const listItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
  };

  const checkBoxStyle: React.CSSProperties = {
    minWidth: '24px',
    height: '24px',
    background: 'linear-gradient(135deg, #673200 0%, #673200 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fde1af',
    fontSize: '14px',
    clipPath: 'polygon(25% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%, 0% 25%)',
    marginTop: '2px',
    boxShadow: '0 0 10px rgba(103, 50, 0, 0.5)',
    animation: 'rotateCheck 4s linear infinite',
  };

  const listTextStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: '600',
    color: '#673200',
  };

  // --- Right Content (The Device/Card) Styles ---

  const deviceWrapperStyle: React.CSSProperties = {
    position: 'relative',
    animation: 'float 8s ease-in-out infinite',
  };

  const deviceCardStyle: React.CSSProperties = {
    background: 'rgba(15, 15, 17, 0.85)',
    backdropFilter: 'blur(20px)',
    color: 'white',
    padding: '24px',
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    position: 'relative',
    overflow: 'hidden',
  };

  const backgroundImageStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url("/tracking.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.15,
    zIndex: 0,
    filter: 'blur(1px)',
  };

  const borderGlowStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    borderRadius: '0',
    border: '1px solid rgba(253, 225, 175, 0.7)',
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)',
    pointerEvents: 'none',
    animation: 'borderGlow 2s ease-in-out infinite',
    zIndex: 2,
  };

  const deviceHeaderStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    paddingBottom: '12px',
    position: 'relative',
    zIndex: 1,
  };

  const statusBadgeStyle: React.CSSProperties = {
    background: 'rgba(253, 225, 175, 0.12)',
    color: '#fde1af',
    padding: '4px 12px',
    fontSize: '11px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    border: '1px solid rgba(253, 225, 175, 0.6)',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)',
    animation: 'slideIn 1s ease-out',
  };

  const mapContainerStyle: React.CSSProperties = {
    height: '220px',
    width: '100%',
    background: 'radial-gradient(circle at 50% 50%, #1a1a1f 0%, #050505 100%)',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.05)',
    marginBottom: '24px',
    zIndex: 1,
  };

  const gridLineStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px',
  };

  const scannerBarStyle: React.CSSProperties = {
    position: 'absolute',
    top: `${scanLine}%`,
    left: 0,
    width: '100%',
    height: '2px',
    background: 'rgba(253, 225, 175, 0.6)',
    boxShadow: '0 0 10px rgba(253, 225, 175, 0.9)',
    transition: 'top 50ms linear',
    opacity: 0.7,
  };

  const markerStyle = (top: string, left: string, color: string): React.CSSProperties => ({
    position: 'absolute',
    top,
    left,
    width: '12px',
    height: '12px',
    border: `2px solid ${color}`,
    background: '#000',
    transform: 'translate(-50%, -50%) rotate(45deg)',
    zIndex: 10,
    boxShadow: `0 0 15px ${color}, 0 0 30px ${color}`,
    animation: 'markerPulse 2s ease-in-out infinite',
  });

  const pathLineStyle: React.CSSProperties = {
    position: 'absolute',
    top: '40%',
    left: '20%',
    width: '60%',
    height: '40%',
    borderLeft: '2px dashed rgba(253, 225, 175, 0.7)',
    borderBottom: '2px dashed rgba(253, 225, 175, 0.7)',
    pointerEvents: 'none',
    animation: 'pathGlow 3s ease-in-out infinite',
  };

  const riderStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '20%',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    background: 'white',
    color: '#673200',
    padding: '4px 12px',
    fontSize: '10px',
    fontWeight: 'bold',
    clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 20%)',
    boxShadow: '0 0 15px rgba(253, 225, 175, 0.6)',
    zIndex: 20,
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    animation: 'pulse 2s infinite',
  };

  const statsContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '12px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '20px',
    position: 'relative',
    zIndex: 1,
  };

  const statBoxStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: '10px',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const statValueStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: '700',
    color: '#fff',
  };

  const particleStyle = (size: string, top: string, left: string, delay: string): React.CSSProperties => ({
    position: 'absolute',
    width: size,
    height: size,
    top: top,
    left: left,
    background: 'linear-gradient(45deg, rgba(103, 50, 0, 0.1), rgba(253, 225, 175, 0))',
    border: '1px solid rgba(103, 50, 0, 0.22)',
    borderRadius: '50%',
    animation: `float 10s ease-in-out infinite ${delay}`,
    zIndex: 0,
    pointerEvents: 'none',
  });

  return (
    <section id="tracking" style={containerStyle}>
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

      {/* Background Ambience */}
      <div style={particleStyle('350px', '-5%', '-5%', '0s')}></div>
      <div style={particleStyle('250px', '80%', '90%', '2s')}></div>

      <div style={innerContainerStyle}>
        <div style={gridStyle}>
          {/* Left Column: Text Info */}
          <div>
            <div style={badgeStyle}>
              <span className="pulse-dot"></span>
              System: Live Tracking
            </div>
            
            <h2 style={titleStyle}>
              Real-Time<br />
              Logistics Feed
            </h2>
            
            <p style={descStyle}>
              Eliminate uncertainty. Initiate real-time surveillance of your nutritional payload from origin kitchen to destination coordinates.
            </p>
            
            <div style={listStyle}>
              <div style={listItemStyle}>
                <div style={checkBoxStyle}>◈</div>
                <span style={listTextStyle}>Geospatial tracking of assigned courier unit</span>
              </div>
              <div style={listItemStyle}>
                <div style={checkBoxStyle}>◈</div>
                <span style={listTextStyle}>Algorithmic ETA based on grid traffic density</span>
              </div>
              <div style={listItemStyle}>
                <div style={checkBoxStyle}>◈</div>
                <span style={listTextStyle}>Instant telemetry alerts upon sector entry</span>
              </div>
            </div>
          </div>

          {/* Right Column: The Device */}
          <div style={deviceWrapperStyle}>
            <div style={deviceCardStyle}>
              <div style={backgroundImageStyle}></div>
              <div style={borderGlowStyle}></div>
              
              {/* Header */}
              <div style={deviceHeaderStyle}>
                <div style={{ display:'flex', flexDirection:'column' }}>
                  <span style={{ fontSize:'10px', color:'#6b7280', letterSpacing:'1px' }}>TRIP ID: #DB-X99</span>
                  <span style={{ fontSize:'14px', fontWeight:'700', letterSpacing:'1px' }}>LIVE FEED</span>
                </div>
                <div style={statusBadgeStyle}>
                  <span className="blink">●</span>
                  On-Target
                </div>
              </div>

              {/* Map Visualization */}
              <div style={mapContainerStyle}>
                <div style={gridLineStyle}></div>
                <div style={scannerBarStyle}></div>
                <div style={pathLineStyle}></div>

                {/* Nodes */}
                <div style={markerStyle('40%', '20%', '#ffffff')}></div>
                <span style={{ position:'absolute', top:'30%', left:'20%', fontSize:'10px', color:'#6b7280', transform:'translateX(-50%)' }}>ORIGIN</span>
                
                <div style={markerStyle('80%', '80%', '#fde1af')}></div>
                <span style={{ position:'absolute', bottom:'8%', left:'80%', fontSize:'10px', color:'#fde1af', transform:'translateX(-50%)' }}>TARGET</span>

                {/* Moving Rider */}
                <div style={riderStyle}>
                  <span className="pulse-dot"></span>
                  UNIT 05: 5 MIN
                </div>
              </div>

              {/* Data Grid */}
              <div style={statsContainerStyle}>
                <div style={statBoxStyle}>
                  <dt style={statLabelStyle}>Dispatch</dt>
                  <dd style={statValueStyle}>12:45 PM</dd>
                </div>
                <div style={statBoxStyle}>
                  <dt style={statLabelStyle}>Arrival Est.</dt>
                  <dd style={{ ...statValueStyle, color: '#fde1af' }}>1:05 PM</dd>
                </div>
                <div style={statBoxStyle}>
                  <dt style={statLabelStyle}>Vector</dt>
                  <dd style={statValueStyle}>En Route</dd>
                </div>
              </div>

              {/* Decorative Tech Elements */}
              <div style={{ position:'absolute', top:'10px', right:'10px', width:'4px', height:'4px', background:'#fde1af' }}></div>
              <div style={{ position:'absolute', bottom:'10px', left:'10px', width:'4px', height:'4px', background:'#fde1af' }}></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700;800&display=swap');

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
          width: 6px;
          height: 6px;
          background: #fde1af;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(253, 225, 175, 0.9);
          animation: pulse 2s infinite;
        }

        .blink {
          animation: blink 1s infinite step-start;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(253, 225, 175, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(253, 225, 175, 0); }
          100% { box-shadow: 0 0 0 0 rgba(253, 225, 175, 0); }
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes glowPulse {
          0%, 100% { 
            box-shadow: 0 0 5px rgba(103, 50, 0, 0.4);
            border-color: rgba(103, 50, 0, 0.8);
          }
          50% { 
            box-shadow: 0 0 20px rgba(103, 50, 0, 0.8);
            border-color: rgba(103, 50, 0, 1);
          }
        }

        @keyframes borderGlow {
          0%, 100% { 
            border-color: rgba(253, 225, 175, 0.4);
            filter: drop-shadow(0 0 5px rgba(253, 225, 175, 0.3));
          }
          50% { 
            border-color: rgba(253, 225, 175, 0.9);
            filter: drop-shadow(0 0 15px rgba(253, 225, 175, 0.7));
          }
        }

        @keyframes rotateCheck {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(90deg); }
          50% { transform: rotate(180deg); }
          75% { transform: rotate(270deg); }
        }

        @keyframes markerPulse {
          0%, 100% { 
            transform: translate(-50%, -50%) rotate(45deg) scale(1);
          }
          50% { 
            transform: translate(-50%, -50%) rotate(45deg) scale(1.2);
          }
        }

        @keyframes pathGlow {
          0%, 100% { 
            opacity: 0.4;
            filter: drop-shadow(0 0 3px rgba(253, 225, 175, 0.4));
          }
          50% { 
            opacity: 1;
            filter: drop-shadow(0 0 8px rgba(253, 225, 175, 0.9));
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Tracking;