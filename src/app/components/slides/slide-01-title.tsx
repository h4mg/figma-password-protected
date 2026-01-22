import { SlideContainer } from '@/app/components/slide-container';

export function Slide01Title() {
  return (
    <SlideContainer className="bg-[#231e20]">
      <div className="max-w-4xl text-center space-y-12">
        <h1 className="text-7xl font-light text-[#f2f0f2] tracking-tight leading-none">
          Khoj Website Explorations
        </h1>
        <div className="text-5xl text-[#f2f0f2]/80 font-light tracking-wide">
          2020–2025
        </div>
        <div className="text-2xl text-[#f2f0f2]/60 mt-16 font-light tracking-wide">
          From redesign to living archive
        </div>
        <div className="mt-24 flex items-center justify-center gap-4">
          <div className="h-[1px] w-32 bg-[#f2f0f2]/30" />
          <div className="text-[#f2f0f2]/50 text-sm uppercase tracking-widest">Five-year analysis</div>
          <div className="h-[1px] w-32 bg-[#f2f0f2]/30" />
        </div>
      </div>
    </SlideContainer>
  );
}