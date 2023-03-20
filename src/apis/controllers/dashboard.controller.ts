import { Controller, Get, Render } from '@nestjs/common';
import { DashboardService } from '../services/dashboard.service';

@Controller('')
export class DashboardController {
	constructor(private dashboardService: DashboardService) {}

	@Get('')
	@Render('dashboard')
	public async index() {
		return {
			welcome: await this.dashboardService.welcomeData(),
			yearlyTargets: await this.dashboardService.yearlyTargetsData(),
			ticketsStatistics:
				await this.dashboardService.ticketsStatisticsData(),
			latestNews: await this.dashboardService.latestNewsData(),
			latestTasks: await this.dashboardService.latestTasksData(),
			topSearchItems: await this.dashboardService.topSearchItemsData(),
			latestUploads: await this.dashboardService.latestUploadsData(),
			lastProjctProgress:
				await this.dashboardService.lastProjctProgressData(),
			reminders: await this.dashboardService.remindersData(),
			lastPost: await this.dashboardService.lastPostData(),
			socialMediaStats:
				await this.dashboardService.socialMediaStatsData(),
			projects: await this.dashboardService.projectsData()
		};
	}
}
