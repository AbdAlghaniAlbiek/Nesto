import { Controller, Get, Render } from '@nestjs/common';
import { DashboardService } from '../services/dashboard.service';

@Controller('')
export class DashboardController {
	constructor(private dashboardService: DashboardService) {}

	@Get('')
	@Render('dashboard')
	public index() {
		return {
			welcome: this.dashboardService.welcomeData(),
			yearlyTargets: this.dashboardService.yearlyTargetsData(),
			ticketsStatistics: this.dashboardService.ticketsStatisticsData(),
			latestNews: this.dashboardService.latestNewsData(),
			latestTasks: this.dashboardService.latestTasksData(),
			topSearchItems: this.dashboardService.topSearchItemsData(),
			latestUploads: this.dashboardService.latestUploadsData(),
			lastProjctProgress: this.dashboardService.lastProjctProgressData(),
			reminders: this.dashboardService.remindersData(),
			lastPost: this.dashboardService.lastPostData(),
			socialMediaStats: this.dashboardService.socialMediaStatsData(),
			projects: this.dashboardService.projectsData()
		};
	}
}
