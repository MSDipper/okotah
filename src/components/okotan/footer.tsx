'use client'

import Image from 'next/image'
import { MenuItem } from './menu-item'
import { SocialLink } from './social-link'
import { BookButton } from './book-button'
import { useInView } from './use-in-view'

const NAV_LEFT = [
  { text: 'Номера', href: '#rooms' },
  { text: 'Услуги', href: '#services' },
  { text: 'Мероприятия', href: '#', hasChevron: true },
]

const NAV_RIGHT = [
  { text: 'СПА-центр', href: '#' },
  { text: 'Контакты', href: '#' },
  { text: 'Меню ресторана', href: '#restaurant' },
]

export function Footer() {
  const { ref: logoRef, inView } = useInView<HTMLDivElement>(0.1)

  return (
    <footer ref={logoRef} className="relative w-full overflow-hidden bg-[var(--ok-dark)]">
      <div className="relative mx-auto h-[560px] w-full max-w-[1600px] md:h-[700px] lg:h-[560px] xl:h-[580px] 2xl:h-[610px]">
        <div className="absolute bottom-[-44px] left-1/2 hidden w-full -translate-x-1/2 text-center md:block lg:bottom-[-21px]">
          <span
            className="inline-block font-[family-name:var(--font-display)] font-normal uppercase leading-[0.75] tracking-[-0.06em] text-[var(--ok-white)] [font-size:180px] lg:[font-size:200px] xl:[font-size:230px] 2xl:[font-size:340px]"
            style={{
              transform: inView ? 'translateY(0)' : 'translateY(100%)',
              transition: 'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            ок<span className="-ml-[7px] mr-[35px] italic">о</span>тан
          </span>
        </div>
        <div className="absolute bottom-0 left-6 overflow-hidden md:hidden">
          <span
            className="inline-block font-[family-name:var(--font-display)] text-[140px] font-normal uppercase leading-[0.8] tracking-[-0.06em] text-[var(--ok-white)]"
            style={{
              transform: inView ? 'translateY(0)' : 'translateY(100%)',
              transition: 'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            ок<span className="-ml-[7px] mr-[8px] italic">о</span>тан
          </span>
        </div>

        {/* Desktop Contacts */}
        <div className="absolute left-6 top-6 flex flex-col gap-4 max-md:hidden md:left-[40px] md:top-[280px] lg:left-6 lg:top-[48px] lg:gap-[24px] xl:left-[40px]">
          <span className="whitespace-pre-line font-[family-name:var(--font-body)] text-[18px] leading-[1.2] text-[var(--ok-white)]">
            {'Камчатский край,\nг. Елизово, ул. Звёздная, 14'}
          </span>
          <span className="flex items-center gap-2">
            <Image src="/icons/icon-email.svg" alt="" width={16} height={16} />
            <a href="mailto:booking@okotan.ru" className="font-[family-name:var(--font-body)] text-[18px] leading-[1.2] text-[var(--ok-white)] transition-opacity hover:opacity-70">
              booking@okotan.ru
            </a>
          </span>
          <span className="flex items-center gap-2">
            <Image src="/icons/icon-phone.svg" alt="" width={16} height={16} />
            <a href="tel:+79991234567" className="font-[family-name:var(--font-body)] text-[18px] leading-[1.2] text-[var(--ok-white)] transition-opacity hover:opacity-70">
              + 7 999 123 45 67
            </a>
          </span>
          <div className="mt-[12px] flex items-center gap-3">
            <SocialLink text="WhatsApp" />
            <SocialLink text="Telegram" />
          </div>
        </div>

        {/* Mobile Contacts */}
        <div className="absolute left-6 top-[400px] flex flex-col gap-4 md:hidden">
          <span className="flex items-center gap-2">
            <Image src="/icons/icon-email.svg" alt="" width={16} height={16} />
            <a href="mailto:booking@okotan.ru" className="font-[family-name:var(--font-body)] text-[18px] leading-[1.2] text-[var(--ok-white)] transition-opacity hover:opacity-70">
              booking@okotan.ru
            </a>
          </span>
          <span className="flex items-center gap-2">
            <Image src="/icons/icon-phone.svg" alt="" width={16} height={16} />
            <a href="tel:+79991234567" className="font-[family-name:var(--font-body)] text-[18px] leading-[1.2] text-[var(--ok-white)] transition-opacity hover:opacity-70">
              + 7 999 123 45 67
            </a>
          </span>
          <div className="mt-[12px] flex items-center gap-3">
            <SocialLink text="WhatsApp" />
            <SocialLink text="Telegram" />
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute left-1/2 top-[48px] hidden -translate-x-1/2 items-start gap-8 md:left-[40px] md:translate-x-0 md:flex md:gap-12 lg:left-1/2 lg:-translate-x-1/2 lg:top-[48px] lg:gap-8 xl:left-[422px] xl:translate-x-0 xl:gap-16 2xl:gap-20">
          <div className="flex flex-col gap-6 items-start">
            {NAV_LEFT.map((item) => (
              <MenuItem key={item.text} {...item} size="footer" />
            ))}
          </div>
          <div className="flex flex-col gap-6 items-start">
            {NAV_RIGHT.map((item) => (
              <MenuItem key={item.text} {...item} size="footer" />
            ))}
          </div>
        </div>

        {/* Book button */}
        <div className="absolute right-6 top-[48px] hidden md:block md:right-[40px] lg:right-6 lg:top-[48px] xl:left-[880px] xl:right-auto 2xl:left-[933px]">
          <BookButton className="flex h-[56px] w-[245px] items-center justify-center bg-[var(--ok-red)] font-[family-name:var(--font-body)] text-[18px] leading-[1.2] text-[var(--ok-white)] transition-opacity hover:opacity-90">
            Забронировать
          </BookButton>
        </div>

        {/* Legal + Policy — lg: items-start, gap-10 между блоками за счёт top */}
        <div className="absolute bottom-[140px] right-6 flex flex-col gap-[32px] md:bottom-auto md:right-[40px] md:top-[280px] md:flex md:text-right lg:right-6 lg:top-[140px] lg:flex lg:flex-col lg:items-start lg:gap-6 lg:text-left xl:left-[1180px] xl:right-auto xl:top-[48px] xl:items-start xl:text-left 2xl:left-[1315px]">
          <span className="max-w-[245px] whitespace-pre-line font-[family-name:var(--font-body)] text-[12px] leading-[1.2] text-[var(--ok-white)] opacity-40">
            {'Отель Окотан 2025 © Все права защищены\nПрисвоена категория: «Пять звёзд»\nРеестровая запись: С412024005764 по\u00A0свидетельству А010-00130-77/01216258 от 24.11.2025\nИНН: 4105022915 | ОГРН: 1024101223332'}
          </span>
          <a href="#" className="font-[family-name:var(--font-body)] text-[12px] leading-[1.2] text-[var(--ok-white)] underline transition-opacity hover:opacity-70">
            Политика конфиденциальности
          </a>
        </div>

        {/* Agency Jetstyle — lg: items-start, отступ от Legal */}
        <div className="absolute right-6 md:right-[40px] md:top-[460px] lg:right-6 lg:top-[320px] xl:left-[1180px] xl:right-auto xl:top-[300px] 2xl:left-[1315px]">
          <div className="flex flex-col gap-[10px] items-start">
            <Image src="/icons/logo-agency.svg" alt="" width={137} height={17} className="md:ml-0" />
            <a href="https://jetstyle.ru/" className="font-[family-name:var(--font-body)] text-[12px] leading-[1.2] text-[var(--ok-white)] transition-opacity hover:opacity-70 md:text-right lg:text-left xl:text-left">
              Проектирование, дизайн, продвижение
            </a>
          </div>
        </div>

        <div className="md:hidden">
          <div className="absolute left-6 top-[60px] flex gap-4">
            <div className="flex flex-col gap-4" style={{ width: 177 }}>
              {NAV_LEFT.map((item) => (
                <MenuItem key={item.text} {...item} />
              ))}
            </div>
            <div className="flex flex-col gap-4" style={{ width: 177 }}>
              <MenuItem text="Ресторан и бары" href="#restaurant" />
              <MenuItem text="СПА-центр" href="#" />
              <MenuItem text="Контакты" href="#" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
