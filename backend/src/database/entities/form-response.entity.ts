import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Form } from './form.entity';

@Entity({ name: 'form_responses' })
export class FormResponse {
	@PrimaryColumn({ type: 'character', length: 26 })
	id: string;

	@JoinColumn({ name: 'form_id' })
	@ManyToOne(() => Form, (form) => form.id, {
		onDelete: 'CASCADE',
	})
	form: Form;

	@Column({
		name: 'response',
		type: 'jsonb',
		nullable: false,
		default: () => "'{}'",
	})
	response?: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;
}
