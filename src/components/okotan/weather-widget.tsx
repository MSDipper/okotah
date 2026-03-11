type WeatherWidgetProps = {
  time: string
  temperature: string
}

export function WeatherWidget({ time, temperature }: WeatherWidgetProps) {
  return (
    <div className="relative">
      <span className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-white)]">
        На Камчатке сейчас
      </span>
      <div className="mt-[7px] flex items-center gap-6 rounded-2xl backdrop-blur-[3px]">
        <span className="font-[family-name:var(--font-display)] text-[40px] leading-[1.2] text-[var(--ok-white)]">
          {time}
        </span>
        <span className="font-[family-name:var(--font-display)] text-[40px] leading-[1.2] text-[var(--ok-white)]">
          {temperature}
        </span>
      </div>
    </div>
  )
}
