export type Currency = 'EUR' | 'GBP';

export interface Category {
  id: number;
  slug: string;
  nameEn: string;
  nameDe: string;
  _count: { products: number };
}

export interface Product {
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
  category: { slug: string; nameEn: string; nameDe: string };
}

export interface ProductsResponse {
  items: Product[];
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderPayload {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  currency: Currency;
  items: { productId: number; quantity: number }[];
}
