import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { readFile } from 'fs';
import { join } from 'path';

@Injectable()
export class SettingsService {
	public siteControlData() {
		readFile(
			join(__dirname, '../..', 'data/settings/site-control.data.json'),
			'utf8',
			(err, data) => {
				if (err) throw new InternalServerErrorException(`${err}`);

				return data;
			}
		);
	}

	public generalInfoData() {
		readFile(
			join(__dirname, '../..', 'data/settings/general-info.data.json'),
			'utf8',
			(err, data) => {
				if (err) throw new InternalServerErrorException(`${err}`);

				return data;
			}
		);
	}

	public securityInfoData() {
		readFile(
			join(__dirname, '../..', 'data/settings/security-info.data.json'),
			'utf8',
			(err, data) => {
				if (err) throw new InternalServerErrorException(`${err}`);

				return data;
			}
		);
	}

	public socialInfoData() {
		readFile(
			join(__dirname, '../..', 'data/settings/social-info.data.json'),
			'utf8',
			(err, data) => {
				if (err) throw new InternalServerErrorException(`${err}`);

				return data;
			}
		);
	}

	public widgetsControlData() {
		readFile(
			join(__dirname, '../..', 'data/settings/security-info.data.json'),
			'utf8',
			(err, data) => {
				if (err) throw new InternalServerErrorException(`${err}`);

				return data;
			}
		);
	}

	public backupManagerData() {
		readFile(
			join(__dirname, '../..', 'data/settings/backup-manager.data.json'),
			'utf8',
			(err, data) => {
				if (err) throw new InternalServerErrorException(`${err}`);

				return data;
			}
		);
	}
}
