import { ArrowRight, Award, Leaf, Users, Clock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t.home.features.quality.title,
      description: t.home.features.quality.description,
    },
    {
      icon: Leaf,
      title: t.home.features.fresh.title,
      description: t.home.features.fresh.description,
    },
    {
      icon: Users,
      title: t.home.features.custom.title,
      description: t.home.features.custom.description,
    },
    {
      icon: Clock,
      title: t.home.features.delivery.title,
      description: t.home.features.delivery.description,
    },
  ];

  const stats = [
    { value: '500+', label: t.home.stats.clients },
    { value: '50K+', label: t.home.stats.meals },
    { value: '15+', label: t.home.stats.experience },
    { value: '99%', label: t.home.stats.satisfaction },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
        aria-label="Hero section"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            {t.home.hero.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            {t.home.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button
              onClick={() => onNavigate('order')}
              className="px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>{t.home.hero.cta}</span>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg font-semibold hover:bg-white/20 transition-all transform hover:scale-105 shadow-lg"
            >
              {t.home.hero.ctaSecondary}
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.home.features.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300"
              >
                <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
        aria-label="Statistics section"
      >
        <div className="absolute inset-0 bg-orange-900/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-orange-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
        aria-label="About section"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {t.about.subtitle}
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
            {t.about.mission}
          </p>
          <button
            onClick={() => onNavigate('about')}
            className="px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg"
          >
            {t.nav.about}
          </button>
        </div>
      </section>
    </div>
  );
}
