import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { ProductsQueryDto } from './products.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all products with filters and pagination' })
  findAll(@Query() query: ProductsQueryDto) {
    return this.productsService.findAll(query);
  }

  @Get('brands')
  @ApiOperation({ summary: 'Get all available brands' })
  getBrands() {
    return this.productsService.getBrands();
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get product by slug' })
  findOne(@Param('slug') slug: string) {
    return this.productsService.findOne(slug);
  }
}
