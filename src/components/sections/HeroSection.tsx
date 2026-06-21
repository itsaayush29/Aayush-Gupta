"use client";

import { useEffect, useState } from "react";

const roles = ["SOFTWARE TEST ENGINEER", "PLAYWRIGHT EXPERT", "AUTOMATION QA"];

type OrbitChip = {
  label: string;
  color: string;
  delay: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

const orbitChips: OrbitChip[] = [
  { label: "Playwright", top: "12%", left: "16%", delay: "0s", color: "#00F5FF" },
  { label: "API Testing", top: "18%", right: "16%", delay: "0.7s", color: "#7B61FF" },
  { label: "CI/CD", bottom: "18%", left: "12%", delay: "1.2s", color: "#00FFB3" },
  { label: "Jira", bottom: "14%", right: "14%", delay: "0.4s", color: "#FFC857" },
] as const;

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (typed < role.length) {
        timer = setTimeout(() => setTyped((current) => current + 1), 80);
      } else {
        timer = setTimeout(() => setDeleting(true), 1800);
      }
    } else if (typed > 0) {
      timer = setTimeout(() => setTyped((current) => current - 1), 40);
    } else {
      setDeleting(false);
      setRoleIdx((current) => (current + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [typed, deleting, roleIdx]);

  const activeRole = roles[roleIdx].slice(0, typed);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "grid",
        placeItems: "center",
        padding: "6rem 1.5rem 4rem",
        background:
          "radial-gradient(circle at top, rgba(0,245,255,0.12), transparent 30%), radial-gradient(circle at 80% 20%, rgba(123,97,255,0.18), transparent 28%), linear-gradient(180deg, #050816 0%, #070b18 45%, #050816 100%)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03), transparent 34%), linear-gradient(transparent 0, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, transparent 0, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 72px 72px, 72px 72px",
          maskImage: "radial-gradient(circle at center, black 50%, transparent 100%)",
          opacity: 0.35,
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "auto",
          width: 540,
          height: 540,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,245,255,0.18), transparent 65%)",
          filter: "blur(16px)",
          animation: "heroPulse 10s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, width: "min(1120px, 100%)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(280px, 0.9fr)",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: 760, textAlign: "left" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.45rem 1rem",
                borderRadius: 999,
                background: "rgba(0,245,255,0.08)",
                border: "1px solid rgba(0,245,255,0.18)",
                marginBottom: "1.75rem",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "0.72rem",
                color: "#00F5FF",
                letterSpacing: "0.18em",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00E676", boxShadow: "0 0 12px #00E676" }} />
              AVAILABLE FOR WORK
            </div>

            <h1
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(3rem, 10vw, 6rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.02,
                margin: 0,
                background: "linear-gradient(135deg, #FFFFFF 0%, #A0AEC0 60%, #00F5FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AAYUSH GUPTA
            </h1>

            <p style={{ color: "#A0AEC0", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 640, margin: "1.25rem 0 0" }}>
              QA engineer focused on resilient automation, fast feedback loops, and release confidence across web, API, and product-critical workflows.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "clamp(0.9rem, 2.5vw, 1.15rem)",
                color: "#00F5FF",
                letterSpacing: "0.15em",
                minHeight: "2.2rem",
              }}
            >
              {activeRole}
              <span style={{ borderRight: "2px solid #00F5FF", marginLeft: 2, animation: "heroBlink 0.8s step-end infinite" }}>&nbsp;</span>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2.25rem" }}>
              <button
                type="button"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  padding: "0.9rem 1.7rem",
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #00F5FF, #7B61FF)",
                  border: "none",
                  color: "white",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  boxShadow: "0 18px 40px rgba(0,245,255,0.22)",
                }}
              >
                ENTER PORTFOLIO
              </button>
              <a
                href="https://drive.google.com/file/d/1Vpd69BWa8Smr2wG0jVRa-NJ4IwE1Pgpt/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "0.9rem 1.7rem",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "white",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                }}
              >
                VIEW RESUME
              </a>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
              {[
                { label: "GitHub", href: "https://github.com/itsaayush29",  icon: "⌥" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/aayush-gupta-9b25a421a/", icon: "◈" },
                { label: "Email", href: "mailto:aayushgupta.qatester@gmail.com", icon: "✉" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#A0AEC0",
                    textDecoration: "none",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "0.8rem",
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div
            aria-hidden="true"
            style={{
              position: "relative",
              minHeight: 560,
              borderRadius: 28,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "linear-gradient(180deg, rgba(9,13,31,0.95), rgba(6,9,20,0.98))",
              boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 40%, rgba(0,245,255,0.12), transparent 35%)" }} />
            <div
              style={{
                position: "absolute",
                inset: "12% 12% auto auto",
                width: 220,
                height: 220,
                borderRadius: "50%",
                border: "1px solid rgba(0,245,255,0.2)",
                animation: "heroSpin 28s linear infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "20% 20% auto auto",
                width: 120,
                height: 120,
                borderRadius: "50%",
                border: "1px solid rgba(123,97,255,0.25)",
                animation: "heroSpinReverse 22s linear infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "grid",
                placeItems: "center",
              }}
            >
              <div
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.6), rgba(0,245,255,0.45) 35%, rgba(0,245,255,0.08) 62%, rgba(0,0,0,0) 72%)",
                  boxShadow: "0 0 60px rgba(0,245,255,0.3)",
                  animation: "heroPulse 6s ease-in-out infinite",
                }}
              />
            </div>

            {orbitChips.map((chip) => (
              <div
                key={chip.label}
                style={{
                  position: "absolute",
                  top: chip.top,
                  left: chip.left,
                  right: chip.right,
                  bottom: chip.bottom,
                  width: "fit-content",
                  padding: "0.45rem 0.8rem",
                  borderRadius: 999,
                  border: `1px solid ${chip.color}33`,
                  color: chip.color,
                  background: "rgba(255,255,255,0.03)",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "0.78rem",
                  boxShadow: `0 0 24px ${chip.color}22`,
                  animation: `heroFloat 7s ease-in-out infinite`,
                  animationDelay: chip.delay,
                }}
              >
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#64748B",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
        }}
      >
        SCROLL
      </div>

      <style>{`
        @keyframes heroBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes heroPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes heroSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes heroSpinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @media (max-width: 900px) {
          section#hero > div > div {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}