import React, { useEffect, useState } from 'react';
import { Moto } from '../interfaces/Moto';
import { getAllMotos } from '../services/motoService';

const MotoList: React.FC = () => {
  const [motos, setMotos] = useState<Moto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

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

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Liste des motos</h2>
      <ul>
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
