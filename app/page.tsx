import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pilot Main — AI tools that make work faster",
  description:
    "Simple, powerful AI software for freelancers, contractors, and growing teams. ProposalPilot, InvoicePilot, DocuPilot, QuotePilot, Nexora.",
};

const products = [
  {
    name: "ProposalPilot",
    tagline: "Win more clients in 30 seconds",
    description: "Paste a client brief, generate a polished proposal, send it. No blank docs, no overthinking.",
    url: "https://www.useproposalpilot.com",
    color: "#6366f1",
    emoji: "📄",
  },
  {
    name: "InvoicePilot",
    tagline: "Get paid faster",
    description: "Describe the project, generate a professional invoice, send or export PDF. Done in under a minute.",
    url: "https://useinvoicepilot.com",
    color: "#10b981",
    emoji: "💸",
  },
  {
    name: "DocuPilot",
    tagline: "Understand any document instantly",
    description: "Upload a contract, insurance letter, or lease. Get plain-English risks, deadlines, and next steps.",
    url: "https://docupilotnow.com",
    color: "#f59e0b",
    emoji: "📋",
  },
  {
    name: "QuotePilot",
    tagline: "Quote jobs, get approved, invoice",
    description: "AI quoting, job board, and Stripe invoicing built for solo trades contractors. No enterprise bloat.",
    url: "https://usequotepilot.com",
    color: "#f97316",
    emoji: "🔧",
  },
  {
    name: "Nexora",
    tagline: "AI-native team collaboration",
    description: "Chat, meetings, AI summaries, and real-time presence in one workspace. Built for how teams work now.",
    url: "https://web-zeta-three-69.vercel.app",
    color: "#8b5cf6",
    emoji: "⚡",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      {/* Hero */}
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-16 pt-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#222] bg-[#111] px-4 py-1.5 text-sm text-[#888]">
          <span className="h-2 w-2 rounded-full bg-[#6366f1]" />
          5 products · 1 mission
        </div>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Pilot Main
        </h1>
        <p className="mt-6 max-w-xl text-lg text-[#888]">
          We build AI tools that make work faster — for freelancers, contractors, and growing teams.
        </p>
        <a
          href="#products"
          className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#6366f1] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4f46e5]"
        >
          Browse products ↓
        </a>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-[#222] bg-[#111] p-6 transition hover:-translate-y-0.5 hover:border-[#333] hover:shadow-lg hover:shadow-black/40"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl">{p.emoji}</span>
                <span
                  className="text-base font-semibold"
                  style={{ color: p.color }}
                >
                  {p.name}
                </span>
              </div>
              <p className="mb-2 text-sm font-medium text-[#f5f5f5]">
                {p.tagline}
              </p>
              <p className="flex-1 text-sm leading-relaxed text-[#666]">
                {p.description}
              </p>
              <div
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium transition group-hover:gap-2"
                style={{ color: p.color }}
              >
                Try free <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#111] py-8 text-center text-sm text-[#444]">
        © {new Date().getFullYear()} Pilot Main ·{" "}
        <a href="https://pilotmain.com" className="hover:text-[#888] transition">
          pilotmain.com
        </a>
      </footer>
    </main>
  );
}
