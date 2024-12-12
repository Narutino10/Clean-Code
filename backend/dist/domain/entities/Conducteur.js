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
exports.Conducteur = void 0;
const typeorm_1 = require("typeorm");
const Essai_1 = require("./Essai");
const Incident_1 = require("./Incident");
let Conducteur = class Conducteur {
};
exports.Conducteur = Conducteur;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Conducteur.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Conducteur.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Conducteur.prototype, "permis", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Conducteur.prototype, "experience", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Essai_1.Essai, (essai) => essai.conducteur),
    __metadata("design:type", Array)
], Conducteur.prototype, "essais", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Incident_1.Incident, (incident) => incident.conducteur),
    __metadata("design:type", Array)
], Conducteur.prototype, "incidents", void 0);
exports.Conducteur = Conducteur = __decorate([
    (0, typeorm_1.Entity)()
], Conducteur);
