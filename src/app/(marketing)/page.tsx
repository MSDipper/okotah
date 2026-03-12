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
  return <div className="relative" style={{ height: 20 }} aria-hidden="true" />
}

export default function HomePage() {
  return (
    <div className="bg-[var(--ok-cream)]">
      <CookieConsent />

      <CircleRevealSection zIndex={1} noReveal switchToRelativeWhenPastId="about-section">
        <HeroSection />
      </CircleRevealSection>

      <Spacer />

      <CircleRevealSection zIndex={2} sectionId="about-section" switchToRelativeWhenPastId="nomera-section">
        <AboutSection />
      </CircleRevealSection>

      <Spacer />

      <CircleRevealSection zIndex={3} className="bg-[var(--ok-cream)]" sectionId="nomera-section" switchToRelativeWhenPastId="rooms-content">
        <div className="flex min-h-screen items-center justify-center">
          <SectionTitle text="номера" italicLetter="о" />
        </div>
      </CircleRevealSection>

      <Spacer />

      <div id="rooms-content" className="relative bg-[var(--ok-cream)] px-6 py-[80px] lg:py-[100px] xl:py-[120px] 2xl:py-[150px]  xl:pb-0 !pb-0" style={{ zIndex: 4 }}>
        <RoomsSection />
      </div>

      <Spacer />

      <CircleRevealSection zIndex={5} className="bg-[var(--ok-dark)]" switchToRelativeWhenPastId="restaurant-content">
        <div className="flex min-h-screen items-center justify-center">
          <SectionTitle text="ресторан" color="light" italicLetter="о" />
        </div>
      </CircleRevealSection>

      <Spacer />

      <div id="restaurant-content" className="relative" style={{ zIndex: 6 }}>
        <RestaurantSection />
      </div>

      <Spacer />

      <CircleRevealSection zIndex={7} className="bg-[var(--ok-cream)]" switchToRelativeWhenPastId="offers-content">
        <div className="flex min-h-screen items-center justify-center">
          <SectionTitle text="спецпредложения" className="hidden lg:block" italicLetter="о" />
          <SectionTitle text={'специальные\nпредложения'} className="max-w-[736px] whitespace-pre-line lg:hidden" italicLetter="о" />
        </div>
      </CircleRevealSection>

      <Spacer />

      <div id="offers-content" className="relative bg-[var(--ok-cream)] py-[80px] lg:py-[100px] xl:py-[120px] 2xl:py-[150px]" style={{ zIndex: 8 }}>
        <SpecialOffersSection />
      </div>

      <Spacer />

      <CircleRevealSection zIndex={9} className="bg-[var(--ok-cream)]" switchToRelativeWhenPastId="services-content">
        <div className="flex min-h-screen items-center justify-center">
          <SectionTitle text="услуги" />
        </div>
      </CircleRevealSection>

      <Spacer />

      <div id="services-content" className="relative bg-[var(--ok-cream)] px-6 py-[80px] lg:py-[100px] xl:py-[120px] 2xl:py-[150px]" style={{ zIndex: 10 }}>
        <div className="flex w-full flex-col items-center gap-16 lg:gap-20 xl:gap-[100px] 2xl:gap-[120px]">
          <ServicesSection />
        </div>
      </div>

      <div className="relative" style={{ zIndex: 11 }}>
        <Footer />
      </div>
    </div>
  )
}
