import React, { useState } from 'react';
import {
  FolderCheck,
  MapPin,
  Calendar,
  CheckCircle2,
  Zap,
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { PROJECTS_PORTFOLIO } from '../data/companyData';
import { PageRoute } from '../types';

interface ProjectsPageProps {
  onNavigate: (route: PageRoute) => void;
  onRequestAssessment: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onRequestAssessment
}) => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const tags = [
    { id: 'all', label: 'All Projects' },
    { id: 'Solar Hybrid', label: 'Solar Hybrid' },
    { id: 'Medical UPS', label: 'Medical UPS & Hospitals' },
    { id: 'Solar Thermal', label: 'Solar Thermal & Water' },
    { id: 'Voltage Regulation', label: 'Voltage Regulation' },
    { id: 'Power Factor', label: 'Power Factor Correction' },
  ];

  const filteredProjects = selectedTag === 'all'
    ? PROJECTS_PORTFOLIO
    : PROJECTS_PORTFOLIO.filter(p => p.tags.includes(selectedTag));

  return (
    <div className="space-y-16 pb-12">
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-900/60 px-3 py-1 rounded-full text-xs font-bold text-blue-300 uppercase tracking-widest border border-blue-500/30">
            <FolderCheck className="w-3.5 h-3.5 text-amber-400" />
            Engineering Track Record
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Completed Projects & Case Studies
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Real institutional power installations engineered, commissioned, and maintained by Genivert Systems Ltd across Uganda.
          </p>
        </div>
      </section>

      {/* FILTER TAGS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mr-2">
            <SlidersHorizontal className="w-4 h-4" />
            Filter Portfolio:
          </span>
          {tags.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTag(t.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedTag === t.id
                  ? 'bg-blue-600 text-white shadow'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>

      {/* CASE STUDIES CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8"
          >
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 bg-blue-600 text-white text-xs font-extrabold uppercase rounded shadow">
                  {proj.clientCategory}
                </span>
                <span className="absolute bottom-3 right-3 px-3 py-1 bg-amber-500 text-slate-950 text-xs font-extrabold rounded shadow">
                  {proj.capacity}
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span className="flex items-center gap-1 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-blue-500" />
                    Location: {proj.location}
                  </span>
                  <span className="flex items-center gap-1 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    Year: {proj.year}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 pt-1">
                  {proj.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-[10px] font-bold rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                {proj.title}
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                {proj.summary}
              </p>

              <div className="space-y-3">
                <div className="bg-amber-500/10 p-3.5 rounded-xl border border-amber-500/30 text-xs space-y-1">
                  <strong className="text-amber-800 dark:text-amber-300 uppercase font-bold block">
                    Institutional Challenge Faced:
                  </strong>
                  <p className="text-slate-700 dark:text-slate-300">{proj.challenge}</p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/40 p-3.5 rounded-xl border border-blue-200 dark:border-blue-800/40 text-xs space-y-1">
                  <strong className="text-blue-800 dark:text-blue-300 uppercase font-bold block">
                    Genivert Systems Engineering Solution:
                  </strong>
                  <p className="text-slate-700 dark:text-slate-300">{proj.solutionProvided}</p>
                </div>

                <div className="space-y-1.5 pt-1">
                  <strong className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block">
                    Quantified Results & Impact:
                  </strong>
                  <ul className="space-y-1 text-xs">
                    {proj.results.map((res, ridx) => (
                      <li key={ridx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onRequestAssessment}
                  className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer shadow"
                >
                  <Zap className="w-4 h-4 text-amber-300" />
                  <span>Request Similar Infrastructure Solution</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
