import rawMessages from './messages.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const vsMessages: Record<string, any> = rawMessages;

export interface LegalServiceMeta {
  slug: string;
  href: string;
  name: string;
  iconSrc: string;
  messageKey: string;
  servicePageKey: string;
  column: 1 | 2 | 3;
}

export const MEGA_MENU_SERVICES: LegalServiceMeta[] = [
  // Column 1
  {
    slug: 'real-estate-and-property-lawyers',
    href: '/legal-services/real-estate-and-property-lawyers',
    name: 'Property Lawyer',
    iconSrc: '/websites/website-001/services-icon/real-estate_7238320 1.svg',
    messageKey: 'property-law',
    servicePageKey: 'propertyLaw',
    column: 1,
  },
  {
    slug: 'criminal-defense-lawyer',
    href: '/legal-services/criminal-defense-lawyer',
    name: 'Criminal Lawyer',
    iconSrc: '/websites/website-001/services-icon/crime_3839555 1.svg',
    messageKey: 'criminal-law',
    servicePageKey: 'criminalLaw',
    column: 1,
  },
  {
    slug: 'civil-lawyer',
    href: '/legal-services/civil-lawyer',
    name: 'Civil Lawyer',
    iconSrc: '/websites/website-001/services-icon/justice_12022790 1.svg',
    messageKey: 'civil-law',
    servicePageKey: 'civilLaw',
    column: 1,
  },
  {
    slug: 'family-lawyer',
    href: '/legal-services/family-lawyer',
    name: 'Family Lawyer',
    iconSrc: '/websites/website-001/services-icon/family-law_15467419 1.svg',
    messageKey: 'family-law',
    servicePageKey: 'familyLaw',
    column: 1,
  },
  {
    slug: 'divorce-lawyers',
    href: '/legal-services/divorce-lawyers',
    name: 'Divorce Lawyer',
    iconSrc: '/websites/website-001/services-icon/divorce.png',
    messageKey: 'divorce-lawyers',
    servicePageKey: 'divorceLaw',
    column: 1,
  },
  {
    slug: 'corporate-lawyer-in-india',
    href: '/legal-services/corporate-lawyer-in-india',
    name: 'Corporate Lawyer',
    iconSrc: '/websites/website-001/services-icon/ethics_18724979 1.svg',
    messageKey: 'corporate-law',
    servicePageKey: 'corporateLaw',
    column: 1,
  },
  // Column 2
  {
    slug: 'cyber-crime-lawyer',
    href: '/legal-services/cyber-crime-lawyer',
    name: 'Cyber Crime Lawyer',
    iconSrc: '/websites/website-001/services-icon/V2ALKlSp3nhg.svg',
    messageKey: 'cyber-law',
    servicePageKey: 'cyberLaw',
    column: 2,
  },
  {
    slug: 'intellectual-property-lawyer',
    href: '/legal-services/intellectual-property-lawyer',
    name: 'Intellectual Property Lawyer',
    iconSrc: '/websites/website-001/services-icon/intellectual property.svg',
    messageKey: 'intellectual-property-law',
    servicePageKey: 'intellectualPropertyLaw',
    column: 2,
  },
  {
    slug: 'labour-and-employment-lawyer',
    href: '/legal-services/labour-and-employment-lawyer',
    name: 'Labour and Employment Lawyer',
    iconSrc: '/websites/website-001/services-icon/labor&employ.svg',
    messageKey: 'labour-employment-law',
    servicePageKey: 'labourEmploymentLaw',
    column: 2,
  },
  {
    slug: 'administrative-lawyer',
    href: '/legal-services/administrative-lawyer',
    name: 'Administrative Lawyer',
    iconSrc: '/websites/website-001/services-icon/Administrative law.svg',
    messageKey: 'administrative-law',
    servicePageKey: 'administrativeLaw',
    column: 2,
  },
  {
    slug: 'tax-lawyer',
    href: '/legal-services/tax-lawyer',
    name: 'Tax Lawyer',
    iconSrc: '/websites/website-001/services-icon/tax law.svg',
    messageKey: 'tax-law',
    servicePageKey: 'taxLaw',
    column: 2,
  },
  {
    slug: 'consumer-protection-lawyer',
    href: '/legal-services/consumer-protection-lawyer',
    name: 'Consumer Protection Lawyer',
    iconSrc: '/websites/website-001/services-icon/consumer protection law.svg',
    messageKey: 'consumer-protection-law',
    servicePageKey: 'consumerProtectionLaw',
    column: 2,
  },
  // Column 3
  {
    slug: 'environmental-lawyer',
    href: '/legal-services/environmental-lawyer',
    name: 'Environmental Lawyer',
    iconSrc: '/websites/website-001/services-icon/environmental-law_9548340 1.svg',
    messageKey: 'environmental-law',
    servicePageKey: 'environmentalLaw',
    column: 3,
  },
  {
    slug: 'immigration-lawyer',
    href: '/legal-services/immigration-lawyer',
    name: 'Immigration Lawyer',
    iconSrc: '/websites/website-001/services-icon/immigration-law_18570414 1.svg',
    messageKey: 'immigration-law',
    servicePageKey: 'immigrationLaw',
    column: 3,
  },
  {
    slug: 'insurance-lawyer',
    href: '/legal-services/insurance-lawyer',
    name: 'Insurance Lawyer',
    iconSrc: '/websites/website-001/services-icon/insurance law.svg',
    messageKey: 'insurance-law',
    servicePageKey: 'insuranceLaw',
    column: 3,
  },
  {
    slug: 'startup-lawyer',
    href: '/legal-services/startup-lawyer',
    name: 'Startup Lawyer',
    iconSrc: '/websites/website-001/services-icon/startup law.svg',
    messageKey: 'startup-laws',
    servicePageKey: 'startupLaws',
    column: 3,
  },
  {
    slug: 'business-and-commercial-lawyer',
    href: '/legal-services/business-and-commercial-lawyer',
    name: 'Business Lawyer',
    iconSrc: '/websites/website-001/services-icon/business law.svg',
    messageKey: 'business-Law',
    servicePageKey: 'businessLaws',
    column: 3,
  },
  {
    slug: 'nri-lawyers',
    href: '/legal-services/nri-lawyers',
    name: 'NRI Lawyer',
    iconSrc: '/websites/website-001/services-icon/nri_lawyer.png',
    messageKey: 'nri-law',
    servicePageKey: 'nriLaw',
    column: 3,
  },
  {
    slug: 'nclt-lawyers',
    href: '/legal-services/nclt-lawyers',
    name: 'NCLT Lawyer',
    iconSrc: '/websites/website-001/services-icon/ethics_18724979 1.svg',
    messageKey: 'nclt-law',
    servicePageKey: 'ncltLaw',
    column: 3,
  },
];

