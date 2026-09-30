import { useState } from 'react'
import { topics, type Topic, type Q } from './data'

function Question({ pos, n, q, a, sources }: Q & { pos: number }) {
  const [open, setOpen] = useState(true)
  return (
    <div className="rounded-xl border-2 border-line bg-surface shadow-brut-sm">
      <button onClick={() => setOpen(!open)} className="flex w-full items-start gap-3 p-3 text-left cursor-pointer">
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
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <header className="mb-8 flex flex-wrap items-center gap-3">
        <h1 className="rounded-xl border-2 border-line bg-lilac px-4 py-2 text-2xl font-bold text-night shadow-brut">Currency Study</h1>
        <span className="rounded-full border-2 border-line bg-mint px-3 py-1 font-mono text-sm text-night">{all.length} questions</span>
      </header>

      {all.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-line p-10 text-center">Nothing yet. Ask the first question.</div>
      ) : (
        <main className="space-y-3 border-l-4 border-line pl-4 sm:pl-6">
          {all.map((q, i) => (
            <Question key={q.n} pos={i + 1} {...q} />
          ))}
        </main>
      )}
    </div>
  )
}
