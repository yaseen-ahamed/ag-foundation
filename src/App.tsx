/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import { SearchModal } from './components/layout/SearchModal';
import { CmsStudioModal } from './components/layout/CmsStudioModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgrammesOverviewPage, ProgrammeDetailPage } from './pages/ProgrammesPages';
import { StrokeForcePage } from './pages/StrokeForcePage';
import { ImpactPage, GalleryPage, NewsEventsPage } from './pages/ArchivePages';
import {
  GetInvolvedPage,
  DonatePage,
  VolunteerPage,
  PartnerWithUsPage,
} from './pages/EngagementPages';
import {
  TransparencyPage,
  ContactPage,
  PrivacyPolicyPage,
  TermsPage,
  NotFoundPage,
} from './pages/InstitutionalPages';

export default function App() {
  return (
    <SiteProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white text-[#102C4B]">
          {/* Accessible Skip-to-Content Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#102C4B] focus:text-white focus:text-xs focus:font-semibold"
          >
            Skip to main content
          </a>

          <SiteHeader />

          <main id="main-content" className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/programmes" element={<ProgrammesOverviewPage />} />
              <Route path="/programmes/:slug" element={<ProgrammeDetailPage />} />
              <Route path="/stroke-force" element={<StrokeForcePage />} />
              <Route path="/impact" element={<ImpactPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/news-events" element={<NewsEventsPage />} />
              <Route path="/get-involved" element={<GetInvolvedPage />} />
              <Route path="/donate" element={<DonatePage />} />
              <Route path="/volunteer" element={<VolunteerPage />} />
              <Route path="/partner-with-us" element={<PartnerWithUsPage />} />
              <Route path="/transparency" element={<TransparencyPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <SiteFooter />
          <SearchModal />
          <CmsStudioModal />
        </div>
      </BrowserRouter>
    </SiteProvider>
  );
}
