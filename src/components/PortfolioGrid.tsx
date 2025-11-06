// ..................................Image rotator - only auto rotate...................................

// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export function PortfolioGrid() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   const images = [
//     "/images/gifting.jpg",
//     "/images/satin-bow-garland.JPG",
//     "/images/bouquet.png",
//     "/images/bow_blue.png",
//     "/images/satin-bow-cover.png",
//   ];

//   // Move to previous image
//   const prevSlide = () =>
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

//   // Move to next image
//   const nextSlide = () =>
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

//   // Auto-rotation
//   useEffect(() => {
//     if (!isHovered) {
//       intervalRef.current = setInterval(nextSlide, 2500);
//     }
//     return () => intervalRef.current && clearInterval(intervalRef.current);
//   }, [isHovered]);

//   return (
//     <section className="py-16 bg-white relative overflow-hidden z-[10] mb-24">
//       {/* Header */}
//       <div className="text-center mb-10 space-y-4">
//         <p className="text-orange-600 tracking-widest uppercase text-sm">
//           Inspiration Gallery
//         </p>
//         <h2 className="text-4xl md:text-5xl text-stone-800 font-semibold">
//           See Our Creations in Action
//         </h2>
//         <p className="text-base text-stone-600 max-w-2xl mx-auto">
//           From boutique windows to special events, our ribbons and décor bring
//           creative visions to life.
//         </p>
//       </div>

//       {/* Carousel */}
//       <div
//         className="flex justify-center items-center w-full relative"
//         style={{ perspective: "1600px", height: "420px" }}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* ← Left Arrow */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-[80] bg-white/90 hover:bg-white p-4 md:p-5 rounded-full shadow-lg hover:scale-110 transition"
//           aria-label="Previous image"
//         >
//           <ChevronLeft className="w-6 h-6 text-stone-800" />
//         </button>

//         {/* → Right Arrow */}
//         <button
//           onClick={nextSlide}
//           className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-[80] bg-white/90 hover:bg-white p-4 md:p-5 rounded-full shadow-lg hover:scale-110 transition"
//           aria-label="Next image"
//         >
//           <ChevronRight className="w-6 h-6 text-stone-800" />
//         </button>

//         {/* 🖼️ Images */}
//         {images.map((img, index) => {
//           const total = images.length;
//           const offset = (index - currentIndex + total) % total;

//           // Base distance for each image
//           const baseX = 260;

//           // Default properties
//           let x = 0,
//             z = -400,
//             scale = 0.5,
//             opacity = 0.15,
//             rotateY = 0,
//             zIndex = 0;

//           if (offset === 0) {
//             // Center image
//             x = 0;
//             z = 250;
//             scale = 1.1;
//             opacity = 1;
//             rotateY = 0;
//             zIndex = 60;
//           } else if (offset === 1) {
//             // Right
//             x = baseX;
//             z = 100;
//             scale = 0.9;
//             opacity = 0.7;
//             rotateY = -15;
//             zIndex = 40;
//           } else if (offset === total - 1) {
//             // Left
//             x = -baseX;
//             z = 100;
//             scale = 0.9;
//             opacity = 0.7;
//             rotateY = 15;
//             zIndex = 40;
//           } else if (offset === 2) {
//             // Far right
//             x = baseX * 1.8;
//             z = -100;
//             scale = 0.8;
//             opacity = 0.4;
//             rotateY = -20;
//             zIndex = 20;
//           } else if (offset === total - 2) {
//             // Far left
//             x = -baseX * 1.8;
//             z = -100;
//             scale = 0.8;
//             opacity = 0.4;
//             rotateY = 20;
//             zIndex = 20;
//           }

