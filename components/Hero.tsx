'use client';

import { ArrowRight, Play } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-white">
      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-[500px] bg-gray-100">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair-display font-bold mb-6 leading-tight">
              {t('hero.welcome') || 'Dobrodošli na'}
              <br />
              <span className="text-red-100">
                {t('hero.title')}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-gt-america font-light">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/fakultet"
                className="inline-flex items-center justify-center px-8 py-3 text-white font-gt-america font-medium text-lg hover:opacity-90 transition-colors duration-200 w-full sm:w-auto"
                style={{ backgroundColor: '#912822' }}
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              
              <a
                href="https://www.youtube.com/watch?v=1tB1_j6_vg4&ab_channel=FITMostar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-gt-america font-medium text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 w-full sm:w-auto"
              >
                <Play className="mr-2 w-5 h-5" />
                {t('hero.promoVideo') || 'Promo video'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Excellence Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair-display font-bold text-gray-900 mb-4">
              {t('hero.academicExcellence.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-gt-america">
              {t('hero.academicExcellence.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#91282220' }}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#912822' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair-display font-semibold text-gray-900 mb-3">
                {t('hero.academicExcellence.features.education.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed font-gt-america">
                {t('hero.academicExcellence.features.education.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#91282220' }}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#912822' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair-display font-semibold text-gray-900 mb-3">
                {t('hero.academicExcellence.features.innovation.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed font-gt-america">
                {t('hero.academicExcellence.features.innovation.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#91282220' }}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#912822' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair-display font-semibold text-gray-900 mb-3">
                {t('hero.academicExcellence.features.community.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed font-gt-america">
                {t('hero.academicExcellence.features.community.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 