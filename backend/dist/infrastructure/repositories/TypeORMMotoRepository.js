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
exports.TypeORMMotoRepository = void 0;
const typeorm_1 = require("typeorm");
const Moto_1 = require("../../domain/entities/Moto");
const data_source_1 = require("../../data-source");
class TypeORMMotoRepository extends typeorm_1.Repository {
    constructor() {
        super(Moto_1.Moto, data_source_1.AppDataSource.manager);
    }
    saveMoto(moto) {
        return __awaiter(this, void 0, void 0, function* () {
            // Appel direct de la méthode save du Repository
            return yield data_source_1.AppDataSource.getRepository(Moto_1.Moto).save(moto);
        });
    }
    deleteMoto(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // Appel de la méthode delete et gestion des résultats
            const result = yield data_source_1.AppDataSource.getRepository(Moto_1.Moto).delete({ id });
            if (result.affected === 0) {
                throw new Error(`Aucune moto trouvée avec l'ID ${id}`);
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield data_source_1.AppDataSource.getRepository(Moto_1.Moto).find();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield data_source_1.AppDataSource.getRepository(Moto_1.Moto).findOne({ where: { id } });
        });
    }
    updateMoto(moto) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield data_source_1.AppDataSource.getRepository(Moto_1.Moto).update(moto.id, moto);
            if (result.affected === 0) {
                throw new Error(`Aucune mise à jour effectuée pour l'ID ${moto.id}`);
            }
            return moto; // Retourne la moto mise à jour
        });
    }
    findOne(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield data_source_1.AppDataSource.getRepository(Moto_1.Moto).findOne(options);
        });
    }
}
exports.TypeORMMotoRepository = TypeORMMotoRepository;
