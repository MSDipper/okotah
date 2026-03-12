import { ServiceCard } from './service-card'

const SERVICES = [
  { title: 'Мероприятия', imageSrc: '/images/okotan/service-events.png' },
  { title: 'СПА-центр', imageSrc: '/images/okotan/service-spa.png' },
  { title: 'Экскурсии', imageSrc: '/images/okotan/service-excursions.png' },
  { title: 'Тренажёрный зал', imageSrc: '/images/okotan/service-gym.png' },
  { title: 'Room service', imageSrc: '/images/okotan/service-roomservice.png' },
  { title: 'Консьерж-сервис', imageSrc: '/images/okotan/service-concierge.png' },
  { title: 'Трансфер', imageSrc: '/images/okotan/service-transfer.png' },
  { title: 'Конференц-центр', imageSrc: '/images/okotan/service-conference.png' },
  { title: 'Прокат', imageSrc: '/images/okotan/service-rental.png' },
  { title: 'Прачечная', imageSrc: '/images/okotan/service-laundry.png' },
]

export function ServicesSection() {
  return (
    <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-4 xl:px-6 2xl:px-0">
      <div className="grid grid-cols-1 gap-[10px] lg:grid-cols-2">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  )
}
