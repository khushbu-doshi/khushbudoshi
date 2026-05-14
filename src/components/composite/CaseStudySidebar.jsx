'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

/**
 * Generic sidebar for all case studies.
 * sections: [{ id: string, label: string, subItems?: [{ id: string, label: string }] }]
 * subItems render as indented bullet points below the parent item.
 * Positioned further left than the content column with body-size (16px) text.
 */
export default function CaseStudySidebar({ sections }) {
  const [active,  setActive]  = useState(sections[0]?.id || '')
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Hide sidebar when footer scrolls into view — prevents it from overlapping footer
    const footer = document.querySelector('footer')
    if (footer) {
      const fo = new IntersectionObserver(
        ([entry]) => setVisible(!entry.isIntersecting),
        { threshold: 0 }
      )
      fo.observe(footer)
      return () => fo.disconnect()
    }
  }, [])

  useEffect(() => {
    // Flatten all ids (top-level + subItems) for observation
    const allIds = sections.flatMap(({ id, subItems }) =>
      subItems ? [id, ...subItems.map((s) => s.id)] : [id]
    )
    const observers = allIds.map((id) => {
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
  }, [sections])

  return (
    <aside
      className="fixed top-[80px] flex-col py-10 overflow-y-auto hidden xl:flex z-30 transition-opacity duration-200"
      style={{
        left:    'max(20px, calc(50vw - 720px))',
        width:   '160px',
        height:  'calc(100vh - 80px)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <Link
        href="/"
        className="inline-flex items-center gap-1 font-mono text-label text-muted mb-8 hover:text-foreground transition-colors"
      >
        ← BACK
      </Link>

      <nav className="flex flex-col gap-1">
        {sections.map(({ id, label, subItems }) => (
          <div key={id}>
            <a
              href={`#${id}`}
              className={`font-body text-body py-0.5 transition-colors leading-snug block ${
                active === id
                  ? 'text-foreground font-medium'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              {label}
            </a>
            {subItems && (
              <div className="flex flex-col gap-0.5 ml-3 mt-0.5 mb-1">
                {subItems.map((sub) => (
                  <a
                    key={sub.id}
                    href={`#${sub.id}`}
                    className={`font-body text-body py-0.5 transition-colors leading-snug flex items-start gap-1.5 ${
                      active === sub.id
                        ? 'text-foreground font-medium'
                        : 'text-muted hover:text-foreground'
                    }`}
                  >
                    <span className="mt-[5px] shrink-0 w-1 h-1 rounded-full bg-current opacity-60" />
                    {sub.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}
