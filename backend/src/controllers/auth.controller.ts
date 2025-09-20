import { RegisterDto } from '@/dtos/register.dto';
import { AuthService } from '@/services/auth.service';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { Controller, Get, Post, Req, UseBefore } from 'routing-controllers';
import { Response } from 'express';
import { Body, Res } from 'routing-controllers';
import { Service } from 'typedi';
import { LoginDto } from '@/dtos/login.dto';
import { UserResource } from '@/resources/user.resource';
import { authCheckMiddleware } from '@/middlewares/auth-check.middleware';
import { User } from '@/database/entities/user.entity';

@Service()
@Controller('/auth')
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private readonly userResource: UserResource
	) {}

	@Post('/register')
	@UseBefore(validationMiddleware(RegisterDto))
	async register(@Body() body: RegisterDto, @Res() res: Response) {
		const user = await this.authService.createUser(body);
		const token = await this.authService.generateJwtToken(user);
		res.cookie('token', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
		});
		return res.status(200).json({
			message: 'User created successfully',
			data: { user: this.userResource.toObject(user) },
		});
	}

	@Post('/login')
	@UseBefore(validationMiddleware(LoginDto))
	async login(@Body() body: LoginDto, @Res() res: Response) {
		const user = await this.authService.login(body);
		const token = await this.authService.generateJwtToken(user);
		res.cookie('token', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
		});
		return res.status(200).json({
			message: 'User logged in successfully',
			data: {
				user: this.userResource.toObject(user),
			},
		});
	}

	@Get('/me')
	@UseBefore(authCheckMiddleware)
	async forgotPassword(
		@Res() res: Response,
		@Req() req: Request & { user: User }
	) {
		const userId = req.user.id;
		const user = await this.authService.currentUser(userId);
		return res.status(200).json({
			message: 'User fetched successfully',
			data: { user: this.userResource.toObject(user) },
		});
	}

	@Post('/logout')
	@UseBefore(authCheckMiddleware)
	async logout(@Res() res: Response) {
		res.clearCookie('token');
		return res.status(200).json({
			message: 'User logged out successfully',
		});
	}
}
