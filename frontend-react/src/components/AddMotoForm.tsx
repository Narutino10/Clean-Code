import React, { useEffect, useState } from 'react';
import { createMoto, getAllModeles } from '../services/motoService';

const AddMotoForm: React.FC = () => {
  const [modeles, setModeles] = useState<any[]>([]);
  const [modeleId, setModeleId] = useState('');
  const [kilometrage, setKilometrage] = useState(0);
  const [dateDernierEntretien, setDateDernierEntretien] = useState('');

  useEffect(() => {
    const fetchModeles = async () => {
      const data = await getAllModeles();
      setModeles(data);
    };
    fetchModeles();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createMoto({ modele: modeleId, kilometrage, dateDernierEntretien: new Date(dateDernierEntretien) });
      alert('Moto ajoutée avec succès !');
    } catch (error) {
      alert('Erreur lors de l\'ajout de la moto');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter une Moto</h2>
      <div>
        <label>Modèle :</label>
        <select value={modeleId} onChange={(e) => setModeleId(e.target.value)}>
          <option value="">Sélectionner un modèle</option>
          {modeles.map((modele) => (
            <option key={modele.id} value={modele.id}>
              {modele.nom}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Kilométrage :</label>
        <input type="number" value={kilometrage} onChange={(e) => setKilometrage(Number(e.target.value))} />
      </div>
      <div>
        <label>Date du dernier entretien :</label>
        <input type="date" value={dateDernierEntretien} onChange={(e) => setDateDernierEntretien(e.target.value)} />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddMotoForm;
