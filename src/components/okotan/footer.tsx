import Image from 'next/image'
import { MenuItem } from './menu-item'
import { SocialLink } from './social-link'
import { BookButton } from './book-button'

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
  return (
    <footer className="relative w-full overflow-hidden bg-[var(--ok-dark)]">
      <div className="relative mx-auto h-[560px] w-full max-w-[1600px] md:h-[700px] lg:h-[610px]">
        <div className="absolute bottom-[-16px] left-1/2 hidden w-full -translate-x-1/2 text-center md:block lg:bottom-[-26px]">
          <span className="font-[family-name:var(--font-display)] font-normal uppercase leading-[0.75] tracking-[-0.06em] text-[var(--ok-white)] [font-size:180px] lg:[font-size:340px]">
            окотан
          </span>
        </div>
        <div className="absolute bottom-0 left-6 overflow-hidden md:hidden">
          <span className="font-[family-name:var(--font-display)] text-[140px] font-normal uppercase leading-[0.8] tracking-[-0.06em] text-[var(--ok-white)]">
            окотан
          </span>
        </div>

        {/* Desktop Contacts */}
        <div className="absolute left-6 top-6 flex flex-col gap-4 max-md:hidden md:left-[40px] md:top-[280px] lg:top-[48px] lg:gap-[24px]">
          <span className="whitespace-pre-line font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-white)]">
            {'Камчатский край,\nг. Елизово, ул. Звёздная, 14'}
          </span>
          <span className="flex items-center gap-2">
            <Image src="/icons/icon-email.svg" alt="" width={16} height={16} />
            <a href="mailto:booking@okotan.ru" className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-white)] transition-opacity hover:opacity-70">
              booking@okotan.ru
            </a>
          </span>
          <span className="flex items-center gap-2">
            <Image src="/icons/icon-phone.svg" alt="" width={16} height={16} />
            <a href="tel:+79991234567" className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-white)] transition-opacity hover:opacity-70">
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
            <a href="mailto:booking@okotan.ru" className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-white)] transition-opacity hover:opacity-70">
              booking@okotan.ru
            </a>
          </span>
          <span className="flex items-center gap-2">
            <Image src="/icons/icon-phone.svg" alt="" width={16} height={16} />
            <a href="tel:+79991234567" className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-white)] transition-opacity hover:opacity-70">
              + 7 999 123 45 67
            </a>
          </span>
          <div className="mt-[12px] flex items-center gap-3">
            <SocialLink text="WhatsApp" />
            <SocialLink text="Telegram" />
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute hidden items-start gap-20 md:left-[40px] md:top-[48px] md:flex lg:left-[422px] lg:top-[48px]">
          <div className="flex flex-col gap-6 items-start">
            {NAV_LEFT.map((item) => (
              <MenuItem key={item.text} {...item} />
            ))}
          </div>
          <div className="flex flex-col gap-6 items-start">
            {NAV_RIGHT.map((item) => (
              <MenuItem key={item.text} {...item} />
            ))}
          </div>
        </div>

        <div className="absolute right-[40px] top-[48px] hidden md:block lg:left-[933px] lg:right-auto lg:top-[40px]">
          <BookButton className="flex items-center justify-center bg-[var(--ok-red)] px-6 py-4 pb-[18px] font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-white)] transition-opacity hover:opacity-90 lg:w-[245px]">
            Забронировать
          </BookButton>
        </div>

        <div className="absolute bottom-[140px] right-6 flex flex-col gap-[10px] md:bottom-auto md:right-[40px]  md:top-[280px] md:text-right lg:left-[1315px] lg:right-auto lg:top-[48px] lg:text-left">
          <span className="max-w-[245px] whitespace-pre-line font-[family-name:var(--font-body)] text-xs leading-[1.2] text-[var(--ok-white)] opacity-40">
            {'Отель Окотан 2025 © Все права защищены\nПрисвоена категория: «Пять звёзд»\nРеестровая запись: С412024005764 по\u00A0свидетельству А010-00130-77/01216258 от 24.11.2025\nИНН: 4105022915 | ОГРН: 1024101223332'}
          </span>
          <a href="#" className="mt-4 font-[family-name:var(--font-body)] text-xs leading-[1.2] text-[var(--ok-white)] underline transition-opacity hover:opacity-70">
            Политика конфиденциальности
          </a>
        </div>

        <div className="absolute right-6 md:right-[40px] md:top-[460px] lg:left-[1315px] lg:right-auto lg:top-[300px]">
          <div className="flex flex-col gap-[10px]">
            <Image src="/icons/logo-agency.svg" alt="" width={137} height={17} className="md:ml-0 lg:ml-0" />
            <a href="https://jetstyle.ru/" className="font-[family-name:var(--font-body)] text-xs leading-[1.2] text-[var(--ok-white)] md:text-right lg:text-left">
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
