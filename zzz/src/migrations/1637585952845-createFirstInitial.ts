import {MigrationInterface, QueryRunner} from "typeorm";

export class createFirstInitial1637585952845 implements MigrationInterface {
    name = 'createFirstInitial1637585952845'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`bio\` varchar(255) NOT NULL DEFAULT '', \`image\` varchar(255) NOT NULL DEFAULT '', \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`articles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`slug\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL DEFAULT '', \`body\` varchar(255) NOT NULL DEFAULT '', \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(), \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(), \`tagList\` text NOT NULL, \`favoritesCount\` int NOT NULL DEFAULT '0', \`authorId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`resorts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`slug\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL DEFAULT '', \`h1\` varchar(255) NOT NULL DEFAULT '', \`body\` text NOT NULL DEFAULT '', \`mainResortId\` int NULL, UNIQUE INDEX \`IDX_3beb4af5def1ccecbb7a8443a0\` (\`slug\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`mainresorts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`slug\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL DEFAULT '', \`h1\` varchar(255) NOT NULL DEFAULT '', \`body\` text NOT NULL DEFAULT '', UNIQUE INDEX \`IDX_15105bd34bf2a70b00fe144638\` (\`slug\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tags\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`articles\` ADD CONSTRAINT \`FK_65d9ccc1b02f4d904e90bd76a34\` FOREIGN KEY (\`authorId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`resorts\` ADD CONSTRAINT \`FK_9d1f51da902117b8f5b4ee02764\` FOREIGN KEY (\`mainResortId\`) REFERENCES \`mainresorts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`resorts\` DROP FOREIGN KEY \`FK_9d1f51da902117b8f5b4ee02764\``);
        await queryRunner.query(`ALTER TABLE \`articles\` DROP FOREIGN KEY \`FK_65d9ccc1b02f4d904e90bd76a34\``);
        await queryRunner.query(`DROP TABLE \`tags\``);
        await queryRunner.query(`DROP INDEX \`IDX_15105bd34bf2a70b00fe144638\` ON \`mainresorts\``);
        await queryRunner.query(`DROP TABLE \`mainresorts\``);
        await queryRunner.query(`DROP INDEX \`IDX_3beb4af5def1ccecbb7a8443a0\` ON \`resorts\``);
        await queryRunner.query(`DROP TABLE \`resorts\``);
        await queryRunner.query(`DROP TABLE \`articles\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
