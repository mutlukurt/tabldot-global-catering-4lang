import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Tabldot</h3>
            <p className="text-sm leading-relaxed">
              {t.about.mission}
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t.footer.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" aria-hidden="true" />
                <a href="mailto:info@tabldot.com" className="text-sm hover:text-orange-500 transition-colors">
                  info@tabldot.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" aria-hidden="true" />
                <a href="tel:+15551234567" className="text-sm hover:text-orange-500 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500" aria-hidden="true" />
                <span className="text-sm">123 Culinary Street, Food City</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t.footer.followUs}</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Visit our Twitter page"
              >
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {currentYear} Mutlu Kurt - Licensed Under the MIT License
          </p>
        </div>
      </div>
    </footer>
  );
}
