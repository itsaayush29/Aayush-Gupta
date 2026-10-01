import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aayush Gupta | Software Test Engineer",
  description:
    "ISTQB Certified Software Test Engineer with experience in manual, API, functional, regression, and Playwright testing.",
  keywords: [
    "Software Test Engineer",
    "ISTQB Certified Tester",
    "QA Engineer",
    "Playwright",
    "API Testing",
    "Manual Testing",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
