import { Controller, Get, Render } from '@nestjs/common';
import { ProfileService } from '../services/profile.service';

@Controller('profile')
export class ProfileController {
	constructor(private profileService: ProfileService) {}

	@Get('')
	@Render('profile')
	public async index() {
		return {
			account: await this.profileService.getGeneralData(),
			mySkills: await this.profileService.getMySkillsData(),
			latestActivities:
				await this.profileService.getLatestActivitiesData()
		};
	}
}
