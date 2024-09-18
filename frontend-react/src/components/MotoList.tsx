import React, { useEffect, useState } from 'react';
import { getAllMotos } from '../services/motoService';

// Définition de l'interface pour le type des motos
interface Moto {
  id: string;
  modele: string;
  kilometrage: number;
}

const MotoList: React.FC = () => {
  const [motos, setMotos] = useState<Moto[]>([]); // Spécification du type du tableau de motos
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMotos = async () => {
      try {
        const data = await getAllMotos();
        setMotos(data);
      } catch (err) {
        setError('Erreur lors de la récupération des motos');
      } finally {
        setLoading(false);
      }
    };

    fetchMotos();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Liste des Motos</h2>
      <ul className="moto-list">
        {motos.map((moto) => (
          <li key={moto.id}>
            {moto.modele} - {moto.kilometrage} km
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MotoList;
