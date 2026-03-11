"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMobile } from "../hooks/useMobile";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const hPad = isMobile ? "1.25rem" : "2.5rem";

  return (
    <>
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
          padding: scrolled ? `0.875rem ${hPad}` : `1.75rem ${hPad}`,
          borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
          backdropFilter: scrolled || menuOpen ? "blur(24px) saturate(180%)" : "none",
          background: scrolled || menuOpen ? "rgba(8, 8, 8, 0.95)" : "transparent",
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

        {/* Desktop nav */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
            {links.map((link) => (
              <NavLink key={link.label} href={link.href} label={link.label} />
            ))}
            <HireButton />
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "flex-end",
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--fg)",
                transition: "transform 0.3s ease",
                transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "14px",
                height: "1.5px",
                background: "var(--fg)",
                transition: "opacity 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--fg)",
                transition: "transform 0.3s ease",
                transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        )}
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background: "rgba(8, 8, 8, 0.98)",
              backdropFilter: "blur(24px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2.5rem",
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "2.25rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--fg)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="mailto:yahyasafdari0@gmail.com"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.08, duration: 0.4 }}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.9375rem 2.5rem",
                border: "1px solid var(--accent)",
                color: "var(--accent)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                marginTop: "0.5rem",
              }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
