import type { ReactNode } from 'react'
import { Header } from '@/components/okotan'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
