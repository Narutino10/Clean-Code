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
exports.GetEntretiensByMotoIdUseCase = void 0;
class GetEntretiensByMotoIdUseCase {
    constructor(entretienRepository) {
        this.entretienRepository = entretienRepository;
    }
    execute(motoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const entretiens = yield this.entretienRepository.getEntretiensByMotoId(motoId);
            if (!entretiens) {
                throw new Error(`Aucun entretien trouvé pour la moto avec l'ID ${motoId}`);
            }
            return entretiens;
        });
    }
}
exports.GetEntretiensByMotoIdUseCase = GetEntretiensByMotoIdUseCase;
