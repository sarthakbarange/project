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
    background: 'linear-gradient(135deg, #fef2f2 0%, #ffffff 50%, #fce7f3 100%)',
    fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
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
    background: 'rgba(213, 56, 56, 0.1)',
    border: '1px solid #d53838',
    color: '#d53838',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '24px',
    clipPath: 'polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)', // Tech shape
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: '800',
    marginBottom: '24px',
    lineHeight: '1.1',
    textTransform: 'uppercase',
    background: 'linear-gradient(90deg, #111 0%, #d53838 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-1px',
  };

  const descStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#6b7280',
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
    background: '#111',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#d53838',
    fontSize: '14px',
    clipPath: 'polygon(20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 20%)',
    marginTop: '2px',
  };

  const listTextStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: '600',
    color: '#374151',
  };

  // --- Right Content (The Device/Card) Styles ---

  const deviceWrapperStyle: React.CSSProperties = {
    position: 'relative',
    animation: 'float 8s ease-in-out infinite',
  };

  const deviceCardStyle: React.CSSProperties = {
    background: '#0f0f11', // Dark screen look
    color: 'white',
    padding: '24px',
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)', // Angled bottom right
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    position: 'relative',
  };

  // Glowing red border effect
  const borderGlowStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    borderRadius: '0',
    border: '1px solid rgba(213, 56, 56, 0.3)',
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)',
    pointerEvents: 'none',
  };

  const deviceHeaderStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    paddingBottom: '12px',
  };

  const statusBadgeStyle: React.CSSProperties = {
    background: 'rgba(213, 56, 56, 0.2)',
    color: '#ff6b6b',
    padding: '4px 12px',
    fontSize: '11px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    border: '1px solid rgba(213, 56, 56, 0.4)',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  };

  // The Map Area
  const mapContainerStyle: React.CSSProperties = {
    height: '220px',
    width: '100%',
    background: 'radial-gradient(circle at 50% 50%, #1a1a1f 0%, #050505 100%)',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.05)',
    marginBottom: '24px',
  };

  // Grid lines on the map
  const gridLineStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px',
  };

  // Moving scanner bar
  const scannerBarStyle: React.CSSProperties = {
    position: 'absolute',
    top: `${scanLine}%`,
    left: 0,
    width: '100%',
    height: '2px',
    background: 'rgba(213, 56, 56, 0.5)',
    boxShadow: '0 0 10px rgba(213, 56, 56, 0.8)',
    transition: 'top 50ms linear',
    opacity: 0.7,
  };

  // Map markers
  const markerStyle = (top: string, left: string, color: string): React.CSSProperties => ({
    position: 'absolute',
    top,
    left,
    width: '12px',
    height: '12px',
    border: `2px solid ${color}`,
    background: '#000',
    transform: 'translate(-50%, -50%) rotate(45deg)', // Diamond shape
    zIndex: 10,
    boxShadow: `0 0 10px ${color}`,
  });

  const pathLineStyle: React.CSSProperties = {
    position: 'absolute',
    top: '40%',
    left: '20%',
    width: '60%',
    height: '40%',
    borderLeft: '2px dashed rgba(255, 255, 255, 0.2)',
    borderBottom: '2px dashed rgba(255, 255, 255, 0.2)',
    pointerEvents: 'none',
  };

  // Rider icon moving
  const riderStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '20%',
    left: '50%', // Positioned along the path roughly
    transform: 'translate(-50%, 50%)',
    background: 'white',
    color: '#d53838',
    padding: '4px 12px',
    fontSize: '10px',
    fontWeight: 'bold',
    clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 20%)',
    boxShadow: '0 0 15px rgba(213, 56, 56, 0.5)',
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
    <section id="tracking" style={containerStyle}>
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

                {/* Path Logic */}
                <div style={pathLineStyle}></div>

                {/* Nodes */}
                <div style={markerStyle('40%', '20%', '#ffffff')}></div> {/* Kitchen */}
                <span style={{ position:'absolute', top:'30%', left:'20%', fontSize:'10px', color:'#6b7280', transform:'translateX(-50%)' }}>ORIGIN</span>
                
                <div style={markerStyle('80%', '80%', '#d53838')}></div> {/* Office */}
                <span style={{ position:'absolute', bottom:'8%', left:'80%', fontSize:'10px', color:'#d53838', transform:'translateX(-50%)' }}>TARGET</span>

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
                  <dd style={{ ...statValueStyle, color: '#d53838' }}>1:05 PM</dd>
                </div>
                <div style={statBoxStyle}>
                  <dt style={statLabelStyle}>Vector</dt>
                  <dd style={statValueStyle}>En Route</dd>
                </div>
              </div>

              {/* Decorative Tech Elements */}
              <div style={{ position:'absolute', top:'10px', right:'10px', width:'4px', height:'4px', background:'#d53838' }}></div>
              <div style={{ position:'absolute', bottom:'10px', left:'10px', width:'4px', height:'4px', background:'#d53838' }}></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700;800&display=swap');

        .pulse-dot {
          width: 6px;
          height: 6px;
          background: #d53838;
          border-radius: 50%;
          box-shadow: 0 0 8px #d53838;
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
      `}</style>
    </section>
  );
};

export default Tracking;