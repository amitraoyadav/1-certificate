import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  Clock,
  Eye,
  FileText,
  Mail,
  MapPin,
  Phone,
  Search,
  Shield,
  Star,
  UserPlus,
  X,
} from 'lucide-react';
import {
  DOCUMENT_STORE_TEMPLATES,
  DocumentTemplateItem,
  LEGAL_BLOG_ARTICLES,
  LegalBlogArticle,
  MEGA_MENU_SERVICES,
  vsMessages,
} from '../assets/vakeelsaabData';

interface PageProps {
  onNavigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const DocumentStorePage: React.FC<PageProps> = ({ onOpenCallModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [previewDoc, setPreviewDoc] = useState<DocumentTemplateItem | null>(null);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [buyerEmail, setBuyerEmail] = useState('');

  const categories = [
    'All',
    ...Array.from(new Set(DOCUMENT_STORE_TEMPLATES.map((d) => d.category))),
  ];
  const filteredDocs =
    selectedCategory === 'All'
      ? DOCUMENT_STORE_TEMPLATES
      : DOCUMENT_STORE_TEMPLATES.filter((d) => d.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#172B54] to-[#0b1a3a] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1 rounded-full bg-[#FEC556]/20 text-[#FEC556] text-xs font-bold uppercase tracking-wider">
            VakeelSaab Document Store
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold">
            Need a Legal Document? Get It Online.
          </h1>
          <p className="text-white/85 text-base max-w-2xl mx-auto">
            Rent agreements, affidavits, legal notices, NDAs, and employment contracts drafted by verified Indian advocates. Preview for free, customize details, and receive the ready PDF by email.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 pattern-bg">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#172B54] text-[#FEC556]'
                    : 'bg-[#EDF3FA] text-[#172B54] hover:bg-[#FEC556]/25'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#172B54] bg-[#EDF3FA] px-2.5 py-1 rounded">
                      {doc.category}
                    </span>
                    <span className="text-xs text-[#4A5568]">{doc.pages} Pages</span>
                  </div>
                  <h2 className="text-lg font-bold text-[#172B54] mb-2">{doc.title}</h2>
                  <p className="text-xs text-[#4A5568] leading-relaxed mb-4">
                    {doc.summary}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {doc.clauses.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#172B54]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-extrabold text-[#172B54]">
                      ₹{doc.priceInr}
                    </span>
                    <span className="text-[11px] text-[#4A5568] block">
                      Incl. 18% GST
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setPreviewDoc(doc);
                      setCheckoutSuccess(false);
                    }}
                    className="inline-flex items-center gap-1.5 bg-[#FEC556] text-[#172B54] hover:bg-[#FEC556]/90 font-bold px-4 py-2.5 rounded-lg text-xs cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Preview &amp; Get PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#172B54] text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#FEC556]">
                Need Custom Contract Drafting by a Senior Lawyer?
              </h3>
              <p className="text-sm text-white/80 mt-1">
                Connect with a VakeelSaab advocate to customize clauses for your specific transaction.
              </p>
            </div>
            <button
              onClick={onOpenCallModal}
              className="bg-[#FEC556] text-[#172B54] font-bold px-6 py-3 rounded-xl whitespace-nowrap cursor-pointer"
            >
              Talk to Drafting Lawyer
            </button>
          </div>
        </div>
      </section>

      {/* Document Preview Modal */}
      {previewDoc && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setPreviewDoc(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#172B54]/70">
              {previewDoc.category} · Free Clauses Preview
            </span>
            <h3 className="text-xl font-bold text-[#172B54] mt-1">
              {previewDoc.title}
            </h3>

            <div className="my-4 p-4 rounded-xl bg-gray-50 border border-gray-200 font-mono text-xs text-gray-700 space-y-2">
              <p className="font-bold text-[#172B54]">
                INDIA NON-JUDICIAL / STATUTORY FORMAT PREVIEW
              </p>
              <p>
                THIS AGREEMENT / INSTRUMENT is made and executed on this ___ day of __________, 2026...
              </p>
              <p className="text-gray-500">Included Vetted Clauses:</p>
              {previewDoc.clauses.map((cl, idx) => (
                <p key={idx}>
                  Clause {idx + 1}: {cl}
                </p>
              ))}
            </div>

            {checkoutSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-900">
                  Document Order Recorded (Simulated Checkout)
                </h4>
                <p className="text-xs text-emerald-800">
                  In production, Razorpay processes ₹{previewDoc.priceInr} and dispatches the editable DOCX &amp; PDF to <strong>{buyerEmail}</strong>.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setCheckoutSuccess(true);
                }}
                className="space-y-3"
              >
                <div>
                  <label className="block text-xs font-semibold text-[#172B54] mb-1">
                    Email Address for Instant PDF Delivery *
                  </label>
                  <input
                    type="email"
                    required
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-[#172B54]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#172B54] hover:bg-[#0f1f40] text-white font-bold py-3 rounded-xl text-sm cursor-pointer"
                >
                  Proceed to Pay ₹{previewDoc.priceInr} (incl. GST)
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export const BlogsPage: React.FC<PageProps> = ({ onOpenCallModal }) => {
  const blogs = vsMessages.blogs;
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<LegalBlogArticle | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filtered = LEGAL_BLOG_ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (activeArticle) {
    return (
      <div className="min-h-screen bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <button
            onClick={() => setActiveArticle(null)}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#172B54] hover:text-[#FEC556] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{blogs.backToBlogs}</span>
          </button>

          <div className="space-y-3">
            <span className="text-xs font-bold text-[#172B54] bg-[#FEC556]/25 px-3 py-1 rounded">
              {activeArticle.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#172B54]">
              {activeArticle.title}
            </h1>
            <div className="text-xs text-[#4A5568] flex items-center gap-2">
              <span>{activeArticle.author}</span>
              <span>·</span>
              <span>{activeArticle.date}</span>
              <span>·</span>
              <span>{activeArticle.readTime}</span>
            </div>
          </div>

          <img
            src={activeArticle.image}
            alt={activeArticle.title}
            className="w-full h-72 md:h-96 object-cover rounded-2xl shadow"
            referrerPolicy="no-referrer"
          />

          <div className="space-y-4 text-[#2D3748] text-base leading-relaxed">
            {activeArticle.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="bg-[#172B54] text-white rounded-2xl p-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-[#FEC556]">{blogs.ctaTitle}</h3>
              <p className="text-xs text-white/80 mt-1">{blogs.ctaDesc}</p>
            </div>
            <button
              onClick={onOpenCallModal}
              className="bg-[#FEC556] text-[#172B54] font-bold px-6 py-3 rounded-xl whitespace-nowrap cursor-pointer"
            >
              {blogs.ctaCall}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#172B54] to-[#0b1a3a] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <h1 className="text-3xl md:text-5xl font-extrabold">{blogs.heroTitle}</h1>
          <p className="text-white/85">{blogs.heroDesc1}</p>
          <p className="text-[#FEC556] font-semibold">{blogs.heroDesc2}</p>
        </div>
      </section>

      <section className="py-12 px-6 pattern-bg">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={blogs.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-[#172B54] focus:outline-none focus:border-[#172B54]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((art) => (
              <div
                key={art.slug}
                onClick={() => setActiveArticle(art)}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-52 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-6 space-y-2.5">
                    <div className="text-xs text-[#4A5568] flex items-center gap-2">
                      <span className="font-bold text-[#172B54]">{art.category}</span>
                      <span>·</span>
                      <span>{art.date}</span>
                      <span>·</span>
                      <span>{art.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#172B54] hover:text-[#1B3A6B]">
                      {art.title}
                    </h2>
                    <p className="text-sm text-[#4A5568] leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-5 pt-2">
                  <span className="text-sm font-bold text-[#172B54] hover:text-[#FEC556]">
                    Read Full Legal Guide →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="bg-[#172B54] text-white rounded-2xl p-8 text-center max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-[#FEC556]">{blogs.newsletterTitle}</h3>
            <p className="text-sm text-white/80">{blogs.newsletterDesc}</p>
            {subscribed ? (
              <p className="text-emerald-400 font-semibold text-sm">
                ✓ {blogs.thankYou}! You are subscribed to VakeelSaab Legal Insights.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail) setSubscribed(true);
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={blogs.newsletterEmailPlaceholder}
                  className="flex-1 rounded-lg px-4 py-2.5 text-sm text-[#172B54] bg-white"
                />
                <button
                  type="submit"
                  className="bg-[#FEC556] text-[#172B54] font-bold px-6 py-2.5 rounded-lg text-sm cursor-pointer"
                >
                  {blogs.subscribe}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export const RegisterLawyerPage: React.FC<PageProps> = ({ onNavigate }) => {
  const reg = vsMessages.register;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    barCouncilNo: '',
    experience: '6-10 Years',
    expertise: 'Property & Civil Law',
    languages: 'English, Hindi',
    city: 'New Delhi',
    courtJurisdiction: 'Supreme Court / High Court / District Court',
  });

  if (submitted) {
    const ty = vsMessages.thankyou.lawyer;
    return (
      <div className="min-h-screen bg-white py-16 px-6">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center space-y-5">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h1 className="text-3xl font-extrabold text-[#172B54]">{ty.heading}</h1>
          <p className="text-lg font-semibold text-[#172B54]">{ty.subheading}</p>
          <p className="text-sm text-[#4A5568] leading-relaxed">{ty.description}</p>
          <div className="bg-[#EDF3FA] rounded-xl p-5 text-left space-y-2">
            <h3 className="font-bold text-[#172B54] text-sm">{ty.how_it_works}</h3>
            <p className="text-xs text-[#2D3748] leading-relaxed whitespace-pre-line">
              {ty.how_it_works_description}
            </p>
          </div>
          <button
            onClick={() => onNavigate('/')}
            className="bg-[#172B54] text-white font-bold px-7 py-3 rounded-xl text-sm cursor-pointer"
          >
            {vsMessages.thankyou.cta}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#172B54] to-[#0b1a3a] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <h1 className="text-3xl md:text-5xl font-extrabold">{reg.title}</h1>
          <p className="text-lg text-[#FEC556] font-semibold">{reg.subtitle}</p>
          <p className="text-sm md:text-base text-white/85 max-w-2xl mx-auto">
            {reg.heroDescription}
          </p>
        </div>
      </section>

      <section className="py-12 px-6 pattern-bg">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Why Register Grid */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#172B54] section-headline">
                {reg.whyRegisterTitle}
              </h2>
              <p className="text-[#4A5568] mt-2">{reg.whyRegisterDescription}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: reg.directClientCalls, desc: reg.directClientCallsDesc },
                { title: reg.zeroMarketingCosts, desc: reg.zeroMarketingCostsDesc },
                { title: reg.firstImpressionWins, desc: reg.firstImpressionWinsDesc },
                {
                  title: reg.stageWiseBillingAdvance,
                  desc: reg.stageWiseBillingAdvanceDesc,
                },
                { title: reg.fairRevenueShare, desc: reg.fairRevenueShareDesc },
                { title: reg.timeEfficient, desc: reg.timeEfficientDesc },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 space-y-2"
                >
                  <h3 className="text-lg font-bold text-[#172B54]">{item.title}</h3>
                  <p className="text-sm text-[#4A5568]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 max-w-3xl mx-auto">
            <div className="mb-6 pb-4 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-[#172B54] flex items-center gap-2">
                <UserPlus className="w-6 h-6 text-[#FEC556]" />
                <span>{reg.formTitle}</span>
              </h2>
              <p className="text-xs text-[#4A5568] mt-1">{reg.formDescription}</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#172B54] mb-1">
                    {reg.name} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={reg.namePlaceholder || 'Adv. Rajesh Verma'}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-[#172B54]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#172B54] mb-1">
                    {reg.email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={reg.emailPlaceholder || 'advocate@chamber.in'}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-[#172B54]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#172B54] mb-1">
                    {reg.mobile} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-[#172B54]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#172B54] mb-1">
                    Bar Council Enrollment Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.barCouncilNo}
                    onChange={(e) =>
                      setFormData({ ...formData, barCouncilNo: e.target.value })
                    }
                    placeholder="e.g. D/1234/2016"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-[#172B54]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#172B54] mb-1">
                    {reg.areaOfExpertise} *
                  </label>
                  <select
                    value={formData.expertise}
                    onChange={(e) =>
                      setFormData({ ...formData, expertise: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-[#172B54]"
                  >
                    {MEGA_MENU_SERVICES.map((s) => (
                      <option key={s.slug} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#172B54] mb-1">
                    {reg.experience} *
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({ ...formData, experience: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-[#172B54]"
                  >
                    <option>0-2 Years</option>
                    <option>2-5 Years</option>
                    <option>6-10 Years</option>
                    <option>11-15 Years</option>
                    <option>15+ Years</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#172B54] mb-1">
                    {reg.languages} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.languages}
                    onChange={(e) =>
                      setFormData({ ...formData, languages: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-[#172B54]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#172B54] mb-1">
                    Primary City &amp; Court Jurisdiction *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-[#172B54]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FEC556] text-[#172B54] hover:bg-[#FEC556]/90 font-bold py-3.5 rounded-xl text-sm shadow-md cursor-pointer mt-2"
              >
                Submit Advocate Onboarding Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ReviewsPage: React.FC<PageProps> = ({ onOpenCallModal }) => {
  const rev = vsMessages.reviewsPage;
  const homeTestimonials = vsMessages.home.testimonials.items;

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#172B54] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <h1 className="text-3xl md:text-5xl font-extrabold">{rev.heroTitle}</h1>
          <p className="text-lg text-[#FEC556] font-semibold">{rev.heroSubtitle}</p>
          <p className="text-white/80 text-sm">{rev.heroDescription}</p>
        </div>
      </section>

      <section className="py-12 px-6 pattern-bg">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: rev.totalReviews, val: '4,200+' },
              { label: rev.averageRating, val: '4.9 / 5.0' },
              { label: rev.successRate, val: '98.4%' },
              { label: rev.responseTime, val: '< 15 Mins' },
            ].map((st, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center shadow border border-gray-100"
              >
                <div className="text-2xl md:text-3xl font-extrabold text-[#172B54] tabular-nums">
                  {st.val}
                </div>
                <div className="text-xs text-[#4A5568] mt-1 font-medium">
                  {st.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeTestimonials.map(
              (
                t: {
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
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#FEC556]" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#172B54] bg-[#EDF3FA] px-2.5 py-1 rounded">
                        {t.case}
                      </span>
                    </div>
                    <p className="text-sm text-[#2D3748] italic leading-relaxed mb-4">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-[#172B54]">{t.author}</p>
                      <p className="text-[#4A5568]">{t.location}</p>
                    </div>
                    <span className="text-emerald-700 font-semibold">
                      ✓ {rev.verified}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="bg-[#172B54] text-white rounded-2xl p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold">{rev.ctaTitle}</h3>
            <p className="text-sm text-white/80 max-w-xl mx-auto">
              {rev.ctaDescription}
            </p>
            <button
              onClick={onOpenCallModal}
              className="bg-[#FEC556] text-[#172B54] font-bold px-8 py-3.5 rounded-xl cursor-pointer"
            >
              {rev.callButton}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ContactPage: React.FC<PageProps> = () => {
  const c = vsMessages.contact;
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    issue: 'Property Law',
    urgency: 'Medium',
    message: '',
  });

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#172B54] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <h1 className="text-3xl md:text-5xl font-extrabold">{c.heroTitle}</h1>
          <p className="text-white/85">{c.heroSubtitle}</p>
          <p className="text-[#FEC556] font-semibold text-sm">{c.heroSupport}</p>
        </div>
      </section>

      <section className="py-12 px-6 pattern-bg">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-[#172B54] mb-1">{c.formTitle}</h2>
            <p className="text-xs text-[#4A5568] mb-6">{c.formSubtitle}</p>

            {sent ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-[#172B54]">{c.successTitle}</h3>
                <p className="text-sm text-[#4A5568] max-w-md mx-auto">
                  {c.successText}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="bg-[#172B54] text-white text-xs font-bold px-5 py-2.5 rounded-lg cursor-pointer"
                >
                  {c.sendAnother}
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#172B54] mb-1">
                      {c.name}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={c.placeholderName}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-[#172B54]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#172B54] mb-1">
                      {c.phone}
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder={c.placeholderPhone}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-[#172B54]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#172B54] mb-1">
                      {c.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder={c.placeholderEmail}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-[#172B54]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#172B54] mb-1">
                      {c.legalIssue}
                    </label>
                    <select
                      value={form.issue}
                      onChange={(e) => setForm({ ...form, issue: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-[#172B54]"
                    >
                      <option>{c.issueProperty}</option>
                      <option>{c.issueFamily}</option>
                      <option>{c.issueCriminal}</option>
                      <option>{c.issueCivil}</option>
                      <option>{c.issueCorporate}</option>
                      <option>{c.issueCyber}</option>
                      <option>{c.issueTax}</option>
                      <option>{c.issueOther}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#172B54] mb-1">
                    {c.message}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={c.placeholderMessage}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-[#172B54]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FEC556] text-[#172B54] hover:bg-[#FEC556]/90 font-bold py-3 rounded-xl text-sm cursor-pointer"
                >
                  {c.send}
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#172B54] text-white rounded-2xl p-7 space-y-5">
              <h3 className="text-xl font-bold text-[#FEC556]">{c.contactInfo}</h3>
              <p className="text-xs text-white/80">{c.infoSubtitle}</p>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#FEC556] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{c.callUsLabel}</p>
                    <p className="text-white/85">{c.officePhone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#FEC556] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{c.emailUsLabel}</p>
                    <p className="text-white/85">help@vakeelsaab.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FEC556] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{c.officeTitle}</p>
                    <p className="text-white/85 text-xs leading-relaxed">
                      {c.officeAddress}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#FEC556] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{c.businessHoursLabel}</p>
                    <p className="text-white/85">{c.officeHoursLabel}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#EDF3FA] rounded-2xl p-6 border border-[#172B54]/10 space-y-2">
              <div className="flex items-center gap-2 text-[#172B54] font-bold">
                <Shield className="w-5 h-5 text-emerald-600" />
                <span>{c.confidentialTitle}</span>
              </div>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                {c.confidentialText}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const PolicyAndFaqPage: React.FC<{
  mode: 'faq' | 'privacy' | 'terms' | 'sitemap';
  onNavigate: (path: string) => void;
}> = ({ mode, onNavigate }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  if (mode === 'sitemap') {
    return (
      <div className="min-h-screen bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-3xl font-extrabold text-[#172B54]">
            VakeelSaab Complete Site Map
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h2 className="font-bold text-lg text-[#172B54] border-b pb-2">
                Core Platform Pages
              </h2>
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'How We Work', href: '/how-we-work' },
                { label: 'All Legal Services', href: '/legal-services' },
                { label: 'VakeelSaab Document Store', href: '/document-store' },
                { label: 'Legal Guide & Blogs', href: '/blogs' },
                { label: 'Client Reviews', href: '/reviews' },
                { label: 'Register as a Lawyer', href: '/lawyer-registration' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Stay Anonymous', href: '/anonymous' },
                { label: 'Accessible Legal Help', href: '/accessible' },
                { label: 'Affordable Pricing', href: '/affordable' },
              ].map((l) => (
                <button
                  key={l.href}
                  onClick={() => onNavigate(l.href)}
                  className="block text-sm text-[#172B54] hover:text-[#FEC556] cursor-pointer"
                >
                  {l.label}
                </button>
              ))}
            </div>
            <div className="space-y-2 md:col-span-2">
              <h2 className="font-bold text-lg text-[#172B54] border-b pb-2">
                Specialized Legal Services (20+ Practice Areas)
              </h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {MEGA_MENU_SERVICES.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => onNavigate(s.href)}
                    className="text-left text-sm text-[#172B54] hover:text-[#FEC556] cursor-pointer"
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'faq') {
    const faqData = vsMessages.faq;
    return (
      <div className="min-h-screen bg-white">
        <section className="bg-[#172B54] text-white py-14 px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold">
            {faqData.heroTitle || 'Frequently Asked Questions'}
          </h1>
          <p className="text-white/80 mt-2">{faqData.heroSubtitle}</p>
        </section>
        <section className="py-12 px-6 max-w-4xl mx-auto space-y-3">
          {faqData.questions.map(
            (q: { question: string; answer: string | string[] }, idx: number) => {
              const open = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
                >
                  <button
                    onClick={() => setOpenIdx(open ? null : idx)}
                    className="w-full p-4 text-left font-bold text-[#172B54] flex items-center justify-between cursor-pointer"
                  >
                    <span>
                      {idx + 1}. {q.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {open && (
                    <div className="px-4 pb-4 text-sm text-[#4A5568] border-t border-gray-100 pt-3 space-y-1">
                      {Array.isArray(q.answer) ? (
                        q.answer.map((line, lIdx) => <p key={lIdx}>{line}</p>)
                      ) : (
                        <p>{q.answer}</p>
                      )}
                    </div>
                  )}
                </div>
              );
            }
          )}
        </section>
      </div>
    );
  }

  const doc = mode === 'privacy' ? vsMessages.privacy : vsMessages['terms-of-service'];
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#172B54] text-white py-14 px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FEC556]">
          {doc.heroBadge}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold mt-2">{doc.heroTitle}</h1>
        <p className="text-white/80 mt-2 max-w-2xl mx-auto text-sm">
          {doc.heroSubtitle}
        </p>
      </section>
      <section className="py-12 px-6 max-w-4xl mx-auto space-y-6 text-sm text-[#2D3748] leading-relaxed">
        <p>{doc.intro}</p>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => {
          const title = doc[`section${n}Title`];
          const desc = doc[`section${n}Desc`];
          if (!title) return null;
          return (
            <div key={n} className="space-y-2">
              <h2 className="text-lg font-bold text-[#172B54]">{title}</h2>
              {desc && <p>{desc}</p>}
            </div>
          );
        })}
      </section>
    </div>
  );
};
