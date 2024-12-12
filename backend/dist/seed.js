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
const data_source_1 = require("./data-source");
const Moto_1 = require("./domain/entities/Moto");
const ModeleMoto_1 = require("./domain/entities/ModeleMoto");
const Conducteur_1 = require("./domain/entities/Conducteur");
const Entretien_1 = require("./domain/entities/Entretien");
const PieceDetachee_1 = require("./domain/entities/PieceDetachee");
const CommandePiece_1 = require("./domain/entities/CommandePiece");
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        yield data_source_1.AppDataSource.initialize();
        const motoRepository = data_source_1.AppDataSource.getRepository(Moto_1.Moto);
        const modeleMotoRepository = data_source_1.AppDataSource.getRepository(ModeleMoto_1.ModeleMoto);
        const conducteurRepository = data_source_1.AppDataSource.getRepository(Conducteur_1.Conducteur);
        const entretienRepository = data_source_1.AppDataSource.getRepository(Entretien_1.Entretien);
        const pieceDetacheeRepository = data_source_1.AppDataSource.getRepository(PieceDetachee_1.PieceDetachee);
        const commandePieceRepository = data_source_1.AppDataSource.getRepository(CommandePiece_1.CommandePiece);
        // Ajout des modèles de moto avec les valeurs pour entretienIntervalKm et entretienIntervalTemps
        const streetTriple = yield modeleMotoRepository.save({
            nom: 'Street Triple',
            constructeur: 'Triumph',
            cylindree: 765,
            entretienIntervalKm: 10000, // Valeur ajoutée
            entretienIntervalTemps: 12 // Valeur ajoutée
        });
        const tigerSport = yield modeleMotoRepository.save({
            nom: 'Tiger Sport 660',
            constructeur: 'Triumph',
            cylindree: 660,
            entretienIntervalKm: 16000, // Valeur ajoutée
            entretienIntervalTemps: 12 // Valeur ajoutée
        });
        // Ajout des motos
        const moto1 = yield motoRepository.save({ modele: streetTriple, kilometrage: 5000, dateDernierEntretien: new Date() });
        const moto2 = yield motoRepository.save({ modele: tigerSport, kilometrage: 16000, dateDernierEntretien: new Date() });
        // Ajout des conducteurs
        const conducteur1 = yield conducteurRepository.save({ nom: 'John Doe', permis: 'A', experience: 5 });
        const conducteur2 = yield conducteurRepository.save({ nom: 'Jane Smith', permis: 'A', experience: 2 });
        // Ajout des entretiens
        const entretien1 = yield entretienRepository.save({
            moto: moto1,
            date: new Date(),
            description: 'Changement d’huile et filtre',
            piecesChangees: ['Filtre à huile', 'Huile moteur'],
            coutTotal: 150,
            recommandations: 'Vérifier la pression des pneus'
        });
        const entretien2 = yield entretienRepository.save({
            moto: moto2,
            date: new Date(),
            description: 'Révision des 16000 km',
            piecesChangees: ['Bougies', 'Filtre à air'],
            coutTotal: 250,
            recommandations: 'Prochain entretien dans 5000 km'
        });
        // Ajout des pièces détachées
        const piece1 = yield pieceDetacheeRepository.save({ nom: 'Filtre à huile', stock: 100 });
        const piece2 = yield pieceDetacheeRepository.save({ nom: 'Bougies', stock: 50 });
        // Ajout des commandes de pièces
        const commande1 = yield commandePieceRepository.save({
            piece: piece1,
            dateCommande: new Date(),
            quantite: 20,
            coutTotal: 200,
            dateLivraisonEstimee: new Date(new Date().setDate(new Date().getDate() + 7))
        });
        const commande2 = yield commandePieceRepository.save({
            piece: piece2,
            dateCommande: new Date(),
            quantite: 10,
            coutTotal: 100,
            dateLivraisonEstimee: new Date(new Date().setDate(new Date().getDate() + 10))
        });
        console.log('Données insérées avec succès');
    });
}
seed().catch(error => console.log('Erreur lors de l\'insertion des données :', error));