export const COVERED_BY_LOGOS = [
  {
    src: '/websites/website-001/images/n0M8rszyZY2E.jpg',
    alt: 'Startup India DPIIT Recognition',
    href: 'https://www.vakeelsaab.com/',
  },
  {
    src: '/websites/website-001/images/Zc0bUijATBCE.jpg',
    alt: 'ISO Certification',
    width: 100,
  },
  {
    src: '/websites/website-001/images/LDEzRU1kp6LH.jpg',
    alt: 'MSME Registration',
    width: 80,
  },
  {
    src: '/websites/website-001/images/rAaH9EjSQ4GB.png',
    alt: 'Make in India',
  },
  {
    src: '/websites/website-001/images/bar&bench_logo.avif',
    alt: 'Bar & Bench Coverage',
    href: 'https://www.barandbench.com/news/corporate/legal-tech-platform-vakeelsaab-signs-up-2000-lawyers-months-after-launch',
  },
  {
    src: '/websites/website-001/images/1gLM5PGYcE1r.png',
    alt: 'CXO Today Coverage',
    href: 'https://cxotoday.com/media-coverage/legal-tech-platform-onboards-2000-lawyers-in-months-as-indians-increasingly-seek-legal-advice-online/',
  },
  {
    src: '/websites/website-001/images/bDZpUogS0sqp.jpeg',
    alt: 'India News 24 Coverage',
    href: 'https://indianews24.asia/legal-tech-platform-vakeelsaab-onboards-2000-lawyers-sees-rising-online-legal-consultations/',
  },
  {
    src: '/websites/website-001/images/p169vTlsv9Wf.png',
    alt: 'Business News This Week Coverage',
    href: 'https://businessnewsthisweek.com/technology/vakeelsaab-onboards-2000-plus-verified-lawyers-nationwide-within-months/',
  },
];

export interface DocumentTemplateItem {
  id: string;
  title: string;
  category: string;
  priceInr: number;
  pages: number;
  updatedAt: string;
  summary: string;
  clauses: string[];
}

