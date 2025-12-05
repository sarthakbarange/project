"use client";

import React, { useState } from "react";
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
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// --- Configuration & Data ---
const palette = {
  sand: "#fde1af",
  cocoa: "#673200",
  cream: "#fff7eb",
  glass: "rgba(255, 247, 235, 0.45)", // Semi-transparent for glassmorphism
  glassBorder: "rgba(103, 50, 0, 0.15)",
  accent: "#8a4b00",
};

const promises = [
  {
    title: "Verified Home Kitchens",
    desc: "All tiffin providers go through a strict verification process before joining our platform.",
    icon: ShieldCheck,
  },
  {
    title: "Daily Cleanliness Checks",
    desc: "Providers must maintain kitchen cleanliness and upload daily hygiene reports.",
    icon: Sparkles,
  },
  {
    title: "Safe Food Handling",
    desc: "Meals are cooked with gloves, hair caps, sanitized utensils, and clean workspaces.",
    icon: Droplet,
  },
  {
    title: "Fresh Ingredients Only",
    desc: "We ensure all providers use fresh vegetables, filtered water, and quality grains and oils.",
    icon: Star,
  },
  {
    title: "Contactless Preparation",
    desc: "Food is prepared with minimum contact and sealed properly to maintain safety.",
    icon: Users,
  },
];

const hygieneCheckpoints = [
  "Kitchen Cleanliness",
  "Food Storage Safety",
  "Hand Hygiene & Gear",
  "Fresh Ingredient Usage",
  "Utensil Sanitation",
  "Packing Quality",
];

const checklist = [
  "Government ID Verification",
  "Address Verification",
  "Kitchen Photos (Work area, stove, storage)",
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
  "Contactless handover",
];

