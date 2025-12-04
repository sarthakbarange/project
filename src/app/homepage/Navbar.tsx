'use client';
import { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Plans', href: '#plans' },
    { label: 'Hygiene', href: '#hygiene' },
    { label: 'Become a Provider', href: '#provider' },
  ];

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled 
          ? '#673200'
          : '#673200',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        // Futuristic border bottom
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: scrolled 
          ? '0 10px 30px -10px rgba(0,0,0,0.5)' 
          : 'none',
        padding: scrolled ? '0.75rem 2rem' : '1rem 2rem',
        transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
        fontFamily: "'Rajdhani', sans-serif",
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700;800&display=swap');

          @keyframes scan-nav {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes nav-glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }
          @keyframes blink-cursor {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          .nav-tech-bg {
            position: absolute;
            inset: 0;
            background-image: 
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 20px 20px;
            pointer-events: none;
            z-index: -1;
          }

          .nav-link-tech {
            position: relative;
            color: #fde1af;
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            padding: 0.5rem 0.75rem;
            transition: all 0.3s ease;
          }
          
          .nav-link-tech::before {
            content: '[';
            position: absolute;
            left: 0px;
            opacity: 0;
            transition: all 0.3s ease;
            color: #fde1af;
          }
          .nav-link-tech::after {
            content: ']';
            position: absolute;
            right: 0px;
            opacity: 0;
            transition: all 0.3s ease;
            color: #fde1af;
          }

          .nav-link-tech:hover {
            color: #fde1af;
            text-shadow: 0 0 10px rgba(255,255,255,0.8);
            padding: 0.5rem 1.25rem; /* Make space for brackets */
          }
          .nav-link-tech:hover::before { opacity: 1; left: 0; }
          .nav-link-tech:hover::after { opacity: 1; right: 0; }

          .logo-glitch:hover {
            animation: nav-glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
            text-shadow: 2px 0 #fff, -2px 0 rgba(0,0,0,0.5);
          }

          .mobile-menu-btn {
             background: rgba(255,255,255,0.1);
             border: 1px solid rgba(255,255,255,0.2);
             clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
             transition: all 0.3s ease;
          }
          .mobile-menu-btn:hover {
             background: rgba(255,255,255,0.2);
             box-shadow: 0 0 15px rgba(255,255,255,0.2);
          }

          .nav-links-desktop { display: none; }
          .nav-menu-toggle { display: flex; }
          .nav-links-mobile { 
            display: none; 
            flex-direction: column;
            align-items: stretch;
          }
          .nav-links-mobile.open { display: flex; }
          .nav-links-mobile a {
            width: 100%;
            display: block;
          }

          @media (min-width: 900px) {
            .nav-links-desktop { display: flex; }
            .nav-menu-toggle { display: none; }
            .nav-links-mobile { display: none; }
          }
        `}
      </style>

      {/* Tech Grid Background Overlay */}
      <div className="nav-tech-bg" />
      
      {/* Animated Scan Line at Bottom */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, width: '100%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
        animation: 'scan-nav 4s linear infinite',
        opacity: 0.5
      }} />

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* LOGO AREA */}
        <div
          className="logo-glitch"
          style={{
            fontSize: scrolled ? '1.5rem' : '1.8rem',
            fontWeight: 800,
            color: '#fde1af',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span style={{ color: 'rgba(253,225,175,0.6)' }}>//</span>
          <span>HYGENIC...</span>
          <span style={{ 
            width: '8px', height: '18px', background: '#fff', display: 'inline-block',
            animation: 'blink-cursor 1s steps(2) infinite'
          }} />
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          className="nav-menu-toggle mobile-menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          style={{
            padding: '0.5rem 1rem',
            color: '#fde1af',
            cursor: 'pointer',
            gap: '0.5rem',
            alignItems: 'center'
          }}
        >
          <span style={{ fontFamily: 'Rajdhani', fontWeight: 700, letterSpacing: '2px' }}>MENU</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ width: 16, height: 2, background: 'white' }} />
            <span style={{ width: 10, height: 2, background: 'white', alignSelf: 'flex-end' }} />
            <span style={{ width: 16, height: 2, background: 'white' }} />
          </div>
        </button>

        {/* DESKTOP LINKS */}
        <div
          className="nav-links-desktop"
          style={{
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link-tech"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
          {/* Action Button */}
          <a
            href="#order"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#order');
            }}
            style={{
              marginLeft: '1rem',
              padding: '0.6rem 1.5rem',
              background: '#fff',
              color: '#fde1af',
              fontWeight: 800,
              fontFamily: 'Rajdhani',
              textTransform: 'uppercase',
              textDecoration: 'none',
              clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
              transition: 'all 0.3s ease',
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#000';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(255,255,255,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#fde1af';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            MY_TIFFIN
          </a>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`nav-links-mobile ${menuOpen ? 'open' : ''}`}
          style={{
            width: '100%',
            maxWidth: 280,
            margin: '1rem auto 0 auto',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            gap: '0.5rem'
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                color: '#fde1af',
                fontFamily: 'Rajdhani',
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                textDecoration: 'none',
                padding: '0.8rem',
                background: 'rgba(0,0,0,0.2)',
                transition: 'all 0.2s',
                textAlign: 'center',
              }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
                setMenuOpen(false);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.2)';
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#order"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#order');
              setMenuOpen(false);
            }}
            style={{
              marginTop: '0.5rem',
              padding: '0.9rem 1.2rem',
              background: '#fff',
              color: '#fde1af',
              fontWeight: 800,
              fontFamily: 'Rajdhani',
              textTransform: 'uppercase',
              textDecoration: 'none',
              clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
              transition: 'all 0.3s ease',
              letterSpacing: '1px',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#000';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(255,255,255,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#fde1af';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            MY_TIFFIN
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;