import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './orders.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateOrderDto) {
    const productIds = dto.items.map((i) => i.productId);
    const products = await this.prisma.product.findMany({ where: { id: { in: productIds } } });

    if (products.length !== productIds.length) throw new BadRequestException('Some products not found');

    const productMap = new Map(products.map((p) => [p.id, p]));
    let totalEur = 0;
    let totalGbp = 0;

    const orderItems = dto.items.map((item) => {
      const product = productMap.get(item.productId)!;
      const priceEur = Number(product.priceEur);
      const priceGbp = Number(product.priceGbp);
      totalEur += priceEur * item.quantity;
      totalGbp += priceGbp * item.quantity;
      return { productId: item.productId, quantity: item.quantity, priceEur, priceGbp };
    });

    return this.prisma.order.create({
      data: {
        email: dto.email,
        firstName: dto.firstName,
        lastName: dto.lastName,
        phone: dto.phone,
        address: dto.address,
        city: dto.city,
        country: dto.country,
        postalCode: dto.postalCode,
        currency: dto.currency,
        totalEur,
        totalGbp,
        items: { create: orderItems },
      },
      include: { items: { include: { product: true } } },
    });
  }

  async findOne(id: number) {
    const order = await this.prisma.order.findUnique({ where: { id }, include: { items: { include: { product: true } } } });
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }
}
