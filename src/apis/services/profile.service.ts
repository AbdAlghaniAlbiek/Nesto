import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { readFile } from 'fs';
import { join } from 'path';

@Injectable()
export class ProfileService {
	public getGeneralData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(__dirname, '../..', 'data/profile/general.data.json'),
				'utf8',
				(err, data) => {
					if (err) throw new InternalServerErrorException(`${err}`);

					resolve(JSON.parse(data));
				}
			);
		});
	}

	public getMySkillsData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(__dirname, '../..', 'data/profile/my-skills.data.json'),
				'utf8',
				(err, data) => {
					if (err) throw new InternalServerErrorException(`${err}`);

					resolve(JSON.parse(data));
				}
			);
		});
	}

	public getLatestActivitiesData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(
					__dirname,
					'../..',
					'data/profile/latest-activities.data.json'
				),
				'utf8',
				(err, data) => {
					if (err) throw new InternalServerErrorException(`${err}`);

					resolve(JSON.parse(data));
				}
			);
		});
	}
}
