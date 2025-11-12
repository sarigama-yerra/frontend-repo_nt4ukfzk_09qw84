import { useEffect, useState } from 'react'
import { Moon, Sun, Menu } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', localStorage.theme === 'dark')
  }, [])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.theme = isDark ? 'dark' : 'light'
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/60 dark:bg-[#0F1724]/60 shadow-sm' : 'bg-transparent'}`}
      aria-label="Primary Navigation">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Left: Logo */}
          <a href="#top" className="flex items-center gap-2 group" aria-label="Studio Home">
            <div className="w-8 h-8 rounded-lg bg-[#0F1724] dark:bg-white grid place-items-center text-white dark:text-[#0F1724] font-bold">A</div>
            <span className="font-semibold tracking-tight text-[#0F1724] dark:text-white">Aurora AI Studio</span>
          </a>

          {/* Center: Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#0F1724]/80 dark:text-white/80">
            <a href="#work" className="hover:text-[#0F1724] dark:hover:text-white transition-colors">Work</a>
            <a href="#services" className="hover:text-[#0F1724] dark:hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-[#0F1724] dark:hover:text-white transition-colors">About</a>
            <a href="#blog" className="hover:text-[#0F1724] dark:hover:text-white transition-colors">Blog</a>
          </nav>

          {/* Right: CTA + Theme */}
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-xl text-sm font-medium bg-[#FF7A59] text-white hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A59]">
              Contact / Book Review
            </a>
            <button aria-label="Toggle theme" onClick={toggleTheme} className="p-2 rounded-lg bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 border border-black/5 dark:border-white/10">
              <Sun className="w-4 h-4 hidden dark:block" />
              <Moon className="w-4 h-4 dark:hidden" />
            </button>
            <button aria-label="Open menu" className="md:hidden p-2" onClick={() => setOpen(!open)}>
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden pb-4 grid gap-2 text-sm">
            <a href="#work" className="px-2 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">Work</a>
            <a href="#services" className="px-2 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">Services</a>
            <a href="#about" className="px-2 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">About</a>
            <a href="#blog" className="px-2 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">Blog</a>
            <a href="#contact" className="px-2 py-2 rounded-lg bg-[#FF7A59] text-white">Contact / Book Review</a>
          </div>
        )}
      </div>
    </header>
  )
}
