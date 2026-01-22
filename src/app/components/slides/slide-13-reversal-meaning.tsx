import { SlideContainer } from '@/app/components/slide-container';

export function Slide13ReversalMeaning() {
  return (
    <SlideContainer className="bg-purple-50">
      <div className="max-w-4xl text-center space-y-12">
        <h2 className="text-4xl font-light text-slate-900">
          What this reversal means
        </h2>
        
        <div className="bg-white p-12 rounded-lg border-2 border-purple-200 shadow-lg">
          <p className="text-2xl text-slate-700 leading-relaxed font-light italic">
            "The website now reflects <span className="font-medium text-purple-700">practice</span>, not listings. 
            It's a shift from transactional utility to <span className="font-medium text-purple-700">cultural credibility</span>."
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-left mt-12">
          <div className="space-y-3">
            <h3 className="font-medium text-slate-900 text-lg">2020: Transactional</h3>
            <ul className="text-slate-600 space-y-2">
              <li>• Looking for opportunities</li>
              <li>• Application-driven visits</li>
              <li>• Single-purpose browsing</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-purple-900 text-lg">2025: Cultural</h3>
            <ul className="text-slate-600 space-y-2">
              <li>• Exploring past work</li>
              <li>• Research and inspiration</li>
              <li>• Understanding practice</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
