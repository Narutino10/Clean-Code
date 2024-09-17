import React, { useState } from 'react';
import { updateKilometrage } from '../services/motoService';

const UpdateKilometrageForm: React.FC = () => {
  const [kilometrage, setKilometrage] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateKilometrage('moto-id', kilometrage); // Remplacer par l'ID réel
      alert('Kilométrage mis à jour');
    } catch (error) {
      console.error('Erreur :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Kilométrage actuel :</label>
      <input
        type="number"
        value={kilometrage}
        onChange={(e) => setKilometrage(Number(e.target.value))}
      />
      <button type="submit">Mettre à jour</button>
    </form>
  );
};

export default UpdateKilometrageForm;
