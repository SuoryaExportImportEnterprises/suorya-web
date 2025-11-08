// import { ImageWithFallback } from "./figma/ImageWithFallback";

// export function VisionSection() {
//   return (
//     <section className="py-16 bg-stone-800 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16 space-y-4">
//           <p className="text-orange-400 tracking-widest uppercase text-sm">
//             Our Craft
//           </p>
//           <h2 className="text-4xl md:text-5xl">Vision & Expertise</h2>
//           <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
//             Step into our design studio where innovation meets artistry. Every
//             piece we create is a testament to our commitment to excellence.
//           </p>
//         </div>

//         {/* Designer Photos Grid */}
//         <div className="max-w-6xl mx-auto mb-16">
//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-2xl">
//               <img
//                 src="/home/designstudio1.jpg" 
//                 alt="Designer at work"
//                 className="w-full h-full object-cover aspect-[16/10]"
//                 onError={(e) => { e.currentTarget.src = 'https://placehold.co/1080x675/f3f4f6/000?text=Image+1'; e.currentTarget.style.backgroundColor = '#f3f4f6'; }}
//               />
              
//             </div>
//             <div className="rounded-2xl overflow-hidden shadow-2xl">
//               <img
//                 src="/home/designstudio2.jpg" 
//                 alt="Craftsmanship detail"
//                 className="w-full h-full object-cover aspect-[16/10]"
//                 onError={(e) => { e.currentTarget.src = 'https://placehold.co/1080x675/f3f4f6/000?text=Image+2'; e.currentTarget.style.backgroundColor = '#f3f4f6'; }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Editorial Content */}
//         <div className="grid md:grid-cols-3 gap-8 mt-16">
//           <div className="space-y-3">
//             <h3 className="text-2xl text-orange-400">Meticulous Selection</h3>
//             <p className="text-stone-300 leading-relaxed">
//               We proudly train and work alongside women artisans who are highly skilled in stitching and thread work. Each ribbon spool is wrapped on a hand operated spinning wheel.
//             </p>
//           </div>

//           <div className="space-y-3">
//             <h3 className="text-2xl text-orange-400">Artisan Techniques</h3>
//             <p className="text-stone-300 leading-relaxed">
//               Our design team is passionate and experienced, creating unique products for each season - be it bows, tree toppers, tree skirts or garlands.
//             </p>
//           </div>

//           <div className="space-y-3">
//             <h3 className="text-2xl text-orange-400">Design Innovation</h3>
//             <p className="text-stone-300 leading-relaxed">
//               We stay ahead of trends while creating timeless pieces. Each
//               season brings fresh designs that inspire decorators, designers,
//               and gift enthusiasts alike.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }









import React from "react";

export function VisionSection() {
  const images = [
    "/home/design3.png",
    "/home/design4.png",
    "/home/design5.png",
  ];

  return (
    <section className="py-16 bg-white text-stone-800 relative">
      {/* Hover Style (same as Spool Page) */}
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