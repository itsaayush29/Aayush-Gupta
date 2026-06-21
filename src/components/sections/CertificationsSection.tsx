"use client";

import GlowCard from "@/components/GlowCard";
import SectionHeader from "@/components/SectionHeader";

const certifications = [
  {
    name: "Software Testing Certifications",
    organization: "QA Training Programs",
    year: "2025",
    details: "Manual testing, software testing fundamentals, SDLC, STLC, and defect reporting.",
    color: "#00F5FF",
  },
  {
    name: "Front-End Development Certifications",
    organization: "Technical Learning Platforms",
    year: "2025",
    details: "React.js, responsive design, JavaScript fundamentals, and modern web development.",
    color: "#7B61FF",
  },
  {
    name: "Data Science Certifications",
    organization: "Academic & Online Programs",
    year: "2024",
    details: "Python, data analysis, visualization, machine learning basics, and predictive analysis.",
    color: "#00FFB3",
  },
  {
    name: "Technical Workshops",
    organization: "College & Community Events",
    year: "2024",
    details: "Hands-on sessions covering web technologies, data workflows, and software quality practices.",
    color: "#FFC857",
  },
  {
    name: "Hackathon Participation",
    organization: "Student Innovation Events",
    year: "2024",
    details: "Collaborative problem solving, rapid prototyping, presentation, and team delivery.",
    color: "#FF5D73",
  },
] as const;

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-spacer" style={{ padding: "6rem 2rem", position: "relative" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <SectionHeader
          label="CERTIFICATIONS"
          title="Learning Signals"
          subtitle="Certifications, training programs, workshops, and participation highlights that support the QA and front-end profile."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {certifications.map((certification, index) => (
            <GlowCard
              key={certification.name}
              glowColor={certification.color}
              style={{
                minHeight: 250,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                animation: "fadeUp 0.6s ease forwards",
                animationDelay: `${index * 0.06}s`,
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    color: certification.color,
                    border: `1px solid ${certification.color}33`,
                    background: `${certification.color}12`,
                    borderRadius: 999,
                    padding: "0.35rem 0.75rem",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "0.72rem",
                    marginBottom: "1rem",
                  }}
                >
                  {certification.year}
                </div>
                <h3
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "1.2rem",
                    lineHeight: 1.18,
                    margin: "0 0 0.65rem",
                    color: "#F8FAFC",
                  }}
                >
                  {certification.name}
                </h3>
                <p style={{ color: "#00F5FF", fontFamily: "JetBrains Mono, monospace", fontSize: "0.74rem", margin: "0 0 0.85rem" }}>
                  {certification.organization}
                </p>
                <p style={{ color: "#A0AEC0", lineHeight: 1.65, margin: 0 }}>
                  {certification.details}
                </p>
              </div>

              <span
                style={{
                  marginTop: "1.35rem",
                  color: "#64748B",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "0.72rem",
                }}
              >
                Credential link optional
              </span>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
