import React from 'react';
import {
  Building2,
  Target,
  Eye,
  ShieldCheck,
  Award,
  Zap,
  Users,
  CheckCircle2,
  FileText,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { COMPANY_DETAILS, CORE_VALUES } from '../data/companyData';
import { PageRoute } from '../types';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onRequestAssessment: () => void;
  onOpenBrochure: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onRequestAssessment,
  onOpenBrochure
}) => {
  return (
    <div className="space-y-16 pb-12">
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-900/60 px-3 py-1 rounded-full text-xs font-bold text-blue-300 uppercase tracking-widest border border-blue-500/30">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            Company Profile & Credentials
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            About GENIVERT SYSTEMS LTD
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            An East Africa engineering solutions company delivering integrated electrical, energy, and smart infrastructure systems.
          </p>
        </div>
      </section>

      {/* EXECUTIVE SUMMARY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Institutional Engineering Partner Across Uganda & East Africa
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong>Genivert Systems Ltd</strong> is an integrated engineering solutions provider specializing in electrical infrastructure, backup power systems, renewable energy solutions, smart power management, critical power protection, and institutional energy transformation.
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              We position ourselves as long-term engineering advisors and lifecycle partners for universities, hospitals, hotels, banking networks, religious complexes, and industrial plants. From detailed feasibility studies and ERA-approved electrical designs to installation, commissioning, and 24/7 preventive maintenance.
            </p>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="text-xs font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
                Corporate Mission Statement
              </span>
              <p className="text-sm font-bold text-slate-900 dark:text-white italic">
                "{COMPANY_DETAILS.statement}"
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onRequestAssessment}
                className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl shadow transition-all text-sm flex items-center gap-2 cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Request Energy Assessment</span>
              </button>

              <button
                onClick={onOpenBrochure}
                className="px-6 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl text-sm flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download Corporate Profile</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-amber-400 border-b border-slate-800 pb-2">
                Operational Fast Facts
              </h3>

              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-200">Regional Footprint</strong>
                    <span className="text-slate-400">Kampala HQ with service coverage across Uganda & East Africa</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-200">Licensing & Regulatory</strong>
                    <span className="text-slate-400">Class A Electrical Contractor (Electricity Regulatory Authority)</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-200">Dedicated Division</strong>
                    <span className="text-slate-400">AD IMPERIUM SOLARIS (Renewable Energy Transformation)</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <Users className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-200">Engineering Capacity</strong>
                    <span className="text-slate-400">Certified electrical engineers, solar designers, and 24/7 technicians</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION & CORE VALUES */}
      <section className="bg-slate-100 dark:bg-slate-900/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                To engineer reliable, efficient, and sustainable power systems that enable institutions and businesses across East Africa to operate without disruption.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                To become East Africa’s most trusted engineering partner in intelligent energy, power infrastructure, and renewable transformation.
              </p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest block mb-1">
                Engineering Guiding Principles
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Our Core Corporate Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CORE_VALUES.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow border border-slate-200 dark:border-slate-800 space-y-2 hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-center gap-2.5 text-blue-700 dark:text-blue-400 font-extrabold text-base">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>{val.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-7">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY GENIVERT SYSTEMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              Institutional Trust
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Institutional Decision-Makers Choose Genivert Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            {[
              { title: "Engineering Expertise", desc: "Registered electrical engineers with decades of combined experience in East African grid conditions." },
              { title: "Institutional Experience", desc: "Proven deployments across universities, referral hospitals, bank headquarters, and luxury lodges." },
              { title: "Complete Lifecycle Support", desc: "Single-point responsibility from initial energy audit and system design to commissioning and preventive maintenance." },
              { title: "Safety-Driven Operations", desc: "Embedded HSQE management system with ISO 45001 safety compliance and zero-compromise site standards." },
              { title: "Renewable Specialists", desc: "AD IMPERIUM SOLARIS division providing Tier-1 TOPCon solar panels, hybrid inverters, and LiFePO4 batteries." },
              { title: "24/7 Maintenance Support", desc: "Dedicated emergency response engineering team in Kampala for rapid fault rectification and SLA maintenance." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
            <span className="text-xs text-slate-400">
              Need to review our complete engineering credentials for a procurement tender?
            </span>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Contact Procurement Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
