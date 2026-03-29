/** Product URLs & status — aligned with Pilot Main recovery runbook */

const products = [
  {
    name: "ProposalPilot",
    initials: "PP",
    href: "https://www.useproposalpilot.com",
    displayUrl: "useproposalpilot.com",
    tagline: "Win more clients in 30 seconds",
    status: "live" as const,
  },
  {
    name: "InvoicePilot",
    initials: "IP",
    href: "https://invoicepilot-seven.vercel.app",
    displayUrl: "invoicepilot-seven.vercel.app",
    tagline: "Get paid faster",
    status: "live" as const,
    note: "useinvoicepilot.com — DNS pending",
  },
  {
    name: "DocuPilot",
    initials: "DP",
    href: "https://usedocupilot.com",
    displayUrl: "usedocupilot.com",
    tagline: "Understand any document instantly",
    status: "building" as const,
  },
  {
    name: "QuotePilot",
    initials: "QP",
    href: "https://usequotepilot.com",
    displayUrl: "usequotepilot.com",
    tagline: "Quote jobs, get approved, invoice",
    status: "building" as const,
  },
  {
    name: "ContractPilot",
    initials: "CP",
    href: "https://contractpilot-tau.vercel.app",
    displayUrl: "contractpilot-tau.vercel.app",
    tagline: "Contracts after you win the deal",
    status: "live" as const,
  },
  {
    name: "OutreachPilot",
    initials: "OP",
    href: "https://outreachpilot-six.vercel.app",
    displayUrl: "outreachpilot-six.vercel.app",
    tagline: "Cold outreach to paid invoices",
    status: "live" as const,
  },
  {
    name: "Nexora",
    initials: "NX",
    href: "https://web-zeta-three-69.vercel.app",
    displayUrl: "web-zeta-three-69.vercel.app",
    tagline: "AI-native team collaboration",
    status: "live" as const,
  },
] as const;

function StatusPill({ status }: { status: "live" | "building" }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-emerald-400/95">
        <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
        Live
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-amber-400/95">
      <span className="h-1 w-1 rounded-full bg-amber-400" />
      Building
    </span>
  );
}

function ProductTile({
  name,
  initials,
  href,
  displayUrl,
  tagline,
  status,
  note,
}: {
  name: string;
  initials: string;
  href: string;
  displayUrl: string;
  tagline: string;
  status: "live" | "building";
  note?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/35 p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] outline-none ring-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:border-indigo-500/35 hover:bg-zinc-900/55 hover:shadow-[0_20px_50px_-20px_rgba(99,102,241,0.25)] focus-visible:ring-2 focus-visible:ring-indigo-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
    >
      <div className="mb-6 flex items-start justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/5 text-sm font-semibold tracking-tight text-indigo-200 ring-1 ring-indigo-400/20 transition group-hover:from-indigo-500/30 group-hover:ring-indigo-400/35">
            {initials}
          </div>
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-zinc-100 transition group-hover:text-white">
              {name}
            </h2>
            <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-600">
              A Pilot Main product
            </p>
          </div>
        </div>
        <StatusPill status={status} />
      </div>

      <p className="flex-1 text-[15px] leading-relaxed text-zinc-400 transition group-hover:text-zinc-300">
        {tagline}
      </p>

      <p className="mt-5 font-mono text-[12px] text-zinc-600 transition group-hover:text-zinc-500">
        {displayUrl}
      </p>

      {note ? (
        <p className="mt-2 text-xs leading-snug text-zinc-500">{note}</p>
      ) : null}

      <div className="mt-6 flex items-center justify-between border-t border-zinc-800/80 pt-5">
        <span className="text-sm font-medium text-indigo-400 transition group-hover:text-indigo-300">
          Open app
        </span>
        <span
          aria-hidden
          className="text-lg text-indigo-400/80 transition duration-300 group-hover:translate-x-0.5 group-hover:text-indigo-300"
        >
          →
        </span>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_circle_at_50%_-10%,rgba(99,102,241,0.12),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(800px_circle_at_100%_30%,rgba(99,102,241,0.05),transparent_50%)]"
      />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 md:pt-28">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Brand hub
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Pilot Main
          </h1>
          <p className="mt-5 text-lg text-zinc-400 sm:text-xl">
            We build AI tools that make work faster.
          </p>
          <p className="mt-3 text-base italic text-zinc-500">
            Simple, powerful software for freelancers, contractors, and growing
            teams.
          </p>
          <a
            href="#products"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 hover:shadow-indigo-500/25"
          >
            Browse products
            <span aria-hidden className="opacity-90">
              ↓
            </span>
          </a>
        </header>

        <section id="products" className="mt-24 sm:mt-28 md:mt-32">
          <div className="mb-10 text-center sm:mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Live stack
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-pretty text-sm text-zinc-500">
              URLs and status match your internal recovery doc — tap a tile to
              open the app.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <ProductTile key={p.name} {...p} />
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-auto border-t border-zinc-800/80 pt-10 text-center">
          <p className="text-sm text-zinc-500">
            © 2026 Pilot Main ·{" "}
            <span className="text-zinc-400">pilotmain.com</span>
          </p>
          <p className="mt-2 text-xs text-zinc-600">
            Performance, security, and privacy — engineered in from day one.
          </p>
          <p className="mt-4">
            <a
              href="/handbook"
              className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              Suite handbook →
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
