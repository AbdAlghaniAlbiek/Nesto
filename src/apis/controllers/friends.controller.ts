import { Controller, Get, Render } from '@nestjs/common';
import { FriendsService } from '../services/friends.service';

@Controller('friends')
export class FriendsController {
	constructor(private friendsService: FriendsService) {}

	@Get('')
	@Render('friends')
	public async index() {
		return {
			data: await this.friendsService.getFriendsData()
		};
	}
}
