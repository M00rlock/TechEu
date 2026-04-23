import { IsEmail, IsString, IsArray, IsNumber, IsOptional, ValidateNested, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class OrderItemDto {
  @ApiProperty() @IsNumber() productId: number;
  @ApiProperty() @IsNumber() @Min(1) quantity: number;
}

export class CreateOrderDto {
  @ApiProperty() @IsEmail() email: string;
  @ApiProperty() @IsString() firstName: string;
  @ApiProperty() @IsString() lastName: string;
  @ApiPropertyOptional() @IsOptional() @IsString() phone?: string;
  @ApiProperty() @IsString() address: string;
  @ApiProperty() @IsString() city: string;
  @ApiProperty() @IsString() country: string;
  @ApiProperty() @IsString() postalCode: string;
  @ApiProperty({ enum: ['EUR', 'GBP'] }) @IsString() currency: string;
  @ApiProperty({ type: [OrderItemDto] }) @IsArray() @ValidateNested({ each: true }) @Type(() => OrderItemDto) items: OrderItemDto[];
}
