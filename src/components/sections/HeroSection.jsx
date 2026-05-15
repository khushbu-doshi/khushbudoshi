'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

// ── Gradient word-effect ──────────────────────────────────────────────────────
// Stop colors as RGB arrays — same order as the CSS gradient
const GRAD_STOPS = [
  [168, 24,  90],   // #A8185A  0%
  [196, 61,  58],   // #C43D3A 25%
  [204, 96,  32],   // #CC6020 50%
  [212, 146, 42],   // #D4922A 75%
  [168, 24,  90],   // #A8185A 100% (loop)
]
const STOP_PCTS = [0, 25, 50, 75, 100]

function hexToRgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ]
}
function lerpRgb(a, b, t) {
  return a.map((v, i) => Math.round(v + (b[i] - v) * t))
}
function smoothstep(t) { return t * t * (3 - 2 * t) }

function applyGradient(el, stopRgbs, posPercent) {
  const stops = stopRgbs
    .map((c, i) => `rgb(${c[0]},${c[1]},${c[2]}) ${STOP_PCTS[i]}%`)
    .join(', ')
  el.style.backgroundImage     = `linear-gradient(90deg, ${stops})`
  el.style.backgroundSize      = '300% auto'
  el.style.backgroundPosition  = `${posPercent}% 0`
  el.style.webkitBackgroundClip = 'text'
  el.style.backgroundClip      = 'text'
  el.style.color               = 'transparent'
}

function clearGradient(el) {
  el.style.backgroundImage      = ''
  el.style.backgroundSize       = ''
  el.style.backgroundPosition   = ''
  el.style.webkitBackgroundClip = ''
  el.style.backgroundClip       = ''
  el.style.color                = ''
}

/**
 * Each word gets its own independent gradient animation.
 * defaultHex — the word's resting color (Tailwind class is bypassed while
 *              inline color is 'transparent', restored on clear).
 */
function useWordGradient(defaultHex) {
  const elRef     = useRef(null)
  const rafRef    = useRef(null)
  const defHexRef = useRef(defaultHex)

  // Cleanup on unmount
  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }, [])

  const trigger = useCallback(() => {
    const el = elRef.current
    if (!el) return
    if (rafRef.current) cancelAnimationFrame(rafRef.current)

    const defRgb = hexToRgb(defHexRef.current)
    const HOLD_MS = 1000   // hold gradient for 1 s
    const FADE_MS = 700    // then melt back over 0.7 s
    const t0 = performance.now()

    const tick = (now) => {
      const elapsed = now - t0

      if (elapsed < HOLD_MS) {
        // Phase 1: gradient shifts continuously left→right
        const pos = (elapsed / HOLD_MS) * 200   // 0 → 200%
        applyGradient(el, GRAD_STOPS, pos)
        rafRef.current = requestAnimationFrame(tick)
      } else {
        // Phase 2: melt stop colors back to default, position stays fixed
        const ft   = Math.min((elapsed - HOLD_MS) / FADE_MS, 1)
        const ease = smoothstep(ft)
        const stops = GRAD_STOPS.map(c => lerpRgb(c, defRgb, ease))
        applyGradient(el, stops, 200)
        if (ft < 1) {
          rafRef.current = requestAnimationFrame(tick)
        } else {
          clearGradient(el)   // Tailwind color class takes over again
        }
      }
    }

    rafRef.current = requestAnimationFrame(tick)
  }, [])

  return { elRef, trigger }
}

/** Wraps any word with its own independent gradient effect instance */
function GradientWord({ children, defaultHex, className = '' }) {
  const { elRef, trigger } = useWordGradient(defaultHex)
  const onTouch = (e) => { e.preventDefault(); trigger() }
  return (
    <span
      ref={elRef}
      className={`cursor-default inline-block px-[2px] mx-[-2px] ${className}`}
      onMouseEnter={trigger}
      onTouchStart={onTouch}
    >
      {children}
    </span>
  )
}

// ── Cloud bubble (unchanged) ──────────────────────────────────────────────────
const EMOJIS = [
  { emoji: '🧘🏽‍♀️', label: 'Became a yoga teacher & volunteered at yoga centres',          bg: '#f0f5ff', border: '#d4e0ff', text: '#4a5298' },
  { emoji: '🚶🏽‍♀️', label: 'Hitchhiked around Europe for 30 days on $300',                  bg: '#fff8f0', border: '#ffd9b0', text: '#a0520a' },
  { emoji: '👩🏽‍🎨', label: 'Learned pottery by volunteering at studios in exchange for classes', bg: '#f5f0ff', border: '#ddd0ff', text: '#6b30c0' },
]

