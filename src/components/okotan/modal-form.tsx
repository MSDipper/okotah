'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

type ModalFormProps = {
  isOpen: boolean
  onClose: () => void
}

function ModalFormContent({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center lg:items-center lg:px-10 lg:py-[35px]">
      <div className="absolute inset-0 bg-black/80 max-md:hidden" onClick={onClose} />

      <div className="relative z-10 flex h-full w-full flex-col overflow-y-auto bg-[var(--ok-dark)] md:w-[720px] lg:h-[830px] lg:max-h-none lg:w-[1520px] lg:max-w-full lg:flex-row lg:overflow-hidden lg:bg-transparent">
        <div className="relative h-[300px] w-full shrink-0 md:h-[525px] lg:absolute lg:inset-0 lg:h-full">
          <Image
            src="/images/okotan/388d67203ea6e22404b9120e2b6e1d6a29693d64.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative flex w-full flex-1 flex-col bg-[var(--ok-dark)] p-6 md:p-10 lg:absolute lg:left-[48px] lg:top-1/2 lg:h-[740px] lg:w-[604px] lg:-translate-y-1/2 lg:p-[60px]">
          <div className="flex flex-col gap-4">
            <h3 className="font-[family-name:var(--font-display)] text-[32px] leading-[1.2] text-[var(--ok-white)] md:text-[40px]">
              Оставить заявку
            </h3>
            <p className="font-[family-name:var(--font-body)] text-base leading-[1.2] text-[var(--ok-white)] md:text-lg">
              Укажите желаемые даты проживания, количество гостей и тип номера. Мы свяжемся с вами для подтверждения брони в ближайшее время
            </p>
          </div>

          <form className="mt-[32px] flex flex-1 flex-col gap-[32px]" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-[16px]">
              <div className="relative h-[53px] w-full border-b border-[#5d5d5d]">
                <input
                  type="text"
                  placeholder=" "
                  required
                  className="peer absolute inset-0 bg-transparent py-[16px] font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-white)] outline-none"
                />
                <div className="pointer-events-none flex gap-[2px] py-[16px] peer-[:not(:placeholder-shown)]:invisible">
                  <span className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[#5d5d5d]">ФИО</span>
                  <span className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-red)]">*</span>
                </div>
              </div>

              <div className="relative h-[53px] w-full border-b border-[#5d5d5d]">
                <input
                  type="email"
                  placeholder=" "
                  required
                  className="peer absolute inset-0 bg-transparent py-[16px] font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-white)] outline-none"
                />
                <div className="pointer-events-none flex gap-[2px] py-[16px] peer-[:not(:placeholder-shown)]:invisible">
                  <span className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[#5d5d5d]">E-mail</span>
                  <span className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-red)]">*</span>
                </div>
              </div>

              <div className="relative flex h-[53px] w-full items-center gap-[2px] border-b border-[#5d5d5d] py-[16px]">
                <button type="button" className="flex shrink-0 items-center gap-1">
                  <div className="relative h-4 w-4 shrink-0 overflow-hidden rounded-full">
                    <Image src="/icons/Frame.svg" alt="" width={16} height={16} className="h-full w-full object-cover" />
                  </div>
                  <Image src="/icons/chevron-down.svg" alt="" width={12} height={12} className="brightness-0 invert" />
                </button>
                <div className="relative flex-1">
                  <input
                    type="tel"
                    placeholder=" "
                    required
                    className="peer w-full bg-transparent font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-white)] outline-none"
                  />
                  <div className="pointer-events-none absolute inset-0 flex gap-[2px] peer-[:not(:placeholder-shown)]:invisible">
                    <span className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[#5d5d5d]">+ 7 (___) ___ __ __</span>
                    <span className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-red)]">*</span>
                  </div>
                </div>
              </div>

              <div className="relative h-[118px] w-full border-b border-[#5d5d5d]">
                <textarea
                  placeholder=" "
                  required
                  rows={1}
                  className="peer absolute inset-0 resize-none bg-transparent pt-[16px] font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-white)] outline-none"
                />
                <div className="pointer-events-none flex gap-[2px] pt-[16px] peer-[:not(:placeholder-shown)]:invisible">
                  <span className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[#5d5d5d] lg:hidden">Опишите ваши пожелания</span>
                  <span className="hidden font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[#5d5d5d] lg:inline">Комментарий</span>
                  <span className="font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[var(--ok-red)]">*</span>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-[16px] md:w-[408px] lg:w-[418px]">
              <label className="flex cursor-pointer items-start gap-[8px]">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 appearance-none border border-[var(--ok-white)] bg-transparent checked:bg-[var(--ok-white)]"
                />
                <span className="font-[family-name:var(--font-body)] text-[12px] leading-[1.2] text-[var(--ok-white)]">
                  Я даю <span className="underline">согласие на обработку моих персональных данных</span> в объёме и порядке согласно <span className="underline">Политике обработки персональных данных</span>
                </span>
              </label>

              <button
                type="submit"
                className="flex w-full items-center justify-center border border-[#a6a6a6] px-[24px] pb-[18px] pt-[16px] font-[family-name:var(--font-body)] text-lg leading-[1.2] text-[#a6a6a6] transition-colors hover:border-[var(--ok-white)] hover:text-[var(--ok-white)] md:w-[200px] lg:w-[220px]"
              >
                Отправить заявку
              </button>
            </div>
          </form>
        </div>

        <button
          onClick={onClose}
          className="absolute right-[10px] top-[10px] z-20 flex h-12 w-12 items-center justify-center md:right-6 md:top-6 lg:right-[40px] lg:top-[40px]"
          aria-label="Закрыть"
        >
          <Image src="/icons/close.svg" alt="" width={48} height={48} />
        </button>
      </div>
    </div>
  )
}

export function ModalForm({ isOpen, onClose }: ModalFormProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return createPortal(
    <ModalFormContent onClose={onClose} />,
    document.body
  )
}
