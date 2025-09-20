import { appConfig } from '@/config/app.config';
import { appDataSource } from '@/config/database.config';
import { User } from '@/database/entities/user.entity';
import { LoginDto } from '@/dtos/login.dto';
import { RegisterDto } from '@/dtos/register.dto';
import { BadRequestError } from 'routing-controllers';
import { Service } from 'typedi';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

@Service()
export class AuthService {
	private userRepository: Repository<User>;
	constructor() {
		this.userRepository = appDataSource.getRepository(User);
	}

	async createUser(registerDto: RegisterDto) {
		const existingUser = await this.userRepository.findOne({
			where: { email: registerDto.email },
		});

		if (existingUser) {
			throw new BadRequestError('User already exists');
		}

		const user = this.userRepository.create({
			email: registerDto.email,
			firstName: registerDto.firstName,
			lastName: registerDto.lastName,
			password: registerDto.password,
		});
		return await this.userRepository.save(user);
	}

	async login(loginDto: LoginDto) {
		const user = await this.userRepository.findOne({
			where: { email: loginDto.email },
		});

		if (!user) {
			throw new BadRequestError('Invalid email or password');
		}

		const isPasswordValid = await bcrypt.compare(
			loginDto.password,
			user.password
		);

		if (!isPasswordValid) {
			throw new BadRequestError('Invalid email or password');
		}

		return user;
	}

	async currentUser(userId: string) {
		return await this.userRepository.findOne({
			where: { id: userId },
		});
	}

	async generateJwtToken(user: User) {
		return jwt.sign({ id: user.id }, appConfig.JWT_SECRET, {
			expiresIn: '7d',
		});
	}
}
