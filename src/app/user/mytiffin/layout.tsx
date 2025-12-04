"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MyTiffinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  const links = [
    { href: '/user/mytiffin/hygene', label: 'Hygene' },
    { href: '/user/mytiffin/orders', label: 'Orders' },
    { href: '/user/mytiffin/subscriptions', label: 'Subscriptions' },
    { href: '/user/mytiffin/support', label: 'Support' },
    { href: '/user/mytiffin/yourtiffin', label: 'Your Tiffin' },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'block',
        background: '#fde1af',
        fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
        color: '#673200',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {sidebarOpen && (
        <>
          {isMobile && (
            <div
              onClick={() => setSidebarOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.45)',
                zIndex: 30,
              }}
            />
          )}
          <aside
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              height: '100vh',
              width: isMobile ? 'min(320px, 80vw)' : 260,
              maxWidth: isMobile ? '80vw' : '260px',
              background: 'linear-gradient(180deg, #673200, #4b2100)',
              padding: '24px 20px',
              boxShadow: isMobile
                ? '0 20px 45px rgba(0, 0, 0, 0.55)'
                : '8px 0 26px rgba(0, 0, 0, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
              zIndex: 40,
              overflowY: 'auto',
            }}
          >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <div
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#fde1af',
              }}
            >
              My Tiffin
            </div>
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
              style={{
                border: 'none',
                background: 'transparent',
                color: '#fde1af',
                cursor: 'pointer',
                fontSize: 18,
                lineHeight: 1,
                padding: 4,
              }}
            >
              ×
            </button>
          </div>

          <div
            style={{
              height: 1,
              width: '100%',
              background:
                'linear-gradient(90deg, rgba(253,225,175,0), rgba(253,225,175,0.8), rgba(253,225,175,0))',
              marginBottom: 8,
            }}
          />

          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: 999,
                  textDecoration: 'none',
                  background: 'rgba(253, 225, 175, 0.08)',
                  border: '1px solid rgba(253, 225, 175, 0.45)',
                  color: '#fde1af',
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  boxShadow:
                    '0 10px 18px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.06)',
                }}
              >
                <span>{link.label}</span>
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#fde1af',
                    boxShadow: '0 0 10px rgba(253, 225, 175, 0.9)',
                  }}
                />
              </Link>
            ))}

            <Link
              href="/auth/login"
              style={{
                marginTop: 16,
                padding: '10px 14px',
                borderRadius: 999,
                textDecoration: 'none',
                background: '#fde1af',
                border: '1px solid rgba(253, 225, 175, 0.9)',
                color: '#673200',
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                textAlign: 'center',
                boxShadow: '0 10px 18px rgba(0, 0, 0, 0.45)',
              }}
            >
              Logout
            </Link>
          </nav>
      </aside>
        </>
      )}

      <main
        style={{
          flex: 1,
          padding: '32px 24px',
          // On tablet/desktop, shift content so it sits beside the fixed sidebar
          // Add a slightly larger gap (20px) between sidebar and content on larger screens
          marginLeft: !isMobile && sidebarOpen ? '280px' : 0,
          transition: 'margin-left 0.25s ease',
        }}
      >
        {!sidebarOpen && (
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            style={{
              marginBottom: 16,
              padding: '8px 14px',
              borderRadius: 999,
              border: '1px solid rgba(103, 50, 0, 0.35)',
              background: 'rgba(255,255,255,0.9)',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            Open Menu
          </button>
        )}
        {children}
      </main>
    </div>
  );
}
