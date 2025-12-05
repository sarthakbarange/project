"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, Award, CalendarDays, Clock4, Zap, Quote, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// --- New Sand & Cocoa Palette ---
const palette = {
  bg: "#fde1af",       // Background
  text: "#673200",     // Main Text
  primary: "#673200",  // Cocoa accent
  surface: "#fff7eb",  // Cream/Off-white for cards
  border: "rgba(103, 50, 0, 0.15)",
  glow: "0 0 20px rgba(103, 50, 0, 0.15)",
  inverseText: "#fde1af" // Sand color for text on dark buttons
};

// --- Data ---
const benefits = [
  {
    title: "Cheaper than daily ordering",
    desc: "Weekly and monthly plans give up to 40% savings.",
    icon: <Clock4 size={24} />,
  },
  {
    title: "Fresh & Home-Style Meals",
    desc: "Healthy meals prepared by verified home kitchens.",
    icon: <Award size={24} />,
  },
  {
    title: "Flexible controls",
    desc: "Pause, skip, or change your meal schedule anytime.",
    icon: <CalendarDays size={24} />,
  },
  {
    title: "Zero Delivery Fees",
    desc: "All subscription plans include free delivery.",
    icon: <Zap size={24} />,
  },
];

// Updated Plans Data with Images for the new Card Design
const plans = [
  {
    title: "One-Day Tiffin",
    price: "Starting ₹99 / meal",
    description: "Perfect for trying out a new provider or ordering occasionally.",
    bullets: ["No commitments", "Pay per meal", "Choose lunch or dinner"],
    cta: "Order for Today",
    popular: false,
    // Added image for the new card layout
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=95" 
  },
  {
    title: "Monthly Plan",
    badge: "Most Popular",
    price: "₹1,799 / month",
    description: "Our best value plan with maximum savings for professionals.",
    bullets: ["30 meals included", "Free delivery", "Skip up to 5 days", "Priority support"],
    cta: "Start Monthly Plan",
    popular: true,
    // Added image for the new card layout
    image: "https://images.unsplash.com/photo-1606491956689-2ea28c674675?auto=format&fit=crop&w=800&q=95"
  },
];

const mealContents = [
  "Roti / Rice",
  "Dal / Curry",
  "Seasonal Veg Sabzi",
  "Salad",
  "Pickle",
];

const steps = [
  {
    title: "Pick a plan",
    desc: "Select One-Day, Weekly, or Monthly based on your needs.",
  },
  {
    title: "Choose provider",
    desc: "Browse hygiene-verified kitchens near you.",
  },
  {
    title: "Set schedule",
    desc: "Pick start date, meal preferences, and delivery address.",
  },
];

const controls = [
  "Pause subscription for specific dates",
  "Skip a meal",
  "Change address",
  "Change provider (before next cycle)",
  "Cancel anytime",
  "Track all deliveries",
];

const testimonials = [
  {
    quote: "Monthly plan is perfect for working professionals. Hygienic and tasty meals every day.",
    author: "Priya M.",
  },
  {
    quote: "Weekly subscription helped me during exam week. Super reliable!",
    author: "Rajat S.",
  },
];

