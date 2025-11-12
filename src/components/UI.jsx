import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../utils'

export const Section = ({ id, children, className }) => (
  <section id={id} className={cn('py-24 md:py-32', className)}>
    <div className="mx-auto w-full max-w-7xl px-6 md:px-8">{children}</div>
  </section>
)

export const Button = ({ as = 'button', variant = 'primary', className = '', children, icon: Icon, ...props }) => {
  const As = as
  const base = 'relative inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-[background,box-shadow,transform] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none'
  const variants = {
    primary: 'bg-[#FF7A59] text-white hover:bg-[#ff6a43] focus-visible:ring-[#FF7A59] shadow-sm shadow-[#FF7A59]/30 hover:shadow-md',
    secondary: 'bg-[#4FD1C5] text-[#0F1724] hover:bg-[#3cc7ba] focus-visible:ring-[#4FD1C5] shadow-sm shadow-[#4FD1C5]/30 hover:shadow-md',
    ghost: 'bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white/60 dark:bg-white/5 dark:hover:bg-white/10',
    outline: 'border border-black/10 dark:border-white/10 text-gray-900 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/5'
  }
  return (
    <As className={cn(base, variants[variant], className)} {...props}>
      {Icon && <Icon className="mr-2 h-4 w-4" aria-hidden="true" />}
      {children}
      <span className="pointer-events-none absolute inset-0 rounded-xl bg-white/0 [transition:background_300ms]" />
    </As>
  )
}

export const Card = ({ className = '', children }) => (
  <motion.div
    initial={{ y: 12, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className={cn('group rounded-2xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:backdrop-blur-md shadow-sm hover:shadow-md transition-shadow', className)}
  >
    {children}
  </motion.div>
)

export function Pill({ children, className }) {
  return (
    <span className={cn('inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1 text-xs text-gray-700 dark:text-gray-200', className)}>
      {children}
    </span>
  )
}

export function Stat({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{value}</div>
      <div className="mt-1 text-xs text-gray-500">{label}</div>
    </div>
  )
}
