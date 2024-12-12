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
exports.CreateMotoCommandHandler = void 0;
const Moto_1 = require("../../domain/entities/Moto");
class CreateMotoCommandHandler {
    constructor(motoRepository, modeleMotoRepository) {
        this.motoRepository = motoRepository;
        this.modeleMotoRepository = modeleMotoRepository;
    }
    handle(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const { modele, kilometrage, dateDernierEntretien } = command;
            // Récupérer le modèle de moto à partir du repository
            const modeleMoto = yield this.modeleMotoRepository.findByName(modele);
            if (!modeleMoto) {
                throw new Error(`Le modèle de moto '${modele}' n'existe pas.`);
            }
            // Créer une nouvelle instance de Moto
            const moto = new Moto_1.Moto();
            moto.modele = modeleMoto;
            moto.kilometrage = kilometrage;
            moto.dateDernierEntretien = dateDernierEntretien;
            // Sauvegarder la moto dans le repository
            yield this.motoRepository.save(moto);
            return moto;
        });
    }
}
exports.CreateMotoCommandHandler = CreateMotoCommandHandler;
