'use client'

import Image from 'next/image'
import { useInView } from './use-in-view'

type ServiceCardProps = {
  title: string
  imageSrc: string
}

export function ServiceCard({ title, imageSrc }: ServiceCardProps) {
  const { ref, inView } = useInView<HTMLAnchorElement>(0.15)

  return (
    <a
      ref={ref}
      href="#"
      className="group relative block h-[360px] w-full overflow-hidden"
      style={{
        transform: inView ? 'scale(1)' : 'scale(1.08)',
        opacity: inView ? 1 : 0,
        transition: 'transform 1s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s ease',
      }}
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-10 left-10">
        <span className="font-[family-name:var(--font-display)] text-[26px] leading-[1.2] text-[var(--ok-white)] lg:text-[28px] xl:text-[30px] 2xl:text-[32px]">
          {title}
        </span>
      </div>
    </a>
  )
}
