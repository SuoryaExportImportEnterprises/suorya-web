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
          At the heart of the business is a passionate father - daughter duo, blending expertise in operations and design.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          {/* <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full"> */}
            {/* <img
              src="/home/father-daughter.jpg"
              alt="Suorya Craftsmanship"
              className="w-full h-full object-cover aspect-[16/10]"
            /> */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent"></div> */}
          {/* </div> */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full flex items-center justify-center bg-stone-100">
            <img
              src="/home/father-daughter-hd.jpeg"
              alt="Suorya Craftsmanship"
              className="w-full h-full object-cover rounded-2xl"
            />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent rounded-2xl"></div>
          </div>
          {/* Story Content */}
          <div className="space-y-8">
            <p className="text-lg text-stone-600 leading-relaxed">
              Suorya Exports is a story of legacy, creativity, and commitment - a father’s 30+ years of mastery in textiles
              joined by his daughter’s fresh design perspective. Together, we’ve built more than a business - we’ve
              nurtured a partnership rooted in trust, purposeful innovation, and a shared vision for growth. From the 
              first sketch to the final stitch, our design and production teams collaborate through the process.
              We balance heritage with innovation, pairing time-tested techniques with an eye for emerging styles and seasonal 
              trends.
              <br></br>
              What drives us is a simple yet profound belief: to be a reliable partner for our buyers. Each 
              piece we create carries a part of our story — the curiosity to
              explore new ideas, and the joy of seeing ideas come to life. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

