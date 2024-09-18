import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Moto } from './domain/entities/Moto';
import { ModeleMoto } from './domain/entities/ModeleMoto';
import { Entretien } from './domain/entities/Entretien';
import { Essai } from './domain/entities/Essai';
import { Conducteur } from './domain/entities/Conducteur';
import { Incident } from './domain/entities/Incident';
import { Panne } from './domain/entities/Panne';
import { PieceDetachee } from './domain/entities/PieceDetachee';
import { CommandePiece } from './domain/entities/CommandePiece';
import { EventEntity } from './infrastructure/entities/EventEntity';

export const AppDataSource = new DataSource({
  type: 'postgres', 
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'triumph_db',
  synchronize: true,
  logging: false,
  entities: [Moto, ModeleMoto, Entretien, Essai, Incident, Panne, PieceDetachee, CommandePiece, EventEntity, Conducteur], // Include all entities
  migrations: ['./migrations/*.ts'],
  subscribers: [],
});
