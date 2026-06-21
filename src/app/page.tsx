"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/sections/LoadingScreen";
import AboutSection from "@/components/sections/AboutSection";

// Dynamic import for Three.js sections (no SSR)
const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), { ssr: false });
const SkillsUniverse = dynamic(() => import("@/components/sections/SkillsUniverse"), { ssr: false });

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Keyboard shortcuts
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "g") window.open("https://github.com/", "_blank");
      if (e.key === "l") window.open("https://linkedin.com/", "_blank");
      if (e.key === "r") window.open("/resume.pdf", "_blank");
      if (e.key === "Escape") document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!loaded) {
    return <LoadingScreen onComplete={() => setLoaded(true)} />;
  }

  return (
    <>
      <CustomCursor />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsUniverse />
      </main>
    </>
  );
}