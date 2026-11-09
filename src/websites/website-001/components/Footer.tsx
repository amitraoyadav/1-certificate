import React from 'react';
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
  Youtube,
  X,
  Shield,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { MEGA_MENU_SERVICES } from '../assets/vakeelsaabData';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenCallModal: () => void;
}

const POPULAR_SEARCHES = [
  { label: 'Corporate Lawyer in Delhi', href: '/legal-services/corporate-lawyer-in-india' },
  { label: 'Corporate Lawyer in Gurgaon', href: '/legal-services/corporate-lawyer-in-india' },
  { label: 'Corporate Lawyer in Noida', href: '/legal-services/corporate-lawyer-in-india' },
  { label: 'Corporate Lawyer in Sonipat', href: '/legal-services/corporate-lawyer-in-india' },
  { label: 'Corporate Lawyer in Bengaluru', href: '/legal-services/corporate-lawyer-in-india' },
  { label: 'Startup Lawyer in Delhi', href: '/legal-services/startup-lawyer' },
  { label: 'Startup Lawyer in Gurgaon', href: '/legal-services/startup-lawyer' },
  { label: 'Startup Lawyer in Noida', href: '/legal-services/startup-lawyer' },
  { label: 'Startup Lawyer in Chandigarh', href: '/legal-services/startup-lawyer' },
  { label: 'Startup Lawyer in Bengaluru', href: '/legal-services/startup-lawyer' },
  { label: 'Property Lawyer in Delhi', href: '/legal-services/real-estate-and-property-lawyers' },
  { label: 'Property Lawyer in Gurgaon', href: '/legal-services/real-estate-and-property-lawyers' },
  { label: 'Property Lawyer in Noida', href: '/legal-services/real-estate-and-property-lawyers' },
  { label: 'Property Lawyer in Chandigarh', href: '/legal-services/real-estate-and-property-lawyers' },
  { label: 'Property Lawyer in Bengaluru', href: '/legal-services/real-estate-and-property-lawyers' },
  { label: 'Criminal Lawyer in Delhi', href: '/legal-services/criminal-defense-lawyer' },
  { label: 'Criminal Lawyer in Gurgaon', href: '/legal-services/criminal-defense-lawyer' },
  { label: 'Criminal Lawyer in Noida', href: '/legal-services/criminal-defense-lawyer' },
  { label: 'Criminal Lawyer in Chandigarh', href: '/legal-services/criminal-defense-lawyer' },
  { label: 'Criminal Lawyer in Bengaluru', href: '/legal-services/criminal-defense-lawyer' },
  { label: 'Divorce Lawyer in Delhi', href: '/legal-services/divorce-lawyers' },
  { label: 'Divorce Lawyer in Gurgaon', href: '/legal-services/divorce-lawyers' },
  { label: 'Divorce Lawyer in Mumbai', href: '/legal-services/divorce-lawyers' },
  { label: 'Divorce Lawyer in Bengaluru', href: '/legal-services/divorce-lawyers' },
  { label: 'Property Lawyer in Hyderabad', href: '/legal-services/real-estate-and-property-lawyers' },
  { label: 'Criminal Lawyer in Hyderabad', href: '/legal-services/criminal-defense-lawyer' },
  { label: 'Divorce Lawyer in Hyderabad', href: '/legal-services/divorce-lawyers' },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCallModal }) => {
  const go = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#0b1a3a] text-white py-12">
        <div className="max-w-[85rem] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {/* Column 1: Lawyers Online */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Lawyers Online</h3>
              <ul className="space-y-1.5">
                {MEGA_MENU_SERVICES.map((item) => (
                  <li key={item.slug}>
                    <a
                      href={item.href}
                      onClick={(e) => go(e, item.href)}
                      className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/female-lawyers-in-india"
                    onClick={(e) => go(e, '/female-lawyers-in-india')}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                  >
                    Female Lawyers in India
                  </a>
                </li>
                <li>
                  <a
                    href="/pocso-lawyer"
                    onClick={(e) => go(e, '/pocso-lawyer')}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                  >
                    POCSO Lawyer
                  </a>
                </li>
                <li>
                  <a
                    href="/lawyers-in-india"
                    onClick={(e) => go(e, '/lawyers-in-india')}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                  >
                    Supreme &amp; High Court Lawyers
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Lawyers in India (North/Central) */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Lawyers in India</h3>
              <ul className="space-y-3">
                {[
                  'Delhi',
                  'Haryana',
                  'Madhya Pradesh',
                  'Punjab',
                  'Rajasthan',
                  'Telangana',
                  'Uttar Pradesh',
                  'Noida',
                  'Chandigarh',
                  'Kerala',
                ].map((city) => (
                  <li key={city}>
                    <a
                      href="/lawyers-in-india"
                      onClick={(e) => go(e, '/lawyers-in-india')}
                      className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                    >
                      Online Lawyer Consultation in {city}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/lawyers-in-india"
                    onClick={(e) => go(e, '/lawyers-in-india')}
                    className="text-[#FEC556] hover:text-[#fda800] transition-colors text-sm underline inline-flex items-center gap-1"
                  >
                    <span>View All</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Lawyers in India (Metro Cities) */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Lawyers in India</h3>
              <ul className="space-y-3">
                {[
                  'Mumbai',
                  'Bengaluru',
                  'Chennai',
                  'Hyderabad',
                  'Pune',
                  'Gurugram',
                  'Ahmedabad',
                  'Meerut',
                ].map((city) => (
                  <li key={city}>
                    <a
                      href="/lawyers-in-india"
                      onClick={(e) => go(e, '/lawyers-in-india')}
                      className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                    >
                      Online Lawyer Consultation in {city}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/lawyers-in-india"
                    onClick={(e) => go(e, '/lawyers-in-india')}
                    className="text-[#FEC556] hover:text-[#fda800] transition-colors text-sm underline inline-flex items-center gap-1"
                  >
                    <span>View All</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: High Court Lawyers */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">High Court Lawyers</h3>
              <ul className="space-y-3">
                {[
                  'Delhi',
                  'Haryana',
                  'Punjab',
                  'Madhya Pradesh',
                  'Uttar Pradesh',
                  'Rajasthan',
                  'Gujarat',
                  'Jharkhand',
                  'Madras',
                  'Allahabad',
                  'Patna',
                  'Kolkata',
                ].map((hc) => (
                  <li key={hc}>
                    <a
                      href="/lawyers-in-india"
                      onClick={(e) => go(e, '/lawyers-in-india')}
                      className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                    >
                      High Court Lawyers in {hc}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: VakeelSaab Links */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">VakeelSaab</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    onClick={(e) => go(e, '/about')}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/legal-services"
                    onClick={(e) => go(e, '/legal-services')}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                  >
                    Legal Services
                  </a>
                </li>
                <li>
                  <a
                    href="/how-we-work"
                    onClick={(e) => go(e, '/how-we-work')}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                  >
                    How We Work
                  </a>
                </li>
                <li>
                  <a
                    href="/blogs"
                    onClick={(e) => go(e, '/blogs')}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                  >
                    Legal Guide
                  </a>
                </li>
                <li>
                  <a
                    href="/document-store"
                    onClick={(e) => go(e, '/document-store')}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                  >
                    Document Store
                  </a>
                </li>
                <li>
                  <a
                    href="/reviews"
                    onClick={(e) => go(e, '/reviews')}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                  >
                    Client Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="/lawyer-registration"
                    onClick={(e) => go(e, '/lawyer-registration')}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                  >
                    Register as a Lawyer
                  </a>
                </li>
                <li>
                  <a
                    href="/legal-services/corporate-lawyer-in-india"
                    onClick={(e) => go(e, '/legal-services/corporate-lawyer-in-india')}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                  >
                    Register as a Business
                  </a>
                </li>
                <li>
                  <a
                    href="/client-terms-and-conditions.html"
                    onClick={(e) => go(e, '/client-terms-and-conditions.html')}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                  >
                    Client Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy.html"
                    onClick={(e) => go(e, '/privacy-policy.html')}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    onClick={(e) => go(e, '/faq')}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    onClick={(e) => go(e, '/contact')}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/sitemap.html"
                    onClick={(e) => go(e, '/sitemap.html')}
                    className="text-white/90 hover:text-[#FEC556] transition-colors text-sm"
                  >
                    Site Map
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Popular Search Row */}
          <div className="pt-8">
            <div className="flex items-center mb-6">
              <span className="font-bold text-lg text-white mr-4">Popular Search</span>
              <div className="flex-1 h-px bg-white/40"></div>
            </div>
            <div className="flex flex-wrap gap-x-1 gap-y-2 items-baseline">
              {POPULAR_SEARCHES.map((item, idx) => (
                <div key={idx} className="flex items-baseline text-sm">
                  <a
                    href={item.href}
                    onClick={(e) => go(e, item.href)}
                    className="text-white/85 hover:text-[#FEC556] transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                  {idx < POPULAR_SEARCHES.length - 1 && (
                    <span className="text-white/40 mx-2">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Brand & Contact Info */}
          <div className="pt-8 mt-8 border-t border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
              <div className="flex flex-col items-center lg:items-start lg:col-span-1">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    alt="VakeelSaab Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                    src="/websites/website-001/images/vakeel-saab-logo.png"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-col items-start">
                    <div className="font-bold text-white text-2xl">VakeelSaab</div>
                    <div className="text-white/80 text-xs">Online Lawyer Consultation</div>
                  </div>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                  {[
                    { icon: Youtube, href: 'https://www.youtube.com/@vakeelsaab_app', label: 'YouTube' },
                    { icon: Twitter, href: 'https://x.com/vakeelsaab_app', label: 'Twitter' },
                    { icon: Instagram, href: 'https://www.instagram.com/vakeelsaab_app/', label: 'Instagram' },
                    { icon: Facebook, href: 'https://www.facebook.com/vakeelsaaboffical', label: 'Facebook' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/company/vakeel_saab', label: 'LinkedIn' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 bg-[#FEC556] rounded-full flex items-center justify-center hover:bg-[#FEC556]/90 transition-colors shrink-0"
                    >
                      <Icon className="w-4 h-4 text-[#0b1a3a]" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="text-center lg:text-left px-4 lg:px-16 lg:col-span-3">
                <p className="text-white/90 text-sm leading-[170%]">
                  VakeelSaab also known as &ldquo;Vakeel Saab&rdquo; is India&apos;s Trusted Platform for Online Lawyer Consultation &amp; Legal Advice. Get affordable, anonymous, and expert legal advice online from verified lawyers across various legal fields.
                </p>
              </div>

              <div className="text-center lg:text-left lg:col-span-1">
                <div className="space-y-2.5 text-white text-sm">
                  <div className="flex items-start justify-center lg:justify-start space-x-2">
                    <span className="bg-[#FEC556] rounded-full p-1 mt-0.5 shrink-0">
                      <Phone className="w-3 h-3 text-black" />
                    </span>
                    <button
                      onClick={onOpenCallModal}
                      className="hover:text-[#FEC556] cursor-pointer text-left"
                    >
                      +91 72848 72848
                    </button>
                  </div>
                  <div className="flex items-start justify-center lg:justify-start space-x-2">
                    <span className="bg-[#FEC556] rounded-full p-1 mt-0.5 shrink-0">
                      <Mail className="w-3 h-3 text-black" />
                    </span>
                    <a href="mailto:help@vakeelsaab.com" className="hover:text-[#FEC556]">
                      help@vakeelsaab.com
                    </a>
                  </div>
                  <div className="flex items-start justify-center lg:justify-start space-x-2">
                    <span className="bg-[#FEC556] rounded-full p-1 mt-0.5 shrink-0">
                      <MapPin className="w-3 h-3 text-black" />
                    </span>
                    <span className="text-white/85 text-left text-xs leading-relaxed">
                      MV HUMHAINA PRIVATE LIMITED E-14/13, First floor, Vasant Vihar, New Delhi, Delhi, India - 110057
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/30 mt-6"></div>
          <div className="mt-4 pt-2 text-center text-sm text-white/80">
            <p>© 2025 VakeelSaab | India&apos;s Trusted Platform for Online Lawyer Consultation &amp; Legal Advice</p>
          </div>
        </div>
      </footer>

      {/* Original Floating WhatsApp & Call Lawyer Buttons */}
      <div className="fixed bottom-24 right-6 z-40">
        <div className="relative">
          <div className="absolute inset-[-4px] w-[128px] h-[52px] rounded-full border-2 border-green-500 opacity-40 animate-wave-1 pointer-events-none"></div>
          <button
            onClick={() => onNavigate('/contact')}
            aria-label="Chat on WhatsApp"
            className="relative w-32 h-13 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 z-10 cursor-pointer"
          >
            <span className="font-semibold text-white text-sm">Whatsapp</span>
            <MessageCircle className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-40">
        <div className="relative">
          <div className="absolute inset-[-4px] w-[128px] h-[52px] rounded-full border-2 border-[#FEC556] opacity-40 animate-wave-1 pointer-events-none"></div>
          <button
            onClick={onOpenCallModal}
            aria-label="Call us now"
            className="relative w-32 h-13 bg-[#FEC556] rounded-full flex items-center justify-center gap-1.5 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 z-10 cursor-pointer"
          >
            <span className="font-semibold text-[#172B54] text-sm">Call Lawyer</span>
            <Phone className="w-5 h-5 text-[#172B54]" />
          </button>
        </div>
      </div>
    </>
  );
};

interface CallConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const CallConsultationModal: React.FC<CallConsultationModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [selectedIssue, setSelectedIssue] = React.useState('Property / Real Estate Dispute');
  const [selectedLang, setSelectedLang] = React.useState('English / Hindi');
  const [callbackPhone, setCallbackPhone] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  if (!isOpen) return null;

  const handleRequestCallback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackPhone.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden border border-gray-100 relative">
        <button
          onClick={() => {
            setSubmitted(false);
            onClose();
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1 rounded-full cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-[#172B54] px-6 py-5 text-white">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#FEC556] font-semibold uppercase tracking-wider mb-1">
            <Shield className="w-3.5 h-3.5" />
            <span>100% Anonymous &amp; Confidential</span>
          </div>
          <h3 className="text-xl font-bold">Talk to a Verified Lawyer</h3>
          <p className="text-white/75 text-xs mt-1">
            Connect via direct helpline or schedule an instant anonymous callback
          </p>
        </div>

        <div className="p-6 space-y-5">
          <div className="bg-[#EDF3FA] rounded-xl p-4 flex items-center justify-between border border-[#172B54]/10">
            <div>
              <p className="text-xs text-[#4A5568] font-medium">24/7 Instant Legal Helpline</p>
              <p className="text-xl font-extrabold text-[#172B54] tracking-wide">
                +91 72848 72848
              </p>
            </div>
            <a
              href="tel:+917284872848"
              className="bg-[#FEC556] text-[#172B54] hover:bg-[#FEC556]/90 font-bold px-4 py-2.5 rounded-lg text-sm inline-flex items-center gap-1.5 shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Dial Now</span>
            </a>
          </div>

          {submitted ? (
            <div className="text-center py-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#172B54]">
                Anonymous Consultation Request Logged
              </h4>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Our legal intake executive will connect you with a verified{' '}
                <strong>{selectedIssue}</strong> specialist in <strong>{selectedLang}</strong>. Your identity remains masked throughout the call.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2 rounded-lg bg-[#172B54] text-white text-xs font-semibold cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleRequestCallback} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#172B54] mb-1">
                  Select Legal Practice Area
                </label>
                <select
                  value={selectedIssue}
                  onChange={(e) => setSelectedIssue(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-[#172B54] focus:outline-none focus:border-[#172B54]"
                >
                  <option>Property / Real Estate Dispute</option>
                  <option>Family &amp; Mutual/Contested Divorce</option>
                  <option>Criminal Defense / Anticipatory Bail</option>
                  <option>Cyber Crime / Bank Account Freeze</option>
                  <option>Corporate / Startup / Contract Law</option>
                  <option>Civil Recovery / Consumer Protection</option>
                  <option>NRI Legal Services</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#172B54] mb-1">
                    Preferred Language
                  </label>
                  <select
                    value={selectedLang}
                    onChange={(e) => setSelectedLang(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-[#172B54] focus:outline-none focus:border-[#172B54]"
                  >
                    <option>English / Hindi</option>
                    <option>Hindi</option>
                    <option>English</option>
                    <option>Punjabi / Marathi</option>
                    <option>Tamil / Telugu / Kannada</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#172B54] mb-1">
                    Phone for Masked Call
                  </label>
                  <input
                    type="tel"
                    required
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-[#172B54] focus:outline-none focus:border-[#172B54]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#172B54] hover:bg-[#0f1f40] text-white font-semibold py-2.5 rounded-lg text-sm transition-colors cursor-pointer"
              >
                Request Instant Anonymous Call
              </button>
            </form>
          )}

          <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#4A5568]">
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#FEC556]" />
              3-Minute Trial Guarantee
            </span>
            <button
              onClick={() => {
                onClose();
                onNavigate('/how-we-work');
              }}
              className="text-[#172B54] font-semibold hover:underline cursor-pointer"
            >
              See How It Works →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
