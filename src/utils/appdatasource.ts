import { DataSource } from 'typeorm';
import entities from './typeorm';

export const Appdatasource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  password: '226939',
  username: 'postgres',
  database: 'test',
  synchronize: true,
  logging: true,
  entities: entities,
});

// export const Appdatasource = new DataSource({
//   type: 'mongodb',
//   url: 'mongodb+srv://abhinav200218:y0PIkHMOhhDOXDck@cluster0.4kxoad7.mongodb.net/?retryWrites=true&w=majority',
//   synchronize: true,
//   logging: true,
//   entities: entities,
// });