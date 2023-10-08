import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ApiResponseInterceptor } from './app/ApiResponseInterceptor';

const config = new DocumentBuilder()
  .setVersion('1.0')
  .setTitle('Github rest API')
  .setDescription('Github rest API')
  .build();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/', app, document);
  app.useGlobalInterceptors(new ApiResponseInterceptor());

  await app.listen(3000);
}
bootstrap();
