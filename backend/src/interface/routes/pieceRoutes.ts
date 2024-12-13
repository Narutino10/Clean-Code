import { Router } from 'express';
import { PieceDetacheeRepository } from '../../application/repositories/PieceDetacheeRepository';
import { AppDataSource } from '../../data-source';

const pieceRoutes = Router();
const repository = new PieceDetacheeRepository(AppDataSource);

pieceRoutes.get('/', async (req, res) => {
  try {
    const pieces = await repository.find();
    res.json(pieces);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des pièces' });
  }
});

pieceRoutes.get('/low-stock', async (req, res) => {
  try {
    const lowStockPieces = await repository.findLowStockPieces();
    res.json(lowStockPieces);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des pièces en stock critique' });
  }
});

export default pieceRoutes;
