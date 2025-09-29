import { Layout } from '@/components/ui/layout';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Header />
        <main>
          <Hero />
          <Stats />
          <Features />
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Index;
