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
  HelpCircle,
  FileText,
  CreditCard,
  Truck,
  ChevronDown,
  AlertCircle,
  Zap,
  LifeBuoy
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// --- Retro-Future Sand & Cocoa Palette ---
const palette = {
  bg: "#fde1af", 
  surface: "rgba(255, 255, 255, 0.35)", 
  primary: "#673200", 
  primaryDark: "#4a2400",
  text: "#673200",
  textLight: "#fde1af", 
  accent: "rgba(103, 50, 0, 0.1)", 
  border: "rgba(103, 50, 0, 0.25)", 
  success: "#4a2400",
};

// --- Data ---
const quickHelp = [
  {
    title: "Order Issue",
    body: "Report missing items, late delivery, or food quality concerns.",
    icon: <AlertCircle size={20} />,
  },
  {
    title: "Subscription",
    body: "Pause, skip, cancel, or modify your Weekly/Monthly plan.",
    icon: <FileText size={20} />,
  },
  {
    title: "Payment",
    body: "Track payments, refund status, or failed transactions.",
    icon: <CreditCard size={20} />,
  },
  {
    title: "Delivery",
    body: "Wrong address, delayed delivery, or rider-related issues.",
    icon: <Truck size={20} />,
  },
];

const commonProblems = [
  "I didn’t receive my tiffin today",
  "My food quality was not good",
  "Pause or skip subscription",
  "Request a refund",
  "Delivery partner unavailable",
  "Payment deducted, order failed",
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
];

const trustPoints = [
  "Verified Providers",
  "Daily Hygiene Checks",
  "Secure Payments",
  "Quick Support",
];

