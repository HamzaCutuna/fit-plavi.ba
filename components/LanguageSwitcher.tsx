'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isScrolled = false }) => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'bs' ? 'en' : 'bs');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className={`relative px-4 py-2 font-medium transition-all duration-300 group inline-flex items-center ${
        isScrolled 
          ? 'text-white hover:text-red-100' 
          : 'text-white hover:text-red-100'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={t('common.language')}
    >
      <Globe className="w-4 h-4 mr-2" />
      <span className="uppercase font-semibold">
        {language}
      </span>
      <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:left-0`}
        style={{ backgroundColor: '#912822' }}
      ></span>
    </motion.button>
  );
};

export default LanguageSwitcher; 