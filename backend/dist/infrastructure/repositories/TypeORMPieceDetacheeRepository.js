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
exports.TypeORMPieceDetacheeRepository = void 0;
const typeorm_1 = require("typeorm");
const PieceDetachee_1 = require("../../domain/entities/PieceDetachee");
const data_source_1 = require("../../data-source");
class TypeORMPieceDetacheeRepository extends typeorm_1.Repository {
    constructor() {
        super(PieceDetachee_1.PieceDetachee, data_source_1.AppDataSource.manager);
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.find();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.findOne({ where: { id } });
        });
    }
    savePiece(piece) {
        const _super = Object.create(null, {
            save: { get: () => super.save }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.save.call(this, piece);
        });
    }
    deletePiece(id) {
        const _super = Object.create(null, {
            delete: { get: () => super.delete }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield _super.delete.call(this, id);
            if (result.affected === 0) {
                throw new Error(`Aucune pièce détachée trouvée avec l'ID ${id}`);
            }
            // Retourner explicitement une promesse vide
            return Promise.resolve();
        });
    }
    updatePiece(id, piece) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield _super.update.call(this, id, piece);
            if (result.affected === 0) {
                throw new Error(`Aucune mise à jour effectuée pour l'ID ${id}`);
            }
            // Retourner explicitement une promesse vide
            return Promise.resolve();
        });
    }
}
exports.TypeORMPieceDetacheeRepository = TypeORMPieceDetacheeRepository;
