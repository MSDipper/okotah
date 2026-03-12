import Image from 'next/image'

type MenuItemProps = {
  text: string
  href?: string
  hasChevron?: boolean
  color?: 'white' | 'dark'
  size?: 'xs' | 'sm' | 'md'
}

export function MenuItem({ text, href = '#', hasChevron = false, color = 'white', size = 'md' }: MenuItemProps) {
  const sizeClass = size === 'xs' ? 'whitespace-nowrap py-[6px] text-[13px] lg:text-[18px]' : size === 'sm' ? 'whitespace-nowrap py-[6px] text-sm' : 'py-[10px] text-lg'
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 font-[family-name:var(--font-body)] leading-[1.2] transition-opacity hover:opacity-70 ${sizeClass} ${
        color === 'white' ? 'text-[var(--ok-white)]' : 'text-[var(--ok-dark)]'
      }`}
    >
      {text}
      {hasChevron && (
        <Image
          src="/icons/chevron-down.svg"
          alt=""
          width={12}
          height={12}
          className={`shrink-0 ${color === 'white' ? 'invert' : ''}`}
        />
      )}
    </a>
  )
}
