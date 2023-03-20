import { Controller, Get, Render } from '@nestjs/common';
import { PlansService } from '../services/plans.service';

@Controller('plans')
export class PlansController {
	constructor(private plansService: PlansService) {}

	@Get('')
	@Render('plans')
	public async index() {
		return {
			data: await this.plansService.getPlansData()
		};
	}
}
