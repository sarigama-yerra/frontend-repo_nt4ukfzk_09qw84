import React from 'react'

export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <div aria-hidden className="h-6 w-6 rounded-md bg-gradient-to-br from-[#FF7A59] to-[#4FD1C5] shadow-[0_8px_20px_rgba(79,209,197,0.35)]" />
      <span className="font-semibold tracking-tight text-slate-900 dark:text-slate-100">BlueAI Studio</span>
    </div>
  )
}
