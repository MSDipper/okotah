import { PdfLink } from './pdf-link'

export function RestaurantSection() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center justify-center bg-[var(--ok-dark)] px-6 py-[200px] lg:pb-[260px] lg:pt-[300px]">
        <h2 className="text-center font-[family-name:var(--font-display)] text-[80px] font-normal uppercase leading-[1.247] tracking-[-0.04em] text-[var(--ok-white)] lg:text-[100px]">
          ресторан
        </h2>
      </div>

      <div className="bg-[var(--ok-dark)]">
        <div className="relative h-[1024px] w-full overflow-hidden lg:h-[900px]">
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
