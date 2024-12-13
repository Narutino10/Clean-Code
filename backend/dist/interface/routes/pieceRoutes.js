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
const express_1 = require("express");
const TypeORMPieceDetacheeRepository_1 = require("../../infrastructure/repositories/TypeORMPieceDetacheeRepository"); // Assurez-vous que le chemin est correct
const pieceRoutes = (0, express_1.Router)();
const repository = new TypeORMPieceDetacheeRepository_1.TypeORMPieceDetacheeRepository(); // On utilise la classe concrète TypeORM
pieceRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pieces = yield repository.findAll();
        res.json(pieces);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
pieceRoutes.get('/low-stock', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lowStockPieces = yield repository.findLowStockPieces(); // Utilisation correcte de la méthode
        res.json(lowStockPieces);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
pieceRoutes.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nom, stock, seuilCritique } = req.body;
        const piece = repository.create({ nom, stock, seuilCritique });
        yield repository.savePiece(piece);
        res.status(201).json(piece);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
exports.default = pieceRoutes;
