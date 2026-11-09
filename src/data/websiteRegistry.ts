import { WebsiteRecord } from './types';

export const INITIAL_WEBSITES: WebsiteRecord[] = [
  {
    id: 'website-001',
    name: 'VakeelSaab',
    referenceUrl: 'https://www.vakeelsaab.com/',
    categoryId: 'cat-legal-advocate',
    categoryName: 'Legal & Advocate',
    description:
      "India's First Anonymous Legal Consultation Platform. Complete multi-page recreation including Home, About Us, 20+ Specialized Legal Services, How We Work, Legal Guide (Blogs), Document Store, Client Reviews, Lawyer Registration, Contact Us, FAQs, Privacy Policy, and Terms of Service.",
    recreationPrompt:
      'Complete faithful recreation of VakeelSaab (https://www.vakeelsaab.com/) from the uploaded ZIP archive and reference URL, preserving original navy (#172B54) and gold (#FEC556) palette, Hanken Grotesk typography, all original images and SVG service icons, header mega-menu, interactive 7-step phone/app journey, 20+ practice area pages, document store, lawyer registration form, and floating call/WhatsApp actions.',
    modulePath: 'src/websites/website-001/',
    hasBuiltInModule: true,
    zipMeta: {
      fileName: 'saveweb2zip-com-www-vakeelsaab-com__1__5893cbb4.zip',
      fileSize: 3482190,
      uploadedAt: '2026-11-08T22:49:00.000Z',
    },
    screenshotDataUrl: '/websites/website-001/images/og-banner.png',
    pagesCount: 32,
    createdAt: '2026-11-08T22:49:00.000Z',
  },
];

const WEBSITE_STORAGE_KEY = 'raoz_legal_sample_websites_v1';

export function loadWebsites(): WebsiteRecord[] {
  try {
    const raw = localStorage.getItem(WEBSITE_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(WEBSITE_STORAGE_KEY, JSON.stringify(INITIAL_WEBSITES));
      return INITIAL_WEBSITES;
    }
    const parsed = JSON.parse(raw) as WebsiteRecord[];
    // Ensure website-001 (VakeelSaab) is never overwritten or lost
    const merged: WebsiteRecord[] = [...INITIAL_WEBSITES];
    for (const item of parsed) {
      if (item.id !== 'website-001' && !merged.some((w) => w.id === item.id)) {
        merged.push(item);
      }
    }
    return merged;
  } catch {
    return INITIAL_WEBSITES;
  }
}

export function saveWebsites(websites: WebsiteRecord[]): void {
  try {
    localStorage.setItem(WEBSITE_STORAGE_KEY, JSON.stringify(websites));
  } catch (err) {
    console.error('Failed to persist websites to browser storage:', err);
  }
}

export function generateNextWebsiteId(existingWebsites: WebsiteRecord[]): string {
  let maxNum = 1;
  for (const site of existingWebsites) {
    const match = site.id.match(/^website-(\d+)$/);
    if (match) {
      const num = parseInt(match[1], 10);
      if (!isNaN(num) && num > maxNum) {
        maxNum = num;
      }
    }
  }
  const nextNum = maxNum + 1;
  return `website-${String(nextNum).padStart(3, '0')}`;
}
