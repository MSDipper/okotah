'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

function CookieConsentContent({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100] md:bottom-[280px] md:left-[40px] md:right-auto lg:bottom-10 lg:left-auto lg:right-10">
      <div className="flex items-end gap-4 bg-[var(--ok-white)] p-6">
        <p className="w-[261px] font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-dark)]">
          Для улучшения пользовательского опыта, мы{'\u00A0'}используем <span className="underline">файлы cookie</span>
        </p>
        <button
          onClick={onClose}
          className="shrink-0 bg-[var(--ok-red)] px-6 py-[14px] pb-[15px] font-[family-name:var(--font-body)] text-base leading-[1.2] text-[var(--ok-white)] transition-opacity hover:opacity-90"
        >
          Хорошо
        </button>
      </div>
    </div>
  )
}

export function CookieConsent() {
  const [visible, setVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !visible) return null

  return createPortal(
    <CookieConsentContent onClose={() => setVisible(false)} />,
    document.body
  )
}
