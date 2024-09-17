import React, { useEffect, useState } from 'react';
import { Entretien } from '../interfaces/Entretien';
import { getEntretiens } from '../services/motoService';

const HistoriqueEntretiens: React.FC = () => {
  const [entretiens, setEntretiens] = useState<Entretien[]>([]);

  useEffect(() => {
    const fetchEntretiens = async () => {
      try {
        const data = await getEntretiens('moto-id'); // Remplacer par l'ID réel
        setEntretiens(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des entretiens :', error);
      }
    };
    fetchEntretiens();
  }, []);

  return (
    <div>
      <h2>Historique des Entretiens</h2>
      {entretiens.map(entretien => (
        <div key={entretien.id}>
          <p>Date : {new Date(entretien.date).toLocaleDateString()}</p>
          <p>Description : {entretien.description}</p>
          <p>Pièces changées : {entretien.piecesChangees.join(', ')}</p>
          <p>Coût total : {entretien.coutTotal} €</p>
          <p>Recommandations : {entretien.recommandations}</p>
        </div>
      ))}
    </div>
  );
};

export default HistoriqueEntretiens;
