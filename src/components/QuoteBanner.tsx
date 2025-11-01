// // src/components/QuoteBanner.tsx
// import React from "react";

// export function QuoteBanner() {
//   return (
//     <div className="w-full bg-gradient-to-r from-orange-50 via-white to-orange-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="py-4">
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="text-stone-800 italic text-lg md:text-xl leading-snug">
//               "With more than 30 years of experience working with top international brands, we have followed the best export practices. Our products meet international quality standards. We are SEDEX certified. These certifications reflect our strong commitment towards ethical and responsible practices."
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { CheckCircle } from "lucide-react";

// export function QuoteBanner() {
//   return (
//     <section className="w-full bg-orange-50/60 py-16 flex justify-center">
//       <div className="w-[90%] md:w-[75%] bg-white rounded-2xl shadow-md px-6 py-10 md:px-12 md:py-14 text-center border border-orange-100">
//         <p
//           className="text-lg md:text-xl leading-relaxed text-stone-700 italic"
//           style={{ fontFamily: "Montserrat, sans-serif" }}
//         >
//           "With more than 30 years of experience working with top international
//           brands, we have followed the best export practices. Our products meet
//           international quality standards. We are{" "}
//           <strong className="text-orange-600">SEDEX certified</strong>. These
//           certifications reflect our strong commitment towards ethical and
//           responsible practices."
//         </p>

//         <div className="flex justify-center items-center gap-6 mt-8 flex-wrap text-stone-700">
//           <div className="flex items-center gap-2">
//             <CheckCircle className="w-5 h-5 text-orange-600" />
//             <span className="text-sm md:text-base font-medium">
//               Ethical Practices
//             </span>
//           </div>

//           <div className="flex items-center gap-2">
//             <CheckCircle className="w-5 h-5 text-orange-600" />
//             <span className="text-sm md:text-base font-medium">
//               Global Quality Standards
//             </span>
//           </div>

//           <div className="flex items-center gap-2">
//             <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white">
//               S
//             </div>
//             <span className="text-sm md:text-base font-medium">
//               SEDEX Certified
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







// import React from "react";
// import { CheckCircle } from "lucide-react";

// export function QuoteBanner() {
//   return (
//     <section className="w-full bg-white py-16 flex justify-center">
//       {/* Card with tint, fade from sides */}
//       <div
//         className="w-[90%] md:w-[75%] rounded-3xl shadow-lg px-6 py-10 md:px-12 md:py-14 text-center border border-orange-100"
//         style={{
//           background:
//             "linear-gradient(to right, rgba(255, 186, 107, 0.15), rgba(255, 255, 255, 0.9), rgba(255, 186, 107, 0.15))",
//         }}
//       >
//         <p
//           className="text-lg md:text-xl leading-relaxed text-stone-700 italic"
//           style={{ fontFamily: "Montserrat, sans-serif" }}
//         >
//           "With more than 30 years of experience working with top international
//           brands, we have followed the best export practices. Our products meet
//           international quality standards. We are{" "}
//           <strong className="text-orange-600">SEDEX certified</strong>. These
//           certifications reflect our strong commitment towards ethical and
//           responsible practices."
//         </p>

//         {/* Icons & certifications */}
//         <div className="flex justify-center items-center gap-6 mt-8 flex-wrap text-stone-700">
//           <div className="flex items-center gap-2">
//             <CheckCircle className="w-5 h-5 text-orange-600" />
//             <span className="text-sm md:text-base font-medium">
//               Ethical Practices
//             </span>
//           </div>

//           <div className="flex items-center gap-2">
//             <CheckCircle className="w-5 h-5 text-orange-600" />
//             <span className="text-sm md:text-base font-medium">
//               Global Quality Standards
//             </span>
//           </div>

//           {/* Placeholder for SEDEX logo */}
//           <div className="flex items-center gap-2">
//             <img
//               src="/path-to-your-sedex-logo.png"
//               alt="SEDEX Certified"
//               className="w-8 h-8 object-contain"
//             />
//             <span className="text-sm md:text-base font-medium">
//               SEDEX Certified
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


















import React from "react";
import { CheckCircle } from "lucide-react";

export function QuoteBanner() {
  return (
    <section className="w-full bg-white py-12 flex justify-center">
      {/* Card with tint, fade from sides */}
      <div
        className="w-[90%] md:w-[75%] rounded-3xl shadow-lg px-6 py-10 md:px-12 md:py-14 text-center border border-orange-100"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 186, 107, 0.15), rgba(255, 255, 255, 0.9), rgba(255, 186, 107, 0.15))",
        }}
      >
        <p
          className="text-lg md:text-xl leading-relaxed text-stone-700"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          "With more than 30 years of experience working with top international
          brands, we have followed the best export practices. Our products meet
          international quality standards. We are{" "}
          <strong className="text-orange-600">SEDEX certified</strong>. These
          certifications reflect our strong commitment towards ethical and
          responsible practices."
        </p>

        {/* Icons & certifications */}
        <div className="flex justify-center items-center gap-6 mt-8 flex-wrap text-stone-700">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-orange-600" />
            <span className="text-sm md:text-base font-medium">
              Ethical Practices
            </span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-orange-600" />
            <span className="text-sm md:text-base font-medium">
              Global Quality Standards
            </span>
          </div>

          {/* Placeholder for SEDEX logo */}
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-orange-600" />
            <img
            src="/home/sedex-seeklogo.png"
            alt="SEDEX Certified"
            className="object-contain"
            style={{ width: "2.75rem", height: "2.75rem" }} // perfect balance between 6 & 8
            />

            <span className="text-sm md:text-base font-medium">
              Certified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
