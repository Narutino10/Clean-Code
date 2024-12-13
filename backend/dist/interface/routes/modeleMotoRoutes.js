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
const createModeleMotoRoutes = (modeleMotoRepository) => {
    const router = (0, express_1.Router)();
    router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const modeles = yield modeleMotoRepository.findAll();
            res.status(200).json(modeles);
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            res.status(500).json({ error: errorMessage });
        }
    }));
    ;
    return router;
};
exports.default = createModeleMotoRoutes;
