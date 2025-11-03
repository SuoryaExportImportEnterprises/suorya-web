import React from "react";
import { Truck, Users, Sparkles, BadgeCheck, BadgeDollarSign , Group } from "lucide-react";
export default function OurEthos() {
  const items = [
    { key: "craft", label: "Premium Craftsmanship", Icon: Sparkles },
    { key: "quality", label: "Focus on Quality", Icon: BadgeCheck },
    { key: "timely", label: "Timely Delivery", Icon: Truck },
    { key: "collab", label: "Design Collaboration", Icon: Group },
    { key: "trend", label: "Competitive Pricing", Icon: BadgeDollarSign },
  ];

  return (
    <section aria-labelledby="ethos-heading" className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-orange-600 tracking-widest uppercase text-sm">
            We build what we’d want to receive
          </p>
          <h2
            id="ethos-heading"
            className="text-2xl md:text-3xl font-semibold text-stone-800"
          >
            What We Deliver
          </h2>
        </div>

        <div className="w-full">
          <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-4 justify-between items-center">
            {items.map((it) => (
              <div
                key={it.key}
                className="flex-1 min-w-[140px] md:w-1/5 flex flex-col items-center justify-center py-3 md:py-4 px-3 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,118,0,0.06) 0%, rgba(255,255,255,0.0) 50%, rgba(255,118,0,0.06) 100%)",
                }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center mb-2 md:mb-3">
                  <it.Icon className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                </div>
                <div className="text-stone-900 font-medium text-sm md:text-base text-center">
                  {it.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}