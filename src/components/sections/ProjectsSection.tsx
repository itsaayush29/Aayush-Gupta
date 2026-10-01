"use client";

import GlowCard from "@/components/GlowCard";
import SectionHeader from "@/components/SectionHeader";

const projects = [
  {
    title: "Web Automation Testing - Playwright",
    description: "Automated functional and end-to-end web application scenarios using Playwright with JavaScript.",
    stack: ["Playwright", "JavaScript", "Locators", "Assertions"],
    features: [
      "Automated user interactions, form elements, navigation, and application behavior",
      "Organized test scenarios and analyzed execution results to support repeatable regression testing",
    ],
    accent: "#00F5FF",
  },
  {
    title: "AI-Powered Bug Tracker",
    description: "A defect management system built with Google Sheets and Google Apps Script, with Gemini-powered summaries and Telegram alerts.",
    stack: ["Google Apps Script", "Google Sheets", "Gemini API", "Telegram Bot API", "JavaScript", "REST APIs"],
    features: [
      "Automatically logs bugs with incremental IDs, timestamps, environment, priority, status, and assignee",
      "Generates summaries and insights from natural-language queries and sends real-time issue notifications",
    ],
    accent: "#7B61FF",
  },
  {
    title: "REST API Testing",
    description: "REST API validation for a user management system, covering CRUD operations, authentication, and business workflows.",
    stack: ["Postman", "REST APIs", "JavaScript", "JSON Validation", "SQL"],
    features: [
      "Validated request parameters, payloads, status codes, headers, error handling, JSON structure, and response time",
      "Verified data integrity with SQL queries across positive and negative scenarios",
    ],
    accent: "#00FFB3",
  },
] as const;

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-spacer" style={{ padding: "6rem 2rem", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader
          label="PROJECTS"
          title="Selected Work"
          subtitle="Selected QA projects covering browser automation, defect management, and REST API validation."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {projects.map((project, index) => (
            <GlowCard
              key={project.title}
              glowColor={project.accent}
              style={{
                minHeight: 420,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                animation: "fadeUp 0.6s ease forwards",
                animationDelay: `${index * 0.05}s`,
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at 85% 8%, ${project.accent}18, transparent 30%)`,
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    display: "grid",
                    placeItems: "center",
                    border: `1px solid ${project.accent}33`,
                    background: `${project.accent}12`,
                    color: project.accent,
                    fontFamily: "JetBrains Mono, monospace",
                    fontWeight: 700,
                    marginBottom: "1.15rem",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "1.28rem",
                    lineHeight: 1.18,
                    margin: "0 0 0.75rem",
                    color: "#F8FAFC",
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ color: "#A0AEC0", lineHeight: 1.7, margin: "0 0 1.25rem", fontSize: "0.94rem" }}>
                  {project.description}
                </p>

                <div style={{ marginBottom: "1.25rem" }}>
                  <p style={{ color: project.accent, fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", margin: "0 0 0.65rem" }}>
                    TECH STACK
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: "0.35rem 0.65rem",
                          borderRadius: 6,
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "#D7DEE8",
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: "0.7rem",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <ul style={{ display: "grid", gap: "0.45rem", margin: 0, paddingLeft: "1.05rem", color: "#A0AEC0", lineHeight: 1.55 }}>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>


            </GlowCard>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section#projects > div > div:last-child { gap: 1rem !important; }
          section#projects > div > div:last-child > div { min-height: 360px !important; }
        }
        @media (max-width: 480px) {
          section#projects > div > div:last-child > div { min-height: auto !important; padding: 1.25rem !important; }
          section#projects > div > div:last-child > div h3 { font-size: 1.1rem !important; }
          section#projects > div > div:last-child > div > div > div:first-child { width: 36px !important; height: 36px !important; font-size: 0.85rem !important; }
        }
      `}</style>
    </section>
  );
}
