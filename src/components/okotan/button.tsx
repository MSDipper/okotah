import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import Image from 'next/image'

type Variant = 'primary' | 'secondary' | 'tertiary'

type BaseProps = {
  variant?: Variant
  children: React.ReactNode
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<Variant, string> = {
  primary:
    'inline-flex items-center justify-center gap-2 bg-[var(--ok-red)] text-[var(--ok-white)] px-6 py-4 pb-[18px] font-[var(--font-body)] text-lg leading-[1.2] transition-opacity hover:opacity-90',
  secondary:
    'inline-flex items-center justify-center gap-2 border border-solid border-[color:var(--ok-white)] text-[var(--ok-white)] px-6 py-4 pb-[18px] font-[var(--font-body)] text-lg leading-[1.2] transition-opacity hover:opacity-80',
  tertiary:
    'inline-flex flex-col items-start gap-1 font-[var(--font-body)] text-lg leading-[1.2] text-[var(--ok-red)] transition-opacity hover:opacity-80',
}

export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  const className = `${variantStyles[variant]} ${(props as Record<string, string>).className || ''}`.trim()

  if (variant === 'tertiary') {
    const inner = (
      <span className="flex flex-col gap-1">
        <span>{children}</span>
        <Image src="/icons/arrow-link.svg" alt="" width={97} height={1} className="w-full" />
      </span>
    )

    if ('href' in props && props.href) {
      const { href, ...rest } = props as ButtonAsLink
      return (
        <a href={href} className={className} {...rest}>
          {inner}
        </a>
      )
    }
    return (
      <button className={className} {...(props as ButtonAsButton)}>
        {inner}
      </button>
    )
  }

  if ('href' in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={className} {...(props as ButtonAsButton)}>
      {children}
    </button>
  )
}
