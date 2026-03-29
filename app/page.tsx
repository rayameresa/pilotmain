const products = [
  {
    name: "ProposalPilot",
    href: "https://useproposalpilot.com",
    tagline: "Win more clients in 30 seconds",
  },
  {
    name: "InvoicePilot",
    href: "https://useinvoicepilot.com",
    tagline: "Get paid faster",
  },
  {
    name: "DocuPilot",
    href: "https://docupilotnow.com",
    tagline: "Understand any document instantly",
  },
  {
    name: "QuotePilot",
    href: "https://usequotepilot.com",
    tagline: "Quote jobs, get approved, invoice",
  },
  {
    name: "Nexora",
    href: "https://web-zeta-three-69.vercel.app",
    tagline: "AI-native team collaboration",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#f5f5f5]">
      <header className="flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-16 md:pt-32 md:pb-24 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance">
          Pilot Main
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#f5f5f5]/95 text-balance">
          We build AI tools that make work faster.
        </p>
        <p className="mt-4 text-base sm:text-lg text-[#888] italic max-w-xl text-balance">
          Simple, powerful software for freelancers, contractors, and growing
          teams.
        </p>
        <a
          href="#products"
          className="mt-10 inline-flex items-center gap-2 rounded-lg border border-[#222] bg-[#111] px-5 py-2.5 text-sm font-medium text-[#6366f1] transition hover:border-[#6366f1]/40 hover:bg-[#161616]"
        >
          Browse products
          <span aria-hidden>↓</span>
        </a>
      </header>

      <section
        id="products"
        className="px-6 pb-20 md:pb-28 max-w-5xl mx-auto w-full"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-[#222] bg-[#111] p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-[#333] hover:shadow-lg hover:shadow-black/40"
            >
              <h2 className="text-lg font-semibold text-[#6366f1]">
                {product.name}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#888]">
                {product.tagline}
              </p>
              <span className="mt-5 text-sm font-medium text-[#f5f5f5] group-hover:text-[#6366f1] transition-colors">
                Try free →
              </span>
            </a>
          ))}
        </div>
      </section>

      <footer className="mt-auto border-t border-[#222] py-8 text-center text-sm text-[#888]">
        © 2026 Pilot Main · pilotmain.com
      </footer>
    </div>
  );
}
