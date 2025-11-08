const generateImages = (fileNames: string[], baseName: string, pathKey: string) => {
  return fileNames.map((fileName, i) => {
    const imageUrl = `/products/${pathKey.toLowerCase()}/${fileName}`;
    return {
      name: `${baseName} ${i + 1}`,
      imageUrl,
    };
  });
};

const categoryData = {
  ribbons: {
    type: "complex" as const,
    name: "Ribbons",
    coverImageUrl: "/products/ribbon/tinsel/tinsel.png",
    subcategories: [
      { name: "SATIN RIBBON", description: "Smooth, high-sheen ribbon for elegant applications.", imageUrl: "/cover-images/ribbon-cover/cover_doublesided.jpg" },
      { name: "FRAYED VELVET", description: "Soft texture with handcrafted frayed edges.", imageUrl: "/cover-images/ribbon-cover/cover_handfrayednylonvelvet.png" },
      { name: "FINISHED EDGE VELVET", description: "Velvet ribbon with sealed edges for a clean finish.", imageUrl: "/cover-images/ribbon-cover/cover_VELVET -FINISH EDGE.jpg" },
      { name: "WIRED VELVET", description: "Structured velvet ribbon with flexible wired edges.", imageUrl: "/products/ribbon/wired_velvet.png" },
      { name: "SHEER RIBBON", description: "Lightweight sheer ribbon offering delicate transparency.", imageUrl: "/products/ribbon/sheer_ribbon.png" },
      { name: "TINSEL", description: "Metallic decorative ribbon offering festive shimmer and texture.", imageUrl: "/products/ribbon/tinsel/tinsel.png" },
      { name: "DIE CUT", description: "Precision-cut ribbon with detailed decorative patterns.", imageUrl: "/cover-images/ribbon-cover/Cover_DieCut.jpg" },
      { name: "LUREX", description: "Metallic-thread ribbon providing durable shine and elegant appeal.", imageUrl: "/cover-images/ribbon-cover/lurexcover.png" },
      { name: "STRIPED RIBBON", description: "Patterned ribbon with refined stripes for decorative use.", imageUrl: "/cover-images/ribbon-cover/stripecover.jpg" },
      { name: "POLY WOVEN", description: "Durable polyester ribbon combining durability and finesse.", imageUrl: "/cover-images/ribbon-cover/chekeredcover.jpg" },
      { name: "PEARL", description: "Ribbon featuring subtle pearl embellishment detailing.", imageUrl: "/cover-images/ribbon-cover/Cover_Pearl.png" },
      { name: "EMBROIDERED", description: "Decorative ribbon featuring fine embroidered thread detailing.", imageUrl: "/cover-images/ribbon-cover/sequin cover.png" },
      { name: "JACQUARD RIBBON", description: "Woven jacquard ribbon featuring intricate, textured patterns.", imageUrl: "/cover-images/ribbon-cover/jacquardcover.png" },
      { name: "JUTE", description: "Natural jute ribbon providing rustic, textured appeal.", imageUrl: "/cover-images/ribbon-cover/cover_jute.jpg" },
      { name: "ABSTRACT POLY", description: "Polyester ribbon with bold abstract woven designs.", imageUrl: "/products/ribbon/abstract_poly_red.png" },
      { name: "PRINTED RIBBON", description: "Printed ribbon featuring vibrant, high-definition patterns.", imageUrl: "/cover-images/ribbon-cover/cover_ongrossgrain.png" },
    ],
  },

  trims: {
    type: "complex" as const,
    name: "Trims",
    coverImageUrl: "/cover-images/ric-rac-cover.png",
    subcategories: [
      { name: "BUNTING", description: "Decorative trim for event, party, and seasonal décor.", imageUrl: "/cover-images/buntingcover.png" },
      { name: "RIC RAC", description: "Zigzag ric rac trims for fashion, packaging, and crafts.", imageUrl: "/cover-images/ric-rac-cover.png" },
      { name: "BRAIDS", description: "Woven braid trims for garments, upholstery, and craft decoration.", imageUrl: "/cover-images/ribbon-cover/braided cover.png" },
      { name: "POMS", description: "Pom trims for creative packaging, home décor, and DIY crafts.", imageUrl: "/products/trims/poms_bright.png" },
      { name: "CORDS", description: "Versatile cords for tying, wrapping, and decorative use.", imageUrl: "/cover-images/cord cover.png" },
      { name: "RUFFLED & PLEATED", description: "Textured trims with soft ruffles and structured pleats.", imageUrl: "/products/trims/pleated&ruffled.png" },
      { name: "FRINGES & TASSELS", description: "Decorative trims featuring layered tassels and flowing fringe movement.", imageUrl: "/products/trims/fringes&tassels.png" },
      { name: "LACES", description: "Fine lace detailing for apparel, packaging, and accessories.", imageUrl: "/products/trims/laces.png" },
    ],
  },
  
  packaging: {
    type: "simple" as const,
    name: "Packaging",
    coverImageUrl: "/cover-images/spool cover.jpeg",
    images: generateImages(['paperspool-1.jpg', 'woodenspool-2.png'], "Ribbon Spool", "spools"),
  },
};

export default categoryData;
