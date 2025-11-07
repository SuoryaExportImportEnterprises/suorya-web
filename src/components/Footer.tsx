import { Mail, MapPin, Phone } from "lucide-react";
interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <button
              onClick={() => handleNavigate("home")}
              className="text-2xl text-white tracking-wider hover:text-orange-400 transition-colors duration-300"
            >
              Suorya
            </button>
            <p></p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNavigate("home")}
                  className="hover:text-orange-400 transition-colors duration-300 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("ribbons")}
                  className="hover:text-orange-400 transition-colors duration-300 text-left"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("design-studio")}
                  className="hover:text-orange-400 transition-colors duration-300 text-left"
                >
                  Design Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("contact")}
                  className="hover:text-orange-400 transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNavigate("ribbons")}
                  className="hover:text-orange-400 transition-colors duration-300 text-left"
                >
                  Ribbons
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("trims")}
                  className="hover:text-orange-400 transition-colors duration-300 text-left"
                >
                  Trims
                </button>
              </li>
              {/* <li>
                <button
                  onClick={() => handleNavigate("bows")}
                  className="hover:text-orange-400 transition-colors duration-300 text-left"
                >
                  Bows
                </button>
              </li> */}
              
              <li>
                <button
                  onClick={() => handleNavigate("packaging")}
                  className="hover:text-orange-400 transition-colors duration-300 text-left"
                >
                  Packaging
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Us Section - CLEAN FORMAT LIKE IMAGE */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-orange-400 flex-shrink-0" />
                <p>
                  D139, D Block, Sector 63, Noida,
                  <br />
                  Uttar Pradesh - 201301
                </p>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 text-orange-400 flex-shrink-0" />
                <a
                  href="mailto:info@suorya.co.in"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  info@suorya.co.in
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 text-orange-400 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  0120-4325089
                </a>
              </div>

              <a
                href="https://maps.app.goo.gl/BQBkuTU4SDMNY1sG9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-500 transition-colors duration-300 inline-block mt-1"
              >
                Show in map →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Suorya. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#privacy"
              className="hover:text-orange-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="hover:text-orange-400 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

