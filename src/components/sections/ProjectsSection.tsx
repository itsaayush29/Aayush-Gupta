"use client";

import GlowCard from "@/components/GlowCard";
import SectionHeader from "@/components/SectionHeader";

const projects = [
  {
    title: "Portfolio Website",
    description: "A dark, responsive QA and front-end portfolio built to present skills, projects, and professional credibility.",
    stack: ["Next.js", "React.js", "Tailwind CSS", "Responsive Design", "Modern UI/UX"],
    features: ["Animated hero experience", "Recruiter-focused sections", "Mobile-first layout"],
    accent: "#00F5FF",
  },
  {
    title: "AI-Assisted Test Case Generator",
    description: "AI-powered test case generator using Google Apps Script and Gemini API to reduce QA documentation time.",
    stack: ["Google Apps Script", "Gemini API", "UI Form", "Test Case Design", "BVA", "EP"],
    features: [
      "Generates test cases using BVA and Equivalence Partitioning via macro-triggered UI form",
      "Reusable automation support for teams managing multiple test scenarios",
    ],
    accent: "#7B61FF",
  },
  {
    title: "REST API Testing",
    description: "Manual and automated API testing for a user management system covering CRUD, auth, and business workflows.",
    stack: ["Postman", "Playwright", "JavaScript", "JSON Validation", "SQL"],
    features: [
      "Validated request/response payloads, status codes, headers, and error handling via Postman",
      "End-to-end workflow testing with Playwright and SQL data integrity checks",
    ],
    accent: "#00FFB3",
  },
  {
    title: "E-Commerce Web Application Testing",
    description: "End-to-end testing of an e-commerce platform covering registration, login, search, cart, and checkout.",
    stack: ["Test Case Design", "Manual Testing", "Playwright", "JavaScript"],
    features: [
      "Designed and executed 50+ test cases for functional, regression, and negative scenarios",
      "Automated critical flows (login, search, cart, checkout) using Playwright",
    ],
    accent: "#FFC857",
  },
  {
    title: "StudyNotion - EdTech Learning Platform",
    description: "Full-stack learning platform with course creation, enrollment, role-based access, and content management.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs"],
    features: [
      "Built interactive UI with React.js and backend services with Node.js/Express.js",
      "Secure authentication with role-based access control for students and instructors",
    ],
    accent: "#FF5D73",
  },
  {
    title: "VoyageVista Travel Platform",
    description: "Travel platform UI with dynamic content rendering, destination browsing, and a polished responsive layout.",
    stack: ["React.js", "Tailwind CSS", "Dynamic Content Rendering"],
    features: ["Destination cards", "Dynamic page content", "Responsive travel UI"],
    accent: "#00E676",
  },
] as const;

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-spacer" style={{ padding: "6rem 2rem", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader
          label="PROJECTS"
          title="Selected Work"
          subtitle="Projects that show front-end craft, QA thinking, data analysis, and applied problem solving."
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
    </section>
  );
}
