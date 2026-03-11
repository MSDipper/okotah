import Image from 'next/image'

type MenuItemProps = {
  text: string
  href?: string
  hasChevron?: boolean
  color?: 'white' | 'dark'
}

export function MenuItem({ text, href = '#', hasChevron = false, color = 'white' }: MenuItemProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 py-[10px] font-[family-name:var(--font-body)] text-lg leading-[1.2] transition-opacity hover:opacity-70 ${
        color === 'white' ? 'text-[var(--ok-white)]' : 'text-[var(--ok-dark)]'
      }`}
    >
      {text}
      {hasChevron && (
        <Image
          src="/icons/chevron-down.svg"
          alt=""
          width={16}
          height={16}
          className={color === 'white' ? 'invert' : ''}
        />
      )}
    </a>
  )
}
