import React, { useState } from 'react';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock,
  CreditCard,
  FileText,
  IndianRupee,
  Lock,
  MessageCircle,
  PersonStanding,
  Phone,
  Shield,
  Smartphone,
  Star,
  Target,
  Users,
  VenetianMask,
  Zap,
} from 'lucide-react';
import {
  COVERED_BY_LOGOS,
  MEGA_MENU_SERVICES,
  vsMessages,
} from '../assets/vakeelsaabData';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenCallModal,
}) => {
  const home = vsMessages.home;
  const [isMobileAppMode, setIsMobileAppMode] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const phoneSteps = [
    {
      step: 1,
      title: home.howItWorks.callSteps['1'].title,
      description: home.howItWorks.callSteps['1'].description,
      icon: Phone,
    },
    {
      step: 2,
      title: home.howItWorks.callSteps['2'].title,
      description: home.howItWorks.callSteps['2'].description,
      icon: MessageCircle,
    },
    {
      step: 3,
      title: home.howItWorks.callSteps['3'].title,
      description: home.howItWorks.callSteps['3'].description,
      icon: Users,
    },
    {
      step: 4,
      title: home.howItWorks.callSteps['4'].title,
      description: home.howItWorks.callSteps['4'].description,
      icon: CreditCard,
    },
    {
      step: 5,
      title: home.howItWorks.callSteps['5'].title,
      description: home.howItWorks.callSteps['5'].description,
      icon: Phone,
    },
    {
      step: 6,
      title: home.howItWorks.callSteps['6'].title,
      description: home.howItWorks.callSteps['6'].description,
      icon: Clock,
    },
    {
      step: 7,
      title: home.howItWorks.callSteps['7'].title,
      description: home.howItWorks.callSteps['7'].description,
      icon: CheckCircle2,
    },
  ];

  const appSteps = [
    {
      step: 1,
      title: home.howItWorks.appSteps['1'].title,
      description: home.howItWorks.appSteps['1'].description,
    },
    {
      step: 2,
      title: home.howItWorks.appSteps['2'].title,
      description: home.howItWorks.appSteps['2'].description,
    },
    {
      step: 3,
      title: home.howItWorks.appSteps['3'].title,
      description: home.howItWorks.appSteps['3'].description,
    },
    {
      step: 4,
      title: home.howItWorks.appSteps['4'].title,
      description: home.howItWorks.appSteps['4'].description,
    },
    {
      step: 5,
      title: home.howItWorks.appSteps['5'].title,
      description: home.howItWorks.appSteps['5'].description,
    },
    {
      step: 6,
      title: home.howItWorks.appSteps['6'].title,
      description: home.howItWorks.appSteps['6'].description,
    },
  ];

  const whyChooseItems = [
    {
      title: home.whyChoose2.item1.title,
      description: home.whyChoose2.item1.desc,
      icon: Lock,
      gradient: 'from-blue-500/10 to-blue-600/5',
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-600',
    },
    {
      title: home.whyChoose2.item2.title,
      description: home.whyChoose2.item2.desc,
      icon: Users,
      gradient: 'from-green-500/10 to-green-600/5',
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-600',
    },
    {
      title: home.whyChoose2.item3.title,
      description: home.whyChoose2.item3.desc,
      icon: Target,
      gradient: 'from-purple-500/10 to-purple-600/5',
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-600',
    },
    {
      title: home.whyChoose2.item4.title,
      description: home.whyChoose2.item4.desc,
      icon: Zap,
      gradient: 'from-orange-500/10 to-orange-600/5',
      iconBg: 'bg-orange-500/10',
      iconColor: 'text-orange-600',
    },
    {
      title: home.whyChoose2.item5.title,
      description: home.whyChoose2.item5.desc,
      icon: Shield,
      gradient: 'from-red-500/10 to-red-600/5',
      iconBg: 'bg-red-500/10',
      iconColor: 'text-red-600',
    },
    {
      title: home.whyChoose2.item6.title,
      description: home.whyChoose2.item6.desc,
      icon: Award,
      gradient: 'from-yellow-500/10 to-yellow-600/5',
      iconBg: 'bg-yellow-500/10',
      iconColor: 'text-yellow-600',
    },
  ];

  const faqList = Object.values(home.faq.faqs) as Array<{
    question: string;
    answer: string;
  }>;

  const homeServicesCards = [
    {
      title: home.services.items.familyLaw.title,
      desc: home.services.items.familyLaw.desc,
      ctaText: home.services.items.familyLaw.ctaText,
      href: '/legal-services/family-lawyer',
      iconSrc: '/websites/website-001/services-icon/family-law_15467419 1.svg',
    },
    {
      title: home.services.items.propertyLaw.title,
      desc: home.services.items.propertyLaw.desc,
      ctaText: home.services.items.propertyLaw.ctaText,
      href: '/legal-services/real-estate-and-property-lawyers',
      iconSrc: '/websites/website-001/services-icon/real-estate_7238320 1.svg',
    },
    {
      title: home.services.items.criminalLaw.title,
      desc: home.services.items.criminalLaw.desc,
      ctaText: home.services.items.criminalLaw.ctaText,
      href: '/legal-services/criminal-defense-lawyer',
      iconSrc: '/websites/website-001/services-icon/crime_3839555 1.svg',
    },
    {
      title: home.services.items.documentation.title,
      desc: home.services.items.documentation.desc,
      ctaText: home.services.items.documentation.ctaText,
      href: '/legal-services/civil-lawyer',
      iconSrc: '/websites/website-001/services-icon/justice_12022790 1.svg',
    },
    {
      title: home.services.items.corporateLaw.title,
      desc: home.services.items.corporateLaw.desc,
      ctaText: home.services.items.corporateLaw.ctaText,
      href: '/legal-services/corporate-lawyer-in-india',
      iconSrc: '/websites/website-001/services-icon/ethics_18724979 1.svg',
    },
    {
      title: home.services.items.divorceLaw.title,
      desc: home.services.items.divorceLaw.desc,
      ctaText: home.services.items.divorceLaw.ctaText,
      href: '/legal-services/divorce-lawyers',
      iconSrc: '/websites/website-001/services-icon/divorce.png',
    },
  ];

  const scrollToApps = () => {
    setIsMobileAppMode(true);
    const el = document.getElementById('app-download-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION + COVERED BY MARQUEE */}
      <section className="grid grid-cols-1">
        <div
          className="relative text-white py-8 md:py-10 overflow-hidden"
          style={{
            backgroundImage: 'url(/websites/website-001/newdesign/jOTGmx3kuVDs.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0d1b35]/85 via-[#172B54]/70 to-transparent"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs text-white/90 font-medium tracking-wide">
                <Shield className="w-3.5 h-3.5 text-[#FEC556]" />
                <span>India&apos;s #1 Anonymous Legal Platform</span>
              </div>

              <h1
                className="text-2xl md:text-3xl lg:text-[2.6rem] font-extrabold"
                style={{ lineHeight: 1.15 }}
              >
                {home.hero.heading1}{' '}
                <span
                  className="text-[#FEC556]"
                  style={{
                    textShadow: '0 0 12px #fec55699, 0 0 30px #fec55633',
                  }}
                >
                  {home.hero.vakeel_saab}
                </span>
                <br />
                <span className="text-white/95">{home.hero.heading2}</span>
              </h1>

              <div className="space-y-1.5">
                <p className="text-[#FEC556] text-lg font-semibold leading-snug">
                  Talk to verified lawyers without revealing who you are.
                </p>
                <p className="text-white/80 text-sm leading-relaxed max-w-md whitespace-pre-line">
                  {home.hero.description}
                </p>
              </div>

              <button
                onClick={onOpenCallModal}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm h-11 bg-[#FEC556] text-[#172B54] hover:bg-[#FEC556]/90 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>{home.hero.callNow}</span>
              </button>

              {/* Stacked Avatar Trust Badges */}
              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  onClick={onOpenCallModal}
                  className="flex items-center gap-3 bg-white/10 border border-white/15 backdrop-blur-md rounded-2xl px-4 py-3 hover:bg-white/15 transition-all duration-200 group cursor-pointer text-left"
                >
                  <div className="flex -space-x-2">
                    <img
                      alt="Lawyer 1"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-white/60 shadow-md object-cover"
                      src="/websites/website-001/compressed/lawyer-profile.png"
                      referrerPolicy="no-referrer"
                    />
                    <img
                      alt="Lawyer 2"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-white/60 shadow-md object-cover"
                      src="/websites/website-001/compressed/lawyer-profile-male.png"
                      referrerPolicy="no-referrer"
                    />
                    <img
                      alt="Lawyer 3"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-white/60 shadow-md object-cover"
                      src="/websites/website-001/compressed/lawyer-profile-female.png"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="leading-tight">
                    <p className="text-sm font-bold text-[#FEC556] group-hover:brightness-110">
                      {home.hero.lawyersCount}
                    </p>
                    <p className="text-xs text-white/70">{home.hero.readyHelp}</p>
                  </div>
                </button>

                <button
                  onClick={() => onNavigate('/reviews')}
                  className="flex items-center gap-3 bg-white/10 border border-white/15 backdrop-blur-md rounded-2xl px-4 py-3 hover:bg-white/15 transition-all duration-200 group cursor-pointer text-left"
                >
                  <div className="flex -space-x-2">
                    <img
                      alt="Client 1"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-white/60 shadow-md object-cover"
                      src="/websites/website-001/compressed/client-profile.png"
                      referrerPolicy="no-referrer"
                    />
                    <img
                      alt="Client 2"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-white/60 shadow-md object-cover"
                      src="/websites/website-001/compressed/client-profile-female.png"
                      referrerPolicy="no-referrer"
                    />
                    <img
                      alt="Client 3"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-white/60 shadow-md object-cover"
                      src="/websites/website-001/compressed/client-profile-female2.png"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="leading-tight">
                    <p className="text-sm font-bold text-[#FEC556] group-hover:brightness-110">
                      {home.hero.clientsCount}
                    </p>
                    <p className="text-xs text-white/70">{home.hero.clientHelp}</p>
                  </div>
                </button>
              </div>

              {/* Download Our Mobile Apps Bar */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex flex-col text-center sm:text-left">
                    <p className="text-xs font-bold text-[#FEC556] uppercase tracking-wide mb-1">
                      Available Now
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Download Our Mobile Apps
                    </p>
                    <div className="flex items-center justify-center sm:justify-start gap-3 mt-2 text-white/80">
                      <div className="flex items-center gap-1 text-xs">
                        <Smartphone className="w-4 h-4 text-[#34A853]" />
                        <span>Google Play</span>
                      </div>
                      <div className="w-px h-4 bg-white/20"></div>
                      <div className="flex items-center gap-1 text-xs">
                        <Smartphone className="w-4 h-4 text-white" />
                        <span>App Store</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={scrollToApps}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FEC556] text-[#172B54] hover:bg-[#ffd57a] font-bold px-4 py-3 sm:py-2 rounded-full transition-all duration-300 hover:scale-105 text-sm whitespace-nowrap cursor-pointer"
                  >
                    <span>Explore Apps</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Hero Consultation Image */}
            <div className="flex flex-col items-center justify-end self-end translate-y-2 lg:translate-y-4 relative z-10">
              <img
                alt="VakeelSaab Online Legal Consultation"
                width={1200}
                height={1000}
                className="w-full h-auto object-cover drop-shadow-2xl max-h-[540px]"
                src="/websites/website-001/newdesign/lawyerImg.png"
                referrerPolicy="no-referrer"
              />
              <p className="text-[10px] text-white/50 tracking-wide italic mt-1 mb-1">
                ✦ AI Generated Image
              </p>
            </div>
          </div>
        </div>

        {/* Covered By Media Marquee */}
        <div className="mt-6 px-4 pb-2 max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <div className="bg-gradient-to-br from-[#172B54] to-[#1B3A6B] flex items-center justify-center px-6 py-4 lg:px-8 lg:w-56 shrink-0">
              <h3 className="text-white text-lg sm:text-xl font-bold tracking-widest text-center uppercase">
                Covered
                <br />
                By
              </h3>
            </div>
            <div className="bg-white px-4 py-3 flex-1 overflow-hidden">
              <div className="marquee gap-14 items-center">
                {[0, 1].map((dup) => (
                  <div key={dup} className="flex items-center gap-12 pr-12">
                    {COVERED_BY_LOGOS.map((logo, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center w-28 h-20 sm:w-32 sm:h-24 shrink-0"
                        style={logo.width ? { width: `${logo.width}px` } : undefined}
                      >
                        {logo.href ? (
                          <a
                            href={logo.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full h-full items-center justify-center hover:opacity-80 transition-opacity"
                          >
                            <img
                              src={logo.src}
                              alt={logo.alt}
                              className="max-w-full max-h-full object-contain"
                              referrerPolicy="no-referrer"
                            />
                          </a>
                        ) : (
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className="max-w-full max-h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LEGAL SERVICES SECTION */}
      <section id="services" className="py-12 md:py-14 pattern-bg">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#172B54] section-headline">
              {home.services.sectionTitle}
            </h2>
            <p className="text-[#2D3748] text-sm md:text-base max-w-4xl mx-auto mt-4 leading-relaxed">
              {home.services.sectionDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeServicesCards.map((card) => (
              <div
                key={card.title}
                onClick={() => onNavigate(card.href)}
                className="group rounded-2xl border border-gray-200/80 bg-white p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#FEC556]/15 flex items-center justify-center shrink-0 group-hover:bg-[#FEC556]/30 transition-colors">
                      <img
                        src={card.iconSrc}
                        alt={card.title}
                        className="w-9 h-9 object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#172B54] group-hover:text-[#1B3A6B]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-[#4A5568] text-sm leading-relaxed mb-5">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#172B54] group-hover:text-[#FEC556] transition-colors">
                    {card.ctaText}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#172B54] text-[#FEC556] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Pills for Remaining 13 Practice Areas */}
          <div className="mt-8 bg-white/90 border border-gray-200 rounded-2xl p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-[#172B54]/70 mb-3 text-center">
              All 19 Specialized Practice Areas Available Online
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {MEGA_MENU_SERVICES.map((srv) => (
                <button
                  key={srv.slug}
                  onClick={() => onNavigate(srv.href)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#EDF3FA] hover:bg-[#FEC556]/25 text-[#172B54] text-xs font-semibold transition-colors cursor-pointer"
                >
                  <img
                    src={srv.iconSrc}
                    alt={srv.name}
                    className="w-4 h-4 object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <span>{srv.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center pt-8">
            <button
              onClick={() => onNavigate('/legal-services')}
              className="bg-[#172B54] hover:bg-[#190B54] text-white text-lg font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>{home.services.items.andMore.ctaText}</span>
              <ArrowRight className="w-5 h-5 text-[#FEC556]" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. VAKEELSAAB DOCUMENT STORE BANNER */}
      <section
        className="pattern-bg pb-12 pt-2 md:pb-14"
        aria-labelledby="home-document-store-title"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col gap-6 rounded-2xl bg-[#172B54] px-6 py-8 text-white shadow-xl sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="flex items-start gap-5">
              <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FEC556]/15 ring-1 ring-[#FEC556]/40 sm:flex">
                <FileText className="h-7 w-7 text-[#FEC556]" />
              </span>
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#FEC556]">
                  VakeelSaab Document Store
                </p>
                <h2
                  id="home-document-store-title"
                  className="mb-2 text-xl font-bold leading-snug sm:text-2xl"
                >
                  Need a legal document? Get it online.
                </h2>
                <p className="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                  Rent agreements, affidavits, legal notices, NDAs and more. Preview for free, pay once, and get the PDF by email.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:shrink-0">
              <button
                onClick={() => onNavigate('/document-store')}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md px-6 text-base font-semibold bg-[#FEC556] text-[#172B54] hover:bg-[#FEC556]/90 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Explore the Document Store</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW VAKEELSAAB WORKS (INTERACTIVE PHONE CALL vs MOBILE APP) */}
      <section
        id="app-download-section"
        className="text-white relative overflow-hidden pb-12 lg:pb-16 pt-10 bg-[#172B54]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold section-headline text-white mb-3">
              {home.howItWorks.title}
            </h2>
            <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mt-3">
              Get expert online lawyer consultation in a few easy{' '}
              {isMobileAppMode ? appSteps.length : phoneSteps.length} steps - a secure, efficient, and transparent process.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[360px_minmax(0,1fr)] gap-8 xl:gap-10 items-start">
            {/* Left Control Card */}
            <div className="relative w-full">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 backdrop-blur-md shadow-[0_24px_80px_rgba(0,0,0,0.18)] p-5 sm:p-6 lg:p-7 h-full">
                <div className="relative flex flex-col items-center w-full mx-auto space-y-5">
                  <div className="w-28 h-28 rounded-full bg-[#FEC556]/15 border border-[#FEC556]/30 flex items-center justify-center">
                    <img
                      src="/websites/website-001/images/vakeel-saab-logo.png"
                      alt="VakeelSaab"
                      className="w-20 h-20 object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <p className="text-white/90 text-center text-sm sm:text-base max-w-xs">
                    {home.howItWorks['process-via']}
                  </p>

                  {/* Mode Switcher */}
                  <div className="bg-white/15 backdrop-blur-md rounded-full p-1.5 border border-white/20 shadow-md flex items-center gap-1 w-full max-w-[22rem] mx-auto">
                    <button
                      onClick={() => setIsMobileAppMode(false)}
                      className={`flex flex-1 items-center justify-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer whitespace-nowrap ${
                        !isMobileAppMode
                          ? 'bg-[#FEC556] text-[#172B54] shadow-md font-bold'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Phone className="w-4 h-4" />
                      <span>{home.howItWorks['phone-call']}</span>
                    </button>
                    <button
                      id="mobile-app-toggle-btn"
                      onClick={() => setIsMobileAppMode(true)}
                      className={`flex flex-1 items-center justify-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer whitespace-nowrap ${
                        isMobileAppMode
                          ? 'bg-[#FEC556] text-[#172B54] shadow-md font-bold'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>{home.howItWorks['mobile-app']}</span>
                    </button>
                  </div>

                  <div className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 sm:px-5 sm:py-5 mt-2">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FEC556] mb-3 text-center">
                      At a glance
                    </p>
                    <div className="grid grid-cols-1 gap-2.5">
                      <div className="flex items-center gap-3 rounded-full bg-white/5 px-3 py-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FEC556] shrink-0"></span>
                        <span className="text-white/85 text-sm">
                          Private and secure consultation flow
                        </span>
                      </div>
                      <div className="flex items-center gap-3 rounded-full bg-white/5 px-3 py-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FEC556] shrink-0"></span>
                        <span className="text-white/85 text-sm">
                          Verified lawyers matched faster
                        </span>
                      </div>
                      <div className="flex items-center gap-3 rounded-full bg-white/5 px-3 py-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FEC556] shrink-0"></span>
                        <span className="text-white/85 text-sm">
                          Quick call-first or app-first path
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Steps or Mobile Apps Showcase */}
            <div className="relative w-full min-w-0">
              {isMobileAppMode ? (
                <div className="space-y-6">
                  <div
                    id="mobile-app-download"
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full"
                  >
                    {/* Client App Card */}
                    <div className="rounded-[2rem] border border-white/15 bg-white/8 backdrop-blur-md p-6 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#FEC556]">
                          For Clients
                        </span>
                        <h3 className="text-2xl font-bold text-white mt-1">
                          VakeelSaab Client App
                        </h3>
                        <p className="text-sm text-white/75 mt-1 mb-4">
                          Secure &amp; anonymous legal counsel via phone, audio, and video calls.
                        </p>
                      </div>
                      <div className="space-y-2.5 my-3">
                        {appSteps.slice(0, 4).map((st) => (
                          <div
                            key={st.step}
                            className="bg-white/10 rounded-xl p-3 flex items-start gap-3"
                          >
                            <span className="w-6 h-6 rounded-full bg-[#FEC556] text-[#172B54] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                              {st.step}
                            </span>
                            <div>
                              <p className="text-sm font-bold text-white">{st.title}</p>
                              <p className="text-xs text-white/75">{st.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-3 pt-3">
                        <button
                          onClick={onOpenCallModal}
                          className="py-2.5 px-4 rounded-xl bg-[#FEC556] text-[#172B54] font-bold text-xs text-center hover:bg-[#FEC556]/90 cursor-pointer"
                        >
                          App Store (iOS)
                        </button>
                        <button
                          onClick={onOpenCallModal}
                          className="py-2.5 px-4 rounded-xl bg-white text-[#172B54] font-bold text-xs text-center hover:bg-gray-100 cursor-pointer"
                        >
                          Google Play
                        </button>
                      </div>
                    </div>

                    {/* Lawyer App Card */}
                    <div className="rounded-[2rem] border border-white/15 bg-white/8 backdrop-blur-md p-6 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#FEC556]">
                          For Attorneys
                        </span>
                        <h3 className="text-2xl font-bold text-white mt-1">
                          VakeelSaab Lawyer App
                        </h3>
                        <p className="text-sm text-white/75 mt-1 mb-4">
                          Manage client consultations, stage-wise billing &amp; expand your legal practice.
                        </p>
                      </div>
                      <div className="my-3 rounded-xl overflow-hidden bg-[#0d1b35] p-4 flex items-center justify-center">
                        <img
                          src="/websites/website-001/newdesign/lawyerImg.png"
                          alt="VakeelSaab Lawyer App Preview"
                          className="h-48 w-auto object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3 pt-3">
                        <button
                          onClick={() => onNavigate('/lawyer-registration')}
                          className="col-span-2 py-3 px-4 rounded-xl bg-[#FEC556] text-[#172B54] font-bold text-sm text-center hover:bg-[#FEC556]/90 cursor-pointer"
                        >
                          Register as a Verified Lawyer →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] backdrop-blur-md p-4 sm:p-5 lg:p-6">
                  <div className="flex items-center justify-between gap-4 mb-5 lg:mb-6">
                    <div>
                      <p className="text-[#FEC556] text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] mb-1">
                        {home.howItWorks['process-via']} {home.howItWorks['phone-call']}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold text-white capitalize">
                        {home.howItWorks['your-legal-journey']} {home.howItWorks.roadmap}
                      </h3>
                    </div>
                    <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-[#FEC556]/15 border border-[#FEC556]/25 text-[#FEC556]">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                    {phoneSteps.map((st) => {
                      const IconComp = st.icon;
                      return (
                        <div
                          key={st.step}
                          className="group relative rounded-[1.5rem] border border-white/10 bg-[#FEC556] px-4 py-4 sm:px-5 sm:py-5 shadow-[0_10px_28px_rgba(0,0,0,0.18)] overflow-hidden"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white flex-shrink-0 flex items-center justify-center shadow-sm">
                              <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-[#172B54]" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="inline-flex items-center justify-center rounded-full bg-[#172B54] text-white text-[11px] sm:text-xs font-bold px-2.5 py-0.5">
                                  {String(st.step).padStart(2, '0')}
                                </span>
                                <span className="text-[#172B54]/80 text-xs font-semibold uppercase tracking-[0.14em]">
                                  Step {st.step}
                                </span>
                              </div>
                              <h3 className="text-base sm:text-lg font-bold text-[#172B54] leading-snug">
                                {st.title}
                              </h3>
                              <p className="text-sm text-[#172B54]/85 leading-relaxed mt-1">
                                {st.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE VAKEELSAAB + 3 PILLAR CARDS */}
      <section className="py-12 pattern-bg relative overflow-hidden z-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#172B54] section-headline">
              {home.whyChoose2.title}
            </h2>
            <p className="text-[#2D3748] text-base max-w-3xl mx-auto mt-3">
              {home.whyChoose2.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                  <div className="relative bg-white/90 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] rounded-2xl overflow-hidden h-full p-8">
                    <div className="flex flex-row items-center justify-start gap-4 mb-4">
                      <div
                        className={`w-14 h-14 flex-shrink-0 ${item.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-7 h-7 ${item.iconColor}`} />
                      </div>
                      <h3 className="text-xl font-bold text-[#172B54]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[#4A5568] leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Interactive Feature Cards: Anonymous, Accessible, Affordable */}
        <div className="w-full bg-[#EDF3FA] py-12 mt-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
            <div
              onClick={() => onNavigate('/anonymous')}
              className="group cursor-pointer relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#172B54] to-[#172B54]/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <VenetianMask className="w-10 h-10 text-[#FEC556]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[#172B54] font-bold text-lg">
                    {home.hero.features.anonymous}
                  </h3>
                  <p className="text-[#4A5568] text-sm mt-2">
                    {home.hero.features.anonymous_desc}
                  </p>
                  <span className="inline-block text-[#172B54] font-semibold text-sm pt-1 group-hover:text-[#FEC556] transition-colors">
                    Read More →
                  </span>
                </div>
              </div>
            </div>

            <div
              onClick={() => onNavigate('/accessible')}
              className="group cursor-pointer relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#172B54] to-[#172B54]/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <PersonStanding className="w-10 h-10 text-[#FEC556]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[#172B54] font-bold text-lg">
                    {home.hero.features.accessible}
                  </h3>
                  <p className="text-[#4A5568] text-sm mt-2">
                    {home.hero.features.accessible_desc}
                  </p>
                  <span className="inline-block text-[#172B54] font-semibold text-sm pt-1 group-hover:text-[#FEC556] transition-colors">
                    Get Advice →
                  </span>
                </div>
              </div>
            </div>

            <div
              onClick={() => onNavigate('/affordable')}
              className="group cursor-pointer sm:col-span-2 md:col-span-1 relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#172B54] to-[#172B54]/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IndianRupee className="w-10 h-10 text-[#FEC556]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[#172B54] font-bold text-lg">
                    {home.hero.features.affordable}
                  </h3>
                  <p className="text-[#4A5568] text-sm mt-2">
                    {home.hero.features.affordable_desc}
                  </p>
                  <span className="inline-block text-[#172B54] font-semibold text-sm pt-1 group-hover:text-[#FEC556] transition-colors">
                    View Plans →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE VAKEELSAAB PROMISE: A HYBRID PATH TO JUSTICE */}
      <section className="py-10 pattern-bg">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <h2
                  id="about-title"
                  className="text-3xl sm:text-4xl font-bold tracking-tight text-[#172B54]"
                >
                  {home.about.title}
                </h2>
                <div className="mt-6 space-y-4 text-base leading-7 text-[#2D3748]">
                  <p>{home.about.desc1}</p>
                  <p>
                    <strong className="text-[#172B54]">Start Safe (Online)</strong>: Ask questions, compare lawyers, understand fees, and explore legal strategies and consultation without fear or pressure. All from the comfort of your home.
                  </p>
                  <p>
                    <strong className="text-[#172B54]">Move Strong (Offline)</strong>: Once you are fully confident, meet the lawyer in person, submit your documents, and file your case with complete clarity, mutual respect, and a well-defined strategy.
                  </p>
                  <p>{home.about.desc4}</p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => onNavigate('/about')}
                    className="inline-flex items-center justify-center rounded-md bg-[#172B54] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#172B54]/90 transition-colors cursor-pointer"
                  >
                    <span>{home.about.button}</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="relative h-72 w-full md:h-[420px]">
                <img
                  alt="Young Indian lawyer providing legal consultation to a senior woman"
                  className="rounded-2xl border object-cover shadow-lg w-full h-full"
                  src="/websites/website-001/images/heroImg2.png"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      <section className="py-12 bg-[#EDF3FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#172B54] section-headline">
              {home.testimonials.title}
            </h2>
            <p className="text-[#4A5568] text-base max-w-2xl mx-auto mt-3">
              {home.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {home.testimonials.items.map(
              (
                item: {
                  text: string;
                  author: string;
                  location: string;
                  rating: number;
                  case: string;
                },
                idx: number
              ) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1 text-[#FEC556]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#FEC556]" />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-[#172B54] bg-[#EDF3FA] px-2.5 py-1 rounded-md">
                        {item.case}
                      </span>
                    </div>
                    <p className="text-sm text-[#2D3748] leading-relaxed italic mb-4">
                      &ldquo;{item.text}&rdquo;
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-[#172B54]">{item.author}</p>
                      <p className="text-xs text-[#4A5568]">{item.location}</p>
                    </div>
                    <span className="text-[11px] text-emerald-700 font-semibold">
                      ✓ Verified Client
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS + NEED IMMEDIATE LEGAL HELP STICKY CARD */}
      <section className="py-14 relative overflow-hidden bg-gradient-to-br from-[#172B54] via-[#172B54] to-[#0F1B3C]">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#FEC556]/10 border border-[#FEC556]/20 rounded-full px-4 py-1 mb-4">
              <MessageCircle className="w-4 h-4 text-[#FEC556]" />
              <span className="text-[#FEC556] font-medium text-sm">
                Expert Legal Consultation
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-[#FEC556] bg-clip-text text-transparent">
                {home.faq.headline}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
            {/* Left 2 Columns: 9 FAQ Accordion Items */}
            <div className="space-y-3 xl:col-span-2">
              {faqList.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 hover:border-[#FEC556]/30 transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex justify-between items-start gap-4 hover:bg-white/5 transition-all duration-200 group cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#FEC556]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[#FEC556] font-bold text-xs">
                            {idx + 1}
                          </span>
                        </div>
                        <span className="text-white font-semibold text-base leading-relaxed group-hover:text-[#FEC556] transition-colors">
                          {faq.question}
                        </span>
                      </div>
                      <div
                        className={`transform transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      >
                        <div className="w-8 h-8 rounded-full bg-[#FEC556]/20 flex items-center justify-center">
                          <ChevronDown className="w-4 h-4 text-[#FEC556]" />
                        </div>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4">
                        <div className="border-t border-white/10 pt-3 ml-9">
                          <p className="text-white/85 leading-relaxed text-sm">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Sticky Gold Card: Need Immediate Legal Help? */}
            <div className="xl:sticky xl:top-24 xl:col-span-1">
              <div className="rounded-2xl relative overflow-hidden bg-gradient-to-br from-[#FEC556] via-[#FDB32A] to-[#F4A629] shadow-2xl p-6 text-center">
                <div className="relative w-16 h-16 mx-auto mb-5">
                  <div className="relative w-full h-full bg-white/30 rounded-full flex items-center justify-center">
                    <Phone className="w-8 h-8 text-[#172B54]" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-[#172B54]">
                  {home.faq.cta.title}
                </h3>

                <div className="flex justify-center gap-4 mb-5 flex-wrap">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] flex items-center justify-center shadow-lg border border-white/20">
                      <Lock className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-xs text-[#172B54] font-semibold">
                      Private
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] flex items-center justify-center shadow-lg border border-white/20">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-xs text-[#172B54] font-semibold">
                      Verified
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] flex items-center justify-center shadow-lg border border-white/20">
                      <Zap className="w-5 h-5 text-yellow-400" />
                    </div>
                    <span className="text-xs text-[#172B54] font-semibold">
                      Instant
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] flex items-center justify-center shadow-lg border border-white/20">
                      <ClipboardCheck className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-xs text-[#172B54] font-semibold">
                      Transparent
                    </span>
                  </div>
                </div>

                <div className="text-2xl md:text-3xl font-extrabold mb-3 text-[#172B54] tracking-wide">
                  {home.faq.phoneNumber}
                </div>

                <p className="text-[#172B54]/85 mb-6 text-sm leading-relaxed">
                  {home.faq.cta.description}
                </p>

                <button
                  onClick={onOpenCallModal}
                  className="w-full bg-[#172B54] hover:bg-[#0f1f40] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#FEC556]" />
                  <span>{home.faq.cta.buttonLabel}</span>
                </button>

                <p className="text-xs font-semibold text-[#172B54]/80 mt-3">
                  {home.faq.cta.availability} · No Identity Required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
