import React from 'react'
import { Section, Card } from './UI'

const quotes = [
  { q: 'Clear, elegant, and fast. Our sign-ups jumped within a week.', n: 'Maya K.', r: 'VP Product' },
  { q: 'The audit translated into wins our engineers could ship in days.', n: 'Jon R.', r: 'Head of Eng' },
  { q: 'Rare mix of design taste and production rigor.', n: 'Iris P.', r: 'Founder' },
]

export default function Testimonials() {
  return (
    <Section>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What clients say</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {quotes.map((c) => (
          <Card key={c.n} className="p-5">
            <p className="text-sm text-gray-700 dark:text-gray-200">“{c.q}”</p>
            <div className="mt-3 text-sm text-gray-500">{c.n} — {c.r}</div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
