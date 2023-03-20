import { NestExpressApplication } from '@nestjs/platform-express';
import * as exphbs from 'express-handlebars';
import { join } from 'path';
import { ProjectStatus } from './helpers/constants/dasboard.constant';
import { Plans } from './helpers/constants/plans.contant';

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
		if (status === ProjectStatus.Completed) return 'bg-green';
		else if (status === ProjectStatus.InProgress) return 'bg-blue';
		else if (status === ProjectStatus.Rejected) return 'bg-red';
		else return 'bg-orange';
	},
	borderColor: (planType: string) => {
		if (planType.toLocaleLowerCase() === Plans.Free.toLowerCase())
			return 'green';
		else if (planType.toLocaleLowerCase() === Plans.Basic.toLowerCase())
			return 'blue';
		else return 'orange';
	}
};
