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
  Package,
  CalendarCheck,
  AlertCircle
} from "lucide-react";
import { motion, Variants } from "framer-motion";

// --- Sand & Cocoa Palette (Matching Subscription Page) ---
const palette = {
  bg: "#fde1af",       // Sand
  text: "#673200",     // Cocoa
  primary: "#673200",  // Cocoa as primary
  surface: "#fff7eb",  // Cream
  border: "rgba(103, 50, 0, 0.15)",
  glow: "0 0 20px rgba(103, 50, 0, 0.1)",
  inverseText: "#fde1af",
  success: "#15803d",  // Green for delivered
  warning: "#c2410c",  // Orange for active/out for delivery
};

// --- Data ---
const timeline = [
  { day: "Mon", status: "Delivered", active: false },
  { day: "Tue", status: "Delivered", active: false },
  { day: "Wed", status: "Skipped", active: false },
  { day: "Thu", status: "Delivered", active: false },
  { day: "Fri", status: "Out for delivery", active: true },
  { day: "Sat", status: "Upcoming", active: false },
  { day: "Sun", status: "Upcoming", active: false },
];

const quickActions = [
  "Change Delivery Time",
  "Update Address",
  "View Past Orders",
  "Support / Report Issue",
];

const nutritionItems = [
  "2 Rotis (Wheat)",
  "Dal Fry",
  "Aloo Gobi",
  "Jeera Rice",
  "Green Salad",
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

// --- Animation Variants ---
const containerVar: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVar: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 50 } 
  },
};

