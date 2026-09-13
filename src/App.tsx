import React, { useState, useEffect } from 'react';
import { PageRoute, SolarAssessmentInput, AssessmentResult, ResourceDocument } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { AssessmentModal } from './components/Modals/AssessmentModal';
import { BrochureViewerModal } from './components/Modals/BrochureViewerModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { SolarisPage } from './pages/SolarisPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { HSQEPage } from './pages/HSQEPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';

import { RESOURCE_DOCUMENTS } from './data/companyData';

export default function App() {
  const [activeRoute, setActiveRoute] = useState<PageRoute>('home');
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);
  const [prefilledInput, setPrefilledInput] = useState<SolarAssessmentInput | null>(null);
  const [prefilledResult, setPrefilledResult] = useState<AssessmentResult | null>(null);

  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<ResourceDocument | null>(null);

  // Scroll to top when changing route
  const handleNavigate = (route: PageRoute) => {
    setActiveRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAssessmentModal = () => {
    setIsAssessmentModalOpen(true);
  };

  const handleOpenAssessmentWithData = (input: SolarAssessmentInput, result: AssessmentResult) => {
    setPrefilledInput(input);
    setPrefilledResult(result);
    setIsAssessmentModalOpen(true);
  };

  const handleOpenDocModal = (doc: ResourceDocument) => {
    setSelectedDoc(doc);
    setIsBrochureModalOpen(true);
  };

  const handleOpenDefaultBrochure = () => {
    setSelectedDoc(RESOURCE_DOCUMENTS[0]);
    setIsBrochureModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-amber-400 selection:text-slate-950">
      <SEOHead activeRoute={activeRoute} />

      {/* Corporate Header */}
      <Header
        activeRoute={activeRoute}
        onNavigate={handleNavigate}
        onRequestAssessment={handleOpenAssessmentModal}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activeRoute === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onRequestAssessment={handleOpenAssessmentModal}
            onOpenAuditWithData={handleOpenAssessmentWithData}
          />
        )}

        {activeRoute === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onRequestAssessment={handleOpenAssessmentModal}
            onOpenBrochure={handleOpenDefaultBrochure}
          />
        )}

        {activeRoute === 'solutions' && (
          <SolutionsPage
            onNavigate={handleNavigate}
            onRequestAssessment={handleOpenAssessmentModal}
          />
        )}

        {activeRoute === 'solaris' && (
          <SolarisPage
            onNavigate={handleNavigate}
            onRequestAssessment={handleOpenAssessmentModal}
            onOpenAuditWithData={handleOpenAssessmentWithData}
          />
        )}

        {activeRoute === 'industries' && (
          <IndustriesPage
            onNavigate={handleNavigate}
            onRequestAssessment={handleOpenAssessmentModal}
          />
        )}

        {activeRoute === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onRequestAssessment={handleOpenAssessmentModal}
          />
        )}

        {activeRoute === 'hsqe' && (
          <HSQEPage
            onNavigate={handleNavigate}
            onRequestAssessment={handleOpenAssessmentModal}
          />
        )}

        {activeRoute === 'resources' && (
          <ResourcesPage
            onNavigate={handleNavigate}
            onRequestAssessment={handleOpenAssessmentModal}
            onOpenDoc={handleOpenDocModal}
          />
        )}

        {activeRoute === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onRequestAssessment={handleOpenAssessmentModal}
          />
        )}
      </main>

      {/* Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestAssessment={handleOpenAssessmentModal}
      />

      {/* Assessment Request Modal */}
      <AssessmentModal
        isOpen={isAssessmentModalOpen}
        onClose={() => setIsAssessmentModalOpen(false)}
        prefilledInput={prefilledInput}
        prefilledResult={prefilledResult}
      />

      {/* Brochure & Document Viewer Modal */}
      <BrochureViewerModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
        document={selectedDoc}
      />
    </div>
  );
}
