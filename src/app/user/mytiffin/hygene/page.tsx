"use client";

import React from "react";
import {
  ShieldCheck,
  ClipboardCheck,
  Sparkles,
  Droplet,
  Package,
  Eye,
  AlertTriangle,
  Star,
  Users,
  Camera,
  History,
  Info,
} from "lucide-react";

const palette = {
  sand: "#fde1af",
  cocoa: "#673200",
  cream: "#fff7eb",
  accent: "rgba(103, 50, 0, 0.12)",
};

const promises = [
  {
    title: "Verified Home Kitchens",
    desc: "All tiffin providers go through a strict verification process before joining our platform.",
  },
  {
    title: "Daily Cleanliness Checks",
    desc: "Providers must maintain kitchen cleanliness and upload daily hygiene reports.",
  },
  {
    title: "Safe Food Handling",
    desc: "Meals are cooked with gloves, hair caps, sanitized utensils, and clean workspaces.",
  },
  {
    title: "Fresh Ingredients Only",
    desc: "We ensure all providers use fresh vegetables, filtered water, and quality grains and oils.",
  },
  {
    title: "Contactless Preparation & Packing",
    desc: "Food is prepared with minimum contact and sealed properly to maintain safety.",
  },
];

const hygieneCheckpoints = [
  "Kitchen Cleanliness",
  "Food Storage Safety",
  "Hand Hygiene & Protective Gear",
  "Fresh Ingredient Usage",
  "Utensil Sanitation",
  "Packing Quality",
];

const checklist = [
  "Government ID Verification",
  "Address Verification",
  "Kitchen Photos (Work area, stove, storage, sink)",
  "Food Safety Checklist Submission",
  "Ingredient & Water Source Declaration",
];

const monitoring = [
  "Hygiene score updates",
  "Kitchen cleanliness photos",
  "Proper storage of raw materials",
  "Clean utensils & surfaces",
];

const deliveryStandards = [
  "Clean delivery bags",
  "Sealed-food handling",
  "Regular sanitization",
  "No open-food transport",
  "Contactless doorstep handover",
];

const transparencyTools = [
  "Kitchen photos",
  "Verified hygiene score",
  "Last date of hygiene check",
  "Provider’s hygiene history",
  "Customer reviews on cleanliness",
];

const reportIssues = [
  "Low-quality food",
  "Dirty packaging",
  "Spoiled ingredients",
  "Unclean behavior",
  "Any safety concern",
];

const faqs = [
  {
    q: "How are hygiene scores calculated?",
    a: "Based on daily reports, kitchen audits, packaging checks, and user feedback.",
  },
  {
    q: "What if a provider fails a hygiene check?",
    a: "They are temporarily removed until they meet all safety guidelines.",
  },
  {
    q: "Can I see hygiene photos of the provider?",
    a: "Yes, every provider page shows updated images of their kitchen and storage area.",
  },
  {
    q: "Is the food checked for freshness?",
    a: "Providers must use fresh ingredients every day and maintain storage logs.",
  },
];

