import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aayush Gupta | Front-End Developer & QA Engineer",
  description: "Front-End Developer and QA Engineer portfolio covering React, Next.js, Manual Testing, and Software Testing.",
  keywords: ["Front-End Developer", "QA Engineer", "Software Tester", "React", "Next.js", "Manual Testing"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
