import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Phone,
  Shield,
  Star,
} from 'lucide-react';
import { MEGA_MENU_SERVICES, vsMessages } from '../assets/vakeelsaabData';

interface LegalServicesOverviewProps {
  onNavigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const LegalServicesOverviewPage: React.FC<LegalServicesOverviewProps> = ({
  onNavigate,
  onOpenCallModal,
}) => {
  const sp = vsMessages.servicesPage;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#172B54] via-[#1B3A6B] to-[#0b1a3a] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1 rounded-full bg-[#FEC556]/15 border border-[#FEC556]/30 text-[#FEC556] text-xs font-bold uppercase tracking-wider">
            Verified Bar Council Advocates Across India
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold">{sp.heroTitle}</h1>
          <p className="text-white/85 text-base md:text-lg leading-relaxed">
            {sp.heroSubtitle}
          </p>
        </div>
      </section>

      {/* All 19 Services Grid */}
      <section className="py-14 px-6 pattern-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEGA_MENU_SERVICES.map((srv) => {
            const detail = sp[srv.servicePageKey] || {
              title: srv.name,
              description: 'Comprehensive legal advice and court representation across India.',
              feature1: 'Legal Consultation',
              feature2: 'Document Drafting',
              feature3: 'Court Representation',
              feature4: 'Case Strategy',
            };
            return (
              <div
                key={srv.slug}
                onClick={() => onNavigate(srv.href)}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#FEC556]/15 flex items-center justify-center shrink-0">
                      <img
                        src={srv.iconSrc}
                        alt={detail.title}
                        className="w-9 h-9 object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h2 className="text-xl font-bold text-[#172B54] group-hover:text-[#1B3A6B]">
                      {detail.title}
                    </h2>
                  </div>

                  <p className="text-sm text-[#4A5568] leading-relaxed mb-4">
                    {detail.description}
                  </p>

                  <ul className="space-y-1.5 mb-6">
                    {[
                      detail.feature1,
                      detail.feature2,
                      detail.feature3,
                      detail.feature4,
                    ]
                      .filter(Boolean)
                      .map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs text-[#172B54] font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FEC556] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#172B54] group-hover:text-[#FEC556] transition-colors">
                    {sp.knowMore}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#172B54] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-14 px-6 bg-[#EDF3FA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#172B54] section-headline">
              {sp.whyChooseTitle}
            </h2>
            <p className="text-[#4A5568] mt-3">{sp.whyChooseSubtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(sp.whyChoose).map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (item: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-2"
                >
                  <Shield className="w-8 h-8 text-[#FEC556] mb-2" />
                  <h3 className="text-lg font-bold text-[#172B54]">{item.title}</h3>
                  <p className="text-sm text-[#4A5568]">{item.description}</p>
                </div>
              )
            )}
          </div>

          <div className="mt-12 bg-[#172B54] text-white rounded-2xl p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold">{sp.ctaTitle}</h3>
            <p className="text-white/80 max-w-2xl mx-auto text-sm">{sp.ctaSubtitle}</p>
            <button
              onClick={onOpenCallModal}
              className="bg-[#FEC556] text-[#172B54] font-bold px-8 py-3.5 rounded-xl shadow-lg inline-flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>{sp.ctaButton}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ServiceDetailPageProps {
  messageKey: string;
  onNavigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  messageKey,
  onNavigate,
  onOpenCallModal,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const data = vsMessages[messageKey] || vsMessages['property-law'];
  const matchedMeta = MEGA_MENU_SERVICES.find((s) => s.messageKey === messageKey);

  // Normalize core areas or services list across different service schemas in messages.json
  const servicesList: Array<{ title: string; desc?: string }> = [];
  if (Array.isArray(data.services)) {
    data.services.forEach((srvTitle: string, i: number) => {
      servicesList.push({
        title: srvTitle,
        desc: Array.isArray(data.services_detailed) ? data.services_detailed[i] : undefined,
      });
    });
  } else if (Array.isArray(data.servicesList)) {
    data.servicesList.forEach((item: { title?: string; description?: string } | string) => {
      if (typeof item === 'string') {
        servicesList.push({ title: item });
      } else if (item && item.title) {
        servicesList.push({ title: item.title, desc: item.description });
      }
    });
  } else if (data.coreAreas && typeof data.coreAreas === 'object') {
    Object.values(data.coreAreas).forEach(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (area: any) => {
        if (area && area.title) {
          servicesList.push({
            title: area.title,
            desc: area.description || area.desc || (Array.isArray(area.points) ? area.points.join(' • ') : ''),
          });
        }
      }
    );
  }

  // Normalize FAQs
  const faqs: Array<{ question: string; answer: string }> = [];
  if (Array.isArray(data.faqs)) {
    data.faqs.forEach((f: { question: string; answer: string }) => faqs.push(f));
  } else if (data.faqs && typeof data.faqs === 'object') {
    Object.values(data.faqs).forEach(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (f: any) => {
        if (f && f.question) faqs.push({ question: f.question, answer: f.answer });
      }
    );
  }

  // Normalize locations
  const locations: string[] = data.locations
    ? (Object.values(data.locations) as string[])
    : [];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#172B54] via-[#1B3A6B] to-[#0b1a3a] text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => onNavigate('/legal-services')}
            className="inline-flex items-center gap-1.5 text-xs text-[#FEC556] hover:underline mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{data.backToServices || 'Back to Legal Services'}</span>
          </button>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3.5 py-1 text-xs text-[#FEC556] font-semibold">
                <Shield className="w-3.5 h-3.5" />
                <span>Verified Specialist Advocates • 100% Confidential</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                {data.title || matchedMeta?.name || 'Online Legal Consultation'}
              </h1>
              {data.subtitle && (
                <p className="text-lg text-[#FEC556] font-semibold">
                  {data.subtitle}
                </p>
              )}
              <p className="text-white/85 text-sm md:text-base leading-relaxed">
                {data.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenCallModal}
                  className="bg-[#FEC556] text-[#172B54] hover:bg-[#FEC556]/90 font-bold px-7 py-3.5 rounded-xl shadow-lg inline-flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>{data.ctaButton || 'Call +91 72848 72848 Now'}</span>
                </button>
                <button
                  onClick={() => onNavigate('/document-store')}
                  className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold px-6 py-3.5 rounded-xl text-sm cursor-pointer"
                >
                  Browse Legal Documents
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 text-center space-y-4">
              {matchedMeta && (
                <div className="w-20 h-20 rounded-2xl bg-white mx-auto flex items-center justify-center shadow">
                  <img
                    src={matchedMeta.iconSrc}
                    alt={matchedMeta.name}
                    className="w-12 h-12 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              <h3 className="text-lg font-bold text-white">
                Anonymous 10-Minute Trial Session
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Discuss facts privately with a verified specialist before deciding on court representation or documentation.
              </p>
              <div className="text-xl font-extrabold text-[#FEC556]">
                +91 72848 72848
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Overview & Core Services */}
      <section className="py-14 px-6 pattern-bg">
        <div className="max-w-6xl mx-auto space-y-12">
          {data.introTitle && (
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 space-y-3">
              <h2 className="text-2xl font-bold text-[#172B54]">{data.introTitle}</h2>
              <p className="text-[#2D3748] text-sm md:text-base leading-relaxed whitespace-pre-line">
                {data.introP1}
              </p>
            </div>
          )}

          {servicesList.length > 0 && (
            <div>
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#172B54] section-headline">
                  {data.services_title ||
                    data.servicesTitle ||
                    data.coreAreasTitle ||
                    'Key Legal Services We Provide'}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesList.map((srv, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 space-y-2.5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-[#172B54] text-[#FEC556] font-bold text-xs flex items-center justify-center shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-lg font-bold text-[#172B54]">
                        {srv.title}
                      </h3>
                    </div>
                    {srv.desc && (
                      <p className="text-sm text-[#4A5568] leading-relaxed">
                        {srv.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Why Choose Points */}
          {(Array.isArray(data.why_points) || Array.isArray(data.whyChooseList)) && (
            <div className="bg-[#EDF3FA] rounded-2xl p-8 border border-[#172B54]/10">
              <h2 className="text-2xl font-bold text-[#172B54] mb-6">
                {data.why_title || data.whyChooseTitle || 'Why Choose VakeelSaab?'}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {(data.why_points || data.whyChooseList).map(
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (pt: any, i: number) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-4 shadow-sm flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="text-sm text-[#172B54]">
                        {typeof pt === 'string' ? (
                          pt
                        ) : (
                          <>
                            <strong>{pt.title}: </strong>
                            <span>{pt.description || pt.desc}</span>
                          </>
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* Client Reviews for this Practice Area */}
          {Array.isArray(data.reviews) && data.reviews.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-[#172B54] mb-6 text-center">
                Verified Client Experiences
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {data.reviews.map(
                  (rev: { name: string; text: string }, idx: number) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-6 shadow border border-gray-100 space-y-3"
                    >
                      <div className="flex items-center gap-1 text-[#FEC556]">
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} className="w-4 h-4 fill-[#FEC556]" />
                        ))}
                      </div>
                      <p className="text-sm text-[#2D3748] italic">
                        &ldquo;{rev.text}&rdquo;
                      </p>
                      <p className="text-xs font-bold text-[#172B54]">— {rev.name}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* Practice Area FAQs */}
          {faqs.length > 0 && (
            <div className="bg-[#172B54] text-white rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FEC556]">
                {data.faqTitle || 'Frequently Asked Questions'}
              </h2>
              <div className="space-y-3">
                {faqs.map((f, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div
                      key={i}
                      className="rounded-xl bg-white/5 border border-white/10 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-white/5 cursor-pointer"
                      >
                        <span className="font-semibold text-sm md:text-base text-white">
                          {i + 1}. {f.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#FEC556] shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-sm text-white/80 leading-relaxed border-t border-white/10 pt-3">
                          {f.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* City Locations */}
          {locations.length > 0 && (
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-base font-bold text-[#172B54] mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FEC556]" />
                <span>{data.locationLinksTitle || 'Find Lawyers in Your City'}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {locations.map((loc, idx) => (
                  <button
                    key={idx}
                    onClick={onOpenCallModal}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#EDF3FA] hover:bg-[#FEC556]/25 text-[#172B54] font-medium transition-colors cursor-pointer"
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
