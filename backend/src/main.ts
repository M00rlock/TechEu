import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:4200'],
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('E-Commerce API')
      .setDescription('Tech store API for Germany & UK markets')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }

  await app.listen(process.env.PORT || 3001);
  console.log(`🚀 Backend running on http://127.0.0.1:${process.env.PORT || 3001}`);
  if (process.env.NODE_ENV !== 'production') {
    console.log(`📚 Swagger: http://127.0.0.1:${process.env.PORT || 3001}/docs`);
  }
}
bootstrap();
