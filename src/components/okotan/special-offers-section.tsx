'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { SliderControls } from './slider-controls'
import { Button } from './button'
import { useOpenModal } from './modal-context'
import { useInView } from './use-in-view'

const OFFERS = [
  {
    title: 'Раннее бронирование',
    description: 'Забронируйте номер за 2 месяца до даты заезда и\u00A0получите скидку 15%.',
  },
  {
    title: 'Длительное проживание',
    description: 'При бронировании от 7 ночей — скидка 20% на всё проживание.',
  },
  {
    title: 'Романтический пакет',
    description: 'Бутылка шампанского, лепестки роз и поздний выезд для пар.',
  },
  {
    title: 'СПА-пакет',
    description: 'Бронируйте номер с включённым посещением СПА-центра.',
  },
  {
    title: 'Семейный отдых',
    description: 'Дети до 7 лет проживают бесплатно на существующих кроватях.',
  },
  {
    title: 'Бизнес-пакет',
    description: 'Трансфер из аэропорта, завтрак и доступ в конференц-зону.',
  },
]

export function SpecialOffersSection() {
  const [current, setCurrent] = useState(0)
  const openModal = useOpenModal()
  const { ref, inView } = useInView(0.15)
  const offer = OFFERS[current]

  const svgRef = useRef<HTMLDivElement>(null)
  const blockRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const mouseTargetRef = useRef({ x: 0, y: 0 })
  const mouseCurrentRef = useRef({ x: 0, y: 0 })
  const scaleTargetRef = useRef(1)
  const scaleCurrentRef = useRef(1)
  const rafRef = useRef<number>(0)
  const svgInViewRef = useRef(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2
      const ny = (e.clientY / window.innerHeight - 0.5) * 2
      mouseTargetRef.current = { x: nx * 18, y: ny * 12 }
    }

    const tick = () => {
      // --- parallax ---
      const mt = mouseTargetRef.current
      const mc = mouseCurrentRef.current
      mc.x += (mt.x - mc.x) * 0.06
      mc.y += (mt.y - mc.y) * 0.06

      // --- scale from scroll ---
      const block = blockRef.current
      if (block) {
        const rect = block.getBoundingClientRect()
        const vh = window.innerHeight
        const isInView = rect.bottom > 0 && rect.top < vh

        if (isInView) {
          svgInViewRef.current = true
          // progress: 0 когда центр блока = центру viewport, растёт по мере скролла вниз
          const blockCenter = rect.top + rect.height / 2
          const progress = Math.max(0, vh / 2 - blockCenter) / (vh * 0.5)
          scaleTargetRef.current = 1 + Math.min(progress, 1) * 1.4
        }
      }

      if (svgInViewRef.current) {
        scaleCurrentRef.current += (scaleTargetRef.current - scaleCurrentRef.current) * 0.06
      }

      if (svgRef.current) {
        const s = scaleCurrentRef.current.toFixed(3)
        svgRef.current.style.transform = `translate(${mc.x.toFixed(2)}px, ${mc.y.toFixed(2)}px) scale(${s})`
      }

      if (photoRef.current) {
        photoRef.current.style.transform = `translate(${(-mc.x * 0.4).toFixed(2)}px, ${(-mc.y * 0.4).toFixed(2)}px)`
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div ref={ref} className="flex w-full flex-col lg:h-[600px] lg:flex-row xl:h-[650px] 2xl:h-[700px] px-5 max-w-[1520px] flex justify-center items-center mx-auto">
      <div
        ref={blockRef}
        className="relative flex h-[499px] w-full flex-col justify-between overflow-hidden bg-[var(--ok-dark)] p-10 lg:order-2 lg:h-full lg:flex-1 lg:p-10 xl:p-12 2xl:p-14 "
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateX(0)' : 'translateX(60px)',
          transition: 'opacity 1s cubic-bezier(0.22,1,0.36,1) 0.2s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.2s',
        }}
      >
        <div className="flex max-w-[605px] flex-col gap-[60px]">
          <div className="flex flex-col gap-6">
            <h3 className="font-[family-name:var(--font-display)] text-[32px] leading-[1.2] text-[var(--ok-white)] lg:text-[34px] xl:text-[36px] 2xl:text-[40px]">
              {offer.title}
            </h3>
            <p className="font-[family-name:var(--font-body)] text-2xl leading-[1.2] text-[var(--ok-white)]">
              {offer.description}
            </p>
          </div>
          <div className="flex items-start">
            <Button variant="secondary" onClick={openModal} className="h-[57px] w-[212px]">
              Узнать подробнее
            </Button>
          </div>
        </div>

        <SliderControls
          current={current + 1}
          total={OFFERS.length}
          onPrev={() => setCurrent((p) => Math.max(0, p - 1))}
          onNext={() => setCurrent((p) => Math.min(OFFERS.length - 1, p + 1))}
        />

        <div ref={svgRef} className="pointer-events-none absolute left-[550px] top-[171px] max-lg:hidden will-change-transform" style={{ transformOrigin: 'right center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="245" height="421" viewBox="0 0 245 421" fill="none">
            <path opacity="0.15" d="M130.496 6.82715C182.609 -8.24623 261.671 3.95746 326.305 39.7637L326.418 39.8262H326.449C375.242 66.8979 402.792 102.342 416.598 142.078C430.203 181.239 430.472 224.605 424.501 268.298L424.212 270.379C419.522 303.519 400.496 340.754 372.229 369.782C343.964 398.808 306.508 419.58 264.987 419.893C219.248 420.222 170.057 415.838 109.287 384.921H109.286C55.9396 357.808 11.2039 304.913 3.42871 246.185C0.0411647 220.539 -0.7169 201.227 2.80469 181.319C6.32713 161.407 14.1374 140.864 27.9385 112.77C49.2689 69.3251 78.4184 21.8812 130.496 6.82715ZM297.446 82.1133C222.205 50.0482 135.272 85.1943 103.3 160.651C71.3284 236.107 106.371 323.291 181.612 355.355C256.854 387.42 343.786 352.274 375.758 276.817C407.729 201.362 372.687 114.178 297.446 82.1133Z" stroke="#FFFDFA"/>
          </svg>
        </div>
        <div className="pointer-events-none absolute right-0 top-0 opacity-[0.08] lg:hidden">
          <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="175" cy="175" r="174" stroke="var(--ok-white)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div
        className="relative h-[525px] w-full overflow-hidden lg:order-1 lg:h-full lg:w-[500px] lg:shrink-0 xl:w-[600px] 2xl:w-[725px]"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateX(0)' : 'translateX(-60px)',
          transition: 'opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <div ref={photoRef} className="absolute inset-[-5%] will-change-transform">
          <Image
            src="/images/okotan/offers-bg.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
