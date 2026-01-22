import { SlideContainer } from '@/app/components/slide-container';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { contentTypeData } from '@/data/presentationData';

export function Slide12GreatReversal() {
  return (
    <SlideContainer className="bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-6xl w-full space-y-8">
        <div>
          <h2 className="text-4xl font-light text-slate-900 mb-3">
            The great reversal: opportunities → programmes
          </h2>
          <p className="text-lg text-slate-600">
            A fundamental shift in how the website is used
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-lg">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={contentTypeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="year" 
                stroke="#64748b"
                style={{ fontSize: '14px' }}
              />
              <YAxis 
                stroke="#64748b"
                style={{ fontSize: '14px' }}
                label={{ value: 'Pageviews', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="opportunities" fill="#f59e0b" name="Opportunities" />
              <Bar dataKey="programmes" fill="#8b5cf6" name="Programmes" />
              <Bar dataKey="participants" fill="#3b82f6" name="Participants" />
              <Bar dataKey="about" fill="#10b981" name="About" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-around">
          <div className="text-center">
            <div className="text-4xl font-light text-amber-600 mb-2">2020</div>
            <div className="text-sm text-slate-600">Opportunities dominated</div>
            <div className="text-xs text-slate-500">52% of all pageviews</div>
          </div>
          <div className="flex items-center">
            <div className="text-6xl text-slate-300">→</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-purple-600 mb-2">2025</div>
            <div className="text-sm text-slate-600">Programmes lead</div>
            <div className="text-xs text-slate-500">3.8× more than opportunities</div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
