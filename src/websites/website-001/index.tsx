import React, { useState } from 'react';
import './styles/vakeelsaab.css';
import { Navbar } from './components/Navbar';
import { Footer, CallConsultationModal } from './components/Footer';
import { HomePage } from './pages/HomePage';
import {
  AboutPage,
  FeaturePillarPage,
  HowWeWorkPage,
} from './pages/AboutAndHowPage';
import {
  LegalServicesOverviewPage,
  ServiceDetailPage,
} from './pages/LegalServicesPages';
import {
  BlogsPage,
  ContactPage,
  DocumentStorePage,
  PolicyAndFaqPage,
  RegisterLawyerPage,
  ReviewsPage,
} from './pages/InteractivePages';
import { MEGA_MENU_SERVICES } from './assets/vakeelsaabData';

interface VakeelSaabWebsiteProps {
  onBackToDashboard: () => void;
}

export default function VakeelSaabWebsite({
  onBackToDashboard,
}: VakeelSaabWebsiteProps) {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [callModalOpen, setCallModalOpen] = useState<boolean>(false);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    if (currentPath === '/' || currentPath === '') {
      return (
        <HomePage
          onNavigate={handleNavigate}
          onOpenCallModal={() => setCallModalOpen(true)}
        />
      );
    }
    if (currentPath === '/about') {
      return (
        <AboutPage
          onNavigate={handleNavigate}
          onOpenCallModal={() => setCallModalOpen(true)}
        />
      );
    }
    if (currentPath === '/how-we-work') {
      return (
        <HowWeWorkPage
          onNavigate={handleNavigate}
          onOpenCallModal={() => setCallModalOpen(true)}
        />
      );
    }
    if (currentPath === '/anonymous') {
      return (
        <FeaturePillarPage
          pillar="anonymous"
          onNavigate={handleNavigate}
          onOpenCallModal={() => setCallModalOpen(true)}
        />
      );
    }
    if (currentPath === '/accessible') {
      return (
        <FeaturePillarPage
          pillar="accessible"
          onNavigate={handleNavigate}
          onOpenCallModal={() => setCallModalOpen(true)}
        />
      );
    }
    if (currentPath === '/affordable') {
      return (
        <FeaturePillarPage
          pillar="affordable"
          onNavigate={handleNavigate}
          onOpenCallModal={() => setCallModalOpen(true)}
        />
      );
    }
    if (currentPath === '/legal-services') {
      return (
        <LegalServicesOverviewPage
          onNavigate={handleNavigate}
          onOpenCallModal={() => setCallModalOpen(true)}
        />
      );
    }
    if (currentPath.startsWith('/legal-services/')) {
      const slug = currentPath.replace('/legal-services/', '');
      const found = MEGA_MENU_SERVICES.find((s) => s.slug === slug);
      return (
        <ServiceDetailPage
          messageKey={found?.messageKey || 'property-law'}
          onNavigate={handleNavigate}
          onOpenCallModal={() => setCallModalOpen(true)}
        />
      );
    }
    if (currentPath === '/female-lawyers-in-india') {
      return (
        <ServiceDetailPage
          messageKey="female-law"
          onNavigate={handleNavigate}
          onOpenCallModal={() => setCallModalOpen(true)}
        />
      );
    }
    if (currentPath === '/pocso-lawyer') {
      return (
        <ServiceDetailPage
          messageKey="pocso-law"
          onNavigate={handleNavigate}
          onOpenCallModal={() => setCallModalOpen(true)}
        />
      );
    }
    if (
      currentPath === '/lawyers-in-india' ||
      currentPath.startsWith('/advocate-lawyer-') ||
      currentPath.startsWith('/high-court-lawyer') ||
      currentPath.startsWith('/supreme-court-lawyer')
    ) {
      return (
        <ServiceDetailPage
          messageKey="all-lawyers-in-india"
          onNavigate={handleNavigate}
          onOpenCallModal={() => setCallModalOpen(true)}
        />
      );
    }
    if (currentPath === '/document-store') {
      return (
        <DocumentStorePage
          onNavigate={handleNavigate}
          onOpenCallModal={() => setCallModalOpen(true)}
        />
      );
    }
    if (currentPath === '/blogs') {
      return (
        <BlogsPage
          onNavigate={handleNavigate}
          onOpenCallModal={() => setCallModalOpen(true)}
        />
      );
    }
    if (currentPath === '/lawyer-registration') {
      return (
        <RegisterLawyerPage
          onNavigate={handleNavigate}
          onOpenCallModal={() => setCallModalOpen(true)}
        />
      );
    }
    if (currentPath === '/reviews') {
      return (
        <ReviewsPage
          onNavigate={handleNavigate}
          onOpenCallModal={() => setCallModalOpen(true)}
        />
      );
    }
    if (currentPath === '/contact') {
      return (
        <ContactPage
          onNavigate={handleNavigate}
          onOpenCallModal={() => setCallModalOpen(true)}
        />
      );
    }
    if (currentPath === '/faq') {
      return <PolicyAndFaqPage mode="faq" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/privacy-policy.html') {
      return <PolicyAndFaqPage mode="privacy" onNavigate={handleNavigate} />;
    }
    if (
      currentPath === '/client-terms-and-conditions.html' ||
      currentPath === '/lawyer-terms-and-conditions.html'
    ) {
      return <PolicyAndFaqPage mode="terms" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/sitemap.html') {
      return <PolicyAndFaqPage mode="sitemap" onNavigate={handleNavigate} />;
    }

    return (
      <HomePage
        onNavigate={handleNavigate}
        onOpenCallModal={() => setCallModalOpen(true)}
      />
    );
  };

  return (
    <div className="vakeelsaab-root min-h-screen flex flex-col">
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onBackToDashboard={onBackToDashboard}
        onOpenCallModal={() => setCallModalOpen(true)}
      />
      <main className="flex-1">{renderPage()}</main>
      <Footer
        onNavigate={handleNavigate}
        onOpenCallModal={() => setCallModalOpen(true)}
      />
      <CallConsultationModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
