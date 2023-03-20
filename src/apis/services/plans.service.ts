import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { readFile } from 'fs';
import { join } from 'path';

@Injectable()
export class PlansService {
	public getPlansData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(__dirname, '../..', 'data/plans/plans.data.json'),
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
