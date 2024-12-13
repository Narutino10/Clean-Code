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
exports.MotoController = void 0;
const CreateMotoUseCase_1 = require("../../application/use-cases/CreateMotoUseCase");
const GetAllMotosUseCase_1 = require("../../application/use-cases/GetAllMotosUseCase");
const GetEntretiensByMotoIdUseCase_1 = require("../../application/use-cases/GetEntretiensByMotoIdUseCase");
const GetMotoByIdUseCase_1 = require("../../application/use-cases/GetMotoByIdUseCase");
class MotoController {
    constructor(motoRepository, modeleMotoRepository, entretienRepository, eventStore) {
        this.motoRepository = motoRepository;
        this.modeleMotoRepository = modeleMotoRepository;
        this.entretienRepository = entretienRepository;
        this.eventStore = eventStore;
        this.createMotoUseCase = new CreateMotoUseCase_1.CreateMotoUseCase(this.motoRepository, this.modeleMotoRepository);
        this.getAllMotosUseCase = new GetAllMotosUseCase_1.GetAllMotosUseCase(this.motoRepository);
        this.getEntretiensByMotoIdUseCase = new GetEntretiensByMotoIdUseCase_1.GetEntretiensByMotoIdUseCase(this.entretienRepository);
        this.getMotoByIdUseCase = new GetMotoByIdUseCase_1.GetMotoByIdUseCase(this.motoRepository);
    }
    createMoto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const moto = yield this.createMotoUseCase.execute(data);
                res.status(201).json(moto);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    getAllMotos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const motos = yield this.motoRepository.find({ relations: ['modele'] });
                res.status(200).json(motos);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    getEntretiensByMotoId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const motoId = req.params.motoId;
                const entretiens = yield this.getEntretiensByMotoIdUseCase.execute(motoId);
                res.status(200).json(entretiens);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    getMotoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const motoId = req.params.id;
                const moto = yield this.getMotoByIdUseCase.execute(motoId);
                res.status(200).json(moto);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
}
exports.MotoController = MotoController;
