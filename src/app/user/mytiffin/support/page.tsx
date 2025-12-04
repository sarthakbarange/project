"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  PhoneCall,
  Mail,
  Headphones,
  UploadCloud,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const palette = {
  sand: "#fde1af",
  cocoa: "#673200",
  cream: "#fff7eb",
  accent: "rgba(103, 50, 0, 0.12)",
};

const quickHelp = [
  {
    title: "Order Issue",
    body: "Report missing items, late delivery, or food quality concerns.",
  },
  {
    title: "Subscription Help",
    body: "Pause, skip, cancel, or modify your Weekly/Monthly plan.",
  },
  {
    title: "Payment & Refunds",
    body: "Track payments, refund status, or failed transactions.",
  },
  {
    title: "Delivery Support",
    body: "Wrong address, delayed delivery, or rider-related issues.",
  },
];

const commonProblems = [
  {
    title: "I didn’t receive my tiffin today",
    desc: "Track or report today’s meal delivery.",
  },
  {
    title: "My food quality was not good",
    desc: "Raise a complaint and request help.",
  },
  {
    title: "I want to pause or skip my subscription",
    desc: "Modify your subscription instantly.",
  },
  {
    title: "I want a refund",
    desc: "Check eligibility and refund timelines.",
  },
  {
    title: "Delivery partner couldn’t reach me",
    desc: "Update address or give delivery instructions.",
  },
  {
    title: "Payment deducted but order not confirmed",
    desc: "We’ll fix it immediately.",
  },
];

const faqs = [
  {
    q: "How do I pause my subscription?",
    a: "Go to My Tiffin → Subscription → Pause. Select the dates and confirm.",
  },
  {
    q: "When will I get my refund?",
    a: "Refunds usually take 24–48 hours, depending on your payment method.",
  },
  {
    q: "What if the delivery is late?",
    a: "You can track live status in My Tiffin. For delays, chat with support.",
  },
  {
    q: "Can I change my delivery address?",
    a: "Yes! Go to Profile → Address and update your address anytime.",
  },
  {
    q: "How do I change my provider?",
    a: "Provider change is allowed before the next billing cycle begins.",
  },
];

const trustPoints = [
  "Verified Providers",
  "Daily Hygiene Checks",
  "Secure Payments",
  "Quick Customer Support",
];

const issueCategories = [
  "Order Issue",
  "Subscription",
  "Payment",
  "Delivery",
  "App / Account",
];

const SupportPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        background: palette.sand,
        padding: "48px 16px 72px",
        fontFamily: "'Rajdhani', 'Segoe UI', sans-serif",
        color: palette.cocoa,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        <header>
          <p
            style={{
              letterSpacing: 4,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 12,
            }}
          >
            We’re Here to Help
          </p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              margin: "8px 0",
              fontWeight: 800,
            }}
          >
            Get quick answers, report an issue, or connect with our support team
            anytime.
          </h1>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {quickHelp.map((card) => (
            <div
              key={card.title}
              style={{
                background: palette.cream,
                borderRadius: 18,
                padding: 20,
                border: `1px solid ${palette.accent}`,
                boxShadow: "0 12px 30px rgba(103,50,0,0.12)",
              }}
            >
              <p style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>
                {card.title}
              </p>
              <p style={{ opacity: 0.85, fontSize: 15 }}>{card.body}</p>
              <button
                style={{
                  marginTop: 16,
                  border: "none",
                  background: "transparent",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: palette.cocoa,
                  cursor: "pointer",
                }}
              >
                Continue <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </section>

        <section
          style={{
            background: "rgba(255,255,255,0.9)",
            borderRadius: 24,
            padding: 28,
            border: `1px solid ${palette.accent}`,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            <div>
              <h2 style={{ marginTop: 0, fontSize: 22 }}>Common Problems</h2>
              <p style={{ marginBottom: 20, opacity: 0.8 }}>
                These are the most searched issues across tiffin deliveries.
                Tap a topic to start troubleshooting.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gap: 12,
              }}
            >
              {commonProblems.map((problem) => (
                <button
                  key={problem.title}
                  style={{
                    border: "1px solid rgba(103,50,0,0.2)",
                    borderRadius: 18,
                    padding: "14px 18px",
                    textAlign: "left",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <strong style={{ display: "block", fontSize: 16 }}>
                    {problem.title}
                  </strong>
                  <span style={{ opacity: 0.75, fontSize: 14 }}>{problem.desc}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <div
            style={{
              background: palette.cream,
              borderRadius: 24,
              padding: 24,
              border: `1px solid ${palette.accent}`,
              boxShadow: "0 18px 40px rgba(103,50,0,0.15)",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Live Help</h2>
            <p style={{ marginBottom: 18 }}>Important trust-building area</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p>
                <strong>Contact Support</strong>
                <br /> Available: 8 AM – 10 PM
                <br /> Response time: 2–5 minutes
              </p>
              <p>
                Call: <strong>+91-8080-000-123</strong>
                <br /> Email: support@tiffinconnect.com
                <br /> Chat Support: <a href="#" style={{ fontWeight: 700 }}>Start Chat →</a>
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{
              background: "rgba(255,255,255,0.95)",
              borderRadius: 24,
              padding: 24,
              border: `1px solid ${palette.accent}`,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <h2 style={{ marginTop: 0 }}>Report an Issue</h2>
            {submitted && (
              <div
                style={{
                  background: "rgba(103,50,0,0.1)",
                  borderRadius: 12,
                  padding: 12,
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <CheckCircle2 size={20} />
                <span>
                  We’ve received your request. Our team will get back to you
                  within 10–30 minutes.
                </span>
              </div>
            )}
            <div style={{ display: "grid", gap: 12 }}>
              <input required placeholder="Name" style={inputStyle} />
              <input required placeholder="Phone Number" style={inputStyle} />
              <input placeholder="Order / Subscription ID" style={inputStyle} />
              <select required style={inputStyle} defaultValue="">
                <option value="" disabled>
                  Issue Category
                </option>
                {issueCategories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
              <textarea
                required
                placeholder="Description"
                rows={4}
                style={{ ...inputStyle, resize: "vertical" }}
              />
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 14px",
                  borderRadius: 16,
                  border: `1px dashed ${palette.cocoa}`,
                  cursor: "pointer",
                }}
              >
                <UploadCloud size={18} /> Upload Photo (optional)
                <input type="file" hidden />
              </label>
            </div>
            <button
              type="submit"
              style={{
                marginTop: 8,
                padding: "14px 18px",
                border: "none",
                borderRadius: 18,
                background: palette.cocoa,
                color: palette.sand,
                fontWeight: 700,
                letterSpacing: 1,
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        </section>

        <section
          style={{
            background: "rgba(255,255,255,0.9)",
            borderRadius: 24,
            padding: 28,
            border: `1px solid ${palette.accent}`,
          }}
        >
          <h2 style={{ marginTop: 0 }}>Quick FAQs</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                style={{
                  background: palette.cream,
                  borderRadius: 16,
                  padding: 16,
                  border: `1px solid ${palette.accent}`,
                }}
              >
                <summary style={{ fontWeight: 700, cursor: "pointer" }}>{q}</summary>
                <p style={{ marginTop: 8 }}>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          style={{
            background: palette.cocoa,
            color: palette.sand,
            borderRadius: 18,
            padding: 18,
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {trustPoints.map((point) => (
            <div key={point} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <CheckCircle2 size={18} /> {point}
            </div>
          ))}
        </section>

        <section
          style={{
            textAlign: "center",
            background: "rgba(255,255,255,0.95)",
            borderRadius: 26,
            padding: 32,
            border: `1px solid ${palette.accent}`,
          }}
        >
          <h2>Need More Help?</h2>
          <p>
            Our support team is always here for you — just tap <strong>Start Chat</strong>.
          </p>
          <button
            style={{
              padding: "14px 30px",
              borderRadius: 20,
              border: "none",
              background: palette.cocoa,
              color: palette.sand,
              fontWeight: 700,
              letterSpacing: 1,
              cursor: "pointer",
            }}
          >
            Start Chat
          </button>
        </section>
      </div>
    </section>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 14,
  border: `1px solid ${palette.accent}`,
  fontFamily: "'Rajdhani', 'Segoe UI', sans-serif",
  fontSize: 15,
  background: "rgba(0,0,0,0.02)",
};

export default SupportPage;