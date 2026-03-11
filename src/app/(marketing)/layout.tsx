import type { ReactNode } from 'react'
import { Header, ModalProvider } from '@/components/okotan'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      <Header />
      <main>{children}</main>
    </ModalProvider>
  )
}
