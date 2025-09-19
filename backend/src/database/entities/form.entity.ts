import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryColumn,
} from 'typeorm';
import { User } from './user.entity';
import { FormResponse } from './form-response.entity';

@Entity({ name: 'forms' })
export class Form {
	@PrimaryColumn({ type: 'character', length: 26 })
	id: string;

	@Column({ name: 'name' })
	name: string;

	@Column({ name: 'description', nullable: true })
	description?: string;

	@Column({ name: 'is_published', default: false })
	isPublished: boolean;

	@JoinColumn({ name: 'user_id' })
	@ManyToOne(() => User, (user) => user.id, {
		onDelete: 'CASCADE',
	})
	user: User;

	@Column({
		name: 'blocks',
		type: 'jsonb',
		nullable: true,
		default: () => "'[]'",
	})
	blocks?: { id: string }[];

	@OneToMany(() => FormResponse, (formResponse) => formResponse.form)
	formResponses: FormResponse[];

	@Column({ name: 'created_at' })
	createdAt: Date;

	@Column({ name: 'updated_at' })
	updatedAt: Date;
}
