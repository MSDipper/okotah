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

      <div className="relative" style={{ zIndex: 1 }}>
        <HeroSection />
      </div>

      {/* <Spacer /> */}

      <CircleRevealSection zIndex={2} sectionId="about-section" relativeReveal>
        <AboutSection />
      </CircleRevealSection>

      <Spacer />

      <div id="nomera-section" className="relative bg-[var(--ok-cream)]" style={{ zIndex: 3 }}>
        <div className="flex h-[725px] items-center justify-center">
          <SectionTitle text="номера" italicLetter="о" className='sticky top-[100px]' drift='right' />
        </div>
      </div>

      <Spacer />

      <div id="rooms-content" className="relative bg-[var(--ok-cream)] px-6 py-[80px] lg:py-[100px] xl:py-[120px] 2xl:py-[150px] xl:pb-0 !pb-0 !pt-0" style={{ zIndex: 4 }}>
        <RoomsSection />
      </div>

      <Spacer />

      <CircleRevealSection zIndex={5} className="bg-[var(--ok-dark)]" switchToRelativeWhenPastId="restaurant-content">
        <div className="flex h-screen items-center justify-center">
          <SectionTitle text="ресторан" color="light" italicLetter="о" />
        </div>
        <div className="h-[50vh]" aria-hidden="true" />
      </CircleRevealSection>

      <Spacer />

      <div id="restaurant-content" className="relative" style={{ zIndex: 6 }}>
        <RestaurantSection />
      </div>

      <Spacer />

      <div className="relative bg-[var(--ok-cream)]" style={{ zIndex: 7 }}>
        <div className="flex h-[725px] items-center justify-center">
          <SectionTitle text="спецпредложения" className="sticky top-[100px] hidden lg:block" italicLetter="о" drift="left" driftIntensive={0.2} />
          <SectionTitle text={'специальные\nпредложения'} className="sticky top-[100px] max-w-[736px] whitespace-pre-line lg:hidden" italicLetter="о" drift="left" driftIntensive={0.2} />
        </div>
      </div>

      <Spacer />

      <div id="offers-content" className="relative bg-[var(--ok-cream)] py-[80px] lg:py-[100px] xl:py-[120px] 2xl:py-[150px] !pt-0 !pb-0" style={{ zIndex: 8 }}>
        <SpecialOffersSection />
      </div>

      <Spacer />

      <div className="relative bg-[var(--ok-cream)]" style={{ zIndex: 9 }}>
        <div className="flex h-[725px] items-center justify-center">
          <SectionTitle text="услуги" className="sticky top-[100px]" drift="right" driftIntensive={0.5} driftScale={0.0002} />
        </div>
      </div>

      <Spacer />

      <div id="services-content" className="relative bg-[var(--ok-cream)] px-6 py-[80px] lg:py-[100px] xl:py-[120px] 2xl:py-[150px] !pt-0" style={{ zIndex: 10 }}>
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
