"use client";

const categories = [
  {
    title: "Testing Tool",
    color: "#00F5FF",
    skills: ["Postman", "Swagger UI", "JIRA", "Bugzilla", "Playwright", "Git"],
  },
  {
    title: "Testing Type",
    color: "#7B61FF",
    skills: [
      "Manual Testing",
      "API Testing",
      "Mobile Testing (Android/iOS)",
      "Regression Testing",
      "Exploratory Testing",
      "Functional Testing",
      "Integration Testing",
      "Data Integrity Testing",
    ],
  },
  {
    title: "Technology & Platform",
    color: "#00FFB3",
    skills: ["SQL", "JSON", "Elasticsearch", "REST APIs"],
  },
  {
    title: "Methodology",
    color: "#FFC857",
    skills: ["Agile", "Scrum", "STLC"],
  },
  {
    title: "Other Skill",
    color: "#FF5D73",
    skills: ["Defect Reporting", "Test Documentation", "Log Analysis", "Debugging", "Client Support"],
  },
] as const;

const iconMap: Record<string, React.ReactNode> = {
  Postman: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  "Swagger UI": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  JIRA: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Bugzilla: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  ),
  Playwright: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Git: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M6 21V9a9 9 0 0 0 9 9" />
    </svg>
  ),
};

const defaultIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 17 2 2 4-4" />
    <path d="m3 7 2 2 4-4" />
    <path d="M13 6h8" />
    <path d="M13 12h8" />
    <path d="M13 18h8" />
  </svg>
);

export default function TechnicalSkillsSection() {
  return (
    <section id="skills" style={{ padding: "6rem 2rem", position: "relative", background: "rgba(255,255,255,0.02)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(2rem, 5vw, 2.8rem)",
              fontWeight: 700,
              background: "linear-gradient(135deg, #FFFFFF, #A0AEC0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Skills & Expertise
          </h2>
        </div>

        {categories.map((category) => (
          <div key={category.title} style={{ marginBottom: "4rem" }}>
            <h3
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "1.8rem",
                fontWeight: 600,
                color: category.color,
                borderBottom: `2px solid ${category.color}50`,
                paddingBottom: 12,
                marginBottom: 24,
              }}
            >
              {category.title}
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                gap: 24,
              }}
            >
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 16,
                    padding: "24px 16px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.borderColor = `${category.color}40`;
                    e.currentTarget.style.boxShadow = `0 8px 32px ${category.color}18`;
                    e.currentTarget.style.background = `${category.color}08`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.boxShadow = "";
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: category.color,
                    }}
                  >
                    {iconMap[skill] ?? defaultIcon}
                  </div>
                  <h4
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "#F8FAFC",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {skill}
                  </h4>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      padding: "3px 12px",
                      borderRadius: 999,
                      fontFamily: "JetBrains Mono, monospace",
                      color: category.color,
                      border: `1px solid ${category.color}33`,
                      background: `${category.color}12`,
                    }}
                  >
                    {category.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
