import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pilot Main — AI tools that make work faster",
  description:
    "Simple, powerful AI software for freelancers, contractors, and growing teams.",
  openGraph: {
    title: "Pilot Main",
    description: "AI tools that make work faster",
    url: "https://pilotmain.com",
    siteName: "Pilot Main",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilot Main",
    description: "AI tools that make work faster",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
