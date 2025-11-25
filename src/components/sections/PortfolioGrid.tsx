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
//     "/images/long_bow.png",
//     "/images/red_bow.png",
//   ];

//   // Previous Slide
//   const prevSlide = () =>
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

//   // Next Slide
//   const nextSlide = () =>
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

//   useEffect(() => {
//   if (!isHovered) {
//     intervalRef.current = setInterval(nextSlide, 1800); // faster rotation
//   }

//   return () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null; // reset for safety
//     }
//   };
// }, [isHovered]);


//   return (
//     <section className="py-16 bg-white relative overflow-hidden z-[10] mb-24">
//       {/* Section Header */}
//       <div className="text-center mb-10 space-y-4">
//         <p className="text-orange-600 tracking-widest uppercase text-sm">
//           Inspiration Gallery
//         </p>
//         <h2 className="text-4xl md:text-5xl text-stone-800 font-semibold">
//           See Our Creations in Action
//         </h2>
//         <p className="text-base text-lg text-stone-600 max-w-2xl mx-auto">
//           From store displays to life’s special moments, our designs add that little touch people pause to admire.
//         </p>
//       </div>

//       {/* Carousel */}
//       <div
//         className="flex justify-center items-center w-full relative"
//         style={{ perspective: "1600px", height: "420px" }}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* ← Left Button (Start) */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-[9999] bg-white/90 hover:bg-white p-4 md:p-5 rounded-full shadow-lg hover:scale-110 transition"
//           aria-label="Previous image"
//         >
//           <ChevronLeft className="w-6 h-6 text-stone-800" />
//         </button>

//         {/* → Right Button (End) */}
//         <button
//           onClick={nextSlide}
//           className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-[9999] bg-white/90 hover:bg-white p-4 md:p-5 rounded-full shadow-lg hover:scale-110 transition"
//           aria-label="Next image"
//         >
//           <ChevronRight className="w-6 h-6 text-stone-800" />
//         </button>

//         {/* 🖼️ Carousel Images */}
//         {images.map((img, index) => {
//           const total = images.length;
//           const offset = (index - currentIndex + total) % total;
//           const baseX = 260;

//           let x = 0,
//             z = -400,
//             scale = 0.5,
//             opacity = 0.15,
//             rotateY = 0,
//             zIndex = 0;

//           if (offset === 0) {
//             // Center
//             x = 0;
//             z = 250;
//             scale = 1.1;
//             opacity = 1;
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
//               transition={{ duration: 0.7, ease: "easeInOut" }} // slightly faster transition
//             >
//               <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg bg-white">
//                 <img
//                   src={img}
//                   alt={`carousel-${index}`}
//                   className="absolute inset-0 w-full h-full object-cover object-center"
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








// 3 images slide at a time 

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export function PortfolioGrid() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState<"left" | "right">("right");
//   const [isHovered, setIsHovered] = useState(false);

//   const images = [
//     "/images/gifting.jpg",
//     "/images/satin-bow-garland.JPG",
//     "/images/bouquet.png",
//     "/images/bow_blue.png",
//     "/images/satin-bow-cover.png",
//     "/images/long_bow.png",
//     "/images/red_bow.png",
//   ];

//   const visibleCards = 3;
//   const autoSlideInterval = 1800; // same as your current one

//   const nextSlide = () => {
//     setDirection("right");
//     setCurrentIndex((prev) =>
//       prev + visibleCards >= images.length ? 0 : prev + visibleCards
//     );
//   };

//   const prevSlide = () => {
//     setDirection("left");
//     setCurrentIndex((prev) =>
//       prev === 0 ? Math.max(images.length - visibleCards, 0) : prev - visibleCards
//     );
//   };

//   // ⏱️ Auto Slide effect (pauses on hover)
//   useEffect(() => {
//     if (isHovered) return;
//     const interval = setInterval(nextSlide, autoSlideInterval);
//     return () => clearInterval(interval);
//   }, [isHovered, images.length]);

//   // visible image set
//   const visibleImages = images.slice(currentIndex, currentIndex + visibleCards);
//   const displayedImages =
//     visibleImages.length < visibleCards
//       ? [...visibleImages, ...images.slice(0, visibleCards - visibleImages.length)]
//       : visibleImages;

//   const variants = {
//     enter: (direction: "left" | "right") => ({
//       x: direction === "right" ? 200 : -200,
//       opacity: 0,
//     }),
//     center: { x: 0, opacity: 1 },
//     exit: (direction: "left" | "right") => ({
//       x: direction === "right" ? -200 : 200,
//       opacity: 0,
//     }),
//   };

