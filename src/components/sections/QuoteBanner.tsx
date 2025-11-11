import React from "react";

export function QuoteBanner() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-orange-100 rounded-2xl shadow-sm p-8 md:p-10 text-center">
          {/* Main Quote */}
          <p className="text-lg font-normal mb-0 leading-relaxed text-stone-600 mx-auto max-w-4xl">
            With more than 30 years of experience working with international brands, 
            we follow export best practices and meet international quality standards. 
            We are{" "}
            <span className="inline-flex items-center align-middle mx-1.5 relative top-[1px]">
              <img
                src="/home/sedex-seeklogo.png"
                alt="Sedex"
                className="inline-block object-contain"
                style={{
                  width: 47,
                  height: 47,
                  verticalAlign: "middle",
                  position: "relative",
                  top: "-2px",
                }}
              />
              <span className="ml-2 mb-1">Certified</span>
            </span>
            , which reflects our commitment to responsible and ethical production.
          </p>
        </div>
      </div>
    </section>
  );
}
