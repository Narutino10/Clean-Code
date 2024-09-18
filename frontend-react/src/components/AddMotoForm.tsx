import React, { useState } from 'react';
import { createMoto } from '../services/motoService';

const AddMotoForm: React.FC = () => {
  const [modele, setModele] = useState('');
  const [kilometrage, setKilometrage] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createMoto({ modele, kilometrage, dateDernierEntretien: new Date() });
      alert('Moto ajoutée avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la moto', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter une Moto</h2>
      <input
        type="text"
        placeholder="Modèle"
        value={modele}
        onChange={(e) => setModele(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Kilométrage"
        value={kilometrage}
        onChange={(e) => setKilometrage(Number(e.target.value))}
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddMotoForm;
