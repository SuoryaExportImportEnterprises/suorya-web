import { useMemo } from "react";
import Fuse from "fuse.js";
import categoryData from "../../data/categoryData";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

type IndexDoc = {
  id: string;
  type: "category" | "subcategory";
  name: string;
  description?: string;
  imageUrl?: string;
  path?: string;
  meta?: Record<string, any>;
};

export function useSearchFuse(rawData: typeof categoryData) {
  const fuse = useMemo(() => {
    const docs: IndexDoc[] = [];

    Object.entries(rawData).forEach(([categoryKey, category]) => {
      docs.push({
        id: `cat:${categoryKey}`,
        type: "category",
        name: category.name,
        description: (category as any).description || `Explore our ${category.name}`,
        imageUrl: (category as any).coverImageUrl,
        path: `/${categoryKey}`,
        meta: { categoryKey },
      });

      const subs = (category as any).subcategories ?? [];
      subs.forEach((sub: any, idx: number) => {

        const subSlug = slugify(sub.name || `sub-${idx}`);
        docs.push({
          id: `sub:${categoryKey}:${subSlug}`,
          type: "subcategory",
          name: sub.name || "",
          description: sub.description || "",
          imageUrl: sub.imageUrl,
          path: `/${categoryKey}/${subSlug}`,
          meta: { categoryKey, subcategoryName: sub.name },
        });
      });
    });
//@ts-ignore
    
    if ((rawData as any).spool) {
      const spool = (rawData as any).spool;
      docs.push({
        id: `sub:spool:wooden-spool`,
        type: "subcategory",
        name: "Wooden Spool",
        description:
          "Wooden spool — fine-grained wooden spools that bring traditional charm and sturdiness to our ribbons.",
        imageUrl:
          (spool.images && spool.images[1] && spool.images[1].imageUrl) ||
          "/products/spools/woodenspool-2.png",
        path: "/spool",
        meta: { categoryKey: "spool", subcategoryName: "Wooden Spool" },
      });
      docs.push({
        id: `sub:spool:paper-spool`,
        type: "subcategory",
        name: "Paper Spool",
        description:
          "Paper spool — lightweight and sustainable spools made for modern, eco-friendly packaging.",
        imageUrl:
          (spool.images && spool.images[0] && spool.images[0].imageUrl) ||
          "/products/spools/paperspool-2.jpg",
        path: "/spool",
        meta: { categoryKey: "spool", subcategoryName: "Paper Spool" },
      });
    }
// @ts-ignore
    const options: Fuse.IFuseOptions<IndexDoc> = {
      keys: [
        { name: "name", weight: 0.8 },
        { name: "description", weight: 0.2 },
      ],
      threshold: 0.25,
      ignoreLocation: true,
      minMatchCharLength: 2,
      includeScore: true,
      useExtendedSearch: false,
    };

    return new Fuse(docs, options);
  }, [rawData]);

  

  return { fuse };
}

export function runFuseSearch(fuse: Fuse<any> | undefined, query: string, limit = 20) {
  if (!fuse || !query || !query.trim()) return [];

  const raw = fuse.search(query, { limit });
  return raw.map((r: any) => {
    const item = r.item;
    return {
      type: item.type,
      name: item.name,
      description: item.description,
      imageUrl: item.imageUrl,
      path: item.path,
      meta: item.meta,
      score: r.score,
    };
  });
}
