import { Inter, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'

export const fontSans = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-sans',
})

export const fontMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-mono',
})

export const fontBody = localFont({
  src: [
    {
      path: '../../public/font/pragmatica_book.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-body',
})

export const fontDisplay = localFont({
  src: [
    {
      path: '../../public/font/pragmatica_extended-book.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-display',
})
