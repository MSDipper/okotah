'use client'

import { useOpenModal } from './modal-context'

export function BookButton({ className, children }: { className?: string; children: React.ReactNode }) {
  const openModal = useOpenModal()

  return (
    <button onClick={openModal} className={className}>
      {children}
    </button>
  )
}
