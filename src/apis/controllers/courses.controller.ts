import { Controller, Get, Render } from '@nestjs/common';
import { CoursesService } from '../services/courses.service';

@Controller('courses')
export class CoursesController {
	constructor(private coursesService: CoursesService) {}

	@Get('')
	@Render('courses')
	public async index() {
		return {
			data: await this.coursesService.getCoursesData()
		};
	}
}
