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
exports.TypeORMEntretienRepository = void 0;
const Entretien_1 = require("../../domain/entities/Entretien");
const data_source_1 = require("../../data-source");
class TypeORMEntretienRepository {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(Entretien_1.Entretien);
    }
    save(entretien) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.save(entretien);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne({ where: { id } });
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
    getEntretiensByMotoId(motoId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find({ where: { moto: { id: motoId } } });
        });
    }
}
exports.TypeORMEntretienRepository = TypeORMEntretienRepository;
