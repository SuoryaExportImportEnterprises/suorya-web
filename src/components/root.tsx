import { useState } from "react";
import { Hero } from "./Hero";
import { AboutUs } from "./AboutUs";
import { PortfolioGrid } from "./PortfolioGrid";
import { ProductCatalog } from "./ProductCatalog";
import { CategoryLandingPage } from "./CategoryLandingPage";
import { ScrollableCategoryPage } from "./ScrollableCategoryPage";
import { SearchResults } from "./SearchResults";
import { Footer } from "./Footer";

type Page =
  | "home"
  | "about"
  | "portfolio"
  | "products"
  | "categoryLanding"
  | "scrollableCategory"
  | "search";

export function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const navigate = (page: Page) => setCurrentPage(page);

  return (
    <div className="relative">
      {currentPage === "home" && (
        <>
          <Hero/>
          <AboutUs />
          <PortfolioGrid />
          <ProductCatalog />
        </>
      )}

      {/* Example: Category Landing Page */}
      {currentPage === "categoryLanding" && selectedCategory && (
        <CategoryLandingPage
          categoryName={selectedCategory}
          coverImageUrl="/path/to/cover.jpg"
          subcategories={[]}
          onBack={() => navigate("home")}
          onSubcategoryClick={(sub) => {
            console.log("Clicked subcategory", sub);
            navigate("scrollableCategory");
          }}
        />
      )}

      {/* Scrollable Category Page */}
      {currentPage === "scrollableCategory" && (
        <ScrollableCategoryPage
          categoryName={selectedCategory || ""}
          coverImageUrl="/path/to/cover.jpg"
          subcategories={[]}
          onBack={() => navigate("categoryLanding")}
        />
      )}

      {/* Search Results */}
      {currentPage === "search" && (
        <SearchResults
          query={searchQuery}
          results={searchResults}
          onBack={() => navigate("home")}
          onResultClick={(result) => {
            console.log("Clicked result", result);
          }}
        />
      )}

      {/* Footer */}
      <Footer onNavigate={(page) => {
        if (page === "home") navigate("home");
        else if (page === "ribbons" || page === "trims") {
          setSelectedCategory(page); // store category
          navigate("categoryLanding");
        } else if (page === "contact") console.log("Go to contact section");
      }} />
    </div>
  );
}
