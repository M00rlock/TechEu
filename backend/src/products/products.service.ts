import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsQueryDto } from './products.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

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

    const [items, total] = await Promise.all([
      this.prisma.product.findMany({ where, skip, take: limit, include: { category: true }, orderBy: { createdAt: 'desc' } }),
      this.prisma.product.count({ where }),
    ]);

    return { items, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async findOne(slug: string) {
    const product = await this.prisma.product.findUnique({ where: { slug }, include: { category: true } });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async getBrands() {
    const products = await this.prisma.product.findMany({ select: { brand: true }, distinct: ['brand'] });
    return products.map((p) => p.brand).sort();
  }
}
