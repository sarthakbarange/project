'use client';

import React, { useState, useEffect } from 'react';

type Step = {
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: '01',
    title: 'LOCATION_LOCK',
    description:
      'Enter your coordinates and sustenance protocols. We scan the grid for optimal local tiffin vectors.',
  },
  {
    number: '02',
    title: 'PLAN_SELECTION',
    description:
      'Analyze menus, hygiene metrics, and user ratings. Initialize daily, weekly, or monthly subscription cycles.',
  },
  {
    number: '03',
    title: 'LIVE_TRACKING',
    description:
      'Real-time telemetry of your dabba. Monitor extraction from kitchen to final destination coordinates.',
  },
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [animating, setAnimating] = useState(false);

  // Trigger a brief "re-render" animation state on step change
  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => setAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeStep]);

  const goNext = () => {
    setActiveStep((s) => Math.min(steps.length - 1, s + 1));
  };

  const goPrev = () => {
    setActiveStep((s) => Math.max(0, s - 1));
  };

  return (
    <section
      id="how-it-works"
      style={{
        padding: '80px 20px',
        // Keeping the requested background base
        background: 'linear-gradient(180deg, #fff9f9 0%, #ffffff 40%, #fff9f9 100%)',
        fontFamily: "'Inter', 'Rajdhani', sans-serif", // Rajdhani is a great sci-fi font if available, fallback to Inter
        color: '#111827',
        minHeight: '80vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&display=swap');

          /* --- ANIMATIONS --- */
          @keyframes gridMove {
            0% { background-position: 0 0; }
            100% { background-position: 40px 40px; }
          }

          @keyframes scanline {
            0% { top: -50%; opacity: 0; }
            50% { opacity: 1; }
            100% { top: 150%; opacity: 0; }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) rotateX(10deg) rotateY(-10deg); }
            50% { transform: translateY(-15px) rotateX(5deg) rotateY(-5deg); }
          }

          @keyframes pulseRed {
            0%, 100% { box-shadow: 0 0 10px rgba(202,43,43,0.2); }
            50% { box-shadow: 0 0 25px rgba(202,43,43,0.6); }
          }

          @keyframes textDecode {
            0% { opacity: 0; transform: translateX(-10px); letter-spacing: 5px; }
            100% { opacity: 1; transform: translateX(0); letter-spacing: normal; }
          }

          @keyframes slideUpFade {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          /* --- UTILS --- */
          .tech-grid {
            position: absolute;
            inset: 0;
            background-image: 
              linear-gradient(rgba(202, 43, 43, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(202, 43, 43, 0.05) 1px, transparent 1px);
            background-size: 40px 40px;
            animation: gridMove 20s linear infinite;
            z-index: 0;
            pointer-events: none;
          }

          .tech-card {
            /* The "Futuristic" Shape - Angled Corners */
            clip-path: polygon(
              20px 0, 100% 0, 
              100% calc(100% - 20px), calc(100% - 20px) 100%, 
              0 100%, 0 20px
            );
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.8);
            border: 1px solid rgba(202, 43, 43, 0.3);
            position: relative;
            transition: all 0.4s ease;
          }

          .tech-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; height: 1px;
            background: linear-gradient(90deg, transparent, #ca2b2b, transparent);
            z-index: 2;
          }

          .scanner-bar {
            position: absolute;
            left: 0;
            width: 100%;
            height: 20px;
            background: linear-gradient(180deg, rgba(202,43,43,0), rgba(202,43,43,0.2), rgba(202,43,43,0));
            animation: scanline 3s linear infinite;
            pointer-events: none;
            z-index: 1;
          }

          .number-cube {
             transform-style: preserve-3d;
             animation: float 6s ease-in-out infinite;
          }

          .btn-tech {
            clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
            transition: all 0.2s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-family: 'Rajdhani', sans-serif;
            font-weight: 700;
          }
          
          .btn-tech:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(202, 43, 43, 0.3);
          }
          
          .btn-tech:active:not(:disabled) {
            transform: translateY(1px);
          }

          .anim-text {
            animation: textDecode 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
          
          .anim-desc {
            animation: slideUpFade 0.5s ease forwards;
            animation-delay: 0.1s;
            opacity: 0; /* start hidden for anim */
          }

          .howit-card {
            display: flex;
          }

          .howit-controls {
            display: flex;
          }

          @media (max-width: 768px) {
            .howit-card {
              flex-direction: column;
              padding: 24px 20px !important;
              gap: 24px !important;
              align-items: stretch;
              text-align: center;
            }
            .howit-card .number-cube {
              width: 110px;
              height: 110px;
              margin: 0 auto 12px auto;
            }
            .howit-card-content {
              width: 100%;
            }
            .howit-card-content p {
              font-size: 1rem !important;
              margin-inline: auto;
            }
            .howit-controls {
              flex-wrap: wrap;
              gap: 12px;
            }
            .howit-controls .btn-tech {
              width: 100%;
              max-width: 260px;
              justify-content: center;
            }
          }
        `}
      </style>

      {/* Background Grid */}
      <div className="tech-grid" />
      
      {/* Decorative floating particles (Red) */}
      <div style={{ position: 'absolute', top: '10%', right: '5%', width: 100, height: 100, border: '1px solid rgba(202,43,43,0.1)', transform: 'rotate(45deg)' }} />
      <div style={{ position: 'absolute', bottom: '15%', left: '5%', width: 60, height: 60, border: '1px dashed rgba(202,43,43,0.2)', transform: 'rotate(-15deg)' }} />

      <div style={{ maxWidth: 1000, width: '100%', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: 60, position: 'relative' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '4px 12px', 
            marginBottom: 10,
            background: 'rgba(202,43,43,0.1)', 
            color: '#ca2b2b', 
            fontSize: '0.8rem', 
            letterSpacing: '0.2em', 
            fontWeight: 700,
            border: '1px solid rgba(202,43,43,0.2)'
          }}>
            SYSTEM PROTOCOL
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              margin: 0,
              fontWeight: 800,
              fontFamily: "'Rajdhani', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              background: 'linear-gradient(180deg, #111 0%, #444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              display: 'inline-block'
            }}
          >
            How It Works
            {/* Glitch underline */}
            <span style={{
              position: 'absolute', bottom: -10, left: 0, right: 0, height: 3, 
              background: '#ca2b2b',
              boxShadow: '0 0 10px #ca2b2b'
            }} />
          </h2>
        </header>

        {/* Main Interface Area */}
        <div style={{ display: 'flex', justifyContent: 'center', perspective: '1000px' }}>
          
          <article
            className="tech-card howit-card"
            style={{
              width: '100%',
              maxWidth: 900,
              minHeight: 320,
              padding: '50px',
              display: 'flex',
              gap: 40,
              alignItems: 'center',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
            }}
          >
            {/* The Scanner Line Animation */}
            <div className="scanner-bar" />

            {/* Left Side: 3D Number Badge */}
            <div 
              className="number-cube"
              style={{
                width: 140,
                height: 140,
                flexShrink: 0,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Outer Ring */}
              <div style={{
                position: 'absolute', inset: 0, 
                border: '2px solid rgba(202,43,43,0.3)', 
                clipPath: 'polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%)',
                animation: 'pulseRed 2s infinite'
              }} />
              
              {/* Inner Solid Tech Shape */}
              <div style={{
                width: 100, height: 100,
                background: 'linear-gradient(135deg, #ca2b2b 0%, #ff6b6b 100%)',
                clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff',
                fontSize: '3.5rem',
                fontWeight: 800,
                fontFamily: "'Rajdhani', sans-serif",
                boxShadow: '0 0 30px rgba(202,43,43,0.5)',
                textShadow: '2px 2px 0px rgba(0,0,0,0.2)'
              }}>
                {steps[activeStep].number}
              </div>

              {/* Decorative Lines */}
              <div style={{ position: 'absolute', top: -10, left: '50%', width: 2, height: 10, background: '#ca2b2b' }} />
              <div style={{ position: 'absolute', bottom: -10, left: '50%', width: 2, height: 10, background: '#ca2b2b' }} />
            </div>

            {/* Right Side: Content */}
            <div className="howit-card-content" style={{ flex: 1, position: 'relative', zIndex: 10 }}>
              
              {/* Header Row with Step Indicator */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div style={{ display: 'flex', gap: 4 }}>
                  {steps.map((_, idx) => (
                    <div 
                      key={idx}
                      style={{
                        width: 40, height: 4,
                        background: idx <= activeStep ? '#ca2b2b' : 'rgba(0,0,0,0.1)',
                        boxShadow: idx === activeStep ? '0 0 8px #ca2b2b' : 'none',
                        transition: 'all 0.3s'
                      }}
                    />
                  ))}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#999', fontFamily: 'monospace' }}>
                  STEP: 0{activeStep + 1} / 0{steps.length}
                </div>
              </div>

              {/* Title with Animation Key */}
              <div key={`title-${activeStep}`} className={animating ? 'anim-text' : ''}>
                <h3 style={{
                  fontSize: '2rem',
                  margin: 0,
                  fontWeight: 700,
                  fontFamily: "'Rajdhani', sans-serif",
                  color: '#111',
                  textTransform: 'uppercase'
                }}>
                  {steps[activeStep].title}
                </h3>
              </div>

              {/* Description with Animation Key */}
              <div key={`desc-${activeStep}`} className={animating ? 'anim-desc' : ''}>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  color: '#555',
                  marginTop: 15,
                  borderLeft: '4px solid #ca2b2b',
                  paddingLeft: 20,
                }}>
                  {steps[activeStep].description}
                </p>
              </div>

              {/* Tech Stats / Decor below text */}
              <div style={{ marginTop: 30, display: 'flex', gap: 20, opacity: 0.6 }}>
                <div style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#ca2b2b' }}>
                  STATUS: <span style={{ color: '#000' }}>ACTIVE</span>
                </div>
                <div style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#ca2b2b' }}>
                  LATENCY: <span style={{ color: '#000' }}>12ms</span>
                </div>
              </div>

            </div>
          </article>
        </div>

        {/* Navigation Controls */}
        <div className="howit-controls" style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 50 }}>
          <button
            onClick={goPrev}
            disabled={activeStep === 0}
            className="btn-tech"
            style={{
              background: '#fff',
              color: '#333',
              border: '1px solid #ddd',
              padding: '16px 40px',
              cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
              opacity: activeStep === 0 ? 0.5 : 1,
            }}
          >
            &lt; PREV
          </button>

          <button
            onClick={goNext}
            disabled={activeStep === steps.length - 1}
            className="btn-tech"
            style={{
              background: activeStep === steps.length - 1 ? '#333' : '#ca2b2b',
              color: '#fff',
              border: 'none',
              padding: '16px 40px',
              cursor: activeStep === steps.length - 1 ? 'not-allowed' : 'pointer',
              opacity: activeStep === steps.length - 1 ? 0.8 : 1,
              boxShadow: activeStep === steps.length - 1 ? 'none' : '0 0 20px rgba(202,43,43,0.4)'
            }}
          >
            {activeStep === steps.length - 1 ? 'INITIALIZED' : 'NEXT SEQUENCE >'}
          </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;