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
exports.Moto = void 0;
const typeorm_1 = require("typeorm");
const ModeleMoto_1 = require("./ModeleMoto");
const Entretien_1 = require("./Entretien");
const Essai_1 = require("./Essai");
const Incident_1 = require("./Incident");
const Panne_1 = require("./Panne");
let Moto = class Moto {
};
exports.Moto = Moto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Moto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ModeleMoto_1.ModeleMoto, (modele) => modele.motos),
    __metadata("design:type", ModeleMoto_1.ModeleMoto)
], Moto.prototype, "modele", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Moto.prototype, "kilometrage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Moto.prototype, "dateDernierEntretien", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Entretien_1.Entretien, (entretien) => entretien.moto),
    __metadata("design:type", Array)
], Moto.prototype, "entretiens", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Essai_1.Essai, (essai) => essai.moto),
    __metadata("design:type", Array)
], Moto.prototype, "essais", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Incident_1.Incident, (incident) => incident.moto),
    __metadata("design:type", Array)
], Moto.prototype, "incidents", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Panne_1.Panne, (panne) => panne.moto),
    __metadata("design:type", Array)
], Moto.prototype, "pannes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }) // Ajout : persisté en base
    ,
    __metadata("design:type", Number)
], Moto.prototype, "intervalleEntretienKm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }) // Ajout : persisté en base
    ,
    __metadata("design:type", Number)
], Moto.prototype, "intervalleEntretienTemps", void 0);
exports.Moto = Moto = __decorate([
    (0, typeorm_1.Entity)()
], Moto);
