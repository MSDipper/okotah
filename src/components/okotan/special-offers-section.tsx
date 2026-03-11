'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SliderControls } from './slider-controls'
import { Button } from './button'
import { ModalForm } from './modal-form'

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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const offer = OFFERS[current]

  return (
    <div className="mx-auto flex w-full max-w-[1520px] flex-col px-6 lg:h-[700px] lg:flex-row lg:px-0">
      <div className="relative flex h-[499px] w-full flex-col justify-between overflow-hidden bg-[var(--ok-dark)] p-10 lg:order-2 lg:h-full lg:flex-1 lg:p-14">
        <div className="flex max-w-[605px] flex-col gap-[60px]">
          <div className="flex flex-col gap-6">
            <h3 className="font-[family-name:var(--font-display)] text-[40px] leading-[1.2] text-[var(--ok-white)]">
              {offer.title}
            </h3>
            <p className="font-[family-name:var(--font-body)] text-2xl leading-[1.2] text-[var(--ok-white)]">
              {offer.description}
            </p>
          </div>
          <div className="flex items-start">
            <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
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

        <div className="pointer-events-none absolute left-[550px] top-[171px] opacity-[0.15] max-lg:hidden">
          <svg width="429" height="420" viewBox="0 0 429 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="214" cy="210" r="209" stroke="var(--ok-white)" strokeWidth="1" />
          </svg>
        </div>
        <div className="pointer-events-none absolute right-0 top-0 opacity-[0.08] lg:hidden">
          <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="175" cy="175" r="174" stroke="var(--ok-white)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="relative h-[525px] w-full overflow-hidden lg:order-1 lg:h-full lg:w-[725px] lg:shrink-0">
        <Image
          src="/images/okotan/offers-bg.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
