import React from 'react';
import { ArrowLeft, ExternalLink, FolderGit2, Scale } from 'lucide-react';
import { WebsiteRecord } from '../../data/types';

interface DynamicWebsiteViewerProps {
  website: WebsiteRecord;
  onBackToDashboard: () => void;
}

export default function Website002Module({
  website,
  onBackToDashboard,
}: DynamicWebsiteViewerProps) {
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col">
      <header className="border-b border-slate-800 px-6 py-4 flex items-center justify-between bg-[#0E1422]">
        <button
          onClick={onBackToDashboard}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to RAOZ LEGAL SAMPLE</span>
        </button>
        <div className="text-xs text-slate-400 font-mono">
          {website.id} · {website.modulePath}
        </div>
      </header>

      <main className="max-w-4xl mx-auto w-full px-6 py-12 space-y-8">
        <div className="border border-slate-800 bg-[#0E1422] rounded-xl p-8 space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs text-amber-400 font-medium">
                {website.categoryName} · {website.id}
              </div>
              <h1 className="text-3xl font-bold text-white">{website.name}</h1>
              <a
                href={website.referenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-amber-400 hover:underline"
              >
                <span>{website.referenceUrl}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <Scale className="w-10 h-10 text-amber-400/60" />
          </div>

          {website.screenshotDataUrl && (
            <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
              <img
                src={website.screenshotDataUrl}
                alt={website.name}
                className="w-full max-h-80 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-slate-300">Website Description</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              {website.description}
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-slate-300">Recreation Specification &amp; Prompt</h2>
            <pre className="p-4 rounded-lg bg-[#090D16] border border-slate-800 text-xs text-slate-300 whitespace-pre-wrap font-mono">
              {website.recreationPrompt}
            </pre>
          </div>

          <div className="p-4 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-amber-400" />
              <span>Independent Module Path: {website.modulePath}</span>
            </div>
            {website.zipMeta && (
              <span className="font-mono">
                Archive: {website.zipMeta.fileName} ({Math.round(website.zipMeta.fileSize / 1024)} KB)
              </span>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
