'use client'

import type { ReactNode } from 'react'
import { ThemeProvider } from './theme-provider'
import { SmoothScrollProvider } from './smooth-scroll-provider'

interface AppProvidersProps {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </ThemeProvider>
  )
}
