'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, GraduationCap, Users, Clock, CheckCircle } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const ProgramsShowcase = () => {
  const { t } = useTranslation();

  const programs = [
    {
      id: 'razvoj-softvera',
      title: t('programs.softwareDevelopment.title') || 'Razvoj softvera',
      duration: '3 godine',
      level: 'Prvi ciklus',
      description: t('programs.softwareDevelopment.description') || 'Praktično orijentisan program koji te priprema za rad u IT industriji',
      features: [
        t('programs.softwareDevelopment.features.web') || 'Web razvoj',
        t('programs.softwareDevelopment.features.mobile') || 'Mobilne aplikacije',
        t('programs.softwareDevelopment.features.database') || 'Baze podataka',
        t('programs.softwareDevelopment.features.projects') || 'Timski projekti'
      ],
      icon: Code,
      color: 'from-blue-500 to-blue-700',
      href: '/studij/razvoj-softvera'
    },
    {
      id: 'softverski-inzenjering',
      title: t('programs.softwareEngineering.title') || 'Softverski inženjering',
      duration: '4 godine',
      level: 'Prvi ciklus',
      description: t('programs.softwareEngineering.description') || 'Duboko znanje softverskog inženjerstva i arhitekture sistema',
      features: [
        t('programs.softwareEngineering.features.architecture') || 'Arhitektura sistema',
        t('programs.softwareEngineering.features.algorithms') || 'Algoritmi i strukture',
        t('programs.softwareEngineering.features.testing') || 'Testiranje softvera',
        t('programs.softwareEngineering.features.management') || 'Upravljanje projektima'
      ],
      icon: GraduationCap,
      color: 'from-purple-500 to-purple-700',
      href: '/studij/softverski-inzenjering'
    }
  ];

  const masterPrograms = [
    {
      id: 'jednogodisnji',
      title: t('programs.oneYearMaster.title') || 'Jednogodišnji master',
      duration: '1 godina',
      level: 'Drugi ciklus',
      description: t('programs.oneYearMaster.description') || 'Specijalizacija u oblasti informacijskih tehnologija',
      href: '/studij/jednogodisnji'
    },
    {
      id: 'dvogodisnji',
      title: t('programs.twoYearMaster.title') || 'Dvogodišnji master',
      duration: '2 godine',
      level: 'Drugi ciklus',
      description: t('programs.twoYearMaster.description') || 'Duboko istraživanje u oblasti IT',
      href: '/studij/dvogodisnji'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-noto-serif font-bold text-gray-900 mb-4">
            {t('programs.title') || 'Studijski programi'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-gt-america">
            {t('programs.description') || 'Moderni programi studija koji te pripremaju za uspješnu karijeru u informacijskim tehnologijama'}
          </p>
        </div>

        {/* Main Programs */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-4`} style={{ backgroundColor: '#91282220' }}>
                      <program.icon className="w-8 h-8" style={{ color: '#912822' }} />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded mb-2">
                      <Clock className="w-3 h-3 mr-1" />
                      {program.duration}
                    </div>
                    <div className="text-sm text-gray-500">{program.level}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-noto-serif font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed font-gt-america">
                  {program.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={program.href}
                  className="inline-flex items-center px-6 py-3 text-white font-gt-america font-medium rounded hover:opacity-90 transition-colors duration-200"
                  style={{ backgroundColor: '#912822' }}
                >
                  {t('programs.learnMore') || 'Saznaj više'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Master Programs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-noto-serif font-bold text-gray-900 mb-4">
              {t('programs.master.title') || 'Master studiji'}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto font-gt-america">
              {t('programs.master.description') || 'Nastavite svoje obrazovanje sa našim master programima'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {masterPrograms.map((program, index) => (
              <div
                key={program.id}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-noto-serif font-semibold text-gray-900">
                    {program.title}
                  </h4>
                  <div className="inline-flex items-center px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded">
                    <Clock className="w-3 h-3 mr-1" />
                    {program.duration}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed font-gt-america">
                  {program.description}
                </p>
                <a
                  href={program.href}
                  className="inline-flex items-center text-red-800 hover:text-red-900 font-gt-america font-medium"
                >
                  {t('programs.learnMore') || 'Saznaj više'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a
            href="/kontakt"
            className="inline-flex items-center px-8 py-4 text-white font-gt-america font-medium text-lg rounded hover:opacity-90 transition-colors duration-200"
            style={{ backgroundColor: '#912822' }}
          >
            <Users className="mr-2 w-5 h-5" />
            {t('programs.enrollNow') || 'Prijavite se sada'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsShowcase;
