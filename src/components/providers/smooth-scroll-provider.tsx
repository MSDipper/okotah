'use client'

import { useEffect } from 'react'
import type { ReactNode } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'

// Максимальная дельта за один тик колеса (ограничение скорости)
const MAX_DELTA = 90
// Сколько нужно "намотать" колесом, прежде чем страница начнёт скроллиться
const INERTIA_THRESHOLD = 1
// Миллисекунд бездействия — после этого инерция сбрасывается
const IDLE_MS = 300
// Мышиное колесо обычно даёт крупные дискретные тики (≥ 40); трекпад — мелкие
const MOUSE_WHEEL_MIN_DELTA = 40

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: false,
    })

    let accumulated = 0
    let inMotion = false
    let targetScroll = 0
    let idleTimer: ReturnType<typeof setTimeout>

    const tickFn = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tickFn)
    gsap.ticker.lagSmoothing(0)

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()

      const rawDelta = e.deltaY
      const cappedDelta = Math.sign(rawDelta) * Math.min(Math.abs(rawDelta), MAX_DELTA)
      const isMouseWheel = Math.abs(rawDelta) >= MOUSE_WHEEL_MIN_DELTA

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight

      if (isMouseWheel) {
        // Мышиное колесо: ждём накопления инерции перед стартом
        accumulated += cappedDelta

        clearTimeout(idleTimer)
        idleTimer = setTimeout(() => {
          accumulated = 0
          inMotion = false
        }, IDLE_MS)

        if (!inMotion) {
          if (Math.abs(accumulated) < INERTIA_THRESHOLD) return
          inMotion = true
          targetScroll = lenis.scroll
        }

        targetScroll = Math.max(0, Math.min(maxScroll, targetScroll + cappedDelta))
        lenis.scrollTo(targetScroll, { immediate: false })
      } else {
        // Трекпад: прямая передача со скоростным ограничением, без порога
        targetScroll = Math.max(0, Math.min(maxScroll, (targetScroll || lenis.scroll) + cappedDelta))
        lenis.scrollTo(targetScroll, { immediate: false })
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      lenis.destroy()
      gsap.ticker.remove(tickFn)
      window.removeEventListener('wheel', onWheel)
      clearTimeout(idleTimer)
    }
  }, [])

  return <>{children}</>
}