const faqs = [
  {
    q: "Can I pause my subscription?",
    a: "Yes. You can pause for selected dates anytime.",
  },
  {
    q: "Can I skip a specific meal?",
    a: "Yes. Use the ‘Skip Meal’ option before the meal cutoff time.",
  },
  {
    q: "Will I get refunds for skipped days?",
    a: "Skipped days are adjusted in your next cycle or refunded as wallet balance (provider-based).",
  },
  {
    q: "Can I change the kitchen/provider?",
    a: "You can change the provider for your next billing cycle.",
  },
  {
    q: "How do payments work?",
    a: "Weekly and Monthly plans are prepaid. One-Day meals are pay-per-order.",
  },
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

const SubscriptionPage: React.FC = () => {
  // --- Logic for new Cards ---
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- Dynamic Styles for New Cards ---
  const getCardStyle = (index: number, isPopular: boolean): React.CSSProperties => {
    const isHovered = hoveredIndex === index;
    return {
      position: 'relative',
      background: palette.surface,
      borderRadius: '16px',

      boxShadow: isHovered
        ? `0 25px 50px -12px ${palette.border}`
        : `0 10px 15px -3px rgba(0, 0, 0, 0.05)`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      border: isPopular ? `2px solid ${palette.primary}` : `1px solid ${palette.border}`,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: isMobile ? 'column-reverse' : 'row', // Stack on mobile
      height: isMobile ? 'auto' : '360px',
      alignItems: 'stretch',
      cursor: "default"
    };
  };

  const imageSectionStyle: React.CSSProperties = {
    position: isMobile ? 'relative' : 'absolute',

    right: 0,
    top: 0,
    bottom: 0,
    width: isMobile ? '100%' : '55%',
    height: isMobile ? '200px' : '100%',
    // The diagonal clip path
    clipPath: isMobile ? 'none' : 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)', 
    overflow: 'hidden',
    zIndex: 1,
  };

  const diagonalBorderWrapperStyle: React.CSSProperties = {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '55%',
    // The slightly offset clip path to create the border line effect
    clipPath: 'polygon(19.5% 0, 100% 0, 100% 100%, -0.5% 100%)', 
    background: palette.primary, 
    zIndex: 0,
    display: isMobile ? 'none' : 'block',
  };

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
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 64 }}>
        
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", position: "relative" }}
        >
          <motion.div 
             initial={{ scaleX: 0 }} 
             animate={{ scaleX: 1 }} 
             style={{ width: 60, height: 4, background: palette.primary, margin: "0 auto 16px" }} 
          />
          <p style={{ letterSpacing: 6, textTransform: "uppercase", fontWeight: 700, fontSize: 14, color: palette.primary }}>
            Next Gen Dining
          </p>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", margin: "12px 0", fontWeight: 800, lineHeight: 1 }}>
            FUTURE OF <span style={{ color: palette.primary }}>TIFFIN</span>
          </h1>
          <p style={{ maxWidth: 600, margin: "0 auto", opacity: 0.85, fontSize: "1.1rem" }}>
            Automate your daily nutrition. Save money. Eat fresh. <br/>Control everything from your dashboard.
          </p>
        </motion.header>

        {/* Benefits Grid */}
        <motion.section 
          variants={containerVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div style={gridTwo}>
            {benefits.map((benefit, i) => (
              <motion.article 
                key={benefit.title} 
                variants={itemVar}
                whileHover={{ scale: 1.02, boxShadow: palette.glow, borderColor: palette.primary }}
                style={benefitCard}
              >
                <div style={iconBox}>
                  {React.cloneElement(benefit.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 4 }}>{benefit.title}</h3>
                  <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>{benefit.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* --- MODIFIED PLANS SECTION (Based on your new design) --- */}
        <section>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={sectionTitle}
          >
            SELECT PROTOCOL
          </motion.h2>
          
          <div
            style={{
              display: 'grid',
              gap: 32,
              // Single column on mobile, two columns on larger screens
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))',
            }}
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={getCardStyle(index, plan.popular)}
              >
                {/* 1. The Diagonal Border Line (Background Layer) */}
                <div style={diagonalBorderWrapperStyle}></div>

                {/* 2. The Image Section (Right Side) */}
                <div style={imageSectionStyle}>
                  <img 
                    src={plan.image} 
                    alt={plan.title} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.7s ease',
                      transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                    }} 
                  />
                  {/* Overlay for text legibility if needed, though mostly visual here */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(to right, rgba(0,0,0,0.1), transparent)',
                    pointerEvents: 'none'
                  }}></div>
                </div>

                {/* 3. The Content Section (Left Side) */}
                <div style={{
                    // Slightly narrower content column on desktop so text doesn't sit under the diagonal edge
                    flex: isMobile ? '1' : '0 0 45%', 
                    padding: isMobile ? '24px 20px' : '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 2,
                }}>
                  <div style={{ 
                      fontSize: '18px', 
                      fontWeight: '700', 
                      color: palette.primary, 
                      textTransform: 'uppercase', 
                      letterSpacing: '2px', 
                      marginBottom: 8 
                  }}>
                    {plan.title}
                  </div>
                  
                  <div style={{ 
                      fontSize: isMobile ? '24px' : '32px', 
                      fontWeight: '800', 
                      color: palette.text, 
                      marginBottom: 16,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12
                  }}>
                    {plan.price}
                    {plan.badge && (
                       <span style={{ 
                         fontSize: '11px', 
                         background: palette.primary, 
                         color: palette.inverseText, 
                         padding: '4px 8px', 
                         borderRadius: '4px',
                         letterSpacing: 0.5,
                         textTransform: "uppercase"
                       }}>{plan.badge}</span>
                    )}
                  </div>

                  <p style={{ opacity: 0.8, marginBottom: 20, lineHeight: 1.5 }}>
                    {plan.description}
                  </p>

                  <ul style={listStyle}>
                    {plan.bullets.map((bullet, i) => (
                      <li key={i} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: "0.95rem", fontWeight: 600 }}>
                        <CheckCircle2 size={18} color={palette.primary} /> 
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <button style={{
                      marginTop: 24,
                      padding: '14px 28px',
                      background: hoveredIndex === index ? palette.primary : "transparent",
                      color: hoveredIndex === index ? palette.inverseText : palette.primary,
                      border: `2px solid ${palette.primary}`,
                      borderRadius: '8px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      width: isMobile ? '100%' : 'fit-content'
                  }}>
                    {plan.cta} <span>→</span>
                  </button>
                </div>

              </motion.div>
            ))}
          </div>
        </section>

        {/* Meal Contents & Controls Split */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
            <motion.section 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={techPanel}
            >
                <h3 style={panelHeader}><Award size={20} /> MEAL COMPOSITION</h3>
                <ul style={listStyle}>
                    {mealContents.map((item, i) => (
                    <motion.li 
                        key={item} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        style={techListItem}
                    >
                        <div style={dot} /> {item}
                    </motion.li>
                    ))}
                </ul>
            </motion.section>

            <motion.section 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={techPanel}
            >
                <h3 style={panelHeader}><CalendarDays size={20} /> SYSTEM CONTROLS</h3>
                <ul style={listStyle}>
                    {controls.map((control, i) => (
                    <motion.li 
                        key={control}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        style={techListItem}
                    >
                        <div style={dot} /> {control}
                    </motion.li>
                    ))}
                </ul>
            </motion.section>
        </div>

        {/* Steps Timeline */}
        <section>
          <h2 style={{ ...sectionTitle, textAlign: "center" }}>INITIALIZATION</h2>
          <div style={stepGrid}>
            {steps.map((step, index) => (
              <motion.article 
                key={step.title} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                style={stepCard}
              >
                <div style={stepNumber}>0{index + 1}</div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 700 }}>{step.title}</h3>
                <p style={{ opacity: 0.8 }}>{step.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section>
            <h2 style={sectionTitle}>USER LOGS</h2>
            <div style={gridTwo}>
                {testimonials.map(({ quote, author }, i) => (
                <motion.blockquote 
                    key={author} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    style={testimonialCard}
                >
                    <Quote size={32} color={palette.primary} style={{ opacity: 0.2, position: "absolute", top: 16, right: 16 }} />
                    <p style={{ margin: "8px 0", fontSize: "1.1rem", fontStyle: "italic" }}>"{quote}"</p>
                    <strong style={{ color: palette.primary, display: "block", marginTop: 12 }}>— {author}</strong>
                </motion.blockquote>
                ))}
            </div>
        </section>

        {/* FAQ */}
        <section style={{ maxWidth: 800, margin: "0 auto", width: "100%" }}>
          <h2 style={{ ...sectionTitle, textAlign: "center" }}>FAQ DATABASE</h2>
          <div style={{ display: "grid", gap: 16 }}>
            {faqs.map(({ q, a }) => (
               <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            style={{ 
                textAlign: "center", 
                padding: "64px 24px", 
                background: palette.primary, 
                color: palette.inverseText, 
                borderRadius: 4,
                position: "relative",
                overflow: "hidden"
            }}
        >
          {/* Decorative Circle */}
          <div style={{ position: "absolute", top: -50, left: -50, width: 150, height: 150, borderRadius: "50%", background: palette.bg, opacity: 0.1 }} />
          
          <h2 style={{ fontSize: "2rem", marginBottom: 16, fontWeight: 800 }}>INITIATE SUBSCRIPTION</h2>
          <p style={{ opacity: 0.9, marginBottom: 24, fontSize: "1.1rem" }}>Eat fresh. Save money. Cancel anytime.</p>
          <motion.button 
            whileHover={{ scale: 1.05, background: palette.bg, color: palette.primary }}
            whileTap={{ scale: 0.95 }}
            style={{ ...primaryButton, background: palette.inverseText, color: palette.primary, border: "none" }}
          >
            Start Your Subscription →
          </motion.button>
        </motion.section>
      </div>
    </section>
  );
};

// --- Subcomponent for animated FAQ ---
const FaqItem = ({ q, a }: { q: string, a: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div 
            style={faqStyle}
            initial={false}
            animate={{ backgroundColor: isOpen ? palette.surface : "transparent" }}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", padding: "16px 20px" }}>
                <span style={{ fontWeight: 600, fontSize: "1.1rem" }}>{q}</span>
                {isOpen ? <ChevronUp size={20} color={palette.primary} /> : <ChevronDown size={20} />}
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: "hidden" }}
                    >
                        <p style={{ padding: "0 20px 20px", opacity: 0.8, lineHeight: 1.6 }}>{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

// --- Styles ---

const sectionTitle: React.CSSProperties = {
    fontSize: "1.8rem",
    fontWeight: 800,
    letterSpacing: 2,
    marginBottom: 24,
    textTransform: "uppercase",
    color: palette.primary,
};

const gridTwo: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: 20,
};

const benefitCard: React.CSSProperties = {
  display: "flex",
  gap: 16,
  padding: 24,
  borderRadius: "12px",
  background: palette.surface,
  border: `1px solid ${palette.border}`,
  alignItems: "flex-start",
  cursor: "default",
};

const iconBox: React.CSSProperties = {
    background: palette.bg,
    padding: 10,
    borderRadius: 8,
    color: palette.primary,
    boxShadow: `0 4px 12px ${palette.border}`,
};

const stepGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 24,
};

const stepCard: React.CSSProperties = {
  background: palette.surface,
  borderRadius: "4px 20px 4px 20px", // Futuristic angle
  padding: "32px 24px",
  border: `1px solid ${palette.border}`,
  position: "relative",
  textAlign: "center",
};

const stepNumber: React.CSSProperties = {
  fontSize: "3rem",
  fontWeight: 900,
  color: palette.primary,
  opacity: 0.15,
  position: "absolute",
  top: 0,
  right: 12,
  lineHeight: 1,
};

const testimonialCard: React.CSSProperties = {
  background: palette.surface,
  borderRadius: "0 24px 0 24px",
  padding: 24,
  border: `1px solid ${palette.border}`,
  borderLeft: `4px solid ${palette.primary}`,
  position: "relative",
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const primaryButton: React.CSSProperties = {
  padding: "16px 24px",
  borderRadius: "8px", 
  fontWeight: 700,
  cursor: "pointer",
  letterSpacing: 1,
  textTransform: "uppercase",
  fontSize: "0.9rem",
  transition: "all 0.2s",
};

const faqStyle: React.CSSProperties = {
  border: `1px solid ${palette.border}`,
  borderRadius: 8,
  overflow: "hidden",
  background: palette.surface,
};

const techPanel: React.CSSProperties = {
    background: palette.primary, // Dark Cocoa
    color: palette.inverseText,  // Sand
    padding: 32,
    borderRadius: 16,
    position: "relative",
    overflow: "hidden",
};

const panelHeader: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    borderBottom: `1px solid ${palette.border}`,
    paddingBottom: 16,
    marginBottom: 20,
    letterSpacing: 1,
};

const techListItem: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontSize: "1rem",
    opacity: 0.9,
};

const dot: React.CSSProperties = {
    width: 6,
    height: 6,
    background: palette.inverseText, // Sand dots on cocoa bg
    borderRadius: "50%",
    boxShadow: `0 0 8px ${palette.inverseText}`,
};

export default SubscriptionPage;