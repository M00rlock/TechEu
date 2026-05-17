export type FallbackCategory = {
  id: number;
  slug: string;
  nameEn: string;
  nameDe: string;
  _count: { products: number };
};

export type FallbackProduct = {
  id: number;
  slug: string;
  nameEn: string;
  nameDe: string;
  brand: string;
  model: string;
  descriptionEn: string;
  descriptionDe: string;
  priceEur: string;
  priceGbp: string;
  stock: number;
  images: string[];
  specs: Record<string, string>;
  isFeatured: boolean;
  isOnSale: boolean;
  salePercent: number | null;
  categoryId: number;
  createdAt: string;
  category: { id: number; slug: string; nameEn: string; nameDe: string };
};

export const fallbackCategories: FallbackCategory[] = [
  {
    "slug": "gpu",
    "nameEn": "Graphics Cards",
    "nameDe": "Grafikkarten",
    "id": 1,
    "_count": {
      "products": 16
    }
  },
  {
    "slug": "pc",
    "nameEn": "Desktop PCs",
    "nameDe": "Desktop-PCs",
    "id": 2,
    "_count": {
      "products": 14
    }
  },
  {
    "slug": "monitor",
    "nameEn": "Monitors",
    "nameDe": "Monitore",
    "id": 3,
    "_count": {
      "products": 16
    }
  },
  {
    "slug": "laptop",
    "nameEn": "Gaming Laptops",
    "nameDe": "Gaming-Laptops",
    "id": 4,
    "_count": {
      "products": 15
    }
  }
];

