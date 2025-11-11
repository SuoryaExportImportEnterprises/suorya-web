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
  type: "category" | "subcategory" | "product";
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
      // Add the main category
      docs.push({
        id: `cat:${categoryKey}`,
        type: "category",
        name: category.name,
        description:
          (category as any).description || `Explore our ${category.name}`,
        imageUrl: (category as any).coverImageUrl,
        path: `/${categoryKey}`,
        meta: { categoryKey },
      });

      // Add subcategories
      const subs = (category as any).subcategories ?? [];


  subs.forEach((sub: any, idx: number) => {
  const subSlug = slugify(sub.name || `sub-${idx}`);
  docs.push({
    id: `sub:${categoryKey}:${subSlug}`,
    type: "subcategory",
    name: sub.name || "",
    description: sub.description || "",
    imageUrl: sub.imageUrl,
    path: `/${categoryKey}`, // navigate to ribbons/trims page
    meta: { 
      categoryKey, 
      subcategoryName: sub.name, 
      anchor: subSlug // 👈 we’ll use this later for scrolling
    },
  });
});

      // Add products/images directly under category (like spools)
      const imgs = (category as any).images ?? [];
      imgs.forEach((img: any, idx: number) => {
        docs.push({
          id: `prod:${categoryKey}:${idx}`,
          type: "product",
          name: img.name || `${category.name} ${idx + 1}`,
          description: img.description || "",
          imageUrl: img.imageUrl,
          path: `/${categoryKey}`,
          meta: { categoryKey },
        });
      });
    });

    // ✅ Explicitly add packaging spools for search discoverability
    docs.push({
      id: "spool:wooden",
      type: "product",
      name: "Wooden Spool",
      description:
        "Handcrafted wooden spools made from fine-grained wood for elegant ribbon presentation.",
      imageUrl: "/products/spools/woodenspool-2.png",
      path: "/packaging",
      meta: { categoryKey: "packaging" },
    });

    docs.push({
      id: "spool:paper",
      type: "product",
      name: "Paper Spool",
      description:
        "Eco-friendly paper spools designed for modern, sustainable packaging and gifting.",
      imageUrl: "/products/spools/paperspool-2.jpg",
      path: "/packaging",
      meta: { categoryKey: "packaging" },
    });

    // ✅ Fuse configuration — tuned for partial + typo matches
    //@ts-ignore
    const options: Fuse.IFuseOptions<IndexDoc> = {
      keys: [
        { name: "name", weight: 0.8 },
        { name: "description", weight: 0.2 },
      ],
      threshold: 0.4, // more forgiving for partials
      distance: 100, // allow fuzzy substring matches
      ignoreLocation: true,
      minMatchCharLength: 1, // allows short queries like "velv"
      includeScore: true,
    };

    return new Fuse(docs, options);
  }, [rawData]);

  return { fuse };
}

export function runFuseSearch(
  fuse: Fuse<any> | undefined,
  query: string,
  limit = 20
) {
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
