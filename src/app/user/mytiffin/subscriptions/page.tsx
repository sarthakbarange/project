import React from 'react';

const SubscriptionsPage: React.FC = () => {
  return (
    <section
      style={{
        minHeight: '80vh',
        padding: '80px 16px',
        background: '#fde1af',
        fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
        color: '#673200',
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            marginBottom: '40px',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              background: 'rgba(103, 50, 0, 0.08)',
              borderRadius: '999px',
              border: '1px solid rgba(103, 50, 0, 0.25)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#673200',
                boxShadow: '0 0 10px rgba(103, 50, 0, 0.7)',
              }}
            />
            MY TIFFIN CONSOLE
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              fontWeight: 800,
              textTransform: 'uppercase',
              marginTop: '20px',
              marginBottom: '12px',
              letterSpacing: '-1px',
            }}
          >
            Active Tiffin Subscriptions
          </h1>

          <p
            style={{
              fontSize: '16px',
              maxWidth: '640px',
              lineHeight: 1.6,
              opacity: 0.9,
            }}
          >
            Review and manage the kitchens you are currently subscribed to. Track billing
            cycles, delivery windows, and pause or resume your tiffin streams.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '24px',
                padding: '24px',
                border: '1px solid rgba(103, 50, 0, 0.15)',
                boxShadow:
                  '0 18px 35px rgba(103, 50, 0, 0.18), 0 0 0 1px rgba(255, 255, 255, 0.6)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '6px',
                }}
              >
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Kitchen #{index}
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '999px',
                    background: 'rgba(103, 50, 0, 0.08)',
                    border: '1px solid rgba(103, 50, 0, 0.25)',
                  }}
                >
                  ACTIVE
                </span>
              </div>

              <div
                style={{
                  fontSize: '14px',
                  lineHeight: 1.5,
                  opacity: 0.9,
                }}
              >
                Balanced veg/non-veg rotation with weekday delivery to your registered
                address.
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '10px',
                  fontSize: '13px',
                }}
              >
                <div>
                  <div>Next billing: 05 Jan</div>
                  <div style={{ opacity: 0.8 }}>Window: Mon–Fri, 12:30–1:30 PM</div>
                </div>
                <button
                  style={{
                    padding: '8px 16px',
                    borderRadius: '999px',
                    border: 'none',
                    background: '#673200',
                    color: '#fde1af',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  Manage
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionsPage;
