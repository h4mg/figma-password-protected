import { SlideContainer } from '@/app/components/slide-container';
import { BookOpen, Users, TrendingUp } from 'lucide-react';

export function Slide15ArchivalImportance() {
  return (
    <SlideContainer>
      <div className="max-w-5xl w-full space-y-12">
        <h2 className="text-4xl font-light text-slate-900">
          Why archival engagement matters
        </h2>

        <div className="grid grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto">
              <BookOpen className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-medium text-slate-900">Research value</h3>
            <p className="text-slate-600">
              Scholars and curators use the archive to understand Khoj's historical contribution to contemporary art
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-medium text-slate-900">Institutional memory</h3>
            <p className="text-slate-600">
              A living archive demonstrates continuity and depth of practice over two decades
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-medium text-slate-900">Funder confidence</h3>
            <p className="text-slate-600">
              Longevity of digital content shows sustained impact beyond individual events
            </p>
          </div>
        </div>

        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 text-slate-700">
          <p className="italic">
            The archive isn't just documentation—it's an active resource that continues to generate value years after programmes conclude.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
}
