// new useeffect
import { useState , useEffect } from "react";
// new
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { StorylineSection } from "./components/StorylineSection";
import { PortfolioGrid } from "./components/PortfolioGrid";
import { ContactPage } from "./components/ContactPage";
import { CategoryLandingPage } from "./components/CategoryLandingPage";
import { SimpleCategoryPage } from "./components/SimpleCategoryPage";
import { SearchResults } from "./components/SearchResults";
import { Footer } from "./components/Footer";
//@ts-ignore
import { SpoolPage } from "./components/SpoolPage.tsx";
import { useSearchFuse, runFuseSearch } from "./lib/search/useSearch";
import categoryData from "./data/categoryData";
import OurEthos from "./components/OurEthos";
import { QuoteBanner } from "./components/QuoteBanner";
import { CategoryPage } from "./pages/CategoryPage";



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
// new
  const navigate = useNavigate();
//new
  const location = useLocation();

// new
  useEffect(() => {
    const path = location.pathname.replace(/^\/+|\/+$/g, ""); 
    if (path === "" || path === "/") {
      setCurrentPage({ type: "home" });
      scrollToTop();
      return;
    }
    if (path === "contact") {
      setCurrentPage({ type: "contact" });
      scrollToTop();
      return;
    }
  }, [location.pathname]);

  useEffect(() => {
  const path = location.pathname.replace("/", "");
  if (!path) {
    setCurrentPage({ type: "home" });
  } else if (path === "contact") {
    setCurrentPage({ type: "contact" });
  } else if (categoryData[path as keyof typeof categoryData]) {
    const category = categoryData[path as keyof typeof categoryData];
    if (category.type === "complex") {
      setCurrentPage({ type: "category-landing", categoryKey: path });
    } else {
      setCurrentPage({ type: "simple-category", categoryKey: path });
    }
  }
}, [location]);

useEffect(() => {
  const path = location.pathname.replace(/^\/+|\/+$/g, ""); 
  if (path === "") {
    setCurrentPage({ type: "home" });
  } else if (path === "contact") {
    setCurrentPage({ type: "contact" });
  } else if (path === "design-studio") {
    setCurrentPage({ type: "design-studio" as any });
  } else if (categoryData[path as keyof typeof categoryData]) {
    const category = categoryData[path as keyof typeof categoryData];
    if (category.type === "complex") {
      setCurrentPage({ type: "category-landing", categoryKey: path });
    } else {
      setCurrentPage({ type: "simple-category", categoryKey: path });
    }
  } else {
    setCurrentPage({ type: "home" });
  }
}, [location.pathname]);


const handleNavigate = (page: string) => {
  if (page === "home") {
    navigate("/");
    setCurrentPage({ type: "home" });
  } else if (page === "contact") {
    navigate("/contact");
    setCurrentPage({ type: "contact" });
  } else if (page === "design-studio") { // <-- new
    navigate("/design-studio");
    setCurrentPage({ type: "design-studio" as any });
  } else if (categoryData[page as keyof typeof categoryData]) {
    const category = categoryData[page as keyof typeof categoryData];
    if (category.type === "complex") {
      navigate(`/${page}`);
      setCurrentPage({ type: "category-landing", categoryKey: page });
    } else if (category.type === "simple") {
      navigate(`/${page}`);
      setCurrentPage({ type: "simple-category", categoryKey: page });
    }
  } else {
    navigate("/");
    setCurrentPage({ type: "home" });
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
        <ContactPage/>
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  if (currentPage.type === "category-landing") {
    const category = categoryData[currentPage.categoryKey as keyof typeof categoryData];
    if (category.type !== "complex") return null;

    return (
      <div className="min-h-screen">
        <Navigation onNavigate={handleNavigate} onSearch={handleSearch} currentPage={currentPage.categoryKey} />
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

  if (currentPage.type === "simple-category" && currentPage.categoryKey === "packaging") {
    const category = categoryData["packaging"];
    return (
      <div className="min-h-screen">
        <Navigation onNavigate={handleNavigate} onSearch={handleSearch} currentPage={currentPage.categoryKey} />
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

  //new
  return (
  <Routes>
    <Route
      path="/"
      element={
        <div className="min-h-screen">
          <Navigation onNavigate={handleNavigate} onSearch={handleSearch} currentPage="home" />
          <Hero />
          <AboutUs />
          <OurEthos />
          <StorylineSection
            title="Creativity & Collaboration"
            subtitle="Co-Creating Value, Season After Season"
            description="At Suorya, creativity is a collaborative journey.
            Our design team anchors the process from concept to creation - brainstorming, 
            sketching, sampling, and refining until the idea feels just right and production friendly. 
            Once the design is finalised, our production team brings it to life with
            precision and consistency.
            We embrace diverse perspectives, encourage experimentation, and value the harmony 
            that comes when people create together. Every season, we explore new materials, 
            techniques, colours, and textures to ensure each product is thoughtful, relevant, 
            and beautifully crafted. It’s this blend of imagination and teamwork that shapes 
            the collections our customers love."
            imageUrl="/home/creative.png"
            imageAlt="Creative collaboration"
            reverse={true}
            bgColor="bg-stone-50"
          />
          <QuoteBanner />
          {/* <VisionSection /> */}
          
          <PortfolioGrid />
          <Footer onNavigate={handleNavigate} />
        </div>
      }
    />

    <Route
      path="/contact"
      element={
        <div className="min-h-screen">
          <Navigation onNavigate={handleNavigate} onSearch={handleSearch} currentPage="contact" />

          <ContactPage  />
          <Footer onNavigate={handleNavigate} />
        </div>
      }
    />

<Route
  path="/:categoryKey"
  element={
    <div className="min-h-screen">
      <Navigation onNavigate={handleNavigate} onSearch={handleSearch} currentPage="category" />
      <CategoryPage key={location.pathname} />
      <Footer onNavigate={handleNavigate} />
    </div>
  }
/>

    <Route path="/:category" element={<CategoryPage />} />

  </Routes>
);

}