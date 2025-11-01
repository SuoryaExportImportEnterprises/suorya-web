import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutUs() {
  return (
    <section id="about" className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-orange-600 tracking-widest uppercase text-sm">
            The Heart Behind Suorya
          </p>
          <h2 className="text-4xl md:text-5xl text-stone-800">
            A Father - Daughter Journey!
          </h2>
          <p className="text-stone-600 text-lg mt-2">
    At the heart of the business is a passionate father–daughter duo, blending expertise in operations and design.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          {/* <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
            <img
              src="/home/father-daughter.jpg"
              alt="Suorya Craftsmanship"
              className="w-full h-full object-cover aspect-[16/10]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent"></div>
          </div> */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full flex items-center justify-center bg-stone-100">
  <img
    src="/home/father-daughter.jpg"
    alt="Suorya Craftsmanship"
    className="w-full h-full object-contain rounded-2xl"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent rounded-2xl"></div>
</div>



          {/* Story Content */}
          <div className="space-y-8">
            <p className="text-lg text-stone-600 leading-relaxed">
              Suorya Exports is a story of legacy, creativity, and commitment - a father’s 30+ years of mastery in textiles
              joined by his daughter’s fresh design perspective. Together, we’ve built more than a business; we’ve nurtured 
              a partnership rooted in trust, innovation, and shared vision. With every order, our design and production team 
              works hand in hand to ensure timely delivery with focus on quality.
              
              What drives us isn’t just the fabric or the finish - it’s the purpose stitched into every creation. Each 
              piece we make carries a part of our story: the patience of years spent perfecting the craft, the curiosity to
              explore new ideas, and the joy of seeing imagination take form. For us, quality is the reflection of who we are
              - steady, evolving, and endlessly devoted to creating something that lasts.
            </p>

            {/* <blockquote className="border-l-4 border-orange-600 pl-6 italic text-stone-700">
              "With more than 30 years of experience working with top
              international brands, we have followed the best export practices.
              Our products meet international quality standards. We are SEDEX
              certified. These certifications reflect our strong commitment
              towards ethical and responsible practices."
            </blockquote> */}
          </div>
        </div>
      </div>
    </section>
  );
}

