'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

// Cell size in CSS px — kept square on every screen
const CELL_PX = 30
// COLS / ROWS are computed dynamically from canvas size — see resize handler

// ── Snap rope endpoint to H / V / 45° diagonal ──────────────────────────────
function snapEnd(sc, sr, ec, er) {
  const dc = ec - sc
  const dr = er - sr
  if (dc === 0 || dr === 0) return { col: ec, row: er }
  if (Math.abs(dc) === Math.abs(dr)) return { col: ec, row: er }

  const hd   = Math.abs(dr)
  const vd   = Math.abs(dc)
  const diag = Math.min(Math.abs(dc), Math.abs(dr))
  const dd   = Math.abs(Math.abs(dc) - Math.abs(dr))
  const min  = Math.min(hd, vd, dd)

  if (min === hd) return { col: ec, row: sr }
  if (min === vd) return { col: sc, row: er }
  const sx = dc > 0 ? 1 : -1
  const sy = dr > 0 ? 1 : -1
  return { col: sc + diag * sx, row: sr + diag * sy }
}

// ── Canvas draw ──────────────────────────────────────────────────────────────
function draw(canvas, mirrors, ropes, ghost) {
  if (!canvas || canvas.offsetWidth === 0) return
  const ctx  = canvas.getContext('2d')
  const dpr  = canvas._dpr || 1
  const W    = canvas.offsetWidth
  const H    = canvas.offsetHeight
  // Square cells — computed dynamically so every screen gets equal-sized squares
  const COLS = canvas._cols || Math.max(4, Math.floor(W / CELL_PX))
  const ROWS = canvas._rows || Math.max(2, Math.floor(H / CELL_PX))
  const cw   = W / COLS
  const ch   = H / ROWS

  ctx.save()
  ctx.scale(dpr, dpr)
  ctx.clearRect(0, 0, W, H)

  // Page background — matches rest of site
  ctx.fillStyle = '#fafafa'
  ctx.fillRect(0, 0, W, H)

  // Grid lines — always visible
  ctx.save()
  ctx.strokeStyle = 'rgba(139, 103, 67, 0.18)'
  ctx.lineWidth = 0.5
  for (let c = 1; c < COLS; c++) {
    ctx.beginPath(); ctx.moveTo(c * cw, 0); ctx.lineTo(c * cw, H); ctx.stroke()
  }
  for (let r = 1; r < ROWS; r++) {
    ctx.beginPath(); ctx.moveTo(0, r * ch); ctx.lineTo(W, r * ch); ctx.stroke()
  }
  ctx.restore()

  // Ropes — between grid-line intersections
  const allRopes = ghost ? [...ropes, ghost] : ropes
  for (const r of allRopes) {
    const x1 = r.c1 * cw,  y1 = r.r1 * ch
    const x2 = r.c2 * cw,  y2 = r.r2 * ch
    const angle = Math.atan2(y2 - y1, x2 - x1)
    const px = Math.sin(angle) * 1.4
    const py = -Math.cos(angle) * 1.4

    ctx.save()
    ctx.shadowColor = 'rgba(80,50,20,0.22)'
    ctx.shadowBlur = 5; ctx.shadowOffsetX = 1; ctx.shadowOffsetY = 2
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2)
    ctx.strokeStyle = '#A89070'; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.stroke()
    ctx.restore()

    ctx.beginPath(); ctx.moveTo(x1 + px, y1 + py); ctx.lineTo(x2 + px, y2 + py)
    ctx.strokeStyle = 'rgba(255,245,225,0.55)'; ctx.lineWidth = 1.4; ctx.lineCap = 'round'; ctx.stroke()

    ctx.beginPath(); ctx.moveTo(x1 - px, y1 - py); ctx.lineTo(x2 - px, y2 - py)
    ctx.strokeStyle = 'rgba(90,60,30,0.18)'; ctx.lineWidth = 1; ctx.lineCap = 'round'; ctx.stroke()
  }

  // Mirrors — at cell centres
  for (const key of mirrors) {
    const [c, r] = key.split(',').map(Number)
    const cx = (c + 0.5) * cw,  cy = (r + 0.5) * ch
    const isCircle = (c + r) % 2 === 0
    const radius   = Math.min(cw, ch) * 0.31

    ctx.save()
    ctx.shadowColor = 'rgba(120,100,80,0.28)'; ctx.shadowBlur = 3; ctx.shadowOffsetY = 1.5
    if (isCircle) { ctx.beginPath(); ctx.arc(cx, cy, radius + 3, 0, Math.PI * 2) }
    else {
      const d = radius + 3; ctx.beginPath()
      ctx.moveTo(cx, cy - d); ctx.lineTo(cx + d, cy); ctx.lineTo(cx, cy + d); ctx.lineTo(cx - d, cy); ctx.closePath()
    }
    ctx.strokeStyle = '#C0AFA0'; ctx.lineWidth = 3.5; ctx.stroke()
    ctx.restore()

    const grad = ctx.createRadialGradient(cx - radius * 0.28, cy - radius * 0.28, radius * 0.04, cx, cy, radius)
    grad.addColorStop(0,    '#FFFFFF'); grad.addColorStop(0.18, '#EEF0F5')
    grad.addColorStop(0.55, '#9BA5BA'); grad.addColorStop(0.85, '#6B778F'); grad.addColorStop(1, '#4A5268')

    if (isCircle) { ctx.beginPath(); ctx.arc(cx, cy, radius, 0, Math.PI * 2) }
    else {
      ctx.beginPath()
      ctx.moveTo(cx, cy - radius); ctx.lineTo(cx + radius, cy); ctx.lineTo(cx, cy + radius); ctx.lineTo(cx - radius, cy); ctx.closePath()
    }
    ctx.fillStyle = grad; ctx.fill()

    const glint = ctx.createRadialGradient(cx - radius * 0.25, cy - radius * 0.3, 0, cx - radius * 0.25, cy - radius * 0.3, radius * 0.45)
    glint.addColorStop(0, 'rgba(255,255,255,0.72)'); glint.addColorStop(1, 'rgba(255,255,255,0)')
    if (isCircle) { ctx.beginPath(); ctx.arc(cx, cy, radius, 0, Math.PI * 2) }
    else {
      ctx.beginPath()
      ctx.moveTo(cx, cy - radius); ctx.lineTo(cx + radius, cy); ctx.lineTo(cx, cy + radius); ctx.lineTo(cx - radius, cy); ctx.closePath()
    }
    ctx.fillStyle = glint; ctx.fill()
  }

  ctx.restore()
}

