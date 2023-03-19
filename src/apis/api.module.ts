import { Module } from '@nestjs/common';
import { DashboardController } from './controllers/dashboard.controller';
import { SettingsController } from './controllers/settigns.controller';
import { DashboardService } from './services/dashboard.service';
import { SettingsService } from './services/settings.service';

@Module({
	controllers: [DashboardController, SettingsController],
	providers: [DashboardService, SettingsService]
})
export class ApiModule {}
