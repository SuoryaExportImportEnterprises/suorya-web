import React from "react";

export function VisionSection() {
  const images = [
    "/home/design3.png",
    "/home/design4.png",
    "/home/design5.png",
  ];

  return (
    <section className="py-16 bg-white text-stone-800 relative">
      <style>{`
        .spool-image-container {
          transition: all 0.4s ease;
          border-radius: 1rem;
          overflow: hidden;
          background: white;
        }
        .spool-image-container:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 30px -10px rgba(0, 0, 0, 0.15),
                      0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .spool-image {
          transition: transform 0.5s ease;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .spool-image-container:hover .spool-image {
          transform: scale(1.05);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 space-y-4">
          <p className="text-orange-600 py-6 tracking-widest uppercase text-sm">
            WEAVING OUR VISION
          </p>
          <h2 className="text-4xl py-0 md:text-5xl font-semibold">
            Vision & Expertise
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to our design studio - a space where ideas grow, stories take form, and inspiration leads the way.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {images.map((src, i) => (
            <div key={i} className="spool-image-container">
              <img
                src={src}
                alt={`Design Studio ${i + 1}`}
                className="spool-image aspect-square"
              />
            </div>
          ))}
        </div>

        {/* Info Boxes */}
        <div className="w-full mt-12">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {/* Artisan Techniques */}
            <div
              className="flex-1 flex flex-col items-center justify-center py-12 px-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,118,0,0.06) 0%, rgba(255,255,255,0.0) 50%, rgba(255,118,0,0.06) 100%)",
              }}
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                Artisan Techniques
              </h3>
              <p className="text-stone-600 text-lg leading-relaxed max-w-md">
                Our craft is rooted in understanding of materials and finish. 
                Every artisan at Suorya brings their method, their way of working with thread, weave, and texture. 
                Together, their techniques create a quiet harmony where detail meets design, and tradition evolves through 
                innovation in every collection.
              </p>
            </div>

            {/* Design Innovation */}
            <div
              className="flex-1 flex flex-col items-center justify-center py-12 px-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,118,0,0.06) 0%, rgba(255,255,255,0.0) 50%, rgba(255,118,0,0.06) 100%)",
              }}
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                Design Innovation
              </h3>
              <p className="text-stone-600 text-lg leading-relaxed max-w-md">
                Design, for us, begins with curiosity - a spark that turns simple materials into something meaningful.
                 We blend creativity with modern design trends to create timeless designs that connect with 
                decorators, stylists, and anyone who finds joy in beautiful details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}