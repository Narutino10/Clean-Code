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
exports.PieceDetacheeRepository = void 0;
const typeorm_1 = require("typeorm");
const PieceDetachee_1 = require("../../domain/entities/PieceDetachee");
class PieceDetacheeRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(PieceDetachee_1.PieceDetachee, dataSource.manager);
    }
    findLowStockPieces() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.find({
                where: {
                    stock: (0, typeorm_1.LessThanOrEqual)(10), // Utilisation correcte
                },
            });
        });
    }
}
exports.PieceDetacheeRepository = PieceDetacheeRepository;
