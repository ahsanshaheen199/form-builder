import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateCreateAndUpdateColumn1758783038105
	implements MigrationInterface
{
	name = 'UpdateCreateAndUpdateColumn1758783038105';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "form_responses" ALTER COLUMN "created_at" SET DEFAULT now()`
		);
		await queryRunner.query(
			`ALTER TABLE "form_responses" ALTER COLUMN "updated_at" SET DEFAULT now()`
		);
		await queryRunner.query(
			`ALTER TABLE "forms" ALTER COLUMN "created_at" SET DEFAULT now()`
		);
		await queryRunner.query(
			`ALTER TABLE "forms" ALTER COLUMN "updated_at" SET DEFAULT now()`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "forms" ALTER COLUMN "updated_at" DROP DEFAULT`
		);
		await queryRunner.query(
			`ALTER TABLE "forms" ALTER COLUMN "created_at" DROP DEFAULT`
		);
		await queryRunner.query(
			`ALTER TABLE "form_responses" ALTER COLUMN "updated_at" DROP DEFAULT`
		);
		await queryRunner.query(
			`ALTER TABLE "form_responses" ALTER COLUMN "created_at" DROP DEFAULT`
		);
	}
}
