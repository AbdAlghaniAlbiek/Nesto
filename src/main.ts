import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { setViewEngine } from './view-engine';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	setViewEngine(app);

	await app.listen(3000);
}
bootstrap();
