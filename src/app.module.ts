import { Module } from '@nestjs/common';
import { ApiModule } from './apis/api.module';

@Module({
	imports: [ApiModule]
})
export class AppModule {}