//   return (
//     <section
//       className="py-16 bg-white relative overflow-hidden z-[10] mb-24"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Section Header */}
//       <div className="text-center mb-10 space-y-4">
//         <p className="text-orange-600 tracking-widest uppercase text-sm">
//           Inspiration Gallery
//         </p>
//         <h2 className="text-4xl md:text-5xl text-stone-800 font-semibold">
//           See Our Creations in Action
//         </h2>
//         <p className="text-base text-lg text-stone-600 max-w-2xl mx-auto">
//           From store displays to life’s special moments, our designs add that little touch people pause to admire.
//         </p>
//       </div>

//       {/* Carousel */}
//       <div className="relative flex items-center justify-center w-full max-w-7xl mx-auto px-4">
//         {/* Left Arrow */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-2 md:left-6 z-10 bg-white/90 hover:bg-white text-stone-800 p-3 rounded-full shadow-md hover:scale-110 transition"
//         >
//           <ChevronLeft size={24} />
//         </button>

//         {/* Animated Images */}
//         <div className="w-full overflow-hidden">
//           <div className="relative w-full flex justify-center items-center">
//             <AnimatePresence custom={direction} mode="popLayout">
//               <motion.div
//                 key={currentIndex}
//                 custom={direction}
//                 variants={variants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{
//                   x: { type: "spring", stiffness: 120, damping: 20 },
//                   opacity: { duration: 0.3 },
//                 }}
//                 className="flex justify-center gap-6 w-full"
//               >
//                 {displayedImages.map((img, index) => (
//                   <div
//                     key={index}
//                     className="w-full md:w-1/3 transform transition-transform duration-700"
//                   >
//                     <div className="relative w-full h-[300px] md:h-[360px] overflow-hidden rounded-2xl shadow-lg">
//                       <img
//                         src={img}
//                         alt={`carousel-${index}`}
//                         className="absolute inset-0 w-full h-full object-cover object-center"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={nextSlide}
//           className="absolute right-2 md:right-6 z-10 bg-white/90 hover:bg-white text-stone-800 p-3 rounded-full shadow-md hover:scale-110 transition"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>
//     </section>
//   );
// }








// INFINITE SLIDER

// import React from "react";
// //@ts-ignore
// import "./infiniteSlider.css";

// export function PortfolioGrid() {
//   const images = [
//     "/images/gifting.jpg",
//     "/images/satin-bow-garland.JPG",
//     "/images/bouquet.jpg",
//     "/images/bow_blue.png",
//     "/images/satin-bow-cover.png",
//     "/images/long_bow.JPG",
//     "/images/red_bow.png",
//   ];

//   const loopImages = [...images, ...images];

//   return (
//     <section className="py-16 bg-white relative overflow-hidden z-[10] mb-24">
//       {/* Section Header */}
//       <div className="text-center mb-10 space-y-4">
//         <p className="text-orange-600 tracking-widest uppercase text-sm">
//           Inspiration Gallery
//         </p>
//         <h2 className="text-4xl md:text-5xl text-stone-800 font-semibold">
//           See our Creations in Action
//         </h2>
//         <p className="text-base text-lg text-stone-600 max-w-2xl mx-auto">
//           From store displays to life’s special moments, our designs add that little touch people pause to admire.
//         </p>
//       </div>

//       {/* Infinite Slider */}
//       <div className="relative overflow-hidden w-full">
//         <div className="slider-track flex gap-6">
//           {loopImages.map((img, i) => (
//             <div
//               key={i}
//               className="slide-container"
//             >
//               <img
//                 src={img}
//                 alt={`slide-${i}`}
//                 className="slide-image"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Gradient Edges */}
//         <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/70 to-transparent"></div>
//       </div>
//     </section>
//   );
// }
























// Swipable Slider with infinite carousel
// import React, { useRef, useState } from "react";
// //@ts-ignore
// import "./infiniteSlider.css";

// export function PortfolioGrid() {
//   const images = [
//     "/images/gifting.jpg",
//     "/images/satin-bow-garland.JPG",
//     "/images/bouquet.jpg",
//     "/images/bow_blue.png",
//     "/images/satin-bow-cover.png",
//     "/images/long_bow.JPG",
//     "/images/red_bow.png",
//   ];

//   const loopImages = [...images, ...images];

//   const trackRef = useRef<HTMLDivElement>(null);

//   // Swipe state
//   const [startX, setStartX] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [currentTranslate, setCurrentTranslate] = useState(0);

//   // Stop infinite animation
//   const stopAnimation = () => {
//     if (trackRef.current) {
//       trackRef.current.style.animation = "none";
//     }
//   };

//   // Resume infinite animation
//   const resumeAnimation = () => {
//     if (trackRef.current) {
//       trackRef.current.style.animation = "";
//     }
//   };

//   // TOUCH start
//   const handleTouchStart = (e: React.TouchEvent) => {
//     stopAnimation();
//     setStartX(e.touches?.[0]?.clientX ?? 0);
//     setIsDragging(true);
//   };

