import { SlideContainer } from '@/app/components/slide-container';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { activeUsersData } from '@/data/presentationData';

export function Slide09TrafficGrowth() {
  return (
    <SlideContainer>
      <div className="max-w-6xl w-full space-y-8">
        <div>
          <h2 className="text-5xl font-light text-[#231e20] mb-4 tracking-tight">
            Growing overall traffic
          </h2>
          <p className="text-lg text-[#231e20]/70 font-light tracking-wide">
            Sustainable growth with consistent floor and expanding ceiling
          </p>
        </div>

        <div className="bg-white p-8 border border-[#231e20]">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={activeUsersData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#231e20" opacity={0.1} />
              <XAxis 
                dataKey="year" 
                stroke="#231e20"
                style={{ fontSize: '14px', fontFamily: 'monospace' }}
              />
              <YAxis 
                stroke="#231e20"
                style={{ fontSize: '14px', fontFamily: 'monospace' }}
                label={{ value: 'Active Users', angle: -90, position: 'insideLeft', fill: '#231e20' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #231e20',
                  fontFamily: 'monospace'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="high" 
                stroke="#3b82f6" 
                fill="#dbeafe"
                fillOpacity={0.3}
                name="Peak month"
              />
              <Area 
                type="monotone" 
                dataKey="users" 
                stroke="#3b82f6" 
                fill="#3b82f6"
                strokeWidth={3}
                name="Average"
              />
              <Area 
                type="monotone" 
                dataKey="low" 
                stroke="#3b82f6" 
                fill="#eff6ff"
                fillOpacity={0.5}
                name="Lowest month"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-between text-sm text-[#231e20]/70 uppercase tracking-wide font-mono">
          <div>Monthly floor nearly doubled from 38K to 72K</div>
          <div>Ceiling consistently exceeded, reaching 98K in 2025</div>
        </div>
      </div>
    </SlideContainer>
  );
}