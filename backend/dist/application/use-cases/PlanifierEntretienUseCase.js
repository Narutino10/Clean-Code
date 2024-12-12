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
exports.PlanifierEntretienUseCase = void 0;
class PlanifierEntretienUseCase {
    constructor(motoRepository, modeleMotoRepository) {
        this.motoRepository = motoRepository;
        this.modeleMotoRepository = modeleMotoRepository;
    }
    execute(motoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const moto = yield this.motoRepository.findById(motoId);
            if (!moto) {
                throw new Error('Moto non trouvée');
            }
            const modele = yield this.modeleMotoRepository.findById(moto.modele.id);
            if (!modele) {
                throw new Error('Modèle de moto non trouvé');
            }
            moto.intervalleEntretienKm = modele.entretienIntervalKm;
            moto.intervalleEntretienTemps = modele.entretienIntervalTemps;
            yield this.motoRepository.updateMoto(moto);
        });
    }
}
exports.PlanifierEntretienUseCase = PlanifierEntretienUseCase;
