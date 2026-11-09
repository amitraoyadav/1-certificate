import React, { useState } from 'react';
import {
  FileArchive,
  FolderPlus,
  Image as ImageIcon,
  Plus,
  CheckCircle2,
} from 'lucide-react';
import { CategoryRecord, WebsiteRecord } from '../data/types';
import { generateNextWebsiteId } from '../data/websiteRegistry';

interface AddWebsiteFormProps {
  categories: CategoryRecord[];
  websites: WebsiteRecord[];
  onAddWebsite: (newSite: WebsiteRecord) => void;
  onCreateCategory: (name: string, description: string) => CategoryRecord | null;
}

export const AddWebsiteSection: React.FC<AddWebsiteFormProps> = ({
  categories,
  websites,
  onAddWebsite,
  onCreateCategory,
}) => {
  const nextId = generateNextWebsiteId(websites);

  const [name, setName] = useState('');
  const [referenceUrl, setReferenceUrl] = useState('');
  const [categoryId, setCategoryId] = useState(
    categories[0]?.id || 'cat-legal-advocate'
  );
  const [description, setDescription] = useState('');
  const [recreationPrompt, setRecreationPrompt] = useState('');
  const [zipFile, setZipFile] = useState<{ name: string; size: number } | null>(
    null
  );
  const [screenshotDataUrl, setScreenshotDataUrl] = useState<string>('');

  // Inline New Category creation inside Add Website Form
  const [creatingNewCat, setCreatingNewCat] = useState(false);
  const [newCatName, setNewCatName] = useState('');
  const [newCatDesc, setNewCatDesc] = useState('');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setZipFile({ name: file.name, size: file.size });
    }
  };

  const handleScreenshotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setScreenshotDataUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleCreateInlineCategory = () => {
    setErrorMessage('');
    if (!newCatName.trim()) {
      setErrorMessage('Enter a name for the new category.');
      return;
    }
    const created = onCreateCategory(newCatName, newCatDesc);
    if (created) {
      setCategoryId(created.id);
      setNewCatName('');
      setNewCatDesc('');
      setCreatingNewCat(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setStatusMessage('');

    if (!name.trim() || !referenceUrl.trim()) {
      setErrorMessage('Website Name and Reference URL are required.');
      return;
    }

    const selectedCategory =
      categories.find((c) => c.id === categoryId) || categories[0];

    const newSiteId = generateNextWebsiteId(websites);
    const newRecord: WebsiteRecord = {
      id: newSiteId,
      name: name.trim(),
      referenceUrl: referenceUrl.trim(),
      categoryId: selectedCategory.id,
      categoryName: selectedCategory.name,
      description:
        description.trim() ||
        `Independent legal website recreation module for ${name.trim()}.`,
      recreationPrompt:
        recreationPrompt.trim() ||
        `Recreate ${name.trim()} (${referenceUrl.trim()}) with full internal navigation, responsive layout, and original branding.`,
      modulePath: `src/websites/${newSiteId}/`,
      hasBuiltInModule: false,
      zipMeta: zipFile
        ? {
            fileName: zipFile.name,
            fileSize: zipFile.size,
            uploadedAt: new Date().toISOString(),
          }
        : undefined,
      screenshotDataUrl: screenshotDataUrl || undefined,
      pagesCount: 1,
      createdAt: new Date().toISOString(),
    };

    onAddWebsite(newRecord);
    setName('');
    setReferenceUrl('');
    setDescription('');
    setRecreationPrompt('');
    setZipFile(null);
    setScreenshotDataUrl('');
    setStatusMessage(
      `Registered ${newRecord.name} as ${newRecord.id} under ${newRecord.categoryName} (${newRecord.modulePath}).`
    );
  };

  return (
    <section
      id="add-website-section"
      className="bg-[#0E1422] border border-slate-800/90 rounded-xl p-6 sm:p-8 space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-100 tracking-tight">
            03. Add New Website
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Register a new independent legal website module. Next available ID:{' '}
            <span className="font-mono text-amber-400 font-semibold">{nextId}</span>{' '}
            (<span className="font-mono text-slate-300">src/websites/{nextId}/</span>)
          </p>
        </div>
      </div>

      {statusMessage && (
        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{statusMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Website Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. LexChamber India"
              className="w-full rounded-lg bg-[#090D16] border border-slate-800 px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500/60"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Reference URL *
            </label>
            <input
              type="url"
              required
              value={referenceUrl}
              onChange={(e) => setReferenceUrl(e.target.value)}
              placeholder="https://www.example-law.com/"
              className="w-full rounded-lg bg-[#090D16] border border-slate-800 px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500/60"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-medium text-slate-300">
                Category *
              </label>
              <button
                type="button"
                onClick={() => setCreatingNewCat((prev) => !prev)}
                className="text-xs text-amber-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <FolderPlus className="w-3 h-3" />
                <span>{creatingNewCat ? 'Select Existing' : '+ New Category'}</span>
              </button>
            </div>

            {!creatingNewCat ? (
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full rounded-lg bg-[#090D16] border border-slate-800 px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500/60"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            ) : (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  placeholder="New category name..."
                  className="flex-1 rounded-lg bg-[#090D16] border border-amber-500/50 px-3 py-2 text-xs text-slate-100"
                />
                <button
                  type="button"
                  onClick={handleCreateInlineCategory}
                  className="px-3 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs cursor-pointer whitespace-nowrap"
                >
                  Add
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Description *
            </label>
            <textarea
              rows={3}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the website's practice areas, target audience, and key internal pages..."
              className="w-full rounded-lg bg-[#090D16] border border-slate-800 px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500/60"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Recreation Prompt *
            </label>
            <textarea
              rows={3}
              required
              value={recreationPrompt}
              onChange={(e) => setRecreationPrompt(e.target.value)}
              placeholder="Specify layout, typography, colors, pages, and assets to preserve during recreation..."
              className="w-full rounded-lg bg-[#090D16] border border-slate-800 px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500/60"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* ZIP Upload */}
          <label className="flex items-center justify-between gap-4 p-4 rounded-xl bg-[#090D16] border border-dashed border-slate-700 hover:border-amber-500/50 cursor-pointer transition-colors">
            <div className="flex items-center gap-3 min-w-0">
              <FileArchive className="w-5 h-5 text-amber-400 shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-semibold text-slate-200 truncate">
                  {zipFile ? zipFile.name : 'Upload Source ZIP Archive'}
                </div>
                <div className="text-[11px] text-slate-500">
                  {zipFile
                    ? `${(zipFile.size / 1024).toFixed(1)} KB attached`
                    : 'HTML, CSS, JS, images, fonts & icons (.zip)'}
                </div>
              </div>
            </div>
            <input
              type="file"
              accept=".zip,application/zip"
              onChange={handleZipChange}
              className="hidden"
            />
            <span className="px-3 py-1.5 rounded bg-slate-800 text-slate-300 text-xs font-medium shrink-0">
              Browse ZIP
            </span>
          </label>

          {/* Screenshot Upload */}
          <label className="flex items-center justify-between gap-4 p-4 rounded-xl bg-[#090D16] border border-dashed border-slate-700 hover:border-amber-500/50 cursor-pointer transition-colors">
            <div className="flex items-center gap-3 min-w-0">
              <ImageIcon className="w-5 h-5 text-amber-400 shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-semibold text-slate-200 truncate">
                  {screenshotDataUrl
                    ? 'Screenshot Preview Attached'
                    : 'Upload Reference Screenshot'}
                </div>
                <div className="text-[11px] text-slate-500">
                  PNG, JPG, WebP or AVIF reference capture
                </div>
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleScreenshotChange}
              className="hidden"
            />
            <span className="px-3 py-1.5 rounded bg-slate-800 text-slate-300 text-xs font-medium shrink-0">
              Browse Image
            </span>
          </label>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-slate-500 font-mono">
            Target Module: src/websites/{nextId}/ · Existing websites are never overwritten
          </span>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            <span>Register Website ({nextId})</span>
          </button>
        </div>
      </form>
    </section>
  );
};
