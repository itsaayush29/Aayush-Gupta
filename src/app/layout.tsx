import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aayush Gupta | QA Engineer Portfolio",
  description: "Software Test Engineer — Playwright, Automation, Manual QA",
  keywords: ["QA Engineer", "Software Tester", "Playwright", "Automation"],
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