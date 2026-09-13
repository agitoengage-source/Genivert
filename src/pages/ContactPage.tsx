import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Building,
  ShieldCheck,
  MessageSquare,
  Globe
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { PageRoute } from '../types';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
  onRequestAssessment: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onRequestAssessment
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    subject: 'Request Quotation & Site Assessment',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappLink = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    `Hello Genivert Systems Engineering Team, I would like to inquire regarding power solutions for my organization.`
  )}`;

  return (
    <div className="space-y-16 pb-12">
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-900/60 px-3 py-1 rounded-full text-xs font-bold text-blue-300 uppercase tracking-widest border border-blue-500/30">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            Direct Engineering Support
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Contact Genivert Systems Ltd
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Get in touch with our Kampala engineering team for site audits, technical inquiries, quotation requests, or 24/7 emergency support.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS & FORM GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Contact Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-950 text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase text-amber-400 tracking-widest block mb-1">
                  GENIVERT SYSTEMS LTD
                </span>
                <h2 className="text-2xl font-extrabold text-white">Engineering Headquarters</h2>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-sm">Physical Address:</strong>
                    <span>{COMPANY_DETAILS.address}</span>
                    <br />
                    <span className="text-slate-400">{COMPANY_DETAILS.poBox}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-sm">Official Corporate Email:</strong>
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-amber-400 hover:underline font-mono text-sm font-bold">
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-sm">Phone & WhatsApp Lines:</strong>
                    <span>Primary: {COMPANY_DETAILS.phonePrimary}</span>
                    <br />
                    <span>Secondary: {COMPANY_DETAILS.phoneSecondary}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-sm">Operating Hours:</strong>
                    <span>{COMPANY_DETAILS.operatingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect Directly via WhatsApp</span>
                </a>

                <div className="pt-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                    Official Corporate Media & Social Channels:
                  </span>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <a
                      href={COMPANY_DETAILS.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-slate-900 hover:bg-blue-600 text-slate-200 hover:text-white rounded-xl border border-slate-800 transition-colors flex flex-col items-center justify-center gap-1 font-semibold"
                    >
                      <span className="text-[11px]">LinkedIn</span>
                    </a>

                    <a
                      href={COMPANY_DETAILS.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-slate-900 hover:bg-red-600 text-slate-200 hover:text-white rounded-xl border border-slate-800 transition-colors flex flex-col items-center justify-center gap-1 font-semibold"
                    >
                      <span className="text-[11px]">YouTube</span>
                    </a>

                    <a
                      href={COMPANY_DETAILS.socials.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white rounded-xl border border-slate-800 transition-colors flex flex-col items-center justify-center gap-1 font-semibold"
                    >
                      <span className="text-[11px]">X (Twitter)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Location Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Kampala Engineering Hub Location
              </h4>
              <div className="bg-slate-100 dark:bg-slate-800 h-48 rounded-xl flex flex-col items-center justify-center p-4 text-center border border-slate-200 dark:border-slate-700 space-y-2">
                <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-bounce" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {COMPANY_DETAILS.address}
                </span>
                <span className="text-[11px] text-slate-500">
                  Mengo Hill Road, Kampala, Uganda • Serving Institutions Nationwide & Across East Africa
                </span>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800">
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Inquiry Transmitted Successfully</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-blue-600 dark:text-blue-400">{formData.name}</strong>. Your message has been received by Genivert Systems engineering desk in Kampala. We will respond to <strong className="text-amber-600 dark:text-amber-400">{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl text-xs uppercase"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block">
                    Institutional Contact Form
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Submit a Request for Quotation or Assessment
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eng. Robert Musoke"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Organization / Institution *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Uganda Martyrs Hospital"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. robert@hospital.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+256 700 000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    Subject / Engineering Area
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Request Quotation & Site Assessment">Request Quotation & On-Site Audit</option>
                    <option value="AD IMPERIUM Hybrid Solar Proposal">AD IMPERIUM Hybrid Solar & Battery System</option>
                    <option value="Generator Supply & ATS Panel">Heavy Generator Systems & ATS</option>
                    <option value="Critical UPS & Power Quality">Medical / Data Center UPS Systems</option>
                    <option value="Solar Water Pumping & Heating">Solar Water Heating / Borehole Pumping</option>
                    <option value="Voltage Regulator & PFC">Industrial Voltage Regulation & PFC</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    Detailed Message / Site Scope *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about your facility, location, power usage, or specific challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-base cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message to Genivert Engineers</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
