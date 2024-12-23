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
exports.PieceDetachee = void 0;
const typeorm_1 = require("typeorm");
const CommandePiece_1 = require("./CommandePiece");
let PieceDetachee = class PieceDetachee {
};
exports.PieceDetachee = PieceDetachee;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PieceDetachee.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PieceDetachee.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], PieceDetachee.prototype, "prix", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], PieceDetachee.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], PieceDetachee.prototype, "seuilCritique", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CommandePiece_1.CommandePiece, (commande) => commande.piece),
    __metadata("design:type", Array)
], PieceDetachee.prototype, "commandes", void 0);
exports.PieceDetachee = PieceDetachee = __decorate([
    (0, typeorm_1.Entity)()
], PieceDetachee);
