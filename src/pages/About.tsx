import { Target, Eye, Award, Users } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1&fm=webp)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            {t.about.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            {t.about.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <Target className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.nav.about.split(' ')[0]} Mission
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {t.about.mission}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <Eye className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.nav.about.split(' ')[0]} Vision
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {t.about.vision}
            </p>
          </div>
        </div>

        <div
          className="rounded-xl overflow-hidden shadow-2xl bg-cover bg-center relative mb-12"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1&fm=webp)',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 p-12 sm:p-16 md:p-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <Award className="h-16 w-16 text-orange-500 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-3xl font-bold text-white mb-3">
                  {t.home.features.quality.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {t.home.features.quality.description}
                </p>
              </div>

              <div className="text-center">
                <Users className="h-16 w-16 text-orange-500 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-3xl font-bold text-white mb-3">
                  {t.home.features.custom.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {t.home.features.custom.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-orange-100">
            Join hundreds of satisfied clients who trust Tabldot for their catering needs
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            {t.home.hero.cta}
          </button>
        </div>
      </div>
    </div>
  );
}
