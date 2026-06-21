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
    source: "https://github.com/",
    demo: "#hero",
  },
  {
    title: "Dog Breed Identification Using Machine Learning",
    description: "Image classification project using CNN concepts to identify dog breeds with model training and evaluation workflows.",
    stack: ["TensorFlow", "CNN", "Python", "Image Classification", "93% Accuracy"],
    features: ["Image preprocessing", "Model evaluation", "Accuracy reporting"],
    accent: "#7B61FF",
    source: "https://github.com/",
    demo: "",
  },
  {
    title: "Stock Market Data Analysis System",
    description: "Data analysis project focused on stock market trends, visual insights, and clean analytical reporting.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Visualization"],
    features: ["Data cleaning", "Trend visualization", "Insight generation"],
    accent: "#00FFB3",
    source: "https://github.com/",
    demo: "",
  },
  {
    title: "Customer Churn Analysis",
    description: "Predictive analytics project for understanding customer behavior, churn patterns, and risk signals.",
    stack: ["Data Analytics", "Python", "Predictive Analysis"],
    features: ["Feature analysis", "Churn pattern discovery", "Business-focused insights"],
    accent: "#FFC857",
    source: "https://github.com/",
    demo: "",
  },
  {
    title: "Expense Tracker Application",
    description: "React application for tracking expenses with client-side persistence and a responsive user interface.",
    stack: ["React.js", "Local Storage", "Responsive UI"],
    features: ["Expense entry flow", "Persistent local data", "Clean dashboard layout"],
    accent: "#FF5D73",
    source: "https://github.com/",
    demo: "",
  },
  {
    title: "VoyageVista Travel Platform",
    description: "Travel platform UI with dynamic content rendering, destination browsing, and a polished responsive layout.",
    stack: ["React.js", "Tailwind CSS", "Dynamic Content Rendering"],
    features: ["Destination cards", "Dynamic page content", "Responsive travel UI"],
    accent: "#00E676",
    source: "https://github.com/",
    demo: "",
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

              <div style={{ position: "relative", zIndex: 1, display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.5rem" }}>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: "0.7rem 1rem",
                    borderRadius: 10,
                    background: `${project.accent}14`,
                    border: `1px solid ${project.accent}33`,
                    color: "#F8FAFC",
                    textDecoration: "none",
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    style={{
                      padding: "0.7rem 1rem",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#F8FAFC",
                      textDecoration: "none",
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
