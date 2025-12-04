import React from 'react';

const MyTiffinHomePage: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(2rem, 3vw, 2.6rem)',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '-0.03em',
          marginBottom: 4,
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
        }}
      >
        Welcome to your personal tiffin dashboard. From here you can review hygiene
        scores, track deliveries, manage active subscriptions, and tune your personal
        tiffin profile.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 16,
          marginTop: 12,
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
          Jump into <strong>Hygene</strong> to see how kitchens are audited and rated.
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
          Open <strong>Orders</strong> for a quick look at recent and upcoming tiffins.
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
          Use <strong>Subscriptions</strong> to manage billing, plans, and delivery
          windows.
        </div>
      </div>
    </div>
  );
};

export default MyTiffinHomePage;
