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
exports.Essai = void 0;
const typeorm_1 = require("typeorm");
const Moto_1 = require("./Moto");
const Conducteur_1 = require("./Conducteur");
let Essai = class Essai {
};
exports.Essai = Essai;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Essai.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Moto_1.Moto, (moto) => moto.essais),
    __metadata("design:type", Moto_1.Moto)
], Essai.prototype, "moto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Conducteur_1.Conducteur, (conducteur) => conducteur.essais),
    __metadata("design:type", Conducteur_1.Conducteur)
], Essai.prototype, "conducteur", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Essai.prototype, "dateEssai", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Essai.prototype, "duree", void 0);
exports.Essai = Essai = __decorate([
    (0, typeorm_1.Entity)()
], Essai);
