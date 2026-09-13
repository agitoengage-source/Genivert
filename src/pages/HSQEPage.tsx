import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileCheck2,
  HardHat,
  Leaf,
  Award,
  Zap
} from 'lucide-react';
import { HSQE_POLICIES, COMPANY_DETAILS } from '../data/companyData';
import { PageRoute } from '../types';

interface HSQEPageProps {
  onNavigate: (route: PageRoute) => void;
  onRequestAssessment: () => void;
}

export const HSQEPage: React.FC<HSQEPageProps> = ({
  onNavigate,
  onRequestAssessment
}) => {
  return (
    <div className="space-y-16 pb-12">
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-emerald-500/30">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-900/60 px-3 py-1 rounded-full text-xs font-bold text-emerald-300 uppercase tracking-widest border border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Corporate Governance & Safety
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            {HSQE_POLICIES.title}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Positioning health, high-voltage safety, engineering quality, and environmental stewardship as core pillars of every Genivert Systems operation.
          </p>
        </div>
      </section>

      {/* POLICY STATEMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-2xl">
              <HardHat className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">
                Corporate HSQE Commitment
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Zero Harm & High-Voltage Operational Safety Policy
              </h2>
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            {HSQE_POLICIES.statement}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {HSQE_POLICIES.commitments.map((comm, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{comm}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-1">
            Integrated Management System
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            The 4 Pillars of Genivert HSQE Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HSQE_POLICIES.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center font-black text-lg">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed pl-13">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* REGULATORY ACCREDITATIONS & PERMIT SYSTEMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              Regulatory Compliance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Licensing & Quality System Accreditations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
              <Award className="w-8 h-8 text-amber-400 mb-2" />
              <h4 className="font-bold text-white text-base">Class A ERA License</h4>
              <p className="text-xs text-slate-300">
                Certified by the Electricity Regulatory Authority of Uganda to execute high-voltage electrical installations without capacity ceiling.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
              <FileCheck2 className="w-8 h-8 text-blue-400 mb-2" />
              <h4 className="font-bold text-white text-base">Permit-to-Work (PTW)</h4>
              <p className="text-xs text-slate-300">
                Strict energized connection protocols including Lock-Out/Tag-Out (LOTO) isolation, insulated arc-flash protection, and certified site supervisors.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
              <Leaf className="w-8 h-8 text-emerald-400 mb-2" />
              <h4 className="font-bold text-white text-base">Carbon Offset Auditing</h4>
              <p className="text-xs text-slate-300">
                Tracking every kWh produced by AD IMPERIUM SOLARIS microgrids to supply validated carbon reduction metrics for ESG reporting.
              </p>
            </div>
          </div>

          <div className="pt-4 flex justify-between items-center border-t border-slate-800">
            <span className="text-xs text-slate-400">
              Need our site safety manual for a tender pre-qualification?
            </span>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              Request HSQE Manual Copy
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
