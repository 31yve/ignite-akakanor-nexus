import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Shield, Headphones, Globe, Server, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div 
      ref={ref}
      className="group p-8 card-gradient rounded-xl border border-border shadow-card hover:shadow-glow transition-all duration-500 hover:border-primary/50"
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.1,
          ease: "easeOut"
        }
      } : {}}
      whileHover={{
        scale: 1.05,
        y: -10,
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div className="mb-6">
        <motion.div 
          className="p-4 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors duration-300"
          whileHover={{
            rotate: [0, -5, 5, 0],
            scale: 1.1,
            transition: { duration: 0.4 }
          }}
        >
          {icon}
        </motion.div>
      </motion.div>
      
      <motion.h3 
        className="text-2xl font-gaming font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-muted-foreground leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.4 }}
      >
        {description}
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.1 + 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          variant="outline" 
          className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:border-primary"
        >
          Learn More
        </Button>
      </motion.div>
    </motion.div>
  );
}

export function Features() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    <section id="hosting" ref={ref} className="py-20 relative">
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
            <span className="text-foreground">Why Choose</span>{' '}
            <span className="text-gradient">AKA Gaming?</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Experience the difference with our cutting-edge gaming infrastructure 
            designed for performance, reliability, and scalability.
          </motion.p>
        </motion.div>

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

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg glow-effect transition-all duration-300"
            >
              Explore All Features
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}