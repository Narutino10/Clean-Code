import { AppDataSource } from './data-source';
import { Moto } from './domain/entities/Moto';
import { ModeleMoto } from './domain/entities/ModeleMoto';
import { Conducteur } from './domain/entities/Conducteur';
import { Entretien } from './domain/entities/Entretien';
import { PieceDetachee } from './domain/entities/PieceDetachee';
import { CommandePiece } from './domain/entities/CommandePiece';

async function seed() {
    await AppDataSource.initialize();

    const motoRepository = AppDataSource.getRepository(Moto);
    const modeleMotoRepository = AppDataSource.getRepository(ModeleMoto);
    const conducteurRepository = AppDataSource.getRepository(Conducteur);
    const entretienRepository = AppDataSource.getRepository(Entretien);
    const pieceDetacheeRepository = AppDataSource.getRepository(PieceDetachee);
    const commandePieceRepository = AppDataSource.getRepository(CommandePiece);

    // Ajout des modèles de moto avec les valeurs pour entretienIntervalKm et entretienIntervalTemps
    const streetTriple = await modeleMotoRepository.save({ 
        nom: 'Street Triple', 
        constructeur: 'Triumph', 
        cylindree: 765,
        entretienIntervalKm: 10000, // Valeur ajoutée
        entretienIntervalTemps: 12  // Valeur ajoutée
    });

    const tigerSport = await modeleMotoRepository.save({ 
        nom: 'Tiger Sport 660', 
        constructeur: 'Triumph', 
        cylindree: 660,
        entretienIntervalKm: 16000, // Valeur ajoutée
        entretienIntervalTemps: 12  // Valeur ajoutée
    });

    // Ajout des motos
    const moto1 = await motoRepository.save({ modele: streetTriple, kilometrage: 5000, dateDernierEntretien: new Date() });
    const moto2 = await motoRepository.save({ modele: tigerSport, kilometrage: 16000, dateDernierEntretien: new Date() });

    // Ajout des conducteurs
    const conducteur1 = await conducteurRepository.save({ nom: 'John Doe', permis: 'A', experience: 5 });
    const conducteur2 = await conducteurRepository.save({ nom: 'Jane Smith', permis: 'A', experience: 2 });

    // Ajout des entretiens
    const entretien1 = await entretienRepository.save({
        moto: moto1,
        date: new Date(),
        description: 'Changement d’huile et filtre',
        piecesChangees: ['Filtre à huile', 'Huile moteur'],
        coutTotal: 150,
        recommandations: 'Vérifier la pression des pneus'
    });

    const entretien2 = await entretienRepository.save({
        moto: moto2,
        date: new Date(),
        description: 'Révision des 16000 km',
        piecesChangees: ['Bougies', 'Filtre à air'],
        coutTotal: 250,
        recommandations: 'Prochain entretien dans 5000 km'
    });

    // Ajout des pièces détachées
    const piece1 = await pieceDetacheeRepository.save({ nom: 'Filtre à huile', stock: 100 });
    const piece2 = await pieceDetacheeRepository.save({ nom: 'Bougies', stock: 50 });

    // Ajout des commandes de pièces
    const commande1 = await commandePieceRepository.save({
        piece: piece1,
        dateCommande: new Date(),
        quantite: 20,
        coutTotal: 200,
        dateLivraisonEstimee: new Date(new Date().setDate(new Date().getDate() + 7))
    });

    const commande2 = await commandePieceRepository.save({
        piece: piece2,
        dateCommande: new Date(),
        quantite: 10,
        coutTotal: 100,
        dateLivraisonEstimee: new Date(new Date().setDate(new Date().getDate() + 10))
    });

    console.log('Données insérées avec succès');
}

seed().catch(error => console.log('Erreur lors de l\'insertion des données :', error));
