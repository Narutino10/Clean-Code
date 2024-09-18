import React, { useState } from 'react';
import { planifierEntretiens } from '../services/motoService';
import '../styles/PlanifierEntretiens.css';

const PlanifierEntretiens: React.FC = () => {
  const [motoId, setMotoId] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await planifierEntretiens(motoId);
      alert('Entretien planifié avec succès !');
    } catch (error) {
      alert('Erreur lors de la planification de l\'entretien');
    }
  };

  return (
    <form className="planifier-entretiens-form" onSubmit={handleSubmit}>
      <h2>Planifier un Entretien</h2>
      <div className="form-group">
        <label>ID de la Moto :</label>
        <input type="text" value={motoId} onChange={(e) => setMotoId(e.target.value)} />
      </div>
      <button type="submit">Planifier</button>
    </form>
  );
};

export default PlanifierEntretiens;