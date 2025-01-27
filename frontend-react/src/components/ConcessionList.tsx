import React, { useEffect, useState } from 'react';
import { getAllConcessions } from '../services/concessionService';

interface Concession {
  id: string;
  nom: string;
}

const ConcessionList: React.FC = () => {
  const [concessions, setConcessions] = useState<Concession[]>([]);

  useEffect(() => {
    getAllConcessions().then(setConcessions).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Liste des Concessions</h1>
      <ul>
        {concessions.map((concession) => (
          <li key={concession.id}>
            {concession.nom}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConcessionList;
