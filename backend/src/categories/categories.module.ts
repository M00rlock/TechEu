import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Module, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { fallbackCategories } from '../catalog-fallback';

@Injectable()
class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    try {
      const categories = await this.prisma.category.findMany({ include: { _count: { select: { products: true } } } });
      if (categories.length) return categories;
    } catch (error) {
      console.warn('Categories database query failed. Serving fallback categories.', error);
    }

    return fallbackCategories;
  }
}

@ApiTags('Categories')
@Controller('categories')
class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}
  @Get() findAll() { return this.categoriesService.findAll(); }
}

@Module({ controllers: [CategoriesController], providers: [CategoriesService] })
export class CategoriesModule {}
