'use client';

import React, { useState, useEffect, useRef } from 'react';

type Step = {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
};

// Updated 5 Steps with your text
const steps: Step[] = [
  {
    number: '01',
    title: 'SIGN IN TO GET STARTED',
    description:
      'Create your account or log in so we can personalize your tiffin experience.',
    imageUrl: '/HIW.png',
  },
  {
    number: '02',
    title: 'DISCOVER NEARBY TIFFIN PROVIDER INSTANTLY.',
    description:
      'We automatically show tiffin providers available near your home, hostel, or workplace.',
    imageUrl: '/HIW2.png',
  },
  {
    number: '03',
    title: 'EXPLORE VERIFIED PROVIDERS',
    description:
      'Compare hygiene ratings, menus, reviews, and pricing to choose the best provider for you.',
    imageUrl: '/HIW3.png',
  },
  {
    number: '04',
    title: 'CHOOSE YOUR MEAL PLAN',
    description:
      'Pick either a One-Day Meal or a Monthly Subscription, and fill in the basic details.',
    imageUrl: '/HIW4.png',
  },
  {
    number: '05',
    title: 'ORDER & RELAX',
    description:
      'Place your order and receive fresh, home-style tiffin right at your doorstep.',
    imageUrl: '/HIW5.png',
  },
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsGlitching(true);
    timeoutRef.current = setTimeout(() => setIsGlitching(false), 700);
    return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeStep]);

  const goNext = () => {
    setActiveStep((s) => Math.min(steps.length - 1, s + 1));
  };

  const goPrev = () => {
    setActiveStep((s) => Math.max(0, s - 1));
  };

  const currentStepData = steps[activeStep];

  return (
    <section
      id="how-it-works"
      style={{
        padding: '80px 20px',
        background: '#fde1af',
        fontFamily: "'Rajdhani', sans-serif",
        color: '#673200',
        minHeight: '90vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

          :root {
            --theme-red: #fde1af;
            --theme-red-glow: rgba(253, 225, 175, 0.6);
            --theme-dark: #673200;
            --theme-white-rgba: rgba(255, 255, 255, 0.9);
          }

          /* --- ANIMATED BACKGROUND WITH FLOWING LINES --- */
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

          /* --- EXISTING ANIMATIONS --- */
          @keyframes holoFlicker {
            0%, 100% { opacity: 0.9; filter: brightness(1); }
            5% { opacity: 0.8; filter: brightness(1.2); }
            10% { opacity: 0.9; filter: brightness(1); }
            50% { opacity: 0.95; filter: brightness(1.1); }
            55% { opacity: 0.85; filter: brightness(0.9); }
          }

          @keyframes contentGlitchIn {
            0% { clip-path: inset(50% 0 50% 0); transform: skew(10deg); filter: grayscale(1) contrast(2); opacity: 0;}
            20% { clip-path: inset(10% 0 60% 0); transform: skew(-10deg); opacity: 0.5;}
            40% { clip-path: inset(40% 0 20% 0); transform: skew(5deg); opacity: 0.8;}
            60% { clip-path: inset(0 0 0 0); transform: skew(0); filter: none; opacity: 1;}
            80% { filter: brightness(1.5); }
            100% { filter: none; }
          }

          /* --- CARD STYLES --- */
          .main-interface-container {
              position: relative;
              width: 100%;
              max-width: 1100px;
              padding: 4px;
              background: var(--theme-red); 
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
              z-index: 10;
          }

          .holo-card {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            backdrop-filter: blur(15px);
            background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,245,0.85) 100%);
            border: 1px solid rgba(103, 50, 0, 0.2);
            padding: 0;
            display: flex;
            gap: 0;
            align-items: stretch;
            min-height: 450px;
            position: relative;
            overflow: hidden;
          }
          
          /* DIAGONAL SPLIT: Left Image Container */
          .holo-visual-container {
              width: 55%; 
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%); 
              overflow: hidden;
              background: #000;
              z-index: 2; 
          }
          
          .holo-image {
              position: absolute; inset: 0;
              background-size: cover;
              background-position: center;
              filter: grayscale(100%) contrast(1.2) brightness(0.8);
              opacity: 0.6;
              animation: holoFlicker 5s infinite;
          }
          
          .holo-image::before {
             content: ''; position: absolute; inset: 0;
             background: linear-gradient(45deg, rgba(253,225,175,0.6), rgba(0,0,0,0.2));
             mix-blend-mode: overlay;
          }
          
          /* DIAGONAL SPLIT: Right Content Container */
          .holo-content {
              width: 55%; 
              margin-left: -10%; 
              display: flex;
              flex-direction: column;
              justify-content: center;
              position: relative;
              z-index: 1;
              clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
              padding: 50px 50px 50px 100px;
              background: transparent;
          }

          .step-content {
              min-height: 190px;
          }

          .glitch-animate {
              animation: contentGlitchIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          }

          .tech-h2 {
            font-size: clamp(3rem, 6vw, 5rem);
            margin: 0 0 60px 0;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: -0.02em;
            color: var(--theme-dark);
            position: relative;
            display: inline-block;
            text-shadow: 2px 2px 0px rgba(103, 50, 0, 0.25);
          }
          .tech-h2::after {
              content: 'SYSTEM_PROTOCOLS';
              position: absolute;
              top: 100%;
              left: 0;
              font-family: 'Share Tech Mono', monospace;
              font-size: 1rem;
              color: var(--theme-red);
              letter-spacing: 5px;
              opacity: 0.7;
          }

          .step-indicators { display: flex; gap: 8px; margin-bottom: 30px; }
          .step-dot {
              height: 6px; flex-grow: 1;
              background: rgba(103, 50, 0, 0.2);
              transform: skew(-20deg);
              transition: all 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
          }
          .step-dot.active {
              background: var(--theme-red);
              box-shadow: 0 0 15px var(--theme-red-glow);
              flex-grow: 2;
          }

          .tech-h3 {
              font-size: clamp(1.6rem, 4vw, 2.5rem); margin: 0; font-weight: 800;
              text-transform: uppercase; color: var(--theme-dark);
              background: linear-gradient(90deg, var(--theme-dark) 50%, var(--theme-red) 50%);
              background-clip: text; -webkit-background-clip: text;
              color: transparent;
              background-size: 200% 100%;
              background-position: 0% 50%;
              transition: background-position 0.5s ease;
          }
         .holo-card:hover .tech-h3 { background-position: 10% 50%; }

          .tech-p {
              font-size: clamp(0.95rem, 2.8vw, 1.2rem); line-height: 1.7; color: #673200;
              margin-top: 25px;
              padding-left: 25px;
              border-left: 4px solid var(--theme-red);
              position: relative;
              font-weight: 500;
          }
          .tech-p::before {
              content: '>> DATA_PACKET:';
              position: absolute; top: -20px; left: 0;
              font-family: 'Share Tech Mono', monospace;
              font-size: 0.8rem; color: #673200; opacity: 0.8;
          }

          .btn-cyberglow {
            position: relative;
            padding: 18px 45px;
            border: none;
            background: transparent;
            color: #673200;
            font-family: 'Rajdhani', sans-serif;
            font-weight: 700;
            font-size: 1.1rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            cursor: pointer;
            clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
            transition: all 0.3s ease;
            overflow: hidden;
            z-index: 1;
          }

          .btn-cyberglow::before {
              content: ''; position: absolute; inset: 0;
              border: 2px solid #fde1af;
              clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
              z-index: -1; transition: all 0.3s ease;
          }

          .btn-cyberglow.primary {
             background: #fde1af; color: #673200;
             box-shadow: 0 0 30px var(--theme-red-glow);
          }
          .btn-cyberglow.primary::before { border-color: transparent; }
          .btn-cyberglow.primary:hover:not(:disabled) {
             box-shadow: 0 0 50px var(--theme-red), inset 0 0 20px white;
             text-shadow: 0 0 10px white;
          }

          .btn-cyberglow.secondary:hover:not(:disabled) {
              background: rgba(103, 50, 0, 0.1);
              box-shadow: 0 0 20px var(--theme-red-glow);
          }

          .btn-cyberglow:disabled { opacity: 0.4; cursor: not-allowed; box-shadow: none; }

          .nav-controls {
            display: flex;
            gap: 25px;
            margin-top: 60px;
            z-index: 10;
            justify-content: center;
            align-items: center;
          }

          @media (max-width: 900px) {
            .holo-card { 
              flex-direction: column; 
              padding: 0; 
              gap: 0; 
              min-height: auto; 
            }
            .holo-visual-container { 
              width: 100%; 
              height: 250px; 
              flex: none;
              clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
              background: #000;
            }
            .holo-content { 
              width: 100%; 
              margin-left: 0;
              flex: none;
              clip-path: none;
              padding: 30px 20px 32px 20px;
              background: transparent;
            }
            .tech-h2 { font-size: 3rem; margin-bottom: 80px;}
            .tech-h3 { font-size: 1.8rem; }
            .tech-p {
              font-size: 1rem;
              margin-top: 20px;
              padding-left: 18px;
            }
            .nav-controls {
              margin-top: 40px;
            }
          }

          @media (max-width: 600px) {
            .nav-controls {
              width: 100%;
              justify-content: space-between;
              gap: 12px;
            }
            .nav-controls .btn-cyberglow {
              flex: 1;
              max-width: none;
              padding: 12px 10px;
              font-size: 0.9rem;
              text-align: center;
            }
          }
        `}
      </style>

      {/* Animated Background Grid & Lines */}
      <div className="tech-grid" />
      <div className="animated-lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <div className="line line-4"></div>
        <div className="line line-5"></div>
        <div className="line line-6"></div>
      </div>

      {/* Header */}
      <header style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <h2 className="tech-h2">
          How It Works
        </h2>
      </header>

      {/* Main Futuristic Interface Container */}
      <div className="main-interface-container">
        <article className="holo-card">

          {/* Left: Holographic Visuals */}
          <div className="holo-visual-container">
            <div
                className="holo-image"
                style={{ backgroundImage: `url(${currentStepData.imageUrl})` }}
            />
          </div>

          {/* Right: Content Text */}
          <div className="holo-content">
             {/* Step Progress Bar */}
            <div className="step-indicators">
              {steps.map((_, idx) => (
                <div key={idx} className={`step-dot ${idx <= activeStep ? 'active' : ''}`} />
              ))}
            </div>

            {/* Title & Description with Glitch Transition Effect */}
            <div className={`step-content ${isGlitching ? 'glitch-animate' : ''}`}>
                <h3 className="tech-h3">
                {currentStepData.title}
                </h3>

                <p className="tech-p">
                {currentStepData.description}
                </p>
            </div>

             {/* Tech Footer Details */}
            <div style={{ marginTop: 'auto', paddingTop: 30, display: 'flex', justifyContent: 'space-between', fontFamily: "'Share Tech Mono', monospace", color: 'rgba(103,50,0,0.7)', fontSize: '0.8rem' }}>
                <div>MODULE: {currentStepData.title.substring(0, 4)}-X</div>
                <div>STATUS: <span style={{color: '#673200'}}>ONLINE</span></div>
            </div>
          </div>

        </article>
      </div>

      {/* Navigation Controls */}
      <div className="nav-controls">
        <button
          onClick={goPrev}
          disabled={activeStep === 0}
          className="btn-cyberglow secondary"
        >
          &lt; // PREV_STEP
        </button>

        <button
          onClick={goNext}
          disabled={activeStep === steps.length - 1}
          className="btn-cyberglow primary"
        >
          {activeStep === steps.length - 1 ? 'INITIALIZED_ //COMMENCE' : 'NEXT_SEQUENCE_ //EXECUTE >'}
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;