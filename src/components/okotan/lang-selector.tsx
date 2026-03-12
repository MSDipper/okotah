'use client'

/**
 * LangSelector — locale dropdown for header and modal.
 *
 * Figma design ref: https://www.figma.com/design/Dgfg0OjSUfPlkMF49h6R8y/Untitled?node-id=58-1607
 * When Figma access is available, verify:
 * - Trigger: padding, gap, icon size (16px), typography (font-body, 16px/18px)
 * - Transparent header: glass (backdrop-blur ~7px, bg white/10), rounded-lg, border white/20
 * - Scrolled header: solid --ok-dark, border white/10, rounded-lg
 * - Dropdown items: padding, hover states, spacing
 */

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const LANGUAGES = [
  { code: 'RU', icon: '/icons/Frame.svg' },
  { code: 'EN', icon: '/icons/en.svg' },
  { code: 'CH', icon: '/icons/ch.svg' },
] as const

type LangSelectorProps = {
  variant?: 'header' | 'modal'
  /** Dark dropdown background when header is scrolled (dark). Transparent header uses glass/backdrop-blur. */
  scrolled?: boolean
}

export function LangSelector({ variant = 'header', scrolled = false }: LangSelectorProps) {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState<(typeof LANGUAGES)[number]>(LANGUAGES[0])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const isModal = variant === 'modal'
  const useDarkDropdown = isModal || scrolled

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Язык: ${current.code}`}
        className={`flex items-center justify-center gap-2 font-[family-name:var(--font-body)] text-base leading-[1.2] text-[var(--ok-white)] transition-opacity hover:opacity-90 ${
          isModal ? 'rounded-none px-0 py-0' : 'rounded-lg px-3 py-4 pb-[18px] md:px-4'
        }`}
      >
        <span className={`relative shrink-0 overflow-hidden rounded-full ${isModal ? 'h-3.5 w-3.5' : 'h-4 w-4'}`}>
          <Image src={current.icon} alt="" width={16} height={16} className="h-full w-full object-cover" />
        </span>
        <span>{current.code}</span>
        <Image
          src="/icons/chevron-down.svg"
          alt=""
          width={isModal ? 12 : 16}
          height={isModal ? 12 : 16}
          className={`shrink-0 brightness-0 invert transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div
          role="listbox"
          className={`absolute right-0 z-50  flex min-w-[88px] flex-col items-center justify-center overflow-hidden gap-3 h-[84px] py-2 shadow-lg ${
            useDarkDropdown
              ? ' bg-[var(--ok-dark)]'
              : '/20 bg-[var(--ok-white-10)] backdrop-blur-[1px]'
          }`}
        >
          {LANGUAGES.filter((lang) => lang.code !== current.code).map((lang) => (
            <button
              key={lang.code}
              role="option"
              type="button"
              onClick={() => {
                setCurrent(lang)
                setOpen(false)
              }}
              className={`flex w-full items-center justify-center gap-2 px-4 py-2 h-6 transition-colors ${
                useDarkDropdown ? 'hover:bg-white/15' : 'hover:bg-white/20'
              }`}
            >
              <span className="relative h-4 w-4 shrink-0 overflow-hidden rounded-full">
                <Image src={lang.icon} alt="" width={16} height={16} className="h-full w-full object-cover" />
              </span>
              <span className="font-[family-name:var(--font-body)] text-base leading-[1.2] text-[var(--ok-white)]">
                {lang.code}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
