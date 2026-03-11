'use client'

import { BookingForm } from './booking-form'
import { useInView } from './use-in-view'

export function AboutSection() {
  const { ref, inView } = useInView<HTMLElement>(0.2)

  return (
    <section ref={ref} className="relative h-[1024px] w-full overflow-hidden lg:h-[900px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/okotan/about-bg.png')" }}
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative flex h-full flex-col items-center px-6 pt-[212px] lg:px-10">
        <div className="flex flex-col items-center gap-[60px] lg:gap-20">
          <p
            className="max-w-[663px] whitespace-pre-line text-center font-[family-name:var(--font-body)] text-2xl leading-[1.2] text-[var(--ok-white)] lg:max-w-[785px]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            «О» — архитектурный образ аэровокзала, «Котан» — «жилище» на{'\u00A0'}языке айнов.
            {'\n\n'}
            Архитектура и интерьеры отеля «ОКОТАН» вдохновлены суровой красотой Камчатки и разработаны в партнёрстве с бюро итальянского архитектора-минималиста Клаудио Сильвестрина. Мы создаём честное, ясное пространство, где каждый элемент — функционален, продуман и служит вашему спокойствию.
          </p>

          <div
            className="flex flex-col items-center gap-10"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 1s cubic-bezier(0.22,1,0.36,1) 0.3s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.3s',
            }}
          >
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  )
}
