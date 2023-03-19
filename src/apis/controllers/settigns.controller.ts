import { Controller, Get, Render } from '@nestjs/common';
import { SettingsService } from '../services/settings.service';

@Controller('settings')
export class SettingsController {
	constructor(private settingService: SettingsService) {}

	@Get('')
	@Render('settings')
	public getSettingsData() {
		return {
			siteControl: this.settingService.siteControlData(),
			generalInfo: this.settingService.generalInfoData(),
			securityInfo: this.settingService.securityInfoData(),
			socialInfo: this.settingService.socialInfoData(),
			widgetsControl: this.settingService.widgetsControlData(),
			backupManager: this.settingService.backupManagerData()
		};
	}
}
