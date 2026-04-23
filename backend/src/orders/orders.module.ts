import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './orders.dto';

@ApiTags('Orders')
@Controller('orders')
class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new order' })
  create(@Body() dto: CreateOrderDto) {
    return this.ordersService.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get order by ID' })
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }
}

@Module({ controllers: [OrdersController], providers: [OrdersService] })
export class OrdersModule {}
