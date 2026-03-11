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

      <CircleRevealSection zIndex={3} className="bg-[var(--ok-cream)]">
        <div className="flex min-h-screen items-center justify-center">
          <SectionTitle text="номера" />
        </div>
      </CircleRevealSection>

      <Spacer />

      <div className="relative bg-[var(--ok-cream)] px-6 py-[100px] lg:py-[150px]" style={{ zIndex: 4 }}>
        <RoomsSection />
      </div>

      <Spacer />

      <CircleRevealSection zIndex={5} className="bg-[var(--ok-dark)]">
        <div className="flex min-h-screen items-center justify-center">
          <SectionTitle text="ресторан" color="light" />
        </div>
      </CircleRevealSection>

      <Spacer />

      <div className="relative" style={{ zIndex: 6 }}>
        <RestaurantSection />
      </div>

      <Spacer />

      <CircleRevealSection zIndex={7} className="bg-[var(--ok-cream)]">
        <div className="flex min-h-screen items-center justify-center">
          <SectionTitle text="спецпредложения" className="hidden lg:block" />
          <SectionTitle text={'специальные\nпредложения'} className="max-w-[736px] whitespace-pre-line lg:hidden" />
        </div>
      </CircleRevealSection>

      <Spacer />

      <div className="relative bg-[var(--ok-cream)] px-6 py-[100px] lg:py-[150px]" style={{ zIndex: 8 }}>
        <SpecialOffersSection />
      </div>

      <Spacer />

      <CircleRevealSection zIndex={9} className="bg-[var(--ok-cream)]">
        <div className="flex min-h-screen items-center justify-center">
          <SectionTitle text="услуги" />
        </div>
      </CircleRevealSection>

      <Spacer />

      <div className="relative bg-[var(--ok-cream)] px-6 py-[100px] lg:py-[150px]" style={{ zIndex: 10 }}>
        <div className="flex w-full flex-col items-center gap-20 lg:gap-[120px]">
          <ServicesSection />
        </div>
      </div>

      <div className="relative" style={{ zIndex: 11 }}>
        <Footer />
      </div>
    </div>
  )
}