// ── Component ────────────────────────────────────────────────────────────────
export default function FooterSection() {
  const canvasRef  = useRef(null)
  const dragRef    = useRef({ active: false, sc: 0, sr: 0, si_col: 0, si_row: 0, moved: false })
  const [mirrors, setMirrors] = useState(new Set())
  const [ropes,   setRopes]   = useState([])
  const [ghost,   setGhost]   = useState(null)

  // Keep a ref to latest state so the ResizeObserver can call draw without stale closures
  const stateRef = useRef({ mirrors, ropes, ghost })
  useEffect(() => { stateRef.current = { mirrors, ropes, ghost } }, [mirrors, ropes, ghost])

  // ── Resize → draw immediately so beige + grid are always visible ──────────
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const size = () => {
      const dpr = window.devicePixelRatio || 1
      canvas._dpr  = dpr
      canvas._cols = Math.max(4, Math.floor(canvas.offsetWidth  / CELL_PX))
      canvas._rows = Math.max(2, Math.floor(canvas.offsetHeight / CELL_PX))
      canvas.width  = canvas.offsetWidth  * dpr
      canvas.height = canvas.offsetHeight * dpr
      const { mirrors, ropes, ghost } = stateRef.current
      draw(canvas, mirrors, ropes, ghost)
    }
    size()
    const ro = new ResizeObserver(size)
    ro.observe(canvas)
    return () => ro.disconnect()
  }, [])

  // ── Redraw on state change ─────────────────────────────────────────────────
  useEffect(() => {
    draw(canvasRef.current, mirrors, ropes, ghost)
  }, [mirrors, ropes, ghost])

  // ── Hit tests ─────────────────────────────────────────────────────────────
  const getCell = useCallback((clientX, clientY) => {
    const canvas = canvasRef.current
    const rect   = canvas.getBoundingClientRect()
    const COLS   = canvas._cols || 4
    const ROWS   = canvas._rows || 2
    return {
      col: Math.max(0, Math.min(COLS - 1, Math.floor(((clientX - rect.left) / rect.width)  * COLS))),
      row: Math.max(0, Math.min(ROWS - 1, Math.floor(((clientY - rect.top)  / rect.height) * ROWS))),
    }
  }, [])

  const getIntersection = useCallback((clientX, clientY) => {
    const canvas = canvasRef.current
    const rect   = canvas.getBoundingClientRect()
    const COLS   = canvas._cols || 4
    const ROWS   = canvas._rows || 2
    return {
      col: Math.max(0, Math.min(COLS, Math.round(((clientX - rect.left) / rect.width)  * COLS))),
      row: Math.max(0, Math.min(ROWS, Math.round(((clientY - rect.top)  / rect.height) * ROWS))),
    }
  }, [])

  // ── Pointer handlers ───────────────────────────────────────────────────────
  const onDown = useCallback((cx, cy) => {
    const cell  = getCell(cx, cy)
    const inter = getIntersection(cx, cy)
    dragRef.current = { active: true, sc: cell.col, sr: cell.row, si_col: inter.col, si_row: inter.row, moved: false }
  }, [getCell, getIntersection])

  const onMove = useCallback((cx, cy) => {
    const d = dragRef.current
    if (!d.active) return
    const inter = getIntersection(cx, cy)
    if (inter.col !== d.si_col || inter.row !== d.si_row) {
      d.moved = true
      const snapped = snapEnd(d.si_col, d.si_row, inter.col, inter.row)
      setGhost({ c1: d.si_col, r1: d.si_row, c2: snapped.col, r2: snapped.row })
    }
  }, [getIntersection])

  const onUp = useCallback((cx, cy) => {
    const d = dragRef.current
    if (!d.active) return
    d.active = false
    setGhost(null)
    if (!d.moved) {
      const key = `${d.sc},${d.sr}`
      setMirrors(prev => { const n = new Set(prev); n.has(key) ? n.delete(key) : n.add(key); return n })
    } else {
      const inter   = getIntersection(cx, cy)
      const snapped = snapEnd(d.si_col, d.si_row, inter.col, inter.row)
      if (snapped.col !== d.si_col || snapped.row !== d.si_row)
        setRopes(prev => [...prev, { c1: d.si_col, r1: d.si_row, c2: snapped.col, r2: snapped.row }])
    }
  }, [getIntersection])

  // ── Event wiring ───────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const md = (e) => onDown(e.clientX, e.clientY)
    const mm = (e) => { if (e.buttons === 1) onMove(e.clientX, e.clientY) }
    const mu = (e) => onUp(e.clientX, e.clientY)
    const ts = (e) => { e.preventDefault(); const t = e.touches[0]; onDown(t.clientX, t.clientY) }
    const tm = (e) => { e.preventDefault(); const t = e.touches[0]; onMove(t.clientX, t.clientY) }
    const te = (e) => { e.preventDefault(); const t = e.changedTouches[0]; onUp(t.clientX, t.clientY) }
    canvas.addEventListener('mousedown',  md)
    window.addEventListener('mousemove',  mm)
    window.addEventListener('mouseup',    mu)
    canvas.addEventListener('touchstart', ts, { passive: false })
    canvas.addEventListener('touchmove',  tm, { passive: false })
    canvas.addEventListener('touchend',   te, { passive: false })
    return () => {
      canvas.removeEventListener('mousedown',  md)
      window.removeEventListener('mousemove',  mm)
      window.removeEventListener('mouseup',    mu)
      canvas.removeEventListener('touchstart', ts)
      canvas.removeEventListener('touchmove',  tm)
      canvas.removeEventListener('touchend',   te)
    }
  }, [onDown, onMove, onUp])

  const clear = () => { setMirrors(new Set()); setRopes([]); setGhost(null) }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <footer className="border-t border-border relative" style={{ cursor: 'crosshair' }}>

      {/* Canvas — absolute, fills entire footer, always shows beige + grid */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
      />

      <div className="relative z-10 pointer-events-none">

        {/* Header row — heading + labels left, social icons + reset right */}
        <div className="max-w-[864px] mx-auto w-full px-6 pt-8 pb-6 flex items-start justify-between gap-8">

          {/* Left: "Piece by piece" then Lippan art + instructions below */}
          <div>
            <h2 className="font-body font-medium text-h2 text-foreground leading-snug mb-2">
              Piece by piece, it becomes something.
            </h2>
            <p className="font-body text-[13px] font-medium text-foreground leading-snug">
              Lippan art · Kutch, India
            </p>
            <p className="font-body text-[13px] text-muted leading-snug hidden md:block">
              click to place a mirror · drag to lay rope
            </p>
            <p className="font-body text-[13px] text-muted leading-snug md:hidden">
              tap to place a mirror · drag to lay rope
            </p>
          </div>

          {/* Right: social icons, then reset button below */}
          <div className="flex flex-col items-end gap-3 shrink-0 pointer-events-auto">
            <nav className="flex items-center gap-5" aria-label="Social links">
              <a href="mailto:doshikhushbu04@gmail.com" className="hover:opacity-60 transition-opacity" aria-label="Email">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/logos/gmail-logo.png" alt="Email" width={28} height={28} className="w-7 h-7 object-contain" />
              </a>
              <a href="https://www.linkedin.com/in/khushbu-doshi-587283134/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity" aria-label="LinkedIn">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/logos/linkedin-logo.png" alt="LinkedIn" width={28} height={28} className="w-7 h-7 object-contain" />
              </a>
              <a href="https://x.com/Khushbu93892749" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity" aria-label="X">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/logos/twitter-logo.png" alt="X" width={28} height={28} className="w-7 h-7 object-contain" />
              </a>
            </nav>
            {/* Reset — no border, sits inside a canvas grid square */}
            <button
              onClick={clear}
              aria-label="Reset canvas"
              className="w-[30px] h-[30px] flex items-center justify-center text-foreground hover:text-[#C4622D] transition-colors"
            >
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
                <polyline points="21 3 21 8 16 8"/>
              </svg>
            </button>
          </div>

        </div>

        {/* Empty canvas space — 298 px (373 × 0.80) */}
        <div className="h-[298px]" />

      </div>
    </footer>
  )
}
