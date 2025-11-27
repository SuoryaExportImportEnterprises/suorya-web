import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
//@ts-ignore
import "./CategoryLandingPage.css"; // ✅ Import the CSS file

import { useEffect } from "react";

interface Subcategory {
  name: string;
  description: string;
  imageUrl: string;
}

interface CategoryLandingPageProps {
  categoryName: string;
  coverImageUrl: string;
  subcategories: Subcategory[];
  onBack: () => void;
  onSubcategoryClick: (subcategoryName: string) => void;
}







export function CategoryLandingPage({
  categoryName,
  coverImageUrl,
  subcategories,
  onBack,
  onSubcategoryClick,
}: CategoryLandingPageProps) {


  useEffect(() => {
  const target = localStorage.getItem("scrollTarget");
  if (target) {
    const el = document.getElementById(target);
    if (el) {
      // Smooth scroll to the correct card
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      localStorage.removeItem("scrollTarget"); // cleanup
    }
  }
}, []);

  return (
    <div className="min-h-screen bg-white pt-20">
      
      {/* 🌤️ Softer overlay for elegance */}
      {/* <div className="relative h-[300px] md:h-[320px] w-full overflow-hidden mb-20">
        <ImageWithFallback
          src={coverImageUrl}
          alt={categoryName}
          className="w-full h-full object-cover opacity-100"
        /> */}

        {/* ✅ Light gradient overlay (not full black) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent"></div>


        {/* Text Overlay */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-4 px-4">
            <h1 className="category-title">{categoryName}</h1>
            <p className="category-subtitle">Explore our premium collection</p>
          </div>
        </div>
      </div> */}

      <div className="relative h-[200px] md:h-[220px] w-full flex items-center justify-center mb-10 bg-white">
  <div className="text-center space-y-3 px-4">
    <h1 className="category-title">{categoryName}</h1>
<p className="category-subtitle">Explore our premium collection</p>

  </div>
</div>


      {/* Subcategory Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* {subcategories.map((subcategory, index) => (
            <button
              key={index}
              onClick={() => onSubcategoryClick(subcategory.name)}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left"
            >
              <div className="aspect-[4/3] overflow-hidden bg-stone-100 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                <ImageWithFallback
                  src={subcategory.imageUrl}
                  alt={subcategory.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-stone-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {subcategory.name}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {subcategory.description}
                </p>
              </div>
            </button>
          ))} */}

          {subcategories.map((subcategory, index) => (
  <button
    key={index}
    id={subcategory.name.toLowerCase().replace(/\s+/g, "-")}  // 👈 gives each item an anchor ID
    onClick={() => onSubcategoryClick(subcategory.name)}
    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left"
  >
    <div className="aspect-[4/3] overflow-hidden bg-stone-100 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl">
      <ImageWithFallback
        src={subcategory.imageUrl}
        alt={subcategory.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl text-stone-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
        {subcategory.name}
      </h3>
      <p className="text-stone-600 text-sm leading-relaxed">
        {subcategory.description}
      </p>
    </div>
  </button>
))}

        </div>
      </div>
    </div>
  );
}
