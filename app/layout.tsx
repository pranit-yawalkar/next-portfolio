import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pranit Yawalkar | Technology Consultant & Product Engineering Partner",
  description:
    "I help startups, healthcare organizations, and enterprises build secure, scalable digital products — from AI-powered platforms and ERP systems to cloud-native applications. Technology Consultant with 5+ years of experience.",
  keywords: "technology consultant, product engineering, React, Next.js, healthcare technology, fintech, AI integration, enterprise software, Pranit Yawalkar",
  openGraph: {
    title: "Pranit Yawalkar | Technology Consultant",
    description: "Helping businesses transform ideas into scalable digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
