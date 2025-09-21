import { authCheckMiddleware } from '@/middlewares/auth-check.middleware';
import {
	Body,
	Controller,
	Get,
	Post,
	Req,
	Param,
	UseBefore,
} from 'routing-controllers';
import { Service } from 'typedi';
import { CreateFormDto } from '@/dtos/create-form.dto';
import { FormService } from '@/services/form.service';
import { User } from '@/database/entities/user.entity';

@Service()
@UseBefore(authCheckMiddleware)
@Controller('/forms')
export class FormController {
	constructor(private readonly formService: FormService) {}

	@Post('/')
	async createForm(
		@Body() body: CreateFormDto,
		@Req() req: Request & { user: User }
	) {
		const form = await this.formService.createForm(body, req.user.id);
		return {
			message: 'Form created successfully',
			data: {
				form: form,
			},
		};
	}

	@Get('/:id')
	async getForm(
		@Req() req: Request & { user: User },
		@Param('id') id: string
	) {
		return {
			message: 'Forms fetched successfully',
			data: {
				forms: await this.formService.getFormById(req.user.id, id),
			},
		};
	}
}
