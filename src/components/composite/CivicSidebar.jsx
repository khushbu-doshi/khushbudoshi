'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem-space', label: 'Problem Space' },
  { id: 'design-process', label: 'Design Process' },
  { id: 'solution', label: 'Solution' },
  { id: 'impact', label: 'Impact' },
  { id: 'learnings', label: 'Learnings' },
]

export default function CivicSidebar() {
  const [active, setActive] = useState('overview')

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-20% 0px -70% 0px' }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    /*
      Positioned OUTSIDE the 720px content column, floating in the left margin.
      Content left edge is at: calc(50vw - 360px)
      Sidebar sits 16px to the left of that edge.
      Sidebar width: 160px → left: calc(50vw - 360px - 16px - 160px) = calc(50vw - 536px)
    */
    <aside
      className="fixed top-[80px] flex-col py-10 overflow-y-auto hidden xl:flex"
      style={{
        left: 'max(20px, calc(50vw - 660px))',
        width: '160px',
        height: 'calc(100vh - 80px)',
      }}
    >
      <Link
        href="/"
        className="inline-flex items-center gap-1 font-mono text-label text-muted mb-8 hover:text-foreground transition-colors"
      >
        ← BACK
      </Link>

      <nav className="flex flex-col gap-1">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`font-body text-body py-0.5 transition-colors leading-snug ${
              active === id ? 'text-foreground font-medium' : 'text-muted hover:text-foreground'
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  )
}
