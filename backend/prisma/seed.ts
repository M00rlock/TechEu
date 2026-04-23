import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const categories = [
  { slug: 'gpu', nameEn: 'Graphics Cards', nameDe: 'Grafikkarten' },
  { slug: 'pc', nameEn: 'Desktop PCs', nameDe: 'Desktop-PCs' },
  { slug: 'monitor', nameEn: 'Monitors', nameDe: 'Monitore' },
  { slug: 'laptop', nameEn: 'Gaming Laptops', nameDe: 'Gaming-Laptops' },
];

function slug(brand: string, model: string) {
  return `${brand}-${model}`.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

const products = [
  // GPUs
  { cat: 'gpu', brand: 'NVIDIA', model: 'RTX 4090', eur: 1799, gbp: 1549, stock: 5, sale: null },
  { cat: 'gpu', brand: 'NVIDIA', model: 'RTX 4080 Super', eur: 1099, gbp: 949, stock: 8, sale: 10 },
  { cat: 'gpu', brand: 'NVIDIA', model: 'RTX 4070 Ti', eur: 799, gbp: 689, stock: 12, sale: null },
  { cat: 'gpu', brand: 'NVIDIA', model: 'RTX 4070 Super', eur: 599, gbp: 519, stock: 15, sale: null },
  { cat: 'gpu', brand: 'NVIDIA', model: 'RTX 4070', eur: 499, gbp: 429, stock: 20, sale: null },
  { cat: 'gpu', brand: 'NVIDIA', model: 'RTX 4060 Ti', eur: 399, gbp: 349, stock: 18, sale: 5 },
  { cat: 'gpu', brand: 'NVIDIA', model: 'RTX 4060', eur: 299, gbp: 259, stock: 25, sale: null },
  { cat: 'gpu', brand: 'AMD', model: 'RX 7900 XTX', eur: 999, gbp: 859, stock: 7, sale: null },
  { cat: 'gpu', brand: 'AMD', model: 'RX 7900 XT', eur: 799, gbp: 689, stock: 10, sale: 8 },
  { cat: 'gpu', brand: 'AMD', model: 'RX 7800 XT', eur: 499, gbp: 429, stock: 14, sale: null },
  { cat: 'gpu', brand: 'AMD', model: 'RX 7700 XT', eur: 379, gbp: 329, stock: 16, sale: null },
  { cat: 'gpu', brand: 'AMD', model: 'RX 7600', eur: 269, gbp: 229, stock: 22, sale: null },
  { cat: 'gpu', brand: 'Intel', model: 'Arc A770 16GB', eur: 329, gbp: 279, stock: 10, sale: 15 },
  { cat: 'gpu', brand: 'Intel', model: 'Arc A750', eur: 249, gbp: 209, stock: 12, sale: null },
  { cat: 'gpu', brand: 'NVIDIA', model: 'RTX 3080 Ti', eur: 699, gbp: 599, stock: 6, sale: 20 },
  { cat: 'gpu', brand: 'NVIDIA', model: 'RTX 3070 Ti', eur: 449, gbp: 389, stock: 9, sale: 15 },

  // PCs
  { cat: 'pc', brand: 'Custom', model: 'Pro Gaming X1', eur: 1499, gbp: 1299, stock: 4, sale: null },
  { cat: 'pc', brand: 'Custom', model: 'Ultra Gaming X2', eur: 2199, gbp: 1899, stock: 3, sale: null },
  { cat: 'pc', brand: 'Custom', model: 'Elite Gaming X3', eur: 2999, gbp: 2599, stock: 2, sale: null },
  { cat: 'pc', brand: 'Custom', model: 'Budget Build B1', eur: 799, gbp: 689, stock: 8, sale: 10 },
  { cat: 'pc', brand: 'Custom', model: 'Mid-Range M1', eur: 1099, gbp: 949, stock: 6, sale: null },
  { cat: 'pc', brand: 'Custom', model: 'Workstation W1', eur: 1899, gbp: 1649, stock: 3, sale: null },
  { cat: 'pc', brand: 'Custom', model: 'Streaming PC S1', eur: 1299, gbp: 1119, stock: 5, sale: 5 },
  { cat: 'pc', brand: 'Custom', model: 'Mini ITX M2', eur: 999, gbp: 859, stock: 7, sale: null },
  { cat: 'pc', brand: 'Custom', model: 'AMD Ryzen Build R1', eur: 1199, gbp: 1039, stock: 6, sale: null },
  { cat: 'pc', brand: 'Custom', model: 'Intel Core Build I1', eur: 1349, gbp: 1169, stock: 5, sale: 8 },
  { cat: 'pc', brand: 'Custom', model: 'Silent PC Q1', eur: 1599, gbp: 1379, stock: 4, sale: null },
  { cat: 'pc', brand: 'Custom', model: 'RGB Gaming R2', eur: 1749, gbp: 1499, stock: 3, sale: null },
  { cat: 'pc', brand: 'Custom', model: 'Office Pro O1', eur: 649, gbp: 559, stock: 10, sale: null },
  { cat: 'pc', brand: 'Custom', model: 'Creator Studio C1', eur: 2499, gbp: 2149, stock: 2, sale: null },

  // Monitors
  { cat: 'monitor', brand: 'LG', model: '27GP850-B 27" 165Hz', eur: 349, gbp: 299, stock: 15, sale: null },
  { cat: 'monitor', brand: 'LG', model: '32GQ950-B 32" 4K', eur: 799, gbp: 689, stock: 8, sale: null },
  { cat: 'monitor', brand: 'Samsung', model: 'Odyssey G7 32"', eur: 599, gbp: 519, stock: 10, sale: 10 },
  { cat: 'monitor', brand: 'Samsung', model: 'Odyssey G9 49"', eur: 1199, gbp: 1039, stock: 5, sale: null },
  { cat: 'monitor', brand: 'Samsung', model: 'Odyssey Neo G8', eur: 899, gbp: 779, stock: 7, sale: null },
  { cat: 'monitor', brand: 'ASUS', model: 'ROG Swift PG279QM', eur: 699, gbp: 599, stock: 9, sale: null },
  { cat: 'monitor', brand: 'ASUS', model: 'TUF Gaming VG27AQ', eur: 299, gbp: 259, stock: 18, sale: 5 },
  { cat: 'monitor', brand: 'ASUS', model: 'ProArt PA32UCX', eur: 1499, gbp: 1299, stock: 4, sale: null },
  { cat: 'monitor', brand: 'AOC', model: 'AGON AG274QZM', eur: 449, gbp: 389, stock: 12, sale: null },
  { cat: 'monitor', brand: 'AOC', model: 'Q27G2S 27" 165Hz', eur: 249, gbp: 219, stock: 20, sale: null },
  { cat: 'monitor', brand: 'Dell', model: 'Alienware AW3423DW', eur: 999, gbp: 859, stock: 6, sale: null },
  { cat: 'monitor', brand: 'Dell', model: 'S2722DGM 27"', eur: 279, gbp: 239, stock: 16, sale: 8 },
  { cat: 'monitor', brand: 'BenQ', model: 'MOBIUZ EX2710Q', eur: 329, gbp: 279, stock: 14, sale: null },
  { cat: 'monitor', brand: 'MSI', model: 'Optix MAG274QRF', eur: 369, gbp: 319, stock: 11, sale: null },
  { cat: 'monitor', brand: 'Gigabyte', model: 'M27Q 27" 170Hz', eur: 289, gbp: 249, stock: 17, sale: null },
  { cat: 'monitor', brand: 'Philips', model: '279M1RV 27" 4K', eur: 499, gbp: 429, stock: 9, sale: 12 },

  // Laptops
  { cat: 'laptop', brand: 'ASUS', model: 'ROG Zephyrus G14', eur: 1499, gbp: 1299, stock: 8, sale: null },
  { cat: 'laptop', brand: 'ASUS', model: 'ROG Strix G16', eur: 1799, gbp: 1549, stock: 6, sale: null },
  { cat: 'laptop', brand: 'ASUS', model: 'TUF Gaming A15', eur: 999, gbp: 859, stock: 12, sale: 10 },
  { cat: 'laptop', brand: 'MSI', model: 'Raider GE78 HX', eur: 2499, gbp: 2149, stock: 4, sale: null },
  { cat: 'laptop', brand: 'MSI', model: 'Katana 15 B13V', eur: 1099, gbp: 949, stock: 9, sale: null },
  { cat: 'laptop', brand: 'MSI', model: 'Stealth 16 Studio', eur: 1999, gbp: 1729, stock: 5, sale: null },
  { cat: 'laptop', brand: 'Lenovo', model: 'Legion Pro 7i', eur: 1899, gbp: 1649, stock: 6, sale: 5 },
  { cat: 'laptop', brand: 'Lenovo', model: 'Legion 5 Pro', eur: 1299, gbp: 1119, stock: 10, sale: null },
  { cat: 'laptop', brand: 'Lenovo', model: 'IdeaPad Gaming 3', eur: 799, gbp: 689, stock: 15, sale: null },
  { cat: 'laptop', brand: 'Acer', model: 'Predator Helios 16', eur: 1699, gbp: 1469, stock: 7, sale: null },
  { cat: 'laptop', brand: 'Acer', model: 'Nitro 5 AN515', eur: 899, gbp: 779, stock: 13, sale: 8 },
  { cat: 'laptop', brand: 'HP', model: 'OMEN 16', eur: 1399, gbp: 1209, stock: 8, sale: null },
  { cat: 'laptop', brand: 'HP', model: 'Victus 15', eur: 749, gbp: 649, stock: 16, sale: null },
  { cat: 'laptop', brand: 'Razer', model: 'Blade 15', eur: 2299, gbp: 1989, stock: 4, sale: null },
  { cat: 'laptop', brand: 'Razer', model: 'Blade 14', eur: 1999, gbp: 1729, stock: 5, sale: null },
];

async function main() {
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const cats = await Promise.all(
    categories.map((c) => prisma.category.create({ data: c })),
  );
  const catMap = new Map(cats.map((c) => [c.slug, c.id]));

  await Promise.all(
    products.map((p, i) =>
      prisma.product.create({
        data: {
          slug: `${slug(p.brand, p.model)}-${i}`,
          nameEn: `${p.brand} ${p.model}`,
          nameDe: `${p.brand} ${p.model}`,
          brand: p.brand,
          model: p.model,
          descriptionEn: `High-performance ${p.model} by ${p.brand}. Ideal for gaming and professional use.`,
          descriptionDe: `Hochleistungs-${p.model} von ${p.brand}. Ideal für Gaming und professionellen Einsatz.`,
          priceEur: p.eur,
          priceGbp: p.gbp,
          stock: p.stock,
          images: [`/images/products/placeholder-${p.cat}.svg`],
          specs: { category: p.cat },
          isFeatured: i < 8,
          isOnSale: p.sale !== null,
          salePercent: p.sale,
          categoryId: catMap.get(p.cat)!,
        },
      }),
    ),
  );

  console.log(`✅ Seeded ${products.length} products in ${categories.length} categories`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
