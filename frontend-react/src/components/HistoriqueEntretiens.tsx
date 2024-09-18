import React, { useState, useEffect } from 'react';
import { getEntretiens } from '../services/entretienService';
import '../styles/HistoriqueEntretiens.css';

const HistoriqueEntretiens: React.FC<{ motoId: string }> = ({ motoId }) => {
  const [entretiens, setEntretiens] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntretiens = async () => {
      const data = await getEntretiens(motoId);
      setEntretiens(data);
      setLoading(false);
    };
    fetchEntretiens();
  }, [motoId]);

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="historique-entretiens">
      <h1>Historique des Entretiens</h1>
      {entretiens.length > 0 ? (
        <ul>
          {entretiens.map((entretien) => (
            <li key={entretien.id}>
              {entretien.moto.modele} - {entretien.date} : {entretien.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun entretien enregistré</p>
      )}
    </div>
  );
};

export default HistoriqueEntretiens;