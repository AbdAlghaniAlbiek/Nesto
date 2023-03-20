import { Controller, Get, Render } from '@nestjs/common';
import { ProjectsService } from '../services/projects.service';

@Controller('projects')
export class ProjectsController {
	constructor(private projectsService: ProjectsService) {}

	@Get('')
	@Render('projects')
	public async index() {
		return {
			data: await this.projectsService.getProjectsData()
		};
	}
}
