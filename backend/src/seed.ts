import { AppDataSource } from './data-source';
import { Moto } from './domain/entities/Moto';
import { ModeleMoto } from './domain/entities/ModeleMoto';
import { Conducteur } from './domain/entities/Conducteur';
import { Entretien } from './domain/entities/Entretien';
import { PieceDetachee } from './domain/entities/PieceDetachee';
import { CommandePiece } from './domain/entities/CommandePiece';

async function seed() {
    try {
        await AppDataSource.initialize();
        console.log('Connexion à la base de données réussie.');

        const motoRepository = AppDataSource.getRepository(Moto);
        const modeleMotoRepository = AppDataSource.getRepository(ModeleMoto);
        const conducteurRepository = AppDataSource.getRepository(Conducteur);
        const entretienRepository = AppDataSource.getRepository(Entretien);
        const pieceDetacheeRepository = AppDataSource.getRepository(PieceDetachee);
        const commandePieceRepository = AppDataSource.getRepository(CommandePiece);

        // Ajout des modèles de moto
        const streetTriple = modeleMotoRepository.create({
            nom: 'Street Triple',
            entretienIntervalKm: 10000,
            entretienIntervalTemps: 12,
        });

        const tigerSport = modeleMotoRepository.create({
            nom: 'Tiger Sport 660',
            entretienIntervalKm: 16000,
            entretienIntervalTemps: 12,
        });

        await modeleMotoRepository.save([streetTriple, tigerSport]);

        // Ajout des motos avec les nouvelles propriétés requises
        const moto1 = motoRepository.create({
            vin: 'VIN1234567890',
            modele: streetTriple,
            kilometrage: 5000,
            intervalleEntretienKm: streetTriple.entretienIntervalKm,
            intervalleEntretienTemps: streetTriple.entretienIntervalTemps,
        });

        const moto2 = motoRepository.create({
            vin: 'VIN0987654321',
            modele: tigerSport,
            kilometrage: 16000,
            intervalleEntretienKm: tigerSport.entretienIntervalKm,
            intervalleEntretienTemps: tigerSport.entretienIntervalTemps,
        });

        await motoRepository.save([moto1, moto2]);

        // Ajout des conducteurs
        const conducteur1 = conducteurRepository.create({
            nom: 'John Doe',
            permis: 'A',
            experience: 5,
        });

        const conducteur2 = conducteurRepository.create({
            nom: 'Jane Smith',
            permis: 'A',
            experience: 2,
        });

        await conducteurRepository.save([conducteur1, conducteur2]);

        // Ajout des entretiens
        const entretien1 = entretienRepository.create({
            moto: moto1,
            date: new Date(),
            description: 'Changement d’huile et filtre',
            piecesChangees: ['Filtre à huile', 'Huile moteur'],
            coutTotal: 150,
            recommandations: 'Vérifier la pression des pneus',
        });

        const entretien2 = entretienRepository.create({
            moto: moto2,
            date: new Date(),
            description: 'Révision des 16000 km',
            piecesChangees: ['Bougies', 'Filtre à air'],
            coutTotal: 250,
            recommandations: 'Prochain entretien dans 5000 km',
        });

        await entretienRepository.save([entretien1, entretien2]);

        // Ajout des pièces détachées avec les valeurs requises
        const piece1 = pieceDetacheeRepository.create({
            nom: 'Filtre à huile',
            prix: 15.99,  // Assurez-vous que cette valeur est bien présente
            stock: 100,
            seuilCritique: 10,
        });

        const piece2 = pieceDetacheeRepository.create({
            nom: 'Bougies',
            prix: 5.49,  // Assurez-vous que cette valeur est bien présente
            stock: 50,
            seuilCritique: 5,
        });

        await pieceDetacheeRepository.save([piece1, piece2]);

        // Ajout des commandes de pièces
        const commande1 = commandePieceRepository.create({
            piece: piece1,
            dateCommande: new Date(),
            quantite: 20,
            coutTotal: 200,
            dateLivraisonEstimee: new Date(new Date().setDate(new Date().getDate() + 7)),
        });

        const commande2 = commandePieceRepository.create({
            piece: piece2,
            dateCommande: new Date(),
            quantite: 10,
            coutTotal: 100,
            dateLivraisonEstimee: new Date(new Date().setDate(new Date().getDate() + 10)),
        });

        await commandePieceRepository.save([commande1, commande2]);

        console.log('Données insérées avec succès.');
    } catch (error) {
        console.error("Erreur lors de l'insertion des données :", error);
    } finally {
        await AppDataSource.destroy();
        process.exit();
    }
}

seed();
