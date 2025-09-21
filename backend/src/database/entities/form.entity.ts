import {
	BeforeInsert,
	CreateDateColumn,
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryColumn,
	UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { FormResponse } from './form-response.entity';
import { ulid } from 'ulid';

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

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;

	@BeforeInsert()
	async beforeInsert() {
		this.id = ulid();
	}
}
