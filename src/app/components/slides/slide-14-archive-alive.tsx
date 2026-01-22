import { SlideContainer } from '@/app/components/slide-container';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { archivalProgrammesData } from '@/data/presentationData';

export function Slide14ArchiveAlive() {
  return (
    <SlideContainer>
      <div className="max-w-6xl w-full space-y-8">
        <div>
          <h2 className="text-4xl font-light text-slate-900 mb-3">
            The archive is alive
          </h2>
          <p className="text-lg text-slate-600">
            One-third of programme views are for past events
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={archivalProgrammesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="year" 
                stroke="#64748b"
                style={{ fontSize: '14px' }}
              />
              <YAxis 
                stroke="#64748b"
                style={{ fontSize: '14px' }}
                label={{ value: 'Programme Pageviews', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="current" stackId="a" fill="#3b82f6" name="Current programmes" />
              <Bar dataKey="archival" stackId="a" fill="#8b5cf6" name="Archival programmes" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 text-center">
            <div className="text-3xl font-light text-indigo-700 mb-1">33%</div>
            <div className="text-sm text-indigo-600">Archival programme views</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
            <div className="text-3xl font-light text-purple-700 mb-1">62K</div>
            <div className="text-sm text-purple-600">Archival views in 2025</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
            <div className="text-3xl font-light text-blue-700 mb-1">94%</div>
            <div className="text-sm text-blue-600">Growth since 2022</div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
