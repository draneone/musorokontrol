import { ConnectionOptions } from 'typeorm';

const ormconfig: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Killpop))',
  database: 'musoronadzor',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true
};

export default ormconfig;
