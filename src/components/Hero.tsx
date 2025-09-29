import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Users, MessageCircle } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y, opacity }}
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-glow rounded-full opacity-20"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-glow rounded-full opacity-10"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow rounded-full opacity-5"
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear",
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
          {/* Main Heading */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-gaming font-bold leading-tight">
              <motion.span 
                className="text-gradient inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Level Up
              </motion.span>
              <br />
              <motion.span 
                className="text-foreground inline-block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Your Gaming
              </motion.span>
              <br />
              <motion.span 
                className="text-gradient inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Experience
              </motion.span>
            </h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Professional gaming hosting services with instant deployment, 99.9% uptime, 
              and enterprise-grade security. Your game, our power.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg glow-effect group transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Play className="w-5 h-5 mr-2" />
                </motion.div>
                Deploy Game Server
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 text-lg group transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Discord
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Users className="w-5 h-5 ml-2" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div className="pt-12 opacity-80" variants={itemVariants}>
            <motion.p 
              className="text-muted-foreground mb-6 text-sm uppercase tracking-wide font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Trusted by thousands of gamers worldwide
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6, staggerChildren: 0.1 }}
            >
              {[
                { color: "bg-green-500", text: "99.9% Uptime" },
                { color: "bg-primary", text: "DDoS Protected" },
                { color: "bg-blue-500", text: "24/7 Support" },
                { color: "bg-purple-500", text: "Instant Setup" }
              ].map((item, index) => (
                <motion.div 
                  key={item.text}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div 
                    className={`w-3 h-3 ${item.color} rounded-full`}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                  <span className="whitespace-nowrap">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0], opacity: 1 }}
        transition={{ 
          y: { duration: 2, repeat: Infinity },
          opacity: { duration: 0.6, delay: 2 }
        }}
        initial={{ opacity: 0 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            const nextSection = document.querySelector('#stats');
            nextSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <motion.div 
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ 
              y: [0, 6, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}