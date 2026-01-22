import { SlideContainer } from '@/app/components/slide-container';
import { CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export function Slide05ReadingGuide() {
  return (
    <SlideContainer>
      <div className="max-w-6xl w-full space-y-12">
        <h2 className="text-4xl font-light text-slate-900">
          How to read this presentation
        </h2>

        <div className="grid grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-700" />
            </div>
            <h3 className="text-xl font-medium text-slate-900">What worked</h3>
            <p className="text-slate-600">
              Goals achieved, metrics improved, hypotheses validated through five years of data
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="text-xl font-medium text-slate-900">What partially worked</h3>
            <p className="text-slate-600">
              Areas with growth but below benchmarks, requiring continued attention
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-purple-700" />
            </div>
            <h3 className="text-xl font-medium text-slate-900">What shifted unexpectedly</h3>
            <p className="text-slate-600">
              Surprises in user behavior, emergent patterns not originally anticipated
            </p>
          </div>
        </div>

        <div className="text-center text-sm text-slate-500 mt-12">
          This framework will guide our interpretation throughout the presentation
        </div>
      </div>
    </SlideContainer>
  );
}
