import React, { useEffect, useState } from 'react';
import { getAllMotos } from '../services/motoService';
import '../styles/MotoList.css';
import { Moto } from '../interfaces/Moto';

const MotoList: React.FC = () => {
  const [motos, setMotos] = useState<Moto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMotos = async () => {
      try {
        const data = await getAllMotos();
        setMotos(data);
      } catch (err) {
        console.error(err);
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
      {motos.length > 0 ? (
        <ul>
          {motos.map((moto) => (
            <li key={moto.id}>
              Modèle : {moto.modele?.nom || 'Modèle non défini'} - Kilométrage : {moto.kilometrage} km
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune moto trouvée.</p>
      )}
    </div>
  );
};

export default MotoList;
