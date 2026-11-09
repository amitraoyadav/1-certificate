import React, { useMemo, useState } from 'react';
import {
  Download,
  ExternalLink,
  FolderGit2,
  Play,
  Plus,
  Search,
} from 'lucide-react';
import { CategoryRecord, WebsiteRecord } from '../data/types';
import { CategoryManager } from '../categories/CategoryManager';
import { AddWebsiteSection } from '../components/AddWebsiteModal';
import { storageAdapter } from '../data/storageAdapter';

interface DashboardViewProps {
  categories: CategoryRecord[];
  websites: WebsiteRecord[];
  onAddWebsite: (newSite: WebsiteRecord) => void;
  onCreateCategory: (name: string, description: string) => CategoryRecord | null;
  onOpenWebsite: (websiteId: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  categories,
  websites,
  onAddWebsite,
  onCreateCategory,
  onOpenWebsite,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');

  const filteredWebsites = useMemo(() => {
    return websites.filter((site) => {
      const matchesCategory =
        selectedCategoryId === 'all' || site.categoryId === selectedCategoryId;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCategory;
      return (
        matchesCategory &&
        (site.name.toLowerCase().includes(q) ||
          site.id.toLowerCase().includes(q) ||
          site.categoryName.toLowerCase().includes(q) ||
          site.referenceUrl.toLowerCase().includes(q) ||
          site.description.toLowerCase().includes(q))
      );
    });
  }, [websites, selectedCategoryId, searchQuery]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExportRegistry = () => {
    const json = storageAdapter.exportRegistryBundle();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'raoz-legal-sample-registry.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const storageStatus = storageAdapter.getStatus();

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col">
      {/* Top Bar Contract: 3 Zones separated by gap-8 */}
      <header className="flex items-center justify-between gap-8 px-6 py-4 border-b border-slate-800/90 bg-[#090D16]/95 sticky top-0 z-40 backdrop-blur-md">
        {/* Zone 1: Brand Title (single text element wordmark) */}
        <a
          href="#total-websites-section"
          onClick={(e) => scrollToSection(e, 'total-websites-section')}
          className="text-lg font-extrabold tracking-tight text-white whitespace-nowrap shrink-0"
        >
          RAOZ LEGAL SAMPLE
        </a>

        {/* Zone 2: 4 Concise Single-Line Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
          <a
            href="#total-websites-section"
            onClick={(e) => scrollToSection(e, 'total-websites-section')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Total Websites
          </a>
          <a
            href="#categories-section"
            onClick={(e) => scrollToSection(e, 'categories-section')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Categories
          </a>
          <a
            href="#add-website-section"
            onClick={(e) => scrollToSection(e, 'add-website-section')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Add Website
          </a>
          <a
            href="#search-websites-section"
            onClick={(e) => scrollToSection(e, 'search-websites-section')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Search Websites
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={(e) => scrollToSection(e, 'add-website-section')}
            className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-500 rounded-lg hover:bg-amber-400 transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add New Website</span>
          </button>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto w-full px-6 py-10 space-y-14 flex-1">
        {/* SECTION 1: TOTAL WEBSITES */}
        <section id="total-websites-section" className="space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-slate-800/80 pb-5">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs text-amber-400 font-medium tracking-wide">
                Independent Legal &amp; Advocate Website Collection
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                01. Total Websites
              </h1>
              <p className="text-sm text-slate-400 leading-relaxed">
                Modular, code-split legal website library. Every website recreation resides in an isolated module directory (<span className="font-mono text-slate-300">src/websites/website-XXX/</span>) and loads on demand.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleExportRegistry}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0E1422] hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Export Registry JSON</span>
              </button>
              <button
                onClick={() => onOpenWebsite('website-001')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer whitespace-nowrap"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Open VakeelSaab (website-001)</span>
              </button>
            </div>
          </div>

          {/* Clean Structured Stat Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-[#0E1422] border border-slate-800/90 rounded-xl p-6 space-y-1">
              <div className="text-xs font-medium text-slate-400">
                Total Registered Websites
              </div>
              <div className="text-4xl font-extrabold text-white font-mono tabular-nums">
                {websites.length}
              </div>
              <div className="text-xs text-slate-500 pt-1">
                Latest: {websites[websites.length - 1]?.name} (
                {websites[websites.length - 1]?.id})
              </div>
            </div>

            <div className="bg-[#0E1422] border border-slate-800/90 rounded-xl p-6 space-y-1">
              <div className="text-xs font-medium text-slate-400">
                Total Legal Categories
              </div>
              <div className="text-4xl font-extrabold text-amber-400 font-mono tabular-nums">
                {categories.length}
              </div>
              <div className="text-xs text-slate-500 pt-1">
                5 initial categories + {Math.max(0, categories.length - 5)} custom
              </div>
            </div>

            <div className="bg-[#0E1422] border border-slate-800/90 rounded-xl p-6 space-y-1">
              <div className="text-xs font-medium text-slate-400">
                Registry Persistence Mode
              </div>
              <div className="text-lg font-bold text-slate-200 pt-1">
                {storageStatus.mode === 'remote-api'
                  ? 'Remote Database API'
                  : 'Browser Local Storage (Client)'}
              </div>
              <div className="text-xs text-slate-500 pt-1">
                Separate Website &amp; Category registries ready for backend DB sync
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CATEGORIES & CATEGORY-WISE LISTING */}
        <CategoryManager
          categories={categories}
          websites={websites}
          selectedCategoryId={selectedCategoryId}
          onSelectCategory={setSelectedCategoryId}
          onCreateCategory={onCreateCategory}
          onOpenWebsite={onOpenWebsite}
        />

        {/* SECTION 3: SEARCH WEBSITES & MODULE REGISTRY */}
        <section id="search-websites-section" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-100 tracking-tight">
                04. Search Websites
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Search registered legal websites by name, website ID, category, or reference URL.
              </p>
            </div>

            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search VakeelSaab, website-001..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#0E1422] border border-slate-800 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-500/60"
              />
            </div>
          </div>

          {filteredWebsites.length === 0 ? (
            <div className="bg-[#0E1422] border border-slate-800 rounded-xl p-10 text-center space-y-3">
              <p className="text-sm text-slate-300 font-semibold">
                No websites match your current search or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategoryId('all');
                }}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 text-xs font-semibold cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {filteredWebsites.map((site) => (
                <div
                  key={site.id}
                  className="bg-[#0E1422] border border-slate-800/90 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
                >
                  {/* Preview Image Column */}
                  <div className="lg:col-span-4 bg-slate-950 border-b lg:border-b-0 lg:border-r border-slate-800 relative min-h-[200px] flex items-center justify-center overflow-hidden">
                    {site.screenshotDataUrl ? (
                      <img
                        src={site.screenshotDataUrl}
                        alt={site.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="p-6 text-center space-y-2">
                        <FolderGit2 className="w-8 h-8 text-amber-400/60 mx-auto" />
                        <div className="text-xs font-mono text-slate-400">
                          {site.modulePath}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Website Details Column */}
                  <div className="lg:col-span-8 p-6 sm:p-7 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                          <span className="text-amber-400 font-semibold">
                            {site.id}
                          </span>
                          <span>·</span>
                          <span className="font-sans text-slate-300 font-medium">
                            {site.categoryName}
                          </span>
                          <span>·</span>
                          <span>{site.modulePath}</span>
                          {site.pagesCount && (
                            <>
                              <span>·</span>
                              <span className="tabular-nums">
                                {site.pagesCount} Accessible Pages
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-baseline justify-between gap-4">
                        <h3 className="text-2xl font-bold text-white">
                          {site.name}
                        </h3>
                        <a
                          href={site.referenceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:underline font-mono"
                        >
                          <span>{site.referenceUrl}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed">
                        {site.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                      <div className="text-xs text-slate-500 font-mono">
                        {site.zipMeta
                          ? `Source ZIP: ${site.zipMeta.fileName}`
                          : 'Independent React + TypeScript Module'}
                      </div>

                      <button
                        onClick={() => onOpenWebsite(site.id)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer whitespace-nowrap shadow-sm"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        <span>Open Website</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* SECTION 4: ADD NEW WEBSITE */}
        <AddWebsiteSection
          categories={categories}
          websites={websites}
          onAddWebsite={onAddWebsite}
          onCreateCategory={onCreateCategory}
        />
      </main>

      {/* Quiet Footer */}
      <footer className="border-t border-slate-800/80 py-6 px-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            RAOZ LEGAL SAMPLE — Independent Legal &amp; Advocate Website Library
          </div>
          <div className="flex items-center gap-4">
            <span>Separate Website &amp; Category Registries</span>
            <span>·</span>
            <span>Ready for GitHub &amp; Vercel Deployment</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
