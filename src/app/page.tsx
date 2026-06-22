"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/sections/LoadingScreen";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TechnicalSkillsSection from "@/components/sections/TechnicalSkillsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Header from "@/components/Header";

// Dynamic import for Three.js sections (no SSR)
const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), { ssr: false });

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
      <Header />
      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechnicalSkillsSection />
        {/* <CertificationsSection /> */}
        <EducationSection />
        <ContactSection />
      </main>
      <style>{`
        @media (max-width: 640px) {
          main.main-content { padding-top: 60px !important; }
        }
      `}</style>
    </>
  );
}
