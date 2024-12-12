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
exports.InMemoryMotoRepository = void 0;
class InMemoryMotoRepository {
    constructor() {
        this.motos = [];
    }
    saveMoto(moto) {
        return __awaiter(this, void 0, void 0, function* () {
            this.motos.push(moto);
            return moto;
        });
    }
    deleteMoto(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.motos = this.motos.filter((moto) => moto.id !== id);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.motos;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.motos.find((moto) => moto.id === id) || null;
        });
    }
    updateMoto(moto) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.motos.findIndex((m) => m.id === moto.id);
            if (index !== -1) {
                this.motos[index] = moto;
                return moto;
            }
            throw new Error('Moto non trouvée');
        });
    }
    findOne(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.motos.find((moto) => Object.entries(options).every(([key, value]) => moto[key] === value)) || null;
        });
    }
}
exports.InMemoryMotoRepository = InMemoryMotoRepository;
