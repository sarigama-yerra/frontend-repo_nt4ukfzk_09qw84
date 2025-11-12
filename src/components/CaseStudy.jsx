import React from 'react'
import { Section, Card } from './UI'

export default function CaseStudy() {
  return (
    <Section>
      <Card className="p-6">
        <div className="grid gap-8 md:grid-cols-2">
          <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop" alt="Case study hero" className="rounded-xl object-cover w-full h-72" loading="lazy" />
          <div>
            <h3 className="text-xl font-semibold">Selected Case Study — Growth Dashboard</h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Problem: Fragmented analytics and slow funnels. Solution: Consolidated funnels, async data fetch, and a design system. Result: +22% sign-ups, -18% bounce, 1.2s LCP.</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <li><strong>Stack:</strong> React, FastAPI, MongoDB</li>
              <li><strong>Design:</strong> Figma, Tokens</li>
              <li><strong>Performance:</strong> Web Vitals, Code-split</li>
              <li><strong>UX:</strong> A/B tests, Before/After</li>
            </ul>
            <div className="mt-4 h-2 w-full rounded bg-gradient-to-r from-[#FF7A59] to-[#4FD1C5]" />
          </div>
        </div>
      </Card>
    </Section>
  )
}
