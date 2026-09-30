/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { OperationalBar } from './components/OperationalBar';
import { WelcomeSection } from './components/WelcomeSection';
import { ArchwoodGlance } from './components/ArchwoodGlance';
import { ArchwoodStories } from './components/ArchwoodStories';
import { AcademicPrograms } from './components/AcademicPrograms';
import { GallerySection } from './components/GallerySection';
import { SchoolSearchFilter } from './components/SchoolSearchFilter';
import { TuitionAndFinance } from './components/TuitionAndFinance';
import { ParentReviewsSection } from './components/ParentReviewsSection';
import { LocationAndMap } from './components/LocationAndMap';
import { Footer } from './components/Footer';
import {
  ApplyModal,
  InquiryModal,
  FinanceModal,
  ParentPortalModal,
  StoryReaderModal,
  VideoTourModal,
  SearchModal,
} from './components/Modals';
import { StoryItem } from './types';

export default function App() {
  const [applyOpen, setApplyOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [financeOpen, setFinanceOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [videoTourOpen, setVideoTourOpen] = useState(false);
  const [activeStory, setActiveStory] = useState<StoryItem | null>(null);

  const handleOpenMap = () => {
    const locElement = document.getElementById('location');
    if (locElement) {
      locElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-neutral-900 selection:bg-[#3E0F45] selection:text-amber-300">
      {/* 1. Header & Navigation (Matches Screenshot) */}
      <Navbar
        onOpenApply={() => setApplyOpen(true)}
        onOpenInquiry={() => setInquiryOpen(true)}
        onOpenPortal={() => setPortalOpen(true)}
        onOpenFinance={() => setFinanceOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenGallery={() => setVideoTourOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Image Carousel (Matches Screenshot 1 & 2) */}
        <HeroCarousel
          onOpenApply={() => setApplyOpen(true)}
          onOpenInquiry={() => setInquiryOpen(true)}
        />

        {/* 3. Operational Bar (Location, Hours, Call, 5.0 Rating, ₦0 Fee Action) */}
        <OperationalBar
          onOpenApply={() => setApplyOpen(true)}
          onOpenInquiry={() => setInquiryOpen(true)}
          onOpenFinance={() => setFinanceOpen(true)}
          onOpenMap={handleOpenMap}
        />

        {/* 4. Welcome Section (Matches Screenshot 2) */}
        <WelcomeSection
          onOpenVideoTour={() => setVideoTourOpen(true)}
          onOpenApply={() => setApplyOpen(true)}
          onOpenInquiry={() => setInquiryOpen(true)}
        />

        {/* 5. Archwood at a Glance (Matches Screenshot 4 - Signature Royal Purple Stats) */}
        <ArchwoodGlance
          onOpenApply={() => setApplyOpen(true)}
          onOpenFinance={() => setFinanceOpen(true)}
        />

        {/* 6. Archwood Stories & Campus Life (Matches Screenshot 3) */}
        <ArchwoodStories
          onSelectStory={(story) => setActiveStory(story)}
        />

        {/* 7. Academic Programs & Co-Curriculars */}
        <AcademicPrograms
          onOpenApply={() => setApplyOpen(true)}
          onOpenInquiry={() => setInquiryOpen(true)}
        />

        {/* 8. Dedicated Campus Gallery with Category Filters & Lightbox */}
        <GallerySection />

        {/* 9. Tuition & Financing (₦0.00 Registration Fee + Installment Calculator) */}
        <TuitionAndFinance
          onOpenApply={() => setApplyOpen(true)}
          onOpenInquiry={() => setInquiryOpen(true)}
          onOpenFinanceModal={() => setFinanceOpen(true)}
        />

        {/* 9. Further School Search Filter Widget (Direct from Prompt) */}
        <SchoolSearchFilter
          onOpenApply={() => setApplyOpen(true)}
          onOpenFinance={() => setFinanceOpen(true)}
        />

        {/* 10. Parent Ratings & Reviews (5.0 Rating, 7 Criteria, Live Review Form) */}
        <ParentReviewsSection />

        {/* 11. Campus Location & Interactive Map (Plot 17 Road 1 Ikota Villa) */}
        <LocationAndMap />
      </main>

      {/* 12. Footer (Matches Screenshot 5) */}
      <Footer
        onOpenApply={() => setApplyOpen(true)}
        onOpenInquiry={() => setInquiryOpen(true)}
        onOpenPortal={() => setPortalOpen(true)}
        onOpenFinance={() => setFinanceOpen(true)}
      />

      {/* Interactive Modals */}
      <ApplyModal
        isOpen={applyOpen}
        onClose={() => setApplyOpen(false)}
      />

      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />

      <FinanceModal
        isOpen={financeOpen}
        onClose={() => setFinanceOpen(false)}
      />

      <ParentPortalModal
        isOpen={portalOpen}
        onClose={() => setPortalOpen(false)}
      />

      <StoryReaderModal
        story={activeStory}
        onClose={() => setActiveStory(null)}
      />

      <VideoTourModal
        isOpen={videoTourOpen}
        onClose={() => setVideoTourOpen(false)}
        onOpenApply={() => setApplyOpen(true)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onOpenApply={() => setApplyOpen(true)}
      />
    </div>
  );
}
