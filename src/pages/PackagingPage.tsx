import { SEO } from "../components/layout/SEO";
import { SpoolPage } from "../components/sections/SpoolPage";
import categoryData from "../data/categoryData";

export default function PackagingPage() {
  const data = categoryData.packaging; // kept in case you use it later

  return (
    <>
      <SEO
        title="Suorya | Packaging & Spools"
        description="Explore Suorya’s signature wooden and paper spools — designed for elegance and utility."
        url="https://suorya.com/packaging"
      />
      {/* SpoolPage doesn't take props in your code, so render as-is */}
      <SpoolPage />
    </>
  );
}
