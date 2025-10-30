import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductImage {
  name: string;
  imageUrl: string;
  description?: string;
}

interface Subcategory {
  name: string;
  description: string;
  images: ProductImage[];
}

interface ScrollableCategoryPageProps {
  categoryName: string;
  coverImageUrl: string;
  subcategories: Subcategory[];
  onBack: () => void;
}

export function ScrollableCategoryPage({
  categoryName,
  coverImageUrl,
  subcategories,
  onBack,
}: ScrollableCategoryPageProps) {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Button
          variant="ghost"
          onClick={onBack}
          className="flex items-center gap-2 text-stone-700 hover:text-orange-600"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </div>

      {/* Cover Section - Reduced height */}
      {/* <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden mb-20">
        <ImageWithFallback
          src={coverImageUrl}
          alt={categoryName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-4 px-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-wide">
              {categoryName}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Scroll down to explore our complete collection
            </p>
          </div>
        </div>
      </div> */}

      {/* Subcategory Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {subcategories.map((subcategory, index) => (
          <div key={index} className="mb-24 last:mb-0">
            {/* Subcategory Heading */}
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl text-stone-800 mb-3">
                {subcategory.name}
              </h2>
              <p className="text-lg text-stone-600 mb-4">
                {subcategory.description}
              </p>
              <div className="w-20 h-1 bg-orange-600"></div>
            </div>

            {/* Image Grid - Max 4 images per section, increased spacing */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {subcategory.images.slice(0, 4).map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-square overflow-hidden bg-stone-100">
                    <ImageWithFallback
                      src={image.imageUrl}
                      alt={image.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-stone-800 mb-1 text-sm">
                      {image.name}
                    </h3>
                    {image.description && (
                      <p className="text-xs text-stone-600 line-clamp-2">
                        {image.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}