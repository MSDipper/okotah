'use client'

import { useRef, useEffect, type ReactNode } from 'react'

function wavyEllipsePath(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  t: number,
  waves = 6,
  amp = 14,
  pts = 64,
): string {
  if (rx <= 0 || ry <= 0) return 'M0,0Z'
  let d = ''
  for (let i = 0; i <= pts; i++) {
    const a = (i / pts) * Math.PI * 2
    const w = Math.sin(a * waves + t) * amp
    const x = cx + (rx + w) * Math.cos(a)
    const y = cy + (ry + w) * Math.sin(a)
    d += (i === 0 ? 'M' : 'L') + `${x.toFixed(1)},${y.toFixed(1)}`
  }
  return d + 'Z'
}

type CircleRevealSectionProps = {
  children: ReactNode
  className?: string
  zIndex?: number
  noReveal?: boolean
}

export function CircleRevealSection({
  children,
  className = '',
  zIndex = 1,
  noReveal = false,
}: CircleRevealSectionProps) {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const openRef = useRef(noReveal)
  const clipId = `reveal-clip-${zIndex}`

  useEffect(() => {
    if (noReveal) return
    const sentinel = sentinelRef.current
    const content = contentRef.current
    const pathEl = pathRef.current
    if (!sentinel || !content || !pathEl) return

    let raf: number
    const update = () => {
      const vh = window.innerHeight
      const vw = window.innerWidth
      const sRect = sentinel.getBoundingClientRect()
      const cRect = content.getBoundingClientRect()

      const scrolled = Math.max(0, -sRect.top)
      const radius = scrolled * 3.5
      const diag = Math.sqrt(vw * vw + vh * vh) / 2

      const cx = cRect.width / 2
      const cy = vh / 2

      if (radius > diag) {
        if (!openRef.current) {
          openRef.current = true
          content.style.clipPath = 'none'
          content.style.willChange = 'auto'
        }
      } else {
        openRef.current = false
        const t = performance.now() / 600
        pathEl.setAttribute('d', wavyEllipsePath(cx, cy, radius, radius, t))
        content.style.clipPath = `url(#${clipId})`
        content.style.willChange = 'clip-path'
      }
      raf = requestAnimationFrame(update)
    }
    raf = requestAnimationFrame(update)
    return () => cancelAnimationFrame(raf)
  }, [noReveal, clipId])

  if (noReveal) {
    return (
      <>
        <div className="pointer-events-none h-0" aria-hidden="true" />
        <div className={`sticky top-0 ${className}`} style={{ zIndex }}>
          {children}
        </div>
      </>
    )
  }

  return (
    <>
      <div ref={sentinelRef} className="pointer-events-none h-0" aria-hidden="true" />
      <svg className="pointer-events-none absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <defs>
          <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
            <path ref={pathRef} />
          </clipPath>
        </defs>
      </svg>
      <div
        ref={contentRef}
        className={`sticky top-0 ${className}`}
        style={{ zIndex, clipPath: 'ellipse(0px 0px at 50% 50%)' }}
      >
        {children}
      </div>
    </>
  )
}
