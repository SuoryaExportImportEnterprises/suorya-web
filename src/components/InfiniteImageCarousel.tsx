import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

const InfiniteImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(nextSlide, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, currentIndex]);

  return (
    <div
      className="relative w-full flex items-center justify-center overflow-hidden py-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-10 z-20 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
      >
        <ChevronLeft size={28} />
      </button>

      {/* 3D Carousel */}
      <div className="flex justify-center items-center w-full perspective-[1600px] h-[420px] relative overflow-hidden">
        <AnimatePresence>
          {images.map((item, index) => {
            const total = images.length;
            const offset = (index - currentIndex + total) % total;
            const baseX = 340;

            // Default positions
            let x = 0,
              z = 0,
              scale = 1,
              opacity = 0.3;

            if (offset === 0) {
              // Center image
              x = 0;
              z = 200;
              scale = 1.05;
              opacity = 1;
            } else if (offset === 1) {
              // Right
              x = baseX;
              z = 100;
              scale = 0.9;
              opacity = 0.8;
            } else if (offset === total - 1) {
              // Left
              x = -baseX;
              z = 100;
              scale = 0.9;
              opacity = 0.8;
            } else if (offset === 2) {
              // Far right (small)
              x = baseX * 1.7;
              z = -100;
              scale = 0.75;
            } else if (offset === total - 2) {
              // Far left (small)
              x = -baseX * 1.7;
              z = -100;
              scale = 0.75;
            }

            return (
              <motion.div
                key={index}
                className="absolute w-[260px] md:w-[320px] h-[400px] transform-gpu"
                animate={{
                  x,
                  z,
                  scale,
                  opacity,
                  rotateY:
                    offset === 1
                      ? -12
                      : offset === total - 1
                      ? 12
                      : 0,
                }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.45)] border border-gray-700 bg-gray-900/30 hover:scale-[1.03] transition-transform duration-500">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-10 z-20 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default InfiniteImageCarousel;
