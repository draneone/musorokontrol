"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ormconfig = {
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Killpop))',
    database: 'musoronadzor',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    },
};
exports.default = ormconfig;
//# sourceMappingURL=ormconfig.js.map