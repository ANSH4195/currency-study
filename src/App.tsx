import { useState } from 'react'
import { topics, type Topic, type Q } from './data'

function Question({ pos, n, q, a, sources, open, toggle }: Q & { pos: number; open: boolean; toggle: () => void }) {
  return (
    <div className="rounded-xl border-2 border-line bg-surface shadow-brut-sm">
      <button onClick={toggle} className="flex w-full items-start gap-3 p-3 text-left cursor-pointer">
        <span className="mt-0.5 shrink-0 rounded-md border-2 border-line bg-paper px-1.5 font-mono text-xs" title="Position in order">
          {pos}
        </span>
        <span className="flex-1 font-bold leading-snug">
          {q}
          {n !== pos && <span className="ml-2 font-mono text-xs font-normal opacity-60">asked #{n}</span>}
        </span>
        <span className="font-mono text-lg leading-none">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="space-y-2 border-t-2 border-dashed border-line/60 px-3 py-3">
          <p className="leading-relaxed whitespace-pre-line">{a}</p>
          <div className="flex flex-wrap gap-2">
            {sources.map((s) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border-2 border-line bg-sky px-2 py-0.5 text-xs font-medium text-night shadow-brut-sm hover:bg-butter hover:text-night"
              >
                Source: {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const flatten = (l: Topic[]): Q[] => l.flatMap((t) => [...t.questions, ...flatten(t.children ?? [])])

export default function App() {
  const all = flatten(topics)
  const [closed, setClosed] = useState<Set<number>>(new Set())
  const allClosed = closed.size === all.length
  const toggle = (n: number) =>
    setClosed((c) => {
      const next = new Set(c)
      if (!next.delete(n)) next.add(n)
      return next
    })
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <header className="mb-8 flex flex-wrap items-center gap-3">
        <h1 className="rounded-xl border-2 border-line bg-lilac px-4 py-2 text-2xl font-bold text-night shadow-brut">Currency Study</h1>
        <span className="rounded-full border-2 border-line bg-mint px-3 py-1 font-mono text-sm text-night">{all.length} questions</span>
      </header>

      {all.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-line p-10 text-center">Nothing yet. Ask the first question.</div>
      ) : (
        <main className="space-y-3">
          {all.map((q, i) => (
            <Question key={q.n} pos={i + 1} {...q} open={!closed.has(q.n)} toggle={() => toggle(q.n)} />
          ))}
        </main>
      )}

      {!allClosed && all.length > 0 && (
        <button
          onClick={() => setClosed(new Set(all.map((q) => q.n)))}
          aria-label="Collapse all"
          title="Collapse all"
          className="fixed right-4 bottom-4 cursor-pointer rounded-xl border-2 border-line bg-butter p-3 font-bold text-night shadow-brut active:translate-x-0.5 active:translate-y-0.5 active:shadow-none sm:right-6 sm:bottom-6"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m7 4 5 5 5-5" />
            <path d="m7 20 5-5 5 5" />
          </svg>
        </button>
      )}
    </div>
  )
}
