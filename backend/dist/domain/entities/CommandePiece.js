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
exports.CommandePiece = void 0;
const typeorm_1 = require("typeorm");
const PieceDetachee_1 = require("./PieceDetachee");
let CommandePiece = class CommandePiece {
};
exports.CommandePiece = CommandePiece;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CommandePiece.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PieceDetachee_1.PieceDetachee, (piece) => piece.commandes),
    __metadata("design:type", PieceDetachee_1.PieceDetachee)
], CommandePiece.prototype, "piece", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], CommandePiece.prototype, "dateCommande", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CommandePiece.prototype, "quantite", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], CommandePiece.prototype, "coutTotal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], CommandePiece.prototype, "dateLivraisonEstimee", void 0);
exports.CommandePiece = CommandePiece = __decorate([
    (0, typeorm_1.Entity)()
], CommandePiece);
