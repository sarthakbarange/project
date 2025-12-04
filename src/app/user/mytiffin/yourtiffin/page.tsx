"use client";

import React from "react";
import {
  Truck,
  PauseCircle,
  MapPin,
  Clock4,
  Home,
  Star,
  ChevronRight,
  UtensilsCrossed,
  Activity,
  HeartHandshake,
  ShieldCheck,
  MessageCircle,
  HeartPulse,
} from "lucide-react";

const palette = {
  sand: "#fde1af",
  cocoa: "#673200",
  cream: "#fff7eb",
  accent: "rgba(103, 50, 0, 0.12)",
};

const timeline = [
  { day: "Mon", status: "Delivered" },
  { day: "Tue", status: "Delivered" },
  { day: "Wed", status: "Skipped" },
  { day: "Thu", status: "Delivered" },
  { day: "Fri", status: "Out for delivery" },
  { day: "Sat", status: "Upcoming" },
  { day: "Sun", status: "Upcoming" },
];

const quickActions = [
  "Change Delivery Time",
  "Update Address",
  "View Past Orders",
  "Support / Report Issue",
];

const nutritionItems = [
  "2 Rotis",
  "Dal",
  "Sabzi",
  "Rice",
  "Salad",
];

const recommendations = [
  "Weekly plan for snacks",
  "Add evening tiffin",
  "Try new providers near you",
];

const supportIssues = [
  "Report missing items",
  "Quality issue",
  "Wrong delivery",
  "Delay complaint",
];

const YourTiffinPage: React.FC = () => {
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
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 }}>
        <header>
          <p style={{ letterSpacing: 4, textTransform: "uppercase", fontWeight: 700, fontSize: 12 }}>Dashboard</p>
          <h1 style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)", margin: "8px 0", fontWeight: 800 }}>Your Tiffin</h1>
          <p style={{ maxWidth: 640, opacity: 0.85 }}>Track your meals, manage your subscription, and stay updated every day.</p>
        </header>

        <section style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <article style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={pill}>Today’s Delivery</span>
              <Truck />
            </div>
            <p><strong>Status:</strong> Out for delivery</p>
            <p><strong>Meal Type:</strong> Lunch</p>
            <p><strong>Time Slot:</strong> 1:00 PM – 1:30 PM</p>
            <div style={buttonGrid}>
              <button style={primaryButton}>Track Delivery</button>
              <button style={ghostButton}>Skip Today</button>
              <button style={ghostButton}>Pause Subscription</button>
              <button style={ghostButton}>Change Address</button>
            </div>
          </article>

          <article style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={pill}>Active Subscription</span>
              <PauseCircle />
            </div>
            <p><strong>Your Current Plan:</strong> Monthly Plan – ₹1,799</p>
            <p><strong>Meals Included:</strong> 30</p>
            <p><strong>Meals Delivered:</strong> 12</p>
            <p><strong>Remaining:</strong> 18 meals</p>
            <p><strong>Next Billing Date:</strong> 4 Jan 2025</p>
            <div style={buttonGrid}>
              <button style={ghostButton}>View Subscription Details</button>
              <button style={ghostButton}>Pause Subscription</button>
              <button style={ghostButton}>Cancel Subscription</button>
            </div>
          </article>

          <article style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={pill}>Your Provider</span>
              <Home />
            </div>
            <p><strong>Kitchen:</strong> Asha’s Home Kitchen</p>
            <p><strong>Hygiene Rating:</strong> ★ 4.7</p>
            <p><strong>Distance:</strong> 1.2 km</p>
            <p><strong>Cuisine:</strong> Veg Home-Style</p>
            <div style={buttonGrid}>
              <button style={ghostButton}>View Provider</button>
              <button style={ghostButton}>Change Provider</button>
              <button style={ghostButton}>Rate Provider</button>
            </div>
          </article>
        </section>

        <section style={cardSection}>
          <h2>This Week’s Delivery Timeline</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 12 }}>
            {timeline.map((item) => (
              <div key={item.day} style={timelineCard}>
                <strong>{item.day}</strong>
                <span>{item.status}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={cardSection}>
          <h2>Quick Actions</h2>
          <div style={buttonGrid}>
            {quickActions.map((action) => (
              <button key={action} style={ghostButton}>{action}</button>
            ))}
          </div>
        </section>

        <section style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <article style={cardStyle}>
            <span style={pill}>Today’s Thali</span>
            <ul style={listStyle}>
              {nutritionItems.map((item) => (
                <li key={item}><UtensilsCrossed size={16} /> {item}</li>
              ))}
            </ul>
            <p><strong>Calories:</strong> ~620 kcal</p>
            <p><strong>Allergens:</strong> No peanuts</p>
          </article>

          <article style={cardStyle}>
            <span style={pill}>Recommended For You</span>
            <ul style={listStyle}>
              {recommendations.map((item) => (
                <li key={item}><HeartPulse size={16} /> {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section style={cardSection}>
          <h2>Support</h2>
          <p>Having an issue with today’s meal? We’ll resolve it within minutes.</p>
          <div style={buttonGrid}>
            {supportIssues.map((issue) => (
              <button key={issue} style={ghostButton}>{issue}</button>
            ))}
          </div>
          <button style={{ ...primaryButton, marginTop: 16 }}>Get Help</button>
        </section>
      </div>
    </section>
  );
};

const cardStyle: React.CSSProperties = {
  background: palette.cream,
  borderRadius: 24,
  padding: 24,
  border: `1px solid ${palette.accent}`,
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

const cardSection: React.CSSProperties = {
  background: "rgba(255,255,255,0.95)",
  borderRadius: 26,
  padding: 28,
  border: `1px solid ${palette.accent}`,
  display: "flex",
  flexDirection: "column",
  gap: 16,
};

const buttonGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
  gap: 10,
};

const primaryButton: React.CSSProperties = {
  padding: "12px 18px",
  borderRadius: 16,
  border: "none",
  background: palette.cocoa,
  color: palette.sand,
  fontWeight: 700,
  cursor: "pointer",
};

const ghostButton: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: 16,
  border: `1px solid ${palette.cocoa}`,
  background: "transparent",
  cursor: "pointer",
  fontWeight: 600,
};

const pill: React.CSSProperties = {
  padding: "4px 10px",
  background: palette.accent,
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 700,
};

const timelineCard: React.CSSProperties = {
  background: palette.cream,
  borderRadius: 18,
  padding: 16,
  border: `1px solid ${palette.accent}`,
  textAlign: "center",
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

export default YourTiffinPage;