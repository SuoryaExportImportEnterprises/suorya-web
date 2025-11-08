interface HeroProps {
  onNavigate: (page: string) => void;
}
export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/cover-images/ribbon-cover/stripecover.jpg"
          alt="Luxury ribbons and crafts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
        
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px- flex items-center">
        <div className="max-w-2xl space-y-6">
          <div className="space-y-4">
            <p className="text-orange-600 tracking-widest uppercase text-sm">
              Premium Ribbons & Décor
            </p>
            <h1
            className="text-stone-800 leading-tight text-left" 
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }} 
            >
              <span className="block">Crafting Elegance,</span>
              <span className="block">One Ribbon at a Time</span>
            </h1>


          </div>

          <p className="text-lg md:text-xl text-stone-800 leading-relaxed max-w-xl">
            Where premium craftsmanship meets chic design. 
            <br />
            Celebrating over two
            decades of expertise in creating ribbons, trims, and décor that
            transform ordinary moments into extraordinary memories.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 bg-stone-800 text-[rgba(255,255,255,1)] rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Our Story
            </a> */}            
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      
    </section>
  );
}
