import Image from 'next/image'

type ServiceCardProps = {
  title: string
  imageSrc: string
}

export function ServiceCard({ title, imageSrc }: ServiceCardProps) {
  return (
    <a href="#" className="group relative block h-[360px] w-full overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-10 left-10">
        <span className="font-[family-name:var(--font-display)] text-[32px] leading-[1.2] text-[var(--ok-white)]">
          {title}
        </span>
      </div>
    </a>
  )
}
