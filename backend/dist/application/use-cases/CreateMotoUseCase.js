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
exports.CreateMotoUseCase = void 0;
const Moto_1 = require("../../domain/entities/Moto");
class CreateMotoUseCase {
    constructor(motoRepository, modeleMotoRepository // Injectez le repository de ModeleMoto
    ) {
        this.motoRepository = motoRepository;
        this.modeleMotoRepository = modeleMotoRepository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const moto = new Moto_1.Moto();
            // Recherchez le modèle de moto par son identifiant
            const modele = yield this.modeleMotoRepository.findById(data.modeleId);
            if (!modele) {
                throw new Error("Modèle de moto non trouvé");
            }
            moto.modele = modele; // Assignez l'objet ModeleMoto trouvé
            moto.kilometrage = data.kilometrage;
            moto.dateDernierEntretien = data.dateDernierEntretien;
            return yield this.motoRepository.saveMoto(moto);
        });
    }
}
exports.CreateMotoUseCase = CreateMotoUseCase;
