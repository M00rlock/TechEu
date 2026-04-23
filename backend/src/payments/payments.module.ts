import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { Module, Injectable } from '@nestjs/common';
import { IsNumber, IsString } from 'class-validator';

class CreatePaymentIntentDto {
  @ApiProperty() @IsNumber() orderId: number;
  @ApiProperty({ enum: ['EUR', 'GBP'] }) @IsString() currency: string;
}

@Injectable()
class PaymentsService {
  async createPaymentIntent(orderId: number, currency: string) {
    // Stripe stub — replace with real Stripe integration
    return {
      clientSecret: `pi_stub_${orderId}_${currency}_secret_placeholder`,
      paymentIntentId: `pi_stub_${orderId}_${currency}`,
      amount: 0,
      currency,
      status: 'stub',
    };
  }
}

@ApiTags('Payments')
@Controller('payments')
class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-intent')
  @ApiOperation({ summary: 'Create Stripe payment intent (stub)' })
  createIntent(@Body() dto: CreatePaymentIntentDto) {
    return this.paymentsService.createPaymentIntent(dto.orderId, dto.currency);
  }
}

@Module({ controllers: [PaymentsController], providers: [PaymentsService] })
export class PaymentsModule {}
