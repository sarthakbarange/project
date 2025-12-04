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
        background: '#fde1af',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem',
        fontFamily: "'Rajdhani', 'Segoe UI', sans-serif",
        color: '#673200',
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700;800&display=swap');

          /* --- ANIMATED BACKGROUND --- */
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

          /* --- ANIMATIONS --- */
          
          @keyframes construct-in {
            0% { clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); opacity: 0; filter: blur(10px); }
            100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); opacity: 1; filter: blur(0); }
          }

          @keyframes border-flow {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }

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

          .tech-badge {
            position: relative;
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 10px 24px;
            margin-bottom: 2.5rem;
            background: rgba(255, 255, 255, 0.9);
            clip-path: polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%);
            border-bottom: 3px solid #fde1af;
            animation: construct-in 0.8s cubic-bezier(0.19, 1, 0.22, 1) backwards;
          }
          .tech-badge::before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: -1;
            background: linear-gradient(90deg, transparent, rgba(253, 225, 175, 0.2), transparent);
            animation: border-flow 3s linear infinite;
            background-size: 200% 100%;
          }

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
            color: #673200;
            clip-path: polygon(20px 0, 100% 0, calc(100% - 20px) 100%, 0 100%);
            transition: all 0.3s ease;
            z-index: 1;
          }

          .btn-cyber-v2::before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: -2;
            background: #fde1af;
            background: conic-gradient(from 0deg at 50% 50%, transparent 0deg, #fde1af 60deg, transparent 120deg, transparent 360deg);
            animation: spin-segmented 4s linear infinite;
            padding: 2px;
            -webkit-mask: 
               linear-gradient(#fff 0 0) content-box, 
               linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
          }
          
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
            color: #673200;
            text-shadow: 0 0 10px rgba(255,255,255,0.8);
            transform: scale(1.05);
          }
          .btn-cyber-v2:hover::after {
             background: #fde1af;
          }
          .btn-cyber-v2:hover::before {
             animation-duration: 1s;
             background: conic-gradient(from 0deg at 50% 50%, transparent 0deg, #fff 60deg, transparent 120deg, transparent 360deg);
          }

          .btn-cyber-v2-solid {
            color: #673200;
          }
          .btn-cyber-v2-solid::after {
              background: #fde1af;
          }
          .btn-cyber-v2-solid:hover::after {
              background: #fde1af;
          }

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

      {/* --- ANIMATED BACKGROUND --- */}
      <div className="tech-grid" />
      <div className="animated-lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <div className="line line-4"></div>
        <div className="line line-5"></div>
        <div className="line line-6"></div>
      </div>
      
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
                    color: '#673200',
                    textShadow: '0 0 5px rgba(253,225,175,0.5), 3px 3px 0px #fde1af',
                    position: 'relative',
                    display: 'inline-block',
                    padding: '0 10px',
                    background: 'linear-gradient(45deg, #fde1af 20%, transparent 20%)',
                    }}
                >
                    KHANA
                    <span style={{
                    position: 'absolute', inset: 0, color: '#673200', opacity: 0.8,
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
                color: '#673200',
                maxWidth: '650px',
                marginBottom: '3.5rem',
                lineHeight: 1.6,
                borderLeft: '4px solid #fde1af',
                paddingLeft: '2rem',
                position: 'relative',
                animation: 'construct-in 1s ease-out 0.6s backwards',
                background: 'linear-gradient(90deg, rgba(253,225,175,0.05) 0%, transparent 50%)'
              }}
            >
              <span style={{ display: 'block', marginBottom: '10px', fontWeight: 700, color: '#673200', letterSpacing: '1px' }}>Is Initiating Sequence...</span>
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
            <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                transform: `rotateX(${mousePosition.y * 1.2}deg) rotateY(${mousePosition.x * 1.2}deg)`,
                transition: 'transform 0.1s ease-out',
            }}>

                <div
                  className="hero-hud-ring-lg"
                  style={{
                  position: 'absolute', width: '580px', height: '580px',
                  border: '2px dashed rgba(103, 50, 0, 0.4)', borderRadius: '50%',
                  borderTopColor: 'transparent', borderBottomColor: 'transparent',
                  animation: 'spin-segmented 30s linear infinite',
                 }} />
                
                <div
                  className="hero-hud-ring-md"
                  style={{
                  position: 'absolute', width: '520px', height: '520px',
                  borderRadius: '50%',
                  border: '4px solid transparent',
                  borderTopColor: '#673200', borderLeftColor: '#673200',
                  opacity: 0.6,
                  clipPath: 'polygon(0 0, 40% 0, 50% 50%, 60% 0, 100% 0, 100% 100%, 0 100%)',
                  animation: 'spin-segmented 20s linear infinite reverse',
                }} />

                <div style={{ position: 'absolute', inset: '50px', pointerEvents: 'none' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: 30, height: 30, borderTop: '3px solid #fde1af', borderLeft: '3px solid #fde1af' }} />
                    <div style={{ position: 'absolute', top: 0, right: 0, width: 30, height: 30, borderTop: '3px solid #fde1af', borderRight: '3px solid #fde1af' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: 30, height: 30, borderBottom: '3px solid #fde1af', borderLeft: '3px solid #fde1af' }} />
                    <div style={{ position: 'absolute', bottom: 0, right: 0, width: 30, height: 30, borderBottom: '3px solid #fde1af', borderRight: '3px solid #fde1af' }} />
                </div>

                <div
                  className="hero-hud-core"
                  style={{
                    position: 'relative',
                    width: '450px',
                    height: '450px',
                    clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)',
                    background: '#000',
                    transform: `translateZ(50px)`,
                    boxShadow: '0 0 80px rgba(253, 225, 175, 0.3), inset 0 0 30px rgba(253, 225, 175, 0.5)',
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

                <div
                  className="hero-hud-panel-energy"
                  style={{
                    position: 'absolute', bottom: '5%', left: '-15%',
                    background: 'rgba(255, 255, 255, 0.8)',
                    borderLeft: '5px solid #fde1af',
                    padding: '20px',
                    clipPath: 'polygon(0 0, 100% 15%, 90% 100%, 0 100%)',
                    backdropFilter: 'blur(5px)',
                    transform: `translateZ(80px)`,
                    animation: 'float-tech-jitter 5s ease-in-out infinite reverse',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.8rem', color: '#673200', letterSpacing: '2px', fontWeight: 700 }}>// ENERGY_READING</span>
                    <span style={{ fontSize: '2rem', fontWeight: 800, color: '#673200', textShadow: '2px 2px 0 rgba(253,225,175,0.2)' }}>450 KCAL</span>
                    <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
                        {[...Array(5)].map((_,i) => (
                            <div key={i} style={{ flex: 1, height: '6px', background: i < 4 ? '#fde1af' : '#fde1af', transform: 'skewX(-20deg)' }} />
                        ))}
                    </div>
                  </div>
                </div>

                 <div
                  className="hero-hud-panel-temp"
                  style={{
                    position: 'absolute', top: '15%', right: '-10%',
                    background: 'linear-gradient(135deg, #fde1af, #fde1af)',
                    color: '#673200',
                    padding: '15px 25px',
                    clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%, 0 40%)',
                    transform: `translateZ(80px)`,
                    animation: 'float-tech-jitter 6s ease-in-out infinite',
                    display: 'flex', alignItems: 'center', gap: '15px',
                    boxShadow: '0 10px 20px rgba(253,225,175,0.3)'
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