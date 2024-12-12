"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeleMotoRepository = void 0;
// src/application/repositories/ModeleMotoRepository.ts
const typeorm_1 = require("typeorm");
const ModeleMoto_1 = require("../../domain/entities/ModeleMoto");
class ModeleMotoRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(ModeleMoto_1.ModeleMoto, dataSource.manager);
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.findOneBy({ id });
        });
    }
    // Ajout de la méthode findByName
    findByName(nom) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.findOne({ where: { nom } });
        });
    }
}
exports.ModeleMotoRepository = ModeleMotoRepository;
