import { Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { Entretien } from '../../domain/entities/Entretien';
import { validate as isUuid } from 'uuid';

export class EntretienController {
  private entretienRepository = AppDataSource.getRepository(Entretien);

  // Récupérer tous les entretiens
  public async getAllEntretiens(req: Request, res: Response): Promise<Response> {
    try {
      const entretiens = await this.entretienRepository.find({
        relations: ['moto'], // Charge les infos de la moto liée
      });
      return res.status(200).json(entretiens);
    } catch (error) {
      return res.status(500).json({ error: "Erreur lors de la récupération des entretiens" });
    }
  }

  // Récupérer les entretiens d'une moto spécifique
  public async getEntretiensByMoto(req: Request, res: Response): Promise<void> {
    try {
        const { motoId } = req.params;

        // Vérifier si l'ID est un UUID valide
        if (!isUuid(motoId)) {  
            res.status(400).json({ error: "ID de moto invalide. Veuillez réessayer." });
            return;
        }

        const entretiens = await this.entretienRepository.find({
            where: { moto: { id: motoId } },
            relations: ['moto'],
        });

        res.status(200).json(entretiens);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la récupération des entretiens de la moto" });
    }
}


  // Ajouter un nouvel entretien
  public async createEntretien(req: Request, res: Response): Promise<Response> {
    try {
      const { motoId, date, description, piecesChangees, coutTotal, recommandations } = req.body;

      if (!isUuid(motoId)) {  
        return res.status(400).json({ error: "ID de moto invalide" });
      }

      const newEntretien = this.entretienRepository.create({
        moto: { id: motoId }, // Associer l'entretien à une moto existante
        date,
        description,
        piecesChangees,
        coutTotal,
        recommandations,
      });

      await this.entretienRepository.save(newEntretien);
      return res.status(201).json(newEntretien);
    } catch (error) {
      return res.status(500).json({ error: "Erreur lors de l'ajout de l'entretien" });
    }
  }
}
