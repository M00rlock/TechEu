import { IsOptional, IsString, IsNumber, IsBoolean, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class ProductsQueryDto {
  @ApiPropertyOptional() @IsOptional() @IsString() category?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() brand?: string;
  @ApiPropertyOptional() @IsOptional() @Type(() => Number) @IsNumber() minPrice?: number;
  @ApiPropertyOptional() @IsOptional() @Type(() => Number) @IsNumber() maxPrice?: number;
  @ApiPropertyOptional() @IsOptional() @IsBoolean() @Type(() => Boolean) featured?: boolean;
  @ApiPropertyOptional() @IsOptional() @IsBoolean() @Type(() => Boolean) onSale?: boolean;
  @ApiPropertyOptional() @IsOptional() @IsString() search?: string;
  @ApiPropertyOptional({ default: 1 }) @IsOptional() @Type(() => Number) @IsNumber() @Min(1) page?: number = 1;
  @ApiPropertyOptional({ default: 20 }) @IsOptional() @Type(() => Number) @IsNumber() @Min(1) limit?: number = 20;
}
