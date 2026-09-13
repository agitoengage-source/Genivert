import React from 'react';
import {
  GraduationCap,
  Hotel,
  HeartPulse,
  Building2,
  Church,
  Factory,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Building
} from 'lucide-react';
import { INDUSTRIES_SERVED } from '../data/companyData';
import { PageRoute } from '../types';

interface IndustriesPageProps {
  onNavigate: (route: PageRoute) => void;
  onRequestAssessment: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onNavigate,
  onRequestAssessment
}) => {
  return (
    <div className="space-y-16 pb-12">
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-900/60 px-3 py-1 rounded-full text-xs font-bold text-blue-300 uppercase tracking-widest border border-blue-500/30">
            <Building className="w-3.5 h-3.5 text-amber-400" />
            Tailored Sector Solutions
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Industries & Institutions Served
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Custom power infrastructure architectures engineered for the specific operational demands of East African institutions.
          </p>
        </div>
      </section>

      {/* SECTOR CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {INDUSTRIES_SERVED.map((ind, idx) => (
          <div
            key={ind.id}
            id={ind.id}
            className={`bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 lg:p-8 ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-xs font-extrabold uppercase tracking-widest rounded-md">
                  Institutional Sector
                </span>
                <span className="text-xs text-slate-500 font-semibold">• Uganda & East Africa</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {ind.title}
              </h2>

              <p className="text-blue-700 dark:text-blue-400 font-semibold text-sm">
                {ind.subtitle}
              </p>

              {/* Target Clients */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Facilities Served:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {ind.targetClients.map((client, cidx) => (
                    <span key={cidx} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium rounded-md">
                      {client}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Challenges */}
              <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-xl border border-red-200 dark:border-red-900/30 space-y-1.5">
                <span className="text-xs font-bold uppercase text-red-800 dark:text-red-400 tracking-wider block">
                  Typical Sector Power Challenges:
                </span>
                <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  {ind.keyChallenges.map((ch, chidx) => (
                    <li key={chidx} className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Solutions */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Genivert Systems Integrated Solution Bundle:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ind.recommendedSolutions.map((rec, ridx) => (
                    <div key={ridx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Study Highlight */}
              {ind.caseStudyHighlight && (
                <div className="bg-blue-50 dark:bg-blue-950/40 p-4 rounded-xl border border-blue-200 dark:border-blue-800/40 space-y-1">
                  <span className="text-[11px] font-bold uppercase text-blue-700 dark:text-blue-300 block">
                    Proven Deployment: {ind.caseStudyHighlight.title}
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {ind.caseStudyHighlight.impact}
                  </p>
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={onRequestAssessment}
                  className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow"
                >
                  <Zap className="w-4 h-4 text-amber-300" />
                  <span>Request Sector Specific Assessment</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 h-[380px] group">
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                    Sector Engineering Solution
                  </span>
                  <span className="text-sm font-bold block">{ind.title}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
