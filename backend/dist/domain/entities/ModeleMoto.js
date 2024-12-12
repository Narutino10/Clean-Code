"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeleMoto = void 0;
const typeorm_1 = require("typeorm");
const Moto_1 = require("./Moto");
let ModeleMoto = class ModeleMoto {
};
exports.ModeleMoto = ModeleMoto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ModeleMoto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ModeleMoto.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }) // Vérifiez que le type correspond à vos besoins
    ,
    __metadata("design:type", Number)
], ModeleMoto.prototype, "entretienIntervalKm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], ModeleMoto.prototype, "entretienIntervalTemps", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Moto_1.Moto, (moto) => moto.modele),
    __metadata("design:type", Array)
], ModeleMoto.prototype, "motos", void 0);
exports.ModeleMoto = ModeleMoto = __decorate([
    (0, typeorm_1.Entity)()
], ModeleMoto);
