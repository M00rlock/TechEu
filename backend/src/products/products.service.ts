import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsQueryDto } from './products.dto';
import { Prisma } from '@prisma/client';
import { fallbackProducts } from '../catalog-fallback';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  private fallbackFindAll(query: ProductsQueryDto) {
    const { category, brand, minPrice, maxPrice, featured, onSale, search, page = 1, limit = 20 } = query;
    const normalizedSearch = search?.trim().toLowerCase();

    let items = fallbackProducts.filter((product) => {
      if (category && product.category.slug !== category) return false;
      if (brand && product.brand.toLowerCase() !== brand.toLowerCase()) return false;
      if (minPrice !== undefined && Number(product.priceEur) < minPrice) return false;
      if (maxPrice !== undefined && Number(product.priceEur) > maxPrice) return false;
      if (featured !== undefined && product.isFeatured !== featured) return false;
      if (onSale !== undefined && product.isOnSale !== onSale) return false;
      if (normalizedSearch) {
        const haystack = [product.nameEn, product.nameDe, product.brand, product.model].join(' ').toLowerCase();
        if (!haystack.includes(normalizedSearch)) return false;
      }
      return true;
    });

    items = [...items].sort((a, b) => b.id - a.id);

    const total = items.length;
    const safePage = Math.max(1, Number(page) || 1);
    const safeLimit = Math.max(1, Number(limit) || 20);
    const start = (safePage - 1) * safeLimit;

    return {
      items: items.slice(start, start + safeLimit),
      total,
      page: safePage,
      limit: safeLimit,
      pages: Math.ceil(total / safeLimit),
      source: 'fallback',
    };
  }

  async findAll(query: ProductsQueryDto) {
    const { category, brand, minPrice, maxPrice, featured, onSale, search, page = 1, limit = 20 } = query;
    const skip = (page - 1) * limit;

    const where: Prisma.ProductWhereInput = {
      ...(category && { category: { slug: category } }),
      ...(brand && { brand: { equals: brand, mode: 'insensitive' } }),
      ...(minPrice !== undefined && { priceEur: { gte: minPrice } }),
      ...(maxPrice !== undefined && { priceEur: { lte: maxPrice } }),
      ...(featured !== undefined && { isFeatured: featured }),
      ...(onSale !== undefined && { isOnSale: onSale }),
      ...(search && {
        OR: [
          { nameEn: { contains: search, mode: 'insensitive' } },
          { nameDe: { contains: search, mode: 'insensitive' } },
          { brand: { contains: search, mode: 'insensitive' } },
          { model: { contains: search, mode: 'insensitive' } },
        ],
      }),
    };

    try {
      const [items, total] = await Promise.all([
        this.prisma.product.findMany({ where, skip, take: limit, include: { category: true }, orderBy: { createdAt: 'desc' } }),
        this.prisma.product.count({ where }),
      ]);

      if (total === 0) return this.fallbackFindAll(query);
      return { items, total, page, limit, pages: Math.ceil(total / limit), source: 'database' };
    } catch (error) {
      console.warn('Products database query failed. Serving fallback catalog.', error);
      return this.fallbackFindAll(query);
    }
  }

  async findOne(slug: string) {
    try {
      const product = await this.prisma.product.findUnique({ where: { slug }, include: { category: true } });
      if (product) return product;
    } catch (error) {
      console.warn('Product database query failed. Serving fallback product.', error);
    }

    const fallbackProduct = fallbackProducts.find((product) => product.slug === slug);
    if (!fallbackProduct) throw new NotFoundException('Product not found');
    return fallbackProduct;
  }

  async getBrands() {
    try {
      const products = await this.prisma.product.findMany({ select: { brand: true }, distinct: ['brand'] });
      const brands = products.map((p) => p.brand).sort();
      if (brands.length) return brands;
    } catch (error) {
      console.warn('Brands database query failed. Serving fallback brands.', error);
    }

    return [...new Set(fallbackProducts.map((p) => p.brand))].sort();
  }
}
