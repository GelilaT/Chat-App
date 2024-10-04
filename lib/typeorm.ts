import { DataSource } from 'typeorm';
import { User } from '../entities/user'; 

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'chatapp',
  synchronize: true,
  logging: false,
  entities: [User], // Add all your entities here
});
