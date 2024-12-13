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
const PieceDetacheeRepository_1 = require("../../application/repositories/PieceDetacheeRepository");
const data_source_1 = require("../../data-source");
const pieceRoutes = (0, express_1.Router)();
const repository = new PieceDetacheeRepository_1.PieceDetacheeRepository(data_source_1.AppDataSource);
pieceRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pieces = yield repository.find();
        res.json(pieces);
    }
    catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des pièces' });
    }
}));
pieceRoutes.get('/low-stock', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lowStockPieces = yield repository.findLowStockPieces();
        res.json(lowStockPieces);
    }
    catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des pièces en stock critique' });
    }
}));
exports.default = pieceRoutes;
