"use client";
import { forwardRef, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  glowColor?: string;
}

const GlowCard = forwardRef<HTMLDivElement, Props>(
  ({ glowColor = "#00F5FF", style, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        {...rest}
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(20px)",
          border: `1px solid rgba(255,255,255,0.08)`,
          borderRadius: 16,
          padding: "1.5rem",
          transition: "all 0.3s ease",
          ...style,
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.transform = "translateY(-6px) scale(1.02)";
          el.style.borderColor = `${glowColor}40`;
          el.style.boxShadow = `0 0 40px ${glowColor}20, 0 20px 40px rgba(0,0,0,0.3)`;
          rest.onMouseEnter?.(e);
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.transform = "";
          el.style.borderColor = "rgba(255,255,255,0.08)";
          el.style.boxShadow = "";
          rest.onMouseLeave?.(e);
        }}
      >
        {children}
      </div>
    );
  }
);

GlowCard.displayName = "GlowCard";
export default GlowCard;