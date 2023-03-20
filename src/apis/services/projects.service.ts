import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { readFile } from 'fs';
import { join } from 'path';

@Injectable()
export class ProjectsService {
	public getProjectsData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(__dirname, '../..', 'data/projects/projects.data.json'),
				'utf8',
				(err, data) => {
					if (err) throw new InternalServerErrorException(`${err}`);

					resolve(JSON.parse(data));
				}
			);
		});
	}
}
