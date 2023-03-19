import { Controller, Get, Render } from '@nestjs/common';
import { SettingsService } from '../services/settings.service';

@Controller('settings')
export class SettingsController {
	constructor(private settingService: SettingsService) {}

	@Get('')
	@Render('settings')
	public async getSettingsData() {
		return {
			siteControl: await this.settingService.siteControlData(),
			generalInfo: await this.settingService.generalInfoData(),
			securityInfo: await this.settingService.securityInfoData(),
			socialInfo: await this.settingService.socialInfoData(),
			widgetsControl: await this.settingService.widgetsControlData(),
			backupManager: await this.settingService.backupManagerData()
		};
	}
}
