"use client";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/SectionHeader";

const stats = [
  { value: 2, suffix: "+", label: "Years Experience", color: "#00F5FF" },
  { value: 50, suffix: "+", label: "Projects Tested", color: "#7B61FF" },
  { value: 1000, suffix: "+", label: "Bugs Logged", color: "#FF5D73" },
  { value: 95, suffix: "%", label: "Pass Rate Achieved", color: "#00E676" },
];

function StatCounter({ value, suffix, label, color }: typeof stats[0]) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let n = 0;
        const step = Math.ceil(value / 40);
        const id = setInterval(() => {
          n += step;
          if (n >= value) { setCount(value); clearInterval(id); }
          else setCount(n);
        }, 50);
      }
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{
        fontFamily: "JetBrains Mono, monospace",
        fontSize: "2.5rem", fontWeight: 700,
        color, textShadow: `0 0 20px ${color}80`,
        lineHeight: 1,
      }}>
        {count}{suffix}
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
          label="WHO AM I"
          title="About Me"
          subtitle="A brief introduction to my QA journey"
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "3rem", alignItems: "center",
        }}>
          {/* 3D Identity Card */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setRotate({ x: 0, y: 0 })}
            style={{
              perspective: 1000,
              display: "flex", justifyContent: "center",
            }}
          >
            <div style={{
              width: 300, borderRadius: 20, overflow: "hidden",
              background: "linear-gradient(135deg, rgba(0,245,255,0.08), rgba(123,97,255,0.08))",
              border: "1px solid rgba(0,245,255,0.2)",
              boxShadow: "0 0 60px rgba(0,245,255,0.1)",
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition: "transform 0.1s ease",
              transformStyle: "preserve-3d",
            }}>
              {/* Card top */}
              <div style={{
                background: "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(123,97,255,0.15))",
                padding: "2rem", textAlign: "center",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{
                  width: 80, height: 80,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #00F5FF, #7B61FF)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2.5rem", margin: "0 auto 1rem",
                  boxShadow: "0 0 30px rgba(0,245,255,0.4)",
                }}>
                  👨‍💻
                </div>
                <h3 style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700, fontSize: "1.3rem", marginBottom: "0.25rem",
                }}>
                  Aayush Gupta
                </h3>
                <p style={{ color: "#00F5FF", fontSize: "0.8rem", fontFamily: "JetBrains Mono, monospace" }}>
                  QA Engineer
                </p>
              </div>
              {/* Card details */}
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { icon: "📍", text: "India" },
                  { icon: "🔬", text: "Manual & Automation QA" },
                  { icon: "⚡", text: "Playwright · Selenium · API" },
                  { icon: "🎯", text: "Obsessed with Quality" },
                ].map(item => (
                  <div key={item.text} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                    <span>{item.icon}</span>
                    <span style={{ color: "#A0AEC0", fontSize: "0.85rem" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p style={{ color: "#E2E8F0", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              I'm a passionate QA Engineer with 2+ years of experience ensuring software quality
              across web, mobile, and desktop platforms. I specialize in building robust
              automation frameworks and finding critical bugs that others miss.
            </p>
            <p style={{ color: "#A0AEC0", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              My approach combines systematic test planning with creative exploration — I think
              like a user, test like an engineer, and report like a developer. Every bug I catch
              is a feature preserved, and every automation I build is efficiency multiplied.
            </p>

            {/* Platforms */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              {["Web", "Mobile", "Desktop", "API", "Performance"].map(p => (
                <span key={p} style={{
                  padding: "0.35rem 1rem", borderRadius: 6,
                  background: "rgba(0,245,255,0.08)",
                  border: "1px solid rgba(0,245,255,0.2)",
                  color: "#00F5FF",
                  fontFamily: "JetBrains Mono, monospace", fontSize: "0.78rem",
                }}>
                  {p}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem",
              padding: "1.5rem",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 12,
            }}>
              {stats.map(s => <StatCounter key={s.label} {...s} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}