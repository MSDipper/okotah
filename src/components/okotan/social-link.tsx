import Image from 'next/image'

type SocialLinkProps = {
  text: string
  href?: string
}

export function SocialLink({ text, href = '#' }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-[6px] py-[10px] font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-white)] transition-opacity hover:opacity-70"
    >
      {text}
      <Image src="/icons/social-arrow.svg" alt="" width={20} height={20} />
    </a>
  )
}
