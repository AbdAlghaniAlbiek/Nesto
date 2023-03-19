import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { readFile } from 'fs';
import { join } from 'path';

@Injectable()
export class SettingsService {
	public siteControlData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(
					__dirname,
					'../..',
					'data/settings/site-control.data.json'
				),
				'utf8',
				(err, data) => {
					if (err) throw new InternalServerErrorException(`${err}`);

					resolve(JSON.parse(data));
				}
			);
		});
	}

	public generalInfoData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(
					__dirname,
					'../..',
					'data/settings/general-info.data.json'
				),
				'utf8',
				(err, data) => {
					if (err) throw new InternalServerErrorException(`${err}`);

					resolve(JSON.parse(data));
				}
			);
		});
	}

	public securityInfoData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(
					__dirname,
					'../..',
					'data/settings/security-info.data.json'
				),
				'utf8',
				(err, data) => {
					if (err) throw new InternalServerErrorException(`${err}`);

					resolve(JSON.parse(data));
				}
			);
		});
	}

	public socialInfoData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(__dirname, '../..', 'data/settings/social-info.data.json'),
				'utf8',
				(err, data) => {
					if (err) throw new InternalServerErrorException(`${err}`);

					resolve(JSON.parse(data));
				}
			);
		});
	}

	public widgetsControlData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(
					__dirname,
					'../..',
					'data/settings/security-info.data.json'
				),
				'utf8',
				(err, data) => {
					if (err) throw new InternalServerErrorException(`${err}`);

					resolve(JSON.parse(data));
				}
			);
		});
	}

	public backupManagerData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(
					__dirname,
					'../..',
					'data/settings/backup-manager.data.json'
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
