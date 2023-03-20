import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { readFile } from 'fs';
import { join } from 'path';

@Injectable()
export class DashboardService {
	public welcomeData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(__dirname, '../..', 'data/dashboard/welcome.data.json'),
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

	public yearlyTargetsData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(
					__dirname,
					'../..',
					'data/dashboard/yearly-targets.data.json'
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

	public ticketsStatisticsData() {
		return new Promise((resolve, reject) => {
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

					resolve(JSON.parse(data));
				}
			);
		});
	}

	public latestNewsData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(
					__dirname,
					'../..',
					'data/dashboard/latest-news.data.json'
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

	public latestTasksData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(
					__dirname,
					'../..',
					'data/dashboard/latest-tasks.data.json'
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

	public topSearchItemsData() {
		return new Promise((resolve, reject) => {
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

					resolve(JSON.parse(data));
				}
			);
		});
	}

	public latestUploadsData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(
					__dirname,
					'../..',
					'data/dashboard/latest-uploads.data.json'
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

	public lastProjctProgressData() {
		return new Promise((resolve, reject) => {
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

					resolve(JSON.parse(data));
				}
			);
		});
	}

	public remindersData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(__dirname, '../..', 'data/dashboard/reminders.data.json'),
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

	public lastPostData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(
					__dirname,
					'../..',
					'data/dashboard/latest-post.data.json'
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

	public socialMediaStatsData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(
					__dirname,
					'../..',
					'data/dashboard/social-media-stats.data.json'
				),
				'utf8',
				(err, data) => {
					if (err) {
						new InternalServerErrorException(`${err}`);
					}

					resolve(JSON.parse(data));
				}
			);
		});
	}

	public projectsData() {
		return new Promise((resolve, reject) => {
			readFile(
				join(__dirname, '../..', 'data/dashboard/projects.data.json'),
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
