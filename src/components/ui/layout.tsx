import { ReactNode } from 'react';
import { ParticlesBackground } from '@/components/ParticlesBackground';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gaming-darker relative overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-hero pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}