import { Controller, Get, Render } from '@nestjs/common';
import { FilesService } from '../services/files.service';

@Controller('files')
export class FilesController {
	constructor(private filesService: FilesService) {}

	@Get('')
	@Render('files')
	public async index() {
		return {
			files: await this.filesService.getFilesData(),
			filesStatistics: await this.filesService.getFilesStatisticsData()
		};
	}
}
