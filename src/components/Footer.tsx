import { Shield, Zap, Github, Twitter, MessageCircle, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Game Server Hosting', href: '#' },
      { name: 'VPS Hosting', href: '#' },
      { name: 'Private Nodes', href: '#' },
      { name: 'Dedicated Servers', href: '#' },
    ],
    support: [
      { name: 'Documentation', href: '#' },
      { name: 'Support Center', href: '#' },
      { name: 'Discord Community', href: '#' },
      { name: 'System Status', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Refund Policy', href: '#' },
      { name: 'SLA', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Discord', icon: MessageCircle, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:support@akakanor.com' },
  ];

  return (
    <footer className="relative border-t border-border bg-gaming-darker">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-glow rounded-full opacity-5" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-glow rounded-full opacity-3" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Shield className="w-8 h-8 text-primary animate-glow" />
                <Zap className="w-4 h-4 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <span className="text-2xl font-gaming font-bold text-gradient">
                AKA Gaming
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Professional gaming hosting services with enterprise-grade infrastructure. 
              Level up your gaming experience with our reliable, secure, and fast servers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-gaming-accent rounded-lg hover:bg-primary hover:scale-110 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-gaming font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-gaming font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-gaming font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-gaming font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} AKA Gaming Host. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}