# Currency Study

Static site (React, Tailwind v4, Vite, pnpm) hosted on GitHub Pages. It is a focused Q&A study log on currency: gold, metals, paper receipts, fiat.

## Workflow
The user asks a question in chat. You answer crisply, then record it in `src/data.ts`. Nothing else holds content.

## Ordering (most important rule)
The site shows one flat list, no sections or index. `src/data.ts` keeps topics only so you can place questions correctly; render order is the topic order, flattened.
- Order by **topic foundation**, not by time asked. Prerequisites come first.
- Example: a gold question asked after dollar questions goes in a Gold topic *above* Dollar.
- Same at finer levels: nest subtopics (Metals → Gold → Gold vs Silver). Create or move topics as understanding grows.
- `n` is the order asked. Keep it on every question, never renumber it.

## Answers
- Crisp question, crisp answer. Short, plain, no filler.
- Every answer has at least one `sources` entry (`label`, `url`), shown as a chip on the card.

## Sources
- Use only the domains in `SOURCES.md`. Never random or content-farm sites.
- A claim needs a Tier 1 or Tier 2 source. Tier 3 (forums, catalogues) only corroborates.
- If only Tier 3 supports a claim, say so to the user.
- **Data over prose.** Prefer raw statistics (series, tables, datasets) to articles, which can be worded to mislead. Cite the dataset and quote the number with its date and unit. Use articles only for context or definitions.
- Cross-check key numbers against a second independent publisher. If they disagree, show both.
- **Sources can grow.** When a question needs a domain not listed, propose it to the user with its tier and why. Add it to `SOURCES.md` only after they approve.

## Commands
- `pnpm dev` runs locally. `pnpm build` makes the production build in `dist`.
- Pushing to `main` deploys via `.github/workflows/deploy.yml`.

## Design
Pastel neubrutalism, Sentry style: thick ink borders, hard shadows, pastel fills, minimal. Reuse the existing tokens in `src/index.css`.
