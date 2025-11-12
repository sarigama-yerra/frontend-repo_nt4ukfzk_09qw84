import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[82vh] md:min-h-[88vh] flex items-center">
      <div className="absolute inset-0">{/* Spline 3D background */}
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_50%,rgba(15,23,36,0.25),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 py-28">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-sm"
          >
            Crafting pixel-perfect websites with human-centered AI.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-5 text-white/80 max-w-xl"
          >
            Design systems, production-ready frontend, and delightful UI — built to convert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#work" className="px-5 py-3 rounded-xl bg-[#FF7A59] text-white font-medium shadow-sm hover:shadow-md transition">
              View Work
            </a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white backdrop-blur-lg ring-1 ring-white/20 hover:bg-white/15 transition">
              Schedule Review
            </a>
          </motion.div>
        </div>

        {/* Right side: glass card mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="hidden md:block"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-4">
              <div className="h-[360px] rounded-2xl bg-gradient-to-br from-white/40 to-white/10"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
