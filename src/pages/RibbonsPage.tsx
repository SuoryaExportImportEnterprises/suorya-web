import { CategoryLandingPage } from "../components/CategoryLandingPage";
import categoryData from "../data/categoryData";
import { SEO } from "../components/layout/SEO";

export default function RibbonsPage() {
  const data = categoryData.ribbons;

  return (
    <>
      <SEO
        title="Suorya | Ribbons Collection"
        description="Explore Suorya’s premium satin, velvet, sheer, and wired ribbons — crafted with precision and elegance."
        url="https://suorya.com/ribbons"
      />
      <CategoryLandingPage
        categoryName={data.name}
        coverImageUrl={data.coverImageUrl}
        subcategories={data.subcategories}
        onBack={() => {}}
        onSubcategoryClick={() => {}}
      />
    </>
  );
}
