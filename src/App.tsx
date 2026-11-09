/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, useEffect, useState } from 'react';
import { CategoryRecord, WebsiteRecord } from './data/types';
import { createCategoryRecord } from './data/categoryRegistry';
import { storageAdapter } from './data/storageAdapter';
import { DashboardView } from './dashboard/DashboardView';

// Lazy load independent website modules so they never load simultaneously
const LazyWebsite001 = React.lazy(() => import('./websites/website-001/index'));
const LazyDynamicWebsite = React.lazy(
  () => import('./websites/website-002/index')
);

export default function App() {
  const [categories, setCategories] = useState<CategoryRecord[]>(() =>
    storageAdapter.getCategories()
  );
  const [websites, setWebsites] = useState<WebsiteRecord[]>(() =>
    storageAdapter.getWebsites()
  );
  const [activeWebsiteId, setActiveWebsiteId] = useState<string | null>(null);

  useEffect(() => {
    storageAdapter.persistCategories(categories);
  }, [categories]);

  useEffect(() => {
    storageAdapter.persistWebsites(websites);
  }, [websites]);

  const handleCreateCategory = (
    name: string,
    description: string
  ): CategoryRecord | null => {
    const newCat = createCategoryRecord(name, description);
    setCategories((prev) => [...prev, newCat]);
    return newCat;
  };

  const handleAddWebsite = (newSite: WebsiteRecord) => {
    setWebsites((prev) => {
      if (prev.some((w) => w.id === newSite.id)) {
        return prev;
      }
      return [...prev, newSite];
    });
  };

  const activeWebsite = websites.find((w) => w.id === activeWebsiteId) || null;

  if (activeWebsite) {
    return (
      <Suspense
        fallback={
          <div className="min-h-screen bg-[#090D16] text-slate-200 flex items-center justify-center p-6">
            <div className="text-center space-y-3">
              <div className="w-8 h-8 rounded-full border-2 border-amber-400 border-t-transparent animate-spin mx-auto"></div>
              <div className="text-sm font-semibold">
                Loading {activeWebsite.name} ({activeWebsite.id})...
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Module: {activeWebsite.modulePath}
              </div>
            </div>
          </div>
        }
      >
        {activeWebsite.id === 'website-001' ? (
          <LazyWebsite001 onBackToDashboard={() => setActiveWebsiteId(null)} />
        ) : (
          <LazyDynamicWebsite
            website={activeWebsite}
            onBackToDashboard={() => setActiveWebsiteId(null)}
          />
        )}
      </Suspense>
    );
  }

  return (
    <DashboardView
      categories={categories}
      websites={websites}
      onAddWebsite={handleAddWebsite}
      onCreateCategory={handleCreateCategory}
      onOpenWebsite={(id) => {
        setActiveWebsiteId(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    />
  );
}
