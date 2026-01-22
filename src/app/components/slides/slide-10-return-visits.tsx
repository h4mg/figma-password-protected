import { SlideContainer } from '@/app/components/slide-container';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { newVsReturningData } from '@/data/presentationData';

export function Slide10ReturnVisits() {
  return (
    <SlideContainer>
      <div className="max-w-6xl w-full space-y-8">
        <div>
          <h2 className="text-4xl font-light text-slate-900 mb-3">
            Increasing return visits
          </h2>
          <p className="text-lg text-slate-600">
            Loyalty metrics show 45% growth in returning users
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={newVsReturningData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="year" 
                stroke="#64748b"
                style={{ fontSize: '14px' }}
              />
              <YAxis 
                stroke="#64748b"
                style={{ fontSize: '14px' }}
                label={{ value: 'Users', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="new" stackId="a" fill="#94a3b8" name="New users" />
              <Bar dataKey="returning" stackId="a" fill="#3b82f6" name="Returning users" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div className="text-2xl font-light text-slate-900 mb-1">10,000 → 35,000</div>
            <div className="text-sm text-slate-600">Returning users (250% growth)</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="text-2xl font-light text-blue-900 mb-1">41%</div>
            <div className="text-sm text-blue-600">Returning user share in 2025</div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
