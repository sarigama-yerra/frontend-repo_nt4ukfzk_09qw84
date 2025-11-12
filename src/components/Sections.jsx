import { motion } from 'framer-motion'

export function Trusted() {
  const logos = ['Acme', 'Nimbus', 'VorteX', 'Orbital', 'Zenit']
  const stats = [
    { label: 'Projects', value: '120+' },
    { label: 'Years', value: '8' },
    { label: 'Avg. LCP', value: '1.9s' },
  ]
  return (
    <section className="py-16 bg-white dark:bg-[#0F1724]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="grid grid-cols-5 gap-4 opacity-80">
          {logos.map((l) => (
            <div key={l} className="h-10 rounded-md bg-black/5 dark:bg-white/10 grid place-items-center text-xs text-black/60 dark:text-white/60">
              {l}
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-semibold text-[#0F1724] dark:text-white">{s.value}</div>
              <div className="text-sm text-[#0F1724]/60 dark:text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WorkGrid({ projects = [] }) {
  const items = projects.length ? projects : [
    { title: 'Comet SaaS', summary: 'Marketing site + design system', stat: '+26% sign‑ups' },
    { title: 'Lyra Finance', summary: 'Web app UI + perf', stat: '-38% LCP' },
    { title: 'Halo Health', summary: 'Brand refresh + site', stat: '+44% time on page' },
  ]
  return (
    <section id="work" className="py-20 bg-[#F8FAFC] dark:bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-10">
          <h2 className="text-3xl font-semibold text-[#0F1724] dark:text-white">Featured Work</h2>
          <p className="text-[#0F1724]/70 dark:text-white/70">Case studies with measurable outcomes.</p>
        </header>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.a
              key={p.title}
              whileHover={{ y: -6 }}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm"
              href="#case"
            >
              <div className="h-48 bg-gradient-to-br from-[#4FD1C5]/20 to-[#FF7A59]/20" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-lg text-[#0F1724] dark:text-white">{p.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#4FD1C5]/20 text-[#0F1724] dark:text-white">{p.stat}</span>
                </div>
                <p className="text-sm text-[#0F1724]/70 dark:text-white/70 mt-2">{p.summary}</p>
                <div className="mt-3 text-xs text-[#0F1724]/60 dark:text-white/60 opacity-0 group-hover:opacity-100 transition">View case →</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CaseStudy() {
  return (
    <section id="case" className="py-20 bg-white dark:bg-[#0F1724]">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-black/5 to-black/0 dark:from-white/10 dark:to-transparent border border-black/5 dark:border-white/10" />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#0F1724] dark:text-white">Lyra Finance — Conversion uplift</h3>
          <p className="text-[#0F1724]/70 dark:text-white/70">We cut bloat, streamlined key journeys, and shipped a modular design system for rapid iteration.</p>
          <ul className="text-sm list-disc pl-5 text-[#0F1724] dark:text-white/80">
            <li>Stack: React, Tailwind, Framer Motion</li>
            <li>Audit → Prototype → Ship in 4 weeks</li>
            <li>Results: +32% sign‑ups, -41% LCP</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Services() {
  const items = [
    { title: 'Design Systems', desc: 'Token-driven, consistent, scalable' },
    { title: 'UI/UX Audit', desc: 'Heuristics, flow fixes, conversion' },
    { title: 'Frontend Engineering', desc: 'React, performance-first builds' },
    { title: 'Perf Optimization', desc: 'Lighthouse 90+, Core Web Vitals' },
  ]
  return (
    <section id="services" className="py-20 bg-[#F8FAFC] dark:bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-[#0F1724] dark:text-white mb-8">Services & Process</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-4">
            {items.map((i) => (
              <li key={i.title} className="p-4 rounded-xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10">
                <div className="font-medium text-[#0F1724] dark:text-white">{i.title}</div>
                <div className="text-sm text-[#0F1724]/70 dark:text-white/70">{i.desc}</div>
              </li>
            ))}
          </ul>
          <ol className="grid grid-cols-3 gap-4">
            {['Discover', 'Prototype', 'Ship'].map((s, i) => (
              <li key={s} className="p-4 rounded-xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 text-center">
                <div className="text-3xl">{i+1}</div>
                <div className="text-sm mt-1 text-[#0F1724] dark:text-white">{s}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export function Testimonials({ testimonials = [] }) {
  const items = testimonials.length ? testimonials : [
    { name: 'Maya Chen', role: 'Head of Product, Comet', quote: 'The audit and rebuild paid for itself in a quarter.' },
    { name: 'Jonas V.', role: 'CTO, Lyra', quote: 'A partner that pairs design taste with engineering rigor.' },
  ]
  return (
    <section className="py-20 bg-white dark:bg-[#0F1724]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-[#0F1724] dark:text-white mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((t) => (
            <blockquote key={t.name} className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-white/5 border border-black/5 dark:border-white/10">
              <p className="text-[#0F1724] dark:text-white/90">“{t.quote}”</p>
              <footer className="mt-3 text-sm text-[#0F1724]/70 dark:text-white/70">{t.name} — {t.role}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Blog({ posts = [] }) {
  const items = posts.length ? posts : [
    { title: 'Design tokens to components', slug: 'tokens-to-ui', excerpt: 'Mapping tokens to resilient UI.' },
    { title: 'Perf-first React', slug: 'perf-first-react', excerpt: 'Budgets, suspense, and vitals.' },
  ]
  return (
    <section id="blog" className="py-20 bg-[#F8FAFC] dark:bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-[#0F1724] dark:text-white mb-8">Insights</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((p) => (
            <a key={p.slug} href="#" className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 hover:-translate-y-1 transition">
              <div className="h-40 rounded-xl bg-gradient-to-br from-[#4FD1C5]/20 to-[#FF7A59]/20" />
              <div className="mt-4 font-medium text-lg text-[#0F1724] dark:text-white">{p.title}</div>
              <div className="text-sm text-[#0F1724]/70 dark:text-white/70">{p.excerpt}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const submit = async (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = {
      name: fd.get('name'),
      email: fd.get('email'),
      brief: fd.get('brief'),
    }
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const res = await fetch(`${base}/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (res.ok) alert('Thanks — we will be in touch shortly.')
    else alert('Something went wrong. Please email us directly.')
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#0F1724]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-2xl p-6 border border-black/5 dark:border-white/10 bg-[#F8FAFC] dark:bg-white/5">
          <h2 className="text-3xl font-semibold text-[#0F1724] dark:text-white mb-4">Contact</h2>
          <p className="text-[#0F1724]/70 dark:text-white/70 mb-6">Tell us about your project. We respond within 1–2 days.</p>
          <form onSubmit={submit} className="grid gap-4">
            <input name="name" placeholder="Name" className="px-4 py-3 rounded-xl bg-white dark:bg-white/10 border border-black/5 dark:border-white/10" required />
            <input type="email" name="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white dark:bg-white/10 border border-black/5 dark:border-white/10" required />
            <textarea name="brief" placeholder="Project brief" rows="4" className="px-4 py-3 rounded-xl bg-white dark:bg-white/10 border border-black/5 dark:border-white/10" required />
            <div className="flex items-center gap-3">
              <button className="px-5 py-3 rounded-xl bg-[#FF7A59] text-white font-medium">Send</button>
              <a className="px-5 py-3 rounded-xl bg-[#4FD1C5] text-[#0F1724] font-medium" href="#">Calendar</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
