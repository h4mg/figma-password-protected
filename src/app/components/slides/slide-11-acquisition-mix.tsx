import { SlideContainer } from '@/app/components/slide-container';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { acquisitionMixData } from '@/data/presentationData';

export function Slide11AcquisitionMix() {
  const formattedData = acquisitionMixData.map(item => ({
    year: item.year,
    Organic: item.organic,
    Direct: item.direct,
    Social: item.social,
    Referral: item.referral,
    Email: item.email,
  }));

  return (
    <SlideContainer>
      <div className="max-w-6xl w-full space-y-8">
        <div>
          <h2 className="text-4xl font-light text-slate-900 mb-3">
            Acquisition mix reality check
          </h2>
          <p className="text-lg text-slate-600">
            Channel distribution remains stable; growth comes from scale
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={formattedData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                type="number"
                stroke="#64748b"
                style={{ fontSize: '14px' }}
                label={{ value: 'Percentage (%)', position: 'bottom' }}
              />
              <YAxis 
                dataKey="year"
                type="category"
                stroke="#64748b"
                style={{ fontSize: '14px' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="Organic" stackId="a" fill="#10b981" />
              <Bar dataKey="Direct" stackId="a" fill="#3b82f6" />
              <Bar dataKey="Social" stackId="a" fill="#f59e0b" />
              <Bar dataKey="Referral" stackId="a" fill="#8b5cf6" />
              <Bar dataKey="Email" stackId="a" fill="#ec4899" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="bg-green-50 p-3 rounded border border-green-200">
            <div className="font-medium text-green-900">Organic: 54%</div>
            <div className="text-green-600">Search remains dominant</div>
          </div>
          <div className="bg-blue-50 p-3 rounded border border-blue-200">
            <div className="font-medium text-blue-900">Direct: 28%</div>
            <div className="text-blue-600">Brand recall + dark social</div>
          </div>
          <div className="bg-amber-50 p-3 rounded border border-amber-200">
            <div className="font-medium text-amber-900">Social: 13%</div>
            <div className="text-amber-600">Absolute growth, share stable</div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
