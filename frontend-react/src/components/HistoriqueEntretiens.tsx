import React, { useEffect, useState } from 'react';
import { getEntretiens } from '../services/entretienService';
import { Entretien } from '../interfaces/Entretien';

const HistoriqueEntretiens: React.FC = () => {
  const [entretiens, setEntretiens] = useState<Entretien[]>([]);

  useEffect(() => {
    const fetchEntretiens = async () => {
      const data = await getEntretiens('moto-id'); // Remplacer par l'ID réel
      setEntretiens(data);
    };
    fetchEntretiens();
  }, []);

  return (
    <div>
      <h2>Historique des entretiens</h2>
      {entretiens.map((entretien) => (
        <div key={entretien.id}>
          <p>Date : {entretien.date.toString()}</p>
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
