import { MigrationInterface, QueryRunner } from 'typeorm';

export class InititalMigration1758781634070 implements MigrationInterface {
	name = 'InititalMigration1758781634070';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "users" ("id" character(26) NOT NULL, "first_name" character varying, "last_name" character varying, "email" character varying NOT NULL, "password" character varying, "is_verified" boolean NOT NULL DEFAULT false, "verification_token" character varying, "verification_token_expires_at" TIMESTAMP, "password_reset_token" character varying, "password_reset_token_expires_at" TIMESTAMP, "avatar_url" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "form_responses" ("id" character(26) NOT NULL, "response" jsonb NOT NULL DEFAULT '{}', "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "form_id" character(26), CONSTRAINT "PK_36a512e5574d0a366b40b26874e" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "forms" ("id" character(26) NOT NULL, "name" character varying NOT NULL, "description" character varying, "is_published" boolean NOT NULL DEFAULT false, "blocks" jsonb DEFAULT '[]', "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "user_id" character(26), CONSTRAINT "PK_ba062fd30b06814a60756f233da" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`ALTER TABLE "form_responses" ADD CONSTRAINT "FK_e16fc40ad2a3520c6641b3ce4a7" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE "forms" ADD CONSTRAINT "FK_33572ad4e6763159442d599a7cc" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "forms" DROP CONSTRAINT "FK_33572ad4e6763159442d599a7cc"`
		);
		await queryRunner.query(
			`ALTER TABLE "form_responses" DROP CONSTRAINT "FK_e16fc40ad2a3520c6641b3ce4a7"`
		);
		await queryRunner.query(`DROP TABLE "forms"`);
		await queryRunner.query(`DROP TABLE "form_responses"`);
		await queryRunner.query(`DROP TABLE "users"`);
	}
}
