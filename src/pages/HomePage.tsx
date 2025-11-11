// src/pages/HomePage.tsx
import { SEO } from "../components/layout/SEO";
import { Hero } from "../components/sections/Hero";
import { AboutUs } from "../components/sections/AboutUs";
import OurEthos from "../components/sections/OurEthos";
import { StorylineSection } from "../components/sections/StorylineSection";
import { QuoteBanner } from "../components/sections/QuoteBanner";
import { PortfolioGrid } from "../components/sections/PortfolioGrid";

export function HomePage() {
  return (
    <>
      <SEO
        title="Suorya Export Import Enterprise | Ribbons, Trims & Packaging"
        description="Discover Suorya’s premium ribbons, trims, and packaging collections — designed for elegance, creativity, and export-grade craftsmanship."
        url="https://suorya.com"
      />
      <Hero />
      <AboutUs />
      <OurEthos />
      <StorylineSection
        title="Creativity & Collaboration"
        subtitle="Co-Creating Value, Season After Season"
        description="At Suorya, creativity is a collaborative journey. Our design team anchors the process from concept to creation - brainstorming, sketching, sampling, and refining until the idea feels just right and production friendly. Once the design is finalised, our production team brings it to life with precision and consistency. We embrace diverse perspectives, encourage experimentation, and value the harmony that comes when people create together. Every season, we explore new materials, techniques, colours, and textures to ensure each product is thoughtful, relevant, and beautifully crafted. It’s this blend of imagination and teamwork that shapes the collections our customers love."
        imageUrl="/home/creative.png"
        imageAlt="Creative collaboration at Suorya"
        reverse={true}
        bgColor="bg-stone-50"
      />
      <QuoteBanner />
      <PortfolioGrid />
    </>
  );
}
