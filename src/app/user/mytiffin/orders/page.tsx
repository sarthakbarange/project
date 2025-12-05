"use client";

import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  Clock4,
  PhoneCall,
  MessageCircle,
  MapPin,
  ShieldCheck,
  RefreshCw,
  Star,
  Navigation,
  Flame,
  Activity,
  CalendarCheck,
  ChevronRight,
  Package,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// --- Retro-Future Sand & Cocoa Palette ---
const palette = {
  bg: "#fde1af", // User requested Background
  surface: "rgba(255, 255, 255, 0.3)", // Glassy effect on top of sand
  primary: "#673200", // User requested Text/Primary
  primaryDark: "#4a2400",
  text: "#673200",
  textLight: "#fde1af", // Inverted for buttons
  accent: "rgba(103, 50, 0, 0.1)", // Brown glow
  border: "rgba(103, 50, 0, 0.25)", // Tech border
  success: "#4a2400", // Dark brown for success to match theme
};

// --- Data ---
const statusOptions = [
  "Preparing Your Meal",
  "Out for Delivery",
  "Delivered",
  "Cancelled",
];

const timeline = [
  { label: "Order Confirmed", time: "12:05 PM", done: true },
  { label: "Meal is Being Prepared", time: "12:20 PM", done: true },
  { label: "Out for Delivery", time: "12:45 PM", done: true },
  { label: "Arriving by", time: "1:15 PM", done: false },
];

const orderItems = ["2 Rotis", "Dal", "Rice", "Sabzi", "Salad", "Pickle"];

const supportIssues = [
  "Food Quality",
  "Missing Item",
  "Late Delivery",
  "Wrong Order",
  "Refund",
];

const nutritionStats = [
  { label: "Calories", value: "520", unit: "kcal" },
  { label: "Protein", value: "24", unit: "g" },
  { label: "Carbs", value: "62", unit: "g" },
  { label: "Fats", value: "18", unit: "g" },
];

const orderHistory = [
  {
    date: "Dec 4, 2025",
    provider: "Home Kitchen by Asha",
    meal: "Dinner • High Protein Thali",
    status: "Delivered",
    amount: "₹110",
  },
  {
    date: "Dec 3, 2025",
    provider: "Spicy Spoon",
    meal: "Lunch • Mini Veg Combo",
    status: "Delivered",
    amount: "₹85",
  },
  {
    date: "Dec 2, 2025",
    provider: "Tiffin Express",
    meal: "Breakfast • Poha Bowl",
    status: "Cancelled",
    amount: "₹50",
  },
];

// --- Animations ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const pulseGlow: Variants = {
  animate: {
    boxShadow: [
      `0 0 0 0 rgba(103, 50, 0, 0)`,
      `0 0 0 6px rgba(103, 50, 0, 0.2)`,
      `0 0 0 0 rgba(103, 50, 0, 0)`,
    ],
    transition: { duration: 2, repeat: Infinity },
  },
};

