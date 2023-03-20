import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { readFile } from 'fs';
import { join } from 'path';

@Injectable()
export class CoursesService {
	public getCoursesData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(__dirname, '../..', 'data/courses/courses.data.json'),
				'utf8',
				(err, data) => {
					if (err) {
						throw new InternalServerErrorException(`${err}`);
					}

					resolve(JSON.parse(data));
				}
			);
		});
	}
}
