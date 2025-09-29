import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gaming-darker relative overflow-hidden">
      {/* Background particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-particle opacity-30" style={{ animationDuration: '20s', animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-particle opacity-40" style={{ animationDuration: '25s', animationDelay: '5s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-particle opacity-20" style={{ animationDuration: '30s', animationDelay: '10s' }} />
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-primary rounded-full animate-particle opacity-30" style={{ animationDuration: '22s', animationDelay: '7s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-particle opacity-25" style={{ animationDuration: '28s', animationDelay: '12s' }} />
      </div>
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-hero pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}