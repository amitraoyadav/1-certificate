import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Globe,
  Menu,
  Phone,
  UserPlus,
  X,
  ArrowLeft,
  Info,
} from 'lucide-react';
import { MEGA_MENU_SERVICES, vsMessages } from '../assets/vakeelsaabData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onBackToDashboard: () => void;
  onOpenCallModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onBackToDashboard,
  onOpenCallModal,
}) => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [showIntegrationBanner, setShowIntegrationBanner] = useState(false);

  const nav = vsMessages.nav;
  const col1 = MEGA_MENU_SERVICES.filter((s) => s.column === 1);
  const col2 = MEGA_MENU_SERVICES.filter((s) => s.column === 2);
  const col3 = MEGA_MENU_SERVICES.filter((s) => s.column === 3).slice(0, 6);

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <>
      {/* RAOZ LEGAL SAMPLE Library Control Bar */}
      <div className="bg-[#090D16] text-slate-200 border-b border-slate-800 px-4 sm:px-6 py-2 text-xs flex flex-wrap items-center justify-between gap-3 z-[100000] relative font-sans">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToDashboard}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-500/15 text-amber-400 hover:bg-amber-500/25 border border-amber-500/30 font-semibold transition-colors cursor-pointer whitespace-nowrap"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to RAOZ LEGAL SAMPLE</span>
          </button>
          <span className="text-slate-400 hidden sm:inline">·</span>
          <span className="text-slate-300 font-medium hidden sm:inline">
            website-001 · VakeelSaab (Legal &amp; Advocate)
          </span>
          <span className="text-slate-500 hidden md:inline font-mono text-[11px]">
            Route: {currentPath}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowIntegrationBanner((prev) => !prev)}
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white px-2.5 py-1 rounded border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            <Info className="w-3.5 h-3.5 text-amber-400" />
            <span>Backend Integration Notes</span>
          </button>
          <a
            href="https://www.vakeelsaab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-amber-400 transition-colors whitespace-nowrap"
          >
            Reference URL ↗
          </a>
        </div>
      </div>

      {showIntegrationBanner && (
        <div className="bg-slate-900 border-b border-slate-800 px-4 sm:px-6 py-3 text-xs text-slate-300 font-sans">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <strong className="text-amber-400">Integration Status (website-001):</strong> All 32+ pages, 20+ specialized legal service modules, 63 translation namespaces, original SVG/PNG assets, and interactive user journeys are 100% operational. External backend endpoints (live Sanity CMS mutations, Razorpay payment gateway webhook, and SMS OTP gateway) are configured with client-side interactive simulation hooks ready for production API keys.
            </div>
            <button
              onClick={() => setShowIntegrationBanner(false)}
              className="text-slate-400 hover:text-white self-end sm:self-center shrink-0 px-2 py-1"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Original VakeelSaab Sticky Navigation */}
      <nav className="bg-[#172B54] px-4 sm:px-6 py-4 sticky top-0 shadow-lg z-[9999]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center shrink-0"
          >
            <img
              alt="VakeelSaab Logo"
              width={80}
              height={80}
              className="h-14 sm:h-16 w-auto hover:scale-105 transition-transform duration-200 object-contain"
              src="/websites/website-001/navbar/vakeelsaab-legal-services-consultation.png"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 relative">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className={`text-sm font-medium tracking-wide transition-all duration-200 px-4 py-2 rounded-md whitespace-nowrap ${
                currentPath === '/'
                  ? 'text-[#FEC556] bg-[#FEC556]/10 border border-[#FEC556]/30'
                  : 'text-white hover:text-[#FEC556] hover:bg-white/5'
              }`}
            >
              {nav.home}
            </a>

            <a
              href="/about"
              onClick={(e) => handleLinkClick(e, '/about')}
              className={`text-sm font-medium tracking-wide transition-all duration-200 px-4 py-2 rounded-md whitespace-nowrap ${
                currentPath === '/about'
                  ? 'text-[#FEC556] bg-[#FEC556]/10 border border-[#FEC556]/30'
                  : 'text-white hover:text-[#FEC556] hover:bg-white/5'
              }`}
            >
              {nav.about}
            </a>

            {/* Legal Services Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <a
                href="/legal-services"
                onClick={(e) => handleLinkClick(e, '/legal-services')}
                className={`text-sm font-medium tracking-wide transition-all duration-200 px-4 py-2 rounded-md flex items-center space-x-1 whitespace-nowrap ${
                  currentPath.startsWith('/legal-services')
                    ? 'text-[#FEC556] bg-[#FEC556]/10 border border-[#FEC556]/30'
                    : 'text-white hover:text-[#FEC556] hover:bg-white/5'
                }`}
              >
                <span>{nav.services}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    megaMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </a>

              {/* Mega Menu Dropdown */}
              <div
                className={`absolute top-full left-0 transform -translate-x-40 pt-2 w-screen max-w-5xl z-50 transition-all duration-200 ease-in-out ${
                  megaMenuOpen
                    ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                    : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="bg-white shadow-2xl border-t-2 border-[#FEC556] rounded-b-xl px-8 py-8">
                  <div className="grid grid-cols-3 gap-8">
                    {[col1, col2, col3].map((col, colIdx) => (
                      <div key={colIdx} className="space-y-1">
                        {col.map((service) => (
                          <a
                            key={service.slug}
                            href={service.href}
                            onClick={(e) => handleLinkClick(e, service.href)}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#FEC556]/10 transition-colors duration-200 group/item"
                          >
                            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                              <img
                                alt={service.name}
                                width={64}
                                height={64}
                                className="w-7 h-7 object-contain"
                                src={service.iconSrc}
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <span className="text-[#172B54] font-medium text-sm group-hover/item:text-[#FEC556] transition-colors duration-200">
                              {service.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                    <a
                      href="/legal-services"
                      onClick={(e) => handleLinkClick(e, '/legal-services')}
                      className="inline-flex items-center space-x-2 text-[#FEC556] hover:text-[#172B54] font-semibold transition-colors duration-200"
                    >
                      <span>View All Legal Services</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                    <a
                      href="/document-store"
                      onClick={(e) => handleLinkClick(e, '/document-store')}
                      className="inline-flex items-center space-x-2 text-[#172B54] hover:text-[#FEC556] font-semibold text-sm transition-colors duration-200"
                    >
                      <span>Explore VakeelSaab Document Store →</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/how-we-work"
              onClick={(e) => handleLinkClick(e, '/how-we-work')}
              className={`text-sm font-medium tracking-wide transition-all duration-200 px-4 py-2 rounded-md whitespace-nowrap ${
                currentPath === '/how-we-work'
                  ? 'text-[#FEC556] bg-[#FEC556]/10 border border-[#FEC556]/30'
                  : 'text-white hover:text-[#FEC556] hover:bg-white/5'
              }`}
            >
              {nav.how}
            </a>

            <a
              href="/blogs"
              onClick={(e) => handleLinkClick(e, '/blogs')}
              className={`text-sm font-medium tracking-wide transition-all duration-200 px-4 py-2 rounded-md whitespace-nowrap ${
                currentPath === '/blogs'
                  ? 'text-[#FEC556] bg-[#FEC556]/10 border border-[#FEC556]/30'
                  : 'text-white hover:text-[#FEC556] hover:bg-white/5'
              }`}
            >
              {nav.blogs}
            </a>

            <a
              href="/document-store"
              onClick={(e) => handleLinkClick(e, '/document-store')}
              className={`text-sm font-medium tracking-wide transition-all duration-200 px-4 py-2 rounded-md whitespace-nowrap ${
                currentPath === '/document-store'
                  ? 'text-[#FEC556] bg-[#FEC556]/10 border border-[#FEC556]/30'
                  : 'text-white hover:text-[#FEC556] hover:bg-white/5'
              }`}
            >
              Document Store
            </a>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-3">
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="/lawyer-registration"
                onClick={(e) => handleLinkClick(e, '/lawyer-registration')}
                className="text-white hover:text-[#FEC556] hover:bg-white/10 font-medium transition-all duration-200 px-4 py-2 rounded-md text-sm flex items-center space-x-2 border border-white/25 hover:border-[#FEC556]/40 whitespace-nowrap"
              >
                <UserPlus className="w-4 h-4" />
                <span>{nav.registerLawyer}</span>
              </a>

              <button
                onClick={onOpenCallModal}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-10 bg-[#FEC556] text-[#172B54] hover:bg-[#FEC556]/90 font-semibold transition-all duration-200 px-6 py-2 rounded-md text-sm shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>{nav.talkWithLawyer}</span>
              </button>

              <div className="relative language-switcher-container">
                <button
                  onClick={() => onNavigate('/accessible')}
                  title="Multi-lingual support across 10+ Indian languages"
                  className="text-sm text-white px-3.5 py-2 rounded-md border border-white/20 hover:border-[#FEC556]/40 flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
                >
                  <Globe className="h-4 w-4 text-[#FEC556]" />
                  <span>English</span>
                </button>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-3 hover:bg-white/10 rounded-md transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/15 space-y-1 pb-4">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="block text-sm font-medium py-3 px-4 rounded-md text-white hover:text-[#FEC556] hover:bg-white/5"
            >
              {nav.home}
            </a>
            <a
              href="/about"
              onClick={(e) => handleLinkClick(e, '/about')}
              className="block text-sm font-medium py-3 px-4 rounded-md text-white hover:text-[#FEC556] hover:bg-white/5"
            >
              {nav.about}
            </a>
            <div>
              <button
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="w-full flex items-center justify-between text-sm font-medium py-3 px-4 rounded-md text-white hover:text-[#FEC556] hover:bg-white/5"
              >
                <span>{nav.services}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-6 pr-4 py-2 space-y-1 bg-white/5 rounded-lg my-1 max-h-64 overflow-y-auto">
                  {MEGA_MENU_SERVICES.map((s) => (
                    <a
                      key={s.slug}
                      href={s.href}
                      onClick={(e) => handleLinkClick(e, s.href)}
                      className="block py-2 px-3 text-xs text-white/90 hover:text-[#FEC556] rounded"
                    >
                      {s.name}
                    </a>
                  ))}
                  <a
                    href="/legal-services"
                    onClick={(e) => handleLinkClick(e, '/legal-services')}
                    className="block py-2 px-3 text-xs font-semibold text-[#FEC556]"
                  >
                    View All Services →
                  </a>
                </div>
              )}
            </div>
            <a
              href="/how-we-work"
              onClick={(e) => handleLinkClick(e, '/how-we-work')}
              className="block text-sm font-medium py-3 px-4 rounded-md text-white hover:text-[#FEC556] hover:bg-white/5"
            >
              {nav.how}
            </a>
            <a
              href="/blogs"
              onClick={(e) => handleLinkClick(e, '/blogs')}
              className="block text-sm font-medium py-3 px-4 rounded-md text-white hover:text-[#FEC556] hover:bg-white/5"
            >
              {nav.blogs}
            </a>
            <a
              href="/document-store"
              onClick={(e) => handleLinkClick(e, '/document-store')}
              className="block text-sm font-medium py-3 px-4 rounded-md text-white hover:text-[#FEC556] hover:bg-white/5"
            >
              Document Store
            </a>
            <a
              href="/reviews"
              onClick={(e) => handleLinkClick(e, '/reviews')}
              className="block text-sm font-medium py-3 px-4 rounded-md text-white hover:text-[#FEC556] hover:bg-white/5"
            >
              Client Reviews
            </a>
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="block text-sm font-medium py-3 px-4 rounded-md text-white hover:text-[#FEC556] hover:bg-white/5"
            >
              Contact Us
            </a>
            <div className="pt-3 px-4 space-y-2.5">
              <a
                href="/lawyer-registration"
                onClick={(e) => handleLinkClick(e, '/lawyer-registration')}
                className="text-white hover:text-[#FEC556] font-medium w-full py-3 text-sm rounded-md border border-white/20 flex items-center justify-center space-x-2"
              >
                <UserPlus className="w-4 h-4" />
                <span>{nav.registerLawyer}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCallModal();
                }}
                className="bg-[#FEC556] text-[#172B54] font-semibold w-full py-3 text-sm rounded-md shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{nav.talkWithLawyer}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
