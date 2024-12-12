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
    save(moto) {
        const _super = Object.create(null, {
            save: { get: () => super.save }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return yield _super.save.call(this, moto); // Conversion nécessaire pour le type attendu
        });
    }
    delete(id) {
        const _super = Object.create(null, {
            delete: { get: () => super.delete }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.delete.call(this, { id }); // Suppression basée sur ID
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.find(); // Appel direct de la méthode héritée
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findOne({ where: { id } }); // Conversion pour le type attendu
        });
    }
    update(id, partialEntity) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.update.call(this, id, partialEntity); // Mise à jour partielle
        });
    }
    findOne(criteria) {
        const _super = Object.create(null, {
            findOne: { get: () => super.findOne }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return yield _super.findOne.call(this, { where: criteria }); // Conversion pour type attendu
        });
    }
}
exports.TypeORMMotoRepository = TypeORMMotoRepository;
