import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pilotmain.com"),
  title: "Pilot Main — AI tools that make work faster",
  description:
    "Pilot Main product suite: ProposalPilot, InvoicePilot, DocuPilot, QuotePilot, ContractPilot, OutreachPilot, and Nexora. Simple, powerful AI software for freelancers, contractors, and growing teams.",
  openGraph: {
    title: "Pilot Main",
    description: "AI tools that make work faster.",
    url: "https://pilotmain.com",
    siteName: "Pilot Main",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
