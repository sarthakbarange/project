"use client";

import React from "react";
import { CheckCircle2, Award, CalendarDays, Clock4, Users, Star, Quote } from "lucide-react";

const palette = {
  sand: "#fde1af",
  cocoa: "#673200",
  cream: "#fff7eb",
  accent: "rgba(103, 50, 0, 0.1)",
};

const benefits = [
  {
    title: "Cheaper than daily ordering",
    desc: "Weekly and monthly plans give up to 40% savings.",
  },
  {
    title: "Fresh & Home-Style Meals Every Day",
    desc: "Healthy meals prepared by verified home kitchens.",
  },
  {
    title: "Flexible controls",
    desc: "Pause, skip, or change your meal schedule anytime from your dashboard.",
  },
  {
    title: "Zero Delivery Fees",
    desc: "All subscription plans include free delivery.",
  },
];

const plans = [
  {
    title: "One-Day Tiffin",
    price: "Starting ₹99 / meal",
    description: "Perfect for trying out a new provider or ordering occasionally.",
    bullets: ["No commitments", "Pay per meal", "Choose lunch or dinner"],
    cta: "Order for Today",
  },
  {
    title: "Monthly Plan",
    badge: "Most Popular",
    price: "₹1,799 / month",
    description: "Our best value plan with maximum savings.",
    bullets: ["30 meals", "Free delivery & priority support", "Skip up to 5 days/month", "Perfect for professionals & hostel students"],
    cta: "Start Monthly Plan",
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
    title: "Choose your provider",
    desc: "Browse hygiene-verified kitchens near you.",
  },
  {
    title: "Set your schedule",
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

const SubscriptionPage: React.FC = () => {
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
          <p style={{ letterSpacing: 4, textTransform: "uppercase", fontWeight: 700, fontSize: 12 }}>Subscriptions</p>
          <h1 style={{ fontSize: "clamp(2.6rem, 4vw, 3.5rem)", margin: "8px 0", fontWeight: 800 }}>
            Choose a Subscription That Fits Your Lifestyle
          </h1>
          <p style={{ maxWidth: 660, opacity: 0.85 }}>
            Save money and enjoy fresh home-style meals delivered daily. Flexible plans. Easy to pause, skip, or cancel anytime.
          </p>
        </header>

        <section style={cardSection}>
          <h2>Why Choose a Subscription?</h2>
          <div style={gridTwo}>
            {benefits.map((benefit) => (
              <article key={benefit.title} style={benefitCard}>
                <CheckCircle2 size={20} />
                <div>
                  <strong>{benefit.title}</strong>
                  <p>{benefit.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section style={cardSection}>
          <h2>Subscription Plans</h2>
          <div style={planGrid}>
            {plans.map((plan) => (
              <article key={plan.title} style={{ ...planCard, borderColor: plan.title === "Monthly Plan" ? palette.cocoa : palette.accent }}>
                {plan.badge && <span style={badgeStyle}>{plan.badge}</span>}
                <h3>{plan.title}</h3>
                <p style={{ fontSize: 14, opacity: 0.8 }}>{plan.price}</p>
                <p>{plan.description}</p>
                <ul style={listStyle}>
                  {plan.bullets.map((bullet) => (
                    <li key={bullet}><CheckCircle2 size={16} /> {bullet}</li>
                  ))}
                </ul>
                <button style={{ ...primaryButton, width: "100%", marginTop: 16 }}>{plan.cta}</button>
              </article>
            ))}
          </div>
        </section>

        <section style={cardSection}>
          <h2>What’s Inside Each Meal?</h2>
          <p>All providers deliver a complete home-style thali including:</p>
          <ul style={listStyle}>
            {mealContents.map((item) => (
              <li key={item}><Award size={16} /> {item}</li>
            ))}
          </ul>
          <p style={{ marginTop: 12 }}>Optional Add-ons (Varies by provider. Full details shown on provider page.)</p>
        </section>

        <section style={cardSection}>
          <h2>How Subscription Works</h2>
          <div style={stepGrid}>
            {steps.map((step, index) => (
              <article key={step.title} style={stepCard}>
                <span style={stepBadge}>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section style={cardSection}>
          <h2>Flexibility & Controls</h2>
          <p>Manage everything from the “My Tiffin” section:</p>
          <ul style={listStyle}>
            {controls.map((control) => (
              <li key={control}><CalendarDays size={16} /> {control}</li>
            ))}
          </ul>
        </section>

        <section style={cardSection}>
          <h2>Testimonials</h2>
          <div style={gridTwo}>
            {testimonials.map(({ quote, author }) => (
              <blockquote key={author} style={testimonialCard}>
                <Quote size={20} />
                <p style={{ margin: "8px 0" }}>{quote}</p>
                <strong>— {author}</strong>
              </blockquote>
            ))}
          </div>
        </section>

        <section style={cardSection}>
          <h2>FAQs</h2>
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
          <h2>Ready to eat fresh, homemade meals every day?</h2>
          <button style={{ ...primaryButton, background: palette.sand, color: palette.cocoa, marginTop: 12 }}>
            Start Your Subscription →
          </button>
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

const gridTwo: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 16,
};

const planGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 18,
};

const benefitCard: React.CSSProperties = {
  display: "flex",
  gap: 12,
  padding: 16,
  borderRadius: 18,
  border: `1px solid ${palette.accent}`,
  background: palette.cream,
};

const planCard: React.CSSProperties = {
  background: palette.cream,
  borderRadius: 24,
  padding: 22,
  border: `1px solid ${palette.accent}`,
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

const stepGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 16,
};

const stepCard: React.CSSProperties = {
  background: palette.cream,
  borderRadius: 20,
  padding: 18,
  border: `1px solid ${palette.accent}`,
  position: "relative",
};

const stepBadge: React.CSSProperties = {
  position: "absolute",
  top: -12,
  left: -12,
  width: 32,
  height: 32,
  borderRadius: "50%",
  background: palette.cocoa,
  color: palette.sand,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
};

const testimonialCard: React.CSSProperties = {
  background: palette.cream,
  borderRadius: 20,
  padding: 18,
  border: `1px solid ${palette.accent}`,
};

const badgeStyle: React.CSSProperties = {
  alignSelf: "flex-start",
  background: palette.cocoa,
  color: palette.sand,
  padding: "4px 10px",
  borderRadius: 999,
  fontSize: 12,
  marginBottom: 8,
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

const primaryButton: React.CSSProperties = {
  padding: "12px 20px",
  borderRadius: 18,
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

export default SubscriptionPage;