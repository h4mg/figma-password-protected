import { SlideContainer } from '@/app/components/slide-container';
import { CheckCircle2, TrendingUp, Archive, Users, AlertCircle } from 'lucide-react';

export function Slide06ExecutiveSummary() {
  return (
    <SlideContainer className="bg-slate-50">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center space-y-3">
          <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
            Section B: Five-Year Performance Review
          </div>
          <h2 className="text-4xl font-light text-slate-900">
            Executive summary
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
            <CheckCircle2 className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">Core goals achieved</h3>
            <p className="text-slate-600">
              Single-page visits reduced from 69% to 43%, exceeding our targets
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm">
            <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">Audience exploration increased</h3>
            <p className="text-slate-600">
              Users now view 2.9 pages on average, up from 2.7 in 2020
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-purple-200 shadow-sm">
            <Users className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">Programmes dominate attention</h3>
            <p className="text-slate-600">
              Programmes now receive 3.8× more views than opportunities
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-indigo-200 shadow-sm">
            <Archive className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">Archives show lasting value</h3>
            <p className="text-slate-600">
              33% of programme views are for past events and residencies
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-amber-200 shadow-sm col-span-2">
            <AlertCircle className="w-10 h-10 text-amber-600 mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">Social remains under target</h3>
            <p className="text-slate-600">
              Social acquisition grew in absolute numbers but remains at 13% share, below industry benchmarks for cultural institutions
            </p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
