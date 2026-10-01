"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/SectionHeader";

const stats = [
  { value: 1, suffix: "+", label: "Year QA Experience", color: "#00F5FF" },
  { value: 500, suffix: "+", label: "Test Cases Executed", color: "#7B61FF" },
  { value: 500, suffix: "+", label: "Defects Identified", color: "#FF5D73" },
  { value: 1, suffix: "", label: "ISTQB Certification", color: "#00E676" },
];

const identityDetails = [
  { icon: "IN", text: "India" },
  { icon: "QA", text: "Manual, API & Functional Testing" },
  { icon: "PW", text: "Playwright & Postman" },
  { icon: "DB", text: "SQL & Elasticsearch validation" },
] as const;

function StatCounter({ value, suffix, label, color }: typeof stats[0]) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let current = 0;
        const step = Math.ceil(value / 40);
        const id = setInterval(() => {
          current += step;
          if (current >= value) {
            setCount(value);
            clearInterval(id);
          } else {
            setCount(current);
          }
        }, 50);
      }
    });

    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "2.5rem",
          fontWeight: 700,
          color,
          textShadow: `0 0 20px ${color}80`,
          lineHeight: 1,
        }}
      >
        {count}
        {suffix}
      </div>
      <div style={{ color: "#A0AEC0", fontSize: "0.8rem", marginTop: "0.4rem" }}>{label}</div>
    </div>
  );
}

export default function AboutSection() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -20;
    setRotate({ x, y });
  };

  return (
    <section id="about" className="section-spacer" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader
          label="PROFESSIONAL SUMMARY"
          title="Software Test Engineer"
          subtitle="ISTQB Certified QA Engineer with 1+ year of experience testing web applications and AI-powered platforms."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setRotate({ x: 0, y: 0 })}
            style={{
              perspective: 1000,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 300,
                borderRadius: 20,
                overflow: "hidden",
                background: "linear-gradient(135deg, rgba(0,245,255,0.08), rgba(123,97,255,0.08))",
                border: "1px solid rgba(0,245,255,0.2)",
                boxShadow: "0 0 60px rgba(0,245,255,0.1)",
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: "transform 0.1s ease",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(123,97,255,0.15))",
                  padding: "2rem",
                  textAlign: "center",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #00F5FF, #7B61FF)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    margin: "0 auto 1rem",
                    boxShadow: "0 0 30px rgba(0,245,255,0.4)",
                  }}
                >
                  AG
                </div>
                <h3
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  Aayush Gupta
                </h3>
                <p style={{ color: "#00F5FF", fontSize: "0.8rem", fontFamily: "JetBrains Mono, monospace" }}>
                  ISTQB Certified QA Engineer
                </p>
              </div>

              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {identityDetails.map((item) => (
                  <div key={item.text} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                    <span style={{ color: "#00F5FF", fontFamily: "JetBrains Mono, monospace", fontSize: "0.75rem", minWidth: 24 }}>
                      {item.icon}
                    </span>
                    <span style={{ color: "#A0AEC0", fontSize: "0.85rem" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p style={{ color: "#E2E8F0", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              I am an ISTQB Certified QA Engineer with 1+ year of experience in manual, API, functional, regression,
              smoke, and end-to-end testing. I have tested AI-powered web applications, executed 500+ test cases, and
              reported 500+ defects to improve application stability and release quality.
            </p>
            <p style={{ color: "#A0AEC0", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              I work with Postman, Jira, SQL, Elasticsearch, Playwright, and Katalon, and I am familiar with STLC,
              SDLC, and Agile Scrum. My testing includes AI-generated content quality, API response validation,
              backend data integrity, defect management, and end-to-end workflows.
            </p>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              {["Manual Testing", "API Testing", "Playwright", "Postman", "Defect Management"].map((platform) => (
                <span
                  key={platform}
                  style={{
                    padding: "0.35rem 1rem",
                    borderRadius: 6,
                    background: "rgba(0,245,255,0.08)",
                    border: "1px solid rgba(0,245,255,0.2)",
                    color: "#00F5FF",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "0.78rem",
                  }}
                >
                  {platform}
                </span>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1.5rem",
                padding: "1.5rem",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 12,
              }}
            >
              {stats.map((stat) => (
                <StatCounter key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section#about > div > div:last-child { gap: 2rem !important; }
          section#about > div > div:last-child > div:first-child {
            order: -1;
          }
          section#about > div > div:last-child > div:first-child > div {
            width: 260px !important;
          }
          section#about > div > div:last-child > div:last-child > div:last-child {
            padding: 1.25rem !important;
          }
          section#about > div > div:last-child > div:last-child > div:last-child > div > div:first-child {
            font-size: 2rem !important;
          }
        }
        @media (max-width: 480px) {
          section#about > div > div:last-child > div:first-child > div {
            width: 220px !important;
          }
          section#about > div > div:last-child > div:last-child > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
