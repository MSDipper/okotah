'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const LANGUAGES = [
  { code: 'RU', icon: '/icons/Frame.svg' },
  { code: 'EN', icon: '/icons/en.svg' },
  { code: 'CH', icon: '/icons/ch.svg' },
] as const

type LangSelectorProps = {
  variant?: 'header' | 'modal'
}

export function LangSelector({ variant = 'header' }: LangSelectorProps) {
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

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-center gap-1.5 ${isModal ? 'rounded-none px-0 py-0' : 'rounded-[4px] px-4 py-4 pb-[18px]'}`}
      >
        <span className={`relative shrink-0 overflow-hidden rounded-full ${isModal ? 'h-[14px] w-[14px]' : 'h-4 w-4'}`}>
          <Image src={current.icon} alt="" width={16} height={16} className="h-full w-full object-cover" />
        </span>
        <span className={`font-[family-name:var(--font-body)] leading-[1.2] ${isModal ? 'text-base text-[var(--ok-white)]' : 'text-lg text-[var(--ok-white)]'}`}>
          {current.code}
        </span>
        <Image
          src="/icons/chevron-down.svg"
          alt=""
          width={isModal ? 12 : 16}
          height={isModal ? 12 : 16}
          className={`brightness-0 invert transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div
          className={`absolute right-0 z-50 flex w-[82px] flex-col items-center justify-center gap-1 bg-[var(--ok-dark)] ${isModal ? 'top-[calc(100%+8px)]' : 'top-full'}`}
        >
          {LANGUAGES.filter((lang) => lang.code !== current.code).map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                setCurrent(lang)
                setOpen(false)
              }}
              className="flex items-center justify-center gap-2 w-full mx-auto py-1.5 transition-opacity  hover:bg-[#ffffff38]"
            >
              <span className="relative h-4 w-4 shrink-0 overflow-hidden rounded-full">
                <Image src={lang.icon} alt="" width={16} height={16} className="h-full w-full object-cover" />
              </span>
              <span className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-white)]">
                {lang.code}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