export const DOCUMENT_STORE_TEMPLATES: DocumentTemplateItem[] = [
  {
    id: 'doc-rent-agreement',
    title: 'Residential Rent / Lease Agreement (11 Months)',
    category: 'Property & Real Estate',
    priceInr: 299,
    pages: 6,
    updatedAt: 'Updated Nov 2026',
    summary: 'Standard 11-month residential lease agreement compliant with Indian Registration Act and state tenancy norms, covering security deposit, maintenance, lock-in period, and notice termination.',
    clauses: [
      'Monthly rent, security deposit, and escalation schedule',
      'Lock-in period & 30-day termination notice clause',
      'Society maintenance, electricity & water utility obligations',
      'Inspection rights, sub-letting prohibition & peaceful possession',
    ],
  },
  {
    id: 'doc-nda',
    title: 'Mutual Non-Disclosure & Confidentiality Agreement (NDA)',
    category: 'Business & Startup',
    priceInr: 399,
    pages: 5,
    updatedAt: 'Updated Nov 2026',
    summary: 'Legally vetted bilateral NDA for startups, vendors, employees, and investors under the Indian Contract Act, 1872.',
    clauses: [
      'Definition of Confidential & Proprietary Information',
      'Non-solicitation and non-circumvention obligations',
      'Injunctive relief & arbitration seat in India',
      'Return or destruction of confidential records upon termination',
    ],
  },
  {
    id: 'doc-legal-notice-money',
    title: 'Legal Notice for Recovery of Money / Dues',
    category: 'Civil & Recovery',
    priceInr: 499,
    pages: 4,
    updatedAt: 'Updated Nov 2026',
    summary: 'Formal advocate-style legal demand notice for unpaid invoices, personal loans, or dishonoured commitments prior to civil suit or Section 138 NI Act proceedings.',
    clauses: [
      'Chronological statement of transaction and outstanding principal',
      '15-day statutory compliance window for settlement',
      'Interest claim @ 18% p.a. and notice cost recovery',
      'Clear warning of civil/criminal litigation upon default',
    ],
  },
  {
    id: 'doc-general-affidavit',
    title: 'General Purpose Sworn Affidavit & Declaration',
    category: 'Personal & Statutory',
    priceInr: 199,
    pages: 2,
    updatedAt: 'Updated Nov 2026',
    summary: 'Ready-to-notarize sworn affidavit for name correction, address proof, income declaration, or lost document submission before government authorities.',
    clauses: [
      'Deponent identity and permanent residence declaration',
      'Point-by-point factual affirmation under oath',
      'Verification clause for Notary Public / Oath Commissioner',
    ],
  },
  {
    id: 'doc-employment-contract',
    title: 'Full-Time Employment Offer & Appointment Agreement',
    category: 'Labour & Employment',
    priceInr: 599,
    pages: 8,
    updatedAt: 'Updated Nov 2026',
    summary: 'Comprehensive employee appointment contract with probation terms, IP assignment, confidentiality, POSH compliance, and notice period clauses.',
    clauses: [
      'CTC structure, probation evaluation, and confirmation terms',
      'Intellectual Property assignment to employer',
      'Data security, moonlighting restriction, and termination grounds',
      'Dispute resolution and governing jurisdiction',
    ],
  },
  {
    id: 'doc-poa',
    title: 'Special Power of Attorney (NRI Property & Court Matters)',
    category: 'Property & NRI',
    priceInr: 699,
    pages: 5,
    updatedAt: 'Updated Nov 2026',
    summary: 'Specially drafted Power of Attorney enabling NRIs and outstation owners to authorize a trusted representative in India for property registration, tenancy, or court appearances.',
    clauses: [
      'Specific schedule of property and delimited powers granted',
      'Authority to sign pleadings, vakalatnama, and sale/lease deeds',
      'No-sale safeguard (optional) and revocation conditions',
      'Embassy attestation & Indian adjudication instructions',
    ],
  },
];

export interface LegalBlogArticle {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string[];
}

