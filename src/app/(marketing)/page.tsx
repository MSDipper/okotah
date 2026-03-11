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
  return <div className="relative h-[30vh]" aria-hidden="true" />
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
        <div className="flex flex-col items-center gap-[200px] py-[200px] lg:gap-[300px] lg:py-[300px]">
          <SectionTitle text="номера" />
          <RoomsSection />
        </div>
      </CircleRevealSection>

      <Spacer />

      <CircleRevealSection zIndex={4}>
        <RestaurantSection />
      </CircleRevealSection>

      <Spacer />

      <CircleRevealSection zIndex={5} className="bg-[var(--ok-cream)]">
        <div className="flex flex-col items-center gap-[200px] py-[200px] lg:gap-[300px] lg:py-[300px]">
          <SectionTitle text="спецпредложения" className="hidden lg:block" />
          <SectionTitle text={'специальные\nпредложения'} className="max-w-[736px] whitespace-pre-line lg:hidden" />
          <SpecialOffersSection />
        </div>
      </CircleRevealSection>

      <Spacer />

      <CircleRevealSection zIndex={6} className="bg-[var(--ok-cream)]">
        <div className="flex flex-col items-center gap-[200px] py-[200px] lg:gap-[300px] lg:py-[300px]">
          <SectionTitle text="услуги" />
          <div className="flex w-full flex-col items-center gap-20 lg:gap-[120px]">
            <ServicesSection />
          </div>
        </div>
      </CircleRevealSection>

      <Spacer />

      <CircleRevealSection zIndex={7}>
        <Footer />
      </CircleRevealSection>
    </div>
  )
}
