'use client'

import { useEffect } from 'react'

/** Текст заголовка → id контентного блока, после которого скрывать */
const TITLE_TO_CONTENT: Record<string, string> = {
  номера: 'rooms-content',
  ресторан: 'restaurant-content',
  спецпредложения: 'offers-content',
  'специальные предложения': 'offers-content',
  услуги: 'services-content',
}

const normalize = (s: string) => s.replace(/\s+/g, ' ').trim().toLowerCase()

function shouldHide(content: HTMLElement | null): boolean {
  if (!content) return false
  const rect = content.getBoundingClientRect()
  return rect.bottom < 100
}

/**
 * Ищет по тексту заголовка и скрывает sticky-секцию,
 * когда соответствующий контент ушёл за экран.
 */
export function HideDuplicateTitles() {
  useEffect(() => {
    let raf: number
    const tick = () => {
      document.querySelectorAll<HTMLElement>('h2').forEach((h2) => {
        const text = normalize(h2.textContent || '')
        const contentId = TITLE_TO_CONTENT[text]
        if (!contentId) return
        const sticky = h2.closest<HTMLElement>('.sticky.top-0')
        if (!sticky) return
        const content = document.getElementById(contentId)
        const hide = shouldHide(content)
        sticky.style.visibility = hide ? 'hidden' : 'visible'
        sticky.style.opacity = hide ? '0' : '1'
        sticky.style.pointerEvents = hide ? 'none' : 'auto'
      })

      document.querySelectorAll<HTMLElement>('[data-hide-when-content]').forEach((el) => {
        const contentId = el.getAttribute('data-hide-when-content')
        const content = contentId ? document.getElementById(contentId) : null
        const hide = shouldHide(content)
        el.style.visibility = hide ? 'hidden' : 'visible'
        el.style.opacity = hide ? '0' : '1'
        el.style.pointerEvents = hide ? 'none' : 'auto'
      })

      document.querySelectorAll<HTMLElement>('[data-hide-spacer-after]').forEach((el) => {
        const contentId = el.getAttribute('data-hide-spacer-after')
        const content = contentId ? document.getElementById(contentId) : null
        const hide = shouldHide(content)
        el.style.visibility = hide ? 'hidden' : 'visible'
        el.style.display = hide ? 'none' : 'block'
      })

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])
  return null
}
