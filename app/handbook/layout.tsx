import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suite handbook — Pilot Main",
  description:
    "What each Pilot Main product does, how to use it, benefits, and Vercel vs Railway deployment notes.",
};

export default function HandbookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
