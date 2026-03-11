import Image from 'next/image'

type PdfLinkProps = {
  text: string
  href?: string
}

export function PdfLink({ text, href = '#' }: PdfLinkProps) {
  return (
    <a
      href={href}
      className="flex items-start gap-1 border border-[var(--ok-white-30)] p-4 transition-opacity hover:opacity-80 w-[225px]"
    >
      <span className="flex flex-1 flex-col gap-1">
        <span className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-white)]">
          {text}
        </span>
        <span className="flex justify-end">
          <Image src="/icons/icon-pdf.svg" alt="" width={40} height={40} />
        </span>
      </span>
    </a>
  )
}
