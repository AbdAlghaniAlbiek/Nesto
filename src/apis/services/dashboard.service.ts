import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { readFile } from 'fs';
import { join } from 'path';

@Injectable()
export class DashboardService {
	public welcomeData() {
		readFile(
			join(__dirname, '../..', 'data/dashboard/welcome.data.json'),
			'utf8',
			(err, data) => {
				if (err) {
					throw new InternalServerErrorException(`${err}`);
				}

				return JSON.parse(data);
			}
		);
	}

	public yearlyTargetsData() {
		readFile(
			join(__dirname, '../..', 'data/dashboard/yearly-targets.data.json'),
			'utf8',
			(err, data) => {
				if (err) {
					throw new InternalServerErrorException(`${err}`);
				}

				return JSON.parse(data);
			}
		);
	}

	public ticketsStatisticsData() {
		readFile(
			join(
				__dirname,
				'../..',
				'data/dashboard/tickets-statistics.data.json'
			),
			'utf8',
			(err, data) => {
				if (err) {
					throw new InternalServerErrorException(`${err}`);
				}

				return JSON.parse(data);
			}
		);
	}

	public latestNewsData() {
		readFile(
			join(__dirname, '../..', 'data/dashboard/latest-news.data.json'),
			'utf8',
			(err, data) => {
				if (err) {
					throw new InternalServerErrorException(`${err}`);
				}

				return JSON.parse(data);
			}
		);
	}

	public latestTasksData() {
		readFile(
			join(__dirname, '../..', 'data/dashboard/latest-tasks.data.json'),
			'utf8',
			(err, data) => {
				if (err) {
					throw new InternalServerErrorException(`${err}`);
				}

				return JSON.parse(data);
			}
		);
	}

	public topSearchItemsData() {
		readFile(
			join(
				__dirname,
				'../..',
				'data/dashboard/top-search-items.data.json'
			),
			'utf8',
			(err, data) => {
				if (err) {
					throw new InternalServerErrorException(`${err}`);
				}

				return JSON.parse(data);
			}
		);
	}

	public latestUploadsData() {
		readFile(
			join(__dirname, '../..', 'data/dashboard/latest-uploads.data.json'),
			'utf8',
			(err, data) => {
				if (err) {
					throw new InternalServerErrorException(`${err}`);
				}

				return JSON.parse(data);
			}
		);
	}

	public lastProjctProgressData() {
		readFile(
			join(
				__dirname,
				'../..',
				'data/dashboard/last-project-progress.data.json'
			),
			'utf8',
			(err, data) => {
				if (err) {
					throw new InternalServerErrorException(`${err}`);
				}

				return JSON.parse(data);
			}
		);
	}

	public remindersData() {
		readFile(
			join(__dirname, '../..', 'data/dashboard/reminders.data.json'),
			'utf8',
			(err, data) => {
				if (err) {
					throw new InternalServerErrorException(`${err}`);
				}

				return JSON.parse(data);
			}
		);
	}

	public lastPostData() {
		readFile(
			join(__dirname, '../..', 'data/dashboard/last-post.data.json'),
			'utf8',
			(err, data) => {
				if (err) {
					throw new InternalServerErrorException(`${err}`);
				}

				return JSON.parse(data);
			}
		);
	}

	public socialMediaStatsData() {
		readFile(
			join(
				__dirname,
				'../..',
				'data/dashboard/social-media-stats.data.json'
			),
			'utf8',
			(err, data) => {
				if (err) {
					throw new InternalServerErrorException(`${err}`);
				}

				return JSON.parse(data);
			}
		);
	}

	public projectsData() {
		readFile(
			join(__dirname, '../..', 'data/dashboard/projects.data.json'),
			'utf8',
			(err, data) => {
				if (err) {
					throw new InternalServerErrorException(`${err}`);
				}

				return JSON.parse(data);
			}
		);
	}
}
