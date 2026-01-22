import { SlideContainer } from '@/app/components/slide-container';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { engagementByDeviceData, pagesPerSessionByDeviceData } from '@/data/presentationData';

export function Slide17MobileMoment() {
  return (
    <SlideContainer>
      <div className="max-w-6xl w-full space-y-8">
        <div>
          <h2 className="text-4xl font-light text-slate-900 mb-3">
            The mobile moment
          </h2>
          <p className="text-lg text-slate-600">
            Mobile engagement overtakes desktop in 2023
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="text-lg font-medium text-slate-900 mb-4">Engagement rate by device</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementByDeviceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="desktop" stroke="#64748b" strokeWidth={2} name="Desktop" />
                <Line type="monotone" dataKey="mobile" stroke="#3b82f6" strokeWidth={2} name="Mobile" />
                <Line type="monotone" dataKey="tablet" stroke="#94a3b8" strokeWidth={2} name="Tablet" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="text-lg font-medium text-slate-900 mb-4">Pages per session by device</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={pagesPerSessionByDeviceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="desktop" stroke="#64748b" strokeWidth={2} name="Desktop" />
                <Line type="monotone" dataKey="mobile" stroke="#3b82f6" strokeWidth={2} name="Mobile" />
                <Line type="monotone" dataKey="tablet" stroke="#94a3b8" strokeWidth={2} name="Tablet" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-blue-900">
            <span className="font-medium">Key finding:</span> Mobile users now have higher engagement (82%) and view more pages per session (3.3) than desktop users.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
}
