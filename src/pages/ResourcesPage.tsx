import React, { useState } from 'react';
import {
  FileText,
  Download,
  BookOpen,
  Search,
  CheckCircle2,
  SlidersHorizontal,
  Eye,
  FileCheck2,
  Zap,
  Printer
} from 'lucide-react';
import { RESOURCE_DOCUMENTS } from '../data/companyData';
import { ResourceDocument, PageRoute } from '../types';

interface ResourcesPageProps {
  onNavigate: (route: PageRoute) => void;
  onRequestAssessment: () => void;
  onOpenDoc: (doc: ResourceDocument) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onNavigate,
  onRequestAssessment,
  onOpenDoc
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'Profile', label: 'Company Profiles' },
    { id: 'Brochure', label: 'Solar Brochures' },
    { id: 'Guide', label: 'Assessment Guides' },
    { id: 'Technical', label: 'Technical Articles' },
  ];

  const filteredDocs = RESOURCE_DOCUMENTS.filter((doc) => {
    const matchesCat = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-12">
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-900/60 px-3 py-1 rounded-full text-xs font-bold text-blue-300 uppercase tracking-widest border border-blue-500/30">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            Engineering Publications & Whitepapers
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Resources & Downloads
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Download official Genivert Systems company profile, Ad Imperium Solaris brochures, technical guides, and institutional energy assessment whitepapers.
          </p>
        </div>
      </section>

      {/* SEARCH AND FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mr-2">
              <SlidersHorizontal className="w-4 h-4" />
              Category:
            </span>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-blue-600 text-white shadow'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      {/* FEATURED / ALL PUBLICATIONS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-blue-500 dark:hover:border-blue-400 transition-all space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-[10px] font-extrabold uppercase rounded">
                    {doc.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {doc.fileSize} • {doc.pages} Pages
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {doc.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => onOpenDoc(doc)}
                  className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <Eye className="w-4 h-4" />
                  <span>View / Print PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL ARTICLES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              Engineering Knowledge Hub
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Institutional Power Infrastructure Whitepapers
            </h2>
            <p className="text-xs text-slate-300 mt-2">
              Written by Genivert Systems senior electrical engineers for procurement managers and estate directors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 pt-2">
            <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2">
              <h4 className="font-bold text-white text-sm">1. Sizing Lithium LiFePO4 vs Lead-Acid Batteries for Hospital ICUs</h4>
              <p>Comparing cycle lifetime, C-rate discharge response during instant power failure, and total cost of ownership over 10 years in tropical conditions.</p>
            </div>

            <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2">
              <h4 className="font-bold text-white text-sm">2. Eliminating Maximum Demand (MD) Fines in Agro-Processing Mills</h4>
              <p>How automatic power factor correction (APFC) capacitor banks and active harmonic filters restore power factor to &gt;0.98 constant.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
