import { WeatherWidget } from './weather-widget'
import { SpecialOfferBadge } from './special-offer-badge'

export function HeroSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden md:h-[1024px] lg:h-[900px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/photo_2025-02-07 14.56.17 1.png')" }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative mx-auto h-full w-full max-w-[1600px] ">
        <p className="absolute left-[10px] top-[457px] w-[274px] font-[family-name:var(--font-body)] text-base leading-[1.2] text-[var(--ok-white)] md:left-[40px] md:top-auto md:bottom-[200px] md:w-[607px] md:whitespace-pre-line md:text-lg lg:left-10 lg:top-[631px] lg:bottom-auto lg:w-[274px] lg:whitespace-normal lg:text-base">
          {'Синтез комфорта и культурного кода Камчатки. Находимся прямо в\u00A0терминале аэропорта Елизово'}
        </p>

        <div className="absolute left-[10px] top-[149px] md:left-[40px] md:top-[280px] lg:left-10 lg:top-[459px]">
          <SpecialOfferBadge text={`Спецпредложение на\u00A0номер «Стандарт»`} />
        </div>

        <div className="absolute left-[10px] top-[93px] md:left-[40px] md:top-[120px] lg:hidden">
          <WeatherWidget time="11:46" temperature="+17 °" />
        </div>

        <h1 className="absolute left-[10px] bottom-[10px] font-[family-name:var(--font-display)] text-[80px] font-normal uppercase leading-[0.75] tracking-[-0.06em] text-[var(--ok-white)] md:left-[40px] md:bottom-[40px] md:text-[140px] lg:hidden">
          окотан
        </h1>

        <div className="absolute bottom-0 left-0 hidden w-full flex-row items-end gap-11 overflow-hidden pr-10 lg:flex">
          <h1 className="ml-[29px] shrink-0 font-[family-name:var(--font-display)] text-[180px] font-normal uppercase leading-[1.247] tracking-[-0.06em] text-[var(--ok-white)]">
            окотан
          </h1>
          <div className="mb-[40px] flex shrink-0 items-end gap-[36px]">
            <WeatherWidget time="11:46" temperature="+17 °" />
          </div>
        </div>
      </div>
    </section>
  )
}
