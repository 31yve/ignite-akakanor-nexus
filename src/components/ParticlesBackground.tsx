export function ParticlesBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {/* Simplified particle effect using CSS */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-30" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse opacity-40 animation-delay-1000" />
      <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-pulse opacity-20 animation-delay-2000" />
      <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-primary rounded-full animate-pulse opacity-30 animation-delay-1500" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-25 animation-delay-3000" />
    </div>
  );
}