const OrderPage: React.FC = () => {
  const currentStatus = statusOptions[2]; // Simulating "Delivered" state for visual
  const delivered = currentStatus === "Delivered";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: palette.bg,
        // Subtle grid pattern in brown over the sand background
        backgroundImage: `
          radial-gradient(circle at 10% 20%, ${palette.accent} 0%, transparent 20%),
          radial-gradient(circle at 90% 80%, ${palette.accent} 0%, transparent 20%),
          linear-gradient(${palette.border} 1px, transparent 1px),
          linear-gradient(90deg, ${palette.border} 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 100% 100%, 40px 40px, 40px 40px",
        padding: "48px 16px 72px",
        fontFamily: "'Rajdhani', 'Segoe UI', sans-serif",
        color: palette.text,
        overflowX: "hidden",
      }}
    >
      <motion.div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.header variants={itemVariants} style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 50,
              background: palette.primary,
              color: palette.textLight,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 16,
              boxShadow: "0 4px 15px rgba(103, 50, 0, 0.2)",
            }}
          >
            <Zap size={12} fill="currentColor" /> Live Tracking
          </div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              margin: 0,
              fontWeight: 800,
              letterSpacing: -1,
              color: palette.primary,
            }}
          >
            ORDER #DB-8921
          </h1>
          <p style={{ opacity: 0.7, fontSize: 18, marginTop: 8, fontWeight: 600 }}>
            Estimated Arrival: <strong>1:15 PM</strong>
          </p>
        </motion.header>

        {/* Hero Section: Status & Map */}
        <div
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {/* Status HUD */}
          <motion.section variants={itemVariants} style={glassCard}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 24,
              }}
            >
              <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>
                Status Protocol
              </h3>
              <motion.div
                variants={pulseGlow}
                animate="animate"
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: palette.primary,
                }}
              />
            </div>

            <div
              style={{
                background: "rgba(103, 50, 0, 0.05)",
                border: `1px solid ${palette.border}`,
                borderRadius: "16px 4px 16px 4px", // Futuristic Shape
                padding: 20,
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  background: palette.primary,
                  color: palette.textLight,
                  padding: 10,
                  borderRadius: 12,
                }}
              >
                <Clock4 size={24} />
              </div>
              <div>
                <span
                  style={{ fontSize: 12, textTransform: "uppercase", opacity: 0.6, fontWeight: 700, letterSpacing: 1 }}
                >
                  Current Phase
                </span>
                <div style={{ fontSize: 20, fontWeight: 800 }}>
                  {currentStatus}
                </div>
              </div>
            </div>

            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 0 }}>
              {timeline.map((step, index) => (
                <li key={step.label} style={{ display: "flex", gap: 16, position: "relative", paddingBottom: index === timeline.length - 1 ? 0 : 24 }}>
                  {/* Timeline Line */}
                  {index !== timeline.length - 1 && (
                    <div
                      style={{
                        position: "absolute",
                        left: 11,
                        top: 24,
                        bottom: 0,
                        width: 2,
                        background: step.done ? palette.primary : "rgba(103, 50, 0, 0.1)",
                      }}
                    />
                  )}
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: step.done ? palette.primary : palette.bg,
                      border: `2px solid ${step.done ? palette.primary : palette.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                      color: palette.textLight,
                      fontSize: 10,
                    }}
                  >
                    {step.done && <CheckCircle2 size={14} />}
                  </motion.div>
                  
                  <div style={{ opacity: step.done ? 1 : 0.5 }}>
                    <strong style={{ display: "block", fontSize: 16 }}>{step.label}</strong>
                    <span style={{ fontSize: 13, fontFamily: "monospace", opacity: 0.8 }}>{step.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Map & Rider HUD */}
          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Map */}
            <div
              style={{
                ...glassCard,
                padding: 0,
                height: 240,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fdf6e9", // Slightly lighter than main bg for map area
              }}
            >
              <div style={{ position: "absolute", inset: 0, opacity: 0.3, backgroundImage: `linear-gradient(${palette.border} 1px, transparent 1px), linear-gradient(90deg, ${palette.border} 1px, transparent 1px)`, backgroundSize: "20px 20px" }}></div>
              
              {/* Radar Scan Effect */}
              <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 style={{
                   width: 300, height: 300,
                   background: `conic-gradient(from 0deg, transparent 0deg, ${palette.accent} 360deg)`,
                   borderRadius: "50%",
                   position: "absolute",
                   opacity: 0.6
                 }}
              />
              
              <div style={{ zIndex: 2, background: palette.primary, color: palette.textLight, padding: 12, borderRadius: "50%", boxShadow: "0 0 20px rgba(103, 50, 0, 0.4)" }}>
                <Navigation size={32} fill="currentColor" />
              </div>
              
              <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, background: "rgba(255,255,255,0.6)", backdropFilter: "blur(10px)", padding: "12px", borderRadius: 12, display: "flex", justifyContent: "space-between", alignItems: "center", border: `1px solid ${palette.border}` }}>
                 <span style={{ fontSize: 12, fontWeight: 700 }}>LIVE GPS</span>
                 <span style={{ fontSize: 12, color: palette.primary, fontWeight: 700 }}>Update: Just now</span>
              </div>
            </div>

            {/* Rider Card */}
            <div style={{ ...glassCard, display: "flex", flexDirection: "column", gap: 16 }}>
               <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 50, height: 50, borderRadius: 14, background: palette.primary, display: "flex", alignItems: "center", justifyContent: "center", color: palette.textLight }}>
                    <ShieldCheck />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: 18 }}>Rahul S.</h4>
                    <p style={{ margin: 0, fontSize: 13, opacity: 0.6 }}>Vehicle: MH 31 AB 0921</p>
                  </div>
               </div>
               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                 <FuturisticButton icon={<PhoneCall size={16}/>} label="Call" outline />
                 <FuturisticButton icon={<MessageCircle size={16}/>} label="Message" outline />
               </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.section 
          variants={containerVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16
          }}
        >
          {nutritionStats.map((stat, i) => (
             <motion.div 
               key={stat.label}
               variants={itemVariants}
               whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(103, 50, 0, 0.15)" }}
               style={{
                 ...glassCard,
                 padding: 20,
                 textAlign: "center",
                 display: "flex",
                 flexDirection: "column",
                 alignItems: "center",
                 justifyContent: "center"
               }}
             >
                <span style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 1, opacity: 0.6 }}>{stat.label}</span>
                <div style={{ fontSize: 32, fontWeight: 800, color: palette.primary, lineHeight: 1 }}>{stat.value}</div>
                <span style={{ fontSize: 12, fontWeight: 600 }}>{stat.unit}</span>
             </motion.div>
          ))}
        </motion.section>

        {/* Order Details & Summary */}
        <motion.section variants={containerVariants} style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          
          <motion.div variants={itemVariants} style={glassCard}>
            <SectionHeader title="Order Manifest" icon={<Package size={18} />} />
            <div style={{ marginTop: 16, background: "rgba(103, 50, 0, 0.03)", borderRadius: 16, padding: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                 <strong>Home Kitchen by Asha</strong>
                 <span style={{ color: palette.primary, fontWeight: 700 }}>Lunch</span>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                 {orderItems.map(item => (
                   <li key={item} style={{ fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
                     <div style={{ width: 4, height: 4, background: palette.primary, borderRadius: "50%" }} /> {item}
                   </li>
                 ))}
              </ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} style={glassCard}>
            <SectionHeader title="Payment Data" icon={<CheckCircle2 size={18} />} />
            <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
               <PaymentRow label="Meal Price" value="₹90" />
               <PaymentRow label="Delivery" value="Free" highlight />
               <PaymentRow label="Taxes" value="₹5" />
               <div style={{ height: 1, background: palette.border, margin: "4px 0" }} />
               <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, fontWeight: 800 }}>
                 <span>Total Paid</span>
                 <span style={{ color: palette.primary }}>₹95</span>
               </div>
            </div>
          </motion.div>

        </motion.section>

        {/* Support Section */}
        <motion.section variants={itemVariants} style={glassCard}>
          <SectionHeader title="System Support" icon={<Activity size={18} />} />
          <p style={{ opacity: 0.7, margin: "8px 0 16px" }}>Detected an anomaly with your order? Initiate a protocol.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {supportIssues.map(issue => (
              <motion.button 
                key={issue}
                whileHover={{ scale: 1.05, backgroundColor: palette.primary, color: palette.textLight, borderColor: palette.primary }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "transparent",
                  border: `1px solid ${palette.border}`,
                  padding: "8px 16px",
                  borderRadius: 20,
                  fontSize: 14,
                  fontWeight: 600,
                  color: palette.text,
                  cursor: "pointer",
                  transition: "0.2s"
                }}
              >
                {issue}
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* History (Compact) */}
        <motion.section variants={itemVariants} style={{ ...glassCard, background: palette.primary, color: palette.textLight }}>
           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
             <h3 style={{ margin: 0, color: palette.textLight }}>Recent Logs</h3>
             <button style={{ background: "rgba(255,255,255,0.1)", border: "none", color: palette.textLight, padding: "6px 12px", borderRadius: 8, fontSize: 12, cursor: "pointer" }}>View All</button>
           </div>
           <div style={{ display: "grid", gap: 12 }}>
             {orderHistory.map((order, i) => (
               <motion.div 
                key={i}
                whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.1)" }}
                style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  padding: 12, 
                  borderRadius: 12, 
                  background: "rgba(0,0,0,0.2)",
                  borderLeft: `3px solid ${order.status === 'Cancelled' ? '#ff6b6b' : palette.textLight}`
                }}
               >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{order.provider}</div>
                    <div style={{ fontSize: 12, opacity: 0.6 }}>{order.meal}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 700 }}>{order.amount}</div>
                    <div style={{ fontSize: 10, opacity: 0.6 }}>{order.date}</div>
                  </div>
               </motion.div>
             ))}
           </div>
        </motion.section>

        {/* Sticky Action Bar */}
        <motion.div 
          variants={itemVariants}
          style={{ 
            position: "sticky", 
            bottom: 24, 
            background: "rgba(255, 255, 255, 0.5)", 
            backdropFilter: "blur(20px)",
            borderRadius: 24,
            padding: 16,
            border: `1px solid ${palette.border}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 20px 40px rgba(103, 50, 0, 0.15)"
          }}
        >
           <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div style={{ padding: 10, background: palette.accent, borderRadius: "50%", color: palette.primary }}>
                 <Flame size={20} fill="currentColor" />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 14 }}>Love this meal?</div>
                <div style={{ fontSize: 12, opacity: 0.6 }}>Reorder instantly</div>
              </div>
           </div>
           <FuturisticButton label="Repeat Order" icon={<RefreshCw size={16} />} />
        </motion.div>

      </motion.div>
    </div>
  );
};

// --- Components ---

const SectionHeader = ({ title, icon }: { title: string, icon: React.ReactNode }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 0, borderBottom: `1px solid ${palette.border}`, paddingBottom: 12 }}>
    <span style={{ color: palette.primary }}>{icon}</span>
    <h3 style={{ margin: 0, fontSize: 16, textTransform: "uppercase", letterSpacing: 1 }}>{title}</h3>
  </div>
);

const PaymentRow = ({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) => (
  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15 }}>
    <span style={{ opacity: 0.7 }}>{label}</span>
    <span style={{ fontWeight: 600, color: highlight ? palette.primary : "inherit" }}>{value}</span>
  </div>
);

const FuturisticButton = ({ label, icon, outline }: { label: string; icon?: React.ReactNode; outline?: boolean }) => (
  <motion.button
    whileHover={{ scale: 1.02, boxShadow: outline ? "none" : `0 0 20px ${palette.accent}` }}
    whileTap={{ scale: 0.95 }}
    style={{
      flex: 1,
      padding: "12px 20px",
      borderRadius: "12px 4px 12px 4px", // Tech shape
      border: outline ? `1px solid ${palette.border}` : "none",
      background: outline ? "transparent" : palette.primary,
      color: outline ? palette.text : palette.textLight,
      fontWeight: 700,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      fontSize: 14,
      fontFamily: "'Rajdhani', sans-serif"
    }}
  >
    {icon} {label}
  </motion.button>
);

// --- CSS Objects ---

const glassCard: React.CSSProperties = {
  background: palette.surface,
  backdropFilter: "blur(12px)",
  borderRadius: "24px 6px 24px 6px", // Asymmetric tech corners
  padding: 24,
  border: `1px solid ${palette.border}`,
  boxShadow: "0 8px 32px rgba(103, 50, 0, 0.05)",
  position: "relative",
  overflow: "hidden",
};

export default OrderPage;