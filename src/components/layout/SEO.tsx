// src/components/layout/SEO.tsx
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  type?: string;
  publishedTime?: string;
}

export function SEO({
  title,
  description = "Suorya Export Import Enterprise — Premium Ribbons, Trims & Packaging",
  image = "/home/favicon.png",
  url = "https://suorya.com",
  keywords = "ribbons, trims, packaging, suorya, decor, wholesale ribbons, crafts",
  type = "website",
  publishedTime,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Suorya" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === "article" ? "Article" : "WebPage",
          name: title,
          description,
          url,
          image,
          datePublished: publishedTime,
          publisher: {
            "@type": "Organization",
            name: "Suorya Exports",
            logo: { "@type": "ImageObject", url: "https://suorya.com/home/favicon.png" },
          },
        })}
      </script>
    </Helmet>
  );
}
