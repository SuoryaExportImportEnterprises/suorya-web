import Fuse from "fuse.js";

export type SearchItem = {
  id: string;
  title: string;
  text?: string;
  path: string;
  imageUrl?: string;
  type: string;
  meta?: Record<string, any>;
};

function slug(s: string) {
  return s ? s.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "") : "";
}
export function buildItemsFromCategoryData(categoryData: Record<string, any>): SearchItem[] {
  const items: SearchItem[] = [];

  Object.entries(categoryData).forEach(([key, cat]: any) => {
    // Category
    items.push({
      id: `cat:${key}`,
      title: cat.name,
      text: (cat.description || "") + " " + (cat.coverImageUrl || ""),
      path: `/${key}`,
      imageUrl: cat.coverImageUrl,
      type: "category",
      meta: { categoryKey: key },
    });

    (cat.subcategories || []).forEach((sub: any) => {
      const subSlug = slug(sub.name);
      items.push({
        id: `sub:${key}:${subSlug}`,
        title: sub.name,
        text: sub.description || "",
        path: `/${key}/${subSlug}`,
        imageUrl: sub.imageUrl,
        type: "subcategory",
        meta: { categoryKey: key, subcategoryName: sub.name },
      });
      (sub.subSubcategories || []).forEach((g: any) => {
        const gSlug = slug(g.name);
        items.push({
          id: `group:${key}:${subSlug}:${gSlug}`,
          title: g.name,
          text: (g.name || "") + " " + (g.description || ""),
          path: `/${key}/${subSlug}/${gSlug}`,
          imageUrl: g.images?.[0]?.imageUrl,
          type: "group",
          meta: { categoryKey: key, subcategoryName: sub.name, groupName: g.name },
        });

        (g.images || []).forEach((img: any, idx: number) => {
          items.push({
            id: `prod:${key}:${subSlug}:${gSlug}:${idx}`,
            title: img.name || `${g.name} ${idx + 1}`,
            text: img.description || "",
            path: `/${key}/${subSlug}/${gSlug}`,
            imageUrl: img.imageUrl,
            type: "product",
            meta: { categoryKey: key, subcategoryName: sub.name, groupName: g.name },
          });
        });
      });
      (sub.images || []).forEach((img: any, idx: number) => {
        items.push({
          id: `prod:${key}:${subSlug}:${idx}`,
          title: img.name || `${sub.name} ${idx + 1}`,
          text: img.description || "",
          path: `/${key}/${subSlug}`,
          imageUrl: img.imageUrl,
          type: "product",
          meta: { categoryKey: key, subcategoryName: sub.name },
        });
      });
    });
    (cat.images || []).forEach((img: any, idx: number) => {
      items.push({
        id: `prod:${key}:root:${idx}`,
        title: img.name || `${cat.name} ${idx + 1}`,
        text: img.description || "",
        path: `/${key}`,
        imageUrl: img.imageUrl,
        type: "product",
        meta: { categoryKey: key },
      });
    });
  });

  return items;
}

export function buildStaticPages(): SearchItem[] {
  return [
    {
      id: "page:hero",
      title: "Crafting Elegance, One Ribbon at a Time",
      text: "Premium Ribbons & Décor — Where premium craftsmanship meets chic design",
      path: "/",
      type: "page",
    },
    {
      id: "page:about",
      title: "About Suorya",
      text: "Suorya Exports is a story of legacy, creativity, and commitment",
      path: "/",
      type: "page",
    },
    {
      id: "page:contact",
      title: "Contact / Showroom / Design Studio",
      text: "Visit our showroom, email info@suorya.co.in or call us for wholesale and custom orders",
      path: "/contact",
      type: "page",
    },
  ];
}

export function createFuse(items: SearchItem[]) {
  // @ts-ignore
  const opts: Fuse.IFuseOptions<SearchItem> = {
    keys: [
      { name: "title", weight: 0.75 },
      { name: "text", weight: 0.25 },
    ],
    includeScore: true,
    includeMatches: true,
    threshold: 0.35,
    ignoreLocation: true,
    minMatchCharLength: 2,
  };

  return new Fuse(items, opts);
}
