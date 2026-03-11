"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMobile } from "../hooks/useMobile";

/* ── Animation variants ─────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.55,
    },
  },
};

const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number];

const lineVariant = {
  hidden: { y: "115%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: easeOut,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOut },
  },
};

/* ── Component ──────────────────────────────────────── */

export default function Hero() {
  const isMobile = useMobile();

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        padding: `0 ${isMobile ? "1.25rem" : "2.5rem"}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Background orbs ── */}
      <div
        className="float-orb"
        style={{
          position: "absolute",
          top: "5%",
          right: isMobile ? "-30%" : "-8%",
          width: isMobile ? "300px" : "680px",
          height: isMobile ? "300px" : "680px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(205,255,0,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        className="float-orb-2"
        style={{
          position: "absolute",
          bottom: "10%",
          left: isMobile ? "-30%" : "-12%",
          width: isMobile ? "240px" : "500px",
          height: isMobile ? "240px" : "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(205,255,0,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Content ── */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", width: "100%" }}>

        {/* Top label row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? "0.625rem" : "0",
            marginBottom: isMobile ? "2rem" : "3rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: isMobile ? "0.75rem" : "0.9rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              fontWeight: 500,
            }}
          >
            Full-Stack Engineer · AI Systems
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              color: "var(--muted)",
              textTransform: "uppercase",
            }}
          >
            <span
              className="pulse-dot"
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--accent)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Available for work
          </span>
        </motion.div>

        {/* ── Main headline ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: isMobile ? "2.5rem" : "4rem" }}
        >
          {[
            { text: "SHIPPING", accent: false },
            { text: "FULLSTACK", accent: true },
            { text: "SYSTEMS.", accent: false },
          ].map(({ text, accent }) => (
            <div key={text} style={{ overflow: "hidden", lineHeight: 0.92 }}>
              <motion.span
                variants={lineVariant}
                style={{
                  display: "block",
                  fontSize: "clamp(3rem, 11vw, 9.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  color: accent ? "var(--accent)" : "var(--fg)",
                  paddingBottom: "0.08em",
                }}
              >
                {text}
              </motion.span>
            </div>
          ))}

          {/* Subtitle under headline */}
          <motion.p
            variants={fadeUp}
            style={{
              marginTop: "1.5rem",
              fontSize: "clamp(0.9375rem, 2vw, 1.25rem)",
              color: "var(--muted)",
              letterSpacing: "0.01em",
              lineHeight: 1.6,
              maxWidth: "560px",
            }}
          >
            End-to-end products — from database to deployment, with clean
            architecture and real-world performance.
          </motion.p>
        </motion.div>

        {/* ── Bottom row ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: "0.875rem",
              flexShrink: 0,
              flexWrap: isMobile ? "wrap" : "nowrap",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <CTAButton href="#work" primary>
              View Project Sample ↓
            </CTAButton>
            <CTAButton href="#contact" primary={false}>
              Get in Touch →
            </CTAButton>
          </div>
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          style={{
            display: "flex",
            gap: isMobile ? "1.75rem" : "3rem",
            marginTop: isMobile ? "3rem" : "5rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "3+", label: "Projects Shipped" },
            { num: "2", label: "Live Products" },
            { num: "100%", label: "Client Focused" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div
                style={{
                  fontSize: isMobile ? "1.625rem" : "2rem",
                  fontWeight: 700,
                  color: "var(--fg)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-mono)",
                  marginTop: "0.375rem",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.625rem",
          letterSpacing: "0.16em",
          color: "var(--muted)",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "36px",
            background: "linear-gradient(to bottom, var(--muted), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}

/* ── CTA Button ─────────────────────────────────────── */

function CTAButton({
  href,
  primary,
  children,
}: {
  href: string;
  primary: boolean;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  const isMobile = useMobile();

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.9375rem 2rem",
        fontSize: "0.8125rem",
        letterSpacing: "0.08em",
        fontFamily: "var(--font-mono)",
        textTransform: "uppercase",
        textDecoration: "none",
        fontWeight: 500,
        transition: "all 0.25s ease",
        flex: isMobile ? "1 1 auto" : "0 0 auto",
        background: primary
          ? hovered
            ? "rgba(205,255,0,0.85)"
            : "var(--accent)"
          : "transparent",
        color: primary ? "var(--bg)" : hovered ? "var(--fg)" : "var(--muted)",
        border: primary
          ? "1px solid var(--accent)"
          : `1px solid ${hovered ? "var(--border-light)" : "var(--border)"}`,
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: primary && hovered ? "0 8px 30px rgba(205,255,0,0.2)" : "none",
      }}
    >
      {children}
    </a>
  );
}
