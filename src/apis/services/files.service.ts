import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { readFile } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {
	public getFilesData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(__dirname, '../..', 'data/files/files.data.json'),
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

	public getFilesStatisticsData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(
					__dirname,
					'../..',
					'data/files/files-statistics.data.json'
				),
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
