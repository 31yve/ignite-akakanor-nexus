import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
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
  }, [isInView, value, delay]);

  return (
    <motion.div 
      ref={ref}
      className="text-center p-6 card-gradient rounded-xl border border-border shadow-card hover:shadow-glow transition-all duration-500 group"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          duration: 0.6,
          delay: delay / 1000,
          ease: "easeOut"
        }
      } : {}}
      whileHover={{ 
        y: -5,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="mb-4 flex justify-center">
        <motion.div 
          className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300"
          whileHover={{ 
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.4 }
          }}
        >
          {icon}
        </motion.div>
      </div>
      <div className="space-y-2">
        <motion.div 
          className="text-3xl md:text-4xl font-gaming font-bold text-gradient"
          key={count}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.3 }}
        >
          {count.toLocaleString()}{suffix}
        </motion.div>
        <p className="text-muted-foreground font-medium">{label}</p>
      </div>
    </motion.div>
  );
}

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    <section id="stats" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-gaming font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gradient">Powering</span>{' '}
            <span className="text-foreground">Global Gaming</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join thousands of gamers who trust our infrastructure to deliver 
            exceptional gaming experiences worldwide.
          </motion.p>
        </motion.div>

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