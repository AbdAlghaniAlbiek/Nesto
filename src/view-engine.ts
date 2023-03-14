import { NestExpressApplication } from '@nestjs/platform-express';
import * as exphbs from 'express-handlebars';
import { join } from 'path';

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
	allCapitals: (val: string) => val.toUpperCase()
};
