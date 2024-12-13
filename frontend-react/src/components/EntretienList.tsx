import React, { useState, useEffect } from 'react';
import { getAllEntretiens } from '../services/entretienService'; // Correction de l'import
import { Entretien } from '../interfaces/Entretien';

const EntretienList: React.FC = () => {
  const [entretiens, setEntretiens] = useState<Entretien[]>([]); // Définition du type explicite
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEntretiens = async () => {
      try {
        const data = await getAllEntretiens();
        setEntretiens(data);
      } catch (err) {
        setError('Erreur lors de la récupération des entretiens');
      }
    };
    fetchEntretiens();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Liste des Entretiens</h1>
      <ul>
        {entretiens.map((entretien) => (
          <li key={entretien.id}>
            <p>Description : {entretien.description}</p>
            <p>Coût total : {entretien.coutTotal} €</p>
            <p>Date : {new Date(entretien.date).toLocaleDateString()}</p>
            <p>Recommandations : {entretien.recommandations || 'Aucune'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntretienList;
