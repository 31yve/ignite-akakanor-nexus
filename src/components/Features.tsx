import { useState, useEffect, useRef } from 'react';
import { Zap, Shield, Headphones, Globe, Server, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={ref}
      className={`group p-8 card-gradient rounded-xl border border-border shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 hover:border-primary/50 ${
        isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="mb-6">
        <div className="p-4 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors duration-300">
          {icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-gaming font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>
      
      <Button 
        variant="outline" 
        className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:border-primary"
      >
        Learn More
      </Button>
    </div>
  );
}

export function Features() {
  const features = [
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: 'Instant Deployment',
      description: 'Get your game server up and running in seconds with our automated deployment system. No technical knowledge required.',
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: 'Enterprise Security',
      description: 'Multi-layered DDoS protection, advanced firewalls, and continuous monitoring keep your servers safe 24/7.',
    },
    {
      icon: <Headphones className="w-10 h-10 text-primary" />,
      title: '24/7 Expert Support',
      description: 'Our gaming specialists are always ready to help. Discord, tickets, or live chat - we\'re here when you need us.',
    },
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: 'Global Network',
      description: 'Low latency worldwide with our premium data centers strategically located across multiple continents.',
    },
    {
      icon: <Server className="w-10 h-10 text-primary" />,
      title: 'Premium Hardware',
      description: 'Latest generation CPUs, NVMe SSDs, and unlimited bandwidth ensure optimal performance for your games.',
    },
    {
      icon: <Cpu className="w-10 h-10 text-primary" />,
      title: 'Auto Scaling',
      description: 'Seamlessly handle player surges with automatic resource scaling. Pay only for what you use.',
    },
  ];

  return (
    <section id="hosting" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gaming font-bold mb-6">
            <span className="text-foreground">Why Choose</span>{' '}
            <span className="text-gradient">AKA Gaming?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference with our cutting-edge gaming infrastructure 
            designed for performance, reliability, and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg glow-effect hover:scale-105 transition-all duration-300"
          >
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
}