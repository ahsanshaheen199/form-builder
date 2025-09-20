import { User } from '@/database/entities/user.entity';
import { Service } from 'typedi';

@Service()
export class UserResource {
	toObject(user: User) {
		return {
			id: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
		};
	}
}
