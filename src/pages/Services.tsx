import { Briefcase, PartyPopper, Calendar, Utensils } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Briefcase,
      title: t.services.corporate.title,
      description: t.services.corporate.description,
      image: '/images/corporate.webp',
    },
    {
      icon: PartyPopper,
      title: t.services.events.title,
      description: t.services.events.description,
      image: '/images/events.webp',
    },
    {
      icon: Calendar,
      title: t.services.daily.title,
      description: t.services.daily.description,
      image: '/images/food2.webp',
    },
    {
      icon: Utensils,
      title: t.services.special.title,
      description: t.services.special.description,
      image: '/images/food1.webp',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-orange-600 w-14 h-14 rounded-lg flex items-center justify-center">
                    <service.icon className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