//           return (
//             <motion.div
//               key={index}
//               className="absolute transform-gpu"
//               style={{
//                 zIndex,
//                 width: "300px",
//                 height: "300px",
//                 transformStyle: "preserve-3d",
//               }}
//               animate={{ x, z, scale, opacity, rotateY }}
//               transition={{ duration: 0.9, ease: "easeInOut" }}
//             >
//               <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg bg-white">
//                 <img
//                   src={img}
//                   alt={`carousel-${index}`}
//                   className="absolute inset-0 w-full h-full object-cover object-center"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     objectPosition: "center",
//                   }}
//                 />
//                 {offset === 0 && (
//                   <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent pointer-events-none" />
//                 )}
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }














//............................Image rotator - Only Auto Rotate + Clickable also...............................

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function PortfolioGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const images = [
    "/images/gifting.jpg",
    "/images/satin-bow-garland.JPG",
    "/images/bouquet.png",
    "/images/bow_blue.png",
    "/images/satin-bow-cover.png",
    "/images/long_bow.png",
    "/images/red_bow.png",
  ];

  // Previous Slide
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // Next Slide
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  useEffect(() => {
  if (!isHovered) {
    intervalRef.current = setInterval(nextSlide, 1800); // faster rotation
  }

  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; // reset for safety
    }
  };
}, [isHovered]);


  return (
    <section className="py-16 bg-white relative overflow-hidden z-[10] mb-24">
      {/* Section Header */}
      <div className="text-center mb-10 space-y-4">
        <p className="text-orange-600 tracking-widest uppercase text-sm">
          Inspiration Gallery
        </p>
        <h2 className="text-4xl md:text-5xl text-stone-800 font-semibold">
          See Our Creations in Action
        </h2>
        <p className="text-base text-lg text-stone-600 max-w-2xl mx-auto">
          From store displays to life’s special moments, our designs add that little touch people pause to admire.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="flex justify-center items-center w-full relative"
        style={{ perspective: "1600px", height: "420px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* ← Left Button (Start) */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-[9999] bg-white/90 hover:bg-white p-4 md:p-5 rounded-full shadow-lg hover:scale-110 transition"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-stone-800" />
        </button>

        {/* → Right Button (End) */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-[9999] bg-white/90 hover:bg-white p-4 md:p-5 rounded-full shadow-lg hover:scale-110 transition"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-stone-800" />
        </button>

        {/* 🖼️ Carousel Images */}
        {images.map((img, index) => {
          const total = images.length;
          const offset = (index - currentIndex + total) % total;
          const baseX = 260;

          let x = 0,
            z = -400,
            scale = 0.5,
            opacity = 0.15,
            rotateY = 0,
            zIndex = 0;

          if (offset === 0) {
            // Center
            x = 0;
            z = 250;
            scale = 1.1;
            opacity = 1;
            zIndex = 60;
          } else if (offset === 1) {
            // Right
            x = baseX;
            z = 100;
            scale = 0.9;
            opacity = 0.7;
            rotateY = -15;
            zIndex = 40;
          } else if (offset === total - 1) {
            // Left
            x = -baseX;
            z = 100;
            scale = 0.9;
            opacity = 0.7;
            rotateY = 15;
            zIndex = 40;
          } else if (offset === 2) {
            // Far right
            x = baseX * 1.8;
            z = -100;
            scale = 0.8;
            opacity = 0.4;
            rotateY = -20;
            zIndex = 20;
          } else if (offset === total - 2) {
            // Far left
            x = -baseX * 1.8;
            z = -100;
            scale = 0.8;
            opacity = 0.4;
            rotateY = 20;
            zIndex = 20;
          }

          return (
            <motion.div
              key={index}
              className="absolute transform-gpu"
              style={{
                zIndex,
                width: "300px",
                height: "300px",
                transformStyle: "preserve-3d",
              }}
              animate={{ x, z, scale, opacity, rotateY }}
              transition={{ duration: 0.7, ease: "easeInOut" }} // slightly faster transition
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg bg-white">
                <img
                  src={img}
                  alt={`carousel-${index}`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {offset === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent pointer-events-none" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
