"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? "0.875rem 2.5rem" : "1.75rem 2.5rem",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        background: scrolled ? "rgba(8, 8, 8, 0.88)" : "transparent",
        transition: "padding 0.4s ease, background 0.4s ease, border-color 0.4s ease",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <a
        href="/"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.8125rem",
          letterSpacing: "0.15em",
          color: "var(--fg)",
          textDecoration: "none",
          textTransform: "uppercase",
        }}
      >
        Yahya Safdari
      </a>

      {/* Nav links */}
      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        {links.map((link) => (
          <NavLink key={link.label} href={link.href} label={link.label} />
        ))}
        <HireButton />
      </div>
    </motion.nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: "0.8125rem",
        letterSpacing: "0.05em",
        color: hovered ? "var(--fg)" : "var(--muted)",
        textDecoration: "none",
        transition: "color 0.2s ease",
        position: "relative",
      }}
    >
      {label}
      <span
        style={{
          position: "absolute",
          bottom: -2,
          left: 0,
          height: "1px",
          width: hovered ? "100%" : "0%",
          background: "var(--accent)",
          transition: "width 0.25s ease",
          display: "block",
        }}
      />
    </a>
  );
}

function HireButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="mailto:yahyasafdari0@gmail.com"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: "0.75rem",
        letterSpacing: "0.1em",
        padding: "0.5625rem 1.25rem",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border-light)"}`,
        background: hovered ? "var(--accent)" : "transparent",
        color: hovered ? "var(--bg)" : "var(--fg)",
        textDecoration: "none",
        textTransform: "uppercase",
        fontFamily: "var(--font-mono)",
        transition: "all 0.25s ease",
      }}
    >
      Hire Me
    </a>
  );
}