export const fallbackProducts: FallbackProduct[] = [
  {
    "id": 1,
    "slug": "nvidia-rtx-4090-0",
    "nameEn": "NVIDIA RTX 4090",
    "nameDe": "NVIDIA RTX 4090",
    "brand": "NVIDIA",
    "model": "RTX 4090",
    "descriptionEn": "High-performance RTX 4090 by NVIDIA. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-RTX 4090 von NVIDIA. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1799.00",
    "priceGbp": "1549.00",
    "stock": 5,
    "images": [
      "/images/products/placeholder-gpu.svg"
    ],
    "specs": {
      "category": "gpu"
    },
    "isFeatured": true,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 1,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 1,
      "slug": "gpu",
      "nameEn": "Graphics Cards",
      "nameDe": "Grafikkarten"
    }
  },
  {
    "id": 2,
    "slug": "nvidia-rtx-4080-super-1",
    "nameEn": "NVIDIA RTX 4080 Super",
    "nameDe": "NVIDIA RTX 4080 Super",
    "brand": "NVIDIA",
    "model": "RTX 4080 Super",
    "descriptionEn": "High-performance RTX 4080 Super by NVIDIA. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-RTX 4080 Super von NVIDIA. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1099.00",
    "priceGbp": "949.00",
    "stock": 8,
    "images": [
      "/images/products/placeholder-gpu.svg"
    ],
    "specs": {
      "category": "gpu"
    },
    "isFeatured": true,
    "isOnSale": true,
    "salePercent": 10,
    "categoryId": 1,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 1,
      "slug": "gpu",
      "nameEn": "Graphics Cards",
      "nameDe": "Grafikkarten"
    }
  },
  {
    "id": 3,
    "slug": "nvidia-rtx-4070-ti-2",
    "nameEn": "NVIDIA RTX 4070 Ti",
    "nameDe": "NVIDIA RTX 4070 Ti",
    "brand": "NVIDIA",
    "model": "RTX 4070 Ti",
    "descriptionEn": "High-performance RTX 4070 Ti by NVIDIA. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-RTX 4070 Ti von NVIDIA. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "799.00",
    "priceGbp": "689.00",
    "stock": 12,
    "images": [
      "/images/products/placeholder-gpu.svg"
    ],
    "specs": {
      "category": "gpu"
    },
    "isFeatured": true,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 1,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 1,
      "slug": "gpu",
      "nameEn": "Graphics Cards",
      "nameDe": "Grafikkarten"
    }
  },
  {
    "id": 4,
    "slug": "nvidia-rtx-4070-super-3",
    "nameEn": "NVIDIA RTX 4070 Super",
    "nameDe": "NVIDIA RTX 4070 Super",
    "brand": "NVIDIA",
    "model": "RTX 4070 Super",
    "descriptionEn": "High-performance RTX 4070 Super by NVIDIA. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-RTX 4070 Super von NVIDIA. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "599.00",
    "priceGbp": "519.00",
    "stock": 15,
    "images": [
      "/images/products/placeholder-gpu.svg"
    ],
    "specs": {
      "category": "gpu"
    },
    "isFeatured": true,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 1,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 1,
      "slug": "gpu",
      "nameEn": "Graphics Cards",
      "nameDe": "Grafikkarten"
    }
  },
  {
    "id": 5,
    "slug": "nvidia-rtx-4070-4",
    "nameEn": "NVIDIA RTX 4070",
    "nameDe": "NVIDIA RTX 4070",
    "brand": "NVIDIA",
    "model": "RTX 4070",
    "descriptionEn": "High-performance RTX 4070 by NVIDIA. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-RTX 4070 von NVIDIA. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "499.00",
    "priceGbp": "429.00",
    "stock": 20,
    "images": [
      "/images/products/placeholder-gpu.svg"
    ],
    "specs": {
      "category": "gpu"
    },
    "isFeatured": true,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 1,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 1,
      "slug": "gpu",
      "nameEn": "Graphics Cards",
      "nameDe": "Grafikkarten"
    }
  },
  {
    "id": 6,
    "slug": "nvidia-rtx-4060-ti-5",
    "nameEn": "NVIDIA RTX 4060 Ti",
    "nameDe": "NVIDIA RTX 4060 Ti",
    "brand": "NVIDIA",
    "model": "RTX 4060 Ti",
    "descriptionEn": "High-performance RTX 4060 Ti by NVIDIA. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-RTX 4060 Ti von NVIDIA. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "399.00",
    "priceGbp": "349.00",
    "stock": 18,
    "images": [
      "/images/products/placeholder-gpu.svg"
    ],
    "specs": {
      "category": "gpu"
    },
    "isFeatured": true,
    "isOnSale": true,
    "salePercent": 5,
    "categoryId": 1,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 1,
      "slug": "gpu",
      "nameEn": "Graphics Cards",
      "nameDe": "Grafikkarten"
    }
  },
  {
    "id": 7,
    "slug": "nvidia-rtx-4060-6",
    "nameEn": "NVIDIA RTX 4060",
    "nameDe": "NVIDIA RTX 4060",
    "brand": "NVIDIA",
    "model": "RTX 4060",
    "descriptionEn": "High-performance RTX 4060 by NVIDIA. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-RTX 4060 von NVIDIA. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "299.00",
    "priceGbp": "259.00",
    "stock": 25,
    "images": [
      "/images/products/placeholder-gpu.svg"
    ],
    "specs": {
      "category": "gpu"
    },
    "isFeatured": true,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 1,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 1,
      "slug": "gpu",
      "nameEn": "Graphics Cards",
      "nameDe": "Grafikkarten"
    }
  },
  {
    "id": 8,
    "slug": "amd-rx-7900-xtx-7",
    "nameEn": "AMD RX 7900 XTX",
    "nameDe": "AMD RX 7900 XTX",
    "brand": "AMD",
    "model": "RX 7900 XTX",
    "descriptionEn": "High-performance RX 7900 XTX by AMD. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-RX 7900 XTX von AMD. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "999.00",
    "priceGbp": "859.00",
    "stock": 7,
    "images": [
      "/images/products/placeholder-gpu.svg"
    ],
    "specs": {
      "category": "gpu"
    },
    "isFeatured": true,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 1,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 1,
      "slug": "gpu",
      "nameEn": "Graphics Cards",
      "nameDe": "Grafikkarten"
    }
  },
  {
    "id": 9,
    "slug": "amd-rx-7900-xt-8",
    "nameEn": "AMD RX 7900 XT",
    "nameDe": "AMD RX 7900 XT",
    "brand": "AMD",
    "model": "RX 7900 XT",
    "descriptionEn": "High-performance RX 7900 XT by AMD. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-RX 7900 XT von AMD. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "799.00",
    "priceGbp": "689.00",
    "stock": 10,
    "images": [
      "/images/products/placeholder-gpu.svg"
    ],
    "specs": {
      "category": "gpu"
    },
    "isFeatured": false,
    "isOnSale": true,
    "salePercent": 8,
    "categoryId": 1,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 1,
      "slug": "gpu",
      "nameEn": "Graphics Cards",
      "nameDe": "Grafikkarten"
    }
  },
  {
    "id": 10,
    "slug": "amd-rx-7800-xt-9",
    "nameEn": "AMD RX 7800 XT",
    "nameDe": "AMD RX 7800 XT",
    "brand": "AMD",
    "model": "RX 7800 XT",
    "descriptionEn": "High-performance RX 7800 XT by AMD. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-RX 7800 XT von AMD. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "499.00",
    "priceGbp": "429.00",
    "stock": 14,
    "images": [
      "/images/products/placeholder-gpu.svg"
    ],
    "specs": {
      "category": "gpu"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 1,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 1,
      "slug": "gpu",
      "nameEn": "Graphics Cards",
      "nameDe": "Grafikkarten"
    }
  },
  {
    "id": 11,
    "slug": "amd-rx-7700-xt-10",
    "nameEn": "AMD RX 7700 XT",
    "nameDe": "AMD RX 7700 XT",
    "brand": "AMD",
    "model": "RX 7700 XT",
    "descriptionEn": "High-performance RX 7700 XT by AMD. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-RX 7700 XT von AMD. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "379.00",
    "priceGbp": "329.00",
    "stock": 16,
    "images": [
      "/images/products/placeholder-gpu.svg"
    ],
    "specs": {
      "category": "gpu"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 1,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 1,
      "slug": "gpu",
      "nameEn": "Graphics Cards",
      "nameDe": "Grafikkarten"
    }
  },
  {
    "id": 12,
    "slug": "amd-rx-7600-11",
    "nameEn": "AMD RX 7600",
    "nameDe": "AMD RX 7600",
    "brand": "AMD",
    "model": "RX 7600",
    "descriptionEn": "High-performance RX 7600 by AMD. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-RX 7600 von AMD. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "269.00",
    "priceGbp": "229.00",
    "stock": 22,
    "images": [
      "/images/products/placeholder-gpu.svg"
    ],
    "specs": {
      "category": "gpu"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 1,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 1,
      "slug": "gpu",
      "nameEn": "Graphics Cards",
      "nameDe": "Grafikkarten"
    }
  },
  {
    "id": 13,
    "slug": "intel-arc-a770-16gb-12",
    "nameEn": "Intel Arc A770 16GB",
    "nameDe": "Intel Arc A770 16GB",
    "brand": "Intel",
    "model": "Arc A770 16GB",
    "descriptionEn": "High-performance Arc A770 16GB by Intel. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Arc A770 16GB von Intel. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "329.00",
    "priceGbp": "279.00",
    "stock": 10,
    "images": [
      "/images/products/placeholder-gpu.svg"
    ],
    "specs": {
      "category": "gpu"
    },
    "isFeatured": false,
    "isOnSale": true,
    "salePercent": 15,
    "categoryId": 1,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 1,
      "slug": "gpu",
      "nameEn": "Graphics Cards",
      "nameDe": "Grafikkarten"
    }
  },
  {
    "id": 14,
    "slug": "intel-arc-a750-13",
    "nameEn": "Intel Arc A750",
    "nameDe": "Intel Arc A750",
    "brand": "Intel",
    "model": "Arc A750",
    "descriptionEn": "High-performance Arc A750 by Intel. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Arc A750 von Intel. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "249.00",
    "priceGbp": "209.00",
    "stock": 12,
    "images": [
      "/images/products/placeholder-gpu.svg"
    ],
    "specs": {
      "category": "gpu"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 1,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 1,
      "slug": "gpu",
      "nameEn": "Graphics Cards",
      "nameDe": "Grafikkarten"
    }
  },
  {
    "id": 15,
    "slug": "nvidia-rtx-3080-ti-14",
    "nameEn": "NVIDIA RTX 3080 Ti",
    "nameDe": "NVIDIA RTX 3080 Ti",
    "brand": "NVIDIA",
    "model": "RTX 3080 Ti",
    "descriptionEn": "High-performance RTX 3080 Ti by NVIDIA. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-RTX 3080 Ti von NVIDIA. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "699.00",
    "priceGbp": "599.00",
    "stock": 6,
    "images": [
      "/images/products/placeholder-gpu.svg"
    ],
    "specs": {
      "category": "gpu"
    },
    "isFeatured": false,
    "isOnSale": true,
    "salePercent": 20,
    "categoryId": 1,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 1,
      "slug": "gpu",
      "nameEn": "Graphics Cards",
      "nameDe": "Grafikkarten"
    }
  },
  {
    "id": 16,
    "slug": "nvidia-rtx-3070-ti-15",
    "nameEn": "NVIDIA RTX 3070 Ti",
    "nameDe": "NVIDIA RTX 3070 Ti",
    "brand": "NVIDIA",
    "model": "RTX 3070 Ti",
    "descriptionEn": "High-performance RTX 3070 Ti by NVIDIA. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-RTX 3070 Ti von NVIDIA. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "449.00",
    "priceGbp": "389.00",
    "stock": 9,
    "images": [
      "/images/products/placeholder-gpu.svg"
    ],
    "specs": {
      "category": "gpu"
    },
    "isFeatured": false,
    "isOnSale": true,
    "salePercent": 15,
    "categoryId": 1,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 1,
      "slug": "gpu",
      "nameEn": "Graphics Cards",
      "nameDe": "Grafikkarten"
    }
  },
  {
    "id": 17,
    "slug": "custom-pro-gaming-x1-16",
    "nameEn": "Custom Pro Gaming X1",
    "nameDe": "Custom Pro Gaming X1",
    "brand": "Custom",
    "model": "Pro Gaming X1",
    "descriptionEn": "High-performance Pro Gaming X1 by Custom. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Pro Gaming X1 von Custom. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1499.00",
    "priceGbp": "1299.00",
    "stock": 4,
    "images": [
      "/images/products/placeholder-pc.svg"
    ],
    "specs": {
      "category": "pc"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 2,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 2,
      "slug": "pc",
      "nameEn": "Desktop PCs",
      "nameDe": "Desktop-PCs"
    }
  },
  {
    "id": 18,
    "slug": "custom-ultra-gaming-x2-17",
    "nameEn": "Custom Ultra Gaming X2",
    "nameDe": "Custom Ultra Gaming X2",
    "brand": "Custom",
    "model": "Ultra Gaming X2",
    "descriptionEn": "High-performance Ultra Gaming X2 by Custom. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Ultra Gaming X2 von Custom. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "2199.00",
    "priceGbp": "1899.00",
    "stock": 3,
    "images": [
      "/images/products/placeholder-pc.svg"
    ],
    "specs": {
      "category": "pc"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 2,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 2,
      "slug": "pc",
      "nameEn": "Desktop PCs",
      "nameDe": "Desktop-PCs"
    }
  },
  {
    "id": 19,
    "slug": "custom-elite-gaming-x3-18",
    "nameEn": "Custom Elite Gaming X3",
    "nameDe": "Custom Elite Gaming X3",
    "brand": "Custom",
    "model": "Elite Gaming X3",
    "descriptionEn": "High-performance Elite Gaming X3 by Custom. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Elite Gaming X3 von Custom. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "2999.00",
    "priceGbp": "2599.00",
    "stock": 2,
    "images": [
      "/images/products/placeholder-pc.svg"
    ],
    "specs": {
      "category": "pc"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 2,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 2,
      "slug": "pc",
      "nameEn": "Desktop PCs",
      "nameDe": "Desktop-PCs"
    }
  },
  {
    "id": 20,
    "slug": "custom-budget-build-b1-19",
    "nameEn": "Custom Budget Build B1",
    "nameDe": "Custom Budget Build B1",
    "brand": "Custom",
    "model": "Budget Build B1",
    "descriptionEn": "High-performance Budget Build B1 by Custom. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Budget Build B1 von Custom. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "799.00",
    "priceGbp": "689.00",
    "stock": 8,
    "images": [
      "/images/products/placeholder-pc.svg"
    ],
    "specs": {
      "category": "pc"
    },
    "isFeatured": false,
    "isOnSale": true,
    "salePercent": 10,
    "categoryId": 2,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 2,
      "slug": "pc",
      "nameEn": "Desktop PCs",
      "nameDe": "Desktop-PCs"
    }
  },
  {
    "id": 21,
    "slug": "custom-mid-range-m1-20",
    "nameEn": "Custom Mid-Range M1",
    "nameDe": "Custom Mid-Range M1",
    "brand": "Custom",
    "model": "Mid-Range M1",
    "descriptionEn": "High-performance Mid-Range M1 by Custom. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Mid-Range M1 von Custom. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1099.00",
    "priceGbp": "949.00",
    "stock": 6,
    "images": [
      "/images/products/placeholder-pc.svg"
    ],
    "specs": {
      "category": "pc"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 2,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 2,
      "slug": "pc",
      "nameEn": "Desktop PCs",
      "nameDe": "Desktop-PCs"
    }
  },
  {
    "id": 22,
    "slug": "custom-workstation-w1-21",
    "nameEn": "Custom Workstation W1",
    "nameDe": "Custom Workstation W1",
    "brand": "Custom",
    "model": "Workstation W1",
    "descriptionEn": "High-performance Workstation W1 by Custom. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Workstation W1 von Custom. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1899.00",
    "priceGbp": "1649.00",
    "stock": 3,
    "images": [
      "/images/products/placeholder-pc.svg"
    ],
    "specs": {
      "category": "pc"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 2,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 2,
      "slug": "pc",
      "nameEn": "Desktop PCs",
      "nameDe": "Desktop-PCs"
    }
  },
  {
    "id": 23,
    "slug": "custom-streaming-pc-s1-22",
    "nameEn": "Custom Streaming PC S1",
    "nameDe": "Custom Streaming PC S1",
    "brand": "Custom",
    "model": "Streaming PC S1",
    "descriptionEn": "High-performance Streaming PC S1 by Custom. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Streaming PC S1 von Custom. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1299.00",
    "priceGbp": "1119.00",
    "stock": 5,
    "images": [
      "/images/products/placeholder-pc.svg"
    ],
    "specs": {
      "category": "pc"
    },
    "isFeatured": false,
    "isOnSale": true,
    "salePercent": 5,
    "categoryId": 2,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 2,
      "slug": "pc",
      "nameEn": "Desktop PCs",
      "nameDe": "Desktop-PCs"
    }
  },
  {
    "id": 24,
    "slug": "custom-mini-itx-m2-23",
    "nameEn": "Custom Mini ITX M2",
    "nameDe": "Custom Mini ITX M2",
    "brand": "Custom",
    "model": "Mini ITX M2",
    "descriptionEn": "High-performance Mini ITX M2 by Custom. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Mini ITX M2 von Custom. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "999.00",
    "priceGbp": "859.00",
    "stock": 7,
    "images": [
      "/images/products/placeholder-pc.svg"
    ],
    "specs": {
      "category": "pc"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 2,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 2,
      "slug": "pc",
      "nameEn": "Desktop PCs",
      "nameDe": "Desktop-PCs"
    }
  },
  {
    "id": 25,
    "slug": "custom-amd-ryzen-build-r1-24",
    "nameEn": "Custom AMD Ryzen Build R1",
    "nameDe": "Custom AMD Ryzen Build R1",
    "brand": "Custom",
    "model": "AMD Ryzen Build R1",
    "descriptionEn": "High-performance AMD Ryzen Build R1 by Custom. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-AMD Ryzen Build R1 von Custom. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1199.00",
    "priceGbp": "1039.00",
    "stock": 6,
    "images": [
      "/images/products/placeholder-pc.svg"
    ],
    "specs": {
      "category": "pc"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 2,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 2,
      "slug": "pc",
      "nameEn": "Desktop PCs",
      "nameDe": "Desktop-PCs"
    }
  },
  {
    "id": 26,
    "slug": "custom-intel-core-build-i1-25",
    "nameEn": "Custom Intel Core Build I1",
    "nameDe": "Custom Intel Core Build I1",
    "brand": "Custom",
    "model": "Intel Core Build I1",
    "descriptionEn": "High-performance Intel Core Build I1 by Custom. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Intel Core Build I1 von Custom. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1349.00",
    "priceGbp": "1169.00",
    "stock": 5,
    "images": [
      "/images/products/placeholder-pc.svg"
    ],
    "specs": {
      "category": "pc"
    },
    "isFeatured": false,
    "isOnSale": true,
    "salePercent": 8,
    "categoryId": 2,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 2,
      "slug": "pc",
      "nameEn": "Desktop PCs",
      "nameDe": "Desktop-PCs"
    }
  },
  {
    "id": 27,
    "slug": "custom-silent-pc-q1-26",
    "nameEn": "Custom Silent PC Q1",
    "nameDe": "Custom Silent PC Q1",
    "brand": "Custom",
    "model": "Silent PC Q1",
    "descriptionEn": "High-performance Silent PC Q1 by Custom. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Silent PC Q1 von Custom. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1599.00",
    "priceGbp": "1379.00",
    "stock": 4,
    "images": [
      "/images/products/placeholder-pc.svg"
    ],
    "specs": {
      "category": "pc"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 2,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 2,
      "slug": "pc",
      "nameEn": "Desktop PCs",
      "nameDe": "Desktop-PCs"
    }
  },
  {
    "id": 28,
    "slug": "custom-rgb-gaming-r2-27",
    "nameEn": "Custom RGB Gaming R2",
    "nameDe": "Custom RGB Gaming R2",
    "brand": "Custom",
    "model": "RGB Gaming R2",
    "descriptionEn": "High-performance RGB Gaming R2 by Custom. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-RGB Gaming R2 von Custom. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1749.00",
    "priceGbp": "1499.00",
    "stock": 3,
    "images": [
      "/images/products/placeholder-pc.svg"
    ],
    "specs": {
      "category": "pc"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 2,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 2,
      "slug": "pc",
      "nameEn": "Desktop PCs",
      "nameDe": "Desktop-PCs"
    }
  },
  {
    "id": 29,
    "slug": "custom-office-pro-o1-28",
    "nameEn": "Custom Office Pro O1",
    "nameDe": "Custom Office Pro O1",
    "brand": "Custom",
    "model": "Office Pro O1",
    "descriptionEn": "High-performance Office Pro O1 by Custom. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Office Pro O1 von Custom. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "649.00",
    "priceGbp": "559.00",
    "stock": 10,
    "images": [
      "/images/products/placeholder-pc.svg"
    ],
    "specs": {
      "category": "pc"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 2,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 2,
      "slug": "pc",
      "nameEn": "Desktop PCs",
      "nameDe": "Desktop-PCs"
    }
  },
  {
    "id": 30,
    "slug": "custom-creator-studio-c1-29",
    "nameEn": "Custom Creator Studio C1",
    "nameDe": "Custom Creator Studio C1",
    "brand": "Custom",
    "model": "Creator Studio C1",
    "descriptionEn": "High-performance Creator Studio C1 by Custom. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Creator Studio C1 von Custom. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "2499.00",
    "priceGbp": "2149.00",
    "stock": 2,
    "images": [
      "/images/products/placeholder-pc.svg"
    ],
    "specs": {
      "category": "pc"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 2,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 2,
      "slug": "pc",
      "nameEn": "Desktop PCs",
      "nameDe": "Desktop-PCs"
    }
  },
  {
    "id": 31,
    "slug": "lg-27gp850-b-27-165hz-30",
    "nameEn": "LG 27GP850-B 27\" 165Hz",
    "nameDe": "LG 27GP850-B 27\" 165Hz",
    "brand": "LG",
    "model": "27GP850-B 27\" 165Hz",
    "descriptionEn": "High-performance 27GP850-B 27\" 165Hz by LG. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-27GP850-B 27\" 165Hz von LG. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "349.00",
    "priceGbp": "299.00",
    "stock": 15,
    "images": [
      "/images/products/placeholder-monitor.svg"
    ],
    "specs": {
      "category": "monitor"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 3,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 3,
      "slug": "monitor",
      "nameEn": "Monitors",
      "nameDe": "Monitore"
    }
  },
  {
    "id": 32,
    "slug": "lg-32gq950-b-32-4k-31",
    "nameEn": "LG 32GQ950-B 32\" 4K",
    "nameDe": "LG 32GQ950-B 32\" 4K",
    "brand": "LG",
    "model": "32GQ950-B 32\" 4K",
    "descriptionEn": "High-performance 32GQ950-B 32\" 4K by LG. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-32GQ950-B 32\" 4K von LG. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "799.00",
    "priceGbp": "689.00",
    "stock": 8,
    "images": [
      "/images/products/placeholder-monitor.svg"
    ],
    "specs": {
      "category": "monitor"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 3,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 3,
      "slug": "monitor",
      "nameEn": "Monitors",
      "nameDe": "Monitore"
    }
  },
  {
    "id": 33,
    "slug": "samsung-odyssey-g7-32-32",
    "nameEn": "Samsung Odyssey G7 32\"",
    "nameDe": "Samsung Odyssey G7 32\"",
    "brand": "Samsung",
    "model": "Odyssey G7 32\"",
    "descriptionEn": "High-performance Odyssey G7 32\" by Samsung. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Odyssey G7 32\" von Samsung. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "599.00",
    "priceGbp": "519.00",
    "stock": 10,
    "images": [
      "/images/products/placeholder-monitor.svg"
    ],
    "specs": {
      "category": "monitor"
    },
    "isFeatured": false,
    "isOnSale": true,
    "salePercent": 10,
    "categoryId": 3,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 3,
      "slug": "monitor",
      "nameEn": "Monitors",
      "nameDe": "Monitore"
    }
  },
  {
    "id": 34,
    "slug": "samsung-odyssey-g9-49-33",
    "nameEn": "Samsung Odyssey G9 49\"",
    "nameDe": "Samsung Odyssey G9 49\"",
    "brand": "Samsung",
    "model": "Odyssey G9 49\"",
    "descriptionEn": "High-performance Odyssey G9 49\" by Samsung. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Odyssey G9 49\" von Samsung. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1199.00",
    "priceGbp": "1039.00",
    "stock": 5,
    "images": [
      "/images/products/placeholder-monitor.svg"
    ],
    "specs": {
      "category": "monitor"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 3,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 3,
      "slug": "monitor",
      "nameEn": "Monitors",
      "nameDe": "Monitore"
    }
  },
  {
    "id": 35,
    "slug": "samsung-odyssey-neo-g8-34",
    "nameEn": "Samsung Odyssey Neo G8",
    "nameDe": "Samsung Odyssey Neo G8",
    "brand": "Samsung",
    "model": "Odyssey Neo G8",
    "descriptionEn": "High-performance Odyssey Neo G8 by Samsung. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Odyssey Neo G8 von Samsung. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "899.00",
    "priceGbp": "779.00",
    "stock": 7,
    "images": [
      "/images/products/placeholder-monitor.svg"
    ],
    "specs": {
      "category": "monitor"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 3,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 3,
      "slug": "monitor",
      "nameEn": "Monitors",
      "nameDe": "Monitore"
    }
  },
  {
    "id": 36,
    "slug": "asus-rog-swift-pg279qm-35",
    "nameEn": "ASUS ROG Swift PG279QM",
    "nameDe": "ASUS ROG Swift PG279QM",
    "brand": "ASUS",
    "model": "ROG Swift PG279QM",
    "descriptionEn": "High-performance ROG Swift PG279QM by ASUS. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-ROG Swift PG279QM von ASUS. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "699.00",
    "priceGbp": "599.00",
    "stock": 9,
    "images": [
      "/images/products/placeholder-monitor.svg"
    ],
    "specs": {
      "category": "monitor"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 3,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 3,
      "slug": "monitor",
      "nameEn": "Monitors",
      "nameDe": "Monitore"
    }
  },
  {
    "id": 37,
    "slug": "asus-tuf-gaming-vg27aq-36",
    "nameEn": "ASUS TUF Gaming VG27AQ",
    "nameDe": "ASUS TUF Gaming VG27AQ",
    "brand": "ASUS",
    "model": "TUF Gaming VG27AQ",
    "descriptionEn": "High-performance TUF Gaming VG27AQ by ASUS. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-TUF Gaming VG27AQ von ASUS. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "299.00",
    "priceGbp": "259.00",
    "stock": 18,
    "images": [
      "/images/products/placeholder-monitor.svg"
    ],
    "specs": {
      "category": "monitor"
    },
    "isFeatured": false,
    "isOnSale": true,
    "salePercent": 5,
    "categoryId": 3,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 3,
      "slug": "monitor",
      "nameEn": "Monitors",
      "nameDe": "Monitore"
    }
  },
  {
    "id": 38,
    "slug": "asus-proart-pa32ucx-37",
    "nameEn": "ASUS ProArt PA32UCX",
    "nameDe": "ASUS ProArt PA32UCX",
    "brand": "ASUS",
    "model": "ProArt PA32UCX",
    "descriptionEn": "High-performance ProArt PA32UCX by ASUS. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-ProArt PA32UCX von ASUS. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1499.00",
    "priceGbp": "1299.00",
    "stock": 4,
    "images": [
      "/images/products/placeholder-monitor.svg"
    ],
    "specs": {
      "category": "monitor"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 3,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 3,
      "slug": "monitor",
      "nameEn": "Monitors",
      "nameDe": "Monitore"
    }
  },
  {
    "id": 39,
    "slug": "aoc-agon-ag274qzm-38",
    "nameEn": "AOC AGON AG274QZM",
    "nameDe": "AOC AGON AG274QZM",
    "brand": "AOC",
    "model": "AGON AG274QZM",
    "descriptionEn": "High-performance AGON AG274QZM by AOC. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-AGON AG274QZM von AOC. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "449.00",
    "priceGbp": "389.00",
    "stock": 12,
    "images": [
      "/images/products/placeholder-monitor.svg"
    ],
    "specs": {
      "category": "monitor"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 3,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 3,
      "slug": "monitor",
      "nameEn": "Monitors",
      "nameDe": "Monitore"
    }
  },
  {
    "id": 40,
    "slug": "aoc-q27g2s-27-165hz-39",
    "nameEn": "AOC Q27G2S 27\" 165Hz",
    "nameDe": "AOC Q27G2S 27\" 165Hz",
    "brand": "AOC",
    "model": "Q27G2S 27\" 165Hz",
    "descriptionEn": "High-performance Q27G2S 27\" 165Hz by AOC. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Q27G2S 27\" 165Hz von AOC. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "249.00",
    "priceGbp": "219.00",
    "stock": 20,
    "images": [
      "/images/products/placeholder-monitor.svg"
    ],
    "specs": {
      "category": "monitor"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 3,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 3,
      "slug": "monitor",
      "nameEn": "Monitors",
      "nameDe": "Monitore"
    }
  },
  {
    "id": 41,
    "slug": "dell-alienware-aw3423dw-40",
    "nameEn": "Dell Alienware AW3423DW",
    "nameDe": "Dell Alienware AW3423DW",
    "brand": "Dell",
    "model": "Alienware AW3423DW",
    "descriptionEn": "High-performance Alienware AW3423DW by Dell. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Alienware AW3423DW von Dell. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "999.00",
    "priceGbp": "859.00",
    "stock": 6,
    "images": [
      "/images/products/placeholder-monitor.svg"
    ],
    "specs": {
      "category": "monitor"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 3,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 3,
      "slug": "monitor",
      "nameEn": "Monitors",
      "nameDe": "Monitore"
    }
  },
  {
    "id": 42,
    "slug": "dell-s2722dgm-27-41",
    "nameEn": "Dell S2722DGM 27\"",
    "nameDe": "Dell S2722DGM 27\"",
    "brand": "Dell",
    "model": "S2722DGM 27\"",
    "descriptionEn": "High-performance S2722DGM 27\" by Dell. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-S2722DGM 27\" von Dell. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "279.00",
    "priceGbp": "239.00",
    "stock": 16,
    "images": [
      "/images/products/placeholder-monitor.svg"
    ],
    "specs": {
      "category": "monitor"
    },
    "isFeatured": false,
    "isOnSale": true,
    "salePercent": 8,
    "categoryId": 3,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 3,
      "slug": "monitor",
      "nameEn": "Monitors",
      "nameDe": "Monitore"
    }
  },
  {
    "id": 43,
    "slug": "benq-mobiuz-ex2710q-42",
    "nameEn": "BenQ MOBIUZ EX2710Q",
    "nameDe": "BenQ MOBIUZ EX2710Q",
    "brand": "BenQ",
    "model": "MOBIUZ EX2710Q",
    "descriptionEn": "High-performance MOBIUZ EX2710Q by BenQ. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-MOBIUZ EX2710Q von BenQ. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "329.00",
    "priceGbp": "279.00",
    "stock": 14,
    "images": [
      "/images/products/placeholder-monitor.svg"
    ],
    "specs": {
      "category": "monitor"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 3,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 3,
      "slug": "monitor",
      "nameEn": "Monitors",
      "nameDe": "Monitore"
    }
  },
  {
    "id": 44,
    "slug": "msi-optix-mag274qrf-43",
    "nameEn": "MSI Optix MAG274QRF",
    "nameDe": "MSI Optix MAG274QRF",
    "brand": "MSI",
    "model": "Optix MAG274QRF",
    "descriptionEn": "High-performance Optix MAG274QRF by MSI. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Optix MAG274QRF von MSI. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "369.00",
    "priceGbp": "319.00",
    "stock": 11,
    "images": [
      "/images/products/placeholder-monitor.svg"
    ],
    "specs": {
      "category": "monitor"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 3,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 3,
      "slug": "monitor",
      "nameEn": "Monitors",
      "nameDe": "Monitore"
    }
  },
  {
    "id": 45,
    "slug": "gigabyte-m27q-27-170hz-44",
    "nameEn": "Gigabyte M27Q 27\" 170Hz",
    "nameDe": "Gigabyte M27Q 27\" 170Hz",
    "brand": "Gigabyte",
    "model": "M27Q 27\" 170Hz",
    "descriptionEn": "High-performance M27Q 27\" 170Hz by Gigabyte. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-M27Q 27\" 170Hz von Gigabyte. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "289.00",
    "priceGbp": "249.00",
    "stock": 17,
    "images": [
      "/images/products/placeholder-monitor.svg"
    ],
    "specs": {
      "category": "monitor"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 3,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 3,
      "slug": "monitor",
      "nameEn": "Monitors",
      "nameDe": "Monitore"
    }
  },
  {
    "id": 46,
    "slug": "philips-279m1rv-27-4k-45",
    "nameEn": "Philips 279M1RV 27\" 4K",
    "nameDe": "Philips 279M1RV 27\" 4K",
    "brand": "Philips",
    "model": "279M1RV 27\" 4K",
    "descriptionEn": "High-performance 279M1RV 27\" 4K by Philips. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-279M1RV 27\" 4K von Philips. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "499.00",
    "priceGbp": "429.00",
    "stock": 9,
    "images": [
      "/images/products/placeholder-monitor.svg"
    ],
    "specs": {
      "category": "monitor"
    },
    "isFeatured": false,
    "isOnSale": true,
    "salePercent": 12,
    "categoryId": 3,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 3,
      "slug": "monitor",
      "nameEn": "Monitors",
      "nameDe": "Monitore"
    }
  },
  {
    "id": 47,
    "slug": "asus-rog-zephyrus-g14-46",
    "nameEn": "ASUS ROG Zephyrus G14",
    "nameDe": "ASUS ROG Zephyrus G14",
    "brand": "ASUS",
    "model": "ROG Zephyrus G14",
    "descriptionEn": "High-performance ROG Zephyrus G14 by ASUS. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-ROG Zephyrus G14 von ASUS. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1499.00",
    "priceGbp": "1299.00",
    "stock": 8,
    "images": [
      "/images/products/placeholder-laptop.svg"
    ],
    "specs": {
      "category": "laptop"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 4,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 4,
      "slug": "laptop",
      "nameEn": "Gaming Laptops",
      "nameDe": "Gaming-Laptops"
    }
  },
  {
    "id": 48,
    "slug": "asus-rog-strix-g16-47",
    "nameEn": "ASUS ROG Strix G16",
    "nameDe": "ASUS ROG Strix G16",
    "brand": "ASUS",
    "model": "ROG Strix G16",
    "descriptionEn": "High-performance ROG Strix G16 by ASUS. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-ROG Strix G16 von ASUS. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1799.00",
    "priceGbp": "1549.00",
    "stock": 6,
    "images": [
      "/images/products/placeholder-laptop.svg"
    ],
    "specs": {
      "category": "laptop"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 4,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 4,
      "slug": "laptop",
      "nameEn": "Gaming Laptops",
      "nameDe": "Gaming-Laptops"
    }
  },
  {
    "id": 49,
    "slug": "asus-tuf-gaming-a15-48",
    "nameEn": "ASUS TUF Gaming A15",
    "nameDe": "ASUS TUF Gaming A15",
    "brand": "ASUS",
    "model": "TUF Gaming A15",
    "descriptionEn": "High-performance TUF Gaming A15 by ASUS. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-TUF Gaming A15 von ASUS. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "999.00",
    "priceGbp": "859.00",
    "stock": 12,
    "images": [
      "/images/products/placeholder-laptop.svg"
    ],
    "specs": {
      "category": "laptop"
    },
    "isFeatured": false,
    "isOnSale": true,
    "salePercent": 10,
    "categoryId": 4,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 4,
      "slug": "laptop",
      "nameEn": "Gaming Laptops",
      "nameDe": "Gaming-Laptops"
    }
  },
  {
    "id": 50,
    "slug": "msi-raider-ge78-hx-49",
    "nameEn": "MSI Raider GE78 HX",
    "nameDe": "MSI Raider GE78 HX",
    "brand": "MSI",
    "model": "Raider GE78 HX",
    "descriptionEn": "High-performance Raider GE78 HX by MSI. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Raider GE78 HX von MSI. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "2499.00",
    "priceGbp": "2149.00",
    "stock": 4,
    "images": [
      "/images/products/placeholder-laptop.svg"
    ],
    "specs": {
      "category": "laptop"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 4,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 4,
      "slug": "laptop",
      "nameEn": "Gaming Laptops",
      "nameDe": "Gaming-Laptops"
    }
  },
  {
    "id": 51,
    "slug": "msi-katana-15-b13v-50",
    "nameEn": "MSI Katana 15 B13V",
    "nameDe": "MSI Katana 15 B13V",
    "brand": "MSI",
    "model": "Katana 15 B13V",
    "descriptionEn": "High-performance Katana 15 B13V by MSI. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Katana 15 B13V von MSI. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1099.00",
    "priceGbp": "949.00",
    "stock": 9,
    "images": [
      "/images/products/placeholder-laptop.svg"
    ],
    "specs": {
      "category": "laptop"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 4,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 4,
      "slug": "laptop",
      "nameEn": "Gaming Laptops",
      "nameDe": "Gaming-Laptops"
    }
  },
  {
    "id": 52,
    "slug": "msi-stealth-16-studio-51",
    "nameEn": "MSI Stealth 16 Studio",
    "nameDe": "MSI Stealth 16 Studio",
    "brand": "MSI",
    "model": "Stealth 16 Studio",
    "descriptionEn": "High-performance Stealth 16 Studio by MSI. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Stealth 16 Studio von MSI. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1999.00",
    "priceGbp": "1729.00",
    "stock": 5,
    "images": [
      "/images/products/placeholder-laptop.svg"
    ],
    "specs": {
      "category": "laptop"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 4,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 4,
      "slug": "laptop",
      "nameEn": "Gaming Laptops",
      "nameDe": "Gaming-Laptops"
    }
  },
  {
    "id": 53,
    "slug": "lenovo-legion-pro-7i-52",
    "nameEn": "Lenovo Legion Pro 7i",
    "nameDe": "Lenovo Legion Pro 7i",
    "brand": "Lenovo",
    "model": "Legion Pro 7i",
    "descriptionEn": "High-performance Legion Pro 7i by Lenovo. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Legion Pro 7i von Lenovo. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1899.00",
    "priceGbp": "1649.00",
    "stock": 6,
    "images": [
      "/images/products/placeholder-laptop.svg"
    ],
    "specs": {
      "category": "laptop"
    },
    "isFeatured": false,
    "isOnSale": true,
    "salePercent": 5,
    "categoryId": 4,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 4,
      "slug": "laptop",
      "nameEn": "Gaming Laptops",
      "nameDe": "Gaming-Laptops"
    }
  },
  {
    "id": 54,
    "slug": "lenovo-legion-5-pro-53",
    "nameEn": "Lenovo Legion 5 Pro",
    "nameDe": "Lenovo Legion 5 Pro",
    "brand": "Lenovo",
    "model": "Legion 5 Pro",
    "descriptionEn": "High-performance Legion 5 Pro by Lenovo. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Legion 5 Pro von Lenovo. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1299.00",
    "priceGbp": "1119.00",
    "stock": 10,
    "images": [
      "/images/products/placeholder-laptop.svg"
    ],
    "specs": {
      "category": "laptop"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 4,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 4,
      "slug": "laptop",
      "nameEn": "Gaming Laptops",
      "nameDe": "Gaming-Laptops"
    }
  },
  {
    "id": 55,
    "slug": "lenovo-ideapad-gaming-3-54",
    "nameEn": "Lenovo IdeaPad Gaming 3",
    "nameDe": "Lenovo IdeaPad Gaming 3",
    "brand": "Lenovo",
    "model": "IdeaPad Gaming 3",
    "descriptionEn": "High-performance IdeaPad Gaming 3 by Lenovo. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-IdeaPad Gaming 3 von Lenovo. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "799.00",
    "priceGbp": "689.00",
    "stock": 15,
    "images": [
      "/images/products/placeholder-laptop.svg"
    ],
    "specs": {
      "category": "laptop"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 4,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 4,
      "slug": "laptop",
      "nameEn": "Gaming Laptops",
      "nameDe": "Gaming-Laptops"
    }
  },
  {
    "id": 56,
    "slug": "acer-predator-helios-16-55",
    "nameEn": "Acer Predator Helios 16",
    "nameDe": "Acer Predator Helios 16",
    "brand": "Acer",
    "model": "Predator Helios 16",
    "descriptionEn": "High-performance Predator Helios 16 by Acer. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Predator Helios 16 von Acer. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1699.00",
    "priceGbp": "1469.00",
    "stock": 7,
    "images": [
      "/images/products/placeholder-laptop.svg"
    ],
    "specs": {
      "category": "laptop"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 4,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 4,
      "slug": "laptop",
      "nameEn": "Gaming Laptops",
      "nameDe": "Gaming-Laptops"
    }
  },
  {
    "id": 57,
    "slug": "acer-nitro-5-an515-56",
    "nameEn": "Acer Nitro 5 AN515",
    "nameDe": "Acer Nitro 5 AN515",
    "brand": "Acer",
    "model": "Nitro 5 AN515",
    "descriptionEn": "High-performance Nitro 5 AN515 by Acer. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Nitro 5 AN515 von Acer. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "899.00",
    "priceGbp": "779.00",
    "stock": 13,
    "images": [
      "/images/products/placeholder-laptop.svg"
    ],
    "specs": {
      "category": "laptop"
    },
    "isFeatured": false,
    "isOnSale": true,
    "salePercent": 8,
    "categoryId": 4,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 4,
      "slug": "laptop",
      "nameEn": "Gaming Laptops",
      "nameDe": "Gaming-Laptops"
    }
  },
  {
    "id": 58,
    "slug": "hp-omen-16-57",
    "nameEn": "HP OMEN 16",
    "nameDe": "HP OMEN 16",
    "brand": "HP",
    "model": "OMEN 16",
    "descriptionEn": "High-performance OMEN 16 by HP. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-OMEN 16 von HP. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1399.00",
    "priceGbp": "1209.00",
    "stock": 8,
    "images": [
      "/images/products/placeholder-laptop.svg"
    ],
    "specs": {
      "category": "laptop"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 4,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 4,
      "slug": "laptop",
      "nameEn": "Gaming Laptops",
      "nameDe": "Gaming-Laptops"
    }
  },
  {
    "id": 59,
    "slug": "hp-victus-15-58",
    "nameEn": "HP Victus 15",
    "nameDe": "HP Victus 15",
    "brand": "HP",
    "model": "Victus 15",
    "descriptionEn": "High-performance Victus 15 by HP. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Victus 15 von HP. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "749.00",
    "priceGbp": "649.00",
    "stock": 16,
    "images": [
      "/images/products/placeholder-laptop.svg"
    ],
    "specs": {
      "category": "laptop"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 4,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 4,
      "slug": "laptop",
      "nameEn": "Gaming Laptops",
      "nameDe": "Gaming-Laptops"
    }
  },
  {
    "id": 60,
    "slug": "razer-blade-15-59",
    "nameEn": "Razer Blade 15",
    "nameDe": "Razer Blade 15",
    "brand": "Razer",
    "model": "Blade 15",
    "descriptionEn": "High-performance Blade 15 by Razer. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Blade 15 von Razer. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "2299.00",
    "priceGbp": "1989.00",
    "stock": 4,
    "images": [
      "/images/products/placeholder-laptop.svg"
    ],
    "specs": {
      "category": "laptop"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 4,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 4,
      "slug": "laptop",
      "nameEn": "Gaming Laptops",
      "nameDe": "Gaming-Laptops"
    }
  },
  {
    "id": 61,
    "slug": "razer-blade-14-60",
    "nameEn": "Razer Blade 14",
    "nameDe": "Razer Blade 14",
    "brand": "Razer",
    "model": "Blade 14",
    "descriptionEn": "High-performance Blade 14 by Razer. Ideal for gaming and professional use.",
    "descriptionDe": "Hochleistungs-Blade 14 von Razer. Ideal für Gaming und professionellen Einsatz.",
    "priceEur": "1999.00",
    "priceGbp": "1729.00",
    "stock": 5,
    "images": [
      "/images/products/placeholder-laptop.svg"
    ],
    "specs": {
      "category": "laptop"
    },
    "isFeatured": false,
    "isOnSale": false,
    "salePercent": null,
    "categoryId": 4,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "category": {
      "id": 4,
      "slug": "laptop",
      "nameEn": "Gaming Laptops",
      "nameDe": "Gaming-Laptops"
    }
  }
];
