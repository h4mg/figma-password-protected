import { SlideContainer } from '@/app/components/slide-container';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend } from 'recharts';
import { pagesPerUserData, usersByCountryData, engagementByCountryData, thematicsNavigationData, topSearchTerms, socialTrafficTrend } from '@/data/presentationData';

export function Slide18DeviceQuality() {
  return (
    <SlideContainer>
      <div className="max-w-5xl w-full space-y-8">
        <h2 className="text-4xl font-light text-slate-900">Quality of engagement by device</h2>
        <div className="bg-white p-8 rounded-lg border border-slate-200">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 text-slate-600">Device</th>
                <th className="text-right py-3 text-slate-600">Engagement rate</th>
                <th className="text-right py-3 text-slate-600">Pages/session</th>
                <th className="text-right py-3 text-slate-600">Avg. time (s)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="py-4 text-slate-900 font-medium">Mobile</td>
                <td className="text-right py-4 text-blue-600 font-medium">82%</td>
                <td className="text-right py-4 text-blue-600 font-medium">3.3</td>
                <td className="text-right py-4 text-slate-700">79</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-4 text-slate-900">Desktop</td>
                <td className="text-right py-4 text-slate-700">76%</td>
                <td className="text-right py-4 text-slate-700">3.2</td>
                <td className="text-right py-4 text-slate-700">81</td>
              </tr>
              <tr>
                <td className="py-4 text-slate-900">Tablet</td>
                <td className="text-right py-4 text-slate-700">68%</td>
                <td className="text-right py-4 text-slate-700">3.0</td>
                <td className="text-right py-4 text-slate-700">75</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-slate-600 text-center">Mobile wins on both engagement rate and depth of exploration</p>
      </div>
    </SlideContainer>
  );
}

export function Slide19PagesPerUser() {
  return (
    <SlideContainer>
      <div className="max-w-6xl w-full space-y-8">
        <h2 className="text-4xl font-light text-slate-900">Pages per user stability</h2>
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={pagesPerUserData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" stroke="#64748b" />
              <YAxis stroke="#64748b" domain={[2.5, 3.2]} />
              <Tooltip />
              <Line type="monotone" dataKey="pages" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 6 }} name="Pages per user" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
          <p className="text-slate-700"><span className="font-medium">Interpretation:</span> Consistent 2.9 pages per user indicates intentional, focused exploration rather than aimless browsing.</p>
        </div>
      </div>
    </SlideContainer>
  );
}