const YourTiffinPage: React.FC = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: palette.bg,
        padding: "48px 16px 72px",
        fontFamily: "'Rajdhani', 'Segoe UI', sans-serif",
        color: palette.text,
        overflowX: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 48 }}>
        
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: "relative" }}
        >
           <motion.div 
             initial={{ scaleX: 0 }} 
             animate={{ scaleX: 1 }} 
             style={{ width: 40, height: 4, background: palette.primary, marginBottom: 16 }} 
          />
          <p style={{ letterSpacing: 4, textTransform: "uppercase", fontWeight: 700, fontSize: 14, color: palette.primary, opacity: 0.8 }}>
            User Dashboard
          </p>
          <h1 style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)", margin: "8px 0", fontWeight: 800 }}>
            YOUR <span style={{ borderBottom: `4px solid ${palette.primary}` }}>TIFFIN</span>
          </h1>
          <p style={{ maxWidth: 640, opacity: 0.85, fontSize: "1.1rem" }}>
            Live tracking system initialized. Manage your meals and subscription status below.
          </p>
        </motion.header>

        {/* Main Status Grid */}
        <motion.section 
            variants={containerVar}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        >
          {/* Card 1: Today's Delivery */}
          <motion.article variants={itemVar} style={cardStyle}>
            <div style={cardHeader}>
              <span style={pill}>Today’s Delivery</span>
              <Truck size={24} color={palette.primary} />
            </div>
            
            <div style={{ margin: "16px 0", padding: "16px", background: palette.bg, borderRadius: 12, border: `1px solid ${palette.border}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <Activity size={20} color={palette.warning} />
                    <span style={{ fontWeight: 700, fontSize: "1.1rem", color: palette.warning }}>Out for delivery</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", opacity: 0.8 }}>
                    <span>Lunch</span>
                    <span>1:00 PM – 1:30 PM</span>
                </div>
            </div>

            <div style={buttonGrid}>
              <button style={primaryButton}>Track Delivery</button>
              <button style={ghostButton}>Skip Today</button>
            </div>
          </motion.article>

          {/* Card 2: Subscription Stats */}
          <motion.article variants={itemVar} style={cardStyle}>
            <div style={cardHeader}>
              <span style={pill}>Active Subscription</span>
              <PauseCircle size={24} color={palette.primary} />
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "16px 0" }}>
                <div style={statBox}>
                    <span style={statLabel}>Plan</span>
                    <strong style={statValue}>Monthly</strong>
                </div>
                <div style={statBox}>
                    <span style={statLabel}>Remaining</span>
                    <strong style={statValue}>18 Meals</strong>
                </div>
                <div style={statBox}>
                    <span style={statLabel}>Delivered</span>
                    <strong style={statValue}>12</strong>
                </div>
                <div style={statBox}>
                    <span style={statLabel}>Renewal</span>
                    <strong style={statValue}>Jan 4</strong>
                </div>
            </div>

            <div style={buttonGrid}>
              <button style={ghostButton}>Manage Plan</button>
              <button style={{ ...ghostButton, borderColor: palette.primary }}>Pause</button>
            </div>
          </motion.article>

          {/* Card 3: Provider Info */}
          <motion.article variants={itemVar} style={cardStyle}>
            <div style={cardHeader}>
              <span style={pill}>Your Provider</span>
              <Home size={24} color={palette.primary} />
            </div>
            
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "12px 0 4px" }}>Asha’s Home Kitchen</h3>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: "0.9rem", fontWeight: 700 }}>
                    <Star size={14} fill={palette.primary} stroke={palette.primary} /> 4.7
                </span>
                <span style={{ fontSize: "0.9rem", opacity: 0.7 }}>• 1.2 km away</span>
                <span style={{ fontSize: "0.9rem", opacity: 0.7 }}>• Veg</span>
            </div>

            <div style={buttonGrid}>
              <button style={ghostButton}>View Profile</button>
              <button style={ghostButton}>Change</button>
            </div>
          </motion.article>
        </motion.section>

        {/* Timeline Section */}
        <motion.section 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={wideCard}
        >
          <h2 style={sectionTitle}>WEEKLY LOG</h2>
          <div style={timelineGrid}>
            {timeline.map((item, index) => (
              <motion.div 
                key={item.day} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                style={{ 
                    ...timelineCard, 
                    borderColor: item.active ? palette.primary : palette.border,
                    background: item.active ? palette.primary : palette.bg,
                    color: item.active ? palette.inverseText : palette.text
                }}
              >
                <strong style={{ display: "block", fontSize: "1.1rem" }}>{item.day}</strong>
                <span style={{ fontSize: "0.85rem", opacity: item.active ? 1 : 0.7 }}>{item.status}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Nutrition & Recs Split */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
             <motion.article 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={techPanel}
             >
                <div style={cardHeader}>
                    <h3 style={panelTitle}><UtensilsCrossed size={20} /> Today's Thali</h3>
                    <span style={{ fontSize: "0.9rem", fontWeight: 700, opacity: 0.6 }}>~620 kcal</span>
                </div>
                <ul style={listStyle}>
                  {nutritionItems.map((item, i) => (
                    <li key={item} style={listItem}>
                        <div style={dot} /> {item}
                    </li>
                  ))}
                </ul>
             </motion.article>

             <motion.article 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={techPanel}
             >
                <div style={cardHeader}>
                    <h3 style={panelTitle}><HeartPulse size={20} /> Suggestions</h3>
                </div>
                <ul style={listStyle}>
                  {recommendations.map((item) => (
                    <li key={item} style={listItem}>
                        <div style={{ ...dot, background: "transparent", border: `2px solid ${palette.inverseText}` }} /> 
                        {item}
                    </li>
                  ))}
                </ul>
                <button style={{ ...ghostButton, color: palette.inverseText, borderColor: palette.inverseText, marginTop: 16, width: "100%" }}>
                    Explore More
                </button>
             </motion.article>
        </div>

        {/* Quick Actions & Support Grid */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            <motion.div 
                style={wideCard}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 style={sectionTitle}>QUICK COMMANDS</h2>
                <div style={{ display: "grid", gap: 12 }}>
                    {quickActions.map((action) => (
                        <motion.button 
                            key={action} 
                            whileHover={{ x: 10, background: palette.bg }}
                            style={actionRow}
                        >
                            {action} <ChevronRight size={16} />
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            <motion.div 
                style={{ ...wideCard, borderLeft: `4px solid ${palette.primary}` }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                 <h2 style={sectionTitle}>SUPPORT TICKET</h2>
                 <p style={{ marginBottom: 16, opacity: 0.8 }}>Issue with today's meal? Select a topic:</p>
                 <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
                    {supportIssues.map((issue) => (
                        <span key={issue} style={tagStyle}>{issue}</span>
                    ))}
                 </div>
                 <button style={{ ...primaryButton, width: "100%", display: "flex", justifyContent: "center", gap: 8 }}>
                    <MessageCircle size={20} /> Chat with Support
                 </button>
            </motion.div>
        </section>

      </div>
    </section>
  );
};

// --- Styles ---

const cardStyle: React.CSSProperties = {
  background: palette.surface,
  borderRadius: 16,
  padding: 24,
  border: `1px solid ${palette.border}`,
  display: "flex",
  flexDirection: "column",
  position: "relative",
  boxShadow: palette.glow,
};

const wideCard: React.CSSProperties = {
  background: palette.surface,
  borderRadius: 16,
  padding: 32,
  border: `1px solid ${palette.border}`,
};

const techPanel: React.CSSProperties = {
    background: palette.primary,
    color: palette.inverseText,
    borderRadius: 16,
    padding: 24,
    display: "flex",
    flexDirection: "column",
};

const cardHeader: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 12,
};

const sectionTitle: React.CSSProperties = {
    fontSize: "1.2rem",
    fontWeight: 800,
    letterSpacing: 2,
    marginBottom: 20,
    textTransform: "uppercase",
    color: palette.primary,
};

const panelTitle: React.CSSProperties = {
    fontSize: "1.2rem",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    gap: 10,
    textTransform: "uppercase",
    letterSpacing: 1,
};

const buttonGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 12,
  marginTop: "auto",
};

const primaryButton: React.CSSProperties = {
  padding: "12px 18px",
  borderRadius: 8,
  border: "none",
  background: palette.primary,
  color: palette.inverseText,
  fontWeight: 700,
  cursor: "pointer",
  textTransform: "uppercase",
  letterSpacing: 0.5,
};

const ghostButton: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: 8,
  border: `1px solid ${palette.border}`,
  background: "transparent",
  cursor: "pointer",
  fontWeight: 600,
  color: palette.text,
  fontSize: "0.9rem",
};

const pill: React.CSSProperties = {
  padding: "6px 12px",
  background: palette.bg,
  borderRadius: 6,
  fontSize: 12,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: 0.5,
  color: palette.primary,
};

const statBox: React.CSSProperties = {
    background: palette.bg,
    padding: 10,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    gap: 4,
};

const statLabel: React.CSSProperties = {
    fontSize: "0.75rem",
    textTransform: "uppercase",
    opacity: 0.7,
    fontWeight: 600,
};

const statValue: React.CSSProperties = {
    fontSize: "1.1rem",
    fontWeight: 700,
};

const timelineGrid: React.CSSProperties = {
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", 
    gap: 12
};

const timelineCard: React.CSSProperties = {
  borderRadius: 8,
  padding: "16px 8px",
  border: `1px solid ${palette.border}`,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: 6,
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: "16px 0 0",
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const listItem: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontSize: "1rem",
    opacity: 0.9,
};

const dot: React.CSSProperties = {
    width: 6,
    height: 6,
    background: palette.inverseText,
    borderRadius: "50%",
};

const actionRow: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "16px",
    background: "transparent",
    border: `1px solid ${palette.border}`,
    borderRadius: 8,
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: 600,
    color: palette.text,
    textAlign: "left",
};

const tagStyle: React.CSSProperties = {
    padding: "6px 12px",
    borderRadius: 99,
    border: `1px solid ${palette.border}`,
    fontSize: "0.85rem",
    background: palette.bg,
    color: palette.primary,
};

export default YourTiffinPage;