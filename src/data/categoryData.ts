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
    coverImageUrl: "/cover-images/ribbon-cover/cover_tinsel.png",
    subcategories: [
      { name: "SATIN RIBBON", description: "Smooth, lustrous ribbons for timeless elegance.", imageUrl: "/cover-images/ribbon-cover/cover_doublesided.jpg" },
      { name: "FRAYED VELVET", description: "Soft frayed edges, where luxury meets texture.", imageUrl: "/cover-images/ribbon-cover/cover_handfrayednylonvelvet.png" },
      { name: "FINISHED EDGE VELVET", description: "Polished edges for refined and graceful finishes.", imageUrl: "/cover-images/ribbon-cover/cover_VELVET -FINISH EDGE.jpg" },
      { name: "WIRED VELVET", description: "Elegant velvet ribbons shaped with artistic precision.", imageUrl: "/cover-images/ribbon-types/wiredvelvet.jpg" },
      { name: "SHEER RIBBON", description: "Delicate transparency that whispers luxury.", imageUrl: "/cover-images/ribbon-types/sheer.jpg" },
      { name: "TINSEL", description: "Festive sparkle that celebrates joy and brilliance.", imageUrl: "/cover-images/ribbon-cover/cover_tinsel.png" },
      { name: "DIE CUT", description: "Intricate silhouettes that redefine ribbon artistry.", imageUrl: "/cover-images/ribbon-cover/Cover_DieCut.jpg" },
      { name: "LUREX", description: "Glimmering metallic threads for elevated charm.", imageUrl: "/cover-images/ribbon-cover/lurexcover.png" },
      { name: "STRIPED RIBBON", description: "Playful lines that add rhythm to design.", imageUrl: "/cover-images/ribbon-cover/stripecover.jpg" },
      { name: "POLY WOVEN", description: "Durable weaves blending strength with beauty.", imageUrl: "/cover-images/ribbon-cover/chekeredcover.jpg" },
      { name: "PEARL", description: "Ribbons kissed with subtle pearl embellishments.", imageUrl: "/cover-images/ribbon-cover/Cover_Pearl.png" },
      { name: "EMBROIDERED", description: "Artful threads weaving timeless stories.", imageUrl: "/cover-images/ribbon-cover/sequin cover.png" },
      { name: "JACQUARD RIBBON", description: "Woven sophistication with intricate patterns.", imageUrl: "/cover-images/ribbon-cover/jacquardcover.png" },
      { name: "JUTE", description: "Rustic charm woven with natural grace.", imageUrl: "/cover-images/ribbon-cover/cover_jute.jpg" },
      { name: "ABSTRACT POLY", description: "Modern geometry for contemporary creations.", imageUrl: "/cover-images/ribbon-types/abstract.jpg" },
      { name: "PRINTED RIBBON", description: "Vivid patterns that speak your story.", imageUrl: "/cover-images/ribbon-cover/cover_ongrossgrain.png" },
    ],
  },

  trims: {
    type: "complex" as const,
    name: "Trims",
    coverImageUrl: "/cover-images/cover_ricrac.jpg",
    subcategories: [
      { name: "BUNTING", description: "Joyful trims perfect for festive flair.", imageUrl: "/cover-images/buntingcover.png" },
      { name: "RIC RAC", description: "Playful zigzags that dance along your designs.", imageUrl: "/cover-images/ric-rac-cover.png" },
      { name: "BRAIDS", description: "Classic braids for a touch of vintage craft.", imageUrl: "/cover-images/ribbon-cover/braided cover.png" },
      { name: "POMS", description: "Soft pom-poms that add whimsy and fun.", imageUrl: "/cover-images/trims/poms.jpg" },
      { name: "CORDS", description: "Elegant cords to tie your vision together.", imageUrl: "/cover-images/cord cover.png" },
      { name: "RUFFLED & PLEATED TRIMS", description: "Romantic folds full of movement and grace.", imageUrl: "/cover-images/trims/ruffled.jpg" },
      { name: "FRINGES & TASSELS", description: "Free-flowing details that bring texture alive.", imageUrl: "/cover-images/trims/fringe.jpg" },
      { name: "LACES", description: "Delicate lace trims woven with elegance.", imageUrl: "/cover-images/trims/lace.jpg" },
    ],
  },

  bows: {
    type: "complex" as const,
    name: "Bows",
    coverImageUrl: "/cover-images/bow-coverimage.webp",
    subcategories: [
      { name: "JUMBO BOW", description: "Grand statements for bold celebrations.", imageUrl: "/cover-images/bows/jumbo.jpg" },
      { name: "SATIN BOW", description: "Soft satin bows — understated yet captivating.", imageUrl: "/cover-images/satin-bow-cover.png" },
      { name: "SHEER BOW", description: "Light and airy bows for subtle charm.", imageUrl: "/cover-images/bows/sheer.jpg" },
      { name: "WIRED VELVET BOW", description: "Velvet elegance shaped to perfection.", imageUrl: "/cover-images/bows/wiredvelvet.jpg" },
      { name: "WINE CHARMS", description: "Whimsical accents for festive gatherings.", imageUrl: "/cover-images/bows/winecharms.jpg" },
      { name: "VELVET BOW", description: "Timeless velvet sophistication, reinvented.", imageUrl: "/cover-images/bows/velvet.jpg" },
    ],
  },

  "tree-skirts": {
    type: "complex" as const,
    name: "Tree Skirts",
    coverImageUrl: "/cover-images/treeskirtscover.jpeg",
    subcategories: [
      { name: "", description: "", imageUrl: "/cover-images/treeskirts/skirt1.jpg" },
      { name: "", description: "", imageUrl: "/cover-images/treeskirts/skirt2.jpg" },
      { name: "", description: "", imageUrl: "/cover-images/treeskirts/skirt3.jpg" },
      { name: "", description: "", imageUrl: "/cover-images/treeskirts/skirt4.jpg" },
      { name: "", description: "", imageUrl: "/cover-images/treeskirts/skirt5.jpg" },
    ],
  },

  spool: {
    type: "simple" as const,
    name: "Spools",
    coverImageUrl: "/cover-images/spool cover.jpeg",
    images: generateImages(['paperspool-1.jpg', 'woodenspool-2.png'], "Ribbon Spool", "spools"),
  },
};

export default categoryData;
