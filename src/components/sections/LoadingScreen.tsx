"use client";
import { useEffect, useState } from "react";

const steps = [
  "INITIALIZING QA SYSTEM...",
  "LOADING TEST ENVIRONMENT...",
  "VALIDATING PORTFOLIO...",
  "COMPILING AUTOMATION SCRIPTS...",
  "READY.",
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + 2;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return 100;
        }
        setStepIndex(Math.floor((next / 100) * (steps.length - 1)));
        return next;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 99999,
      background: "#050816",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: "2rem",
    }}>
      {/* 3D Logo */}
      <div style={{
        width: 100, height: 100, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,245,255,0.15), transparent)",
        border: "2px solid rgba(0,245,255,0.4)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "2.5rem",
        animation: "spin-slow 3s linear infinite",
        boxShadow: "0 0 60px rgba(0,245,255,0.2), inset 0 0 40px rgba(0,245,255,0.05)",
      }}>
        🔬
      </div>

      {/* Brand */}
      <div style={{
        fontFamily: "Space Grotesk, sans-serif",
        fontSize: "2rem", fontWeight: 700,
        background: "linear-gradient(135deg, #00F5FF, #7B61FF)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
      }}>
        AAYUSH GUPTA
      </div>

      {/* Step text */}
      <div style={{
        fontFamily: "JetBrains Mono, monospace",
        fontSize: "0.8rem", color: "#00F5FF",
        letterSpacing: "0.1em", minHeight: "1.2rem",
      }}>
        {steps[stepIndex]}
      </div>

      {/* Progress bar */}
      <div style={{ width: 320, position: "relative" }}>
        <div style={{
          height: 4, background: "rgba(255,255,255,0.06)",
          borderRadius: 2, overflow: "hidden",
        }}>
          <div style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #00F5FF, #7B61FF)",
            borderRadius: 2,
            transition: "width 0.1s linear",
            boxShadow: "0 0 12px rgba(0,245,255,0.6)",
          }} />
        </div>
        <div style={{
          textAlign: "right",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "0.7rem", color: "#4A5568",
          marginTop: "0.5rem",
        }}>
          {progress}%
        </div>
      </div>

      {/* Particles hint */}
      {[...Array(12)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: 2, height: 2,
          borderRadius: "50%",
          background: i % 2 === 0 ? "#00F5FF" : "#7B61FF",
          top: `${10 + Math.random() * 80}%`,
          left: `${5 + Math.random() * 90}%`,
          opacity: 0.3 + Math.random() * 0.4,
          animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`,
        }} />
      ))}
    </div>
  );
}