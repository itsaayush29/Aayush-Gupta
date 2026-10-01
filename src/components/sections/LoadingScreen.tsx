"use client";
import { useEffect, useRef, useState } from "react";

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
  const completionTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + 2;
        if (next >= 100) {
          clearInterval(interval);
          completionTimeout.current = setTimeout(onComplete, 600);
          return 100;
        }
        setStepIndex(Math.floor((next / 100) * (steps.length - 1)));
        return next;
      });
    }, 30);
    return () => {
      clearInterval(interval);
      if (completionTimeout.current) clearTimeout(completionTimeout.current);
    };
  }, [onComplete]);

  return (
    <div className="loading-screen" style={{
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
          top: `${10 + ((i * 17 + 3) % 80)}%`,
          left: `${5 + ((i * 31 + 7) % 90)}%`,
          opacity: 0.3 + ((i * 13 + 5) % 40) / 100,
          animation: `float ${2 + ((i * 7 + 11) % 30) / 10}s ease-in-out infinite`,
          animationDelay: `${((i * 23 + 19) % 20) / 10}s`,
        }} />
      ))}

      <style>{`
        @media (max-width: 640px) {
          .loading-screen > div:nth-child(2) { font-size: 1.5rem !important; }
          .loading-screen > div:nth-child(4) { width: 260px !important; }
        }
        @media (max-width: 480px) {
          .loading-screen > div:first-child { width: 72px !important; height: 72px !important; font-size: 1.8rem !important; }
          .loading-screen > div:nth-child(2) { font-size: 1.25rem !important; }
          .loading-screen > div:nth-child(4) { width: 220px !important; }
        }
      `}</style>
    </div>
  );
}