//   // TOUCH move
//   const handleTouchMove = (e: React.TouchEvent) => {
//     if (!isDragging || !trackRef.current) return;

//     const diff = e.touches?.[0]?.clientX ?? 0 - startX;

//     trackRef.current.style.transform = `translateX(${currentTranslate + diff}px)`;
//   };

//   // TOUCH end
//   const handleTouchEnd = (e: React.TouchEvent) => {
//     if (!isDragging) return;

//     const endX = e.changedTouches?.[0]?.clientX ?? 0;
//     const diff = endX - startX;

//     if (diff > 50) {
//       setCurrentTranslate((prev) => prev + 200);
//     } else if (diff < -50) {
//       setCurrentTranslate((prev) => prev - 200);
//     }

//     resumeAnimation();
//     setIsDragging(false);
//   };

//   // Desktop drag support
//   const handleMouseDown = (e: React.MouseEvent) => {
//     stopAnimation();
//     setStartX(e.clientX);
//     setIsDragging(true);
//   };

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging || !trackRef.current) return;

//     const diff = e.clientX - startX;
//     trackRef.current.style.transform = `translateX(${currentTranslate + diff}px)`;
//   };

//   const handleMouseUp = (e: React.MouseEvent) => {
//     if (!isDragging) return;

//     const diff = e.clientX - startX;

//     if (diff > 50) {
//       setCurrentTranslate((prev) => prev + 200);
//     } else if (diff < -50) {
//       setCurrentTranslate((prev) => prev - 200);
//     }

//     resumeAnimation();
//     setIsDragging(false);
//   };

//   return (
//     <section className="py-16 bg-white relative overflow-hidden z-[10] mb-24">
//       {/* Header */}
//       <div className="text-center mb-10 space-y-4">
//         <p className="text-orange-600 tracking-widest uppercase text-sm">
//           Inspiration Gallery
//         </p>
//         <h2 className="text-4xl md:text-5xl text-stone-800 font-semibold">
//           See our Creations in Action
//         </h2>
//         <p className="text-base text-lg text-stone-600 max-w-2xl mx-auto">
//           From store displays to life’s special moments, our designs add that little touch people pause to admire.
//         </p>
//       </div>

//       {/* Infinite Slider */}
//       <div
//         className="relative overflow-hidden w-full"
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//         onMouseLeave={handleMouseUp}
//       >
//         <div
//           className="slider-track flex gap-6"
//           ref={trackRef}
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//           onMouseDown={handleMouseDown}
//         >
//           {loopImages.map((img, i) => (
//             <div key={i} className="slide-container">
//               <img src={img} alt={`slide-${i}`} className="slide-image" />
//             </div>
//           ))}
//         </div>

//         {/* Gradient edges */}
//         <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/70 to-transparent"></div>
//       </div>
//     </section>
//   );
// }











// import React, { useRef } from "react";
// // @ts-ignore
// import "./infiniteSlider.css";

// export function PortfolioGrid() {
//   const images = [
//     "/images/gifting.jpg",
//     "/images/satin-bow-garland.JPG",
//     "/images/bouquet.jpg",
//     "/images/bow_blue.png",
//     "/images/satin-bow-cover.png",
//     "/images/long_bow.JPG",
//     "/images/red_bow.png",
//   ];

//   const loopImages = [...images, ...images];
//   const trackRef = useRef<HTMLDivElement>(null);

//   const slideWidth = 300 + 24; // card + gap

//   const moveLeft = () => {
//     if (trackRef.current) {
//       trackRef.current.style.animation = "none"; // stop current animation
//       const current = trackRef.current.style.transform || "translateX(0px)";
//       const currentX = parseFloat(current.replace("translateX(", "").replace("px)", "")) || 0;
//       trackRef.current.style.transform = `translateX(${currentX + slideWidth}px)`;
//     }
//   };

//   const moveRight = () => {
//     if (trackRef.current) {
//       trackRef.current.style.animation = "none"; // stop current animation
//       const current = trackRef.current.style.transform || "translateX(0px)";
//       const currentX = parseFloat(current.replace("translateX(", "").replace("px)", "")) || 0;
//       trackRef.current.style.transform = `translateX(${currentX - slideWidth}px)`;
//     }
//   };

//   return (
//     <section className="py-16 bg-white relative overflow-hidden z-[10] mb-24">
//       {/* Section Header */}
//       <div className="text-center mb-10 space-y-4">
//         <p className="text-orange-600 tracking-widest uppercase text-sm">
//           Inspiration Gallery
//         </p>
//         <h2 className="text-4xl md:text-5xl text-stone-800 font-semibold">
//           See our Creations in Action
//         </h2>
//         <p className="text-base text-lg text-stone-600 max-w-2xl mx-auto">
//           From store displays to life’s special moments, our designs add that little touch people pause to admire.
//         </p>
//       </div>

