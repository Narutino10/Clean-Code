import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Moto } from './domain/entities/Moto';
import { EventEntity } from './infrastructure/entities/EventEntity';

export const AppDataSource = new DataSource({
  type: 'postgres', // Utilisez 'postgres' pour PostgreSQL
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'triumph_db',
  synchronize: true,
  logging: false,
  entities: [Moto, EventEntity], 
  migrations: [],
  subscribers: [],
});
