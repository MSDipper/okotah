'use client'

import { PdfLink } from './pdf-link'
import { useInView } from './use-in-view'

export function RestaurantSection() {
  const { ref, inView } = useInView(0.1)

  return (
    <div className="flex w-full flex-col">
      <div ref={ref} className="bg-[var(--ok-dark)]">
        <div
          className="relative h-[1024px] w-full overflow-hidden lg:h-[900px]"
          style={{
            clipPath: inView ? 'ellipse(120% 120% at 50% 50%)' : 'ellipse(0% 0% at 50% 50%)',
            transition: 'clip-path 1.4s cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/okotan/restaurant-bg.png')" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 11%, rgba(0,0,0,0.9) 70%)' }}
          />

          <div className="absolute bottom-10 left-6 right-6 lg:bottom-0 lg:left-0 lg:right-0 lg:mx-auto lg:w-full lg:max-w-[1480px] lg:px-0 lg:pb-[60px]">
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
              <div className="flex flex-col gap-6">
                <h3 className="max-w-[698px] font-[family-name:var(--font-display)] text-[40px] leading-[1.2] text-[var(--ok-white)]">
                  «Камчатка | Гастрономия дикой{'\u00A0'}природы»
                </h3>
                <p className="max-w-[647px] font-[family-name:var(--font-body)] text-2xl leading-[1.2] text-[var(--ok-white)]">
                  Мы используем продукты, добытые в нетронутых уголках Камчатки: из глубин Тихого океана, вулканических долин и таёжных лесов
                </p>
              </div>
              <div className="shrink-0">
                <PdfLink text="Меню" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
