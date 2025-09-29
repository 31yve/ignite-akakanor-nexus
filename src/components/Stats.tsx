import { useState, useEffect, useRef } from 'react';
import { Server, Shield, Clock, Users } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

function StatItem({ icon, value, suffix, label, delay = 0 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const counter = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, value, delay]);

  return (
    <div 
      ref={ref}
      className={`text-center p-6 card-gradient rounded-xl border border-border shadow-card hover:shadow-glow transition-all duration-500 group ${
        isVisible ? 'animate-countUp' : 'opacity-0'
      }`}
    >
      <div className="mb-4 flex justify-center">
        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
          {icon}
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-3xl md:text-4xl font-gaming font-bold text-gradient">
          {count.toLocaleString()}{suffix}
        </div>
        <p className="text-muted-foreground font-medium">{label}</p>
      </div>
    </div>
  );
}

export function Stats() {
  const stats = [
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      value: 15000,
      suffix: '+',
      label: 'Active Servers',
      delay: 0,
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      value: 99.9,
      suffix: '%',
      label: 'Uptime SLA',
      delay: 200,
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      value: 100,
      suffix: '%',
      label: 'DDoS Protection',
      delay: 400,
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      value: 50000,
      suffix: '+',
      label: 'Happy Gamers',
      delay: 600,
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gaming font-bold mb-6">
            <span className="text-gradient">Powering</span>{' '}
            <span className="text-foreground">Global Gaming</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of gamers who trust our infrastructure to deliver 
            exceptional gaming experiences worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}