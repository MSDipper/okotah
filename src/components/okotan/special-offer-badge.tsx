import Image from 'next/image'

type SpecialOfferBadgeProps = {
  text: string
}

export function SpecialOfferBadge({ text }: SpecialOfferBadgeProps) {
  return (
    <div className="flex w-[239px] flex-col justify-center gap-4 rounded-none bg-[var(--ok-white-10)] p-4 backdrop-blur-[7px]">
      <Image src="/icons/special-offer-icon.svg" alt="" width={207} height={40} className="w-full" />
      <span className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-white)]">
        {text}
      </span>
    </div>
  )
}