export function Slide20Geography() {
  return (
    <SlideContainer>
      <div className="max-w-6xl w-full space-y-8">
        <h2 className="text-4xl font-light text-slate-900">Geography: who comes from where</h2>
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={usersByCountryData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" stroke="#64748b" />
              <YAxis dataKey="country" type="category" stroke="#64748b" width={120} />
              <Tooltip />
              <Bar dataKey="users" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-blue-50 p-4 rounded border border-blue-200">
            <div className="text-2xl font-light text-blue-700">61.6%</div>
            <div className="text-sm text-blue-600">India (core market)</div>
          </div>
          <div className="bg-slate-50 p-4 rounded border border-slate-200">
            <div className="text-2xl font-light text-slate-700">15%</div>
            <div className="text-sm text-slate-600">United States</div>
          </div>
          <div className="bg-slate-50 p-4 rounded border border-slate-200">
            <div className="text-2xl font-light text-slate-700">7%</div>
            <div className="text-sm text-slate-600">United Kingdom</div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}

export function Slide21EngagementByMarket() {
  return (
    <SlideContainer>
      <div className="max-w-5xl w-full space-y-8">
        <h2 className="text-4xl font-light text-slate-900">Engagement depth by market</h2>
        <div className="bg-white p-8 rounded-lg border border-slate-200">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 text-slate-600">Country</th>
                <th className="text-right py-3 text-slate-600">2023</th>
                <th className="text-right py-3 text-slate-600">2024</th>
                <th className="text-right py-3 text-slate-600">2025</th>
              </tr>
            </thead>
            <tbody>
              {engagementByCountryData.map((item, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="py-4 text-slate-900">{item.country}</td>
                  <td className="text-right py-4 text-slate-700">{item['2023']}s</td>
                  <td className="text-right py-4 text-slate-700">{item['2024']}s</td>
                  <td className="text-right py-4 text-blue-600 font-medium">{item['2025']}s</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-slate-600">India maintains consistency at 77s; UK shows strongest Western engagement at 86s</p>
      </div>
    </SlideContainer>
  );
}

export function Slide22Thematics() {
  const COLORS = ['#3b82f6', '#f59e0b', '#8b5cf6'];
  return (
    <SlideContainer>
      <div className="max-w-6xl w-full space-y-8">
        <h2 className="text-4xl font-light text-slate-900">Thematics as discovery layer</h2>
        <div className="bg-white p-6 rounded-lg border border-slate-200 flex justify-center">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie data={thematicsNavigationData} cx="50%" cy="50%" labelLine={false} label={(entry) => `${entry.type}: ${entry.value}%`} outerRadius={120} fill="#8884d8" dataKey="value">
                {thematicsNavigationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
          <p className="text-slate-700"><span className="font-medium">Key insight:</span> 93% internal navigation shows thematics work as a discovery tool, not an entry point. Low search entry is success, not failure.</p>
        </div>
      </div>
    </SlideContainer>
  );
}

export function Slide23Search() {
  return (
    <SlideContainer>
      <div className="max-w-6xl w-full space-y-8">
        <h2 className="text-4xl font-light text-slate-900">Search as known-item lookup</h2>
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={topSearchTerms} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" stroke="#64748b" />
              <YAxis dataKey="term" type="category" stroke="#64748b" width={150} />
              <Tooltip />
              <Bar dataKey="searches" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-purple-50 p-4 rounded border border-purple-200">
            <div className="font-medium text-purple-900">Artist names dominate</div>
            <div className="text-sm text-purple-600 mt-1">Users search for specific participants they already know</div>
          </div>
          <div className="bg-slate-50 p-4 rounded border border-slate-200">
            <div className="font-medium text-slate-900">2.3 searches per user</div>
            <div className="text-sm text-slate-600 mt-1">Indicates targeted research behavior</div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}

export function Slide24Confirms() {
  return (
    <SlideContainer className="bg-green-50">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center space-y-3">
          <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Section D: Interpretation & Synthesis</div>
          <h2 className="text-4xl font-light text-slate-900">What the data confirms</h2>
        </div>
        <div className="space-y-4">
          {['Exploratory users: people navigate across content types', 'Cross-linking works: internal navigation drives discovery', 'Programmes are the core narrative: not opportunities', 'Archives matter: one-third of programme views are historical'].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-lg border border-green-200 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-700 font-medium">{i + 1}</span>
              </div>
              <p className="text-lg text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
}

export function Slide25Surprises() {
  return (
    <SlideContainer className="bg-purple-50">
      <div className="max-w-5xl w-full space-y-8">
        <h2 className="text-4xl font-light text-slate-900">What surprised us</h2>
        <div className="space-y-4">
          {[
            { title: 'Strength of archives', desc: 'We expected some archival interest, but not 33% sustained engagement' },
            { title: 'Mobile quality', desc: 'Mobile now exceeds desktop in both engagement and depth—not typical for content-heavy sites' },
            { title: 'Dark social indicators', desc: '28% direct traffic suggests WhatsApp, email shares, and offline-to-online journeys' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-medium text-purple-900 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
}

export function Slide26PartiallyWorked() {
  return (
    <SlideContainer>
      <div className="max-w-6xl w-full space-y-8">
        <h2 className="text-4xl font-light text-slate-900">What partially worked</h2>
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={socialTrafficTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" stroke="#64748b" />
              <YAxis yAxisId="left" stroke="#64748b" label={{ value: 'Absolute users', angle: -90, position: 'insideLeft' }} />
              <YAxis yAxisId="right" orientation="right" stroke="#64748b" label={{ value: 'Share %', angle: 90, position: 'insideRight' }} />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="absolute" stroke="#3b82f6" strokeWidth={2} name="Absolute social users" />
              <Line yAxisId="right" type="monotone" dataKey="percentage" stroke="#f59e0b" strokeWidth={2} name="Social share %" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
          <p className="text-slate-700"><span className="font-medium">Assessment:</span> Social traffic grew 105% in absolute terms (5,400 → 11,050), but share remains at 13%—below the 20–25% benchmark for cultural institutions.</p>
        </div>
      </div>
    </SlideContainer>
  );
}

export function Slide27Tensions() {
  return (
    <SlideContainer>
      <div className="max-w-5xl w-full space-y-12">
        <h2 className="text-4xl font-light text-slate-900">Tensions to hold</h2>
        <div className="space-y-8">
          {[
            { left: 'Archive', right: 'Immediacy', desc: 'Balancing historical depth with current programme visibility' },
            { left: 'Discovery', right: 'Findability', desc: 'Encouraging exploration while ensuring known-item access' },
            { left: 'Researchers', right: 'Applicants', desc: 'Serving both cultural scholars and opportunity seekers' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <div className="text-lg font-medium text-blue-700">{item.left}</div>
                <div className="h-px flex-1 mx-6 bg-slate-300" />
                <div className="text-lg font-medium text-purple-700">{item.right}</div>
              </div>
              <p className="text-slate-600 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-500 italic">These tensions aren't problems to solve—they're dynamics to manage</p>
      </div>
    </SlideContainer>
  );
}

export function Slide28ImpactReport() {
  return (
    <SlideContainer className="bg-slate-50">
      <div className="max-w-5xl w-full space-y-12">
        <div className="text-center space-y-3">
          <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Section E: Implications for the Future</div>
          <h2 className="text-4xl font-light text-slate-900">What this enables for the Impact Report</h2>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-medium text-slate-900 mb-2">Evidence-backed claims</h3>
            <p className="text-sm text-slate-600">Five years of behavioral data validates digital strategy</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
            <div className="text-4xl mb-3">📈</div>
            <h3 className="font-medium text-slate-900 mb-2">Clear digital narrative</h3>
            <p className="text-sm text-slate-600">From transactional to cultural—a story of transformation</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-medium text-slate-900 mb-2">Measurable outcomes</h3>
            <p className="text-sm text-slate-600">Concrete metrics show website investment ROI</p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}

export function Slide29Funders() {
  return (
    <SlideContainer>
      <div className="max-w-5xl w-full space-y-12">
        <h2 className="text-4xl font-light text-slate-900">What this shows funders</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-slate-900">2020 investment paid off</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-green-600">✓</span>
                <span>Single-page visits reduced by 38%</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600">✓</span>
                <span>Traffic nearly doubled</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600">✓</span>
                <span>Mobile experience transformed</span>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-slate-900">Digital infrastructure sustains impact</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-blue-600">✓</span>
                <span>Archives generate ongoing value</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600">✓</span>
                <span>Content longevity demonstrated</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600">✓</span>
                <span>Institutional memory preserved</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
          <p className="text-slate-700 italic">"Digital investment isn't overhead—it's a multiplier for programme impact."</p>
        </div>
      </div>
    </SlideContainer>
  );
}

export function Slide30ProgrammeTeam() {
  return (
    <SlideContainer>
      <div className="max-w-5xl w-full space-y-12">
        <h2 className="text-4xl font-light text-slate-900">Implications for the programme team</h2>
        <div className="space-y-6">
          {[
            { title: 'Documentation matters', desc: 'Every programme page becomes a lasting research resource—archival views prove this' },
            { title: 'Cross-linking is not cosmetic', desc: 'Internal navigation drives 93% of thematics traffic. Connections create discovery' },
            { title: 'Updating content has payoff', desc: 'Past programmes still attract 33% of views. Maintenance is worth the effort' },
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-medium text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
}

export function Slide31FutureStrategy() {
  return (
    <SlideContainer>
      <div className="max-w-5xl w-full space-y-12">
        <h2 className="text-4xl font-light text-slate-900">Signals for future digital strategy</h2>
        <div className="space-y-4">
          {[
            { priority: 'High', item: 'Strengthen archive positioning', desc: 'Consider dedicated archive discovery features' },
            { priority: 'High', item: 'Improve social → site pathways', desc: 'Optimize social sharing and landing experiences' },
            { priority: 'Medium', item: 'Continue mobile-first thinking', desc: 'Mobile is now the primary experience' },
            { priority: 'Medium', item: 'Explore dark social attribution', desc: 'Better understand WhatsApp/email sharing patterns' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-lg border border-slate-200">
              <div className={`px-3 py-1 rounded text-xs font-medium ${item.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                {item.priority}
              </div>
              <div className="flex-1">
                <div className="font-medium text-slate-900 mb-1">{item.item}</div>
                <div className="text-sm text-slate-600">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
}

export function Slide32AIReadiness() {
  return (
    <SlideContainer>
      <div className="max-w-5xl w-full space-y-12">
        <h2 className="text-4xl font-light text-slate-900">Note on AI readiness</h2>
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg border border-indigo-200">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Khoj's structured content model—programmes linked to participants, thematics, and dates—is already well-positioned for emerging AI applications.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900">Current strength</h4>
              <p className="text-sm text-slate-600">Clean data architecture, consistent taxonomy, rich metadata</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900">Future potential</h4>
              <p className="text-sm text-slate-600">Semantic search, personalized recommendations, research assistants</p>
            </div>
          </div>
        </div>
        <p className="text-center text-slate-500 italic">Structured content today is the asset for tomorrow's interfaces</p>
      </div>
    </SlideContainer>
  );
}

export function Slide33WhatThisGives() {
  return (
    <SlideContainer className="bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl text-center space-y-16">
        <div className="text-sm font-medium text-slate-400 uppercase tracking-wide">Section F: Closing</div>
        <h2 className="text-5xl font-light text-white">What this analysis gives Khoj</h2>
        <div className="grid grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="text-6xl font-light text-blue-400">Clarity</div>
            <p className="text-slate-300">Understanding what worked and why</p>
          </div>
          <div className="space-y-4">
            <div className="text-6xl font-light text-purple-400">Confidence</div>
            <p className="text-slate-300">Evidence-backed digital strategy</p>
          </div>
          <div className="space-y-4">
            <div className="text-6xl font-light text-green-400">Direction</div>
            <p className="text-slate-300">Signals for what comes next</p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}

export function Slide34OpenQuestions() {
  return (
    <SlideContainer className="bg-slate-50">
      <div className="max-w-4xl w-full space-y-12">
        <h2 className="text-4xl font-light text-slate-900">Open questions</h2>
        <div className="space-y-6">
          {[
            'What should the website amplify next?',
            'What can it stop trying to be?',
            'How do we better surface the archive without compromising immediacy?',
            'What would meaningful social growth look like for Khoj?',
          ].map((q, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border-l-4 border-blue-400 shadow-sm">
              <p className="text-xl text-slate-700">{q}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-500 italic mt-12">These questions invite discussion, not answers</p>
      </div>
    </SlideContainer>
  );
}

export function Slide35ThankYou() {
  return (
    <SlideContainer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-3xl text-center space-y-8">
        <h2 className="text-6xl font-light text-white">Thank you</h2>
        <div className="h-px w-48 bg-slate-600 mx-auto" />
        <p className="text-xl text-slate-400">Khoj Website Explorations 2020–2025</p>
      </div>
    </SlideContainer>
  );
}
