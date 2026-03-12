'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { MenuItem } from './menu-item'
import { LangSelector } from './lang-selector'
import { useOpenModal } from './modal-context'

const NAV_ITEMS = [
  { text: 'Номера', href: '#rooms' },
  { text: 'Услуги', href: '#services' },
  { text: 'Мероприятия', href: '#', hasChevron: true },
  { text: 'СПА-центр', href: '#' },
  { text: 'Контакты', href: '#' },
  { text: 'Меню ресторана', href: '#restaurant' },
]

const EVENTS_SUBMENU = [
  { text: 'Конференц-зал', href: '#' },
  { text: 'Банкетный зал', href: '#' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [eventsOpen, setEventsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const openModal = useOpenModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${scrolled ? 'bg-[var(--ok-dark)]' : 'bg-transparent'}`}>
      <div className={`mx-auto hidden w-full max-w-[1600px] items-center justify-between gap-4 px-4 transition-[padding] duration-300 lg:flex xl:px-6 2xl:px-8 ${scrolled ? 'py-2' : 'pt-8 pb-4'}`}>
        <a href="/" className="block shrink-0" style={{ width: 110, height: 33 }}>
          <Image src="/icons/logo.svg" alt="Окотан" width={110} height={33} priority />
        </a>

        <nav className="flex shrink-0 items-center gap-4 xl:gap-5 2xl:gap-6">
          {NAV_ITEMS.map((item) =>
            item.hasChevron ? (
              <div key={item.text} className="relative">
                <button
                  onClick={() => setEventsOpen(!eventsOpen)}
                  className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap py-[6px] font-[family-name:var(--font-body)] text-[13px] leading-[1.2] text-[var(--ok-white)] transition-opacity hover:opacity-70 lg:text-[18px]"
                >
                  {item.text}
                  <Image
                    src="/icons/chevron-down.svg"
                    alt=""
                    width={12}
                    height={12}
                    className={`invert transition-transform ${eventsOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {eventsOpen && (
                  <div className="absolute left-1/2 top-full z-50 flex -translate-x-1/2 gap-6 bg-[var(--ok-dark)] p-6">
                    <a href="#" className="group flex flex-col gap-2">
                      <div className="relative h-[135px] w-[240px] overflow-hidden">
                        <Image src="/images/okotan/service-conference.png" alt="" fill className="object-cover transition-transform group-hover:scale-105" />
                      </div>
                      <span className="font-[family-name:var(--font-body)] text-sm leading-[1.2] text-[var(--ok-white)]">Конференц-зал</span>
                    </a>
                    <a href="#" className="group flex flex-col gap-2">
                      <div className="relative h-[135px] w-[240px] overflow-hidden">
                        <Image src="/images/okotan/service-events.png" alt="" fill className="object-cover transition-transform group-hover:scale-105" />
                      </div>
                      <span className="font-[family-name:var(--font-body)] text-sm leading-[1.2] text-[var(--ok-white)]">Банкетный зал</span>
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <MenuItem key={item.text} {...item} size="xs" />
            )
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <LangSelector variant="header" />

          <button
            onClick={openModal}
            className="flex min-w-[140px] shrink-0 items-center justify-center bg-[var(--ok-red)] px-3 py-1.5 pb-[10px] font-[family-name:var(--font-body)] text-[13px] leading-[1.2] text-[var(--ok-white)] transition-opacity hover:opacity-90 xl:min-w-[150px] xl:px-3 xl:py-2  "
          >
            Забронировать
          </button>
        </div>
      </div>

      <div className="relative z-[250] flex items-center justify-between px-6 py-[14px] lg:hidden">
        <a href="/" className="block shrink-0" style={{ width: 40, height: 40 }}>
          <Image src="/icons/logo.svg" alt="Окотан" width={40} height={40} priority />
        </a>

        <div className="absolute left-1/2 -translate-x-1/2">
          <button
            onClick={() => { setMobileOpen(!mobileOpen); if (mobileOpen) setEventsOpen(false) }}
            className="flex h-12 w-12 items-center justify-center"
            aria-label="Меню"
          >
            {mobileOpen ? (
              <Image src="/icons/close.svg" alt="" width={48} height={48} />
            ) : (
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="4" y="12" width="40" height="2" rx="1" fill="var(--ok-white)" />
                <rect x="4" y="23" width="40" height="2" rx="1" fill="var(--ok-white)" />
                <rect x="4" y="34" width="40" height="2" rx="1" fill="var(--ok-white)" />
              </svg>
            )}
          </button>
        </div>

        <button
          onClick={openModal}
          className="flex items-center justify-center bg-[var(--ok-red)] px-4 py-2 pb-[10px] font-[family-name:var(--font-body)] text-sm leading-[1.2] text-[var(--ok-white)] transition-opacity hover:opacity-90 max-md:hidden"
        >
          Забронировать
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[200] flex flex-col overflow-hidden bg-[var(--ok-dark)] md:inset-x-6 md:bottom-auto md:top-[91px] md:h-[600px] lg:hidden">
          {/* Mobile Overlay Header (Hidden on Tablet) */}
          <div className="relative flex shrink-0 items-center justify-between px-[10px] py-[10px] md:hidden">
            <a href="/" className="block shrink-0" style={{ width: 40, height: 40 }}>
              <Image src="/icons/logo.svg" alt="Окотан" width={40} height={40} />
            </a>
            <div className="flex items-center gap-2">
              <button
                onClick={() => { setMobileOpen(false); setEventsOpen(false) }}
                className="flex h-12 w-12 items-center justify-center"
                aria-label="Закрыть"
              >
                <Image src="/icons/close.svg" alt="" width={48} height={48} />
              </button>
              <button
                onClick={() => { setMobileOpen(false); openModal() }}
                className="flex items-center justify-center bg-[var(--ok-red)] px-4 py-2 pb-[10px] font-[family-name:var(--font-body)] text-sm leading-[1.2] text-[var(--ok-white)] transition-opacity hover:opacity-90"
              >
                Забронировать
              </button>
            </div>
          </div>

          <div className="relative flex flex-1 flex-col px-[10px] pt-[17px] md:px-[40px] md:pt-[40px]">
            <div className="pointer-events-none absolute right-[-60px] top-[100px] md:right-[-50px] md:top-[175px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="185" height="369" viewBox="0 0 185 369" fill="none">
                <path opacity="0.15" d="M107.742 6.04492C150.717 -7.16422 215.942 3.52753 269.274 34.9238L269.392 34.9932H269.417C309.655 58.7242 332.38 89.7921 343.77 124.628C355.175 159.513 355.224 198.207 350.053 237.144C346.183 266.203 330.482 298.852 307.159 324.303C284.202 349.355 253.91 367.381 220.318 368.199L218.716 368.226C180.975 368.515 140.394 364.671 90.2549 337.564L90.2539 337.563C46.2473 313.796 9.33292 267.422 2.91699 215.924C0.121097 193.432 -0.504576 176.497 2.40137 159.04C5.30795 141.58 11.7531 123.566 23.1436 98.9258C40.753 60.8131 64.8022 19.2351 107.742 6.04492ZM245.553 71.9688C183.38 43.8136 111.575 74.6882 85.1777 140.893C58.7858 207.083 87.7017 283.586 149.855 311.733C212.028 339.889 283.833 309.014 310.23 242.81C336.622 176.619 307.707 100.116 245.553 71.9688Z" stroke="#FFFDFA"/>
              </svg>
            </div>

            <div className="flex items-start justify-between">
              <nav className="flex flex-col md:gap-4">
                {NAV_ITEMS.map((item) => (
                  item.hasChevron ? (
                    <div key={item.text}>
                      <button
                        onClick={() => setEventsOpen(!eventsOpen)}
                        className="inline-flex items-center gap-2 py-[8px] font-[family-name:var(--font-body)] text-base leading-[1.2] text-[var(--ok-white)]"
                      >
                        {item.text}
                        <Image
                          src="/icons/chevron-down.svg"
                          alt=""
                          width={16}
                          height={16}
                          className={`invert transition-transform ${eventsOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {eventsOpen && (
                        <div className="mt-2 flex flex-col gap-2 pl-4 md:flex-row md:gap-6 md:pl-0">
                          <a href="#" className="group flex flex-col gap-2">
                            <div className="relative hidden h-[112px] w-[200px] overflow-hidden md:block">
                              <Image src="/images/okotan/service-conference.png" alt="" fill className="object-cover transition-transform group-hover:scale-105" />
                            </div>
                            <span className="py-[6px] font-[family-name:var(--font-body)] text-base leading-[1.2] text-[var(--ok-white)] md:py-0">
                              Конференц-зал
                            </span>
                          </a>
                          <a href="#" className="group flex flex-col gap-2">
                            <div className="relative hidden h-[112px] w-[200px] overflow-hidden md:block">
                              <Image src="/images/okotan/service-events.png" alt="" fill className="object-cover transition-transform group-hover:scale-105" />
                            </div>
                            <span className="py-[6px] font-[family-name:var(--font-body)] text-base leading-[1.2] text-[var(--ok-white)] md:py-0">
                              Банкетный зал
                            </span>
                          </a>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      key={item.text}
                      href={item.href}
                      className="py-[8px] font-[family-name:var(--font-body)] text-base leading-[1.2] text-[var(--ok-white)]"
                    >
                      {item.text}
                    </a>
                  )
                ))}
              </nav>

              <LangSelector variant="header" />
            </div>

            <div className="mt-auto flex flex-col gap-[35px] pb-[10px] md:mt-[51px] md:pb-0">
              <div className="flex flex-col gap-[16px]">
                <a href="mailto:booking@okotan.ru" className="font-[family-name:var(--font-body)] text-base leading-[1.2] text-[var(--ok-white)]">
                  booking@okotan.ru
                </a>
                <a href="tel:+79991234567" className="font-[family-name:var(--font-body)] text-base leading-[1.2] text-[var(--ok-white)]">
                  + 7 999 123 45 67
                </a>
              </div>

              <div className="flex items-center gap-[16px]">
                <a href="#" className="flex items-center gap-1 font-[family-name:var(--font-body)] text-base leading-[1.2] text-[var(--ok-white)]">
                  WhatsApp
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--ok-white)" strokeWidth="1.2">
                    <path d="M4 12L12 4M12 4H6M12 4V10" />
                  </svg>
                </a>
                <a href="#" className="flex items-center gap-1 font-[family-name:var(--font-body)] text-base leading-[1.2] text-[var(--ok-white)]">
                  Telegram
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--ok-white)" strokeWidth="1.2">
                    <path d="M4 12L12 4M12 4H6M12 4V10" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
