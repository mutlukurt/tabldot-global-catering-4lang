import { Shield, Sparkles, Leaf, AlertCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Health() {
  const { t } = useLanguage();

  const healthItems = [
    {
      icon: Shield,
      title: t.health.certifications.title,
      description: t.health.certifications.description,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Sparkles,
      title: t.health.hygiene.title,
      description: t.health.hygiene.description,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Leaf,
      title: t.health.ingredients.title,
      description: t.health.ingredients.description,
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: AlertCircle,
      title: t.health.allergens.title,
      description: t.health.allergens.description,
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            {t.health.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            {t.health.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {healthItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              <div className="p-8">
                <div className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <item.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-12 rounded-xl overflow-hidden shadow-2xl bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/95 to-orange-800/90"></div>
          <div className="relative z-10 p-8 sm:p-12 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {t.about.title}
            </h2>
            <p className="text-lg sm:text-xl text-orange-100 leading-relaxed max-w-4xl mx-auto mb-4">
              {t.about.mission}
            </p>
            <p className="text-lg sm:text-xl text-orange-100 leading-relaxed max-w-4xl mx-auto">
              {t.about.vision}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
