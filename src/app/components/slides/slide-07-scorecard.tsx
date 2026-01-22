import { SlideContainer } from '@/app/components/slide-container';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { goalsScorecard } from '@/data/presentationData';

export function Slide07Scorecard() {
  return (
    <SlideContainer>
      <div className="max-w-6xl w-full space-y-12">
        <h2 className="text-4xl font-light text-slate-900">
          Goal scorecard: did we achieve what we set out to do?
        </h2>

        <div className="space-y-3">
          {goalsScorecard.map((item, index) => (
            <div 
              key={index}
              className="grid grid-cols-12 gap-6 items-center bg-white p-5 rounded-lg border border-slate-200"
            >
              <div className="col-span-5 font-medium text-slate-900">
                {item.goal}
              </div>
              <div className="col-span-2 text-center text-slate-600">
                {item.baseline}
              </div>
              <div className="col-span-2 text-center font-medium text-slate-900">
                {item.result}
              </div>
              <div className="col-span-3 flex items-center justify-center gap-2">
                {item.status === 'achieved' ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-green-700 font-medium">Achieved</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                    <span className="text-amber-700 font-medium">Partial</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6 text-sm font-medium text-slate-500 border-b border-slate-200 pb-2">
          <div className="col-span-5">Goal</div>
          <div className="col-span-2 text-center">2020 Baseline</div>
          <div className="col-span-2 text-center">2025 Result</div>
          <div className="col-span-3 text-center">Status</div>
        </div>
      </div>
    </SlideContainer>
  );
}