const issueCategories = [
  "Order Issue",
  "Subscription",
  "Payment",
  "Delivery",
  "App / Account",
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

const SupportPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: palette.bg,
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
        <motion.header variants={itemVariants} style={{ textAlign: "center", marginBottom: 16 }}>
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
            <LifeBuoy size={14} fill="none" /> Support Station
          </div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              margin: 0,
              fontWeight: 800,
              letterSpacing: -1,
              color: palette.primary,
              lineHeight: 1.1,
            }}
          >
            HOW CAN WE ASSIST?
          </h1>
          <p style={{ opacity: 0.7, fontSize: 18, marginTop: 12, fontWeight: 600, maxWidth: 600, marginInline: "auto" }}>
            Resolve anomalies, modify protocols, or establish a connection with our team.
          </p>
        </motion.header>

        {/* Quick Help Grid */}
        <motion.section 
          variants={containerVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {quickHelp.map((card, i) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(103,50,0,0.15)" }}
              style={{
                ...glassCard,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 16
              }}
            >
              <div>
                <div style={{ 
                  width: 40, height: 40, 
                  borderRadius: 12, 
                  background: palette.primary, 
                  color: palette.textLight, 
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 16 
                }}>
                  {card.icon}
                </div>
                <h3 style={{ margin: "0 0 8px 0", fontSize: 18, textTransform: "uppercase", letterSpacing: 1 }}>{card.title}</h3>
                <p style={{ margin: 0, fontSize: 14, opacity: 0.8, lineHeight: 1.5 }}>{card.body}</p>
              </div>
              <button style={{ 
                background: "transparent", 
                border: "none", 
                color: palette.primary, 
                fontWeight: 700, 
                display: "flex", alignItems: "center", gap: 6, 
                cursor: "pointer", 
                padding: 0,
                fontSize: 14
              }}>
                INITIATE <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </motion.section>

        {/* Main Content Split: Common Problems & Form */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            
            {/* Left Column: Common Problems & Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                
                {/* Common Problems */}
                <motion.section variants={itemVariants} style={glassCard}>
                    <SectionHeader title="System Logs / Common Issues" icon={<AlertCircle size={18} />} />
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 16 }}>
                        {commonProblems.map((problem) => (
                            <motion.button
                                key={problem}
                                whileHover={{ x: 5, backgroundColor: "rgba(103, 50, 0, 0.05)" }}
                                style={{
                                    textAlign: "left",
                                    background: "transparent",
                                    border: "none",
                                    borderBottom: `1px solid ${palette.border}`,
                                    padding: "12px 4px",
                                    cursor: "pointer",
                                    fontSize: 15,
                                    color: palette.primary,
                                    fontWeight: 600,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}
                            >
                                {problem} <ArrowRight size={14} style={{ opacity: 0.5 }} />
                            </motion.button>
                        ))}
                    </div>
                </motion.section>

                {/* Contact Info */}
                <motion.section variants={itemVariants} style={{...glassCard, background: palette.primary, color: palette.textLight}}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                        <Headphones size={20} />
                        <h3 style={{ margin: 0, fontSize: 18, textTransform: "uppercase", letterSpacing: 1 }}>Live Comms</h3>
                    </div>
                    <div style={{ display: "grid", gap: 16 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                             <div style={iconCircleGhost}><PhoneCall size={18} /></div>
                             <div>
                                <div style={{ fontSize: 12, opacity: 0.7 }}>HOTLINE</div>
                                <div style={{ fontWeight: 700, fontSize: 16 }}>+91-8080-000-123</div>
                             </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                             <div style={iconCircleGhost}><Mail size={18} /></div>
                             <div>
                                <div style={{ fontSize: 12, opacity: 0.7 }}>EMAIL UPLINK</div>
                                <div style={{ fontWeight: 700, fontSize: 16 }}>support@tiffin.com</div>
                             </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                             <div style={iconCircleGhost}><MessageCircle size={18} /></div>
                             <div>
                                <div style={{ fontSize: 12, opacity: 0.7 }}>LIVE CHAT</div>
                                <div style={{ fontWeight: 700, fontSize: 16 }}>Online (2 min wait)</div>
                             </div>
                        </div>
                    </div>
                </motion.section>
            </div>

            {/* Right Column: Ticket Form */}
            <motion.section variants={itemVariants} style={glassCard}>
                <SectionHeader title="Submit Ticket" icon={<FileText size={18} />} />
                
                {submitted ? (
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{
                            background: "rgba(103,50,0,0.1)",
                            borderRadius: 16,
                            padding: 24,
                            marginTop: 24,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            gap: 12,
                            border: `1px solid ${palette.border}`
                        }}
                    >
                        <div style={{ padding: 10, background: palette.success, borderRadius: "50%", color: palette.textLight }}>
                            <CheckCircle2 size={32} />
                        </div>
                        <h3 style={{ margin: 0 }}>Ticket #9921 Created</h3>
                        <p style={{ margin: 0, opacity: 0.8 }}>Protocols initiated. Response expected within 10-30 minutes.</p>
                     </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16, marginTop: 20 }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                            <input required placeholder="Name" style={futuristicInput} />
                            <input required placeholder="Phone ID" style={futuristicInput} />
                        </div>
                        <input placeholder="Order / Sub ID (Optional)" style={futuristicInput} />
                        <div style={{ position: "relative" }}>
                             <select required style={{...futuristicInput, appearance: "none" }} defaultValue="">
                                <option value="" disabled>Select Issue Category</option>
                                {issueCategories.map(cat => <option key={cat}>{cat}</option>)}
                             </select>
                             <ChevronDown size={16} style={{ position: "absolute", right: 14, top: 16, pointerEvents: "none", opacity: 0.5 }} />
                        </div>
                        <textarea required placeholder="Describe the anomaly..." rows={4} style={{ ...futuristicInput, resize: "vertical" }} />
                        
                        <label style={{ 
                            display: "flex", alignItems: "center", gap: 10, 
                            padding: "12px", borderRadius: 12, 
                            border: `1px dashed ${palette.primary}`, 
                            cursor: "pointer", fontSize: 14, fontWeight: 600,
                            justifyContent: "center",
                            opacity: 0.7
                        }}>
                            <UploadCloud size={18} /> Upload Evidence (Img/Vid)
                            <input type="file" hidden />
                        </label>

                        <FuturisticButton label="Transmit Ticket" icon={<Zap size={16} />} />
                    </form>
                )}
            </motion.section>
        </div>

        {/* FAQs */}
        <motion.section variants={itemVariants} style={glassCard}>
             <SectionHeader title="Database / FAQ" icon={<HelpCircle size={18} />} />
             <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
                 {faqs.map((item, index) => (
                     <div key={index} style={{ borderBottom: `1px solid ${palette.border}`, paddingBottom: 12 }}>
                         <button 
                            onClick={() => toggleFaq(index)}
                            style={{ 
                                width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", 
                                background: "none", border: "none", padding: "8px 0", 
                                fontSize: 16, fontWeight: 700, color: palette.primary, cursor: "pointer", textAlign: "left"
                            }}
                         >
                             {item.q}
                             <motion.div animate={{ rotate: activeFaq === index ? 180 : 0 }}>
                                 <ChevronDown size={18} />
                             </motion.div>
                         </button>
                         <AnimatePresence>
                             {activeFaq === index && (
                                 <motion.p 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    style={{ margin: 0, opacity: 0.8, lineHeight: 1.6, overflow: "hidden", paddingRight: 20 }}
                                 >
                                     {item.a}
                                 </motion.p>
                             )}
                         </AnimatePresence>
                     </div>
                 ))}
             </div>
        </motion.section>

        {/* Status Bar / Trust Points */}
        <motion.section 
            variants={itemVariants} 
            style={{ 
                background: palette.primary, 
                color: palette.textLight, 
                borderRadius: 16, 
                padding: "16px 24px",
                display: "flex",
                flexWrap: "wrap",
                gap: 24,
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: `0 10px 30px ${palette.accent}`
            }}
        >
             <span style={{ fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", fontSize: 12, opacity: 0.7 }}>System Status: Operational</span>
             <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                 {trustPoints.map((point) => (
                     <div key={point} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600 }}>
                         <CheckCircle2 size={16} color={palette.textLight} /> {point}
                     </div>
                 ))}
             </div>
        </motion.section>

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

const FuturisticButton = ({ label, icon }: { label: string; icon?: React.ReactNode }) => (
  <motion.button
    whileHover={{ scale: 1.02, boxShadow: `0 0 20px ${palette.accent}` }}
    whileTap={{ scale: 0.95 }}
    style={{
      width: "100%",
      padding: "14px 20px",
      borderRadius: "12px 4px 12px 4px", 
      border: "none",
      background: palette.primary,
      color: palette.textLight,
      fontWeight: 700,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      fontSize: 15,
      fontFamily: "'Rajdhani', sans-serif",
      letterSpacing: 1,
      textTransform: "uppercase"
    }}
  >
    {icon} {label}
  </motion.button>
);

// --- CSS Objects ---

const glassCard: React.CSSProperties = {
  background: palette.surface,
  backdropFilter: "blur(12px)",
  borderRadius: "24px 6px 24px 6px", 
  padding: 24,
  border: `1px solid ${palette.border}`,
  boxShadow: "0 8px 32px rgba(103, 50, 0, 0.05)",
  position: "relative",
  overflow: "hidden",
};

const futuristicInput: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px 2px 8px 2px",
    border: `1px solid ${palette.border}`,
    background: "rgba(103, 50, 0, 0.03)",
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: 16,
    color: palette.primary,
    outline: "none"
};

const iconCircleGhost: React.CSSProperties = {
    width: 36, height: 36, 
    borderRadius: "50%", 
    border: `1px solid ${palette.textLight}`, 
    display: "flex", alignItems: "center", justifyContent: "center"
};

export default SupportPage;