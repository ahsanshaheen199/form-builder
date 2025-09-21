import { IsString, IsNotEmpty, IsOptional, IsArray } from 'class-validator';

export class CreateFormDto {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsString()
	@IsOptional()
	description?: string;

	@IsArray()
	@IsOptional()
	blocks?: { id: string }[];
}
