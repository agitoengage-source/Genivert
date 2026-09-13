import React, { useState } from 'react';
import { X, CheckCircle2, Send, Building, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/companyData';
import { SolarAssessmentInput, AssessmentResult } from '../../types';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledInput?: SolarAssessmentInput | null;
  prefilledResult?: AssessmentResult | null;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  onClose,
  prefilledInput,
  prefilledResult
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    institutionName: prefilledInput?.institutionName || '',
    contactName: prefilledInput?.contactPerson || '',
    email: prefilledInput?.email || '',
    phone: prefilledInput?.phone || '',
    location: prefilledInput?.location || 'Kampala, Uganda',
    facilityType: prefilledInput?.facilityType || 'University / Academic Campus',
    serviceInterest: 'Solar Hybrid & Energy Storage',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Genivert Systems Engineering Team,\n\nI would like to request an On-Site Energy & Solar Assessment for ${formData.institutionName || 'our facility'}.\n\nLocation: ${formData.location}\nContact: ${formData.contactName}\nPhone: ${formData.phone}\nService: ${formData.serviceInterest}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 my-8 overflow-hidden">
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 p-6 text-white flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">
              Genivert Systems Engineering Desk
            </div>
            <h3 className="text-xl font-extrabold">Request Institutional Power & Solar Audit</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Audit Request Received!</h4>
              <p className="text-slate-600 dark:text-slate-300 mt-2 max-w-md mx-auto text-sm">
                Thank you. A senior Genivert Systems power infrastructure engineer will review your request and contact <strong className="text-blue-600 dark:text-blue-400">{formData.email || 'your email'}</strong> within 24 hours.
              </p>
            </div>

            {prefilledResult && (
              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700 max-w-md mx-auto text-left text-xs space-y-1 text-slate-700 dark:text-slate-300">
                <p><strong>Recommended Solar:</strong> {prefilledResult.recommendedSolarKW} kWp TOPCon Array</p>
                <p><strong>Storage Sizing:</strong> {prefilledResult.recommendedBatteryKWh} kWh LiFePO4 Battery</p>
                <p><strong>Estimated Annual Savings:</strong> UGX {prefilledResult.estimatedAnnualSavingsUGX.toLocaleString()}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
              >
                Connect Immediately via WhatsApp
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold rounded-xl text-sm"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
            {prefilledResult && (
              <div className="bg-amber-500/10 border border-amber-500/30 p-3.5 rounded-xl text-xs text-amber-900 dark:text-amber-200 flex items-center justify-between">
                <div>
                  <strong className="font-bold">Calculated Assessment Attached:</strong> {prefilledResult.recommendedSolarKW} kWp Solar / {prefilledResult.recommendedBatteryKWh} kWh Storage
                </div>
                <span className="font-bold text-amber-600 dark:text-amber-400">{prefilledResult.feasibilityScore}% Score</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Institution / Business Name *
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Makerere College / Kampala Hospital"
                    value={formData.institutionName}
                    onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Contact Person & Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eng. David / Director of Estates"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Official Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="e.g. info@institution.ac.ug"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Phone Number / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="tel"
                    required
                    placeholder="+256 700 000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Facility Location *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kampala, Jinja, Mbarara, Gulu"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Primary Service Interest
                </label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Solar Hybrid & Energy Storage">AD IMPERIUM Hybrid Solar & Batteries</option>
                  <option value="Electrical Engineering & Wiring">Electrical Engineering & Switchgear</option>
                  <option value="Generator Supply & Maintenance">Generator Systems & ATS</option>
                  <option value="UPS & Critical Power">UPS & Critical Medical/Data Power</option>
                  <option value="Solar Water Heating">Solar Water Heating / Borehole Pumping</option>
                  <option value="Power Factor & Voltage Protection">Voltage Regulation & Power Factor</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                Additional Infrastructure / Load Notes
              </label>
              <textarea
                rows={3}
                placeholder="Describe current power challenges, generator capacity, or upcoming facility expansions..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>ERA-compliant engineering team. Direct quote sent to {COMPANY_DETAILS.email}.</span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-base cursor-pointer"
              >
                <Send className="w-5 h-5" />
                Submit Official Engineering Audit Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
