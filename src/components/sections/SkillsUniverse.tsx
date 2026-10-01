"use client";

import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";

const skills = [
  { name: "Playwright", color: "#00F5FF", orbit: 2.4, speed: "7s", icon: "🎭", desc: "Web automation testing" },
  { name: "API Testing", color: "#7B61FF", orbit: 3.2, speed: "9s", icon: "🌐", desc: "REST request and response validation" },
  { name: "Postman", color: "#00FFB3", orbit: 4.0, speed: "11s", icon: "📡", desc: "API response checks" },
  { name: "Jira", color: "#FFC857", orbit: 4.8, speed: "13s", icon: "📬", desc: "Defect tracking" },
  { name: "JavaScript", color: "#FF5D73", orbit: 2.0, speed: "6s", icon: "⚡", desc: "Playwright test scripts" },
  { name: "Katalon", color: "#00E676", orbit: 3.6, speed: "10s", icon: "📘", desc: "Testing tool" },
  { name: "SQL", color: "#00F5FF", orbit: 5.2, speed: "15s", icon: "📋", desc: "Backend data validation" },
  { name: "Regression Testing", color: "#7B61FF", orbit: 2.8, speed: "8s", icon: "🗄", desc: "Repeatable release checks" },
  { name: "Git", color: "#00FFB3", orbit: 4.4, speed: "12s", icon: "🔄", desc: "Version control" },
  { name: "Manual Testing", color: "#FFC857", orbit: 1.6, speed: "5s", icon: "🔍", desc: "Functional and exploratory testing" },
] as const;

export default function SkillsUniverse() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedSkill = skills[selectedIndex];

  return (
    <section id="skills" style={{ padding: "6rem 1.5rem", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader
          label="Skills Universe"
          title="A living map of QA strengths"
          subtitle="Interactive orbit paths for the tools, languages, and workflows I use to ship reliable releases."
        />

        <div
          style={{
            marginTop: "2rem",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.8fr)",
            gap: "1.5rem",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              minHeight: 560,
              position: "relative",
              borderRadius: 28,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "radial-gradient(circle at top, rgba(0,245,255,0.12), rgba(5,8,22,0.96) 58%)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(transparent 0, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, transparent 0, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "72px 72px", opacity: 0.35 }} />
            <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
              <div
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.6), rgba(0,245,255,0.45) 35%, rgba(0,245,255,0.08) 62%, rgba(0,0,0,0) 72%)",
                  boxShadow: "0 0 60px rgba(0,245,255,0.3)",
                  animation: "skillsPulse 6s ease-in-out infinite",
                }}
              />
            </div>

            {[1, 2, 3].map((ring) => (
              <div
                key={ring}
                style={{
                  position: "absolute",
                  inset: `${ring * 12}%`,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
            ))}

            {skills.map((skill, index) => {
              const offset = index * 36;
              const x = Math.cos((offset / 180) * Math.PI) * skill.orbit * 44;
              const y = Math.sin((offset / 180) * Math.PI) * skill.orbit * 26;
              const active = index === selectedIndex;

              return (
                <button
                  key={skill.name}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-pressed={active}
                  style={{
                    all: "unset",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    cursor: "pointer",
                    padding: "0.55rem 0.85rem",
                    borderRadius: 999,
                    background: active ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
                    border: active ? `1px solid ${skill.color}66` : `1px solid ${skill.color}22`,
                    color: skill.color,
                    boxShadow: `0 0 24px ${skill.color}18`,
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "0.78rem",
                    whiteSpace: "nowrap",
                    animation: `skillsOrbit ${skill.speed} linear infinite`,
                    animationDelay: `${index * -0.35}s`,
                  }}
                >
                  {skill.icon} {skill.name}
                </button>
              );
            })}
          </div>

          <aside
            style={{
              borderRadius: 28,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(9, 13, 31, 0.92)",
              padding: "1.5rem",
              boxShadow: "0 24px 60px rgba(0,0,0,0.3)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.45rem 0.7rem",
                borderRadius: 999,
                color: selectedSkill.color,
                border: `1px solid ${selectedSkill.color}33`,
                background: "rgba(255,255,255,0.03)",
                fontSize: "0.85rem",
                marginBottom: "1rem",
              }}
            >
              <span>{selectedSkill.icon}</span>
              <span>{selectedSkill.name}</span>
            </div>

            <h3 style={{ fontSize: "1.5rem", lineHeight: 1.1, margin: "0 0 0.75rem", color: "#F4F7FB" }}>
              {selectedSkill.desc}
            </h3>

            <p style={{ color: "rgba(244,247,251,0.74)", lineHeight: 1.7, margin: 0 }}>
              The portfolio groups these capabilities around a single outcome: reliable, explainable release quality across the full testing surface.
            </p>

            <div style={{ marginTop: "1.5rem", display: "grid", gap: "0.75rem" }}>
              {skills.map((skill, index) => {
                const active = index === selectedIndex;
                return (
                  <button
                    key={skill.name}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    style={{
                      all: "unset",
                      cursor: "pointer",
                      borderRadius: 14,
                      padding: "0.9rem 1rem",
                      border: active ? `1px solid ${skill.color}66` : "1px solid rgba(255,255,255,0.08)",
                      background: active ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
                      color: "#F4F7FB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.75rem",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                      <span style={{ fontSize: "1.1rem" }}>{skill.icon}</span>
                      <span style={{ fontWeight: 600 }}>{skill.name}</span>
                    </span>
                    <span style={{ color: skill.color, fontSize: "0.8rem" }}>{skill.desc}</span>
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        @keyframes skillsPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.06); opacity: 1; }
        }
        @keyframes skillsOrbit {
          from { filter: brightness(1); }
          50% { filter: brightness(1.12); }
          to { filter: brightness(1); }
        }
        @media (max-width: 900px) {
          section#skills > div > div {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}