const transparencyTools = [
  "Kitchen photos",
  "Verified hygiene score",
  "Last date of hygiene check",
  "Provider’s hygiene history",
  "Cleanliness reviews",
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

// --- Animations (FIXED TYPES) ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const HygienePage: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: palette.sand,
        backgroundImage: `radial-gradient(circle at 10% 20%, rgba(255,255,255,0.4) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(103, 50, 0, 0.05) 0%, transparent 20%)`,
        padding: "48px 16px 96px",
        fontFamily: "'Rajdhani', 'Segoe UI', sans-serif",
        color: palette.cocoa,
        overflowX: "hidden",
      }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 48,
        }}
      >
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: 20 }}>
          <motion.div variants={itemVariants}>
            <p
              style={{
                letterSpacing: 8,
                textTransform: "uppercase",
                fontWeight: 700,
                fontSize: 14,
                opacity: 0.7,
                marginBottom: 8,
              }}
            >
              System // Hygiene & Safety
            </p>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: "clamp(3rem, 6vw, 5rem)",
              margin: "0",
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: -1,
              textTransform: "uppercase",
            }}
          >
            Your Safety
            <br />
            <span style={{ color: "transparent", WebkitTextStroke: `2px ${palette.cocoa}` }}>
              Our Protocol
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            style={{
              opacity: 0.85,
              maxWidth: 600,
              margin: "24px auto 0",
              fontSize: "1.1rem",
              lineHeight: 1.6,
            }}
          >
            Executing high-standard verification algorithms. Ensuring every meal is prepared
            clean, fresh, and healthy.
          </motion.p>
        </header>

        {/* Promises Grid */}
        <Section title="Core Protocols">
          <div style={gridFive}>
            {promises.map((p, i) => (
              <GlassCard key={p.title} index={i}>
                <div
                  style={{
                    background: palette.cocoa,
                    color: palette.sand,
                    width: 48,
                    height: 48,
                    borderRadius: "12px 0 12px 0", // Tech shape
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <p.icon size={24} />
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: 8 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "0.95rem", opacity: 0.8, lineHeight: 1.4 }}>{p.desc}</p>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* Score System - Split Layout */}
        <div style={gridTwo}>
          <Section title="Hygiene Metrics" delay={0.2}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {hygieneCheckpoints.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 16px",
                    background: palette.glass,
                    border: `1px solid ${palette.glassBorder}`,
                    borderLeft: `4px solid ${palette.cocoa}`,
                  }}
                >
                  <Star size={16} fill={palette.cocoa} />
                  <span style={{ fontWeight: 600, letterSpacing: 1 }}>{item.toUpperCase()}</span>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section title="Score Calibration" delay={0.4}>
            <div
              style={{
                background: palette.cocoa,
                color: palette.sand,
                padding: 32,
                height: "100%",
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)", // Futuristic cut corner
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ fontSize: "4rem", fontWeight: 900, lineHeight: 1 }}>
                5.0<span style={{ fontSize: "1.5rem" }}>★</span>
              </div>
              <p style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 24 }}>
                Target Standard
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, opacity: 0.9 }}>
                <p>
                  <strong>4.0 - 5.0:</strong> Optimized Safety
                </p>
                <p>
                  <strong>3.0 - 3.9:</strong> Standard Compliance
                </p>
                <p style={{ color: "#ff8f8f" }}>
                  <strong>&lt; 3.0:</strong> Access Denied
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* Verification Checklist */}
        <Section title="Initialisation Sequence">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
             {checklist.map((item, i) => (
                <motion.div
                    key={item}
                    whileHover={{ scale: 1.02, backgroundColor: palette.cream }}
                    style={{
                        padding: 20,
                        border: `1px dashed ${palette.cocoa}`,
                        borderRadius: 8,
                        display: "flex",
                        alignItems: "center",
                        gap: 16
                    }}
                >
                    <div style={{ padding: 8, background: palette.cocoa, borderRadius: '50%' }}>
                        <ClipboardCheck size={16} color={palette.sand} />
                    </div>
                    <span style={{ fontWeight: 600 }}>{item}</span>
                </motion.div>
             ))}
          </div>
        </Section>

        {/* Monitoring & Standards Grid */}
        <div style={gridTwo}>
            <Section title="Live Monitoring">
                <div style={{ display: 'grid', gap: 16 }}>
                    {monitoring.map((m, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${palette.glassBorder}`, paddingBottom: 8 }}>
                            <span>{m}</span>
                            <Eye size={16} style={{ opacity: 0.5 }} />
                        </div>
                    ))}
                    <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
                        <TechBadge icon={Camera} label="VISUAL" />
                        <TechBadge icon={History} label="LOGS" />
                        <TechBadge icon={Info} label="DATA" />
                    </div>
                </div>
            </Section>

            <Section title="Logistics Hygiene">
                 <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {deliveryStandards.map((d, i) => (
                        <motion.li 
                            key={i}
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                        >
                            <Package size={20} />
                            <span style={{ fontSize: '1.1rem' }}>{d}</span>
                        </motion.li>
                    ))}
                 </ul>
            </Section>
        </div>

        {/* Transparency Tools */}
        <Section title="User Visibility">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {transparencyTools.map((tool, i) => (
                     <motion.div
                        key={i}
                        whileHover={{ y: -5, boxShadow: `0 10px 20px -5px ${palette.glassBorder}` }}
                        style={{
                            padding: "12px 24px",
                            background: palette.cream,
                            borderRadius: 30,
                            border: `1px solid ${palette.cocoa}`,
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            cursor: 'default'
                        }}
                     >
                        {tool}
                     </motion.div>
                ))}
            </div>
        </Section>

        {/* Report Issue & FAQ */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
            <Section title="Incident Report">
                <p style={{ marginBottom: 16 }}>Select incident type to initiate protocol:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                    {reportIssues.map(r => (
                        <button key={r} style={glitchButton}>{r}</button>
                    ))}
                </div>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        width: '100%',
                        padding: 20,
                        background: palette.cocoa,
                        color: palette.sand,
                        border: 'none',
                        clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        letterSpacing: 2,
                        cursor: 'pointer'
                    }}
                >
                    <AlertTriangle size={18} style={{ marginBottom: -3, marginRight: 8 }} />
                    Transmit Report
                </motion.button>
            </Section>

            <Section title="Database // FAQ">
                 <div style={{ display: 'grid', gap: 12 }}>
                    {faqs.map((f, i) => (
                        <FaqItem key={i} q={f.q} a={f.a} />
                    ))}
                 </div>
            </Section>
        </div>

        {/* Footer Banner */}
        <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{
                textAlign: "center",
                padding: "64px 32px",
                background: palette.cocoa,
                color: palette.sand,
                clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)", // Chevron bottom
                marginTop: 48
            }}
        >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 16, textTransform: 'uppercase' }}>Commitment Verified</h2>
            <p style={{ maxWidth: 600, margin: '0 auto', fontSize: '1.2rem', opacity: 0.8 }}>
                We promise clean kitchens, safe meals, and total transparency.
            </p>
            <div style={{ marginTop: 32, display: 'flex', justifyContent: 'center', gap: 8 }}>
                {[1,2,3].map(i => (
                    <motion.div 
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        style={{ width: 8, height: 8, background: palette.sand, borderRadius: '50%' }} 
                    />
                ))}
            </div>
        </motion.section>

      </motion.div>
    </div>
  );
};

// --- Sub-Components & Styles ---

const Section: React.FC<{ title: string; children: React.ReactNode; delay?: number }> = ({ title, children, delay = 0 }) => (
    <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay }}
        style={{
            background: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(12px)",
            padding: 32,
            borderTop: `1px solid ${palette.glassBorder}`,
            borderLeft: `1px solid ${palette.glassBorder}`,
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.05)",
            borderRadius: "4px", // Sharper corners for tech feel
            position: 'relative'
        }}
    >
        {/* Decorative Tech Lines */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 20, height: 20, borderTop: `3px solid ${palette.cocoa}`, borderLeft: `3px solid ${palette.cocoa}` }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 20, height: 20, borderBottom: `3px solid ${palette.cocoa}`, borderRight: `3px solid ${palette.cocoa}` }} />
        
        <h2 style={{ 
            fontSize: "1.8rem", 
            fontWeight: 800, 
            marginBottom: 24, 
            textTransform: "uppercase", 
            borderBottom: `2px solid ${palette.cocoa}`, 
            display: 'inline-block',
            paddingRight: 20
        }}>
            {title}
        </h2>
        {children}
    </motion.section>
);

const GlassCard: React.FC<{ children: React.ReactNode; index: number }> = ({ children, index }) => (
  <motion.article
    variants={itemVariants}
    whileHover={{ 
        y: -10, 
        backgroundColor: "rgba(255, 247, 235, 0.8)",
        boxShadow: `0 15px 30px -10px ${palette.glassBorder}`
    }}
    style={{
      padding: 24,
      background: palette.glass,
      backdropFilter: "blur(10px)",
      border: `1px solid ${palette.glassBorder}`,
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    {children}
    {/* Animated Scanner Line */}
    <motion.div 
        animate={{ top: ['-100%', '200%'] }}
        transition={{ duration: 3, repeat: Infinity, delay: index * 1, ease: 'linear' }}
        style={{
            position: 'absolute',
            left: 0,
            width: '100%',
            height: '20%',
            background: `linear-gradient(to bottom, transparent, ${palette.glassBorder}, transparent)`,
            pointerEvents: 'none',
            opacity: 0.3
        }}
    />
  </motion.article>
);

const TechBadge: React.FC<{ icon: React.ElementType; label: string }> = ({ icon: Icon, label }) => (
    <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 6, 
        padding: '6px 12px', 
        background: palette.cocoa, 
        color: palette.sand, 
        fontSize: '0.7rem', 
        fontWeight: 800,
        letterSpacing: 1 
    }}>
        <Icon size={12} /> {label}
    </div>
)

const FaqItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div 
            style={{ border: `1px solid ${palette.cocoa}`, background: isOpen ? palette.cream : 'transparent', transition: '0.3s' }}
            animate={{ height: 'auto' }}
        >
            <button 
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: 16,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    fontFamily: 'inherit',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: palette.cocoa,
                    cursor: 'pointer'
                }}
            >
                {q}
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown size={20} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p style={{ padding: '0 16px 16px', opacity: 0.8, lineHeight: 1.5 }}>{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

const gridFive: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: 24,
};

const gridTwo: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: 32,
  alignItems: "stretch",
};

const glitchButton: React.CSSProperties = {
    padding: "8px 16px",
    background: "transparent",
    border: `1px solid ${palette.glassBorder}`,
    borderRadius: 0,
    cursor: "pointer",
    fontSize: "0.85rem",
    fontWeight: 600,
    color: palette.cocoa,
    fontFamily: 'inherit',
    position: 'relative',
    overflow: 'hidden'
};

export default HygienePage;