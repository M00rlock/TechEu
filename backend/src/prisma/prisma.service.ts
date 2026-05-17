import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

function createPrismaOptions(): any {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    console.warn('DATABASE_URL is not configured. API catalog will use fallback data.');
    return {};
  }

  const adapter = new PrismaPg({ connectionString });
  return { adapter };
}

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super(createPrismaOptions());
  }

  async onModuleInit() {
    if (!process.env.DATABASE_URL) return;

    try {
      await this.$connect();
    } catch (error) {
      console.warn('Prisma connection failed. API catalog will use fallback data.', error);
    }
  }

  async onModuleDestroy() {
    if (!process.env.DATABASE_URL) return;
    await this.$disconnect();
  }
}