function CloudBubble({ bg, border, color, label }) {
  return (
    <div className="relative font-body text-[13px] leading-snug" style={{ width: 288, height: 88 }}>
      <svg width="288" height="88" viewBox="0 0 288 88" xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible' }}>
        <path
          d={[
            'M 26 72',
            'A 20 20 0 0 1 4  52', 'A 20 20 0 0 1 22 32',
            'A 20 20 0 0 1 36 16', 'A 24 24 0 0 1 64  8',
            'A 22 22 0 0 1 88 18', 'A 24 24 0 0 1 118 8',
            'A 22 22 0 0 1 144 18','A 24 24 0 0 1 172 8',
            'A 22 22 0 0 1 196 18','A 24 24 0 0 1 224 10',
            'A 22 22 0 0 1 248 22','A 20 20 0 0 1 260 42',
            'A 20 20 0 0 1 244 62','A 18 18 0 0 1 218 72',
            'A 20 20 0 0 1 186 78','A 20 20 0 0 1 156 72',
            'A 20 20 0 0 1 122 78','A 20 20 0 0 1 92  72',
            'A 20 20 0 0 1 60  78','A 20 20 0 0 1 36  72',
            'Z',
          ].join(' ')}
          fill={bg} stroke={border} strokeWidth="1.5" strokeLinejoin="round"
        />
      </svg>
      <div className="absolute font-body text-[13px]"
        style={{ top: '20px', left: '36px', right: '36px', bottom: '18px',
                 display: 'flex', alignItems: 'center', color, lineHeight: 1.4 }}>
        {label}
      </div>
    </div>
  )
}

// ── Hero section ──────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [idx, setIdx]         = useState(0)
  const [visible, setVisible] = useState(true)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (hovered) return
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => { setIdx(i => (i + 1) % EMOJIS.length); setVisible(true) }, 220)
    }, 2600)
    return () => clearInterval(id)
  }, [hovered])

  const current = EMOJIS[idx]

  const FG = '#343232'  // text-foreground — default for plain words

  return (
    <section className="pt-[80px]">
      <div className="max-w-[864px] mx-auto px-6">
        <div className="flex flex-col items-start justify-end h-[368px] pb-14 gap-6">

          {/* Rotating emoji */}
          <div className="relative inline-block cursor-default"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            {hovered && (
              <div className="absolute left-full top-1/2 -translate-y-1/2 pointer-events-none flex items-center"
                style={{ zIndex: 50, marginLeft: '8px' }}>
                <div className="flex items-center gap-[4px] mr-[6px]">
                  {[5, 7, 10].map((size, i) => (
                    <div key={i} style={{ width: size, height: size, borderRadius: '50%',
                      backgroundColor: current.bg, boxShadow: `0 0 0 1.2px ${current.border}`, flexShrink: 0 }} />
                  ))}
                </div>
                <CloudBubble bg={current.bg} border={current.border} color={current.text} label={current.label} />
              </div>
            )}
            <span className="text-[56px] leading-none select-none inline-block"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(6px)',
                       transition: 'opacity 220ms ease, transform 220ms ease' }}>
              {current.emoji}
            </span>
          </div>

          {/* Hero headline */}
          <div className="flex flex-col gap-[16px] w-full">
            <h1 className="font-body font-semibold text-foreground w-full"
              style={{ fontSize: 'clamp(28px, 5.8vw, 48px)', letterSpacing: 'clamp(-3px, -0.2vw, 0px)', lineHeight: '1.08' }}>
              <GradientWord defaultHex={FG}>I'm</GradientWord>
              {' '}
              <GradientWord defaultHex={FG}>Khushbu,</GradientWord>
              {' '}
              <GradientWord defaultHex={FG}>a</GradientWord>
              {' '}
              <GradientWord defaultHex="#006fcf" className="text-hero-blue">designer</GradientWord>
              {' '}
              <GradientWord defaultHex={FG}>who</GradientWord>
              {' '}
              <GradientWord defaultHex="#db5a5a" className="text-hero-coral">markets</GradientWord>
              .
            </h1>

            <p className="font-body text-body text-foreground/55 leading-[1.44] w-full">
              {"I'm a marketer turned designer, now building with AI. I strategized campaigns for a lifestyle brand, then transitioned into UX. Over the past 3 years I've worked with startups at the intersection of product design and marketing, designing products from 0 to 1."}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
