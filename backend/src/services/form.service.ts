import { appDataSource } from '@/config/database.config';
import { Form } from '@/database/entities/form.entity';
import { User } from '@/database/entities/user.entity';
import { CreateFormDto } from '@/dtos/create-form.dto';
import { BadRequestError } from 'routing-controllers';
import { Repository } from 'typeorm';
import { Service } from 'typedi';

@Service()
export class FormService {
	private formRepository: Repository<Form>;
	private userRepository: Repository<User>;
	constructor() {
		this.formRepository = appDataSource.getRepository(Form);
		this.userRepository = appDataSource.getRepository(User);
	}

	async createForm(createFormDto: CreateFormDto, userId: string) {
		const user = await this.userRepository.findOne({
			where: { id: userId },
		});

		if (!user) {
			throw new BadRequestError('User not found');
		}
		const form = this.formRepository.create({
			...createFormDto,
			user,
		});
		const savedForm = await this.formRepository.save(form);
		return {
			id: savedForm.id,
			name: savedForm.name,
			description: savedForm.description,
			isPublished: savedForm.isPublished,
			blocks: savedForm.blocks,
		};
	}

	async getFormById(userId: string, id: string) {
		const form = await this.formRepository.findOne({
			where: { id, user: { id: userId } },
			relations: { user: true },
			select: {
				id: true,
				name: true,
				description: true,
				isPublished: true,
				blocks: true,
			},
		});
		if (!form) {
			throw new BadRequestError('Form not found');
		}

		if (form.user.id !== userId) {
			throw new BadRequestError('Form not found');
		}

		return {
			id: form.id,
			name: form.name,
			description: form.description,
			isPublished: form.isPublished,
			blocks: form.blocks,
		};
	}
}
