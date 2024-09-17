import React from 'react';
import { planifierEntretiens } from '../services/motoService';

const PlanifierEntretiens: React.FC = () => {
  const handlePlanifier = async () => {
    try {
      await planifierEntretiens('moto-id'); // Remplacer par l'ID réel
      alert('Entretiens planifiés avec succès');
    } catch (error) {
      console.error('Erreur :', error);
    }
  };

  return (
    <button onClick={handlePlanifier}>Planifier les entretiens</button>
  );
};

export default PlanifierEntretiens;