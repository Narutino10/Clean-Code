import React, { useEffect, useState } from 'react';
import { getAllPieces, getLowStockPieces } from '../services//pieceDetacheeService';
import { PieceDetachee } from '../interfaces/PieceDetachee';

const PieceList: React.FC = () => {
  const [pieces, setPieces] = useState<PieceDetachee[]>([]);
  const [lowStockPieces, setLowStockPieces] = useState<PieceDetachee[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPieces = async () => {
      try {
        const allPieces = await getAllPieces();
        const lowStock = await getLowStockPieces();
        setPieces(allPieces);
        setLowStockPieces(lowStock);
      } catch (err) {
        setError('Erreur lors de la récupération des données');
      }
    };

    fetchPieces();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Liste des Pièces Détachées</h1>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.id}>
            {piece.nom} - Stock : {piece.stock} (Seuil critique : {piece.seuilCritique})
          </li>
        ))}
      </ul>
      <h2>Pièces en Stock Critique</h2>
      <ul>
        {lowStockPieces.map((piece) => (
          <li key={piece.id} style={{ color: 'red' }}>
            {piece.nom} - Stock : {piece.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PieceList;
