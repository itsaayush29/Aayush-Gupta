"use client";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/sections/LoadingScreen";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TechnicalSkillsSection from "@/components/sections/TechnicalSkillsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/sections/HeroSection";

const RESUME_URL = "https://drive.google.com/file/d/1lK9keIoOHPQSfJXS_mnJ8uVNUUsgOiMv/view";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      if (target?.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target?.tagName ?? "")) return;

      switch (e.key.toLowerCase()) {
        case "g":
          window.open("https://github.com/itsaayush29", "_blank", "noopener,noreferrer");
          break;
        case "l":
          window.open("https://www.linkedin.com/in/aayush-gupta-9b25a421a/", "_blank", "noopener,noreferrer");
          break;
        case "r":
          window.open(RESUME_URL, "_blank", "noopener,noreferrer");
          break;
        case "escape":
          document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
          break;
      }
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
      <Header />
      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechnicalSkillsSection />
        <CertificationsSection />
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
