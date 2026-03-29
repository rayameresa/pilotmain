import Link from "next/link";
import { readFile } from "fs/promises";
import path from "path";
import { HandbookBody } from "./handbook-body";

export default async function HandbookPage() {
  const filePath = path.join(process.cwd(), "docs", "PILOT_MAIN_SUITE_GUIDE.md");
  const markdown = await readFile(filePath, "utf-8");

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(1000px_circle_at_50%_-15%,rgba(99,102,241,0.1),transparent_55%)]"
      />
      <header className="relative border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl flex-col gap-3 px-5 py-8 sm:px-8">
          <Link
            href="/"
            className="w-fit text-sm font-medium text-indigo-400 hover:text-indigo-300"
          >
            ← Back to Pilot Main
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Suite handbook
          </p>
          <p className="text-sm text-zinc-400">
            Static content with expandable sections — same source as{" "}
            <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-300">
              docs/PILOT_MAIN_SUITE_GUIDE.md
            </code>{" "}
            in the repo.
          </p>
        </div>
      </header>
      <main className="relative mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <HandbookBody markdown={markdown} />
      </main>
    </div>
  );
}
