import { Layout } from '@/components/ui/layout';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <Layout>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
      </main>
      <Footer />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AKA Gaming Host",
            "description": "Professional gaming hosting services with instant deployment, 99.9% uptime, and enterprise-grade security.",
            "url": "https://akakanor.com",
            "logo": "https://akakanor.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-GAMING",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://discord.gg/akakanor",
              "https://twitter.com/akakanor",
              "https://github.com/akakanor"
            ]
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AKA Gaming Host",
            "description": "Level up your gaming experience with professional hosting services",
            "url": "https://akakanor.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://akakanor.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </Layout>
  );
};

export default Index;
