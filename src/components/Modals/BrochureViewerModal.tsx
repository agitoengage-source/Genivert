import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, ShieldCheck, Printer, ExternalLink } from 'lucide-react';
import { ResourceDocument } from '../../types';
import { COMPANY_DETAILS } from '../../data/companyData';

interface BrochureViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  document: ResourceDocument | null;
}

export const BrochureViewerModal: React.FC<BrochureViewerModalProps> = ({
  isOpen,
  onClose,
  document
}) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen || !document) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      // Trigger native print or window view for document simulation
      window.print();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 my-8 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 p-6 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/30">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                {document.category} Document • {document.fileSize}
              </span>
              <h3 className="text-lg font-bold text-white line-clamp-1">{document.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preview Container */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex justify-between items-center">
              <div>
                <span className="text-xs text-slate-500 font-mono">GENIVERT DOC REF: {document.id.toUpperCase()}-2026</span>
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">{COMPANY_DETAILS.name}</h4>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{COMPANY_DETAILS.statement}</p>
              </div>
              <div className="text-right text-xs text-slate-500">
                <span>Kampala, Uganda</span>
                <br />
                <span>{document.pages} Pages • Technical Brief</span>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="font-bold text-slate-900 dark:text-white text-base">Executive Document Summary</h5>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {document.description}
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="bg-white dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 block">Target Audience:</span>
                  <strong className="text-slate-800 dark:text-slate-200">Universities, Hospitals, Hotels & Industrial Clients</strong>
                </div>
                <div className="bg-white dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 block">Engineering Standards:</span>
                  <strong className="text-slate-800 dark:text-slate-200">IEC, IEEE, ERA & UNBS Certified</strong>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-500 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span>Official Publication of Genivert Systems Ltd & Ad Imperium Solaris</span>
              <span>Email: {COMPANY_DETAILS.email}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Verified PDF Engineering Document. Free for institutional download.</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="w-full sm:w-auto px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl transition-all shadow flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                {downloading ? (
                  <span>Preparing Print PDF...</span>
                ) : downloaded ? (
                  <>
                    <Printer className="w-4 h-4" />
                    <span>Print / Save Copy</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download / Print PDF ({document.fileSize})</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
