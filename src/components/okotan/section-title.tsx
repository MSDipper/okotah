type SectionTitleProps = {
  text: string
  color?: 'dark' | 'light'
  className?: string
}

export function SectionTitle({ text, color = 'dark', className = '' }: SectionTitleProps) {
  return (
    <h2
      className={`w-full text-center font-[family-name:var(--font-display)] text-[80px] font-normal uppercase leading-[1.247] tracking-[-0.04em] lg:text-[100px] ${
        color === 'dark' ? 'text-[var(--ok-dark)]' : 'text-[var(--ok-white)]'
      } ${className}`}
    >
      {text}
    </h2>
  )
}
