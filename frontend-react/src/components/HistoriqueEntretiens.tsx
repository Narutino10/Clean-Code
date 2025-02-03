import React, { useState, useEffect } from 'react';
import { getEntretiens } from '../services/entretienService';
import '../styles/HistoriqueEntretiens.css';
import { validate as isUuid } from 'uuid'; // Importer la validation UUID

const HistoriqueEntretiens: React.FC<{ motoId: string }> = ({ motoId }) => {
  const [entretiens, setEntretiens] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEntretiens = async () => {
      if (!motoId || !isUuid(motoId)) { 
        setError("ID de moto invalide. Veuillez réessayer.");
        setLoading(false);
        return;
      }

      try {
        const data = await getEntretiens(motoId);
        setEntretiens(data);
      } catch (error: any) {
        setError("Impossible de récupérer les entretiens.");
      } finally {
        setLoading(false);
      }
    };

    fetchEntretiens();
  }, [motoId]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="historique-entretiens">
      <h1>Historique des Entretiens</h1>
      {entretiens.length > 0 ? (
        <ul>
          {entretiens.map((entretien) => (
            <li key={entretien.id}>
              {entretien.moto?.modele || "Modèle inconnu"} - {new Date(entretien.date).toLocaleDateString()} : {entretien.description}
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
