"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ── Project data ────────────────────────────────────── */

const projects = [
  {
    id: "01",
    title: "Iterax",
    subtitle: "AI-Powered Learning & Content Management System",
    description:
      "Most e-learning platforms deliver passive content — videos, slides, readings. Iterax flips that entirely. Every course uploaded by a teacher becomes a hands-on, AI-evaluated experience. Students learn by doing, and the AI evaluates every attempt in real time — whether that's a spoken answer, a written response, a piece of code, or a filled blank.",
    features: [
      "7 exercise types: MCQ, writing, speaking, coding, fill-in-the-blank, pronunciation & more",
      "In-browser IDE — write and run code without leaving the lesson",
      "AI evaluation engine gives instant, contextual feedback per submission",
      "Role system: Admin sees everything, Teachers author content, Students learn by doing",
      "MongoDB stores exercises, lesson sections & dynamic course content",
      "PostgreSQL handles users, classes, lessons & all relational practice data",
      "Redis queues AI requests so a surge in users never crashes the pipeline",
      "Redis also manages sessions & auth state for fast, stateless login",
    ],
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "Docker", "Prisma", "AI Evaluation"],
    status: "live" as const,
    link: "https://iteralearning.com",
    image: "/projects/iteralearning.jpg" as string | null,
    featured: true,
  },
  {
    id: "02",
    title: "Knowledge Galaxy",
    subtitle: "AI · 3D Interactive Knowledge Explorer",
    description:
      "A hobby project built to push my design and 3D skills as far as I could take them. Ask any question and the AI response unfolds as a living, navigable galaxy — each concept a glowing node you can click to expand into new sub-topics, rendered in real-time 3D with custom shaders, particle fields, and spatial audio. It's less about utility and more about proving that information can be beautiful.",
    features: [
      "Real-time 3D scene built with Three.js & React Three Fiber",
      "Custom GLSL shaders for glowing nodes and star particle systems",
      "OpenAI API streams concept trees rendered as explorable graph structures",
      "Framer Motion handles UI overlays with cinematic transitions",
      "Fully responsive — works on mobile with touch-based 3D navigation",
    ],
    tags: ["Next.js", "Three.js", "React Three Fiber", "GLSL Shaders", "OpenAI API", "Framer Motion", "Tailwind CSS"],
    status: "live" as const,
    link: "https://knowledge-galaxy.vercel.app",
    image: "/projects/galaxy.jpg" as string | null,
    featured: false,
  },
];

/* ── Automation tools built for academies ───────────── */

const tools = [
  {
    title: "Student Exam Checker",
    description:
      "Desktop tool that auto-grades student exam sheets — reads answers, compares against the answer key, and outputs scores. Built and deployed for a real academy I worked in.",
    tags: ["Python", "Desktop App", "Automation"],
  },
  {
    title: "Exam Bank Generator",
    description:
      "Generates randomised exam papers from a question bank. Teachers select topics and difficulty, and the tool assembles a printable exam in seconds — eliminating hours of manual work.",
    tags: ["Python", "Desktop App", "Local DB"],
  },
  {
    title: "Academy Financial Manager",
    description:
      "Local database-backed financial tracker for managing student fees, payments, and expense records for the academies I worked in. Replaced spreadsheet chaos with a structured, searchable system.",
    tags: ["Python", "SQLite", "Desktop App"],
  },
  {
    title: "Telegram Bots — YouTube Downloader & Channel Growth",
    description:
      "Two production Telegram bots built with Telegraf. The first lets users send any YouTube link and receive the video or audio directly in chat — no browser, no ads, no friction. The second was built to drive real subscriber growth for Telegram channels: it automates outreach, tracks engagement, and funnels targeted users into channels organically.",
    tags: ["Node.js", "Telegraf", "Telegram Bot API", "YouTube API"],
  },
  {
    title: "Academy Communication Backend",
    description:
      "Backend system built for the academies I worked in to handle all student and parent communication at scale. Admins can send bulk messages to students, parents, or both with a single action. The system also runs automated alerts — if a student is absent, underperforming, or missing assignments, their family gets notified instantly without any manual input from staff.",
    tags: ["Node.js", "REST API", "Telegram Bot API", "Automation", "PostgreSQL"],
  },
];

/* ── Section ─────────────────────────────────────────── */

export default function Work() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
      style={{
        padding: "7rem 2.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "4rem",
          paddingBottom: "2rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6875rem",
              letterSpacing: "0.14em",
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: "0.625rem",
            }}
          >
            [ 02 ] — Selected Work
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            Projects
          </h2>
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--muted)",
            letterSpacing: "0.06em",
          }}
        >
          From zero to here — my best work
        </span>
      </motion.div>

      {/* ── Featured project ── */}
      <FeaturedCard project={featured} />

      {/* ── Grid ── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1.5rem",
          marginTop: "1.5rem",
        }}
      >
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>

      {/* ── Tools & Automation ── */}
      <ToolsSection />
    </section>
  );
}

/* ── Featured Card ───────────────────────────────────── */

function FeaturedCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0",
        border: `1px solid ${hovered ? "var(--border-light)" : "var(--border)"}`,
        background: "var(--card)",
        marginBottom: "1.5rem",
        transition: "border-color 0.3s ease",
        overflow: "hidden",
      }}
    >
      {/* Image side */}
      <div
        className={project.image ? undefined : "img-placeholder"}
        style={{
          aspectRatio: "4/3",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{
              objectFit: "cover",
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition: "transform 0.6s ease",
            }}
          />
        ) : (
          <PlaceholderLabel label="Add project screenshot here" />
        )}
      </div>

      {/* Info side */}
      <div
        style={{
          padding: "2.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6875rem",
                color: "var(--muted)",
                letterSpacing: "0.1em",
              }}
            >
              {project.id}
            </span>
            <StatusBadge status={project.status} />
          </div>

          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6875rem",
              color: "var(--accent)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            {project.subtitle}
          </div>
          <h3
            style={{
              fontSize: "1.625rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
              lineHeight: 1.1,
            }}
          >
            {project.title}
          </h3>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>
            {project.description}
          </p>

          {"features" in project && project.features && (
            <ul
              style={{
                marginTop: "1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                listStyle: "none",
              }}
            >
              {(project.features as string[]).map((feat) => (
                <li
                  key={feat}
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--muted)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.625rem",
                  }}
                >
                  <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "0.1em" }}>—</span>
                  {feat}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem", marginTop: "1.5rem" }}>
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>

          {project.link && (
            <ProjectLink href={project.link}>View Project →</ProjectLink>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Project Card ────────────────────────────────────── */

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 36 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? "var(--border-light)" : "var(--border)"}`,
        background: "var(--card)",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.3s ease, transform 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <div
        className={project.image ? undefined : "img-placeholder"}
        style={{ aspectRatio: "21/9", position: "relative", flexShrink: 0 }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{
              objectFit: "cover",
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition: "transform 0.6s ease",
            }}
          />
        ) : (
          <PlaceholderLabel label="Add screenshot" />
        )}
      </div>

      {/* Info */}
      <div style={{ padding: "2rem 2.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.625rem",
              color: "var(--muted)",
              letterSpacing: "0.1em",
            }}
          >
            {project.id}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
            color: "var(--accent)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "0.4rem",
          }}
        >
          {project.subtitle}
        </div>

        <h3
          style={{
            fontSize: "1.375rem",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            marginBottom: "0.75rem",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "0.875rem",
            lineHeight: 1.7,
            flex: 1,
            marginBottom: "1.25rem",
          }}
        >
          {project.description}
        </p>

        {"features" in project && project.features && (
          <ul
            style={{
              marginBottom: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
              listStyle: "none",
            }}
          >
            {(project.features as string[]).map((feat) => (
              <li
                key={feat}
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--muted)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.625rem",
                }}
              >
                <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "0.1em" }}>—</span>
                {feat}
              </li>
            ))}
          </ul>
        )}

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "1.5rem" }}>
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {project.link ? (
          <ProjectLink href={project.link}>View Project →</ProjectLink>
        ) : (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6875rem",
              color: "var(--muted)",
              letterSpacing: "0.08em",
            }}
          >
            Coming soon
          </span>
        )}
      </div>
    </motion.div>
  );
}

/* ── Tools & Automation Section ──────────────────────── */

function ToolsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ marginTop: "6rem" }}
    >
      {/* Sub-header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "2.5rem",
          paddingBottom: "1.5rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6875rem",
              letterSpacing: "0.14em",
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Also Built
          </div>
          <h3
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.875rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            Automation & Desktop Tools
          </h3>
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
            color: "var(--muted)",
            letterSpacing: "0.08em",
            maxWidth: "280px",
            textAlign: "right",
            lineHeight: 1.6,
          }}
        >
          Real tools deployed in the academies I worked in — no public repo, built to solve real problems.
        </span>
      </div>

      {/* Tool rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {tools.map((tool, i) => (
          <ToolRow key={tool.title} tool={tool} index={i} total={tools.length} />
        ))}
      </div>
    </motion.div>
  );
}

function ToolRow({
  tool,
  index,
  total,
}: {
  tool: (typeof tools)[0];
  index: number;
  total: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "2rem 1fr auto",
        gap: "1.5rem",
        alignItems: "start",
        padding: "1.75rem 0",
        borderBottom: index < total - 1 ? "1px solid var(--border)" : "none",
        transition: "background 0.2s ease",
        background: hovered ? "rgba(205,255,0,0.025)" : "transparent",
        margin: "0 -1rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      {/* Index */}
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.625rem",
          color: "var(--muted)",
          letterSpacing: "0.1em",
          paddingTop: "0.2em",
        }}
      >
        0{index + 1}
      </span>

      {/* Content */}
      <div>
        <h4
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            marginBottom: "0.375rem",
            color: hovered ? "var(--fg)" : "var(--fg)",
          }}
        >
          {tool.title}
        </h4>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "0.875rem",
            lineHeight: 1.65,
            maxWidth: "560px",
          }}
        >
          {tool.description}
        </p>
      </div>

      {/* Tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.375rem",
          justifyContent: "flex-end",
          paddingTop: "0.1em",
        }}
      >
        {tool.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </motion.div>
  );
}

/* ── Shared sub-components ───────────────────────────── */

function PlaceholderLabel({ label }: { label: string }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          border: "1px dashed var(--border-light)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--muted)",
          fontSize: "1.25rem",
        }}
      >
        +
      </div>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.625rem",
          color: "var(--muted)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        padding: "0.25rem 0.625rem",
        border: "1px solid var(--border)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.625rem",
        letterSpacing: "0.08em",
        color: "var(--muted)",
        textTransform: "uppercase",
      }}
    >
      {label}
    </span>
  );
}

function StatusBadge({ status }: { status: "live" | "wip" }) {
  const isLive = status === "live";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.375rem",
        fontFamily: "var(--font-mono)",
        fontSize: "0.625rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: isLive ? "var(--accent)" : "var(--muted)",
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: isLive ? "var(--accent)" : "var(--muted)",
          display: "inline-block",
        }}
      />
      {isLive ? "Live" : "WIP"}
    </span>
  );
}

function ProjectLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-mono)",
        fontSize: "0.75rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: hovered ? "var(--accent)" : "var(--fg)",
        textDecoration: "none",
        transition: "color 0.2s ease",
        gap: "0.25rem",
      }}
    >
      {children}
    </a>
  );
}
