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
exports.NotificationService = void 0;
const Notification_1 = require("../../domain/entities/Notification");
class NotificationService {
    constructor(notificationRepository) {
        this.notificationRepository = notificationRepository;
    }
    envoyerRappel(motoId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Rappel envoyé pour la moto ${motoId}: ${message}`);
            const notification = new Notification_1.Notification(motoId, message);
            yield this.notificationRepository.saveNotification(notification);
        });
    }
    envoyerRappelEntretien(pieceId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Rappel d'entretien envoyé pour la pièce ${pieceId}: ${message}`);
            const notification = new Notification_1.Notification(pieceId, message);
            yield this.notificationRepository.saveNotification(notification);
        });
    }
    envoyerAlerteStockBas(pieceId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Alerte de stock bas envoyée pour la pièce ${pieceId}: ${message}`);
            const notification = new Notification_1.Notification(pieceId, message);
            yield this.notificationRepository.saveNotification(notification);
        });
    }
}
exports.NotificationService = NotificationService;
