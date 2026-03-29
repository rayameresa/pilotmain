"use client";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const components: Components = {
  h1: ({ children }) => (
    <h1 className="mb-8 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-12 scroll-mt-24 border-b border-zinc-800 pb-2 text-xl font-semibold text-indigo-300 first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-6 text-lg font-semibold text-zinc-200">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-relaxed text-zinc-300">{children}</p>
  ),
  a: ({ href, children }) => {
    const external = href?.startsWith("http");
    return (
      <a
        href={href}
        className="text-indigo-400 underline decoration-indigo-500/40 underline-offset-2 transition hover:text-indigo-300"
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  },
  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-2 pl-5 text-zinc-400">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-2 pl-5 text-zinc-400">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="leading-relaxed marker:text-zinc-600">{children}</li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-zinc-100">{children}</strong>
  ),
  table: ({ children }) => (
    <div className="mb-6 overflow-x-auto rounded-xl border border-zinc-800">
      <table className="w-full text-left text-sm text-zinc-400">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-zinc-900/80 text-zinc-200">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 font-semibold">{children}</th>
  ),
  td: ({ children }) => (
    <td className="border-t border-zinc-800 px-4 py-3">{children}</td>
  ),
  tr: ({ children }) => (
    <tr className="transition hover:bg-zinc-900/40">{children}</tr>
  ),
  hr: () => <hr className="my-10 border-zinc-800" />,
  details: ({ children }) => (
    <details className="group mb-3 rounded-2xl border border-zinc-800/90 bg-zinc-900/25 open:border-indigo-500/30 open:bg-zinc-900/45 [&_p]:px-5 [&_p]:last:pb-5 [&_ul]:mx-5 [&_ul]:mb-4 [&_ol]:mx-5 [&_ol]:mb-4">
      {children}
    </details>
  ),
  summary: ({ children }) => (
    <summary className="flex cursor-pointer list-none items-center gap-2 px-5 py-4 font-medium text-zinc-100 marker:hidden hover:text-white [&::-webkit-details-marker]:hidden">
      <span
        className="inline-block text-indigo-400 transition-transform duration-200 group-open:rotate-90"
        aria-hidden
      >
        ▸
      </span>
      {children}
    </summary>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-4 border-l-2 border-indigo-500/40 pl-4 italic text-zinc-500">
      {children}
    </blockquote>
  ),
  code: ({ className, children }) => {
    const block = className?.includes("language-");
    if (block) {
      return (
        <code className="mb-4 block overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-300">
          {children}
        </code>
      );
    }
    return (
      <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-sm text-indigo-200">
        {children}
      </code>
    );
  },
};

export function HandbookBody({ markdown }: { markdown: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={components}
    >
      {markdown}
    </ReactMarkdown>
  );
}
