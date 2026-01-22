import React from 'react';

interface SlideContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function SlideContainer({ children, className = '' }: SlideContainerProps) {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center p-12 bg-[#f2f0f2] ${className}`}>
      {children}
    </div>
  );
}