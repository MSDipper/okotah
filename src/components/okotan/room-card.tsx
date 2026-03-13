'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Button } from './button'
import { useOpenModal } from './modal-context'
import { useInView } from './use-in-view'

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
  const { ref: revealRef, inView } = useInView(0.15)
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = parallaxRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const viewCenter = window.innerHeight / 2
      setOffsetY((center - viewCenter) * 0.2)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={revealRef} className="isolate flex flex-col items-center pb-[220px] lg:pb-[263px] xl:pb-[263px] 2xl:pb-[378px]">
      <div
        ref={parallaxRef}
        className="relative z-[2] mb-[-220px] h-[420px] w-[420px] shrink-0 overflow-hidden rounded-full lg:mb-[-262px] lg:min-h-[525px] lg:min-w-[525px] lg:h-[525px] lg:w-[525px] xl:mb-[-262px] xl:min-h-[525px] xl:min-w-[525px] xl:h-[525px] xl:w-[525px] 2xl:mb-[-378px] 2xl:h-[755px] 2xl:w-[755px]"
        style={{
          transform: inView ? 'scale(1)' : 'scale(0)',
          transition: 'transform 1.2s cubic-bezier(0.65, 0, 0.35, 1)',
        }}
      >
        <Image
          src={displaySrc}
          alt={title}
          width={755}
          height={755}
          className="h-full w-full object-cover"
          style={{ transform: `translateY(${offsetY}px)`, transition: 'transform 0.1s linear' }}
        />
        {showArrows && (
          <div className="absolute left-4 top-[170px] z-10 flex w-[calc(100%-32px)] max-w-[380px] items-center justify-between lg:top-[262px] lg:max-w-[495px] xl:top-[262px] xl:max-w-[495px] 2xl:top-[370px] 2xl:max-w-[720px]">
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
      <div className="relative z-[1] mb-[-220px] flex w-full flex-col gap-10 pb-10 pl-[60px] pr-[40px] pt-[250px] lg:mb-[-262px] lg:pl-[60px] lg:pr-[60px] lg:pt-[290px] xl:mb-[-262px] xl:pl-[70px] xl:pr-[70px] xl:pt-[290px] 2xl:mb-[-378px] 2xl:pl-[90px] 2xl:pr-[90px] 2xl:pt-[400px]">
        <div className="flex w-full max-w-[500px] flex-col gap-6">
          <h3 className="font-[family-name:var(--font-display)] text-[32px] leading-[1.2] text-[var(--ok-dark)] lg:text-[28px] xl:text-[30px] 2xl:text-[40px]">
            {title}
          </h3>
          <div className="flex flex-col gap-4">
            {descriptions.map((text, i) => (
              <p key={i} className="font-[family-name:var(--font-body)] text-[18px] leading-[1.2] text-[var(--ok-dark)]">
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
