import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { StorylineSection } from "./components/StorylineSection";
import { VisionSection } from "./components/VisionSection";
import { ProductCatalog } from "./components/ProductCatalog";
import { PortfolioGrid } from "./components/PortfolioGrid";
import { ContactPage } from "./components/ContactPage";
import { CategoryLandingPage } from "./components/CategoryLandingPage";
import { SubcategoryDetailPage } from "./components/SubcategoryDetailPage";
import { ScrollableCategoryPage } from "./components/ScrollableCategoryPage";
import { SimpleCategoryPage } from "./components/SimpleCategoryPage";
import { SearchResults } from "./components/SearchResults";
import { Footer } from "./components/Footer";
//@ts-ignore
import { SpoolPage } from "./components/SpoolPage.tsx";
import { useSearchFuse, runFuseSearch } from "./lib/search/useSearch";
import categoryData from "./data/categoryData";
import OurEthos from "./components/OurEthos";

type PageState =
  | { type: "home" }
  | { type: "contact" }
  | { type: "category-landing"; categoryKey: string }
  | { type: "subcategory-detail"; categoryKey: string; subcategoryName: string }
  | { type: "scrollable-category"; categoryKey: string }
  | { type: "simple-category"; categoryKey: string }
  | { type: "search"; query: string; results: any[] };

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageState>({ type: "home" });
  const { fuse } = useSearchFuse(categoryData);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavigate = (page: string) => {
    if (page === "home") {
      setCurrentPage({ type: "home" });
    } else if (page === "contact") {
      setCurrentPage({ type: "contact" });
    } else if (categoryData[page as keyof typeof categoryData]) {
      const category = categoryData[page as keyof typeof categoryData];
      if (category.type === "complex") {
        setCurrentPage({ type: "category-landing", categoryKey: page });
      } else if (category.type === "simple") {
        setCurrentPage({ type: "simple-category", categoryKey: page });
      }
    }
    scrollToTop();
  };

  const handleSearch = (query: string) => {
    if (!query || !query.trim()) {
      setCurrentPage({ type: "search", query, results: [] });
      return;
    }

    const rawResults = runFuseSearch(fuse, query, 40);
    const results = rawResults.map((r: any) => ({
      type: r.type,
      name: r.name,
      description: r.description,
      imageUrl: r.imageUrl,
      path: r.path,
      meta: r.meta,
      matches: r.matches,
    }));

    setCurrentPage({ type: "search", query, results });
    scrollToTop();
  };

  if (currentPage.type === "contact") {
    return (
      <div className="min-h-screen">
        <Navigation onNavigate={handleNavigate} onSearch={handleSearch} currentPage="contact" />
        <ContactPage onBack={() => handleNavigate("home")} />
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  if (currentPage.type === "category-landing") {
    const category = categoryData[currentPage.categoryKey as keyof typeof categoryData];
    if (category.type !== "complex") return null;

    return (
      <div className="min-h-screen">
        <Navigation onNavigate={handleNavigate} onSearch={handleSearch} currentPage="category" />
        <CategoryLandingPage
          categoryName={category.name}
          coverImageUrl={category.coverImageUrl}
          subcategories={category.subcategories.map((sub: any) => ({
            name: sub.name,
            description: sub.description,
            imageUrl: sub.imageUrl,
          }))}
          onBack={() => handleNavigate("home")}
          onSubcategoryClick={() => {}}
        />
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  if (currentPage.type === "simple-category" && currentPage.categoryKey === "spool") {
    const category = categoryData["spool"];
    return (
      <div className="min-h-screen">
        <Navigation onNavigate={handleNavigate} onSearch={handleSearch} currentPage="category" />
        <SpoolPage />
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  if (currentPage.type === "search") {
    return (
      <div className="min-h-screen">
        <Navigation onNavigate={handleNavigate} onSearch={handleSearch} currentPage="search" />
        <SearchResults
          query={currentPage.query}
          results={currentPage.results}
          onBack={() => handleNavigate("home")}
          onResultClick={(result) => {
  console.log("Search result clicked:", result);

  const meta = result?.meta || {};
  if (result.type === "subcategory" && meta.categoryKey) {
    handleNavigate(meta.categoryKey);
    return;
  }
  if (result.type === "category" && meta.categoryKey) {
    handleNavigate(meta.categoryKey);
    return;
  }
  if ((result.type === "group" || result.type === "product") && meta.categoryKey) {
    handleNavigate(meta.categoryKey);
    return;
  }
  if (result.path) {
    const pathKey = result.path.replace(/^\//, "").split("/")[0];
    // @ts-ignore
    if (pathKey && categoryData[pathKey]) {
      handleNavigate(pathKey);
      return;
    }
  }
  const categoryKeyByName = Object.keys(categoryData).find(
    (k) => categoryData[k as keyof typeof categoryData].name.toLowerCase() === (result.name || "").toLowerCase()
  );
  if (categoryKeyByName) {
    handleNavigate(categoryKeyByName);
    return;
  }
  if (meta.categoryKey && meta.subcategoryName) {
    setCurrentPage({
      type: "subcategory-detail",
      categoryKey: meta.categoryKey,
      subcategoryName: meta.subcategoryName,
    });
    scrollToTop();
    return;
  }
  handleNavigate("home");
}}

        />
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation onNavigate={handleNavigate} onSearch={handleSearch} currentPage="home" />
      <Hero />
      <AboutUs />
      <OurEthos />
      {/* <StorylineSection
        title="Heritage & Expertise"
        subtitle="Our Foundation"
        description="With over three decades of experience, Suorya Exports stands as a symbol of trust, craftsmanship, and innovation. Our heritage is built on a foundation of quality - each ribbon, trim, and décor piece crafted with meticulous attention to detail and a promise of perfection."
        imageUrl="/home/heritage.jpg"
        imageAlt="Elegant craftsmanship"
        bgColor="bg-white"
      /> */}
      <StorylineSection
        title="Creativity & Collaboration"
        subtitle="A Partnership of Vision"
        description="At Suorya, creativity is a collaborative journey. 
        Our design and production teams work hand-in-hand from concept to creation - brainstorming, 
        sketching, sampling, and refining until the idea feels just right. 
        We embrace diverse perspectives, encourage experimentation, and value the harmony that 
        comes when people create together. 
        Every season, we challenge ourselves to explore new materials, techniques, colours, 
        and textures, ensuring each product is thoughtful, relevant, and beautifully crafted. 
        It’s this blend of imagination, teamwork, and disciplined execution that shapes the 
        collections our customers love."
        imageUrl="/home/creative.png"
        imageAlt="Creative collaboration"
        reverse={true}
        bgColor="bg-stone-50"
      />
      
      <VisionSection />
      <PortfolioGrid />
      <StorylineSection
        title="Beyond Wrapping"
        subtitle="Where Our Ribbons Live"
        description="We’re not just about wrapping - we’re about redefining it. Our collections go beyond ribbons and décor; they capture emotion, artistry, and the joy of celebration."
        imageUrl="/home/beyond2.jpg"
        imageAlt="Festive decoration"
        bgColor="bg-white"
      />
      <ProductCatalog />
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}