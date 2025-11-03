// import { ImageWithFallback } from "./figma/ImageWithFallback";

// interface PortfolioItem {
//   title: string;
//   image: string;
// }

// const portfolioItems: PortfolioItem[] = [
//   {
//     title: "Gifting",
//     image:
//       "https://images.unsplash.com/photo-1453834190665-46ff0a1fbd5a?auto=format&q=80&w=1080",
//   },
//   {
//     title: "Clip On Ornaments",
//     image:
//       "https://images.unsplash.com/photo-1742836531212-c55044926fbd?auto=format&q=80&w=1080",
//   },
//   {
//     title: "Tree Topper Bow",
//     image:
//       "https://images.unsplash.com/photo-1692884020981-ff239e22cd09?auto=format&q=80&w=1080",
//   },
//   {
//     title: "Garland",
//     image:
//       "https://images.unsplash.com/photo-1535551393484-1a1907f51759?auto=format&q=80&w=1080",
//   },
//   // {
//   //   title: "Contemporary Wall Art",
//   //   image:
//   //     "https://images.unsplash.com/photo-1589223095536-e5a50ece9a48?auto=format&q=80&w=1080",
//   // },
//   // {
//   //   title: "Event Décor",
//   //   image:
//   //     "https://images.unsplash.com/photo-1719936319627-78b5ca4a28fc?auto=format&q=80&w=1080",
//   // },
// ];

// export function PortfolioGrid() {
//   return (
//     <section className="relative bg-stone-50 py-20 mt-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16 space-y-4">
//           <p className="text-orange-600 tracking-widest uppercase text-sm">
//             Inspiration Gallery
//           </p>
//           <h2 className="text-4xl md:text-5xl text-stone-800 font-semibold">
//             See Our Creations in Action
//           </h2>
//           <p className="text-base text-lg text-stone-600 max-w-2xl mx-auto">
//             From boutique windows to special events, our ribbons and décor bring
//             creative visions to life.
//           </p>
//         </div>

//         {/* Grid */}
//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
//           {portfolioItems.map((item) => (
//             <div
//               key={item.title}
//               className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
//             >
//               <div className="overflow-hidden">
//                 <ImageWithFallback
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full aspect-square object-cover transition-transform duration-700 hover:scale-105"
//                 />
//               </div>

//               <div className="p-5 text-center bg-white border-t border-stone-100">
//                 <h3 className="text-lg md:text-xl text-stone-800 font-medium mb-2">
//                   {item.title}
//                 </h3>
//                 <div className="w-12 h-0.5 bg-orange-600 mx-auto rounded-full"></div>
//               </div>
//             </div>
//           ))}
//         </div> */}







//         <div className="min-h-screen flex items-center justify-center bg-white">
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-6xl px-6 py-10">
//     {portfolioItems.map((item) => (
//       <div
//         key={item.title}
//         className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
//       >
//         {/* Smaller Image Box */}
//         <div className="overflow-hidden">
//           <ImageWithFallback
//             src={item.image}
//             alt={item.title}
//             className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
//           />
//         </div>

//         {/* Caption */}
//         <div className="p-4 text-center bg-white border-t border-stone-100">
//           <h3 className="text-base md:text-lg text-stone-800 font-medium mb-2">
//             {item.title}
//           </h3>
//           <div className="w-10 h-0.5 bg-orange-600 mx-auto rounded-full"></div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
//       </div>
//     </section>
//   );
// }





























import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PortfolioItem {
  title: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Gifting",
    image:
      "https://images.unsplash.com/photo-1453834190665-46ff0a1fbd5a?auto=format&q=80&w=1080",
  },
  {
    title: "Clip On Ornaments",
    image:
      "https://images.unsplash.com/photo-1742836531212-c55044926fbd?auto=format&q=80&w=1080",
  },
  {
    title: "Tree Topper Bow",
    image:
      "https://images.unsplash.com/photo-1719936319627-78b5ca4a28fc?auto=format&q=80&w=1080",
  },
  {
    title: "Garland",
    image:
      "https://images.unsplash.com/photo-1535551393484-1a1907f51759?auto=format&q=80&w=1080",
  },
];

export function PortfolioGrid() {
  return (
    <section className="relative bg-stone-50 py-2 mb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <p className="text-orange-600 tracking-widest uppercase text-sm">
            Inspiration Gallery
          </p>
          <h2 className="text-4xl md:text-5xl text-stone-800 font-semibold">
            See Our Creations in Action
          </h2>
          <p className="text-base text-lg text-stone-600 max-w-2xl mx-auto">
            From boutique windows to special events, our ribbons and décor bring
            creative visions to life.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center h-[60vh]">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
  <ImageWithFallback
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
  />
</div>

              </div>

              <div className="p-3 text-center bg-white border-t border-stone-100">
                <h3 className="text-sm md:text-base text-stone-800 font-medium mb-1">
                  {item.title}
                </h3>
                <div className="w-8 h-0.5 bg-orange-600 mx-auto rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
