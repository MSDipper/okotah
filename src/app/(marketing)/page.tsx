import {
  HeroSection,
  AboutSection,
  SectionTitle,
  RoomsSection,
  RestaurantSection,
  SpecialOffersSection,
  ServicesSection,
  Footer,
  CookieConsent,
  CircleRevealSection,
} from '@/components/okotan'

function Spacer() {
  return <div className="relative h-[5vh]" aria-hidden="true" />
}

export default function HomePage() {
  return (
    <div className="bg-[var(--ok-cream)]">
      <CookieConsent />

      <CircleRevealSection zIndex={1} noReveal>
        <HeroSection />
      </CircleRevealSection>

      <Spacer />

      <CircleRevealSection zIndex={2}>
        <AboutSection />
      </CircleRevealSection>

      <Spacer />

      <div className="relative bg-[var(--ok-cream)]" style={{ zIndex: 3 }}>
        <div className="flex min-h-screen items-center justify-center">
          <SectionTitle text="номера" />
        </div>
        <div className="px-6 py-[100px] lg:py-[150px]">
          <RoomsSection />
        </div>
      </div>

      <Spacer />

      <div className="relative bg-[var(--ok-dark)]" style={{ zIndex: 4 }}>
        <div className="flex min-h-screen items-center justify-center">
          <SectionTitle text="ресторан" color="light" />
        </div>
        <RestaurantSection />
      </div>

      <Spacer />

      <div className="relative bg-[var(--ok-cream)]" style={{ zIndex: 5 }}>
        <div className="flex min-h-screen items-center justify-center">
          <SectionTitle text="спецпредложения" className="hidden lg:block" />
          <SectionTitle text={'специальные\nпредложения'} className="max-w-[736px] whitespace-pre-line lg:hidden" />
        </div>
        <div className="px-6 py-[100px] lg:py-[150px]">
          <SpecialOffersSection />
        </div>
      </div>

      <Spacer />

      <div className="relative bg-[var(--ok-cream)]" style={{ zIndex: 6 }}>
        <div className="flex min-h-screen items-center justify-center">
          <SectionTitle text="услуги" />
        </div>
        <div className="px-6 py-[100px] lg:py-[150px]">
          <div className="flex w-full flex-col items-center gap-20 lg:gap-[120px]">
            <ServicesSection />
          </div>
        </div>
      </div>

      <div className="relative" style={{ zIndex: 7 }}>
        <Footer />
      </div>
    </div>
  )
}
