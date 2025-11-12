import React from 'react'
import { motion } from 'framer-motion'
import { Section, Card, Button } from './UI'

const projects = [
  {
    title: 'Fintech Dashboard',
    stat: '+22% signup rate',
    image: 'https://images.unsplash.com/photo-1748439435495-722cc1728b7e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW50ZWNoJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjI4ODQ1NDd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'AI SaaS Marketing',
    stat: '-36% bounce rate',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Ecommerce Rebrand',
    stat: '+18% AOV',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Work() {
  return (
    <Section id="work">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Featured Work</h2>
        <Button as="a" href="#" variant="outline">All case studies</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Card key={p.title} className="overflow-hidden">
            <div className="relative">
              <img src={p.image} alt={p.title} className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-sm opacity-80">{p.stat}</p>
                  </div>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs">View</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
