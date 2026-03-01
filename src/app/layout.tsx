import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medini S Rao - AI/ML Engineer & Computer Vision Specialist",
  description:
    "Portfolio showcasing AI/ML projects, research, and technical accomplishments in autonomous systems and healthcare.",
  keywords: "AI, ML, Computer Vision, UAV, Healthcare, Deep Learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark text-gray-100">{children}</body>
    </html>
  );
}
