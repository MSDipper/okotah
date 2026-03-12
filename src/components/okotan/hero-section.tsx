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
        <p
          className="absolute left-[10px] top-[457px] w-[274px] font-[family-name:var(--font-body)] text-base leading-[1.2] text-[var(--ok-white)] md:left-[40px] md:top-auto md:bottom-[200px] md:w-[607px] md:whitespace-pre-line md:text-lg lg:left-10 lg:top-[631px] lg:bottom-auto lg:w-[240px] lg:whitespace-normal lg:text-base xl:w-[274px]"
          style={anim(2)}
        >
          {'Синтез комфорта и культурного кода Камчатки. Находимся прямо в\u00A0терминале аэропорта Елизово'}
        </p>

        <div className="absolute left-[10px] top-[149px] md:left-[40px] md:top-[280px] lg:left-10 lg:top-[459px]" style={anim(1)}>
          <SpecialOfferBadge text={`Спецпредложение на\u00A0номер «Стандарт»`} />
        </div>

        <div className="absolute left-[10px] top-[93px] md:left-[40px] md:top-[120px] lg:hidden" style={anim(0)}>
          <WeatherWidget time="11:46" temperature="+17 °" />
        </div>

        <h1
          className="absolute left-[10px] bottom-[10px] font-[family-name:var(--font-display)] text-[80px] font-normal uppercase leading-[0.75] tracking-[-0.06em] text-[var(--ok-white)] md:left-[40px] md:bottom-[40px] md:text-[140px] lg:hidden"
          style={anim(3)}
        >
          окотан
        </h1>

        <div className="absolute bottom-0 left-0 hidden w-full flex-row items-end gap-11 overflow-hidden pr-10 lg:flex" style={anim(3)}>
          <h1 className="ml-[29px] shrink-0 font-[family-name:var(--font-display)] text-[100px] font-normal uppercase leading-[1.247] tracking-[-0.06em] text-[var(--ok-white)] lg:text-[110px] xl:text-[130px] 2xl:text-[180px]">
            окотан
          </h1>
          <div className="mb-[40px] flex shrink-0 items-end gap-[36px]" style={anim(4)}>
            <WeatherWidget time="11:46" temperature="+17 °" />
          </div>
        </div>
      </div>
    </section>
  )
}
