"use client";

import GlowCard from "@/components/GlowCard";
import SectionHeader from "@/components/SectionHeader";

const categories = [
  {
    title: "Testing Types",
    color: "#00F5FF",
    skills: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "Integration Testing",
      "System Testing",
      "End-to-End Testing",
      "UI Testing",
      "Compatibility Testing",
      "Cross-Browser Testing",
      "API Testing",
      "Database Testing",
      "User Acceptance Testing",
      "Exploratory Testing",
    ],
  },
  {
    title: "Testing Tools",
    color: "#7B61FF",
    skills: ["Jira", "Postman", "Selenium", "TestNG", "JMeter", "BrowserStack", "Git", "GitHub", "VS Code"],
  },
  {
    title: "Technology & Platforms",
    color: "#00FFB3",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "MySQL", "SQL", "REST APIs", "Linux", "Windows"],
  },
  {
    title: "Methodology",
    color: "#FFC857",
    skills: ["Agile", "Scrum", "SDLC", "STLC", "Defect Life Cycle", "Test Case Design", "Bug Reporting", "Risk-Based Testing"],
  },
  {
    title: "Other Skills",
    color: "#FF5D73",
    skills: [
      "Test Case Writing",
      "Test Scenario Creation",
      "Requirement Analysis",
      "Documentation",
      "Root Cause Analysis",
      "Data Analysis",
      "Problem Solving",
      "Team Collaboration",
      "Communication Skills",
      "Attention to Detail",
    ],
  },
] as const;

export default function TechnicalSkillsSection() {
  return (
    <section id="skills" className="section-spacer" style={{ padding: "6rem 2rem", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader
          label="TECHNICAL SKILLS"
          title="QA, Development, And Analysis Toolkit"
          subtitle="Categorized skills for manual testing, automation readiness, modern front-end development, and structured problem solving."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            alignItems: "stretch",
          }}
        >
          {categories.map((category, index) => (
            <GlowCard
              key={category.title}
              glowColor={category.color}
              style={{
                minHeight: index === 0 ? 330 : 260,
                animation: "fadeUp 0.6s ease forwards",
                animationDelay: `${index * 0.06}s`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", marginBottom: "1.15rem" }}>
                <h3
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "1.2rem",
                    margin: 0,
                    color: "#F8FAFC",
                  }}
                >
                  {category.title}
                </h3>
                <span
                  style={{
                    color: category.color,
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "0.74rem",
                    border: `1px solid ${category.color}33`,
                    background: `${category.color}12`,
                    padding: "0.3rem 0.55rem",
                    borderRadius: 6,
                    whiteSpace: "nowrap",
                  }}
                >
                  {category.skills.length} SKILLS
                </span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem" }}>
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "0.42rem 0.72rem",
                      borderRadius: 6,
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#D7DEE8",
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "0.73rem",
                      lineHeight: 1.2,
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.borderColor = `${category.color}66`;
                      event.currentTarget.style.color = "#FFFFFF";
                      event.currentTarget.style.background = `${category.color}12`;
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      event.currentTarget.style.color = "#D7DEE8";
                      event.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
