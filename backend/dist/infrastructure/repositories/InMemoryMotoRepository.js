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
    save(moto) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!moto.id) {
                moto.id = this.generateId();
            }
            this.motos.push(moto);
            return moto;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.motos = this.motos.filter(moto => moto.id !== id);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.motos;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const moto = this.motos.find(moto => moto.id === id);
            return moto || null;
        });
    }
    update(moto) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.motos.findIndex(m => m.id === moto.id);
            if (index === -1)
                throw new Error('Moto not found');
            this.motos[index] = moto;
            return moto;
        });
    }
    generateId() {
        return Math.random().toString(36).substring(2, 15);
    }
}
exports.InMemoryMotoRepository = InMemoryMotoRepository;
