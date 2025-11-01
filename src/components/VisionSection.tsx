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



import { ImageWithFallback } from "./figma/ImageWithFallback";

export function VisionSection() {
  // if you add / change image filenames later, just update this array (max 5)
  const collageImages = [
    "/home/designstudio1.jpg",
    "/home/designstudio2.jpg",
    "/home/designstudio3.jpg",
    "/home/designstudio4.jpg",
    "/home/designstudio5.jpg",
  ];

  return (
    <section className="py-16 bg-stone-800 mb-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 space-y-4">
          <p className="text-orange-400 tracking-widest uppercase text-sm">
            Our Craft
          </p>
          <h2 className="text-4xl md:text-5xl">Vision & Expertise</h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Step into our design studio where innovation meets artistry. Every
            piece we create is a testament to our commitment to excellence.
          </p>
        </div>

        {/* Collage / Designer Photos Grid (responsive) */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid gap-4 sm:gap-6">
            {/* Responsive collage:
                - small screens: stacked single column
                - md+ screens: grid with one large tile + 4 smaller tiles
            */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
              {/* Large hero tile (spans 2 cols, 2 rows on md+) */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl md:col-span-2 md:row-span-2">
                <ImageWithFallback
                  src={collageImages[0]}
                  alt="Designer at work"
                  className="w-full h-full object-cover aspect-[16/10]"
                  onError={(e: any) => {
                    e.currentTarget.src =
                      "https://placehold.co/1080x675/111827/fff?text=Image+1";
                    e.currentTarget.style.backgroundColor = "#111827";
                  }}
                />
              </div>

              {/* Small tiles — arranged in the remaining columns */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={collageImages[1]}
                  alt="Craftsmanship detail"
                  className="w-full h-full object-cover aspect-[16/10]"
                  onError={(e: any) => {
                    e.currentTarget.src =
                      "https://placehold.co/1080x675/111827/fff?text=Image+2";
                    e.currentTarget.style.backgroundColor = "#111827";
                  }}
                />
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={collageImages[2]}
                  alt="Studio detail"
                  className="w-full h-full object-cover aspect-[16/10]"
                  onError={(e: any) => {
                    e.currentTarget.src =
                      "https://placehold.co/1080x675/111827/fff?text=Image+3";
                    e.currentTarget.style.backgroundColor = "#111827";
                  }}
                />
              </div>

              {/* On md+: these two appear beneath the previous two, filling the grid */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={collageImages[3]}
                  alt="Design sample"
                  className="w-full h-full object-cover aspect-[16/10]"
                  onError={(e: any) => {
                    e.currentTarget.src =
                      "https://placehold.co/1080x675/111827/fff?text=Image+4";
                    e.currentTarget.style.backgroundColor = "#111827";
                  }}
                />
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={collageImages[4]}
                  alt="Studio materials"
                  className="w-full h-full object-cover aspect-[16/10]"
                  onError={(e: any) => {
                    e.currentTarget.src =
                      "https://placehold.co/1080x675/111827/fff?text=Image+5";
                    e.currentTarget.style.backgroundColor = "#111827";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Content (unchanged) */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="space-y-3">
            <h3 className="text-2xl text-orange-400">Meticulous Selection</h3>
            <p className="text-stone-300 leading-relaxed">
              We proudly train and work alongside women artisans who are highly skilled in stitching and thread work. Each ribbon spool is wrapped on a hand operated spinning wheel.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl text-orange-400">Artisan Techniques</h3>
            <p className="text-stone-300 leading-relaxed">
              Our design team is passionate and experienced, creating unique products for each season - be it bows, tree toppers, tree skirts or garlands.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl text-orange-400">Design Innovation</h3>
            <p className="text-stone-300 leading-relaxed">
              We stay ahead of trends while creating timeless pieces. Each
              season brings fresh designs that inspire decorators, designers,
              and gift enthusiasts alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
