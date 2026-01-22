import { SlideContainer } from '@/app/components/slide-container';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { entryVsNavigationData } from '@/data/presentationData';

export function Slide16EntryNavigation() {
  return (
    <SlideContainer className="bg-slate-50">
      <div className="max-w-6xl w-full space-y-8">
        <div className="text-center space-y-3">
          <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
            Section C: How Users Navigate Today
          </div>
          <h2 className="text-4xl font-light text-slate-900">
            Entry vs navigation
          </h2>
          <p className="text-lg text-slate-600">
            Validating information architecture decisions
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={entryVsNavigationData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                type="number"
                stroke="#64748b"
                style={{ fontSize: '14px' }}
                label={{ value: 'Percentage (%)', position: 'bottom' }}
              />
              <YAxis 
                dataKey="page"
                type="category"
                stroke="#64748b"
                style={{ fontSize: '14px' }}
                width={120}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="entry" fill="#f59e0b" name="Entry %" />
              <Bar dataKey="pageviews" fill="#3b82f6" name="Pageview share %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="bg-amber-50 p-4 rounded border border-amber-200">
            <div className="font-medium text-amber-900 mb-2">Entry points</div>
            <div className="text-amber-700">Participants (28%), Homepage (22%)</div>
          </div>
          <div className="bg-blue-50 p-4 rounded border border-blue-200">
            <div className="font-medium text-blue-900 mb-2">Destinations</div>
            <div className="text-blue-700">Programmes (38%), Thematics (22%)</div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
