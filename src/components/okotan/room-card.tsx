import Image from 'next/image'
import { Button } from './button'

type RoomCardProps = {
  title: string
  descriptions: string[]
  imageSrc: string
}

export function RoomCard({ title, descriptions, imageSrc }: RoomCardProps) {
  return (
    <div className="isolate flex flex-col items-center pb-[370px]">
      <div className="relative z-[2] mb-[-370px] h-[720px] w-[720px] shrink-0 overflow-hidden rounded-full lg:h-[755px] lg:w-[755px]">
        <Image
          src={imageSrc}
          alt={title}
          width={755}
          height={755}
          className="h-full w-full object-cover"
        />
        <div className="absolute left-4 top-[336px] z-10 flex w-[688px] items-center justify-between lg:top-[354px] lg:w-[723px]">
          <button className="flex h-12 w-12 items-center justify-center opacity-40" aria-label="Назад">
            <img src="/icons/arrow-slider-left.svg" alt="" width={48} height={48} className="invert" />
          </button>
          <button className="flex h-12 w-12 items-center justify-center" aria-label="Вперёд">
            <img src="/icons/arrow-slider-right.svg" alt="" width={48} height={48} className="invert" />
          </button>
        </div>
      </div>
      <div className="relative z-[1] mb-[-370px] flex w-full flex-col gap-10 pb-10 pl-[130px] pr-[80px] pt-[410px] lg:pb-[100px] lg:pl-[150px]">
        <div className="flex w-[500px] max-w-full flex-col gap-6">
          <h3 className="font-[family-name:var(--font-display)] text-[40px] leading-[1.2] text-[var(--ok-dark)]">
            {title}
          </h3>
          <div className="flex flex-col gap-4">
            {descriptions.map((text, i) => (
              <p key={i} className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-dark)]">
                {text}
              </p>
            ))}
          </div>
        </div>
        <Button variant="tertiary">Подробнее</Button>
      </div>
    </div>
  )
}
