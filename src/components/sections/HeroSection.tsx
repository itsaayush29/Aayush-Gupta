"use client";

import { useEffect, useRef, useState } from "react";

type SkillTag = { label: string; top?: string; right?: string; left?: string; bottom?: string; delay: string; orbitRadius: number; startAngle: number };

const SKILL_TAGS: SkillTag[] = [
  { label: "Playwright", top: "8%", right: "12%", delay: "0s", orbitRadius: 110, startAngle: 30 },
  { label: "API Testing", right: "0%", top: "42%", delay: "4s", orbitRadius: 120, startAngle: 110 },
  { label: "Postman", left: "0%", bottom: "32%", delay: "8s", orbitRadius: 115, startAngle: 210 },
  { label: "Jira", right: "8%", bottom: "8%", delay: "2s", orbitRadius: 105, startAngle: 300 },
];

const ROLES: string[] = ["SOFTWARE TEST ENGINEER", "MANUAL & API TESTING", "PLAYWRIGHT AUTOMATION"];

export default function HeroSection() {
  const sphereRef = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[roleIdx];
    let timer: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (typed.length < role.length) {
        timer = setTimeout(() => setTyped(role.slice(0, typed.length + 1)), 80);
      } else {
        timer = setTimeout(() => setDeleting(true), 1800);
      }
    } else if (typed.length > 0) {
      timer = setTimeout(() => setTyped(role.slice(0, typed.length - 1)), 40);
    } else {
      timer = setTimeout(() => {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }, 250);
    }
    return () => clearTimeout(timer);
  }, [typed, deleting, roleIdx]);

  useEffect(() => {
    const sphere = sphereRef.current;
    if (!sphere) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      sphere.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 1.5rem",
        background: "#051424",
        overflow: "hidden",
      }}
    >
      <div className="hero-container">
        {/* ---- Visual Card ---- */}
        <div className="hero-visual-wrapper">
          <div
            className="hero-visual-card"
            style={{
              width: "100%",
              maxWidth: 500,
              aspectRatio: "1 / 1",
              borderRadius: 32,
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle at center, rgba(0,218,243,0.08), transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div
              className="hero-sphere-stage"
              style={{
                position: "relative",
                width: 256,
                height: 256,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Rotating sphere */}
              <div
                ref={sphereRef}
                className="hero-sphere-orbit hero-sphere-parallax"
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                <div
                  className="hero-sphere"
                  style={{
                    width: 128,
                    height: 128,
                    borderRadius: "50%",
                    background: "radial-gradient(circle at 30% 30%, #00daf3 0%, #00b8d4 35%, #051424 100%)",
                    boxShadow: "inset -15px -15px 30px rgba(0,0,0,0.5), 0 0 40px rgba(0,218,243,0.45)",
                  }}
                />
              </div>

              <div
                className="hero-ring-outer"
                style={{
                  position: "absolute",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.06)",
                  width: 260,
                  height: 260,
                }}
              />
              <div
                className="hero-ring-inner"
                style={{
                  position: "absolute",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.06)",
                  width: 180,
                  height: 180,
                }}
              />

              {SKILL_TAGS.map((tag) => (
                <div
                  key={tag.label}
                  className="hero-skill-orbit"
                  style={{
                    position: "absolute",
                    inset: 0,
                    animation: `heroOrbit 20s linear infinite`,
                    animationDelay: tag.delay,
                  }}
                >
                  <div
                    className="hero-skill-tag"
                    style={{
                      position: "absolute",
                      top: tag.top,
                      right: tag.right,
                      left: tag.left,
                      bottom: tag.bottom,
                      padding: "6px 12px",
                      borderRadius: 999,
                      fontSize: 10,
                      fontWeight: 600,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      color: "#d4e4fa",
                      whiteSpace: "nowrap",
                      animation: `heroCounterOrbit 20s linear infinite`,
                      animationDelay: tag.delay,
                    }}
                  >
                    {tag.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                fontSize: 10,
                opacity: 0.4,
                fontFamily: "JetBrains Mono, monospace",
                color: "#d4e4fa",
              }}
            >
              SYSTEM_DEPLOY_READY
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 16,
                right: 16,
                fontSize: 10,
                opacity: 0.4,
                fontFamily: "JetBrains Mono, monospace",
                color: "#d4e4fa",
              }}
            >
              0x00F3_STABLE
            </div>
          </div>
        </div>

        {/* ---- Content ---- */}
        <div className="hero-content">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 0 0 rgba(74,222,128,0.7)",
                animation: "heroPulseDot 1.5s infinite",
              }}
            />
            <span
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                color: "#00daf3",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              ISTQB CERTIFIED QA ENGINEER
            </span>
          </div>

          <h1
            className="hero-heading"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 1,
              margin: "1.5rem 0 0",
              background: "linear-gradient(135deg, #FFFFFF 0%, #A0AEC0 50%, #00daf3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AAYUSH<br />GUPTA
          </h1>

          <p
            style={{
              marginTop: "1.5rem",
              color: "#9ca3af",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: 560,
            }}
          >
            ISTQB-certified QA Engineer with 1+ year of experience in manual,
            API, functional, regression, and end-to-end testing for web
            applications.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: "1.5rem",
            }}
          >
            <span
              style={{
                color: "#00daf3",
                letterSpacing: "0.2em",
                fontSize: "0.85rem",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              {typed}
            </span>
            <span
              style={{
                width: 2,
                height: 24,
                background: "#00daf3",
                animation: "heroBlink 0.8s step-end infinite",
              }}
            />
          </div>

          <div className="hero-buttons">
            <button
              type="button"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="hero-btn-primary"
              style={{
                flex: 1,
                padding: "1rem",
                borderRadius: 12,
                border: "none",
                background: "linear-gradient(90deg, #00daf3, #cdbdff)",
                color: "#051424",
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 0 25px rgba(0,218,243,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              ENTER PORTFOLIO
            </button>

            <a
              href="https://drive.google.com/file/d/1lK9keIoOHPQSfJXS_mnJ8uVNUUsgOiMv/view"
              target="_blank"
              rel="noreferrer"
              className="hero-btn-secondary"
              style={{
                flex: 1,
                padding: "1rem",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "transparent",
                color: "#ffffff",
                textDecoration: "none",
                textAlign: "center",
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                display: "block",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "";
              }}
            >
              VIEW RESUME
            </a>
          </div>

          <div className="hero-socials">
            {[
              { label: "GitHub", href: "https://github.com/itsaayush29" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/aayush-gupta-9b25a421a/" },
              { label: "Email", href: "mailto:aayushgupta.qatester@gmail.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontFamily: "JetBrains Mono, monospace",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#00daf3"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#9ca3af"; }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes heroPulseDot {
          0% { box-shadow: 0 0 0 0 rgba(74,222,128,0.7); }
          70% { box-shadow: 0 0 0 10px rgba(74,222,128,0); }
          100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); }
        }
        @keyframes heroSpherePulse {
          0%, 100% { transform: scale(1) rotate(0deg); box-shadow: inset -15px -15px 30px rgba(0,0,0,0.5), 0 0 40px rgba(0,218,243,0.45); }
          50% { transform: scale(1.05) rotate(180deg); box-shadow: inset -15px -15px 30px rgba(0,0,0,0.5), 0 0 60px rgba(0,218,243,0.7); }
        }
        @keyframes heroOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes heroCounterOrbit {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .hero-sphere { animation: heroSpherePulse 12s ease-in-out infinite; }
        .hero-sphere-parallax { will-change: transform; }
        .hero-skill-tag { pointer-events: auto; }

        .hero-container {
          position: relative;
          z-index: 1;
          width: min(1120px, 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.5rem;
        }

        .hero-visual-wrapper,
        .hero-content {
          width: 100%;
          max-width: 600px;
        }

        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 2rem;
        }

        .hero-socials {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-top: 2.5rem;
          font-size: 0.85rem;
        }

        @media (min-width: 1024px) {
          .hero-container {
            flex-direction: row !important;
            align-items: center !important;
            gap: 4rem !important;
          }
          .hero-visual-wrapper {
            flex: 0 0 auto !important;
            max-width: 480px !important;
          }
          .hero-content {
            flex: 1 !important;
            max-width: 560px !important;
          }
          .hero-buttons {
            flex-direction: row !important;
          }
          .hero-socials {
            justify-content: center !important;
          }
          section#hero { padding: 4rem 3rem !important; }
        }

        @media (max-width: 640px) {
          section#hero { padding: 3rem 1rem !important; min-height: auto !important; }
          .hero-container { gap: 2rem !important; }
          div.hero-visual-card { max-width: 100% !important; border-radius: 24px !important; }
          .hero-sphere-stage { width: 200px !important; height: 200px !important; }
          .hero-sphere-stage > .hero-sphere-orbit > .hero-sphere { width: 100px !important; height: 100px !important; }
          .hero-ring-outer { width: 200px !important; height: 200px !important; }
          .hero-ring-inner { width: 140px !important; height: 140px !important; }
          .hero-skill-tag { font-size: 8px !important; padding: 4px 10px !important; }
          h1.hero-heading { font-size: clamp(2rem, 10vw, 3rem) !important; }
        }
        @media (max-width: 400px) {
          section#hero { padding: 2rem 0.75rem !important; }
          .hero-container { gap: 1.5rem !important; }
          .hero-sphere-stage { width: 160px !important; height: 160px !important; }
          .hero-sphere-stage > .hero-sphere-orbit > .hero-sphere { width: 80px !important; height: 80px !important; }
          .hero-ring-outer { width: 160px !important; height: 160px !important; }
          .hero-ring-inner { width: 110px !important; height: 110px !important; }
          .hero-skill-tag { font-size: 7px !important; padding: 3px 8px !important; }
          section#hero p { font-size: 0.9rem !important; margin-top: 1rem !important; }
          .hero-buttons { margin-top: 1.5rem !important; gap: 12px !important; }
          .hero-buttons > button,
          .hero-buttons > a { padding: 0.75rem !important; font-size: 0.85rem !important; }
          .hero-socials { margin-top: 1.5rem !important; gap: 16px !important; font-size: 0.75rem !important; }
        }
        @media (hover: none) and (pointer: coarse) {
          .hero-sphere { animation: heroSpherePulse 12s ease-in-out infinite !important; }
        }
      `}</style>
    </section>
  );
}
