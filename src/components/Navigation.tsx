import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "./ui/button";
// @ts-ignore
import logoImage from "/home/logoImage.png";
// @ts-ignore
import favicon from "/home/favicon.png";

const navigationItems = [
  "Home",
  "Ribbons",
  "Trims",
  "Design Studio",
  "Packaging",
];

interface NavigationProps {
  onNavigate: (page: string) => void;
  onSearch: (query: string) => void;
  currentPage: string;
}

export function Navigation({ onNavigate, onSearch, currentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      setSearchQuery("");
    }
  };

  const handleNavClick = (item: string) => {
    setIsOpen(false);
    onNavigate(item.toLowerCase().replace(/\s+/g, "-"));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src={favicon}
                alt="Suorya Logo"
                className="object-contain"
                style={{ height: "3.9rem", width: "3.9rem" }}
              />
              <span className="text-3xl tracking-wider text-stone-800">
                Suorya
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`text-stone-700 hover:text-orange-600 transition-colors duration-300 ${
                  currentPage === item.toLowerCase().replace(/\s+/g, "-")
                    ? "text-orange-600"
                    : ""
                }`}
                
              >
                {item}
              </button>
            ))}

            {/* Contact Us Button */}
            <button
              onClick={() => onNavigate("contact")}
              className={`underline text-orange-600 hover:text-orange-600 transition-colors duration-300 ${
                currentPage === "contact" ? "text-orange-600" : ""
              }`}
            >
              Contact Us
            </button>
            
            {/* Visible Search Input */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What are you looking for?"
                className="w-64 px-4 py-2 pr-10 bg-stone-50 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-stone-600 hover:text-orange-600"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What are you looking for?"
                className="w-full px-4 py-2 pr-10 bg-stone-50 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-stone-600 hover:text-orange-600"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left py-2 text-stone-700 hover:text-orange-600 ${
                  currentPage === item.toLowerCase().replace(/\s+/g, "-")
                    ? "text-orange-600"
                    : ""
                }`}
              >
                {item}
              </button>
            ))}

            <Button
              onClick={() => {
                setIsOpen(false);
                onNavigate("contact");
              }}
              className="w-full bg-orange-600 text-white hover:bg-orange-700 mt-4"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}




// import { useState } from "react";
// import { Menu, X, Search } from "lucide-react";
// import { Button } from "./ui/button";
// // @ts-ignore
// import logoImage from "/home/logoImage.png";
// // @ts-ignore
// import favicon from "/home/favicon.png";

// const navigationItems = [
//   "Home",
//   "Ribbons",
//   "Trims",
//   "Bows",
//   "Garlands",
//   "Packaging",
// ];

// interface NavigationProps {
//   onNavigate: (page: string) => void;
//   onSearch: (query: string) => void;
//   currentPage: string;
// }

// export function Navigation({ onNavigate, onSearch, currentPage }: NavigationProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       onSearch(searchQuery.trim());
//       setSearchQuery("");
//     }
//   };

//   const handleNavClick = (item: string) => {
//     setIsOpen(false);
//     onNavigate(item.toLowerCase().replace(/\s+/g, "-"));
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <button
//               onClick={() => onNavigate("home")}
//               className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
//             >
//               <img
//                 src={favicon}
//                 alt="Suorya Logo"
//                 className="object-contain"
//                 style={{ height: "3.9rem", width: "3.9rem" }}
//               />
//               <span className="text-3xl tracking-wider text-stone-800">
//                 Suorya
//               </span>
//             </button>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-6">
//             {navigationItems.map((item) => {
//               const key = item.toLowerCase().replace(/\s+/g, "-");
//               const isActive = currentPage === key;

//               return (
//                 <button
//                   key={item}
//                   onClick={() => handleNavClick(item)}
//                   // 'group' lets us target hover state for child dot
//                   className={`group flex items-center gap-2 transition-colors duration-300 ${
//                     isActive ? "text-orange-600" : "text-stone-700 hover:text-orange-600"
//                   }`}
//                   aria-current={isActive ? "page" : undefined}
//                 >
//                   {/* Left dot: visible on hover OR when active */}
//                   <span
//                     className={`inline-block w-2 h-2 rounded-full mr-1 transition-opacity duration-200 ${
//                       isActive ? "opacity-100" : "opacity-100 group-hover:opacity-100"
//                     }`}
//                     style={{ backgroundColor: "rgba(249,115,22,1)" }} // Tailwind orange-500/orange-600
//                   />
//                   <span className="leading-none">{item}</span>
//                 </button>
//               );
//             })}

//             {/* Contact Us - always orange text on desktop and slightly bolder */}
//             <button
//               onClick={() => onNavigate("contact")}
//               className={`flex items-center gap-2 transition-colors duration-300 text-orange-600 font-medium`}
//               aria-current={currentPage === "contact" ? "page" : undefined}
//             >
//               {/* keep a persistent dot for active contact too (looks consistent) */}
//               <span
//                 className={`inline-block w-2 h-2 rounded-full mr-1 ${
//                   currentPage === "contact" ? "opacity-100" : "opacity-100"
//                 }`}
//                 style={{ backgroundColor: "rgba(249,115,22,1)" }}
//               />
//               Contact Us
//             </button>

//             {/* Visible Search Input */}
//             <form onSubmit={handleSearch} className="relative">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="What are you looking for?"
//                 className="w-64 px-4 py-2 pr-10 bg-stone-50 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
//               />
//               <button
//                 type="submit"
//                 className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-stone-600 hover:text-orange-600"
//                 aria-label="Search"
//               >
//                 <Search className="w-4 h-4" />
//               </button>
//             </form>
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="lg:hidden bg-white border-t border-stone-200">
//           <div className="px-4 pt-2 pb-4 space-y-2">
//             {/* Mobile Search */}
//             <form onSubmit={handleSearch} className="relative mb-4">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="What are you looking for?"
//                 className="w-full px-4 py-2 pr-10 bg-stone-50 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
//               />
//               <button
//                 type="submit"
//                 className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-stone-600 hover:text-orange-600"
//                 aria-label="Search"
//               >
//                 <Search className="w-4 h-4" />
//               </button>
//             </form>

//             {navigationItems.map((item) => {
//               const key = item.toLowerCase().replace(/\s+/g, "-");
//               const isActive = currentPage === key;
//               return (
//                 <button
//                   key={item}
//                   onClick={() => handleNavClick(item)}
//                   className={`block w-full text-left py-2 flex items-center gap-2 ${
//                     isActive ? "text-orange-600" : "text-stone-700 hover:text-orange-600"
//                   }`}
//                 >
//                   <span
//                     className={`inline-block w-2 h-2 rounded-full mr-2 transition-opacity duration-200 ${
//                       isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
//                     }`}
//                     style={{ backgroundColor: "rgba(249,115,22,1)" }}
//                   />
//                   {item}
//                 </button>
//               );
//             })}

//             {/* Mobile Contact button (keeps orange filled look) */}
//             <Button
//               onClick={() => {
//                 setIsOpen(false);
//                 onNavigate("contact");
//               }}
//               className="w-full bg-orange-600 text-white hover:bg-orange-700 mt-4"
//             >
//               Contact Us
//             </Button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }



















// import { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Menu, X, Search } from "lucide-react";
// import { Button } from "./ui/button";
// // @ts-ignore
// import favicon from "/home/favicon.png";

// const navigationItems = [
//   { name: "Home", path: "/" },
//   { name: "Ribbons", path: "/ribbons" },       // complex
//   { name: "Trims", path: "/trims" },           // simple
//   { name: "Design Studio", path: "/design-studio" },
//   { name: "Packaging", path: "/packaging" },   // simple
// ];

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
//       setSearchQuery("");
//       setIsOpen(false);
//     }
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <NavLink
//               to="/"
//               className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
//             >
//               <img
//                 src={favicon}
//                 alt="Suorya Logo"
//                 className="object-contain"
//                 style={{ height: "3.9rem", width: "3.9rem" }}
//               />
//               <span className="text-3xl tracking-wider text-stone-800">
//                 Suorya
//               </span>
//             </NavLink>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-6">
//             {navigationItems.map(({ name, path }) => (
//               <NavLink
//                 key={name}
//                 to={path}
//                 className={({ isActive }) =>
//                   `text-stone-700 hover:text-orange-600 transition-colors duration-300 ${
//                     isActive ? "text-orange-600 font-semibold" : ""
//                   }`
//                 }
//               >
//                 {name}
//               </NavLink>
//             ))}

//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 `underline text-orange-600 hover:text-orange-600 transition-colors duration-300 ${
//                   isActive ? "font-semibold" : ""
//                 }`
//               }
//             >
//               Contact Us
//             </NavLink>

//             {/* Search Input */}
//             <form onSubmit={handleSearch} className="relative">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="What are you looking for?"
//                 className="w-64 px-4 py-2 pr-10 bg-stone-50 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
//               />
//               <button
//                 type="submit"
//                 className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-stone-600 hover:text-orange-600"
//               >
//                 <Search className="w-4 h-4" />
//               </button>
//             </form>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="lg:hidden bg-white border-t border-stone-200">
//           <div className="px-4 pt-2 pb-4 space-y-2">
//             {/* Mobile Search */}
//             <form onSubmit={handleSearch} className="relative mb-4">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="What are you looking for?"
//                 className="w-full px-4 py-2 pr-10 bg-stone-50 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
//               />
//               <button
//                 type="submit"
//                 className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-stone-600 hover:text-orange-600"
//               >
//                 <Search className="w-4 h-4" />
//               </button>
//             </form>

//             {navigationItems.map(({ name, path }) => (
//               <NavLink
//                 key={name}
//                 to={path}
//                 onClick={() => setIsOpen(false)}
//                 className={({ isActive }) =>
//                   `block w-full text-left py-2 text-stone-700 hover:text-orange-600 ${
//                     isActive ? "text-orange-600 font-semibold" : ""
//                   }`
//                 }
//               >
//                 {name}
//               </NavLink>
//             ))}

//             <NavLink
//               to="/contact"
//               onClick={() => setIsOpen(false)}
//               className="block w-full mt-4"
//             >
//               <Button className="w-full bg-orange-600 text-white hover:bg-orange-700">
//                 Contact Us
//               </Button>
//             </NavLink>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }






// import { useState } from "react";
// import { NavLink, useNavigate, useLocation } from "react-router-dom";
// import { Menu, X, Search } from "lucide-react";
// import { Button } from "./ui/button";
// // @ts-ignore
// import favicon from "/home/favicon.png";

// const navigationItems = [
//   { name: "Home", path: "/" },
//   { name: "Ribbons", path: "/ribbons" },
//   { name: "Trims", path: "/trims" },
//   { name: "Design Studio", path: "/design-studio" },
//   { name: "Packaging", path: "/packaging" },
// ];

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
//       setSearchQuery("");
//       setIsOpen(false);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <NavLink
//               to="/"
//               onClick={scrollToTop}
//               className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
//             >
//               <img
//                 src={favicon}
//                 alt="Suorya Logo"
//                 className="object-contain"
//                 style={{ height: "3.9rem", width: "3.9rem" }}
//               />
//               <span className="text-3xl tracking-wider text-stone-800">
//                 Suorya
//               </span>
//             </NavLink>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-6">
//             {navigationItems.map(({ name, path }) => (
//               <NavLink
//                 key={name}
//                 to={path}
//                 onClick={scrollToTop}
//                 className={({ isActive }) =>
//                   `text-stone-700 hover:text-orange-600 transition-colors duration-300 ${
//                     isActive ? "text-orange-600" : ""
//                   }`
//                 }
//               >
//                 {name}
//               </NavLink>
//             ))}

//             <NavLink
//               to="/contact"
//               onClick={scrollToTop}
//               className={({ isActive }) =>
//                 `underline text-orange-600 hover:text-orange-600 transition-colors duration-300 ${
//                   isActive ? "font-semibold text-yellow-800" : ""
//                 }`
//               }
//             >
//               Contact Us
//             </NavLink>

//             {/* Search Input */}
//             <form onSubmit={handleSearch} className="relative">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="What are you looking for?"
//                 className="w-64 px-4 py-2 pr-10 bg-stone-50 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
//               />
//               <button
//                 type="submit"
//                 className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-stone-600 hover:text-orange-600"
//               >
//                 <Search className="w-4 h-4" />
//               </button>
//             </form>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="lg:hidden bg-white border-t border-stone-200">
//           <div className="px-4 pt-2 pb-4 space-y-2">
//             {/* Mobile Search */}
//             <form onSubmit={handleSearch} className="relative mb-4">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="What are you looking for?"
//                 className="w-full px-4 py-2 pr-10 bg-stone-50 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
//               />
//               <button
//                 type="submit"
//                 className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-stone-600 hover:text-orange-600"
//               >
//                 <Search className="w-4 h-4" />
//               </button>
//             </form>

//             {navigationItems.map(({ name, path }) => (
//               <NavLink
//                 key={name}
//                 to={path}
//                 onClick={() => setIsOpen(false)}
//                 className={({ isActive }) =>
//                   `block w-full text-left py-2 text-stone-700 hover:text-orange-600 ${
//                     isActive ? "text-orange-600 font-semibold" : ""
//                   }`
//                 }
//               >
//                 {name}
//               </NavLink>
//             ))}

//             <NavLink
//               to="/contact"
//               onClick={() => setIsOpen(false)}
//               className="block w-full mt-4"
//             >
//               <Button className="w-full bg-orange-600 text-white hover:bg-orange-700">
//                 Contact Us
//               </Button>
//             </NavLink>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }