import React, { useState } from 'react';
import { Moto } from '../interfaces/Moto';
import { addMoto } from '../services/motoService';

const AddMotoForm: React.FC = () => {
  const [modele, setModele] = useState('');
  const [kilometrage, setKilometrage] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newMoto: Moto = {
      id: '', // L'ID sera généré par le backend
      modele,
      kilometrage,
      dateDernierEntretien: new Date(),
    };

    try {
      await addMoto(newMoto);
      // Mettre à jour la liste des motos ou afficher un message de succès
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la moto :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Modèle :</label>
        <input
          type="text"
          value={modele}
          onChange={(e) => setModele(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Kilométrage :</label>
        <input
          type="number"
          value={kilometrage}
          onChange={(e) => setKilometrage(Number(e.target.value))}
          required
        />
      </div>
      <button type="submit">Ajouter la moto</button>
    </form>
  );
};

export default AddMotoForm;
