// src/components/AddMotoForm.tsx

import React, { useState } from 'react';
import { createMoto } from '../services/motoService';

const AddMotoForm: React.FC = () => {
  const [modele, setModele] = useState('');
  const [kilometrage, setKilometrage] = useState(0);
  const [dateDernierEntretien, setDateDernierEntretien] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createMoto({
        modele,
        kilometrage,
        dateDernierEntretien: new Date(dateDernierEntretien),
      });
      alert('Moto ajoutée avec succès');
    } catch (error) {
      console.error('Erreur :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Modèle :</label>
      <input
        type="text"
        value={modele}
        onChange={(e) => setModele(e.target.value)}
      />

      <label>Kilométrage :</label>
      <input
        type="number"
        value={kilometrage}
        onChange={(e) => setKilometrage(Number(e.target.value))}
      />

      <label>Date du dernier entretien :</label>
      <input
        type="date"
        value={dateDernierEntretien}
        onChange={(e) => setDateDernierEntretien(e.target.value)}
      />

      <button type="submit">Ajouter la moto</button>
    </form>
  );
};

export default AddMotoForm;
