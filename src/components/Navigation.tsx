import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "./ui/button";
// @ts-ignore
import favicon from "/home/favicon.png";

const navigationItems = [
  "Home",
  "Ribbons",
  "Trims",
  "Packaging",
];

interface NavigationProps {
  onNavigate: (page: string) => void;
  onSearch: (query: string) => void;
  currentPage: string;
}

export function Navigation({
  onNavigate,
  onSearch,
  currentPage,
}: NavigationProps) {
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

  const isActive = (item: string) => {
    const itemKey = item.toLowerCase().replace(/\s+/g, "-");
    return currentPage === itemKey;
  };
  console.log("🧭 currentPage in Navigation:", currentPage);


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
                className={`text-stone-700 hover:text-orange-600 transition-colors duration-300 pb-1 ${
                  isActive(item)
                    ? "border-b-2 border-orange-600"
                    : ""
                }`}
              >
                {item}
              </button>
            ))}

            {/* Contact Us as simple link with underline on active */}
            <button
              onClick={() => onNavigate("contact")}
              className={`text-orange-600 transition-colors duration-300 pb-1 border-orange-600 hover:text-orange-600 ${
                currentPage === "contact"
                  ? "border-b-2 border-orange-600 text-orange-600"
                  : ""
              }`}
            >
              Contact Us
            </button>


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

            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left py-2 text-stone-700 hover:text-orange-600 ${
                  isActive(item)
                    ? "text-orange-600 border-l-2 border-orange-600 pl-2"
                    : ""
                }`}
              >
                {item}
              </button>
            ))}

            {/* Contact Us for Mobile */}
            <button
              onClick={() => {
                setIsOpen(false);
                onNavigate("contact");
              }}
              className={`block w-full text-left py-2 text-orange-600 hover:text-orange-600 ${
                currentPage === "contact"
                  ? "text-orange-600 border-l-2 border-orange-600 pl-2"
                  : ""
              }`}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}





















































