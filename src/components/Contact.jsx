import React, { useState } from 'react'
import { Section, Card, Button } from './UI'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <Section id="contact">
      <Card className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Let’s build</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Tell us about your product. We’ll reply with a short plan and timeline.</p>
            <div className="mt-4 flex items-center gap-3 text-sm">
              <a href="#" className="text-[#FF7A59] underline-offset-4 hover:underline">Schedule a review</a>
              <span className="text-gray-400">•</span>
              <a href="#" className="hover:underline underline-offset-4">X</a>
              <a href="#" className="hover:underline underline-offset-4">LinkedIn</a>
              <a href="#" className="hover:underline underline-offset-4">GitHub</a>
            </div>
          </div>
          <form onSubmit={onSubmit} className="grid gap-3">
            <input required name="name" placeholder="Name" className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-3 text-sm outline-none" />
            <input required type="email" name="email" placeholder="Email" className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-3 text-sm outline-none" />
            <textarea required name="brief" rows="4" placeholder="Project brief" className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-3 text-sm outline-none" />
            <Button type="submit" disabled={loading} variant="primary">{loading ? 'Sending…' : 'Send'}</Button>
          </form>
        </div>
      </Card>
    </Section>
  )
}
