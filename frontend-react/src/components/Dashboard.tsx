import React, { useEffect, useState } from 'react';
import { getAllMotos } from '../services/motoService';
import { getAllPieces } from '../services/pieceService';
import { getAllEntretiens } from '../services/entretienService';

const Dashboard: React.FC = () => {
  const [motoCount, setMotoCount] = useState(0);
  const [pieceCount, setPieceCount] = useState(0);
  const [entretienCount, setEntretienCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const motos = await getAllMotos();
      const pieces = await getAllPieces();
      const entretiens = await getAllEntretiens();

      setMotoCount(motos.length);
      setPieceCount(pieces.length);
      setEntretienCount(entretiens.length);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Tableau de Bord</h1>
      <div>
        <p>Total Motos: {motoCount}</p>
        <p>Total Pièces: {pieceCount}</p>
        <p>Total Entretiens: {entretienCount}</p>
      </div>
    </div>
  );
};

export default Dashboard;
