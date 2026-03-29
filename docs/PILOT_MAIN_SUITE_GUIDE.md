<!-- Source of truth for https://pilotmain.com/handbook (built at deploy time). -->

# Pilot Main — Suite guide

**Brand hub:** [pilotmain.com](https://pilotmain.com)  
**Owner:** Pilot Main · *A Pilot Main product*

This document describes each product in the suite: what it does, how to use it well, benefits, and where to deploy. Expand any section below.

---

## Quick links

| Product | GitHub | Live (typical) |
|--------|--------|----------------|
| [ProposalPilot](#proposalpilot) | [rayameresa/proposalpilot](https://github.com/rayameresa/proposalpilot) | [useproposalpilot.com](https://www.useproposalpilot.com) |
| [InvoicePilot](#invoicepilot) | [rayameresa/invoicepilot](https://github.com/rayameresa/invoicepilot) | [Vercel deployment](https://invoicepilot-seven.vercel.app) |
| [DocuPilot](#docupilot) | [rayameresa/docupilot](https://github.com/rayameresa/docupilot) | [usedocupilot.com](https://usedocupilot.com) |
| [QuotePilot](#quotepilot) | [rayameresa/quotepilot](https://github.com/rayameresa/quotepilot) | [usequotepilot.com](https://usequotepilot.com) |
| [ContractPilot](#contractpilot) | [rayameresa/contractpilot](https://github.com/rayameresa/contractpilot) | [contractpilot-tau.vercel.app](https://contractpilot-tau.vercel.app) |
| [OutreachPilot](#outreachpilot) | [rayameresa/outreachpilot](https://github.com/rayameresa/outreachpilot) | [outreachpilot-six.vercel.app](https://outreachpilot-six.vercel.app) |
| [Nexora](#nexora) | [rayameresa/nexora-monorepo-starter](https://github.com/rayameresa/nexora-monorepo-starter) | [Frontend (Vercel)](https://web-zeta-three-69.vercel.app) · API/realtime (Railway) |

---

## ProposalPilot

**Stack:** Next.js (App Router), Supabase, Anthropic, Stripe, jsPDF.  
**Git:** `https://github.com/rayameresa/proposalpilot.git`

<details>
<summary><strong>What it does</strong></summary>

AI-assisted **proposals** for freelancers: paste a client brief, choose industry, rate, timeline, and tone, then generate and edit a proposal. Includes dashboard, editor, **PDF export**, free-tier quotas, and **Stripe** subscriptions (Pro / Agency). Shares Supabase identity with other Pilot apps when configured.

</details>

<details>
<summary><strong>How to use it effectively</strong></summary>

- Paste **real briefs** (scope, constraints, budget signals) — garbage in = generic out.  
- Tune **tone** and **timeline** to match how you actually work; reuse winning proposals as patterns.  
- **Mark deals won** when appropriate so downstream tools (e.g. ContractPilot) can import context.  
- Keep **ANTHROPIC_API_KEY** and Supabase env vars in Vercel for production; use `vercel env pull` locally.  
- Run `supabase/schema.sql` (and any follow-up migrations from the repo) before going live.

</details>

<details>
<summary><strong>Benefits</strong></summary>

- **Speed:** First draft in minutes instead of staring at a blank page.  
- **Consistency:** Same structure across clients without copy-paste drift.  
- **Monetization:** Built-in tiers and billing portal.  
- **Ecosystem:** Natural front of funnel for ContractPilot and InvoicePilot.

</details>

<details>
<summary><strong>Deploy: Vercel vs Railway</strong></summary>

- **Vercel (recommended):** Primary hosting for the Next.js app. Connect the GitHub repo, set env vars, deploy. Use **Stripe webhooks** pointed at your production `/api/...` webhook route.  
- **Railway:** Optional for **Postgres** if you ever move off Supabase (not the default architecture). Today, **Supabase** is the database; no need to run ProposalPilot API on Railway.

</details>

---

## InvoicePilot

**Stack:** Next.js, Supabase, Anthropic, Stripe, Resend, React PDF.  
**Git:** `https://github.com/rayameresa/invoicepilot.git`

<details>
<summary><strong>What it does</strong></summary>

**Invoicing** optimized for speed: describe the work, generate line items, edit, then **PDF**, public link, or **email** (on paid tiers). Guest trials plus authenticated saves, dashboards, and Stripe plans (e.g. Pro / Agency).

</details>

<details>
<summary><strong>How to use it effectively</strong></summary>

- Start from **structured project descriptions** (deliverables, dates, amounts) for cleaner AI output.  
- Maintain a small **client list** so repeat billing is one click.  
- Use **public invoice links** for clients who don’t need a PDF attachment.  
- Align **NEXT_PUBLIC_APP_URL** with your production domain for correct links in emails and redirects.  
- Configure **Resend** + verified domain before relying on outbound email in production.

</details>

<details>
<summary><strong>Benefits</strong></summary>

- **Cashflow:** Less friction from “done” to “sent.”  
- **Professional output:** Branded PDFs and clear line items.  
- **Scale:** Plans for solo vs agency-style usage.  
- **Loop:** Pairs with proposals and contracts in the Pilot workflow.

</details>

<details>
<summary><strong>Deploy: Vercel vs Railway</strong></summary>

- **Vercel:** Default home for the Next.js app; set all `NEXT_PUBLIC_*` and server secrets in the project dashboard.  
- **Railway:** Not required for the standard stack (Supabase hosts data). Use Railway only if you add **custom backend services** later.

</details>

---

## DocuPilot

**Stack:** Next.js, Supabase, Anthropic, Stripe, document parsing (e.g. PDF / DOCX).  
**Git:** `https://github.com/rayameresa/docupilot.git`

<details>
<summary><strong>What it does</strong></summary>

Helps users **understand documents quickly**: upload contracts, policies, or long PDFs, then get **summaries, risks, and next steps** via AI. Oriented toward **analyze** and **dashboard** flows with auth and billing patterns consistent with other Pilots.

</details>

<details>
<summary><strong>How to use it effectively</strong></summary>

- Upload **complete** files (not screenshots) for best extraction.  
- For contracts, run **analyze** before signing; use output as a checklist, not legal advice.  
- Keep **one Supabase project** aligned with your other Pilots if you want unified accounts later.  
- Set **model and rate limits** appropriately in env for cost control at scale.

</details>

<details>
<summary><strong>Benefits</strong></summary>

- **Clarity:** Dense language turned into actionable bullets.  
- **Time saved:** No manual highlighter-and-notes workflow for every doc.  
- **Risk awareness:** Surfaces deadlines and obligations you might skim past.

</details>

<details>
<summary><strong>Deploy: Vercel vs Railway</strong></summary>

- **Vercel:** Host the Next.js frontend and server routes; large uploads may need **body size** and **duration** limits configured in `vercel.json` if you process big files server-side.  
- **Railway:** Consider if you later offload **heavy async parsing** to a worker service; MVP is usually fine on Vercel + Supabase storage.

</details>

---

## QuotePilot

**Stack:** Next.js, Supabase, Anthropic, Stripe, jobs/clients model.  
**Git:** `https://github.com/rayameresa/quotepilot.git`

<details>
<summary><strong>What it does</strong></summary>

**Quoting** for jobs: create jobs, build **quotes** for clients, move toward **approval**, and connect flows toward **invoicing** — aimed at contractors who quote often and want one pipeline instead of spreadsheets.

</details>

<details>
<summary><strong>How to use it effectively</strong></summary>

- Maintain **clients** and **jobs** so quotes stay traceable.  
- Use consistent **line-item templates** for recurring job types.  
- After approval, follow through to **invoice** using InvoicePilot where integrated.  
- Set Stripe **price IDs** as `NEXT_PUBLIC_*` where the browser needs them (see Stripe + Next.js best practices).

</details>

<details>
<summary><strong>Benefits</strong></summary>

- **Single thread** from opportunity → quote → payment intent.  
- **Less error:** Fewer manual copy steps between tools.  
- **Professionalism:** Client-facing quote pages instead of ad-hoc emails.

</details>

<details>
<summary><strong>Deploy: Vercel vs Railway</strong></summary>

- **Vercel:** Primary deployment for the app.  
- **Railway:** Optional for background **webhooks** or workers if you outgrow serverless timeouts; not required for baseline.

</details>

---

## ContractPilot

**Stack:** Next.js, Supabase (shared identity), Stripe ($29/mo product), Resend, Zod, React PDF.  
**Git:** `https://github.com/rayameresa/contractpilot.git`

<details>
<summary><strong>What it does</strong></summary>

**Contracts after the win:** import context from **won proposals** (ProposalPilot), use **templates** or blank docs, edit with variables, generate **PDF**, email clients a **secure view/sign link**, and capture **acceptance metadata**. Includes honest **e-sign disclaimer** (not full DocuSign-class compliance out of the box).

</details>

<details>
<summary><strong>How to use it effectively</strong></summary>

- Use the **same Supabase project** as ProposalPilot so `proposal_id` and profiles line up.  
- Run **`supabase/migrations/...contract_pilot.sql`** before first deploy.  
- After **signed**, use the **InvoicePilot deep link** hints from the repo to continue the loop.  
- Set **`NEXT_PUBLIC_APP_URL`** to the deployed origin for emails and public links.  
- Point **Stripe webhooks** at `/api/stripe/webhook` and set `STRIPE_WEBHOOK_SECRET`.

</details>

<details>
<summary><strong>Benefits</strong></summary>

- **Continuity:** Proposal → contract without retyping context.  
- **Audit trail:** Events around view and sign.  
- **One subscription** per product line, aligned with the rest of Pilot Main.

</details>

<details>
<summary><strong>Deploy: Vercel vs Railway</strong></summary>

- **Vercel:** Recommended for the full Next.js app + API routes.  
- **Railway:** Not required unless you split services later.

</details>

---

## OutreachPilot

**Stack:** Next.js, Supabase, Stripe, Resend, cron dispatcher, sequences.  
**Git:** `https://github.com/rayameresa/outreachpilot.git`

<details>
<summary><strong>What it does</strong></summary>

Completes the **acquisition loop**: **Outreach → Proposal → Contract → Invoice**. Manage **leads**, **sequences**, **campaigns**, CSV import, and scheduled sends via **cron** (`/api/cron/dispatch`). Integrates with ProposalPilot via **Create proposal from lead**. Includes **unsubscribe** and baseline **CAN-SPAM-style** footer behavior.

</details>

<details>
<summary><strong>How to use it effectively</strong></summary>

- Set **`CRON_SECRET`** and protect the dispatcher; on Vercel, use `vercel.json` cron + auth header.  
- Configure **`NEXT_PUBLIC_PROPOSALPILOT_URL`** so handoffs open the right proposal UI.  
- Start with **manual / CSV leads** (no scraping behind logins in v1).  
- Monitor **bounces** and wire Resend webhooks when you enable them (see repo stubs).  
- Respect **daily/hourly caps** to protect domain reputation.

</details>

<details>
<summary><strong>Benefits</strong></summary>

- **Full funnel** in one ecosystem.  
- **Compliance-aware baseline:** unsubscribe + footers.  
- **Idempotent sending** design reduces duplicate-email incidents.

</details>

<details>
<summary><strong>Deploy: Vercel vs Railway</strong></summary>

- **Vercel:** Host the app and use **Vercel Cron** (or external scheduler hitting the dispatcher with `Authorization: Bearer …`).  
- **Railway:** Optional for a **dedicated worker** or cron if you prefer not to use Vercel’s scheduler; same codebase, different trigger.

</details>

---

## Nexora

**Stack:** Monorepo — API gateway, identity, collaboration, **realtime WebSocket** gateway, Dockerized infra (Postgres, Redis, Kafka, MinIO, OpenSearch). **Frontend** is commonly deployed separately (Next.js on Vercel).  
**Git:** `https://github.com/rayameresa/nexora-monorepo-starter.git`

<details>
<summary><strong>What it does</strong></summary>

**AI-native team collaboration** foundation: multi-service backend for **auth/tenants**, **chat/meetings/messages**, and **realtime** fan-out. The repo is a **production-oriented starter**, not a finished enterprise platform — you extend WebRTC, SAML, governance, and ops as you grow.

</details>

<details>
<summary><strong>How to use it effectively</strong></summary>

- Start from **`docker compose`** in `infra/docker/local` for a faithful local stack.  
- Deploy **identity + API gateway + collaboration + realtime** to **Railway** (or similar) with managed Postgres/Redis as appropriate.  
- Deploy the **web app** to **Vercel**; point it at your **API gateway** and **WebSocket** URLs via env.  
- Follow repo **`docs/`** for architecture and API contracts.  
- Remember Nexora’s auth API quirks (e.g. **register** body fields, **workspace** query params) documented in your internal runbooks.

</details>

<details>
<summary><strong>Benefits</strong></summary>

- **Separation of concerns:** Gateway, identity, collab, realtime can scale independently.  
- **Realtime-first:** WebSocket gateway for presence and messaging patterns.  
- **Room to grow:** Kafka/MinIO/OpenSearch hooks for serious collaboration workloads.

</details>

<details>
<summary><strong>Deploy: Vercel vs Railway</strong></summary>

- **Vercel:** **Frontend (Next.js)** — connect repo subdirectory `apps/web` (or your layout) per your deployment docs; production deploys are often **manual** (`vercel --prod` from `apps/web`).  
- **Railway:** **Backend services** — API gateway, identity, collaboration, **realtime WebSocket** service, plus managed **DATABASE_URL** and secrets (**JWT**, **LiveKit** keys, etc.). This is the natural home for long-lived connections and multi-container setups.

</details>

---

## Pilot Main (brand hub)

**Stack:** Next.js (static marketing / handbook).  
**Git:** `https://github.com/rayameresa/pilotmain.git`

<details>
<summary><strong>What it does</strong></summary>

Public **landing** for Pilot Main: product tiles, live URLs, and links into this guide (e.g. `/handbook` on [pilotmain.com](https://pilotmain.com)).

</details>

<details>
<summary><strong>Deploy</strong></summary>

- **Vercel:** Primary. Connect repo, set domain **pilotmain.com**, enable automatic deploys from `main`.

</details>

---

*Generated for Pilot Main internal use. Update URLs and status as domains and environments change.*
