import React, { useState } from 'react';
import {
  Zap,
  ServerCog,
  ShieldCheck,
  Activity,
  Network,
  Cpu,
  CheckCircle2,
  Building,
  ArrowRight,
  FileText,
  SlidersHorizontal
} from 'lucide-react';
import { ENGINEERING_SERVICES } from '../data/companyData';
import { PageRoute } from '../types';

interface SolutionsPageProps {
  onNavigate: (route: PageRoute) => void;
  onRequestAssessment: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onNavigate,
  onRequestAssessment
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'electrical', label: 'Electrical Engineering' },
    { id: 'generators', label: 'Generator Systems' },
    { id: 'ups', label: 'UPS & Critical Power' },
    { id: 'smart-energy', label: 'Smart Energy & PFC' },
    { id: 'ict', label: 'Data & Network' },
    { id: 'voltage', label: 'Voltage Stabilisation' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? ENGINEERING_SERVICES
    : ENGINEERING_SERVICES.filter(s => s.category === selectedCategory);

  return (
    <div className="space-y-16 pb-12">
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-900/60 px-3 py-1 rounded-full text-xs font-bold text-blue-300 uppercase tracking-widest border border-blue-500/30">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Core Engineering Division
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Engineering Solutions & Infrastructure
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Turnkey power infrastructure design, installation, testing, commissioning, and 24/7 maintenance for East African institutional clients.
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mr-2">
            <SlidersHorizontal className="w-4 h-4" />
            Filter Solutions:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* DETAILED SERVICES LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredServices.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 lg:p-8 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-xs font-extrabold uppercase tracking-widest rounded-md">
                  {service.category}
                </span>
                <span className="text-xs text-slate-500 font-semibold">• Class A Licensed</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {service.title}
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {service.fullDesc}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Key Capabilities & Scope:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              {service.specs && (
                <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider block">
                    Technical Specifications & Standards
                  </span>
                  <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    {service.specs.map((s, sidx) => (
                      <li key={sidx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Applications */}
              <div>
                <span className="text-xs text-slate-500 font-semibold block mb-1">Target Facilities:</span>
                <div className="flex flex-wrap gap-1.5">
                  {service.applications.map((app, aidx) => (
                    <span key={aidx} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium rounded-md">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={onRequestAssessment}
                  className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow"
                >
                  <Zap className="w-4 h-4 text-amber-300" />
                  <span>Request Engineering Quote</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 h-[380px] group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                    Genivert Systems Field Service
                  </span>
                  <span className="text-sm font-bold block">{service.title}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 border border-slate-800 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white max-w-2xl mx-auto">
            Need a Customized Electrical Design or Technical Single-Line Diagram?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Our Kampala engineering desk provides technical specifications, load calculations, and ERA-certified single line diagrams for new site developments or facility upgrades.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={onRequestAssessment}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black rounded-xl shadow-xl text-sm uppercase tracking-wider transition-all cursor-pointer"
            >
              Request Engineering Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
