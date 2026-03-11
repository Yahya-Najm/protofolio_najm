"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const socials = [
  { label: "Telegram", href: "https://t.me/YSNajm" },
  { label: "WhatsApp", href: "https://wa.me/77477951480" },
  { label: "Email", href: "mailto:yahyasafdari0@gmail.com" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "6rem 2.5rem 3rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "6rem" }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6875rem",
              letterSpacing: "0.14em",
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            [ 04 ] — Contact
          </div>

          <h2
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 0.95,
              marginBottom: "2.5rem",
            }}
          >
            LET&apos;S BUILD
            <br />
            <span className="shimmer-text">SOMETHING.</span>
          </h2>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <EmailButton />
            <span
              style={{
                fontSize: "0.875rem",
                color: "var(--muted)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span
                className="pulse-dot"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  display: "inline-block",
                }}
              />
              Currently available for freelance & full-time roles
            </span>
          </div>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6875rem",
              color: "var(--muted)",
              letterSpacing: "0.08em",
            }}
          >
            © {new Date().getFullYear()} Yahya Safdari — Built with Next.js
          </span>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            {socials.map(({ label, href }) => (
              <SocialLink key={label} href={href} label={label} />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

function EmailButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="mailto:yahyasafdari0@gmail.com"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "1rem 2.25rem",
        background: hovered ? "rgba(205,255,0,0.9)" : "var(--accent)",
        color: "var(--bg)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.8125rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        textDecoration: "none",
        fontWeight: 600,
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 40px rgba(205,255,0,0.25)" : "none",
      }}
    >
      Say Hello →
    </a>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.6875rem",
        letterSpacing: "0.1em",
        color: hovered ? "var(--fg)" : "var(--muted)",
        textDecoration: "none",
        transition: "color 0.2s ease",
        textTransform: "uppercase",
      }}
    >
      {label}
    </a>
  );
}
