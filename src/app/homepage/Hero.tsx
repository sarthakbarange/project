"use client";
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 30 - 15,
        y: (e.clientY / window.innerHeight) * 30 - 15,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#ffffff',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem',
        fontFamily: "'Rajdhani', 'Segoe UI', sans-serif",
        color: '#1a1a1a',
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700;800&display=swap');

          /* --- ANIMATIONS --- */
          
          /* Construct entrance effect */
          @keyframes construct-in {
            0% { clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); opacity: 0; filter: blur(10px); }
            100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); opacity: 1; filter: blur(0); }
          }

          /* Energy Flow Border */
          @keyframes border-flow {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }

          /* Holographic Flicker */
          @keyframes holo-flicker {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.95; transform: scale(1.01) skewX(1deg); }
            52% { opacity: 0.8; transform: scale(0.99) skewX(-2deg); }
            54% { opacity: 1; transform: scale(1); }
          }
          
           @keyframes glitch-skew-aggressive {
            0%, 100% { transform: skew(0deg); }
            20% { transform: skew(-4deg) translateX(-2px); }
            40% { transform: skew(4deg) translateX(2px); }
            60% { transform: skew(-2deg); }
            80% { transform: skew(2deg); }
           }

          @keyframes spin-segmented {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes float-tech-jitter {
            0%, 100% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-8px) translateX(2px); }
            50% { transform: translateY(-4px) translateX(-2px); }
            75% { transform: translateY(-12px) translateX(1px); }
          }

          /* --- COMPONENT CLASSES --- */

          /* Futuristic Data Badge */
          .tech-badge {
            position: relative;
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 10px 24px;
            margin-bottom: 2.5rem;
            background: rgba(255, 255, 255, 0.9);
            /* Slanted shape */
            clip-path: polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%);
            border-bottom: 3px solid #dc2626;
            animation: construct-in 0.8s cubic-bezier(0.19, 1, 0.22, 1) backwards;
          }
          .tech-badge::before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: -1;
            background: linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.2), transparent);
            animation: border-flow 3s linear infinite;
            background-size: 200% 100%;
          }

          /* Redesigned Cyber Buttons */
          .btn-cyber-v2 {
            position: relative;
            padding: 1.5rem 3.5rem;
            background: transparent;
            border: none;
            cursor: pointer;
            font-family: 'Rajdhani', sans-serif;
            font-weight: 800;
            font-size: 1.3rem;
            text-transform: uppercase;
            letter-spacing: 3px;
            color: #dc2626;
            /* Aggressive trapezoid shape */
            clip-path: polygon(20px 0, 100% 0, calc(100% - 20px) 100%, 0 100%);
            transition: all 0.3s ease;
            z-index: 1;
          }

          /* The glowing border container */
          .btn-cyber-v2::before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: -2;
            background: #dc2626;
            background: conic-gradient(from 0deg at 50% 50%, transparent 0deg, #dc2626 60deg, transparent 120deg, transparent 360deg);
            animation: spin-segmented 4s linear infinite;
            padding: 2px;
            -webkit-mask: 
               linear-gradient(#fff 0 0) content-box, 
               linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
          }
          
          /* Inner fill */
          .btn-cyber-v2::after {
              content: '';
              position: absolute;
              inset: 2px;
              background: rgba(255,255,255,0.9);
              z-index: -1;
              clip-path: polygon(20px 0, 100% 0, calc(100% - 20px) 100%, 0 100%);
              transition: all 0.3s ease;
          }

          .btn-cyber-v2:hover {
            color: #fff;
            text-shadow: 0 0 10px rgba(255,255,255,0.8);
            transform: scale(1.05);
          }
          .btn-cyber-v2:hover::after {
             background: #dc2626;
          }
          .btn-cyber-v2:hover::before {
             animation-duration: 1s;
             background: conic-gradient(from 0deg at 50% 50%, transparent 0deg, #fff 60deg, transparent 120deg, transparent 360deg);
          }

          .btn-cyber-v2-solid {
            color: #fff;
          }
          .btn-cyber-v2-solid::after {
              background: #dc2626;
          }
          .btn-cyber-v2-solid:hover::after {
              background: #b91c1c;
          }

          /* Layout Utilities */
          .hero-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 4rem;
            perspective: 1000px;
          }
          @media (max-width: 768px) {
            .hero-text {
              padding-right: 0;
              text-align: center;
            }
            .hero-text h1 {
              font-size: clamp(2.4rem, 9vw, 3.4rem) !important;
              line-height: 1.05;
              transform: none !important;
            }
            .hero-text p {
              margin-inline: auto;
              padding-left: 1.25rem !important;
              border-left-width: 3px !important;
              font-size: 1.05rem;
            }
            .hero-actions {
              justify-content: center;
            }
            .hero-hud-wrapper {
              height: 360px !important;
              margin-top: 1rem;
            }
            .hero-hud-ring-lg {
              width: 320px !important;
              height: 320px !important;
            }
            .hero-hud-ring-md {
              width: 280px !important;
              height: 280px !important;
            }
            .hero-hud-core {
              width: 260px !important;
              height: 260px !important;
            }
            .hero-hud-panel-energy {
              left: 0 !important;
              bottom: 0 !important;
              width: 90% !important;
              transform: translateZ(40px) !important;
            }
            .hero-hud-panel-temp {
              top: 8% !important;
              right: 0 !important;
              transform: translateZ(40px) !important;
            }
          }
          @media (min-width: 992px) {
            .hero-grid { grid-template-columns: 1.3fr 1fr; }
          }
        `}
      </style>

      {/* --- BACKGROUND LAYERS --- */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
          transform: 'scale(1.1)',
          zIndex: 0,
        }}
      />
      
      {/* --- CONTENT CONTAINER --- */}
      <div
        style={{
          position: 'relative',
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          zIndex: 10,
        }}
      >
        <div className="hero-grid" style={{ alignItems: 'center' }}>
          
          {/* --- LEFT COLUMN: TEXT --- */}
          <div className="hero-text" style={{ position: 'relative', paddingRight: '2rem' }}>
            
            {/* Status Badge */}
            <div className="tech-badge">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 10, height: 10, background: '#dc2626', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
                  <div style={{ width: 2, height: 15, background: '#dc2626', opacity: 0.5 }} />
              </div>
              <span style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '3px', color: '#dc2626', animation: 'holo-flicker 5s infinite' }}>
                SYSTEM: ONLINE // PROTOCOL_THALI_V2.4
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
                fontWeight: 900,
                lineHeight: 0.85,
                margin: '0 0 2rem 0',
                textTransform: 'uppercase',
                position: 'relative',
                transform: 'skewX(-5deg)',
              }}
            >
              <div style={{ animation: 'construct-in 1s cubic-bezier(0.19, 1, 0.22, 1) 0.2s backwards', display: 'inline-block' }}>GHAR JAISA</div> <br />
              <div style={{ animation: 'construct-in 1s cubic-bezier(0.19, 1, 0.22, 1) 0.4s backwards', display: 'inline-block' }}>
                <span 
                    style={{ 
                    color: '#fff',
                    textShadow: '0 0 5px rgba(220,38,38,0.5), 3px 3px 0px #dc2626',
                    position: 'relative',
                    display: 'inline-block',
                    padding: '0 10px',
                    background: 'linear-gradient(45deg, #dc2626 20%, transparent 20%)',
                    }}
                >
                    KHANA
                    {/* Glitch Effect Overlay */}
                    <span style={{
                    position: 'absolute', inset: 0, color: '#dc2626', opacity: 0.8,
                    clipPath: 'polygon(0 20%, 100% 20%, 100% 30%, 0 30%, 0 60%, 100% 60%, 100% 70%, 0 70%)',
                    transform: 'translate(4px, -2px)',
                    animation: 'glitch-skew-aggressive 2s infinite linear alternate-reverse',
                    textShadow: 'none', background: 'transparent', mixBlendMode: 'overlay'
                    }}>KHANA</span>
                </span>
              </div>
            </h1>

            <p
              style={{
                fontSize: '1.35rem',
                color: '#4a4a4a',
                maxWidth: '650px',
                marginBottom: '3.5rem',
                lineHeight: 1.6,
                borderLeft: '4px solid #dc2626',
                paddingLeft: '2rem',
                position: 'relative',
                animation: 'construct-in 1s ease-out 0.6s backwards',
                background: 'linear-gradient(90deg, rgba(220,38,38,0.05) 0%, transparent 50%)'
              }}
            >
              <span style={{ display: 'block', marginBottom: '10px', fontWeight: 700, color: '#dc2626', letterSpacing: '1px' }}>Is Initiating Sequence...</span>
              Executing nutritious home-cooked thali delivery protocols. Target coordinates locked: Your Doorstep. Latency: Minimal. Experience traditional Indian culinary data.
            </p>

            {/* Buttons */}
            <div className="hero-actions" style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', animation: 'construct-in 1s ease-out 0.8s backwards' }}>
              <button className="btn-cyber-v2 btn-cyber-v2-solid">
                Initiate Order
              </button>
              <button className="btn-cyber-v2">
                View Database
              </button>
            </div>
          </div>

          {/* --- RIGHT COLUMN: COMPLEX HOLOGRAPHIC HUD --- */}
          <div 
            className="hero-hud-wrapper"
            style={{ 
              position: 'relative', 
              display: 'flex', 
              justifyContent: 'center',
              perspective: '1500px',
              transformStyle: 'preserve-3d',
              height: '600px',
              alignItems: 'center'
            }}
          >
            {/* Main Hologram Container reacting to mouse */}
            <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                transform: `rotateX(${mousePosition.y * 1.2}deg) rotateY(${mousePosition.x * 1.2}deg)`,
                transition: 'transform 0.1s ease-out',
            }}>

                {/* HUD Layer 1: Outer Segmented Ring */}
                <div
                  className="hero-hud-ring-lg"
                  style={{
                  position: 'absolute', width: '580px', height: '580px',
                  border: '2px dashed rgba(220, 38, 38, 0.4)', borderRadius: '50%',
                  borderTopColor: 'transparent', borderBottomColor: 'transparent',
                  animation: 'spin-segmented 30s linear infinite',
                 }} />
                
                 {/* HUD Layer 2: Inner Counter-Rotating Ring with Gaps */}
                <div
                  className="hero-hud-ring-md"
                  style={{
                  position: 'absolute', width: '520px', height: '520px',
                  borderRadius: '50%',
                  border: '4px solid transparent',
                  borderTopColor: '#dc2626', borderLeftColor: '#dc2626',
                  opacity: 0.6,
                  clipPath: 'polygon(0 0, 40% 0, 50% 50%, 60% 0, 100% 0, 100% 100%, 0 100%)', // Create gaps
                  animation: 'spin-segmented 20s linear infinite reverse',
                }} />

                {/* HUD Layer 4: Corner Brackets */}
                <div style={{ position: 'absolute', inset: '50px', pointerEvents: 'none' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: 30, height: 30, borderTop: '3px solid #dc2626', borderLeft: '3px solid #dc2626' }} />
                    <div style={{ position: 'absolute', top: 0, right: 0, width: 30, height: 30, borderTop: '3px solid #dc2626', borderRight: '3px solid #dc2626' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: 30, height: 30, borderBottom: '3px solid #dc2626', borderLeft: '3px solid #dc2626' }} />
                    <div style={{ position: 'absolute', bottom: 0, right: 0, width: 30, height: 30, borderBottom: '3px solid #dc2626', borderRight: '3px solid #dc2626' }} />
                </div>


                {/* Main Tech Image Container */}
                <div
                  className="hero-hud-core"
                  style={{
                    position: 'relative',
                    width: '450px',
                    height: '450px',
                    // Complex layered polygon clip
                    clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)',
                    background: '#000',
                    transform: `translateZ(50px)`,
                    boxShadow: '0 0 80px rgba(220, 38, 38, 0.3), inset 0 0 30px rgba(220, 38, 38, 0.5)',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80"
                    alt="Futuristic Food"
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85,
                      filter: 'contrast(1.3) sepia(0.2) hue-rotate(-10deg)',
                    }}
                  />
                </div>

                {/* Floating Holographic Stat Panels */}
                <div
                  className="hero-hud-panel-energy"
                  style={{
                    position: 'absolute', bottom: '5%', left: '-15%',
                    background: 'rgba(255, 255, 255, 0.8)',
                    borderLeft: '5px solid #dc2626',
                    padding: '20px',
                    clipPath: 'polygon(0 0, 100% 15%, 90% 100%, 0 100%)',
                    backdropFilter: 'blur(5px)',
                    transform: `translateZ(80px)`,
                    animation: 'float-tech-jitter 5s ease-in-out infinite reverse',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.8rem', color: '#dc2626', letterSpacing: '2px', fontWeight: 700 }}>// ENERGY_READING</span>
                    <span style={{ fontSize: '2rem', fontWeight: 800, color: '#1a1a1a', textShadow: '2px 2px 0 rgba(220,38,38,0.2)' }}>450 KCAL</span>
                    <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
                        {[...Array(5)].map((_,i) => (
                            <div key={i} style={{ flex: 1, height: '6px', background: i < 4 ? '#dc2626' : '#ffcccb', transform: 'skewX(-20deg)' }} />
                        ))}
                    </div>
                  </div>
                </div>

                 {/* Floating Temp Gauge */}
                 <div
                  className="hero-hud-panel-temp"
                  style={{
                    position: 'absolute', top: '15%', right: '-10%',
                    background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                    color: 'white',
                    padding: '15px 25px',
                    clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%, 0 40%)',
                    transform: `translateZ(80px)`,
                    animation: 'float-tech-jitter 6s ease-in-out infinite',
                    display: 'flex', alignItems: 'center', gap: '15px',
                    boxShadow: '0 10px 20px rgba(220,38,38,0.3)'
                  }}
                >
                  <div style={{ width: 15, height: 15, background: 'white', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', animation: 'holo-flicker 0.5s infinite' }} />
                  <div>
                      <span style={{ display:'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '1px', opacity: 0.8 }}>TEMP.STATUS</span>
                      <span style={{ fontWeight: 800, letterSpacing: '1px', fontSize: '1.2rem' }}>OPTIMAL_HOT</span>
                  </div>
                </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;