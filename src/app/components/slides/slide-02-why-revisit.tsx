import { SlideContainer } from '@/app/components/slide-container';
import { ArrowRight } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';

export function Slide02WhyRevisit() {
  const [build, setBuild] = useState(0);
  const maxBuilds = 5; // 0 = title only, 1-4 = each bullet, 5 = timeline

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        if (build < maxBuilds) {
          e.stopPropagation();
          setBuild(prev => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (build > 0) {
          e.stopPropagation();
          setBuild(prev => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [build]);

  return (
    <SlideContainer>
      <div className="max-w-5xl w-full space-y-12">
        <h2 className="text-5xl font-light text-[#231e20] tracking-tight">
          Why revisit the website now
        </h2>
        
        <div className="space-y-6 text-lg text-[#231e20]/80 font-light">
          <div 
            className={`flex items-start gap-4 transition-all duration-500 ${
              build >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <div className="w-1 h-1 bg-[#231e20] mt-3 flex-shrink-0" />
            <p>Five years since the 2020 redesign</p>
          </div>
          <div 
            className={`flex items-start gap-4 transition-all duration-500 delay-100 ${
              build >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <div className="w-1 h-1 bg-[#231e20] mt-3 flex-shrink-0" />
            <p>Real behavioural data now exists</p>
          </div>
          <div 
            className={`flex items-start gap-4 transition-all duration-500 delay-200 ${
              build >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <div className="w-1 h-1 bg-[#231e20] mt-3 flex-shrink-0" />
            <p>Website is central to Impact Report</p>
          </div>
          <div 
            className={`flex items-start gap-4 transition-all duration-500 delay-300 ${
              build >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <div className="w-1 h-1 bg-[#231e20] mt-3 flex-shrink-0" />
            <p>Digital memory matters for cultural institutions</p>
          </div>
        </div>

        <div 
          className={`mt-16 flex items-center gap-8 text-[#231e20] bg-white p-8 border border-[#231e20] transition-all duration-700 ${
            build >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="text-center font-mono">
            <div className="text-sm uppercase tracking-widest">2020</div>
            <div className="text-xs text-[#231e20]/50 uppercase tracking-wide">Redesign</div>
          </div>
          <ArrowRight className="w-6 h-6 text-[#231e20]/30" weight="light" />
          <div className="text-center font-mono">
            <div className="text-sm uppercase tracking-widest">5 years</div>
            <div className="text-xs text-[#231e20]/50 uppercase tracking-wide">of use</div>
          </div>
          <ArrowRight className="w-6 h-6 text-[#231e20]/30" weight="light" />
          <div className="text-center font-mono">
            <div className="text-sm uppercase tracking-widest">2025</div>
            <div className="text-xs text-[#231e20]/50 uppercase tracking-wide">Reflection</div>
          </div>
        </div>

        {/* Build indicator */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-1.5">
          {Array.from({ length: maxBuilds + 1 }).map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 transition-all duration-300 ${
                i <= build ? 'bg-[#231e20]' : 'bg-[#231e20]/20'
              }`}
            />
          ))}
        </div>
      </div>
    </SlideContainer>
  );
}