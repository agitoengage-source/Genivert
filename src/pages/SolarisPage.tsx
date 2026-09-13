import React, { useState } from 'react';
import {
  Sun,
  BatteryCharging,
  Droplets,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Zap,
  Building,
  TrendingUp,
  ShieldCheck,
  FileText,
  Calculator
} from 'lucide-react';
import { SOLARIS_SOLUTIONS } from '../data/companyData';
import { SolarisLogo } from '../components/SolarisLogo';
import { PageRoute, SolarAssessmentInput, AssessmentResult } from '../types';

interface SolarisPageProps {
  onNavigate: (route: PageRoute) => void;
  onRequestAssessment: () => void;
  onOpenAuditWithData: (input: SolarAssessmentInput, result: AssessmentResult) => void;
}

export const SolarisPage: React.FC<SolarisPageProps> = ({
  onNavigate,
  onRequestAssessment,
  onOpenAuditWithData
}) => {
  // Quick Calculator State for Solaris page
  const [gridBillUGX, setGridBillUGX] = useState<number>(25000000);
  const [genDieselUGX, setGenDieselUGX] = useState<number>(12000000);

  const totalMonthlyUGX = gridBillUGX + genDieselUGX;
  const annualSavingsUGX = Math.round((gridBillUGX * 0.75 + genDieselUGX * 0.85) * 12);
  const estimatedSolarKW = Math.max(20, Math.round((gridBillUGX / 920 / 30 * 0.7) / 5.2 / 5) * 5);
  const estimatedBatteryKWh = Math.max(40, Math.round((gridBillUGX / 920 / 30 / 24 * 3 * 1.3) / 10) * 10);
  const paybackYears = ( (estimatedSolarKW * 3200000 + estimatedBatteryKWh * 1800000) / annualSavingsUGX ).toFixed(1);

  return (
    <div className="space-y-16 pb-12">
      {/* HEADER BANNER WITH AD IMPERIUM SOLARIS BRANDING */}
      <section className="bg-gradient-to-br from-slate-950 via-amber-950/60 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <SolarisLogo size="lg" variant="light" />

            <div className="bg-slate-900/90 p-4 rounded-2xl border border-amber-500/30 text-right hidden sm:block">
              <span className="text-xs font-bold uppercase text-amber-400 block">
                A GENIVERT SYSTEMS INITIATIVE
              </span>
              <span className="text-xs text-slate-300">
                Institutional Solar Transformation Division
              </span>
            </div>
          </div>

          <div className="max-w-3xl space-y-4 pt-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight">
              Harnessing Uganda’s Sunshine. Powering Tomorrow’s Institutions.
            </h1>

            <p className="text-amber-100/90 text-base sm:text-lg leading-relaxed">
              <strong>AD IMPERIUM SOLARIS</strong> is the premium renewable energy division of Genivert Systems Ltd. We design, engineer, and deploy high-capacity solar microgrids, lithium energy storage (ESS), and solar thermal systems for universities, schools, hospitals, safari lodges, and industrial clients across East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* CORE RENEWABLE SOLUTIONS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest block">
            Renewable Engineering Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Institutional Solar & Energy Storage Technologies
          </h2>
        </div>

        <div className="space-y-12">
          {SOLARIS_SOLUTIONS.map((sol, index) => (
            <div
              key={sol.id}
              className={`bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-amber-500/20 dark:border-amber-500/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 lg:p-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-xs font-extrabold uppercase tracking-widest rounded-md">
                    AD IMPERIUM SOLARIS
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">• 25-Year Performance Warranty</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {sol.title}
                </h2>

                <p className="text-amber-700 dark:text-amber-300 font-bold text-sm italic">
                  "{sol.tagline}"
                </p>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {sol.description}
                </p>

                {/* Key Benefits */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Institutional Financial & Operational Benefits:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sol.benefits.map((b, bidx) => (
                      <div key={bidx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Highlights */}
                <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider block">
                    Engineering & Hardware Specifications
                  </span>
                  <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    {sol.technicalHighlights.map((th, thidx) => (
                      <li key={thidx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                        <span>{th}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Facilities */}
                <div>
                  <span className="text-xs text-slate-500 font-semibold block mb-1">Recommended For:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {sol.targetFacilities.map((fac, fidx) => (
                      <span key={fidx} className="px-2.5 py-1 bg-amber-500/10 text-amber-900 dark:text-amber-200 text-xs font-medium rounded-md border border-amber-500/20">
                        {fac}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onRequestAssessment}
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Request Solar Hybrid Proposal</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-amber-500/30 h-[380px] group">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                      Ad Imperium Solaris Field Installation
                    </span>
                    <span className="text-sm font-bold block">{sol.title}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK SOLAR SAVINGS & SIZING ESTIMATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-amber-400" />
                INSTITUTIONAL SAVINGS ESTIMATOR
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Quick Solar Hybrid ROI Calculator
              </h3>
            </div>
            <span className="text-xs text-slate-400 max-w-xs">
              Adjust sliders below to view estimated solar array capacity, lithium battery storage size, and annual financial savings.
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-6">
              {/* Slider 1: Grid Bill */}
              <div>
                <div className="flex justify-between items-center mb-1.5 text-xs font-bold">
                  <span className="text-slate-300 uppercase">Monthly Umeme Electricity Bill</span>
                  <span className="text-amber-400 font-mono text-sm">
                    UGX {gridBillUGX.toLocaleString()} (~${Math.round(gridBillUGX / 3720).toLocaleString()})
                  </span>
                </div>
                <input
                  type="range"
                  min="3000000"
                  max="120000000"
                  step="1000000"
                  value={gridBillUGX}
                  onChange={(e) => setGridBillUGX(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              {/* Slider 2: Diesel Spend */}
              <div>
                <div className="flex justify-between items-center mb-1.5 text-xs font-bold">
                  <span className="text-slate-300 uppercase">Monthly Generator Diesel Cost</span>
                  <span className="text-orange-400 font-mono text-sm">
                    UGX {genDieselUGX.toLocaleString()} (~${Math.round(genDieselUGX / 3720).toLocaleString()})
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="60000000"
                  step="1000000"
                  value={genDieselUGX}
                  onChange={(e) => setGenDieselUGX(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-900 p-6 rounded-2xl border border-slate-800 grid grid-cols-2 gap-4">
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block font-semibold">Recommended Solar PV</span>
                <span className="text-2xl font-black text-amber-400">{estimatedSolarKW} kWp</span>
                <span className="text-[10px] text-slate-500 block">TOPCon N-Type Solar Panels</span>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block font-semibold">Battery Storage</span>
                <span className="text-2xl font-black text-emerald-400">{estimatedBatteryKWh} kWh</span>
                <span className="text-[10px] text-slate-500 block">Industrial LiFePO4 Rack</span>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 col-span-2 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block font-semibold">Estimated Annual Savings</span>
                  <span className="text-xl font-black text-emerald-400">UGX {annualSavingsUGX.toLocaleString()}</span>
                  <span className="text-[10px] text-slate-500 block">
                    (~${Math.round(annualSavingsUGX / 3720).toLocaleString()} / year)
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block font-semibold">Projected Payback</span>
                  <span className="text-2xl font-black text-amber-300">{paybackYears} Years</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={onRequestAssessment}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black rounded-xl shadow-xl text-sm uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <Zap className="w-5 h-5" />
              <span>Request Full Site Audit & Turnkey Proposal</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
