import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';
import { readFile } from 'fs/promises';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();

  //const document = SwaggerModule.createDocument(app, config);

  const document = JSON.parse((await readFile(join(process.cwd(), 'swagger.json'))).toString('utf-8'))

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
