'use client'

import Link from 'next/link'
import { useState, useRef, useCallback, useEffect } from 'react'

// ── Scramble effect ───────────────────────────────────────────────────────────
const SOURCE  = 'KHUSHBU DOSHI'
const TARGET  = 'DESIGNER · MARKETER'
const CHARS   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const INTERVAL_MS    = 18
const STEPS_PER_CHAR = 2

function runScramble(from, to, onTick, onDone) {
  const len        = Math.max(from.length, to.length)
  const totalSteps = (len - 1) * STEPS_PER_CHAR + STEPS_PER_CHAR
  let   step       = 0

  const id = setInterval(() => {
    let result = ''
    for (let i = 0; i < len; i++) {
      const toChar     = i < to.length ? to[i] : ''
      const resolvedAt = i * STEPS_PER_CHAR + STEPS_PER_CHAR

      if (step >= resolvedAt || toChar === ' ' || toChar === '·' || toChar === '') {
        result += toChar
      } else {
        result += CHARS[Math.floor(Math.random() * 26)]
      }
    }
    onTick(result)
    step++

    if (step > totalSteps) {
      clearInterval(id)
      onTick(to)
      onDone()
    }
  }, INTERVAL_MS)

  return () => clearInterval(id)
}

function ScrambleName() {
  const [text, setText]     = useState(SOURCE)
  const phaseRef            = useRef('idle')   // 'idle' | 'to-target' | 'at-target' | 'to-source'
  const pendingLeaveRef     = useRef(false)
  const cancelRef           = useRef(null)

  // Cleanup on unmount
  useEffect(() => () => { cancelRef.current?.() }, [])

  const startTo = useCallback((from, to, nextPhase, afterDone) => {
    cancelRef.current?.()
    cancelRef.current = runScramble(from, to, setText, () => {
      phaseRef.current = nextPhase
      afterDone?.()
    })
  }, [])

  const onMouseEnter = useCallback(() => {
    pendingLeaveRef.current = false
    // Already heading to target or sitting there — do nothing
    if (phaseRef.current === 'to-target' || phaseRef.current === 'at-target') return
    phaseRef.current = 'to-target'
    startTo(SOURCE, TARGET, 'at-target', () => {
      // If user left while we were scrambling, start the return immediately
      if (pendingLeaveRef.current) {
        pendingLeaveRef.current = false
        phaseRef.current = 'to-source'
        setTimeout(() => {
          if (phaseRef.current === 'to-source') startTo(TARGET, SOURCE, 'idle', null)
        }, 1000)
      }
    })
  }, [startTo])

  const onMouseLeave = useCallback(() => {
    if (phaseRef.current === 'to-target') {
      // Never interrupt — flag it and return after target resolves
      pendingLeaveRef.current = true
    } else if (phaseRef.current === 'at-target') {
      phaseRef.current = 'to-source'
      setTimeout(() => {
        if (phaseRef.current === 'to-source') startTo(TARGET, SOURCE, 'idle', null)
      }, 1000)
    }
    // 'to-source' or 'idle' — nothing to do
  }, [startTo])

  return (
    <span
      className="whitespace-nowrap inline-block"
      style={{ minWidth: '180px' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {text}
    </span>
  )
}

// ── Nav data ─────────────────────────────────────────────────────────────────
const designCaseStudies = [
  { label: 'Civic',            href: '/case-studies/civic'            },
  { label: 'Student Housing',  href: '/case-studies/student-housing'  },
  { label: 'Fortuna Insights', href: '/case-studies/fortuna-insights' },
]

const marketingCaseStudies = [
  { label: 'Bayer',  href: '/case-studies/bayer'  },
  { label: 'Darzah', href: '/case-studies/darzah' },
]

// ── NavBar ────────────────────────────────────────────────────────────────────
export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4">
      <div className="max-w-[912px] mx-auto px-6">

        {/* ── Main bar ── */}
        <div className="bg-background/30 backdrop-blur-md border border-border rounded-[20px] h-[52px] flex items-center justify-between px-6 shadow-card">
          <Link href="/" className="font-body font-semibold text-[15px] text-foreground tracking-tight shrink-0">
            <ScrambleName />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <div className="relative group">
              <Link href="/#work" className="font-body text-[14px] text-muted hover:text-foreground transition-colors">
                WORK
              </Link>
              <div className="absolute top-full right-0 pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 z-50">
                <div className="bg-background/95 backdrop-blur-md border border-border rounded-[16px] shadow-card p-4 w-[210px]">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-2">Product Design</p>
                  <div className="flex flex-col mb-4">
                    {designCaseStudies.map(({ label, href }) => (
                      <Link key={href} href={href} className="font-body text-[14px] text-foreground hover:text-brand transition-colors py-1.5">
                        {label}
                      </Link>
                    ))}
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-2">Marketing</p>
                  <div className="flex flex-col">
                    {marketingCaseStudies.map(({ label, href }) => (
                      <Link key={href} href={href} className="font-body text-[14px] text-foreground hover:text-brand transition-colors py-1.5">
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className="font-body text-[14px] text-muted hover:text-foreground transition-colors">ABOUT</Link>
            <a href="/documents/Resume-Doshi-Khushbu.pdf" target="_blank" rel="noopener noreferrer" className="font-body text-[14px] text-muted hover:text-foreground transition-colors">RESUME</a>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 shrink-0"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-5 h-[1.5px] bg-foreground origin-center transition-transform duration-200 ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-foreground transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-foreground origin-center transition-transform duration-200 ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
          </button>
        </div>

        {/* ── Mobile menu ── */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-background/95 backdrop-blur-md border border-border rounded-[20px] shadow-card px-6 py-5 flex flex-col">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-1">Product Design</p>
            {designCaseStudies.map(({ label, href }) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                className="font-body text-[16px] text-foreground hover:text-brand transition-colors py-2.5 border-b border-border/50 last:border-0">
                {label}
              </Link>
            ))}

            <p className="font-mono text-[11px] uppercase tracking-widest text-muted mt-4 mb-1">Marketing</p>
            {marketingCaseStudies.map(({ label, href }) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                className="font-body text-[16px] text-foreground hover:text-brand transition-colors py-2.5 border-b border-border/50 last:border-0">
                {label}
              </Link>
            ))}

            <div className="border-t border-border mt-4 pt-3 flex flex-col">
              {[
                { label: 'About',  href: '/about' },
                { label: 'Resume', href: '/documents/Resume-Doshi-Khushbu.pdf', external: true },
              ].map(({ label, href, external }) => external ? (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
                  className="font-body text-[16px] text-foreground hover:text-brand transition-colors py-2.5">
                  {label}
                </a>
              ) : (
                <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                  className="font-body text-[16px] text-foreground hover:text-brand transition-colors py-2.5">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </header>
  )
}
