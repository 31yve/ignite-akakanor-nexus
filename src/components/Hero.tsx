import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Users, MessageCircle } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-glow rounded-full opacity-20 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-glow rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow rounded-full opacity-5" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`max-w-4xl mx-auto space-y-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-gaming font-bold leading-tight">
              <span className="text-gradient">Level Up</span>
              <br />
              <span className="text-foreground">Your Gaming</span>
              <br />
              <span className="text-gradient">Experience</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Professional gaming hosting services with instant deployment, 99.9% uptime, 
              and enterprise-grade security. Your game, our power.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg glow-effect group transition-all duration-300 hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Deploy Game Server
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 text-lg group transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Discord
              <Users className="w-5 h-5 ml-2 group-hover:bounce" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 opacity-80">
            <p className="text-muted-foreground mb-6 text-sm uppercase tracking-wide font-medium">
              Trusted by thousands of gamers worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-glow" />
                <span>DDoS Protected</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                <span>Instant Setup</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}