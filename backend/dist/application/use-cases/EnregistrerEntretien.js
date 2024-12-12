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
exports.EnregistrerEntretien = void 0;
const Entretien_1 = require("../../domain/entities/Entretien");
class EnregistrerEntretien {
    constructor(entretienRepository, motoRepository) {
        this.entretienRepository = entretienRepository;
        this.motoRepository = motoRepository;
    }
    execute(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { motoId, date, description, piecesChangees, coutTotal, recommandations } = params;
            // Vérifier si la moto existe
            const moto = yield this.motoRepository.findById(motoId);
            if (!moto) {
                throw new Error(`La moto avec l'ID '${motoId}' n'existe pas.`);
            }
            // Créer un nouvel entretien
            const entretien = new Entretien_1.Entretien();
            entretien.moto = moto;
            entretien.date = date;
            entretien.description = description;
            entretien.piecesChangees = piecesChangees;
            entretien.coutTotal = coutTotal;
            entretien.recommandations = recommandations;
            // Sauvegarder l'entretien
            yield this.entretienRepository.save(entretien);
            return entretien;
        });
    }
}
exports.EnregistrerEntretien = EnregistrerEntretien;
