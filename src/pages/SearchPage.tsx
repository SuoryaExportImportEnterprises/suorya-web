import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchResults } from "../components/SearchResults";
import categoryData from "../data/categoryData";
import { useSearchFuse, runFuseSearch } from "../lib/search/useSearch";
import { SEO } from "../components/layout/SEO";

export default function SearchPage() {
  const [params] = useSearchParams();
  const q = (params.get("q") || "").trim();
  const navigate = useNavigate();

  // build fuse once
  const { fuse } = useSearchFuse(categoryData);

  // results state
  const [results, setResults] = useState<any[]>([]);

  // run search whenever q changes
  useEffect(() => {
    if (!q) {
      setResults([]);
      return;
    }
    const hits = runFuseSearch(fuse, q, 40);
    setResults(hits);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [q, fuse]);

const handleResultClick = (r: any) => {
  const meta = r.meta || {};
  if (meta.categoryKey) {
    if (meta.anchor) {
      localStorage.setItem("scrollTarget", meta.anchor);
    }
    navigate(`/${meta.categoryKey}`);
  } else {
    navigate("/");
  }
};


  const goHome = () => navigate("/");

  return (
    <>
      <SEO
        title={`Suorya | Search: ${q || ""}`.trim()}
        description="Search ribbons, trims, and packaging at Suorya."
        url={`https://suorya.com/search?q=${encodeURIComponent(q)}`}
      />
      <SearchResults
        query={q}
        results={results}
        onBack={goHome}
        onResultClick={handleResultClick}
      />
    </>
  );
}
