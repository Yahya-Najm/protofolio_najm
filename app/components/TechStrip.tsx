"use client";

import { motion } from "framer-motion";
import { useMobile } from "../hooks/useMobile";

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Framer Motion",
  "REST APIs",
  "Git",
  "Vercel",
];

// Double for seamless loop
const items = [...stack, ...stack];

export default function TechStrip() {
  const isMobile = useMobile();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "1rem 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Fade edges */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: isMobile ? "60px" : "120px",
          background: "linear-gradient(to right, var(--bg), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: isMobile ? "60px" : "120px",
          background: "linear-gradient(to left, var(--bg), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div className="marquee-inner" style={{ gap: "3rem", whiteSpace: "nowrap" }}>
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "3rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--muted)",
              flexShrink: 0,
            }}
          >
            {item}
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "var(--accent)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </motion.div>
  );
}
