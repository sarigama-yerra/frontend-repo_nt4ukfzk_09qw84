import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trusted from './components/Trusted'
import Work from './components/Work'
import CaseStudy from './components/CaseStudy'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0F1724] dark:bg-[#0F1724] dark:text-white">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 rounded bg-black/80 px-3 py-2 text-white">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Trusted />
        <Work />
        <CaseStudy />
        <Services />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <footer className="border-t border-black/5 dark:border-white/10 py-10 text-sm">
        <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="opacity-70">© {new Date().getFullYear()} AI Studio. All rights reserved.</div>
          <nav className="flex items-center gap-4 opacity-80">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
