"use client";

import GlowCard from "@/components/GlowCard";
import SectionHeader from "@/components/SectionHeader";

const experiences = [
  {
    role: "Software Test Engineer",
    company: "Globussoft",
    duration: "June 2025 - April 2026",
    technologies: [
      "Manual Testing",
      "API Testing",
      "Functional Testing",
      "Postman",
      "Jira",
      "SQL",
      "Elasticsearch",
      "Agile Scrum",
      "Regression Testing",
      "Smoke Testing",
      "Exploratory Testing"
    ],
    achievements: [
      "Executed 500+ test cases across AI-powered products and reported 500+ defects, improving application stability and release quality.",
      "Performed comparative testing of AI-generated content against ChatGPT and Gemini to validate output quality, usability, and feature performance.",
      "Validated backend data integrity using SQL, Elasticsearch queries, and API response verification through Postman."
    ],
    responsibilities: [
      "Performed end-to-end Manual, API, Functional, Regression, Smoke, and Exploratory Testing for AdGPT and PowerAdSpy.",
      "Designed, executed, and maintained test cases, test scenarios, and test documentation based on business requirements.",
      "Validated ad search, filtering, targeting, competitor analysis, and reporting modules across multiple workflows.",
      "Conducted API testing, verified JSON responses, and ensured end-to-end workflow accuracy.",
      "Logged, tracked, and verified defects using Jira while collaborating with developers for timely resolution.",
      "Participated in Agile Scrum ceremonies and supported production releases with quality assurance activities."
    ],
    color: "#7B61FF",
  }
] as const;

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}>
      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-spacer" style={{ padding: "6rem 2rem", position: "relative" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionHeader
          label="EXPERIENCE"
          title="Development And QA Journey"
          subtitle="A practical timeline across front-end development, software testing, academic builds, and portfolio projects."
        />

        <div style={{ position: "relative", display: "grid", gap: "1.5rem" }}>
          {experiences.map((item, index) => (
            <div key={item.role} style={{ position: "relative", paddingLeft: "3rem" }}>
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "0.62rem",
                  top: "1.55rem",
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: item.color,
                  boxShadow: `0 0 20px ${item.color}66`,
                  border: "2px solid rgba(255,255,255,0.1)",
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "0.68rem",
                  top: "3rem",
                  bottom: 0,
                  width: 2,
                  background: `linear-gradient(180deg, ${item.color}44, ${item.color}11)`,
                }}
              />

              <GlowCard
                glowColor={item.color}
                style={{
                  animation: "fadeUp 0.6s ease forwards",
                  animationDelay: `${index * 0.06}s`,
                }}
              >
                <div style={{ display: "grid", gap: "1.25rem" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
                    <div>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          padding: "0.3rem 0.8rem",
                          borderRadius: 999,
                          background: `${item.color}14`,
                          border: `1px solid ${item.color}33`,
                          color: item.color,
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: "0.72rem",
                          marginBottom: "0.75rem",
                        }}
                      >
                        {item.duration}
                      </div>
                      <h3
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontSize: "1.5rem",
                          lineHeight: 1.2,
                          margin: 0,
                          color: "#F8FAFC",
                        }}
                      >
                        {item.role}
                      </h3>
                      <p style={{ color: "#A0AEC0", fontSize: "1rem", margin: "0.35rem 0 0" }}>
                        {item.company}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: "0.3rem 0.7rem",
                          borderRadius: 6,
                          border: "1px solid rgba(255,255,255,0.08)",
                          background: "rgba(255,255,255,0.03)",
                          color: "#94A3B8",
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: "0.7rem",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "grid", gap: "1rem" }}>
                    {item.achievements.length > 0 && (
                      <div>
                        <p style={{ color: item.color, fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", margin: "0 0 0.75rem", letterSpacing: "0.05em" }}>
                          KEY ACHIEVEMENTS
                        </p>
                        <div style={{ display: "grid", gap: "0.6rem" }}>
                          {item.achievements.map((achievement) => (
                            <div key={achievement} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                              <CheckIcon color={item.color} />
                              <span style={{ color: "#D7DEE8", fontSize: "0.9rem", lineHeight: 1.6 }}>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.responsibilities.length > 0 && (
                      <div>
                        <p style={{ color: "#00F5FF", fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", margin: "0 0 0.75rem", letterSpacing: "0.05em" }}>
                          RESPONSIBILITIES
                        </p>
                        <div style={{ display: "grid", gap: "0.6rem" }}>
                          {item.responsibilities.map((responsibility) => (
                            <div key={responsibility} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                              <CheckIcon color="#00F5FF" />
                              <span style={{ color: "#A0AEC0", fontSize: "0.9rem", lineHeight: 1.6 }}>{responsibility}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
