"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useMobile } from "../hooks/useMobile";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend & Infrastructure",
    items: ["Node.js", "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "Docker", "Prisma", "REST APIs"],
  },
  {
    category: "AI & Automation",
    items: ["LLM Fine-tuning", "OpenAI API", "LangChain", "RAG", "Prompt Engineering", "Automation Pipelines", "Model Evaluation"],
  },
  {
    category: "Systems & Tooling",
    items: ["System Design", "Git", "Vercel", "Linux", "CI/CD"],
  },
];

const contact = [
  { label: "Email", value: "yahyasafdari0@gmail.com", href: "mailto:yahyasafdari0@gmail.com" },
  { label: "Telegram", value: "@YSNajm", href: "https://t.me/YSNajm" },
  { label: "WhatsApp", value: "+7 747 795 1480", href: "https://wa.me/77477951480" },
];

export default function About() {
  const isMobile = useMobile();

  return (
    <section
      id="about"
      style={{
        padding: `${isMobile ? "4rem" : "7rem"} ${isMobile ? "1.25rem" : "2.5rem"}`,
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
            letterSpacing: "0.14em",
            color: "var(--accent)",
            textTransform: "uppercase",
            marginBottom: isMobile ? "2.5rem" : "4rem",
          }}
        >
          [ 03 ] — About
        </motion.div>

        {/* Main content grid: bio+skills left, photo right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 380px",
            gap: isMobile ? "2.5rem" : "5rem",
            alignItems: "start",
          }}
        >
          {/* Left column */}
          <div>
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            >
              {/* Title badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.375rem 0.875rem",
                  border: "1px solid var(--border-light)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.12em",
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  marginBottom: "1.75rem",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                Full-Stack Engineer · CS Student
              </div>

              <h2
                style={{
                  fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  marginBottom: "0.5rem",
                }}
              >
                Yahya Safdari
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8125rem",
                  color: "var(--accent)",
                  letterSpacing: "0.08em",
                  marginBottom: "2rem",
                }}
              >
                Al-Farabi Kazakh National University
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.125rem", marginBottom: "2.5rem" }}>
                {[
                  "I'm a full-stack engineer and CS student at Al-Farabi Kazakh National University, building complete digital systems — from responsive frontends to distributed backends and AI-integrated applications.",
                  "Beyond engineering, I have hands-on teaching experience: I've worked as a computer, ICDL, programming, and English instructor — which sharpened both my technical depth and my ability to communicate complex ideas clearly.",
                  "I also spent a year working at an ISP, giving me real-world exposure to networking infrastructure, systems administration, and how the internet actually runs at ground level.",
                  "I approach every project systems-first: I think in architecture before I think in code, which means what I build is maintainable, scalable, and built to last.",
                ].map((para, i) => (
                  <p
                    key={i}
                    style={{
                      color: "var(--muted)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.78,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Contact links */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
                {contact.map(({ label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      textDecoration: "none",
                      color: "var(--fg)",
                      fontSize: "0.875rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.625rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                        minWidth: "72px",
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        color: "var(--accent)",
                        fontFamily: "var(--font-mono)",
                        fontSize: isMobile ? "0.75rem" : "0.8125rem",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {value}
                    </span>
                  </a>
                ))}
              </div>

              <motion.a
                href="mailto:yahyasafdari0@gmail.com"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.9375rem 2rem",
                  border: "1px solid var(--accent)",
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  width: isMobile ? "100%" : "auto",
                  justifyContent: isMobile ? "center" : "flex-start",
                }}
                whileHover={{
                  background: "var(--accent)",
                  color: "var(--bg)",
                }}
              >
                Let&apos;s Work Together →
              </motion.a>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay: 0.1 }}
              style={{ marginTop: "4rem" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "2.25rem" }}>
                {skills.map((group, gi) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + 0.2, duration: 0.6 }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6875rem",
                        letterSpacing: "0.14em",
                        color: "var(--muted)",
                        textTransform: "uppercase",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {group.category}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {group.items.map((item) => (
                        <SkillChip key={item} label={item} />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Fact grid */}
              <div
                style={{
                  marginTop: "3rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid var(--border)",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}
              >
                {[
                  { label: "Based in", value: "Kazakhstan" },
                  { label: "Education", value: "Al-Farabi KazNU" },
                  { label: "Status", value: "Available" },
                  { label: "Focus", value: "Full-Stack + AI" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.625rem",
                        color: "var(--muted)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 500,
                        color: "var(--fg)",
                      }}
                    >
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay: 0.15 }}
            style={{
              position: isMobile ? "relative" : "sticky",
              top: isMobile ? "auto" : "8rem",
              order: isMobile ? -1 : 0,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: isMobile ? "3/4" : "3/5",
                overflow: "hidden",
                maxHeight: isMobile ? "420px" : "none",
              }}
            >
              {/* Subtle accent glow behind photo */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80%",
                  height: "40%",
                  background: "radial-gradient(ellipse at center bottom, rgba(205,255,0,0.08) 0%, transparent 70%)",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />
              <Image
                src="/myphoto.png"
                alt="Yahya Safdari"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom center",
                }}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillChip({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "0.375rem 0.875rem",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        color: hovered ? "var(--accent)" : "var(--fg)",
        fontSize: "0.8125rem",
        transition: "all 0.2s ease",
        cursor: "default",
      }}
    >
      {label}
    </span>
  );
}
