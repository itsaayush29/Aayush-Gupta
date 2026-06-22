"use client";

export default function Header() {
  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          background: "#071b2d",
          borderBottom: "1px solid rgba(34,211,238,0.1)",
          fontFamily: "'Hanken Grotesk', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0.75rem 1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#67e8f9"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 7h16v10H4V7zm4 3l2 2 4-4" />
            </svg>
            <span
              style={{
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "1.25rem",
                letterSpacing: "-0.025em",
              }}
            >
              Aayush Gupta
            </span>
          </div>

          <a
            href="https://drive.google.com/file/d/1Vpd69BWa8Smr2wG0jVRa-NJ4IwE1Pgpt/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "0.5rem 1.5rem",
              borderRadius: 999,
              border: "1px solid rgba(34,211,238,0.3)",
              color: "#cffafe",
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.025em",
              background: "#0a2238",
              textDecoration: "none",
              transition: "all 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#22d3ee";
              e.currentTarget.style.boxShadow = "0 0 15px rgba(34,211,238,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            View Resume
          </a>
        </div>
      </header>

      <style>{`
        @media (max-width: 640px) {
          header > div { padding: 0.6rem 1rem !important; }
          header span { font-size: 1.1rem !important; }
          header a { padding: 0.4rem 1.25rem !important; font-size: 0.8rem !important; }
        }
        @media (max-width: 400px) {
          header > div { padding: 0.5rem 0.75rem !important; }
          header span { font-size: 1rem !important; }
          header a { padding: 0.35rem 1rem !important; font-size: 0.75rem !important; }
          header svg { width: 16px !important; height: 16px !important; }
        }
      `}</style>
    </>
  );
}
