'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { ModalForm } from './modal-form'

const ModalContext = createContext<() => void>(() => {})

export function useOpenModal() {
  return useContext(ModalContext)
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ModalContext.Provider value={() => setIsOpen(true)}>
      {children}
      <ModalForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ModalContext.Provider>
  )
}
