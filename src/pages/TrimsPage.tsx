import { CategoryLandingPage } from "../components/CategoryLandingPage";
import categoryData from "../data/categoryData";
import { SEO } from "../components/layout/SEO";

export default function TrimsPage() {
  const data = categoryData.trims;

  return (
    <>
      <SEO
        title="Suorya | Trims Collection"
        description="Discover Suorya’s exclusive trims — braids, laces, tassels, cords, and more for creative excellence."
        url="https://suorya.com/trims"
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
