"use client";

import GlowCard from "@/components/GlowCard";
import SectionHeader from "@/components/SectionHeader";

const education = [
  {
    program: "Bachelor of Technology in Data Science Engineering",
    institution: "Gyan Ganga Institute of Technology and Sciences, Jabalpur",
    duration: "2021 - 2025",
    highlights: ["CGPA: 7.86/10", "Data science specialization", "Software Testing, Quality Assurance & Full-Stack Development"],
    color: "#00F5FF",
  },
  {
    program: "Class XII, CGBSE",
    institution: "Saint Ann's Higher Secondary School, Tamnar",
    duration: "2020 - 2021",
    highlights: ["Percentage: 96.2%", "Strong academic foundation", "Analytical problem-solving focus"],
    color: "#7B61FF",
  },
  {
    program: "Class X, CGBSE",
    institution: "Saint Ann's Higher Secondary School, Tamnar",
    duration: "2018 - 2019",
    highlights: ["Core academic fundamentals", "Mathematics and science foundation", "Disciplined learning approach"],
    color: "#00FFB3",
  },
] as const;

export default function EducationSection() {
  return (
    <section id="education" className="section-spacer" style={{ padding: "6rem 2rem", position: "relative" }}>
      <div style={{ maxWidth: 1050, margin: "0 auto" }}>
        <SectionHeader
          label="EDUCATION"
          title="Academic Foundation"
          subtitle="A clean academic timeline connecting data science, engineering fundamentals, and software quality interests."
        />

        <div style={{ display: "grid", gap: "1.25rem" }}>
          {education.map((item, index) => (
            <GlowCard
              className="education-row"
              key={item.program}
              glowColor={item.color}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 0.8fr) minmax(0, 1.2fr)",
                gap: "1.5rem",
                alignItems: "center",
                animation: "fadeUp 0.6s ease forwards",
                animationDelay: `${index * 0.06}s`,
              }}
            >
              <div>
                <span
                  style={{
                    display: "inline-flex",
                    color: item.color,
                    border: `1px solid ${item.color}33`,
                    background: `${item.color}12`,
                    borderRadius: 999,
                    padding: "0.35rem 0.75rem",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "0.72rem",
                    marginBottom: "1rem",
                  }}
                >
                  {item.duration}
                </span>
                <h3
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "1.28rem",
                    lineHeight: 1.18,
                    margin: "0 0 0.55rem",
                    color: "#F8FAFC",
                  }}
                >
                  {item.program}
                </h3>
                <p style={{ color: "#A0AEC0", margin: 0, lineHeight: 1.6 }}>
                  {item.institution}
                </p>
              </div>

              <ul style={{ display: "grid", gap: "0.55rem", margin: 0, paddingLeft: "1.1rem", color: "#D7DEE8", lineHeight: 1.6 }}>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </GlowCard>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .education-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
