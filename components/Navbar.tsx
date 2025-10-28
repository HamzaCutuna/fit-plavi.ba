'use client';

import { useState, Fragment, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '../contexts/LanguageContext';

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFakultetDropdownOpen, setIsFakultetDropdownOpen] = useState(false);
  const [isUpisDropdownOpen, setIsUpisDropdownOpen] = useState(false);
  const [isStudijDropdownOpen, setIsStudijDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { 
      name: t('navbar.faculty'), 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: t('navbar.aboutFaculty'), href: '/fakultet' },
        { name: t('navbar.staff'), href: '/osoblje' },
      ]
    },
    { 
      name: t('navbar.enrollment'), 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: t('navbar.whatToEnroll'), href: '/upis/sta-upisati' },
        { name: t('navbar.studyMethods'), href: '/upis/nacini-studiranja' },
        { name: t('navbar.studyPrices'), href: '/upis/cijene-studija' }
      ]
    },
    { 
      name: t('navbar.studies'), 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: t('navbar.firstCycle'), href: '#', isSeparator: true, key: 'i-ciklus-separator' },
        { name: t('navbar.studyRules'), href: '/documents/pravila-studiranja-prvi-ciklus.pdf', key: 'pravila-studiranja-i', target: '_blank' },
        { name: t('navbar.curriculumSoftwareDev'), href: '/studij/razvoj-softvera', key: 'razvoj-softvera' },
        { name: t('navbar.curriculumSoftwareEng'), href: '/studij/softverski-inzenjering', key: 'softverski-inzenjering' },
        { name: t('navbar.consultationTerms'), href: '/studij/termini-konsultacija', key: 'termini-konsultacija' },
        { name: t('navbar.secondCycle'), href: '#', isSeparator: true, key: 'ii-ciklus-separator' },
        { name: t('navbar.studyRules'), href: '/documents/pravila-studiranja-drugi-ciklus.pdf', key: 'pravila-studiranja-ii', target: '_blank' },
        { name: t('navbar.curriculumOneYear'), href: '/studij/jednogodisnji', key: 'jednogodisnji' },
        { name: t('navbar.curriculumTwoYear'), href: '/studij/dvogodisnji', key: 'dvogodisnji' }
      ]
    },
    { name: t('navbar.news'), href: '/vijesti' },
    { name: t('navbar.contact'), href: '/kontakt' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      (isScrolled || isMenuOpen) ? 'bg-primary-900/95 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <Link 
              href="/" 
              className="flex items-center space-x-3"
            >
              <div className="relative group">
                <Image 
                  src="/images/logo-veci.png" 
                  alt="FIT Mostar Logo" 
                  width={48}
                  height={48}
                  className="h-10 md:h-12 w-auto transition-all duration-300 group-hover:opacity-0"
                />
                <Image 
                  src="/images/logo-veci-hover-plavi.png" 
                  alt="FIT Mostar Logo Hover" 
                  width={48}
                  height={48}
                  className="h-10 md:h-12 w-auto transition-all duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
                />
              </div>
              <span className={`text-xs sm:text-sm md:text-base lg:text-lg font-playfair-display font-bold transition-colors duration-300 ease-in-out ${
                isScrolled 
                  ? 'text-white hover:text-primary-100' 
                  : 'text-white hover:text-primary-100'
              }`}>
                {t('navbar.logo')}
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu - Pushed to the right */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className="relative"
                >
                  {item.hasDropdown ? (
                    <div
                      onMouseEnter={() => {
                        if (item.name === t('navbar.faculty')) setIsFakultetDropdownOpen(true);
                        if (item.name === t('navbar.enrollment')) setIsUpisDropdownOpen(true);
                        if (item.name === t('navbar.studies')) setIsStudijDropdownOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (item.name === t('navbar.faculty')) setIsFakultetDropdownOpen(false);
                        if (item.name === t('navbar.enrollment')) setIsUpisDropdownOpen(false);
                        if (item.name === t('navbar.studies')) setIsStudijDropdownOpen(false);
                      }}
                      className="relative"
                    >
                      <button
                        className={`relative px-4 py-2 font-medium transition-all duration-300 group flex items-center space-x-1 ${
                          isScrolled 
                            ? 'text-white hover:text-primary-100' 
                            : 'text-white hover:text-primary-100'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          (item.name === t('navbar.faculty') && isFakultetDropdownOpen) || 
                          (item.name === t('navbar.enrollment') && isUpisDropdownOpen) ||
                          (item.name === t('navbar.studies') && isStudijDropdownOpen) ? 'rotate-180' : ''
                        }`} />
                        <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:left-0 bg-primary-400`}></span>
                      </button>
                      
                      <AnimatePresence>
                        {((item.name === t('navbar.faculty') && isFakultetDropdownOpen) || 
                          (item.name === t('navbar.enrollment') && isUpisDropdownOpen) ||
                          (item.name === t('navbar.studies') && isStudijDropdownOpen)) && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                          >
                            {item.dropdownItems?.map((dropdownItem) => (
                              'isSeparator' in dropdownItem && dropdownItem.isSeparator ? (
                                <div
                                  key={'key' in dropdownItem ? dropdownItem.key : (dropdownItem as { name: string }).name}
                                  className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50 border-b border-gray-100"
                                >
                                  {(dropdownItem as { name: string }).name}
                                </div>
                              ) : (
                                <a
                                  key={'key' in dropdownItem ? dropdownItem.key : (dropdownItem as { name: string }).name}
                                  href={(dropdownItem as { href: string }).href}
                                  target={'target' in dropdownItem ? dropdownItem.target : undefined}
                                  rel={'target' in dropdownItem && dropdownItem.target === '_blank' ? 'noopener noreferrer' : undefined}
                                  className="block px-4 py-3 text-gray-700 hover:text-primary-700 hover:bg-primary-50 transition-all duration-200 border-b border-gray-50 last:border-b-0"
                                >
                                  {(dropdownItem as { name: string }).name}
                                </a>
                              )
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                        isScrolled 
                          ? 'text-white hover:text-primary-100' 
                          : 'text-white hover:text-primary-100'
                      }`}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:left-0 bg-primary-400`}></span>
                    </a>
                  )}
                </motion.div>
              ))}
              <LanguageSwitcher isScrolled={isScrolled} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex-shrink-0 flex items-center space-x-2">
            <LanguageSwitcher isScrolled={isScrolled} />
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`transition-colors p-2 rounded-lg ${
                isScrolled 
                  ? 'text-white hover:text-primary-100 hover:bg-white/10' 
                  : 'text-white hover:text-primary-100 hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Headless UI */}
      <Transition
        show={isMenuOpen}
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 -translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-4"
      >
          <div className="lg:hidden border-t border-white/20 shadow-lg bg-primary-900/95">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item, index) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => {
                        if (item.name === t('navbar.faculty')) setIsFakultetDropdownOpen(!isFakultetDropdownOpen);
                        if (item.name === t('navbar.enrollment')) setIsUpisDropdownOpen(!isUpisDropdownOpen);
                        if (item.name === t('navbar.studies')) setIsStudijDropdownOpen(!isStudijDropdownOpen);
                      }}
                      className="flex items-center justify-between w-full text-white hover:text-primary-100 text-lg font-medium transition-colors duration-200 py-2 border-b border-white/20"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        (item.name === t('navbar.faculty') && isFakultetDropdownOpen) || 
                        (item.name === t('navbar.enrollment') && isUpisDropdownOpen) ||
                        (item.name === t('navbar.studies') && isStudijDropdownOpen) ? 'rotate-180' : ''
                      }`} />
                    </button>
                    <AnimatePresence>
                      {((item.name === t('navbar.faculty') && isFakultetDropdownOpen) || 
                        (item.name === t('navbar.enrollment') && isUpisDropdownOpen) ||
                        (item.name === t('navbar.studies') && isStudijDropdownOpen)) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 space-y-2 mt-2"
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            'isSeparator' in dropdownItem && dropdownItem.isSeparator ? (
                              <motion.div
                                key={'key' in dropdownItem ? dropdownItem.key : (dropdownItem as { name: string }).name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50"
                              >
                                {(dropdownItem as { name: string }).name}
                              </motion.div>
                            ) : (
                              <motion.a
                                key={'key' in dropdownItem ? dropdownItem.key : (dropdownItem as { name: string }).name}
                                href={(dropdownItem as { href: string }).href}
                                target={'target' in dropdownItem ? dropdownItem.target : undefined}
                                rel={'target' in dropdownItem && dropdownItem.target === '_blank' ? 'noopener noreferrer' : undefined}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="block text-primary-100 hover:text-white text-base font-medium transition-colors duration-200 py-2"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {(dropdownItem as { name: string }).name}
                              </motion.a>
                            )
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.a
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="block text-white hover:text-primary-100 text-lg font-medium transition-colors duration-200 py-2 border-b border-white/20 last:border-b-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                )}
              </div>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar; 