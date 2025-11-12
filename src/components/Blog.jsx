import React from 'react'
import { Section, Card, Button } from './UI'

const posts = [
  { t: 'Design tokens that scale teams', img: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=1600&auto=format&fit=crop' },
  { t: 'Shipping for Core Web Vitals', img: 'https://images.unsplash.com/photo-1529336953121-4f3a4be1aefb?q=80&w=1600&auto=format&fit=crop' },
]

export default function Blog() {
  return (
    <Section id="blog">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Insights</h2>
        <Button as="a" href="#" variant="outline">All posts</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <Card key={p.t} className="overflow-hidden">
            <img src={p.img} alt="" className="h-56 w-full object-cover" loading="lazy" />
            <div className="p-5">
              <h3 className="font-medium">{p.t}</h3>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
