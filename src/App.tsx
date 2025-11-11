import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { GTranslateWidget } from "./components/layout/GTranslateWidget";
import { HomePage } from "./pages/HomePage";
import RibbonsPage from "./pages/RibbonsPage";
import TrimsPage from "./pages/TrimsPage";
import PackagingPage from "./pages/PackagingPage";
import ContactPage from "./pages/ContactPage";
import { ScrollToTop } from "./components/ScrollToTop";
import SearchPage from "./pages/SearchPage";

export default function App() {

const location = useLocation();

 useEffect(() => {
    // 🧩 Force GTranslate widget to re-run on every route change
    const scriptId = "gtranslate-dynamic";
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove(); // remove old script instance

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://cdn.gtranslate.net/widgets/latest/dwf.js";
    script.defer = true;
    document.body.appendChild(script);

    console.log("🌍 GTranslate script reloaded for:", location.pathname);

    return () => {
      // Optional: clean old script
      const old = document.getElementById(scriptId);
      if (old) old.remove();
    };
  }, [location.pathname]);

  return (
    <HelmetProvider>
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ribbons" element={<RibbonsPage />} />
        <Route path="/trims" element={<TrimsPage />} />
        <Route path="/packaging" element={<PackagingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
      <GTranslateWidget />
    </HelmetProvider>
  );
}
