'use client'

import { useInView } from './use-in-view'

type SectionTitleProps = {
  text: string
  color?: 'dark' | 'light'
  className?: string
}

export function SectionTitle({ text, color = 'dark', className = '' }: SectionTitleProps) {
  const { ref, inView } = useInView<HTMLHeadingElement>(0.3)
  const chars = text.split('')

  return (
    <h2
      ref={ref}
      className={`w-full text-center font-[family-name:var(--font-display)] text-[80px] font-normal uppercase leading-[1.247] tracking-[-0.04em] lg:text-[65px] xl:text-[75px] 2xl:text-[100px] ${
        color === 'dark' ? 'text-[var(--ok-dark)]' : 'text-[var(--ok-white)]'
      } ${className}`}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(60px)',
            transition: `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.04}s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.04}s`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h2>
  )
}
