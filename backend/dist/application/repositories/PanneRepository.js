"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanneRepository = void 0;
const typeorm_1 = require("typeorm");
const Panne_1 = require("../../domain/entities/Panne");
class PanneRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(Panne_1.Panne, dataSource.manager);
    }
}
exports.PanneRepository = PanneRepository;
