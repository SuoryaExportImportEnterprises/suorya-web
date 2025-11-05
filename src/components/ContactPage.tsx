// import { Mail, MapPin, Phone } from "lucide-react";
// import { useState } from "react";
// import countries from 'country-telephone-data';

// interface FormData {
//   name: string;
//   company: string;
//   designation: string;
//   email: string;
//   phone: string;
//   inquiry: string;
//   message: string;
//   countryIso?: string;
//   dialCode?: string;
// }

// export function ContactPage() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     company: "",
//     designation: "",
//     email: "",
//     phone: "",
//     inquiry: "",
//     message: "",
//     countryIso: "in",  // default ISO2 code (optional)
//     dialCode: "+91"    // default dial code (optional)
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const emailAddresses = [
//       "alodhankhushi17@gmail.com",
//       "email2@example.com",
//       "email3@example.com",
//     ];

//     const subject = encodeURIComponent(`Suorya Contact Form - ${formData.inquiry}`);
//     const body = encodeURIComponent(
//       `Name: ${formData.name}\nCompany: ${formData.company}\nDesignation: ${formData.designation}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInquiry Type: ${formData.inquiry}\n\nMessage:\n${formData.message}`
//     );

//     window.location.href = `mailto:${emailAddresses.join(",")}?subject=${subject}&body=${body}`;

//     setFormData({
//       name: "",
//       company: "",
//       designation: "",
//       email: "",
//       phone: "",
//       inquiry: "",
//       message: "",
//     });
//   };

//   // 💌 Form section
//   const FormSection = (
//     <div className="flex-1 bg-stone-50 rounded-2xl p-4 lg:p-8 shadow-sm">
//       <h2 className="text-2xl text-stone-800 mb-6">Send Us a Message</h2>
//       <form onSubmit={handleSubmit} className="space-y-3 max-w-2xl mx-auto">
//         {[
//           { id: "name", label: "Name *", type: "text", placeholder: "Your name", required: true },
//           { id: "company", label: "Company *", type: "text", placeholder: "Your company name", required: true },
//           { id: "email", label: "Email *", type: "email", placeholder: "your@email.com", required: true },
//           { id: "phone", label: "Phone (Optional)", type: "tel", placeholder: "+1 (234) 567-8900" },
//         ].map(({ id, label, type, placeholder, required }) => (
//           <div key={id}>
//             <label htmlFor={id} className="block text-stone-700 mb-1 text-md">
//               {label}
//             </label>
//             <input
//               type={type}
//               id={id}
//               required={required}
//               value={(formData as any)[id]}
//               onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
//               className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg 
//               focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
//               placeholder={placeholder}
//             />
//           </div>
//         ))}

//         {/* Designation */}
//         <div>
//           <label htmlFor="designation" className="block text-stone-700 mb-1 text-md">
//             Designation
//           </label>
//           <select
//             id="designation"
//             value={formData.designation}
//             onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
//             className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg 
//               focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
//             required
//           >
//             <option value="" disabled hidden>Select designation</option>
//             <option value="Buyer">Buyer</option>
//             <option value="Merchandiser">Merchandiser</option>
//             <option value="Founder">Designer</option>
//             <option value="CEO">CEO/Founder</option>
//             <option value="Other">Other(s)</option>
//           </select>
//         </div>

//         {/* Inquiry */}
//         <div>
//           <label htmlFor="inquiry" className="block text-stone-700 mb-1 text-md">
//             Type of Inquiry
//           </label>
//           <select
//             id="inquiry"
//             value={formData.inquiry}
//             onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
//             className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg 
//               focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
//             required
//           >
//             <option value="" disabled hidden>Select type</option>
//             <option>Order Placement</option>
//             <option>Product Information</option>
//             <option>Wholesale/Trade</option>
//             <option>Event/Wedding</option>
//             <option>General Inquiry</option>
//           </select>
//         </div>

//         {/* Message */}
//         <div>
//           <label htmlFor="message" className="block text-stone-700 mb-1 text-md">
//             Message *
//           </label>
//           <textarea
//             id="message"
//             rows={3}
//             required
//             value={formData.message}
//             onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//             className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg 
//               focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm resize-none"
//             placeholder="Share your requirements or custom design ideas..."
//           ></textarea>
//         </div>

//         <div>
//           <button
//             type="submit"
//             className="w-full px-6 py-3 mb-10 bg-orange-600 text-white rounded-full 
//               hover:bg-orange-700 transition-colors duration-300 shadow-sm"
//           >
//             Send Message
//           </button>
//         </div>
//       </form>

//       {/* 🧡 Trade Inquiries Note */}
//       <div className="border-t border-stone-200 pt-4 mt-4">
//         <h3 className="text-lg text-stone-800 mb-3">
//           For Trade & Wholesale Inquiries
//         </h3>
//         <p className="text-stone-600 mb-6">
//           We work with retail stores, interior designers and event planners worldwide. Contact us for wholesale pricing and 
//           custom orders.
//         </p>
//       </div>
//     </div>
//   );

//   // 🗺️ Info + Map section
//   const InfoSection = (
//     <div className="flex-1 flex flex-col space-y-8">
//       <div>
//         <h2 className="text-2xl text-stone-800 mb-6">Visit Our Showroom</h2>
//         <div className="space-y-6">
//           <div className="flex items-start space-x-4">
//             <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
//               <MapPin className="w-5 h-5 text-orange-600" />
//             </div>
//             <div>
//               <h3 className="text-lg text-stone-800 mb-1">Location</h3>
//               <p className="text-stone-600">
//                 Visit our showroom to explore our complete collection
//                 <br />
//                 <span className="text-sm">By appointment only</span>
//               </p>
//             </div>
//           </div>

//           <div className="flex items-start space-x-4">
//             <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
//               <Mail className="w-5 h-5 text-orange-600" />
//             </div>
//             <div>
//               <h3 className="text-lg text-stone-800 mb-1">Email Us</h3>
//               <a
//                 href="mailto:info@suorya.co.in"
//                 className="text-orange-600 hover:text-orange-700 transition-colors duration-300"
//               >
//                 info@suorya.co.in
//               </a>
//               <p className="text-sm text-stone-600 mt-1">We respond within 48 hours</p>
//             </div>
//           </div>

//           <div className="flex items-start space-x-4">
//             <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
//               <Phone className="w-5 h-5 text-orange-600" />
//             </div>
//             <div>
//               <h3 className="text-lg text-stone-800 mb-1">Call Us</h3>
//               <a
//                 href="tel:+1234567890"
//                 className="text-orange-600 hover:text-orange-700 transition-colors duration-300"
//               >
//                 0120-4325089
//               </a>
//               <p className="text-sm text-stone-600 mt-1">Mon - Sat, 9:30am - 6pm IST</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <h2 className="text-2xl text-stone-800 mb-6">Find Our Showroom</h2>
//         <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg border border-stone-200">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3390108307194!2d77.38283687475115!3d28.619599984669087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff39a35ee69%3A0x954d9b1c21dcc7b4!2sSuorya%20Exports%20Imports%20Enterprises!5e0!3m2!1sen!2sin!4v1759751159815!5m2!1sen!2sin"
//             width="100%"
//             height="600"
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-white pt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="text-center mb-16 space-y-4">
//           <p className="text-orange-600 tracking-widest uppercase text-sm">
//             Get In Touch
//           </p>
//           <h1 className="text-4xl md:text-5xl text-stone-800">Contact Us</h1>
//           <p className="text-lg text-stone-600 max-w-2xl mx-auto">
//             Have a question or enquiry? Whether it's wholesale, a custom order, or
//             product info, drop us a message and we'll get back to you soon.
//           </p>
//         </div>

//         {/* 💻 Desktop layout */}
//         <div className="hidden lg:flex gap-12 mb-10">
//           {InfoSection}
//           {FormSection}
//         </div>

//         {/* 📱 Mobile layout */}
//         <div className="flex flex-col gap-10 lg:hidden mb-10">
//           {FormSection}
//           {InfoSection}
//         </div>
//       </div>
//     </div>
//   );
// }

































import { Mail, MapPin, Phone } from "lucide-react";
import React, { useEffect, useState } from "react";
import countries from "country-telephone-data";

interface FormData {
  name: string;
  company: string;
  designation: string;
  email: string;
  phone: string;         // national part only (no +countrycode)
  inquiry: string;
  message: string;
  countryIso?: string;   // iso2 like 'in'
  dialCode?: string;     // like '+91'
}

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    designation: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
    countryIso: "in", // default
    dialCode: "+91",  // default
  });

  // Ensure dialCode stays in sync with countryIso at mount (and if countries data differs)
  useEffect(() => {
    const iso = formData.countryIso;
    if (iso) {
      const c = (countries as any).allCountries.find((x: any) => x.iso2 === iso);
      if (c) {
        const d = `+${c.dialCode}`;
        if (d !== formData.dialCode) setFormData(prev => ({ ...prev, dialCode: d }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailAddresses = [
      "alodhankhushi17@gmail.com",
      "email2@example.com",
      "email3@example.com",
    ];

    const subject = encodeURIComponent(`Suorya Contact Form - ${formData.inquiry}`);

    // compose full phone with dial code
    const finalPhone = `${formData.dialCode ?? ""}${formData.phone ?? ""}`;

    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nDesignation: ${formData.designation}\nEmail: ${formData.email}\nPhone: ${finalPhone}\nInquiry Type: ${formData.inquiry}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${emailAddresses.join(",")}?subject=${subject}&body=${body}`;

    // Reset, keep default country/dial (or you can clear to blank)
    setFormData({
      name: "",
      company: "",
      designation: "",
      email: "",
      phone: "",
      inquiry: "",
      message: "",
      countryIso: "in",
      dialCode: "+91",
    });
  };

  // Form section
  const FormSection = (
    <div className="flex-1 bg-stone-50 rounded-2xl p-4 lg:p-8 shadow-sm">
      <h2 className="text-2xl text-stone-800 mb-6">Send Us a Message</h2>

<form onSubmit={handleSubmit} className="space-y-3 max-w-2xl mx-auto">
  {/* Basic fields: Name, Company */}
  {[
    { id: "name", label: "Name *", type: "text", placeholder: "Your name", required: true },
    { id: "company", label: "Company *", type: "text", placeholder: "Your company name", required: true },
  ].map(({ id, label, type, placeholder, required }) => (
    <div key={id}>
      <label htmlFor={id} className="block text-stone-700 mb-1 text-md">
        {label}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        value={(formData as any)[id]}
        onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
        className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
        placeholder={placeholder}
      />
    </div>
  ))}

  {/* Designation */}
        <div>
          <label htmlFor="designation" className="block text-stone-700 mb-1 text-md">
            Designation
          </label>
          <select
            id="designation"
            value={formData.designation}
            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
            className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
            required
          >
            <option value="" disabled hidden>Select designation</option>
            <option value="Buyer">Buyer</option>
            <option value="Merchandiser">Merchandiser</option>
            <option value="Founder">Designer</option>
            <option value="CEO">CEO/Founder</option>
            <option value="Other">Other(s)</option>
          </select>
        </div>

  {/* --- Country + Phone right below Company --- */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {/* Country dropdown (required) */}
    <div>
      <label htmlFor="country" className="block text-stone-700 mb-1 text-md">
        Country *
      </label>
      <select
        id="country"
        value={formData.countryIso}
        onChange={(e) => {
          const iso = e.target.value;
          const c = (countries as any).allCountries.find((x: any) => x.iso2 === iso);
          const dial = c ? `+${c.dialCode}` : "";
          setFormData(prev => ({
            ...prev,
            countryIso: iso,
            dialCode: dial,
          }));
        }}
        className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg
        focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
        required
      >
        <option value="" disabled hidden>Select country</option>
        {(countries as any).allCountries.map((c: any) => (
          <option key={c.iso2} value={c.iso2}>
            {c.name} (+{c.dialCode})
          </option>
        ))}
      </select>
    </div>

    {/* Phone input (required) */}
    <div>
      <label htmlFor="phone" className="block text-stone-700 mb-1 text-md">
        Phone *
      </label>
      <div className="flex items-center">
        <span className="inline-flex items-center px-3 py-2 border border-stone-300 rounded-l-lg bg-stone-50 text-sm">
          {formData.dialCode ?? "+—"}
        </span>
        <input
          type="tel"
          id="phone"
          required
          pattern="[0-9\s\-()]{6,20}"
          value={formData.phone}
          onChange={(e) => {
            let val = e.target.value;
            if (formData.dialCode && val.startsWith(formData.dialCode)) {
              val = val.slice(formData.dialCode.length).trim();
            }
            setFormData({ ...formData, phone: val });
          }}
          className="w-full px-3 py-2 bg-white border border-stone-300 rounded-r-lg 
            focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
          placeholder="Enter phone number"
        />
      </div>
      <p className="text-xs text-stone-500 mt-1">
        We will call you at {formData.dialCode}{formData.phone || " — "}
      </p>
    </div>
  </div>

  {/* Email */}
  <div>
    <label htmlFor="email" className="block text-stone-700 mb-1 text-md">
      Email *
    </label>
    <input
      type="email"
      id="email"
      required
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg 
      focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
      placeholder="your@email.com"
    />
  </div>

        {/* Inquiry */}
        <div>
          <label htmlFor="inquiry" className="block text-stone-700 mb-1 text-md">
            Type of Inquiry
          </label>
          <select
            id="inquiry"
            value={formData.inquiry}
            onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
            className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
            required
          >
            <option value="" disabled hidden>Select type</option>
            <option>Order Placement</option>
            <option>Product Information</option>
            <option>Wholesale/Trade</option>
            <option>Event/Wedding</option>
            <option>General Inquiry</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-stone-700 mb-1 text-md">
            Message *
          </label>
          <textarea
            id="message"
            rows={3}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm resize-none"
            placeholder="Share your requirements or custom design ideas..."
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full px-6 py-3 mb-10 bg-orange-600 text-white rounded-full 
              hover:bg-orange-700 transition-colors duration-300 shadow-sm"
          >
            Send Message
          </button>
        </div>
</form>


      {/* Trade note */}
      <div className="border-t border-stone-200 pt-4 mt-4">
        <h3 className="text-lg text-stone-800 mb-3">
          For Trade & Wholesale Inquiries
        </h3>
        <p className="text-stone-600 mb-6">
          We work with retail stores, interior designers and event planners worldwide. Contact us for wholesale pricing and 
          custom orders.
        </p>
      </div>
    </div>
  );

  // Info + Map section (unchanged)
  const InfoSection = (
    <div className="flex-1 flex flex-col space-y-8">
      <div>
        <h2 className="text-2xl text-stone-800 mb-6">Visit Our Showroom</h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg text-stone-800 mb-1">Location</h3>
              <p className="text-stone-600">
                Visit our showroom to explore our complete collection
                <br />
                <span className="text-sm">By appointment only</span>
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg text-stone-800 mb-1">Email Us</h3>
              <a
                href="mailto:info@suorya.co.in"
                className="text-orange-600 hover:text-orange-700 transition-colors duration-300"
              >
                info@suorya.co.in
              </a>
              <p className="text-sm text-stone-600 mt-1">We respond within 48 hours</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg text-stone-800 mb-1">Call Us</h3>
              <a
                href="tel:+1234567890"
                className="text-orange-600 hover:text-orange-700 transition-colors duration-300"
              >
                0120-4325089
              </a>
              <p className="text-sm text-stone-600 mt-1">Mon-Sat, 9:30am - 6pm IST</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl text-stone-800 mb-6">Find Our Showroom</h2>
        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg border border-stone-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3390108307194!2d77.38283687475115!3d28.619599984669087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff39a35ee69%3A0x954d9b1c21dcc7b4!2sSuorya%20Exports%20Imports%20Enterprises!5e0!3m2!1sen!2sin!4v1759751159815!5m2!1sen!2sin"
            width="100%"
            height="600"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-16 space-y-4">
          <p className="text-orange-600 tracking-widest uppercase text-sm">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl text-stone-800">Contact Us</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Have a question or enquiry? Whether it's wholesale, a custom order, or
            product info, drop us a message and we'll get back to you soon.
          </p>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:flex gap-12 mb-10">
          {InfoSection}
          {FormSection}
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col gap-10 lg:hidden mb-10">
          {FormSection}
          {InfoSection}
        </div>
      </div>
    </div>
  );
}
