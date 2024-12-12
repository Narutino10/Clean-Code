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
exports.EnregistrerPanne = void 0;
const Panne_1 = require("../../domain/entities/Panne");
class EnregistrerPanne {
    constructor(panneRepository, motoRepository) {
        this.panneRepository = panneRepository;
        this.motoRepository = motoRepository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const moto = yield this.motoRepository.findById(data.motoId);
            if (!moto)
                throw new Error('Moto non trouvée');
            const panne = new Panne_1.Panne();
            panne.moto = moto;
            panne.date = data.date;
            panne.description = data.description;
            panne.estSousGarantie = data.estSousGarantie;
            panne.actionCorrective = data.actionCorrective;
            yield this.panneRepository.save(panne);
        });
    }
}
exports.EnregistrerPanne = EnregistrerPanne;