const HygienePage: React.FC = () => {
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
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
        <header>
          <p style={{ letterSpacing: 4, textTransform: "uppercase", fontWeight: 700, fontSize: 12 }}>Hygiene & Safety</p>
          <h1 style={{ fontSize: "clamp(2.6rem, 4vw, 3.6rem)", margin: "8px 0", fontWeight: 800 }}>Your Safety, Our Priority</h1>
          <p style={{ opacity: 0.85, maxWidth: 700 }}>
            We ensure every meal is prepared with the highest hygiene standards so you can enjoy fresh, clean, and healthy food—every single day.
          </p>
        </header>

        <section style={cardSection}>
          <h2>Hygiene Promise</h2>
          <div style={gridFive}>
            {promises.map((promise) => (
              <article key={promise.title} style={promiseCard}>
                <ShieldCheck size={26} />
                <div>
                  <h3>{promise.title}</h3>
                  <p>{promise.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section style={cardSection}>
          <h2>Hygiene Score System</h2>
          <p>Every provider on TiffinConnect receives a Hygiene Score based on 6 core checkpoints:</p>
          <div style={gridTwo}>
            <ul style={listStyle}>
              {hygieneCheckpoints.map((item) => (
                <li key={item}><Star size={16} /> {item}</li>
              ))}
            </ul>
            <div style={{ background: palette.cream, borderRadius: 20, padding: 20 }}>
              <p><strong>Score Levels:</strong></p>
              <p>5 ★ Excellent – Verified & Regular Audits</p>
              <p>4 ★ Very Good – All checks passed</p>
              <p>3 ★ Good – Meets basic requirements</p>
              <p style={{ marginTop: 12 }}>Providers with lower ratings are removed until they improve safety.</p>
            </div>
          </div>
        </section>

        <section style={cardSection}>
          <h2>Kitchen Verification Checklist</h2>
          <p>To join the platform, a provider must complete:</p>
          <ul style={listStyle}>
            {checklist.map((item) => (
              <li key={item}><ClipboardCheck size={16} /> {item}</li>
            ))}
          </ul>
          <p>Only approved providers are made visible to users.</p>
        </section>

        <section style={cardSection}>
          <h2>On-Ground Hygiene Monitoring</h2>
          <div style={gridTwo}>
            <div>
              <h3>Weekly Monitoring</h3>
              <p>Quality officers check:</p>
              <ul style={listStyle}>
                {monitoring.map((item) => (
                  <li key={item}><Eye size={16} /> {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Monthly Deep Review</h3>
              <p>Detailed reassessment of all hygiene parameters.</p>
              <div style={{ display: "flex", gap: 12 }}>
                <Camera /> <History /> <Info />
              </div>
            </div>
          </div>
        </section>

        <section style={cardSection}>
          <h2>Delivery Hygiene Standards</h2>
          <p>Our delivery partners follow strict hygiene:</p>
          <ul style={listStyle}>
            {deliveryStandards.map((item) => (
              <li key={item}><Package size={16} /> {item}</li>
            ))}
          </ul>
        </section>

        <section style={cardSection}>
          <h2>User Transparency Tools</h2>
          <p>Users can view:</p>
          <ul style={listStyle}>
            {transparencyTools.map((item) => (
              <li key={item}><Eye size={16} /> {item}</li>
            ))}
          </ul>
        </section>

        <section style={cardSection}>
          <h2>If You Face a Hygiene Issue</h2>
          <p>We take hygiene complaints very seriously. You can report:</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {reportIssues.map((issue) => (
              <button key={issue} style={chipStyle}><AlertTriangle size={16} /> {issue}</button>
            ))}
          </div>
          <button style={{ ...primaryButton, marginTop: 16 }}>Report a Hygiene Issue</button>
          <p style={{ marginTop: 8 }}>We respond within 15 minutes.</p>
        </section>

        <section style={cardSection}>
          <h2>Hygiene FAQ</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {faqs.map(({ q, a }) => (
              <details key={q} style={faqStyle}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section style={{ textAlign: "center", padding: 32, background: palette.cocoa, color: palette.sand, borderRadius: 28 }}>
          <h2>Final Safety Commitment</h2>
          <p>
            We promise clean kitchens, safe meals, and total transparency. Your health matters — and every tiffin on TiffinConnect is prepared with care and hygiene.
          </p>
        </section>
      </div>
    </section>
  );
};

const cardSection: React.CSSProperties = {
  background: "rgba(255,255,255,0.95)",
  borderRadius: 26,
  padding: 28,
  border: `1px solid ${palette.accent}`,
};

const promiseCard: React.CSSProperties = {
  display: "flex",
  gap: 12,
  alignItems: "flex-start",
  background: palette.cream,
  borderRadius: 20,
  padding: 18,
};

const gridFive: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: 16,
};

const gridTwo: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 20,
  alignItems: "flex-start",
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

const chipStyle: React.CSSProperties = {
  borderRadius: 18,
  border: `1px solid ${palette.cocoa}`,
  padding: "10px 16px",
  background: "transparent",
  cursor: "pointer",
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  gap: 6,
};

const primaryButton: React.CSSProperties = {
  padding: "12px 22px",
  borderRadius: 20,
  border: "none",
  background: palette.cocoa,
  color: palette.sand,
  fontWeight: 700,
  cursor: "pointer",
};

const faqStyle: React.CSSProperties = {
  background: palette.cream,
  borderRadius: 18,
  padding: 16,
  border: `1px solid ${palette.accent}`,
};

export default HygienePage;