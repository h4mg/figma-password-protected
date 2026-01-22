import { SlideContainer } from '@/app/components/slide-container';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { singlePageSessionData, engagementTimeData } from '@/data/presentationData';

export function Slide08SinglePage() {
  return (
    <SlideContainer>
      <div className="max-w-6xl w-full space-y-8">
        <div>
          <h2 className="text-4xl font-light text-slate-900 mb-3">
            Reducing single-page visits
          </h2>
          <p className="text-lg text-slate-600">
            A 26-percentage-point improvement in user exploration
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={singlePageSessionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="year" 
                stroke="#64748b"
                style={{ fontSize: '14px' }}
              />
              <YAxis 
                stroke="#64748b"
                style={{ fontSize: '14px' }}
                label={{ value: 'Single-page sessions (%)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="percentage" 
                stroke="#ef4444" 
                strokeWidth={3}
                name="Single-page sessions %"
                dot={{ fill: '#ef4444', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-3 gap-6 text-center">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <div className="text-3xl font-light text-red-700 mb-1">69%</div>
            <div className="text-sm text-red-600">2020 baseline</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="text-3xl font-light text-green-700 mb-1">43%</div>
            <div className="text-sm text-green-600">2025 result</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="text-3xl font-light text-blue-700 mb-1">77s</div>
            <div className="text-sm text-blue-600">Avg. engagement time</div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
