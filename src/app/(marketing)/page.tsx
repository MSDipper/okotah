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
} from '@/components/okotan'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-[200px] bg-[var(--ok-cream)] lg:gap-[300px]">
      <CookieConsent />
      <div className="flex w-full flex-col">
        <HeroSection />
        <AboutSection />
      </div>

      <SectionTitle text="номера" />

      <RoomsSection />

      <RestaurantSection />

      <SectionTitle text="спецпредложения" className="hidden lg:block" />
      <SectionTitle text={'специальные\nпредложения'} className="max-w-[736px] whitespace-pre-line lg:hidden" />

      <SpecialOffersSection />

      <SectionTitle text="услуги" />

      <div className="flex w-full flex-col items-center gap-20 lg:gap-[120px]">
        <ServicesSection />
        <Footer />
      </div>
    </div>
  )
}
