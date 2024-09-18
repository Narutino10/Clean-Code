import React, { useState } from 'react';
import { createMoto } from '../services/motoService';
import '../styles/AddMotoForm.css';

const AddMotoForm: React.FC = () => {
  const [modele, setModele] = useState('');
  const [kilometrage, setKilometrage] = useState(0);
  const [dateDernierEntretien, setDateDernierEntretien] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createMoto({ modele, kilometrage, dateDernierEntretien: new Date(dateDernierEntretien) });
      alert('Moto ajoutée avec succès !');
    } catch (error) {
      alert('Erreur lors de l\'ajout de la moto');
    }
  };

  return (
    <form className="add-moto-form" onSubmit={handleSubmit}>
      <h2>Ajouter une Moto</h2>
      <div className="form-group">
        <label>Modèle :</label>
        <input type="text" value={modele} onChange={(e) => setModele(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Kilométrage :</label>
        <input type="number" value={kilometrage} onChange={(e) => setKilometrage(parseInt(e.target.value))} />
      </div>
      <div className="form-group">
        <label>Date du Dernier Entretien :</label>
        <input type="date" value={dateDernierEntretien} onChange={(e) => setDateDernierEntretien(e.target.value)} />
      </div>
      <button type="submit">Ajouter Moto</button>
    </form>
  );
};

export default AddMotoForm;
