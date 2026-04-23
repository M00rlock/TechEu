import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Module, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
class CategoriesService {
  constructor(private prisma: PrismaService) {}
  findAll() {
    return this.prisma.category.findMany({ include: { _count: { select: { products: true } } } });
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
