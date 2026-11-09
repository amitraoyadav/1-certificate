import React, { useState } from 'react';
import { ExternalLink, FolderPlus, Play, Plus } from 'lucide-react';
import { CategoryRecord, WebsiteRecord } from '../data/types';

interface CategoryManagerProps {
  categories: CategoryRecord[];
  websites: WebsiteRecord[];
  selectedCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
  onCreateCategory: (name: string, description: string) => CategoryRecord | null;
  onOpenWebsite: (websiteId: string) => void;
}

export const CategoryManager: React.FC<CategoryManagerProps> = ({
  categories,
  websites,
  selectedCategoryId,
  onSelectCategory,
  onCreateCategory,
  onOpenWebsite,
}) => {
  const [showNewForm, setShowNewForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!newName.trim()) {
      setErrorMsg('Please enter a category name.');
      return;
    }
    const exists = categories.some(
      (c) => c.name.toLowerCase() === newName.trim().toLowerCase()
    );
    if (exists) {
      setErrorMsg('A category with this name already exists.');
      return;
    }
    const created = onCreateCategory(newName, newDesc);
    if (created) {
      setNewName('');
      setNewDesc('');
      setShowNewForm(false);
    }
  };

  return (
    <section id="categories-section" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-100 tracking-tight">
            02. Categories &amp; Category-Wise Website Directory
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Every website belongs to a dedicated legal category. Create additional categories at any time.
          </p>
        </div>

        <button
          onClick={() => setShowNewForm((prev) => !prev)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 self-start sm:self-auto"
        >
          <FolderPlus className="w-4 h-4 text-amber-400" />
          <span>{showNewForm ? 'Cancel New Category' : 'New Category'}</span>
        </button>
      </div>

      {showNewForm && (
        <form
          onSubmit={handleAdd}
          className="bg-[#0E1422] border border-slate-800 rounded-xl p-5 space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-200">
              Create New Legal Category
            </h3>
            {errorMsg && <span className="text-xs text-rose-400">{errorMsg}</span>}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">
                Category Name *
              </label>
              <input
                type="text"
                required
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="e.g. Intellectual Property & Patent Chambers"
                className="w-full rounded-lg bg-[#090D16] border border-slate-800 px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-500/60"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">
                Category Scope / Description
              </label>
              <input
                type="text"
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                placeholder="Brief description of legal websites in this category"
                className="w-full rounded-lg bg-[#090D16] border border-slate-800 px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-500/60"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Save Category</span>
            </button>
          </div>
        </form>
      )}

      {/* Category Filter Bar */}
      <div className="flex items-center gap-1.5 p-1.5 bg-[#0E1422] border border-slate-800/90 rounded-xl overflow-x-auto">
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
            selectedCategoryId === 'all'
              ? 'bg-amber-500 text-slate-950'
              : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
          }`}
        >
          All Categories ({categories.length})
        </button>
        {categories.map((cat) => {
          const count = websites.filter((w) => w.categoryId === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer tabular-nums ${
                selectedCategoryId === cat.id
                  ? 'bg-amber-500 text-slate-950'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
              }`}
            >
              {cat.name} ({count})
            </button>
          );
        })}
      </div>

      {/* Category-Wise Website Listing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories
          .filter(
            (cat) => selectedCategoryId === 'all' || cat.id === selectedCategoryId
          )
          .map((cat, idx) => {
            const catSites = websites.filter((w) => w.categoryId === cat.id);
            return (
              <div
                key={cat.id}
                className="bg-[#0E1422] border border-slate-800/90 rounded-xl p-6 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-xs font-mono text-slate-500 tabular-nums">
                      {String(idx + 1).padStart(2, '0')} · {catSites.length}{' '}
                      {catSites.length === 1 ? 'Website' : 'Websites'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">{cat.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Actual Website Names Under Respective Category */}
                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="text-xs font-medium text-slate-400">
                    Registered Websites in {cat.name}:
                  </div>

                  {catSites.length === 0 ? (
                    <div className="py-4 px-3 rounded-lg bg-[#090D16]/60 border border-slate-800/60 text-xs text-slate-500">
                      No websites registered in this category yet. Use &ldquo;Add New Website&rdquo; to register one.
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      {catSites.map((site) => (
                        <div
                          key={site.id}
                          className="p-3.5 rounded-lg bg-[#090D16] border border-slate-800 flex items-center justify-between gap-3"
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm text-white truncate">
                                {site.name}
                              </span>
                              <span className="text-[11px] font-mono text-amber-400 shrink-0">
                                {site.id}
                              </span>
                            </div>
                            <a
                              href={site.referenceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-amber-400 truncate mt-0.5"
                            >
                              <span className="truncate">{site.referenceUrl}</span>
                              <ExternalLink className="w-3 h-3 shrink-0" />
                            </a>
                          </div>

                          <button
                            onClick={() => onOpenWebsite(site.id)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer whitespace-nowrap shrink-0"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Open Website</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};
