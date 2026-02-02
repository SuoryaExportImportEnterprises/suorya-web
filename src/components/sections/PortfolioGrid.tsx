import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
//@ts-ignore
import "@splidejs/react-splide/css";

export function PortfolioGrid() {
  const images = [
    "/images/productNew1.jpeg",
    "/images/satin-bow-garland.JPG",
    "/images/productNew3.jpeg",
    "/images/bow_blue.png",
    "/images/satin-bow-cover.png",
    "/images/productNew.jpeg",
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
