'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from './use-in-view'

type SectionTitleProps = {
  text: string
  color?: 'dark' | 'light'
  className?: string
  /** Буква в italic (например "о" для «номера») */
  italicLetter?: string
  /** При скролле плавно смещает заголовок влево или вправо */
  drift?: 'left' | 'right'
  /** Интенсивность смещения — множитель дельты скролла (по умолчанию 0.3) */
  driftIntensive?: number
  /** Задержка перед активацией drift после появления в viewport, мс (по умолчанию 600) */
  driftDelay?: number
  /**
   * При скролле выстраивает буквы лесенкой по вертикали.
   * end   — левые буквы вниз, правые вверх
   * start — левые буквы вверх, правые вниз
   */
  verticalDrift?: 'end' | 'start'
  /**
   * При скролле масштабирует весь заголовок.
   * Множитель изменения scale на пиксель скролла (например 0.001).
   * Положительное значение — заголовок растёт при скролле вниз.
   * Работает совместно с drift.
   */
  driftScale?: number
}

export function SectionTitle({
  text,
  color = 'dark',
  className = '',
  italicLetter,
  drift,
  driftIntensive = 0.3,
  driftDelay = 600,
  verticalDrift,
  driftScale,
}: SectionTitleProps) {
  const { ref, inView } = useInView<HTMLHeadingElement>(0.3)
  const h2El = useRef<HTMLHeadingElement | null>(null)
  const spanRefs = useRef<(HTMLSpanElement | null)[]>([])

  // horizontal drift
  const targetOffsetRef = useRef(0)
  const currentOffsetRef = useRef(0)

  // vertical drift
  const vTargetRef = useRef(0)
  const vCurrentRef = useRef(0)

  // scale drift
  const scaleTargetRef = useRef(0)
  const scaleCurrentRef = useRef(0)

  const prevScrollRef = useRef(0)
  const rafRef = useRef<number>(0)
  const [driftActive, setDriftActive] = useState(false)

  const setRefs = (node: HTMLHeadingElement | null) => {
    h2El.current = node
    ;(ref as React.MutableRefObject<HTMLHeadingElement | null>).current = node
  }

  const chars = text.split('')
  const n = chars.length

  useEffect(() => {
    if ((!drift && !verticalDrift && !driftScale) || !inView) return
    const timer = setTimeout(() => {
      prevScrollRef.current = window.scrollY
      setDriftActive(true)
    }, driftDelay)
    return () => clearTimeout(timer)
  }, [drift, verticalDrift, driftScale, inView, driftDelay])

  useEffect(() => {
    if ((!drift && !verticalDrift && !driftScale) || !driftActive) return
    const el = h2El.current
    if (!el) return

    const hDirection = drift === 'right' ? 1 : drift === 'left' ? -1 : 0

    const onScroll = () => {
      const currentScroll = window.scrollY
      const delta = currentScroll - prevScrollRef.current
      prevScrollRef.current = currentScroll
      if (drift) targetOffsetRef.current += delta * driftIntensive * hDirection
      if (verticalDrift) vTargetRef.current += delta * driftIntensive
      if (driftScale) scaleTargetRef.current += delta * driftScale
    }

    const tick = () => {
      currentOffsetRef.current += (targetOffsetRef.current - currentOffsetRef.current) * 0.08
      scaleCurrentRef.current += (scaleTargetRef.current - scaleCurrentRef.current) * 0.08

      const tx = drift ? `translateX(${currentOffsetRef.current.toFixed(2)}px)` : ''
      const sc = driftScale ? `scale(${(1 + scaleCurrentRef.current).toFixed(4)})` : ''
      if (drift || driftScale) el.style.transform = `${tx} ${sc}`.trim()

      if (verticalDrift) {
        vCurrentRef.current += (vTargetRef.current - vCurrentRef.current) * 0.08
        spanRefs.current.forEach((span, i) => {
          if (!span) return
          const pos = n > 1 ? i / (n - 1) : 0.5
          const mult = verticalDrift === 'end' ? 0.5 - pos : pos - 0.5
          span.style.transform = `translateY(${(vCurrentRef.current * mult).toFixed(2)}px)`
        })
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [drift, verticalDrift, driftScale, driftIntensive, driftActive, n])

  return (
    <h2
      ref={setRefs}
      className={`w-full text-center font-[family-name:var(--font-display)] text-[80px] font-normal uppercase leading-[1.247] tracking-[-0.04em] lg:text-[65px] xl:text-[75px] 2xl:text-[100px] ${
        color === 'dark' ? 'text-[var(--ok-dark)]' : 'text-[var(--ok-white)]'
      } ${className}`}
    >
      {chars.map((char, i) => {
        const isItalic = !!(italicLetter && (char === italicLetter || char === italicLetter.toUpperCase()))
        return (
          // Внешний span: JS-контролируемый verticalDrift (не конфликтует с React-стилями внутри)
          <span
            key={i}
            ref={verticalDrift ? (node) => { spanRefs.current[i] = node } : undefined}
            className={`inline-block ${isItalic ? 'italic -ml-[7px] mr-[8px]' : ''}`}
          >
            {/* Внутренний span: React-контролируемая inView-анимация */}
            <span
              className="inline-block"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(60px)',
                transition: `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.04}s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.04}s`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          </span>
        )
      })}
    </h2>
  )
}
