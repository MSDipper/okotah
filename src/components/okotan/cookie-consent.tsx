'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'motion/react'

const STORAGE_KEY = 'cookie-consent-accepted'

function CookieConsentContent({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 left-6 right-6 z-[100] md:bottom-[280px] md:left-[40px] md:right-auto lg:bottom-10 lg:left-auto lg:right-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
    }
  }, [])

  const handleClose = () => {
    setVisible(false)
    localStorage.setItem(STORAGE_KEY, '1')
  }

  if (!mounted) return null

  return createPortal(
    <CookieConsentContent visible={visible} onClose={handleClose} />,
    document.body
  )
}
