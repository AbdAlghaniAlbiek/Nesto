import { Module } from '@nestjs/common';
import { DashboardController } from './controllers/dashboard.controller';
import { SettingsController } from './controllers/settigns.controller';
import { DashboardService } from './services/dashboard.service';
import { SettingsService } from './services/settings.service';
import { ProfileController } from './controllers/profile.controller';
import { ProfileService } from './services/profile.service';
import { ProjectsController } from './controllers/projects.controller';
import { ProjectsService } from './services/projects.service';
import { CoursesController } from './controllers/courses.controller';
import { CoursesService } from './services/courses.service';
import { FriendsController } from './controllers/friends.controller';
import { FriendsService } from './services/friends.service';
import { FilesController } from './controllers/files.controller';
import { FilesService } from './services/files.service';
import { PlansController } from './controllers/plans.controller';
import { PlansService } from './services/plans.service';

@Module({
	controllers: [
		DashboardController,
		SettingsController,
		ProfileController,
		ProjectsController,
		CoursesController,
		FriendsController,
		FilesController,
		PlansController
	],
	providers: [
		DashboardService,
		SettingsService,
		ProfileService,
		ProjectsService,
		CoursesService,
		FriendsService,
		FilesService,
		PlansService
	]
})
export class ApiModule {}
