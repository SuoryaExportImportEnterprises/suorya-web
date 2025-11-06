import { ImageWithFallback } from "./figma/ImageWithFallback";

interface StorylineSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
  bgColor?: string;
}

export function StorylineSection({
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt,
  reverse = false,
  bgColor = "bg-white",
}: StorylineSectionProps) {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            reverse ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Image */}
          <div
            className={`relative h-[500px] rounded-2xl overflow-hidden shadow-xl ${
              reverse ? "lg:col-start-2" : ""
            }`}
          >
            <ImageWithFallback
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent"></div>
          </div>

          {/* Content */}
          <div
            className={`space-y-6 ${reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}
          >
            <div className="space-y-3">
              <p className="text-orange-600 tracking-widest uppercase text-sm">
                {subtitle}
              </p>
              <h2 className="text-4xl md:text-5xl text-stone-800 leading-tight">
                {title}
              </h2>
            </div>

            <p className="text-lg text-stone-600 leading-relaxed">
              {description}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}