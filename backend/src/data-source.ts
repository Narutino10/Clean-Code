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
import { Client } from './domain/entities/Client';
import { Company } from './domain/entities/Company';
import { CompanyMotorcycle } from './domain/entities/CompanyMotorcycle';
import { Concession } from './domain/entities/Concession';
import { Maintenance } from './domain/entities/Maintenance';
import { Repair } from './domain/entities/Repair';
import { RepairPart } from './domain/entities/RepairPart';
import { User } from './domain/entities/User';
import { Warranty } from './domain/entities/Warranty';
import { WarrantyPart } from './domain/entities/WarrantyPart';

export const AppDataSource = new DataSource({
  type: 'postgres', 
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'triumph_db',
  synchronize: true,
  logging: false,
  entities: [
    Moto, 
    ModeleMoto, 
    Entretien,
    Essai,
    Incident, 
    Panne, 
    PieceDetachee, 
    CommandePiece, 
    EventEntity, 
    Conducteur, 
    Client, 
    Company, 
    CompanyMotorcycle,
    Concession,
    Maintenance,
    Repair,
    RepairPart,
    User,
    Warranty,
    WarrantyPart,
  ], 
  migrations: ['./migrations/*.ts'],
  subscribers: [],
});
