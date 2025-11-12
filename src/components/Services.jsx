import React from 'react'
import { Section, Card } from './UI'
import { Wrench, Rocket, Palette, Gauge } from 'lucide-react'

const items = [
  { icon: Palette, title: 'Design Systems', desc: 'Token-driven UI, components, and documentation for scale.' },
  { icon: Gauge, title: 'UI/UX Audit', desc: 'Heuristics, flows, and usability — actionable fixes.' },
  { icon: Wrench, title: 'Frontend Engineering', desc: 'Reliable, accessible, and performant product UI.' },
  { icon: Rocket, title: 'Performance Optimization', desc: 'Vitals, bundle diet, image pipeline, caching.' },
]

export default function Services() {
  return (
    <Section id="services">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Services & Process</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {items.map((it) => (
          <Card key={it.title} className="p-5">
            <div className="flex items-center gap-3">
              <it.icon className="h-5 w-5 text-[#4FD1C5]" />
              <h3 className="font-medium">{it.title}</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{it.desc}</p>
          </Card>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[{t:'Discover',d:'Brief, scope, and success metrics.'},{t:'Prototype',d:'Wireframes, tokens, and UI interactions.'},{t:'Ship',d:'Code, QA, and performance hardening.'}].map((s)=> (
          <Card key={s.t} className="p-5">
            <div className="text-sm font-medium">{s.t}</div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{s.d}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
