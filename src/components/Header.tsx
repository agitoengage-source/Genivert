import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Sun,
  ShieldCheck,
  Zap,
  ArrowRight,
  FileText
} from 'lucide-react';
import { GenivertLogo } from './GenivertLogo';
import { SolarisLogo } from './SolarisLogo';
import { PageRoute } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';

interface HeaderProps {
  activeRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onRequestAssessment: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeRoute,
  onNavigate,
  onRequestAssessment
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  const navLinks: { route: PageRoute; label: string; highlight?: boolean }[] = [
    { route: 'home', label: 'Home' },
    { route: 'about', label: 'About Us' },
    { route: 'solutions', label: 'Engineering Solutions' },
    { route: 'solaris', label: 'AD IMPERIUM SOLARIS', highlight: true },
    { route: 'industries', label: 'Industries Served' },
    { route: 'projects', label: 'Projects' },
    { route: 'hsqe', label: 'HSQE' },
    { route: 'resources', label: 'Resources' },
    { route: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900 text-white shadow-xl border-b border-slate-800">
      {/* Top Corporate Contact Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs border-b border-slate-800/80 py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span className="hidden sm:inline">Kampala, Uganda | East Africa</span>
              <span className="sm:hidden">Kampala, UG</span>
            </span>

            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors font-mono"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>

            <a
              href={`tel:${COMPANY_DETAILS.phonePrimary}`}
              className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{COMPANY_DETAILS.phonePrimary}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('solaris')}
              className="flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 rounded border border-amber-500/30 font-semibold text-[11px] transition-all cursor-pointer"
            >
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Solar Transformation Division</span>
            </button>

            <span className="hidden lg:inline text-slate-600">|</span>

            <span className="hidden lg:flex items-center gap-1 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>ERA Class A Certified</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <div onClick={() => handleNavClick('home')}>
          <GenivertLogo variant="light" className="h-10 w-10" />
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden xl:flex items-center gap-1 lg:gap-1.5">
          {navLinks.map((item) => {
            const isActive = activeRoute === item.route;

            if (item.highlight) {
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`px-3 py-2 rounded-lg font-extrabold text-xs tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 shadow-md scale-105'
                      : 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-400 border border-amber-500/40'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5 text-amber-300" />
                  <span>{item.label}</span>
                </button>
              );
            }

            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onRequestAssessment}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all flex items-center gap-2 border border-blue-400/30 cursor-pointer"
          >
            <Zap className="w-4 h-4 text-amber-300" />
            <span>Request Assessment</span>
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={onRequestAssessment}
            className="sm:hidden px-2.5 py-1.5 bg-blue-600 text-white font-bold text-[11px] rounded flex items-center gap-1"
          >
            <Zap className="w-3.5 h-3.5 text-amber-300" />
            <span>Audit</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-800 rounded-lg cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          <div className="p-3 bg-slate-900 rounded-lg mb-3 border border-slate-800 flex items-center justify-between">
            <SolarisLogo size="sm" variant="light" />
            <span className="text-[10px] text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30 uppercase">
              Solar Division
            </span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((item) => {
              const isActive = activeRoute === item.route;

              if (item.highlight) {
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className="w-full text-left px-4 py-3 rounded-lg font-bold text-sm bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <Sun className="w-4 h-4" />
                      {item.label}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                );
              }

              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-600 text-white font-bold'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                onRequestAssessment();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Request Energy Assessment</span>
            </button>

            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="w-full bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs border border-slate-800"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
