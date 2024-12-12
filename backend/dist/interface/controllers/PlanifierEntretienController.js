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
exports.PlanifierEntretienController = void 0;
const PlanifierEntretienUseCase_1 = require("../../application/use-cases/PlanifierEntretienUseCase");
const TypeORMMotoRepository_1 = require("../../infrastructure/repositories/TypeORMMotoRepository");
const ModeleMotoRepository_1 = require("../../application/repositories/ModeleMotoRepository");
const data_source_1 = require("../../data-source");
const motoRepository = new TypeORMMotoRepository_1.TypeORMMotoRepository();
const modeleMotoRepository = new ModeleMotoRepository_1.ModeleMotoRepository(data_source_1.AppDataSource);
const planifierEntretienUseCase = new PlanifierEntretienUseCase_1.PlanifierEntretienUseCase(motoRepository, modeleMotoRepository);
class PlanifierEntretienController {
    planifier(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { motoId } = req.params;
                yield planifierEntretienUseCase.execute(motoId);
                res.status(200).json({ message: 'Entretien planifié avec succès' });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: 'Erreur inconnue' });
                }
            }
        });
    }
}
exports.PlanifierEntretienController = PlanifierEntretienController;
