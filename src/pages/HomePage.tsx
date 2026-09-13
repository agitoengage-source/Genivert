import React, { useState, useEffect } from 'react';
import {
  Zap,
  Sun,
  ShieldCheck,
  Building,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Award,
  ChevronRight,
  Clock,
  TrendingUp,
  Cpu,
  FileText,
  Activity,
  Droplets,
  ServerCog
} from 'lucide-react';
import { PageRoute, SolarAssessmentInput, AssessmentResult } from '../types';
import {
  COMPANY_DETAILS,
  ENGINEERING_SERVICES,
  SOLARIS_SOLUTIONS,
  INDUSTRIES_SERVED,
  PROJECTS_PORTFOLIO,
  CLIENT_TESTIMONIALS
} from '../data/companyData';
import { SolarReadinessAssessment } from '../components/SolarReadinessAssessment';
import { SolarisLogo } from '../components/SolarisLogo';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onRequestAssessment: () => void;
  onOpenAuditWithData: (input: SolarAssessmentInput, result: AssessmentResult) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onRequestAssessment,
  onOpenAuditWithData
}) => {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  const heroSlides = [
    {
      title: "Powering Institutions. Engineering Reliability. Building Sustainable Energy Futures.",
      subtitle: "Genivert Systems provides intelligent electrical systems, backup power solutions, renewable energy technologies, and smart infrastructure solutions for institutions and businesses across Uganda and East Africa.",
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1920&q=80",
      badge: "Institutional Engineering Excellence"
    },
    {
      title: "Zero Downtime Critical Power & Smart Microgrid Engineering",
      subtitle: "Protecting hospital ICUs, university computer labs, bank data centers, and manufacturing plants with online UPS systems and industrial hybrid solar storage.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80",
      badge: "Critical Power & UPS Engineering"
    },
    {
      title: "AD IMPERIUM SOLARIS — Institutional Solar Transformation",
      subtitle: "Harnessing Uganda's sunshine to eliminate high grid electricity bills and expensive generator diesel consumption for sustainable growth.",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80",
      badge: "Renewable Energy Division"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-16 pb-12">
      {/* HERO SECTION */}
      <section className="relative bg-slate-950 text-white min-h-[620px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Background Slide Images with Overlay */}
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeHeroIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
            />
            {/* Dark Engineering Gradients for High Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
          </div>
        ))}

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl space-y-6">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-500/40 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur shadow-md">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>{heroSlides[activeHeroIndex].badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-md">
              {heroSlides[activeHeroIndex].title}
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
              {heroSlides[activeHeroIndex].subtitle}
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onRequestAssessment}
                className="px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black rounded-xl shadow-xl hover:shadow-amber-500/20 transition-all flex items-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <Zap className="w-5 h-5" />
                <span>Request Energy Assessment</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm sm:text-base border border-blue-500/30 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-blue-200" />
                <span>Contact Engineering Team</span>
              </button>

              <button
                onClick={() => onNavigate('solaris')}
                className="px-6 py-4 bg-slate-900/90 hover:bg-slate-800 text-amber-400 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm sm:text-base border border-amber-500/40 cursor-pointer"
              >
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Explore Solar Solutions</span>
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="pt-6 flex items-center gap-2">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveHeroIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === activeHeroIndex ? 'w-8 bg-amber-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL TRUST & TARGET SECTORS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1">
              Institutional Engineering Partner
            </span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Trusted by Decision-Makers Across Key Sectors in East Africa
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { label: "Universities & Schools", icon: "GraduationCap" },
              { label: "Hotels & Safari Lodges", icon: "Hotel" },
              { label: "Hospitals & Clinics", icon: "HeartPulse" },
              { label: "Banks & Data Centers", icon: "Building2" },
              { label: "Religious Institutions", icon: "Church" },
              { label: "Industrial & Manufacturing", icon: "Factory" },
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate('industries')}
                className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/60 hover:border-blue-500 dark:hover:border-blue-400 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <Building className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND POSITIONING & EXECUTIVE PROFILE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Corporate Positioning
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              An Institutional Infrastructure Partner — Not Simply a Solar Installer
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong>GENIVERT SYSTEMS LTD</strong> is a Uganda-based engineering company delivering intelligent power infrastructure, electrical engineering, renewable energy, and smart energy management solutions.
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              We design, install, maintain, and manage integrated electrical and energy infrastructure that keeps universities, referral hospitals, bank headquarters, lodges, and processing factories fully powered, efficient, and future-ready.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {COMPANY_DETAILS.stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-100 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                  <span className="text-2xl sm:text-3xl font-black text-blue-700 dark:text-blue-400 block">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors"
              >
                <span>Read Complete Company Profile & Engineering Credentials</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 group">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80"
                alt="Genivert Systems Engineers at work"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Engineering Standards & Compliance
                </span>
                <h3 className="text-xl font-bold">Class A Licensed Electrical Contractors</h3>
                <p className="text-xs text-slate-300">
                  Executing high-voltage sub-stations, switchgear distribution, generators, UPS systems, and TOPCon hybrid solar installations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE ENGINEERING SOLUTIONS */}
      <section className="bg-slate-100 dark:bg-slate-900/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest block mb-1">
                Engineering Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Integrated Electrical & Power Solutions
              </h2>
            </div>
            <button
              onClick={() => onNavigate('solutions')}
              className="inline-flex items-center gap-2 font-bold text-sm text-blue-700 dark:text-blue-400 hover:underline shrink-0"
            >
              <span>View All 6 Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENGINEERING_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded">
                      {service.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <ul className="space-y-1.5 pt-2">
                      {service.features.slice(0, 3).map((feat, fidx) => (
                        <li key={fidx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-4">
                  <button
                    onClick={() => onNavigate('solutions')}
                    className="w-full py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Technical Specifications</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEDICATED DIVISION: AD IMPERIUM SOLARIS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-amber-950/40 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-amber-500/30 shadow-2xl space-y-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-amber-500/20 pb-8">
            <SolarisLogo size="lg" variant="light" />

            <div className="text-left md:text-right">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                Renewable Energy Transformation Division
              </span>
              <p className="text-sm text-slate-300 mt-1 max-w-md">
                Harnessing Uganda's abundant sunshine to create reliable, affordable, and sustainable energy independence.
              </p>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLARIS_SOLUTIONS.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/90 rounded-2xl p-6 border border-amber-500/20 hover:border-amber-400 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center border border-amber-500/30">
                    <Sun className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-amber-200 font-medium">
                    "{item.tagline}"
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <button
                    onClick={() => onNavigate('solaris')}
                    className="w-full py-2 text-xs font-bold text-amber-300 hover:text-white flex items-center justify-between cursor-pointer"
                  >
                    <span>Explore Division Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner inside Solaris */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg font-extrabold text-amber-200">
                Are You Paying Excessive Utility Bills or Generator Fuel Costs?
              </h4>
              <p className="text-xs text-slate-300">
                An Ad Imperium Solaris microgrid cuts energy costs by up to 85% with 25-year performance warranty.
              </p>
            </div>

            <button
              onClick={() => onNavigate('solaris')}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer"
            >
              Learn More About Solaris
            </button>
          </div>
        </div>
      </section>

      {/* SOLAR READINESS ASSESSMENT CAMPAIGN SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SolarReadinessAssessment
          onRequestAudit={(input, result) => onOpenAuditWithData(input, result)}
        />
      </section>

      {/* FEATURED PROJECTS PORTFOLIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1">
              Engineering Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Featured Institutional Case Studies in East Africa
            </h2>
          </div>

          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 font-bold text-sm text-blue-700 dark:text-blue-400 hover:underline"
          >
            <span>Explore All Projects & Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS_PORTFOLIO.filter(p => p.featured).map((proj) => (
            <div
              key={proj.id}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-slate-950/80 text-amber-400 text-[10px] font-bold rounded border border-amber-400/30">
                    {proj.capacity}
                  </span>
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-blue-600 text-white text-[10px] font-bold rounded">
                    {proj.clientCategory}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-xs text-slate-500 font-semibold">
                    {proj.location} • Installed {proj.year}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-2">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {proj.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 mt-4 space-y-3">
                <div className="bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800/40 text-xs text-emerald-800 dark:text-emerald-300 font-medium">
                  <strong>Impact:</strong> {proj.results[0]}
                </div>

                <button
                  onClick={() => onNavigate('projects')}
                  className="w-full py-2 text-xs font-bold text-blue-700 dark:text-blue-400 hover:underline flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>View Project Case Study</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HSQE EXCELLENCE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              HEALTH, SAFETY, QUALITY & ENVIRONMENTAL EXCELLENCE (HSQE)
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Zero Compromise on High-Voltage Safety and Engineering Rigor
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              Every Genivert Systems project strictly enforces Job Safety Analysis (JSA), Permit-To-Work (PTW) protocols, certified PPE, and ISO 9001 quality management procedures.
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ERA Class A Certified Contractors</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ISO 45001 Safety Management</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={() => onNavigate('hsqe')}
              className="px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg transition-all text-sm flex items-center gap-2 cursor-pointer"
            >
              <span>Explore HSQE Framework</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1">
            Client Endorsements
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            What Institutional Leaders Say About Genivert Systems
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLIENT_TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4"
            >
              <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                "{t.quote}"
              </p>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.author}</h4>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{t.title}</p>
                <p className="text-[11px] text-slate-500">{t.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
