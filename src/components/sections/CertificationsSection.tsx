"use client";

import GlowCard from "@/components/GlowCard";
import SectionHeader from "@/components/SectionHeader";

const certifications = [
  {
    name: "ISTQB Certified Tester Foundation Level (CTFL)",
    organization: "ISTQB",
    year: "Certified",
    details: "Foundation-level certification in software testing principles and practices.",
    color: "#00F5FF",
  },
] as const;

function AwardIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-spacer" style={{ padding: "6rem 2rem", position: "relative" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <SectionHeader
          label="CERTIFICATIONS"
          title="ISTQB Certification"
          subtitle="Professional certification in software testing."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {certifications.map((certification, index) => (
            <GlowCard
              key={certification.name}
              glowColor={certification.color}
              style={{
                display: "flex",
                flexDirection: "column",
                animation: "fadeUp 0.6s ease forwards",
                animationDelay: `${index * 0.06}s`,
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem", marginBottom: "1rem" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: `${certification.color}14`,
                    border: `1px solid ${certification.color}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <AwardIcon color={certification.color} />
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "inline-flex",
                      color: certification.color,
                      border: `1px solid ${certification.color}33`,
                      background: `${certification.color}12`,
                      borderRadius: 999,
                      padding: "0.2rem 0.65rem",
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "0.68rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {certification.year}
                  </div>
                  <h3
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "1.1rem",
                      lineHeight: 1.2,
                      margin: 0,
                      color: "#F8FAFC",
                    }}
                  >
                    {certification.name}
                  </h3>
                </div>
              </div>

              <p style={{ color: "#00F5FF", fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", margin: "0 0 0.65rem" }}>
                {certification.organization}
              </p>
              <p style={{ color: "#A0AEC0", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                {certification.details}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
