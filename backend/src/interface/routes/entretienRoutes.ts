import { Router } from 'express';
import { EntretienRepository } from '../../application/repositories/EntretienRepository';
import { TypeORMEntretienRepository } from '../../infrastructure/repositories/TypeORMEntretienRepository';
import { MotoRepository } from '../../application/repositories/MotoRepository';
import { TypeORMMotoRepository } from '../../infrastructure/repositories/TypeORMMotoRepository';

const entretienRoutes = Router();
const entretienRepository: EntretienRepository = new TypeORMEntretienRepository();
const motoRepository: MotoRepository = new TypeORMMotoRepository();

// Récupérer tous les entretiens
entretienRoutes.get('/', async (req, res) => {
  try {
    const entretiens = await entretienRepository.findAll();
    res.status(200).json(entretiens);
  } catch (error) {
    console.error("Erreur lors de la récupération des entretiens :", error);
    res.status(500).json({ message: "Erreur serveur lors de la récupération des entretiens" });
  }
});

// Récupérer les entretiens d'une moto spécifique
entretienRoutes.get('/moto/:motoId', async (req, res) => {
  const { motoId } = req.params;

  try {
    const entretiens = await entretienRepository.getEntretiensByMotoId(motoId);
    if (entretiens.length === 0) {
      return res.status(404).json({ message: "Aucun entretien trouvé pour cette moto" });
    }
    res.status(200).json(entretiens);
  } catch (error) {
    console.error("Erreur lors de la récupération des entretiens de la moto :", error);
    res.status(500).json({ message: "Erreur serveur lors de la récupération des entretiens de la moto" });
  }
});

    // Ajouter un nouvel entretien
    entretienRoutes.post('/', async (req, res) => {
    const { motoId, description, coutTotal, piecesChangees, date, recommandations } = req.body;
  
    try {
      const moto = await motoRepository.findById(motoId);
  
      if (!moto) {
        return res.status(404).json({ message: "Moto non trouvée" });
      }
  
      // Créer une nouvelle instance d'Entretien
      const newEntretien = entretienRepository.create({
        moto,
        description,
        coutTotal,
        piecesChangees,
        date: new Date(date),
        recommandations: recommandations || null,
      });
  
      await entretienRepository.save(newEntretien);
      res.status(201).json({ message: "Entretien ajouté avec succès", entretien: newEntretien });
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'entretien :", error);
      res.status(500).json({ message: "Erreur serveur lors de l'ajout de l'entretien" });
    }
  });
  

export default entretienRoutes;
