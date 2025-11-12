import React from 'react'
import { Section, Pill, Stat } from './UI'

export default function Trusted() {
  return (
    <Section className="bg-gradient-to-b from-white to-white dark:from-[#0B1220] dark:to-[#0F1724]">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <Pill>Trusted by product teams</Pill>
          <img src="https://dummyimage.com/80x28/000/fff&text=ACME" alt="ACME" className="opacity-60" />
          <img src="https://dummyimage.com/80x28/000/fff&text=KITE" alt="Kite" className="opacity-60" />
          <img src="https://dummyimage.com/80x28/000/fff&text=ZEN" alt="Zen" className="opacity-60" />
          <img src="https://dummyimage.com/80x28/000/fff&text=GROVE" alt="Grove" className="opacity-60" />
        </div>
        <div className="grid grid-cols-3 gap-6">
          <Stat label="Shipped projects" value="48+" />
          <Stat label="Avg. load time" value="1.2s" />
          <Stat label="Years in craft" value="8" />
        </div>
      </div>
    </Section>
  )
}
