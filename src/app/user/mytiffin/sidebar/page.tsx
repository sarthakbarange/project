import React from 'react';
import Link from 'next/link';

const MyTiffinSidebarPage: React.FC = () => {
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
        display: 'flex',
        background: '#fde1af',
        fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
        color: '#673200',
      }}
    >
      <aside
        style={{
          width: 260,
          maxWidth: '75vw',
          background: 'linear-gradient(180deg, #673200, #4b2100)',
          padding: '32px 20px',
          boxShadow: '8px 0 26px rgba(0, 0, 0, 0.35)',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
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
        </nav>
      </aside>

      <main
        style={{
          flex: 1,
          padding: '40px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 720,
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(253,225,175,0.9))',
            borderRadius: 28,
            padding: '32px 28px',
            boxShadow:
              '0 22px 40px rgba(103, 50, 0, 0.30), 0 0 0 1px rgba(255, 255, 255, 0.7)',
            border: '1px solid rgba(103, 50, 0, 0.18)',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              marginBottom: 12,
            }}
          >
            My Tiffin Console
          </h1>

          <p
            style={{
              fontSize: 15,
              lineHeight: 1.7,
              maxWidth: 520,
              opacity: 0.9,
              marginBottom: 20,
            }}
          >
            Use the sidebar on the left to jump into your hygiene, orders, subscriptions,
            support, or personal tiffin details.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 16,
            }}
          >
            <div
              style={{
                padding: '14px 16px',
                borderRadius: 18,
                background: 'rgba(103, 50, 0, 0.06)',
                border: '1px dashed rgba(103, 50, 0, 0.35)',
                fontSize: 13,
              }}
            >
              Keep an eye on hygiene scores and kitchen certifications.
            </div>
            <div
              style={{
                padding: '14px 16px',
                borderRadius: 18,
                background: 'rgba(103, 50, 0, 0.06)',
                border: '1px dashed rgba(103, 50, 0, 0.35)',
                fontSize: 13,
              }}
            >
              Track recent orders and upcoming deliveries.
            </div>
            <div
              style={{
                padding: '14px 16px',
                borderRadius: 18,
                background: 'rgba(103, 50, 0, 0.06)',
                border: '1px dashed rgba(103, 50, 0, 0.35)',
                fontSize: 13,
              }}
            >
              Manage active subscriptions and billing cycles.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyTiffinSidebarPage;

