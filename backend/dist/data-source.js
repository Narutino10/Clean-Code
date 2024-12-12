"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Moto_1 = require("./domain/entities/Moto");
const ModeleMoto_1 = require("./domain/entities/ModeleMoto");
const Entretien_1 = require("./domain/entities/Entretien");
const Essai_1 = require("./domain/entities/Essai");
const Conducteur_1 = require("./domain/entities/Conducteur");
const Incident_1 = require("./domain/entities/Incident");
const Panne_1 = require("./domain/entities/Panne");
const PieceDetachee_1 = require("./domain/entities/PieceDetachee");
const CommandePiece_1 = require("./domain/entities/CommandePiece");
const EventEntity_1 = require("./infrastructure/entities/EventEntity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'triumph_db',
    synchronize: true,
    logging: false,
    entities: [Moto_1.Moto, ModeleMoto_1.ModeleMoto, Entretien_1.Entretien, Essai_1.Essai, Incident_1.Incident, Panne_1.Panne, PieceDetachee_1.PieceDetachee, CommandePiece_1.CommandePiece, EventEntity_1.EventEntity, Conducteur_1.Conducteur], // Include all entities
    migrations: ['./migrations/*.ts'],
    subscribers: [],
});
