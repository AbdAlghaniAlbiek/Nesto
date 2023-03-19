import { NestExpressApplication } from '@nestjs/platform-express';
import * as exphbs from 'express-handlebars';
import { join } from 'path';
import { ProjectStatus } from './helpers/constants/dasboard.constant';

export function setViewEngine(app: NestExpressApplication) {
	app.useStaticAssets(join(__dirname, 'public'));
	app.setBaseViewsDir(join(__dirname, 'public/views'));

	const hbs = exphbs.create({
		defaultLayout: 'main',
		layoutsDir: join(__dirname, 'public/views', 'layouts'),
		helpers
	});

	app.engine('handlebars', hbs.engine);
	app.setViewEngine('handlebars');
}

const helpers = {
	fullname: (firstname: string, lastname: string) =>
		`${firstname} ${lastname}`,
	projectStatus: (status: string) => {
		if (status === ProjectStatus.Completed) return 'bg-orange';
		else if (status === ProjectStatus.InProgress) return 'bg-green';
		else return 'bg-red';
	}
};
