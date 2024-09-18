import React, { useEffect, useState } from 'react';
import { getAllMotos } from '../services/motoService';
import '../styles/MotoList.css';

const MotoList: React.FC = () => {
  const [motos, setMotos] = useState<any[]>([]);
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
    <div className="moto-list">
      <h1>Liste des Motos</h1>
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
