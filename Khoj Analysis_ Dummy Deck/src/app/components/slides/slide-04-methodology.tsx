import { SlideContainer } from '@/app/components/slide-container';
import { Database, Filter, Calendar, TrendingUp } from 'lucide-react';

export function Slide04Methodology() {
  return (
    <SlideContainer>
      <div className="max-w-5xl w-full space-y-12">
        <h2 className="text-4xl font-light text-slate-900">
          How this analysis was done
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <Database className="w-8 h-8 text-slate-600 mb-3" />
            <div className="font-medium text-slate-900 mb-2">Data source</div>
            <div className="text-slate-600">GA4 data, Jan 2022–Dec 2025</div>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <TrendingUp className="w-8 h-8 text-slate-600 mb-3" />
            <div className="font-medium text-slate-900 mb-2">Baseline</div>
            <div className="text-slate-600">2020 audit as reference point</div>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <Filter className="w-8 h-8 text-slate-600 mb-3" />
            <div className="font-medium text-slate-900 mb-2">Data cleaning</div>
            <div className="text-slate-600">Bot traffic excluded</div>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <Calendar className="w-8 h-8 text-slate-600 mb-3" />
            <div className="font-medium text-slate-900 mb-2">Key metrics</div>
            <div className="text-slate-600">Engaged sessions, single-page sessions</div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg text-sm text-slate-700">
          <span className="font-medium">Note:</span> All metrics are based on engaged sessions to ensure data quality and meaningful user interactions.
        </div>
      </div>
    </SlideContainer>
  );
}
