"use client";

interface Props {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, subtitle }: Props) {
  return (
    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
      <div style={{
        display: "inline-block",
        fontFamily: "JetBrains Mono, monospace",
        fontSize: "0.75rem",
        letterSpacing: "0.25em",
        color: "#00F5FF",
        background: "rgba(0,245,255,0.08)",
        border: "1px solid rgba(0,245,255,0.2)",
        borderRadius: 4,
        padding: "0.3rem 1rem",
        marginBottom: "1.25rem",
      }}>
        {label}
      </div>
      <h2 style={{
        fontFamily: "Space Grotesk, sans-serif",
        fontSize: "clamp(2rem, 5vw, 3rem)",
        fontWeight: 700,
        marginBottom: "1rem",
        background: "linear-gradient(135deg, #FFFFFF, #A0AEC0)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          color: "#A0AEC0",
          fontSize: "1.05rem",
          maxWidth: 560,
          margin: "0 auto",
          lineHeight: 1.7,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}