//       {/* Infinite Slider */}
//       <div className="relative overflow-hidden w-full">

//         {/* Slider Track */}
//         <div className="slider-track flex gap-6" ref={trackRef}>
//           {loopImages.map((img, i) => (
//             <div key={i} className="slide-container">
//               <img
//                 src={img}
//                 alt={`slide-${i}`}
//                 className="slide-image"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Left Button */}
//         <button
//           onClick={moveLeft}
//           className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 shadow-md hover:bg-white p-3 rounded-full"
//         >
//           ❮
//         </button>

//         {/* Right Button */}
//         <button
//           onClick={moveRight}
//           className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 shadow-md hover:bg-white p-3 rounded-full"
//         >
//           ❯
//         </button>

//         {/* Gradient Edges */}
//         <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/70 to-transparent"></div>
//       </div>
//     </section>
//   );
// }









// import React from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// //@ts-ignore
// import "@splidejs/react-splide/css";

// export function PortfolioGrid() {
//   const images = [
//     "/images/gifting.jpg",
//     "/images/satin-bow-garland.JPG",
//     "/images/bouquet.jpg",
//     "/images/bow_blue.png",
//     "/images/satin-bow-cover.png",
//     "/images/long_bow.JPG",
//     "/images/red_bow.png",
//   ];

//   return (
//     <section className="py-16 bg-white relative overflow-hidden z-10 mb-24">
      
//       <div className="text-center mb-10 space-y-4">
//         <p className="text-orange-600 tracking-widest uppercase text-sm">
//           Inspiration Gallery
//         </p>
//         <h2 className="text-4xl md:text-5xl text-stone-800 font-semibold">
//           See our Creations in Action
//         </h2>
//         <p className="text-base text-lg text-stone-600 max-w-2xl mx-auto">
//           From store displays to life’s special moments, our designs add that little touch people pause to admire.
//         </p>
//       </div>

//       <Splide
//         options={{
//           type: "loop",
//           arrows: true,
//           pagination: false,
//           drag: true,

//           // ⭐ SHOW EXACTLY 4 IMAGES
//           perPage: 4,
//           gap: "24px",
//           padding: "0px",
//           trimSpace: true,

//           // ⭐ SAME SPEED AS YOUR ORIGINAL INFINITE CSS
//           autoScroll: {
//             pauseOnHover: true,
//             pauseOnFocus: false,
//             rewind: false,
//             speed: 1.2,
//           },
//         }}
//         extensions={{ AutoScroll }}
//         className="px-4"
//       >
//         {[...images, ...images].map((img, i) => (
//           <SplideSlide key={i}>
//             <div
//               style={{
//                 width: "300px",
//                 height: "300px",
//                 borderRadius: "16px",
//                 overflow: "hidden",
//                 background: "#f5f5f5",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//               }}
//             >
//               <img
//                 src={img}
//                 alt={`slide-${i}`}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />
//             </div>
//           </SplideSlide>
//         ))}
//       </Splide>
//     </section>
//   );
// }










import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
//@ts-ignore
import "@splidejs/react-splide/css";

export function PortfolioGrid() {
  const images = [
    "/images/gifting.jpg",
    "/images/satin-bow-garland.JPG",
    "/images/bouquet.jpg",
    "/images/bow_blue.png",
    "/images/satin-bow-cover.png",
    "/images/long_bow.JPG",
    "/images/red_bow.png",
  ];

  const repeatedImages = [...images, ...images];

  return (
    <section className="py-16 bg-white relative overflow-hidden z-10 mb-24">
      
      {/* Header */}
      <div className="text-center mb-10 space-y-4">
        <p className="text-orange-600 tracking-widest uppercase text-sm">
          Inspiration Gallery
        </p>
        <h2 className="text-4xl md:text-5xl text-stone-800 font-semibold">
          See our Creations in Action
        </h2>
        <p className="text-base text-lg text-stone-600 max-w-2xl mx-auto">
          From store displays to life’s special moments, our designs add that little touch people pause to admire.
        </p>
      </div>

      <Splide
        options={{
          type: "loop",
          arrows: true,
          pagination: false,
          drag: true,

          perPage: 4,
          perMove: 1,
          gap: "24px",
          padding: 0,
          trimSpace: true,

          autoScroll: {
            pauseOnHover: true,
            speed: 1.8,
          },

          breakpoints: {
            1024: { perPage: 3, gap: "20px" },
            768: { perPage: 2, gap: "16px" },
            480: { perPage: 2, gap: "12px" },
          },
        }}
        extensions={{ AutoScroll }}
        className="px-0"
      >
        {repeatedImages.map((img, i) => (
          <SplideSlide key={i}>
            <div className="gallery-card">
              <img src={img} alt={`slide-${i}`} className="gallery-img" />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
