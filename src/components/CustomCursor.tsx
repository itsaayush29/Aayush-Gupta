"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove);

    let frame: number;
    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} style={{
        position: "fixed", top: 0, left: 0,
        width: 8, height: 8, borderRadius: "50%",
        background: "#00F5FF",
        pointerEvents: "none", zIndex: 99999,
        boxShadow: "0 0 10px #00F5FF, 0 0 20px rgba(0,245,255,0.5)",
        transition: "width 0.1s, height 0.1s",
      }} />
      <div ref={ringRef} style={{
        position: "fixed", top: 0, left: 0,
        width: 32, height: 32, borderRadius: "50%",
        border: "1px solid rgba(0,245,255,0.5)",
        pointerEvents: "none", zIndex: 99998,
      }} />
    </>
  );
}