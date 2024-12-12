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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntretienScheduler = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
class EntretienScheduler {
    constructor(motoRepository, notificationService) {
        this.motoRepository = motoRepository;
        this.notificationService = notificationService;
    }
    start() {
        node_cron_1.default.schedule('0 0 * * *', () => __awaiter(this, void 0, void 0, function* () {
            const motos = yield this.motoRepository.findAll();
            const aujourdHui = new Date();
            motos.forEach((moto) => __awaiter(this, void 0, void 0, function* () {
                if (this.estEntretienDu(moto, aujourdHui)) {
                    yield this.notificationService.envoyerRappel(moto.id, 'Votre moto nécessite un entretien');
                }
            }));
        }));
    }
    estEntretienDu(moto, date) {
        const dernierEntretien = new Date(moto.dateDernierEntretien);
        if (moto.intervalleEntretienKm &&
            moto.kilometrage >= moto.intervalleEntretienKm) {
            return true;
        }
        if (moto.intervalleEntretienTemps &&
            date.getTime() - dernierEntretien.getTime() >=
                moto.intervalleEntretienTemps * 24 * 60 * 60 * 1000) {
            return true;
        }
        return false;
    }
}
exports.EntretienScheduler = EntretienScheduler;
