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
exports.StockScheduler = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
class StockScheduler {
    constructor(pieceDetacheeRepository, notificationService) {
        this.pieceDetacheeRepository = pieceDetacheeRepository;
        this.notificationService = notificationService;
    }
    start() {
        node_cron_1.default.schedule('0 0 * * *', () => __awaiter(this, void 0, void 0, function* () {
            const pieces = yield this.pieceDetacheeRepository.findAll();
            pieces.forEach((piece) => __awaiter(this, void 0, void 0, function* () {
                if (piece.quantiteEnStock <= piece.seuilCritique) {
                    yield this.notificationService.envoyerAlerteStockBas(piece.id, `Le stock de ${piece.nom} est bas`);
                }
            }));
        }));
    }
}
exports.StockScheduler = StockScheduler;
