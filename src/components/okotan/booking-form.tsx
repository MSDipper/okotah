import { Button } from './button'

export function BookingForm() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex w-full max-w-[423px] flex-col gap-6 lg:w-auto lg:max-w-none lg:flex-row lg:items-center lg:gap-[60px]">
        <div className="flex justify-between gap-[60px]">
          <div className="flex flex-col gap-2">
            <span className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-white)]">
              Заезд
            </span>
            <span className="font-[family-name:var(--font-display)] text-[32px] leading-[1.2] text-[var(--ok-white)]">
              16.04.25
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-white)]">
              Выезд
            </span>
            <span className="font-[family-name:var(--font-display)] text-[32px] leading-[1.2] text-[var(--ok-white)]">
              26.04.25
            </span>
          </div>
        </div>

        <div className="h-px w-full bg-[var(--ok-white-30)] lg:hidden" />

        <div className="flex flex-col gap-2">
          <span className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-white)]">
            Гости
          </span>
          <span className="font-[family-name:var(--font-display)] text-[32px] leading-[1.2] text-[var(--ok-white)]">
            2 взрослых, 0 детей
          </span>
        </div>
      </div>

      <Button variant="secondary" href="#">
      Забронировать
      </Button>
    </div>
  )
}
