import React from "react";
import {
  Truck,
  Sparkles,
  BadgeCheck,
  BadgeDollarSign,
  Group,
} from "lucide-react";
//@ts-ignore
import "./OurEthos.css";

export default function OurEthos() {
  const items = [
    { key: "craft", label: "Premium Craftsmanship", Icon: Sparkles },
    { key: "quality", label: "Quality Assured", Icon: BadgeCheck },
    { key: "timely", label: "Timely Delivery", Icon: Truck },
    { key: "collab", label: "Design Collaboration", Icon: Group },
    { key: "trend", label: "Competitive Pricing", Icon: BadgeDollarSign },
  ];

  return (
    <section
      aria-labelledby="ethos-heading"
      className="py-12 mb-12 mt-16 bg-white w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-orange-600 tracking-widest uppercase text-sm">
            We build what we’d want to receive
          </p>
          <h2
            id="ethos-heading"
            className="text-4xl md:text-5xl font-semibold text-stone-800"
          >
            What We Deliver
          </h2>
        </div>

        {/* Custom grid container */}
        <div className="ethos-grid">
          {items.map((it) => (
            <div
              key={it.key}
              className="ethos-card flex flex-col items-center justify-center py-6 px-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,118,0,0.06) 0%, rgba(255,255,255,0.0) 50%, rgba(255,118,0,0.06) 100%)",
              }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-stone-200 flex items-center justify-center mb-3">
                <it.Icon className="w-6 h-6 md:w-7 md:h-7 text-orange-600" />
              </div>
              <div className="text-stone-700 font-medium text-center text-base md:text-lg leading-snug">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
