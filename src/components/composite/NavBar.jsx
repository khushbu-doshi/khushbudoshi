'use client'

import Link from 'next/link'
import { useState } from 'react'

const designCaseStudies = [
  { label: 'Civic',            href: '/case-studies/civic'            },
  { label: 'Student Housing',  href: '/case-studies/student-housing'  },
  { label: 'Fortuna Insights', href: '/case-studies/fortuna-insights' },
]

const marketingCaseStudies = [
  { label: 'Bayer',  href: '/case-studies/bayer'  },
  { label: 'Darzah', href: '/case-studies/darzah' },
]

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    /* Outer container is 864+48=912px so the card's internal px-6 aligns with page content */
    <header className="fixed top-0 left-0 right-0 z-50 pt-4">
      <div className="max-w-[912px] mx-auto px-6">

        {/* ── Main bar ── */}
        <div className="bg-background/30 backdrop-blur-md border border-border rounded-[20px] h-[52px] flex items-center justify-between px-6 shadow-card">
          <Link href="/" className="font-body font-semibold text-[15px] text-foreground tracking-tight shrink-0">
            KHUSHBU DOSHI
          </Link>

          {/* Desktop nav — hidden on mobile */}
          <nav className="hidden md:flex items-center gap-6">

            {/* WORK — hover reveals case-study dropdown */}
            <div className="relative group">
              <Link href="/#work" className="font-body text-[14px] text-muted hover:text-foreground transition-colors">
                WORK
              </Link>
              {/* pt-3 bridges the gap so hover doesn't break when moving to panel */}
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

            <Link href="/about"  className="font-body text-[14px] text-muted hover:text-foreground transition-colors">ABOUT</Link>
            <a href="/documents/Resume-Doshi-Khushbu.pdf" target="_blank" rel="noopener noreferrer" className="font-body text-[14px] text-muted hover:text-foreground transition-colors">RESUME</a>
            <Link href="/ai"     className="font-body text-[14px] text-muted hover:text-foreground transition-colors">KHUSHBU'S AI</Link>
          </nav>

          {/* Hamburger — mobile only, animates to × when open */}
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

        {/* ── Mobile menu panel ── */}
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
                { label: 'About',        href: '/about'  },
                { label: 'Resume',       href: '/documents/Resume-Doshi-Khushbu.pdf', external: true },
                { label: "Khushbu's AI", href: '/ai'     },
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
