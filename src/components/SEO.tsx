import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export function SEO({ 
  title = "AKA Gaming Host - Professional Gaming Server Hosting",
  description = "Level up your gaming experience with professional hosting services. Instant deployment, 99.9% uptime, enterprise-grade security, and 24/7 support.",
  canonical = "https://akakanor.com",
  ogImage = "https://akakanor.com/og-image.png"
}: SEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://akakanor.com/#organization",
        "name": "AKA Gaming Host",
        "description": description,
        "url": "https://akakanor.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://akakanor.com/logo.png",
          "width": 512,
          "height": 512
        },
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
      },
      {
        "@type": "WebSite",
        "@id": "https://akakanor.com/#website",
        "url": "https://akakanor.com",
        "name": title,
        "description": description,
        "publisher": {
          "@id": "https://akakanor.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://akakanor.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="gaming server hosting, game servers, minecraft hosting, discord bots, VPS hosting, DDoS protection" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="AKA Gaming Host" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:creator" content="@akakanor" />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Performance & Preloading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@400;700;900&display=swap" as="style" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />

      {/* Additional Meta */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="AKA Gaming Host" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}