import { CategoryRecord } from './types';

export const INITIAL_CATEGORIES: CategoryRecord[] = [
  {
    id: 'cat-legal-advocate',
    name: 'Legal & Advocate',
    slug: 'legal-advocate',
    description: 'Independent advocates, full-service legal consultation platforms, and litigation practice portals.',
    createdAt: '2026-11-08T00:00:00.000Z',
    isDefault: true,
  },
  {
    id: 'cat-law-firms',
    name: 'Law Firms',
    slug: 'law-firms',
    description: 'Multi-partner law firm websites, boutique legal chambers, and dispute resolution practices.',
    createdAt: '2026-11-08T00:00:00.000Z',
    isDefault: true,
  },
  {
    id: 'cat-legal-documentation',
    name: 'Legal Documentation',
    slug: 'legal-documentation',
    description: 'Contract drafting portals, affidavit & agreement generators, and legal template stores.',
    createdAt: '2026-11-08T00:00:00.000Z',
    isDefault: true,
  },
  {
    id: 'cat-legal-consultation',
    name: 'Legal Consultation',
    slug: 'legal-consultation',
    description: 'On-demand tele-law advisory, anonymous legal opinion services, and client intake systems.',
    createdAt: '2026-11-08T00:00:00.000Z',
    isDefault: true,
  },
  {
    id: 'cat-corporate-legal',
    name: 'Corporate Legal Services',
    slug: 'corporate-legal-services',
    description: 'Startup incorporation, M&A advisory, intellectual property, NCLT, and regulatory compliance portals.',
    createdAt: '2026-11-08T00:00:00.000Z',
    isDefault: true,
  },
];

const CATEGORY_STORAGE_KEY = 'raoz_legal_sample_categories_v1';

export function loadCategories(): CategoryRecord[] {
  try {
    const raw = localStorage.getItem(CATEGORY_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(CATEGORY_STORAGE_KEY, JSON.stringify(INITIAL_CATEGORIES));
      return INITIAL_CATEGORIES;
    }
    const parsed = JSON.parse(raw) as CategoryRecord[];
    // Ensure all 5 initial categories are always present
    const merged = [...INITIAL_CATEGORIES];
    for (const item of parsed) {
      if (!merged.some((c) => c.id === item.id || c.name.toLowerCase() === item.name.toLowerCase())) {
        merged.push(item);
      }
    }
    return merged;
  } catch {
    return INITIAL_CATEGORIES;
  }
}

export function saveCategories(categories: CategoryRecord[]): void {
  try {
    localStorage.setItem(CATEGORY_STORAGE_KEY, JSON.stringify(categories));
  } catch (err) {
    console.error('Failed to persist categories to browser storage:', err);
  }
}

export function createCategoryRecord(name: string, description?: string): CategoryRecord {
  const trimmed = name.trim();
  const slug = trimmed
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return {
    id: `cat-${slug}-${Date.now().toString(36)}`,
    name: trimmed,
    slug,
    description:
      description?.trim() ||
      `Custom legal website category for ${trimmed} recreations and reference modules.`,
    createdAt: new Date().toISOString(),
    isDefault: false,
  };
}