export const LEGAL_BLOG_ARTICLES: LegalBlogArticle[] = [
  {
    slug: 'mutual-vs-contested-divorce-india-complete-guide',
    title: 'Mutual Consent vs. Contested Divorce in India: Procedure, Timeline & Rights',
    category: 'Family & Divorce Law',
    author: 'Adv. Monica Lakhanpal & VakeelSaab Editorial',
    date: 'October 28, 2026',
    readTime: '6 min read',
    image: '/websites/website-001/images/heroImg2.png',
    excerpt: 'Understand how divorce laws operate under the Hindu Marriage Act, 1955 and Special Marriage Act, 1954, including the 6-month cooling-off waiver, alimony factors, and child custody principles.',
    content: [
      'Divorce laws in India depend on religion and the statute under which the marriage was solemnized—primarily the Hindu Marriage Act, 1955, the Special Marriage Act, 1954, the Indian Divorce Act, 1869, and the Dissolution of Muslim Marriages Act, 1939.',
      'Mutual Consent Divorce (Section 13B HMA): When both spouses agree to part ways peacefully after living separately for at least 1 year, they file a joint petition in the Family Court. After the First Motion statement is recorded, a 6-month cooling-off period applies (which the Supreme Court has held can be waived in genuine settled cases) before the Second Motion and final decree.',
      'Contested Divorce: Filed by one spouse on specific statutory grounds such as physical or mental cruelty, desertion for 2+ years, adultery, conversion, or incurable mental disorder. Because evidence and cross-examination are required, contested proceedings require strategic preparation early on.',
      'Why Anonymous Consultation Helps First: Before taking any irreversible step or sharing sensitive family facts publicly, speaking anonymously with a verified Family Court advocate on VakeelSaab lets you understand your realistic maintenance, streedhan, and child custody rights in complete privacy.',
    ],
  },
  {
    slug: 'cyber-crime-online-financial-fraud-complaint-steps',
    title: 'Victim of Online Banking Fraud or Cyber Blackmail? Immediate Legal Steps to Take',
    category: 'Cyber Crime Law',
    author: 'VakeelSaab Cyber Law Desk',
    date: 'October 19, 2026',
    readTime: '5 min read',
    image: '/websites/website-001/newdesign/jOTGmx3kuVDs.jpg',
    excerpt: 'The first 24 hours ("Golden Hour") are critical in freezing fraudulent bank transfers and preserving digital evidence under the IT Act and Bharatiya Nyaya Sanhita.',
    content: [
      'Online financial scams—from UPI phishing and fake investment apps to digital arrest extortion—move money through multiple mule accounts within minutes. Calling the National Cyber Crime Helpline (1930) and filing a formal report on cybercrime.gov.in immediately triggers a lien/freeze request across recipient banks.',
      'Preserve Raw Digital Evidence: Never delete WhatsApp chats, call logs, SMS headers, or bank UTR reference numbers. Screenshots alone are secondary evidence; preserving the original device logs and bank statements is vital for Section 63 BSA / 65B electronic evidence certificates.',
      'If police freeze your bank account by mistake due to a disputed P2P or business transfer, a Cyber Crime Lawyer can move an application before the Investigating Officer or jurisdictional Magistrate for defreezing the account upon furnishing an indemnity bond.',
    ],
  },
  {
    slug: 'property-title-verification-checklist-buyers-nris',
    title: 'Property Title Verification Checklist in India: How to Avoid Disputed Real Estate',
    category: 'Property Law',
    author: 'VakeelSaab Real Estate Practice',
    date: 'October 11, 2026',
    readTime: '7 min read',
    image: '/websites/website-001/images/og-banner.png',
    excerpt: 'Before paying token money or signing an Agreement to Sell, verify the 30-year chain of title deeds, Encumbrance Certificate (EC), mutation records, and RERA registration.',
    content: [
      'A majority of civil litigation in India stems from defective property titles, undisclosed mortgages, unpartitioned ancestral claims, or unregistered builders’ agreements.',
      '30-Year Mother Deed & Chain of Title: Always have an independent Property Lawyer trace ownership transfers for at least 30 years. Verify that every intermediate link deed was properly stamped and registered at the Sub-Registrar office.',
      'Encumbrance Certificate (EC) & Litigation Search: Obtain an up-to-date EC to confirm no bank charge or equitable mortgage exists, and conduct a court registry check to ensure no stay order or family partition suit is pending over the land parcel.',
    ],
  },
  {
    slug: 'why-anonymous-legal-consultation-protects-clients',
    title: 'Why Sharing Your Identity in the First Legal Call Can Put Your Case at Risk',
    category: 'Legal Consultation',
    author: 'Adv. Monica Lakhanpal',
    date: 'October 02, 2026',
    readTime: '4 min read',
    image: '/websites/website-001/newdesign/lawyerImg.png',
    excerpt: 'Every time you narrate your case to a new lawyer without anonymity, you reveal sensitive facts to someone who is free to decline your brief.',
    content: [
      'When looking for a lawyer, most litigants speak to three or four advocates before deciding whom to engage. In traditional consultations, you hand over your name, opponent details, documents, and weaknesses on the very first call.',
      'VakeelSaab solves this through a Hybrid Path to Justice: Start Safe (Online & Anonymous) to evaluate the lawyer’s domain command, fee transparency, and strategy without revealing your identity. Move Strong (Offline) by sharing your documents and meeting in person only after you have selected the advocate you trust.',
    ],
  },
];
