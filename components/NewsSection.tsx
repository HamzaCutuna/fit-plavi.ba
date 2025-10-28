'use client';

import { Calendar, ArrowRight, User, Tag } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '../contexts/LanguageContext';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  author: string;
  category: string;
  description: string;
  fullContent: string;
  image: string;
}

const NewsSection = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const featuredNews = {
    id: 'featured-1',
    title: t('news.items.vacationTitle'),
    date: "18. juli 2025.",
    author: "FIT Mostar",
    category: t('news.categories.announcements'),
    description: t('news.items.vacationExcerpt'),
    fullContent: t('news.items.vacationExcerpt') + " Obavještavamo studente da Fakultet neće raditi do 18.8.2025. godine. PRIJATAN ODMOR SVIMA!",
    image: "/images/fit1.png"
  };

  const recentNews = [
    {
      id: 'recent-1',
      title: t('news.items.enrollmentTitle'),
      date: "11. juli 2025.",
      author: "FIT Mostar",
      category: t('news.categories.announcements'),
      description: t('news.items.enrollmentExcerpt'),
      fullContent: t('news.items.enrollmentExcerpt') + "\n\nKandidati su dužni da se jave u sekretarijat fakulteta u terminu od 15. do 25. jula 2025. godine sa potrebnom dokumentacijom.",
      image: "/images/fit2.jpg"
    },
    {
      id: 'recent-2',
      title: t('news.items.rankListTitle'),
      date: "10. juli 2025.",
      author: "FIT Mostar",
      category: t('news.categories.enrollment'),
      description: t('news.items.rankListExcerpt'),
      fullContent: t('news.items.rankListExcerpt') + "\n\nLista je dostupna na zvaničnoj web stranici fakulteta i na oglasnoj tabli.\n\nKandidati koji se nalaze na listi mogu pristupiti upisu u određenom terminu. Za sve dodatne informacije obratite se sekretarijatu fakulteta.",
      image: "/images/fit4.jpg"
    },
    {
      id: 'recent-3',
      title: t('news.items.assistantTitle'),
      date: "13. januar 2025.",
      author: "FIT Mostar",
      category: t('news.categories.competition'),
      description: t('news.items.assistantExcerpt'),
      fullContent: t('news.items.assistantExcerpt') + "\n\nUslovi konkursa:\n- Završen II ciklus studija (master/magistar) iz relevantne oblasti\n- Prosjek ocjena min. 8,00\n- Poznavanje engleskog jezika\n\nPrijave se podnose do 15. februara 2025. godine u sekretarijatu fakulteta.",
      image: "/images/fit3.jpg"
    }
  ];

  const handleOpenModal = (news: NewsItem) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair-display font-bold text-gray-900 mb-4">
            {t('news.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-gt-america">
            {t('news.description')}
          </p>
        </div>

        {/* Featured News Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-16 hover:shadow-md transition-shadow duration-200">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-64 lg:h-full overflow-hidden">
              <Image
                src={featuredNews.image}
                alt={featuredNews.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded">
                  {featuredNews.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Meta Info */}
              <div className="flex items-center text-gray-500 mb-6 space-x-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{featuredNews.date}</span>
                </div>
                <span className="text-gray-400">•</span>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{featuredNews.author}</span>
                </div>
              </div>

              <h3 className="text-2xl lg:text-3xl font-playfair-display font-bold text-gray-900 mb-6 leading-tight">
                {featuredNews.title}
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed text-lg font-gt-america">
                {featuredNews.description}
              </p>

              <button
                onClick={() => handleOpenModal(featuredNews)}
                className="inline-flex items-center text-primary-700 hover:text-primary-800 hover:cursor-pointer font-gt-america font-medium text-lg"
              >
                {t('common.readMore')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Recent News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {recentNews.map((news, index) => (
            <div
              key={news.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-2 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded">
                    {news.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 mb-3 space-x-3">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span className="text-xs font-medium">{news.date}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    <span className="text-xs font-medium">{news.author}</span>
                  </div>
                </div>
                <h4 className="text-lg font-playfair-display font-bold text-gray-900 mb-3 leading-tight flex-grow">
                  {news.title}
                </h4>
                <button
                  onClick={() => handleOpenModal(news)}
                  className="inline-flex items-center text-primary-700 hover:text-primary-800 hover:cursor-pointer font-gt-america font-medium text-sm mt-auto"
                >
                  {t('common.readMore')}
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center">
          <a
            href="/vijesti"
            className="inline-flex items-center px-8 py-4 text-white font-gt-america font-medium text-lg bg-primary-600 hover:bg-primary-700 active:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ring-primary))/0.4] transition-colors duration-200"
          >
            {t('news.viewAll')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* News Modal */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={handleCloseModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {selectedNews && (
                    <>
                      <div className="relative">
                        <Image
                          src={selectedNews.image}
                          alt={selectedNews.title}
                          width={800}
                          height={256}
                          className="w-full h-64 object-cover rounded mb-6"
                        />
                        <div className="absolute top-6 left-6">
                          <span className="inline-flex items-center px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded">
                            {selectedNews.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-500 mb-4 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{selectedNews.date}</span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{selectedNews.author || 'FIT Mostar'}</span>
                        </div>
                      </div>

                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-playfair-display font-bold text-gray-900 mb-4"
                      >
                        {selectedNews.title}
                      </Dialog.Title>

                      <div className="text-gray-600 leading-relaxed whitespace-pre-line font-gt-america">
                        {selectedNews.fullContent}
                      </div>

                      <div className="mt-6 flex justify-end">
                        <button
                          className="inline-flex justify-center border border-transparent px-4 py-2 text-sm font-gt-america font-medium text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring-primary))/0.4] focus-visible:ring-offset-2"
                          onClick={handleCloseModal}
                        >
                          {t('common.close')}
                        </button>
                      </div>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default NewsSection; 