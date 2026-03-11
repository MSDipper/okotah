'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from './button'
import { useOpenModal } from './modal-context'

type RoomCardProps = {
  title: string
  descriptions: string[]
  imageSrc: string
  showArrows?: boolean
  allImages?: string[]
}

export function RoomCard({ title, descriptions, imageSrc, showArrows, allImages }: RoomCardProps) {
  const openModal = useOpenModal()
  const images = allImages && allImages.length > 0 ? allImages : [imageSrc]
  const [currentIndex, setCurrentIndex] = useState(0)
  const displaySrc = images[currentIndex]

  return (
    <div className="isolate flex flex-col items-center pb-[370px]">
      <div className="relative z-[2] mb-[-370px] h-[720px] w-[720px] shrink-0 overflow-hidden rounded-full lg:h-[755px] lg:w-[755px]">
        <Image
          src={displaySrc}
          alt={title}
          width={755}
          height={755}
          className="h-full w-full object-cover"
        />
        {showArrows && (
          <div className="absolute left-4 top-[336px] z-10 flex w-[688px] items-center justify-between lg:top-[354px] lg:w-[723px]">
            <button
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              className={`flex h-12 w-12 items-center justify-center transition-opacity ${currentIndex === 0 ? 'opacity-30' : 'opacity-100'}`}
              disabled={currentIndex === 0}
              aria-label="Назад"
            >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="rotate-180">
                <path d="M15 24L32 24M32 24C32 24 26.5 26 26.5 30M32 24C32 24 26.5 22 26.5 18" stroke="white"/>
                <circle cx="24" cy="24" r="23.5" stroke="#FFFDFA"/>
              </svg>
            </button>
            <button
              onClick={() => setCurrentIndex((i) => Math.min(images.length - 1, i + 1))}
              className={`flex h-12 w-12 items-center justify-center transition-opacity ${currentIndex === images.length - 1 ? 'opacity-30' : 'opacity-100'}`}
              disabled={currentIndex === images.length - 1}
              aria-label="Вперёд"
            >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M15 24L32 24M32 24C32 24 26.5 26 26.5 30M32 24C32 24 26.5 22 26.5 18" stroke="white"/>
                <circle cx="24" cy="24" r="23.5" stroke="#FFFDFA"/>
              </svg>
            </button>
          </div>
        )}
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
        <Button variant="tertiary" onClick={openModal}>Подробнее</Button>
      </div>
    </div>
  )
}
