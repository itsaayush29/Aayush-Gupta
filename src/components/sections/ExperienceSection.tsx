"use client";

import GlowCard from "@/components/GlowCard";
import SectionHeader from "@/components/SectionHeader";

const experiences = [
  // {
  //   role: "Front-End Developer",
  //   duration: "2025 - Present",
  //   technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
  //   achievements: [
  //     "Built responsive, production-style interfaces with reusable React components.",
  //     "Improved UI consistency through structured layouts, reusable styling, and clean interaction states.",
  //     "Focused on accessibility, performance, and reliable user experiences across screen sizes.",
  //   ],
  //   responsibilities: [
  //     "Translate requirements into polished front-end screens.",
  //     "Create reusable components and maintain responsive layouts.",
  //     "Test visual behavior across desktop and mobile viewports.",
  //   ],
  //   color: "#00F5FF",
  // },
{
  role: "Software Test Engineer",
  company: "Globussoft",
  duration: "June 2025 - April 2026",
  technologies: [
    "Manual Testing",
    "API Testing",
    "Functional Testing",
    "Postman",
    "Jira",
    "SQL",
    "Elasticsearch",
    "Agile Scrum",
    "Regression Testing",
    "Smoke Testing",
    "Exploratory Testing"
  ],
  achievements: [
    "Executed 500+ test cases across AI-powered products and reported 500+ defects, improving application stability and release quality.",
    "Performed comparative testing of AI-generated content against ChatGPT and Gemini to validate output quality, usability, and feature performance.",
    "Validated backend data integrity using SQL, Elasticsearch queries, and API response verification through Postman."
  ],
  responsibilities: [
    "Performed end-to-end Manual, API, Functional, Regression, Smoke, and Exploratory Testing for AdGPT and PowerAdSpy.",
    "Designed, executed, and maintained test cases, test scenarios, and test documentation based on business requirements.",
    "Validated ad search, filtering, targeting, competitor analysis, and reporting modules across multiple workflows.",
    "Conducted API testing, verified JSON responses, and ensured end-to-end workflow accuracy.",
    "Logged, tracked, and verified defects using Jira while collaborating with developers for timely resolution.",
    "Participated in Agile Scrum ceremonies and supported production releases with quality assurance activities."
  ],
  color: "#7B61FF",
}
  // {
  //   role: "Academic Projects",
  //   duration: "2023 - 2025",
  //   technologies: ["Python", "TensorFlow", "Pandas", "Data Analysis"],
  //   achievements: [
  //     "Delivered machine learning and analytics projects using structured data workflows.",
  //     "Reached 93% model accuracy in a dog breed identification project using CNN concepts.",
  //     "Built analysis outputs with charts, insights, and measurable project conclusions.",
  //   ],
  //   responsibilities: [
  //     "Collect, clean, and validate datasets before analysis.",
  //     "Design experiments, compare results, and document findings.",
  //     "Present technical results in a recruiter-friendly project format.",
  //   ],
  //   color: "#00FFB3",
  // },
  // {
  //   role: "Freelance & Personal Projects",
  //   duration: "Ongoing",
  //   technologies: ["React.js", "Local Storage", "REST APIs", "Modern UI"],
  //   achievements: [
  //     "Created web projects that combine clean UI design with practical user workflows.",
  //     "Used testing habits during development to catch layout, state, and interaction issues early.",
  //     "Built portfolio-ready applications that demonstrate both development and QA thinking.",
  //   ],
  //   responsibilities: [
  //     "Plan features, build UI flows, and test release behavior.",
  //     "Maintain clean code organization and reusable project patterns.",
  //     "Document tech stacks, features, and improvement opportunities.",
  //   ],
  //   color: "#FFC857",
  // },
] as const;

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-spacer" style={{ padding: "6rem 2rem", position: "relative" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionHeader
          label="EXPERIENCE"
          title="Development And QA Journey"
          subtitle="A practical timeline across front-end development, software testing, academic builds, and portfolio projects."
        />

        <div style={{ position: "relative", display: "grid", gap: "1.5rem" }}>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "1rem",
              top: 0,
              bottom: 0,
              width: 1,
              background: "linear-gradient(180deg, rgba(0,245,255,0.05), rgba(0,245,255,0.35), rgba(123,97,255,0.08))",
            }}
          />

          {experiences.map((item, index) => (
            <div key={item.role} style={{ position: "relative", paddingLeft: "3rem" }}>
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "0.62rem",
                  top: "1.55rem",
                  width: 13,
                  height: 13,
                  borderRadius: "50%",
                  background: item.color,
                  boxShadow: `0 0 24px ${item.color}99`,
                }}
              />

              <GlowCard
                className="experience-card-grid"
                glowColor={item.color}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
                  gap: "1.5rem",
                  animation: "fadeUp 0.6s ease forwards",
                  animationDelay: `${index * 0.06}s`,
                }}
              >
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.35rem 0.75rem",
                      borderRadius: 999,
                      background: `${item.color}14`,
                      border: `1px solid ${item.color}33`,
                      color: item.color,
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "0.72rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {item.duration}
                  </div>
                  <h3
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "1.35rem",
                      lineHeight: 1.15,
                      margin: "0 0 0.85rem",
                      color: "#F8FAFC",
                    }}
                  >
                    {item.role}
                  </h3>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: "0.35rem 0.7rem",
                          borderRadius: 6,
                          border: "1px solid rgba(255,255,255,0.08)",
                          background: "rgba(255,255,255,0.03)",
                          color: "#A0AEC0",
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: "0.72rem",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: "grid", gap: "1rem" }}>
                  <div>
                    <p style={{ color: "#00F5FF", fontFamily: "JetBrains Mono, monospace", fontSize: "0.74rem", margin: "0 0 0.65rem" }}>
                      KEY ACHIEVEMENTS
                    </p>
                    <ul style={{ display: "grid", gap: "0.55rem", margin: 0, paddingLeft: "1.1rem", color: "#D7DEE8", lineHeight: 1.6 }}>
                      {item.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p style={{ color: "#7B61FF", fontFamily: "JetBrains Mono, monospace", fontSize: "0.74rem", margin: "0 0 0.65rem" }}>
                      RESPONSIBILITIES
                    </p>
                    <ul style={{ display: "grid", gap: "0.55rem", margin: 0, paddingLeft: "1.1rem", color: "#A0AEC0", lineHeight: 1.6 }}>
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .experience-card-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
