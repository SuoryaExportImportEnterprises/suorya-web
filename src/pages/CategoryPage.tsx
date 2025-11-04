// import { useParams, useNavigate } from "react-router-dom";
// import { SpoolPage } from "@/pages/SpoolPage";
// import { RibbonsPage } from "@/pages/RibbonsPage";
// import { TrimsPage } from "@/pages/TrimsPage";
// import { BowsPage } from "@/pages/BowsPage";

// export function CategoryPage() {
//   const { categoryKey } = useParams();
//   const navigate = useNavigate();

//   const handleBack = () => {
//     navigate("/");
//   };

//   switch (categoryKey) {
//     case "ribbons":
//       return <RibbonsPage onBack={handleBack} />;
//     case "trims":
//       return <TrimsPage onBack={handleBack} />;
//     case "bows":
//       return <BowsPage onBack={handleBack} />;
//     case "spool":
//       return <SpoolPage onBack={handleBack} />;
//     default:
//       navigate("/");
//       return null;
//   }
// }






// import { useParams } from "react-router-dom";
// import { Navigation } from "../components/Navigation";
// import { Footer } from "../components/Footer";
// import { SpoolPage } from "../components/SpoolPage";
// import categoryData from "../data/categoryData";

// export function CategoryPage() {
//   const { categoryKey } = useParams<{ categoryKey: string }>();

//   const categoryInfo = categoryKey ? categoryData[categoryKey as keyof typeof categoryData] : null;

//   if (!categoryInfo) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center text-gray-600">
//         <p>Oops! Category not found.</p>
//       </div>
//     );
//   }
//   return (
//     <div className="min-h-screen">
//       <Navigation onNavigate={() => {}} onSearch={() => {}} currentPage="category" />
//       {/* <SpoolPage categoryKey={categoryKey!} />  */}
//       <Footer onNavigate={() => {}} />
//     </div>
//   );
// }









// src/pages/CategoryPage.tsx

// import { useParams, useNavigate } from "react-router-dom";
// import { SimpleCategoryPage } from "../components/SimpleCategoryPage";
// import { CategoryLandingPage } from "../components/CategoryLandingPage";
// import categoryData from "../data/categoryData";

// export function CategoryPage() {
//   const { categoryKey } = useParams<{ categoryKey: string }>();

//   const navigate = useNavigate();
 

//   const categoryInfo = categoryKey
//     ? categoryData[categoryKey as keyof typeof categoryData]
//     : null;

//   if (!categoryInfo) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center text-gray-600">
//         <p>Oops! Category not found.</p>
//         <button
//           onClick={() => navigate("/")}
//           className="mt-4 text-orange-600 underline"
//         >
//           Go back home
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {categoryInfo.type === "complex" ? (
//         <CategoryLandingPage
//           categoryName={categoryInfo.name}
//           coverImageUrl={categoryInfo.coverImageUrl}
//           subcategories={categoryInfo.subcategories}
//           onBack={() => navigate("/")}
//           onSubcategoryClick={() => {}}
//         />
//       ) : (
//         <SimpleCategoryPage
//         coverImageUrl={categoryInfo.coverImageUrl}
//         categoryName={categoryInfo.name}
//         images={categoryInfo.images || []}
//         onBack={() => navigate("/")}
        
// />

//       )}
//     </div>
//   );
// }






import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SimpleCategoryPage } from "../components/SimpleCategoryPage";
import { CategoryLandingPage } from "../components/CategoryLandingPage";
import categoryData from "../data/categoryData";

export function CategoryPage() {
  const { categoryKey } = useParams<{ categoryKey: string }>();
  const navigate = useNavigate();

  // Local state to track current category info
  const [categoryInfo, setCategoryInfo] = useState<
    (typeof categoryData)[keyof typeof categoryData] | null
  >(null);

  // 🔁 Update the page whenever the categoryKey in the URL changes
  useEffect(() => {
    if (categoryKey) {
      const info = categoryData[categoryKey as keyof typeof categoryData];
      setCategoryInfo(info || null);
    } else {
      setCategoryInfo(null);
    }
    // Scroll to top when category changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [categoryKey]);

  // 🧩 Handle invalid category key
  if (!categoryInfo) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-600">
        <p>Oops! Category not found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-orange-600 underline"
        >
          Go back home
        </button>
      </div>
    );
  }

  // 🎨 Render category pages dynamically based on type
  return (
    <div>
      {categoryInfo.type === "complex" ? (
        <CategoryLandingPage
          categoryName={categoryInfo.name}
          coverImageUrl={categoryInfo.coverImageUrl}
          subcategories={categoryInfo.subcategories}
          onBack={() => navigate("/")}
          onSubcategoryClick={() => {}}
        />
      ) : (
        <SimpleCategoryPage
          coverImageUrl={categoryInfo.coverImageUrl}
          categoryName={categoryInfo.name}
          images={categoryInfo.images || []}
          onBack={() => navigate("/")}
        />
      )}
    </div>
  );
}
