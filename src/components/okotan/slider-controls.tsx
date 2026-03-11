'use client'

type SliderControlsProps = {
  current: number
  total: number
  onPrev: () => void
  onNext: () => void
}

export function SliderControls({ current, total, onPrev, onNext }: SliderControlsProps) {
  const isFirst = current === 1
  const isLast = current === total

  return (
    <div className="flex w-[400px] items-center gap-4">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className={`shrink-0 transition-opacity ${isFirst ? 'opacity-40 cursor-default' : 'hover:opacity-70'}`}
        aria-label="Предыдущий"
      >
        <img src="/icons/arrow_slider.svg" alt="" width={48} height={48} className="rotate-180" />
      </button>
      <div className="h-px min-w-px flex-1 bg-[var(--ok-white)]" />
      <span className="shrink-0 text-center font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-white)]">
        {current}/{total}
      </span>
      <div className="h-px min-w-px flex-1 bg-[var(--ok-white)]" />
      <button
        onClick={onNext}
        disabled={isLast}
        className={`shrink-0 transition-opacity ${isLast ? 'opacity-40 cursor-default' : 'hover:opacity-70'}`}
        aria-label="Следующий"
      >
        <img src="/icons/arrow_slider.svg" alt="" width={48} height={48} />
      </button>
    </div>
  )
}
