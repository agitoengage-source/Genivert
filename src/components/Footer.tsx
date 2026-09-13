import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Sun,
  Zap,
  ArrowRight,
  Award,
  Globe,
  FileText,
  Linkedin,
  Youtube
} from 'lucide-react';
import { GenivertLogo } from './GenivertLogo';
import { SolarisLogo } from './SolarisLogo';
import { PageRoute } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onRequestAssessment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestAssessment }) => {
  const seoKeywords = [
    'Solar company Uganda',
    'Hybrid solar systems Uganda',
    'Solar energy solutions Kampala',
    'Electrical engineering Uganda',
    'Generator maintenance Uganda',
    'UPS solutions Uganda',
    'Energy management systems Uganda',
    'Solar for schools Uganda',
    'Solar for hotels Uganda',
    'Commercial solar East Africa'
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Pre-Footer Callout Bar */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 border-b border-slate-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center justify-center lg:justify-start gap-1.5">
              <Sun className="w-4 h-4 text-amber-400" />
              INSTITUTIONAL POWER TRANSFORMATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Upgrade Your Institution's Power Infrastructure?
            </h3>
            <p className="text-sm text-slate-400 max-w-2xl">
              Talk directly with Genivert Systems electrical and solar engineers in Kampala for an engineering audit, load profiling, or solar feasibility analysis.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
            <button
              onClick={onRequestAssessment}
              className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              <Zap className="w-4 h-4" />
              <span>Request Solar & Power Audit</span>
            </button>

            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2 text-sm"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Email Engineering Team</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Col 1: Brand & Statement */}
        <div className="lg:col-span-4 space-y-4">
          <GenivertLogo variant="light" className="h-10 w-10" />

          <p className="text-xs text-slate-400 leading-relaxed">
            {COMPANY_DETAILS.brandMessage}
          </p>

          <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
              <Sun className="w-4 h-4 text-amber-400" />
              <span>AD IMPERIUM SOLARIS</span>
            </div>
            <p className="text-[11px] text-slate-400">
              The Renewable Energy Transformation Division of Genivert Systems Ltd. Harnessing Uganda’s sunshine to power tomorrow’s institutions.
            </p>
          </div>

          <div className="flex items-center gap-3 pt-1 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>ERA Certified • ISO 9001 / 45001 Aligned</span>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-blue-400 transition-colors">Home</button>
            </li>
            <li>
              <button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors">About Us</button>
            </li>
            <li>
              <button onClick={() => onNavigate('solutions')} className="hover:text-blue-400 transition-colors">Engineering Solutions</button>
            </li>
            <li>
              <button onClick={() => onNavigate('solaris')} className="text-amber-400 hover:underline font-bold flex items-center gap-1">
                <span>AD IMPERIUM SOLARIS</span>
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('industries')} className="hover:text-blue-400 transition-colors">Industries Served</button>
            </li>
            <li>
              <button onClick={() => onNavigate('projects')} className="hover:text-blue-400 transition-colors">Projects Portfolio</button>
            </li>
            <li>
              <button onClick={() => onNavigate('hsqe')} className="hover:text-blue-400 transition-colors">HSQE System</button>
            </li>
            <li>
              <button onClick={() => onNavigate('resources')} className="hover:text-blue-400 transition-colors">Resources & Downloads</button>
            </li>
            <li>
              <button onClick={() => onNavigate('contact')} className="hover:text-blue-400 transition-colors">Contact Engineering Desk</button>
            </li>
          </ul>
        </div>

        {/* Col 3: Engineering Solutions */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
            Core Engineering
          </h4>
          <ul className="space-y-2 text-xs">
            <li className="hover:text-white transition-colors">• Electrical Infrastructure & Distribution</li>
            <li className="hover:text-white transition-colors">• Heavy Generator Systems & ATS Panels</li>
            <li className="hover:text-white transition-colors">• Online Double Conversion UPS Systems</li>
            <li className="hover:text-white transition-colors">• Hybrid Solar & Battery Storage (ESS)</li>
            <li className="hover:text-white transition-colors">• Institutional Solar Thermal Water Heating</li>
            <li className="hover:text-white transition-colors">• Voltage Regulation & Servo Stabilizers</li>
            <li className="hover:text-white transition-colors">• Power Factor Correction (PFC) Banks</li>
            <li className="hover:text-white transition-colors">• ICT & Data Center Cable Networks</li>
          </ul>
        </div>

        {/* Col 4: Contact & Location */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
            Uganda Office & Contact
          </h4>
          <div className="space-y-2.5 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{COMPANY_DETAILS.address}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-amber-400 hover:underline font-mono">
                {COMPANY_DETAILS.email}
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{COMPANY_DETAILS.phonePrimary} / {COMPANY_DETAILS.phoneSecondary}</span>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 rounded-lg border border-emerald-500/30 font-semibold text-xs transition-colors w-full justify-center"
              >
                <span>WhatsApp: +{COMPANY_DETAILS.whatsappNumber}</span>
              </a>

              <div className="pt-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  Follow Our Engineering Channels:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={COMPANY_DETAILS.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white rounded-lg border border-slate-800 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  <a
                    href={COMPANY_DETAILS.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-900 hover:bg-red-600 text-slate-300 hover:text-white rounded-lg border border-slate-800 transition-colors"
                    title="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>

                  <a
                    href={COMPANY_DETAILS.socials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-800 font-bold text-xs transition-colors flex items-center gap-1"
                    title="X (Twitter)"
                  >
                    <span className="font-mono">𝕏</span>
                    <span className="text-[10px]">@GenivertSystems</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Keyword Footer Tag Cloud */}
      <div className="bg-slate-900/60 border-t border-slate-900 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-2">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
            East Africa Engineering Capabilities & Solutions Keywords:
          </span>
          <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-400">
            {seoKeywords.map((kw, i) => (
              <span key={i} className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700/60 hover:text-white transition-colors">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-950 border-t border-slate-900 py-4 px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>
            © {new Date().getFullYear()} {COMPANY_DETAILS.name}. All Rights Reserved. Kampala, Uganda | East Africa.
          </span>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('hsqe')} className="hover:underline">HSQE Policy</button>
            <span>•</span>
            <button onClick={() => onNavigate('solaris')} className="hover:underline">Ad Imperium Solaris</button>
            <span>•</span>
            <button onClick={() => onNavigate('contact')} className="hover:underline">Support Desk</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
