import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Fintech Design System',
    tag: '+32% sign-ups',
    desc: 'A multi-brand tokenized system with dark mode and 98 Lighthouse.',
    image: 'https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW50ZWNoJTIwRGVzaWduJTIwU3lzdGVtfGVufDB8MHx8fDE3NjI5NTM2MDF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'SaaS Marketing Site',
    tag: '-27% bounce',
    desc: 'Story-driven pages with 3D hero and WebGL micro-interactions.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'E‑commerce Speed Revamp',
    tag: '1.3s LCP',
    desc: 'Hydration-lite UI, image AVIF pipeline, Core Web Vitals green.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function WorkGrid({ onOpenCase }) {
  return (
    <section id="work" className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">Featured Work</h2>
          <a href="#" className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">All case studies →</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.button key={p.title} onClick={() => onOpenCase(p)} className="group relative rounded-2xl overflow-hidden text-left bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-white/10 shadow-sm">
              <img src={p.image} alt="project cover" className="h-56 w-full object-cover group-hover:scale-[1.03] transition-transform duration-300" loading="lazy" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</div>
                  <span className="text-xs rounded-full px-2 py-1 bg-[#4FD1C5]/10 text-[#0F1724] dark:text-[#4FD1C5]">{p.tag}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
