"use client";

import React from "react";
import {
  CheckCircle2,
  Clock4,
  PhoneCall,
  MessageCircle,
  MapPin,
  CreditCard,
  ShieldCheck,
  RefreshCw,
  Star,
  Navigation,
  Flame,
  Activity,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";

const palette = {
  sand: "#fde1af",
  cocoa: "#673200",
  cream: "#fff7eb",
  accent: "rgba(103, 50, 0, 0.15)",
};

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
  "Food Quality Issue",
  "Missing Item",
  "Late Delivery",
  "Wrong Delivery",
  "Refund Request",
  "Other Issue",
];

const nutritionStats = [
  { label: "Calories", value: "520 kcal" },
  { label: "Protein", value: "24 g" },
  { label: "Carbs", value: "62 g" },
  { label: "Fats", value: "18 g" },
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

const OrderPage: React.FC = () => {
  const currentStatus = statusOptions[2];
  const delivered = currentStatus === "Delivered";

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
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
        <header>
          <p style={{ letterSpacing: 4, textTransform: "uppercase", fontWeight: 700, fontSize: 12 }}>Order Center</p>
          <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.2rem)", margin: "8px 0", fontWeight: 800 }}>Your Order Details</h1>
          <p style={{ opacity: 0.8 }}>Track status, contact your rider, review your meal, and reorder with one tap.</p>
        </header>

        <section
          style={{
            background: "rgba(255,255,255,0.95)",
            borderRadius: 26,
            padding: 28,
            border: `1px solid ${palette.accent}`,
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          <div>
            <h3 style={{ marginTop: 0 }}>Current Status</h3>
            <div
              style={{
                borderRadius: 18,
                padding: 16,
                background: palette.cream,
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontWeight: 700,
              }}
            >
              <Clock4 /> {currentStatus}
            </div>
            <ul style={{ listStyle: "none", padding: 0, marginTop: 18, display: "flex", flexDirection: "column", gap: 14 }}>
              {timeline.map((step, index) => (
                <li key={step.label} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      background: step.done ? palette.cocoa : palette.accent,
                      color: step.done ? palette.sand : palette.cocoa,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    {step.done ? "✔" : index + 1}
                  </span>
                  <div>
                    <strong>{step.label}</strong>
                    <p style={{ margin: 0, fontSize: 14, opacity: 0.75 }}>{step.label === "Arriving by" && !delivered ? `Arriving by ${step.time}` : step.time}</p>
                  </div>
                </li>
              ))}
              {delivered && (
                <li style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      background: palette.cocoa,
                      color: palette.sand,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    ✔
                  </span>
                  <div>
                    <strong>Delivered at 1:12 PM</strong>
                  </div>
                </li>
              )}
            </ul>
          </div>

          <div
            style={{
              borderRadius: 24,
              background: palette.cream,
              padding: 20,
              border: `1px solid ${palette.accent}`,
            }}
          >
            <h3 style={{ marginTop: 0 }}>Delivery Partner</h3>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <ShieldCheck size={24} /> Rahul S.
            </div>
            <p style={{ margin: 0 }}>Vehicle: MH 31 AB 0921</p>
            <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
              <button style={buttonGhost}><PhoneCall size={16} /> Call Rider</button>
              <button style={buttonGhost}><MessageCircle size={16} /> Message Rider</button>
            </div>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>Order Summary</h3>
            <p><strong>Tiffin Provider:</strong> Home Kitchen by Asha</p>
            <p><strong>Meal Type:</strong> Lunch (Regular Veg Thali)</p>
            <p><strong>Items Included:</strong></p>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
              {orderItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>Delivery Details</h3>
            <p><MapPin size={16} style={{ marginRight: 6 }} /> <strong>Address:</strong> Flat 204, Balaji Residency, Nagpur</p>
            <p><Clock4 size={16} style={{ marginRight: 6 }} /> <strong>Delivery Window:</strong> 1:00 PM – 1:30 PM</p>
            <p><strong>Special Instructions:</strong> “Call on arrival.”</p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>Payment Details</h3>
            <div style={{ display: "grid", gap: 8 }}>
              <PaymentRow label="Meal Price" value="₹90" />
              <PaymentRow label="Delivery Charge" value="Free" />
              <PaymentRow label="Taxes" value="₹5" />
              <PaymentRow label="Total Paid" value="₹95" bold />
              <PaymentRow label="Payment Mode" value="UPI (Razorpay)" />
              <PaymentRow label="Transaction ID" value="RPX892312ND" />
            </div>
          </div>
        </section>

        <section style={cardStyle}>
          <h3 style={{ marginTop: 0 }}>Need Support?</h3>
          <p>If something went wrong, we’re here to help.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 12 }}>
            {supportIssues.map((issue) => (
              <button key={issue} style={chipStyle}>{issue}</button>
            ))}
          </div>
          <button style={{ ...primaryButton, marginTop: 18 }}>Get Help</button>
        </section>

        <section
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>Provider Contact</h3>
            <p>Need to contact the provider? Message or call directly for specific concerns.</p>
            <div style={{ display: "flex", gap: 12 }}>
              <button style={buttonGhost}><PhoneCall size={16} /> Call Provider</button>
              <button style={buttonGhost}><MessageCircle size={16} /> Message Provider</button>
            </div>
          </div>

          {delivered && (
            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Rate Your Meal</h3>
              <div style={{ display: "flex", gap: 8, fontSize: 22 }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} fill={palette.cocoa} color={palette.cocoa} />
                ))}
              </div>
              <textarea placeholder="How was your meal today?" rows={3} style={{ ...inputStyle, marginTop: 12, resize: "vertical" }} />
              <button style={{ ...primaryButton, marginTop: 12 }}>Submit Rating</button>
            </div>
          )}
        </section>

        <section
          style={{
            background: "rgba(255,255,255,0.95)",
            borderRadius: 24,
            padding: 24,
            border: `1px solid ${palette.accent}`,
            display: "grid",
            gap: 20,
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          <div style={{ borderRadius: 20, padding: 16, background: palette.cream }}>
            <h4>Delivery Map Tracking</h4>
            <p style={{ fontSize: 14, opacity: 0.8 }}>Live location with ETA</p>
            <div style={{ height: 140, background: "rgba(0,0,0,0.05)", borderRadius: 16, position: "relative" }}>
              <Navigation style={{ position: "absolute", top: "50%", left: "45%" }} />
            </div>
          </div>
          <div style={{ borderRadius: 20, padding: 16, background: palette.cream }}>
            <h4>Nutrition Info</h4>
            <div style={{ display: "grid", gap: 6 }}>
              {nutritionStats.map((stat) => (
                <p key={stat.label} style={{ margin: 0 }}>
                  <strong>{stat.label}:</strong> {stat.value}
                </p>
              ))}
            </div>
          </div>
          <div style={{ borderRadius: 20, padding: 16, background: palette.cream }}>
            <h4>Your Daily Streak</h4>
            <p>You’ve ordered 3 meals this week from this provider!</p>
            <div style={{ display: "flex", gap: 8 }}>
              <Activity /> <CalendarCheck /> <Flame />
            </div>
          </div>
          <div style={{ borderRadius: 20, padding: 16, background: palette.cream }}>
            <h4>Save More</h4>
            <p>Save more with Weekly/Monthly Plans →</p>
            <button style={buttonGhost}><RefreshCw size={16} /> Explore Plans</button>
          </div>
        </section>

        <section style={cardStyle}>
          <h3 style={{ marginTop: 0 }}>Order History</h3>
          <p style={{ opacity: 0.8 }}>Quick snapshot of your recent meals.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
            {orderHistory.map((order) => (
              <div
                key={order.date + order.provider}
                style={{
                  borderRadius: 18,
                  border: `1px solid ${palette.accent}`,
                  padding: 16,
                  background: palette.cream,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p style={{ margin: 0, fontWeight: 700 }}>{order.provider}</p>
                  <p style={{ margin: 0 }}>{order.meal}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ margin: 0 }}>{order.date}</p>
                  <p style={{ margin: 0 }}><strong>{order.status}</strong> • {order.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ textAlign: "center", padding: 28, background: palette.cocoa, color: palette.sand, borderRadius: 26 }}>
          <h2>Loved it? Order Again →</h2>
          <p>Reorder your favorite thali in less than 10 seconds.</p>
          <button style={{ ...primaryButton, background: palette.sand, color: palette.cocoa }}>Order Again</button>
        </section>
      </div>
    </section>
  );
};

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.95)",
  borderRadius: 24,
  padding: 24,
  border: `1px solid ${palette.accent}`,
};

const buttonGhost: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: 16,
  border: `1px solid ${palette.cocoa}`,
  background: "transparent",
  display: "flex",
  alignItems: "center",
  gap: 8,
  fontWeight: 600,
  cursor: "pointer",
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

const chipStyle: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: 18,
  border: `1px solid ${palette.cocoa}`,
  background: "transparent",
  cursor: "pointer",
  fontWeight: 600,
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

const PaymentRow = ({ label, value, bold }: { label: string; value: string; bold?: boolean }) => (
  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: bold ? 700 : 500 }}>
    <span>{label}</span>
    <span>{value}</span>
  </div>
);

export default OrderPage;