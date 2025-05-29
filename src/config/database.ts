import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
 
dotenv.config();
 
const sequelize = new Sequelize({
  dialect: 'postgres' as Dialect,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  models: [__dirname + '/../models'], // importa todos os models
  logging: false,
});
 
export default sequelize;