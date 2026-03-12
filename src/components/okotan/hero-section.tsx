'use client'

import { useState, useEffect } from 'react'
import { WeatherWidget } from './weather-widget'
import { SpecialOfferBadge } from './special-offer-badge'

const DELAY = [0, 0.2, 0.4, 0.6, 0.8] as const

function useMounted() {
  const [m, setM] = useState(false)
  useEffect(() => setM(true), [])
  return m
}

export function HeroSection() {
  const ready = useMounted()

  const anim = (i: number) => ({
    opacity: ready ? 1 : 0,
    transform: ready ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${DELAY[i]}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${DELAY[i]}s`,
  })

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/photo_2025-02-07 14.56.17 1.png')",
          transform: ready ? 'scale(1)' : 'scale(1.1)',
          transition: 'transform 1.8s cubic-bezier(0.22,1,0.36,1)',
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

        <div className="relative mx-auto h-full w-full max-w-[1600px]">
        <div
          className="absolute left-[10px] top-[100px] right-[10px] bottom-[10px] flex flex-col gap-10 justify-end md:left-[40px] md:top-[120px] md:bottom-[40px] lg:left-10 lg:top-[120px] lg:bottom-8"
        >
          <div className="flex flex-col gap-6">
            <div style={anim(1)}>
              <SpecialOfferBadge text={`Спецпредложение на\u00A0номер «Стандарт»`} />
            </div>

            <p
              className="w-full max-w-[400px] font-[family-name:var(--font-body)] text-base leading-[1.2] text-[var(--ok-white)] md:whitespace-pre-line md:text-lg lg:whitespace-normal lg:text-base xl:max-w-[274px]"
              style={anim(2)}
            >
              {'Синтез комфорта и культурного кода Камчатки. Находимся прямо в\u00A0терминале аэропорта Елизово'}
            </p>
          </div>

          <div className="flex flex-row items-end gap-6 pb-2 md:gap-11 md:pb-0" style={anim(3)}>
            <h1 className="shrink-0 font-[family-name:var(--font-display)] text-[80px] font-normal uppercase leading-[0.75] tracking-[-0.06em] text-[var(--ok-white)] md:text-[100px] md:leading-[1.247] lg:text-[80px] xl:text-[95px] 2xl:text-[180px]">
              окотан
            </h1>
            <div className="mb-1 flex shrink-0 items-end gap-6 md:mb-[40px] md:gap-[36px]" style={anim(4)}>
              <WeatherWidget time="11:46" temperature="+17 °" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
