'use client';

import Link from 'next/link';
import { ArrowUpRight, MonitorSmartphone, Code2, Mail, Server } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

type ServiceCard = {
  id: string;
  title: string;
  description: string;
  instructions?: string;
  linkLabel: string;
  linkHref: string;
  Icon: typeof MonitorSmartphone;
  resourcesTitle?: string;
  resources?: { label: string; href: string }[];
};

const ServicesTools = () => {
  const { t } = useTranslation();

  const services: ServiceCard[] = [
    {
      id: 'dlwms',
      title: t('servicesTools.cards.dlwms.title') || 'DLWMS',
      description: t('servicesTools.cards.dlwms.description') || 'Pregledajte obavijesti, preuzmite nastavne materijale, prijavite ispite i polažite testove.',
      instructions: t('servicesTools.cards.dlwms.instructions') || 'Prijavite se brojem indeksa i lozinkom.',
      linkLabel: t('servicesTools.cards.dlwms.linkLabel') || 'Prijavite se na DLWMS',
      linkHref: 'https://www.fit.ba/student/',
      Icon: MonitorSmartphone,
    },
    {
      id: 'dev-tools',
      title: t('servicesTools.cards.devTools.title') || 'Dev Tools',
      description: t('servicesTools.cards.devTools.description') || 'Pristup Microsoft razvojnom okruženju za studente i nastavnike u okviru Azure Dev Tools for Teaching programa.',
      instructions: t('servicesTools.cards.devTools.instructions') || 'Koristite adresu ime.prezime@edu.fit.ba.',
      linkLabel: t('servicesTools.cards.devTools.linkLabel') || 'Pristupite Dev Tools',
      linkHref: 'https://aka.ms/devtoolsforteaching',
      Icon: Code2,
    },
    {
      id: 'office-365',
      title: t('servicesTools.cards.office365.title') || 'Office 365',
      description: t('servicesTools.cards.office365.description') || 'E-mail, Office Online, OneDrive, Yammer i SharePoint uz mogućnost instalacije Office aplikacija na pet uređaja.',
      instructions: t('servicesTools.cards.office365.instructions') || 'Prijavite se fakultetskom e-mail adresom.',
      linkLabel: t('servicesTools.cards.office365.linkLabel') || 'Otvorite Office 365',
      linkHref: 'https://www.office.com',
      Icon: Mail,
    },
    {
      id: 'vps',
      title: t('servicesTools.cards.vps.title') || 'VPS',
      description: t('servicesTools.cards.vps.description') || 'Server za studentske projekte sa servisima koje voditelji kolegija dodjeljuju studentima.',
      instructions: t('servicesTools.cards.vps.instructions') || 'Login podatke dobijate od nastavnika.',
      linkLabel: t('servicesTools.cards.vps.linkLabel') || 'Otvorite VPS',
      linkHref: 'https://app.fit.ba:8443',
      Icon: Server,
      resourcesTitle: t('servicesTools.cards.vps.resourcesTitle') || 'Dostupni servisi',
      resources: [
        { label: 'Plesk', href: 'https://app.fit.ba:8443' },
        { label: 'Redmine', href: 'http://redmine.fit.ba' },
        { label: 'JIRA Software', href: 'http://jira.app.fit.ba' },
        { label: 'SVN', href: 'http://svn.fit.ba' },
        { label: 'Instalirane aplikacije', href: 'http://app.fit.ba' },
      ],
    },
  ];

  const sectionTitle = t('servicesTools.title') || 'Servisi i alati';
  const sectionDescription = t('servicesTools.description') || 'Najčešće korišteni fakultetski servisi dostupni su jednim klikom.';

  return (
    <section className="py-16 bg-white" aria-labelledby="services-tools-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="services-tools-heading"
            className="text-3xl md:text-4xl font-playfair-display font-bold text-gray-900 mb-4"
          >
            {sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-gt-america">
            {sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-3xl border border-primary-100 bg-white p-6 flex flex-col gap-5 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-700">
                  <service.Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-playfair-display font-semibold text-primary-900 leading-tight">{service.title}</h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-primary-800">
                {service.description}
              </p>
              {service.instructions && (
                <p className="text-sm font-semibold text-primary-700">
                  {service.instructions}
                </p>
              )}
              {service.resources && (
                <div className="mt-2">
                  {service.resourcesTitle && (
                    <p className="text-xs font-semibold uppercase tracking-wide mb-2 text-primary-600">
                      {service.resourcesTitle}
                    </p>
                  )}
                  <ul className="space-y-1 text-sm">
                    {service.resources.map((resource) => (
                      <li key={resource.label}>
                        <Link
                          href={resource.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary-800 hover:text-primary-600 underline-offset-4"
                        >
                          {resource.label}
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="pt-2">
                <Link
                  href={service.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-sm text-primary-900 hover:text-primary-600"
                >
                  {service.linkLabel}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTools;

