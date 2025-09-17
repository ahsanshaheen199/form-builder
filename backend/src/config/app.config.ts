import { getEnv } from '../utlis/get-env';

export const appConfig = {
	PORT: getEnv('PORT', '8000'),
	NODE_ENV: getEnv('NODE_ENV', 'development'),
	JWT_SECRET: getEnv('JWT_SECRET'),
	DB_HOST: getEnv('DB_HOST', 'localhost'),
	DB_USERNAME: getEnv('DB_USERNAME'),
	DB_PASSWORD: getEnv('DB_PASSWORD'),
	DB_NAME: getEnv('DB_NAME'),
	DB_PORT: getEnv('DB_PORT'),
	GOOGLE_CLIENT_ID: getEnv('GOOGLE_CLIENT_ID'),
	GOOGLE_CLIENT_SECRET: getEnv('GOOGLE_CLIENT_SECRET'),
	GOOGLE_CALLBACK_URL: getEnv('GOOGLE_CALLBACK_URL'),
	FRONTEND_URL: getEnv('FRONTEND_URL'),
	FRONTEND_GOOGLE_CALLBACK_URL: getEnv('FRONTEND_GOOGLE_CALLBACK_URL'),
};
