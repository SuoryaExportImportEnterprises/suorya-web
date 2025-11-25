import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "./ui/button";
import { NavLink, useNavigate } from "react-router-dom";
// @ts-ignore
import favicon from "/home/favicon.png";

const navigationItems = [
  { name: "Home", path: "/" },
  { name: "Ribbons", path: "/ribbons" },
  { name: "Trims", path: "/trims" },
  { name: "Packaging", path: "/packaging" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
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
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                // className={({ isActive }) =>
                //   `text-stone-700 hover:text-orange-600 transition-colors duration-300 pb-1 ${
                //     isActive ? "border-b-2 border-orange-600" : ""
                //   }`
                // }
                className={({ isActive }) => 
                  `pb-1 transition-colors duration-300  
                ${isActive ? "text-orange-600 border-b-2 border-orange-600" 
                  : "text-stone-700 hover:text-orange-600"
                }` 
              }

              >
                {name}
              </NavLink>
            ))}

            {/* Contact Us link */}
            <NavLink
              to="/contact"
              className={({ isActive }) => `pb-1 transition-colors duration-300 
              ${isActive ? "text-orange-600 border-b-2 border-orange-600" 
                : "text-stone-700 hover:text-orange-600" 
              }` 
            }

            >
              Contact Us
            </NavLink>

            {/* Visible Search Input */}
            <form onSubmit={handleSearch} className="relative ml-2">
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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

            {navigationItems.map(({ name, path }) => (
              <NavLink
               key={name}
               to={path}
               onClick={() => setIsOpen(false)}
               className="block py-2"
             >
               {({ isActive }) => (
                 <span
                   className={             
                     isActive
                       ? "text-orange-600 border-b-2 border-orange-600 inline-block"
                       : "text-stone-700 hover:text-orange-600 inline-block"
                   }             
                 >
                   {name}
                 </span>
               )}
            </NavLink>

            ))}

            {/* Contact Us for Mobile */}
            <NavLink
             to="/contact"
             onClick={() => setIsOpen(false)}
             className="block py-2"
           >
             {({ isActive }) => (
               <span
                 className={
                   isActive
                     ? "text-orange-600 border-b-2 border-orange-600 inline-block"
                     : "text-stone-700 hover:text-orange-600 inline-block"
                 }
               >
                 Contact Us
               </span>
             )}
            </NavLink>

          </div>
        </div>
      )}
    </nav>
  );
}
