import { useState, useEffect } from 'react';
import { CaretLeft, CaretRight, Keyboard } from '@phosphor-icons/react';
import {
  Slide01Title,
  Slide02WhyRevisit,
  Slide03Hypotheses,
  Slide04Methodology,
  Slide05ReadingGuide,
  Slide06ExecutiveSummary,
  Slide07Scorecard,
  Slide08SinglePage,
  Slide09TrafficGrowth,
  Slide10ReturnVisits,
  Slide11AcquisitionMix,
  Slide12GreatReversal,
  Slide13ReversalMeaning,
  Slide14ArchiveAlive,
  Slide15ArchivalImportance,
  Slide16EntryNavigation,
  Slide17MobileMoment,
  Slide18DeviceQuality,
  Slide19PagesPerUser,
  Slide20Geography,
  Slide21EngagementByMarket,
  Slide22Thematics,
  Slide23Search,
  Slide24Confirms,
  Slide25Surprises,
  Slide26PartiallyWorked,
  Slide27Tensions,
  Slide28ImpactReport,
  Slide29Funders,
  Slide30ProgrammeTeam,
  Slide31FutureStrategy,
  Slide32AIReadiness,
  Slide33WhatThisGives,
  Slide34OpenQuestions,
  Slide35ThankYou,
} from '@/app/components/slides';

const slides = [
  { component: Slide01Title, title: 'Title' },
  { component: Slide02WhyRevisit, title: 'Why Revisit Now' },
  { component: Slide03Hypotheses, title: 'Original Hypotheses' },
  { component: Slide04Methodology, title: 'Methodology' },
  { component: Slide05ReadingGuide, title: 'Reading Guide' },
  { component: Slide06ExecutiveSummary, title: 'Executive Summary' },
  { component: Slide07Scorecard, title: 'Goal Scorecard' },
  { component: Slide08SinglePage, title: 'Reducing Single-Page Visits' },
  { component: Slide09TrafficGrowth, title: 'Traffic Growth' },
  { component: Slide10ReturnVisits, title: 'Return Visits' },
  { component: Slide11AcquisitionMix, title: 'Acquisition Mix' },
  { component: Slide12GreatReversal, title: 'The Great Reversal' },
  { component: Slide13ReversalMeaning, title: 'What This Reversal Means' },
  { component: Slide14ArchiveAlive, title: 'The Archive is Alive' },
  { component: Slide15ArchivalImportance, title: 'Why Archives Matter' },
  { component: Slide16EntryNavigation, title: 'Entry vs Navigation' },
  { component: Slide17MobileMoment, title: 'The Mobile Moment' },
  { component: Slide18DeviceQuality, title: 'Device Quality' },
  { component: Slide19PagesPerUser, title: 'Pages Per User' },
  { component: Slide20Geography, title: 'Geography' },
  { component: Slide21EngagementByMarket, title: 'Engagement by Market' },
  { component: Slide22Thematics, title: 'Thematics as Discovery' },
  { component: Slide23Search, title: 'Search Behavior' },
  { component: Slide24Confirms, title: 'What the Data Confirms' },
  { component: Slide25Surprises, title: 'What Surprised Us' },
  { component: Slide26PartiallyWorked, title: 'What Partially Worked' },
  { component: Slide27Tensions, title: 'Tensions to Hold' },
  { component: Slide28ImpactReport, title: 'Impact Report Value' },
  { component: Slide29Funders, title: 'What This Shows Funders' },
  { component: Slide30ProgrammeTeam, title: 'Programme Team Implications' },
  { component: Slide31FutureStrategy, title: 'Future Strategy Signals' },
  { component: Slide32AIReadiness, title: 'AI Readiness' },
  { component: Slide33WhatThisGives, title: 'What This Gives Khoj' },
  { component: Slide34OpenQuestions, title: 'Open Questions' },
  { component: Slide35ThankYou, title: 'Thank You' },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="w-full h-screen bg-[#f2f0f2] flex flex-col overflow-hidden font-sans">
      {/* Slide content */}
      <div className="flex-1 relative">
        <CurrentSlideComponent />
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-between px-8 py-4 bg-[#f2f0f2] border-t border-[#231e20]">
        {/* Left: Previous button */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center gap-2 px-4 py-2 border border-[#231e20] hover:bg-[#231e20] hover:text-[#f2f0f2] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <CaretLeft className="w-5 h-5" weight="regular" />
          <span className="text-sm uppercase tracking-wide">Previous</span>
        </button>

        {/* Center: Slide indicator and progress */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-sm text-[#231e20] font-mono">
            <span className="font-medium">{currentSlide + 1}</span> / {slides.length}
            <span className="mx-3">|</span>
            <span className="uppercase tracking-wide">{slides[currentSlide].title}</span>
          </div>
          <div className="w-96 h-[2px] bg-[#231e20]/20">
            <div
              className="h-full bg-[#231e20] transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Right: Next button */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-2 px-4 py-2 bg-[#231e20] hover:bg-[#231e20]/80 text-[#f2f0f2] disabled:opacity-30 disabled:cursor-not-allowed transition-colors border border-[#231e20]"
        >
          <span className="text-sm uppercase tracking-wide">Next</span>
          <CaretRight className="w-5 h-5" weight="regular" />
        </button>
      </div>

      {/* Help overlay */}
      <div className="absolute bottom-20 right-8 bg-[#231e20] text-[#f2f0f2] px-4 py-3 text-xs space-y-1 opacity-0 hover:opacity-100 transition-opacity border border-[#231e20]">
        <div className="flex items-center gap-2 mb-2">
          <Keyboard className="w-4 h-4" />
          <span className="uppercase tracking-wide">Keyboard Shortcuts</span>
        </div>
        <div><kbd className="px-2 py-1 bg-[#f2f0f2] text-[#231e20] font-mono">←</kbd> Previous</div>
        <div><kbd className="px-2 py-1 bg-[#f2f0f2] text-[#231e20] font-mono">→</kbd> Next</div>
        <div><kbd className="px-2 py-1 bg-[#f2f0f2] text-[#231e20] font-mono">Space</kbd> Next</div>
        <div><kbd className="px-2 py-1 bg-[#f2f0f2] text-[#231e20] font-mono">Home</kbd> First slide</div>
        <div><kbd className="px-2 py-1 bg-[#f2f0f2] text-[#231e20] font-mono">End</kbd> Last slide</div>
      </div>
    </div>
  );
}