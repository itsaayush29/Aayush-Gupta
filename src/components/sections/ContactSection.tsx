"use client";

import GlowCard from "@/components/GlowCard";
import SectionHeader from "@/components/SectionHeader";

const contactItems = [
  { label: "Email", value: "aayushgupta.qatester@gmail.com", href: "mailto:aayushgupta.qatester@gmail.com", color: "#00F5FF" },
  { label: "Phone", value: "+91 6267845383", href: "tel:+916267845383", color: "#7B61FF" },
  { label: "Resume", value: "View Resume", href: "https://drive.google.com/file/d/1Vpd69BWa8Smr2wG0jVRa-NJ4IwE1Pgpt/view", color: "#00FFB3" },
  { label: "LinkedIn", value: "https://www.linkedin.com/in/aayush-gupta-9b25a421a/", href: "https://linkedin.com/", color: "#FFC857" },
  { label: "GitHub", value: "github.com/aayush-gupta", href: "https://github.com/", color: "#FF5D73" },
] as const;

export default function ContactSection() {
  return (
    <section id="contact" className="section-spacer" style={{ padding: "6rem 2rem", position: "relative" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <SectionHeader
          label="CONTACT"
          title="Get In Touch"
          subtitle="Open to Front-End Development, QA Engineering, Software Testing, and SDET opportunities."
        />

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(280px, 0.7fr)",
            gap: "1.25rem",
            alignItems: "stretch",
          }}
        >
          <GlowCard
            glowColor="#00F5FF"
            style={{
              minHeight: 340,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "linear-gradient(135deg, rgba(0,245,255,0.07), rgba(123,97,255,0.06))",
            }}
          >
            <div>
              <p style={{ color: "#00F5FF", fontFamily: "JetBrains Mono, monospace", fontSize: "0.78rem", margin: "0 0 1rem" }}>
                READY FOR NEW ROLES
              </p>
              <h3
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.2rem)",
                  lineHeight: 1.02,
                  margin: "0 0 1rem",
                  color: "#FFFFFF",
                }}
              >
                Let's build reliable, user-ready software.
              </h3>
              <p style={{ color: "#A0AEC0", lineHeight: 1.8, maxWidth: 680, margin: 0 }}>
                I bring a combined front-end and QA mindset: clean interfaces, careful validation, structured bug reporting, and a strong focus on the user experience behind every release.
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem", marginTop: "2rem" }}>
              <a
                href="mailto:aayushgupta.qatester@gmail.com"
                style={{
                  padding: "0.9rem 1.25rem",
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #00F5FF, #7B61FF)",
                  border: "none",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                Email Me
              </a>
              <a
                href="https://drive.google.com/file/d/1Vpd69BWa8Smr2wG0jVRa-NJ4IwE1Pgpt/view"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "0.9rem 1.25rem",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                View Resume
              </a>
            </div>
          </GlowCard>

          <div style={{ display: "grid", gap: "0.85rem" }}>
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                style={{
                  display: "block",
                  padding: "1rem",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.borderColor = `${item.color}55`;
                  event.currentTarget.style.transform = "translateY(-3px)";
                  event.currentTarget.style.boxShadow = `0 18px 36px ${item.color}14`;
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  event.currentTarget.style.transform = "";
                  event.currentTarget.style.boxShadow = "";
                }}
              >
                <span style={{ display: "block", color: item.color, fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", marginBottom: "0.35rem" }}>
                  {item.label.toUpperCase()}
                </span>
                <span style={{ display: "block", color: "#F8FAFC", fontSize: "0.92rem", overflowWrap: "anywhere" }}>
                  {item.value}
                </span>
              </a>
            ))}
          </div>
        </div>

        <p
          style={{
            margin: "3rem 0 0",
            textAlign: "center",
            color: "#64748B",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "0.72rem",
            letterSpacing: "0.08em",
          }}
        >
          © 2026 Aayush Gupta. All rights reserved.
        </p>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          div.contact-grid > div:first-child { padding: 1.25rem !important; min-height: auto !important; }
          div.contact-grid > div:first-child h3 { font-size: clamp(1.5rem, 7vw, 2.2rem) !important; }
          div.contact-grid > div:first-child > div > div:last-child { flex-direction: column !important; }
          div.contact-grid > div:first-child > div > div:last-child a { text-align: center !important; }
        }
      `}</style>
    </section>
  );
}
