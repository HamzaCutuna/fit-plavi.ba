'use client';

import { motion } from 'framer-motion';
import { Download, BookOpen, Calendar, Users, GraduationCap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslation } from '../../../contexts/LanguageContext';

const JednogodisnjiPage = () => {
  const { t } = useTranslation();
  const studyPlan = [
    {
      year: 1,
      title: t('studij.jednogodisnji.year1'),
      semesters: [
        {
          semester: 1,
          subjects: [
            { name: "Upravljanje softverskim projektima", elective: false, ects: 9 },
            { name: "Obezbjeđenje kvaliteta softvera", elective: false, ects: 9 },
            { name: "Softver projekat", elective: false, ects: 9 },
            { name: "Internacionalizacija poslovanja", elective: false, ects: 6 }
          ]
        },
        {
          semester: 2,
          subjects: [
            { name: "Završni rad nakon drugog ciklusa", elective: false, ects: 27 }
          ]
        }
      ]
    }
  ];

  const calculateTotalECTS = (year: { semesters: Array<{ subjects: Array<{ ects: number }> }> }) => {
    return year.semesters.reduce((total: number, semester: { subjects: Array<{ ects: number }> }) => {
      return total + semester.subjects.reduce((semTotal: number, subject: { ects: number }) => {
        return semTotal + subject.ects;
      }, 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20" style={{ backgroundColor: '#912822' }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/master1.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair-display">
              {t('studij.jednogodisnji.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-gt-america">
              {t('studij.jednogodisnji.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-playfair-display">
              {t('studij.jednogodisnji.planTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 font-gt-america">
              {t('studij.jednogodisnji.planSubtitle')}
            </p>
            
            {/* Download Syllabus Button */}
            <motion.a
              href="/documents/jednogodisnji.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 text-white rounded-lg transition-colors duration-200 shadow-lg"
              style={{ backgroundColor: '#912822' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7a1f1a'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#912822'}
            >
              <Download className="w-5 h-5 mr-2" />
              {t('studij.jednogodisnji.downloadSyllabus')}
            </motion.a>
          </motion.div>

          {/* Study Plan Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
          >
            {/* Table Header */}
            <div className="px-6 py-4" style={{ backgroundColor: '#912822' }}>
              <div className="flex items-center">
                <BookOpen className="w-6 h-6 text-white mr-3" />
                <h3 className="text-xl font-bold text-white font-playfair-display">
                  {t('studij.jednogodisnji.masterProgram')}
                </h3>
                <span className="ml-4 px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                  {calculateTotalECTS(studyPlan[0])} ECTS
                </span>
              </div>
            </div>

            {/* Table Content */}
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                                          <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700 font-gt-america">
                      {t('studij.jednogodisnji.semester')}
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700 font-gt-america">
                      {t('studij.jednogodisnji.subject')}
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700 font-gt-america">
                      {t('studij.jednogodisnji.elective')}
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700 font-gt-america">
                      {t('studij.jednogodisnji.totalEcts')}
                    </th>
                    </tr>
                  </thead>
                  <tbody>
                    {studyPlan[0].semesters.map((semester) => (
                      semester.subjects.map((subject, subjectIndex) => (
                        <tr 
                          key={`${semester.semester}-${subjectIndex}`}
                          className={`transition-colors duration-200 ${
                            subjectIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                          }`}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#91282210'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = subjectIndex % 2 === 0 ? 'white' : '#f9fafb'}
                        >
                          <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900 font-gt-america">
                            {semester.semester}
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700 font-gt-america">
                            {subject.name}
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-center text-gray-600 font-gt-america">
                            {subject.elective ? t('studij.jednogodisnji.yes') : t('studij.jednogodisnji.no')}
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-center font-gt-america" style={{ color: '#912822' }}>
                            {subject.ects}
                          </td>
                        </tr>
                      ))
                    ))}
                  </tbody>
                  <tfoot style={{ backgroundColor: '#91282210' }}>
                    <tr>
                                          <td colSpan={3} className="border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 font-gt-america">
                      {t('studij.jednogodisnji.totalEcts')}:
                    </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm font-bold text-center font-gt-america" style={{ color: '#912822' }}>
                        {calculateTotalECTS(studyPlan[0])}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Program Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {/* First Semester */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 mr-3" style={{ color: '#912822' }} />
                <h4 className="text-lg font-semibold text-gray-900 font-playfair-display">
                  1. {t('studij.jednogodisnji.semester')}
                </h4>
              </div>
              <div className="space-y-3 flex-grow">
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: '#91282220' }}>
                  <span className="text-sm font-medium text-gray-700 font-gt-america">Upravljanje softverskim projektima</span>
                  <span className="text-sm font-bold font-gt-america" style={{ color: '#912822' }}>9 ECTS</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700 font-gt-america">Obezbjeđenje kvaliteta softvera</span>
                  <span className="text-sm font-bold font-gt-america" style={{ color: '#912822' }}>9 ECTS</span>
                </div>
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: '#91282220' }}>
                  <span className="text-sm font-medium text-gray-700 font-gt-america">Softver projekat</span>
                  <span className="text-sm font-bold font-gt-america" style={{ color: '#912822' }}>9 ECTS</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700 font-gt-america">Internacionalizacija poslovanja</span>
                  <span className="text-sm font-bold font-gt-america" style={{ color: '#912822' }}>6 ECTS</span>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700 font-gt-america">{t('studij.jednogodisnji.totalEctsFor')} 1. {t('studij.jednogodisnji.semester')}:</span>
                  <span className="text-sm font-bold font-gt-america" style={{ color: '#912822' }}>33 {t('studij.jednogodisnji.totalEcts')}</span>
                </div>
              </div>
            </div>

            {/* Second Semester */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 mr-3" style={{ color: '#912822' }} />
                <h4 className="text-lg font-semibold text-gray-900 font-playfair-display">
                  2. {t('studij.jednogodisnji.semester')}
                </h4>
              </div>
              <div className="space-y-3 flex-grow">
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: '#91282220' }}>
                  <span className="text-sm font-medium text-gray-700 font-gt-america">Završni rad nakon drugog ciklusa</span>
                  <span className="text-sm font-bold font-gt-america" style={{ color: '#912822' }}>27 ECTS</span>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700 font-gt-america">{t('studij.jednogodisnji.totalEctsFor')} 2. {t('studij.jednogodisnji.semester')}:</span>
                  <span className="text-sm font-bold font-gt-america" style={{ color: '#912822' }}>27 {t('studij.jednogodisnji.totalEcts')}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Summary Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="rounded-2xl shadow-xl p-8 text-white"
            style={{ backgroundColor: '#912822' }}
          >
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-white/70" />
              <h3 className="text-2xl font-bold mb-4 font-playfair-display">
                {t('studij.jednogodisnji.masterProgram')}
              </h3>
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-3xl font-bold text-white/90 font-gt-america">
                  {calculateTotalECTS(studyPlan[0])} {t('studij.jednogodisnji.totalEcts')}
                </p>
                <p className="text-white/70 font-gt-america">
                  {t('studij.jednogodisnji.distributedSemesters')}
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm text-white/70 font-gt-america">1. {t('studij.jednogodisnji.semester')}</p>
                    <p className="text-lg font-bold text-white font-gt-america">33 {t('studij.jednogodisnji.totalEcts')}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm text-white/70 font-gt-america">2. {t('studij.jednogodisnji.semester')}</p>
                    <p className="text-lg font-bold text-white font-gt-america">27 {t('studij.jednogodisnji.totalEcts')}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JednogodisnjiPage; 