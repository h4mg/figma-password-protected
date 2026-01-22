import { SlideContainer } from '@/app/components/slide-container';
import { Square } from 'lucide-react';

export function Slide03Hypotheses() {
  const hypotheses = [
    'Reduce single-page visits',
    'Encourage exploration across content',
    'Shift beyond opportunity-driven use',
    'Strengthen programmes and archives',
    'Improve mobile experience',
  ];

  return (
    <SlideContainer>
      <div className="max-w-5xl w-full space-y-12">
        <h2 className="text-4xl font-light text-slate-900">
          What the 2020 redesign set out to do
        </h2>
        
        <div className="space-y-4">
          {hypotheses.map((hypothesis, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-5 border border-slate-200 rounded-lg bg-white hover:border-slate-300 transition-colors"
            >
              <Square className="w-5 h-5 text-slate-300" />
              <span className="text-lg text-slate-700">{hypothesis}</span>
            </div>
          ))}
        </div>

        <div className="text-sm text-slate-500 italic mt-8">
          Original hypotheses from the 2020 redesign brief
        </div>
      </div>
    </SlideContainer>
  );
}
