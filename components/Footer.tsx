'use client';

import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Faculty Info */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <h3 className="text-2xl font-noto-serif font-bold mb-6 text-white">
              FIT Mostar
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed font-gt-america">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start">
              {[
                { icon: Facebook, href: "https://www.facebook.com/edufitba", name: "facebook" },
                { icon: Instagram, href: "https://www.instagram.com/edufitba/", name: "instagram" },
                { icon: Linkedin, href: "https://www.linkedin.com/school/fit-mostar", name: "linkedin" },
                { icon: Youtube, href: "https://www.youtube.com/user/eduFITba", name: "youtube" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:opacity-80 rounded flex items-center justify-center transition-colors duration-200"
                  style={{ backgroundColor: '#912822' }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-noto-serif font-semibold mb-6 text-white">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {[
                { name: t('footer.aboutFaculty'), href: '/fakultet' },
                { name: t('footer.staff'), href: '/osoblje' },
                { name: t('footer.news'), href: '/vijesti' },
                { name: t('footer.contact'), href: '/kontakt' }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-gt-america"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Info */}
          <div>
            <h4 className="text-lg font-noto-serif font-semibold mb-6 text-white">{t('footer.serviceInfo')}</h4>
            <ul className="space-y-2">
              {[
                t('footer.bankAccount'),
                t('footer.accountNumber'),
                t('footer.bank')
              ].map((item) => (
                <li key={item}>
                  <span className="text-gray-300 font-gt-america">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-noto-serif font-semibold mb-6 text-white">{t('footer.contact')}</h4>
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  content: t('footer.location'),
                  href: null,
                  id: "address"
                },
                {
                  icon: Phone,
                  content: "+387 36 281 160",
                  href: "tel:+38736281160",
                  id: "phone"
                },
                {
                  icon: Mail,
                  content: "esluzba@edu.fit.ba",
                  href: "mailto:esluzba@edu.fit.ba",
                  id: "email"
                },
                {
                  icon: Clock,
                  content: t('footer.workingHoursValue'),
                  href: null,
                  id: "hours"
                }
              ].map((contact) => (
                <div
                  key={contact.id}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-800 rounded flex items-center justify-center mt-0.5">
                    <contact.icon className="w-3 h-3 text-gray-400" />
                  </div>
                  <div>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 whitespace-pre-line text-sm font-gt-america"
                      >
                        {contact.content}
                      </a>
                    ) : (
                      <p className="text-gray-300 whitespace-pre-line text-sm font-gt-america">
                        {contact.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 text-center font-gt-america">
              <p>© {currentYear} {t('hero.title')} Mostar.</p>
              <p>{t('footer.allRightsReserved')}.</p>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center">
              {[
                { name: 'UNMO', url: 'https://www.unmo.ba/' },
                { name: 'Ministarstvo obrazovanja', url: 'https://monkshnk.gov.ba/' },
                { name: 'Federalno ministarstvo', url: 'http://www.fmon.gov.ba/' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-gt-america"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-40"
        style={{ backgroundColor: '#912822' }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;