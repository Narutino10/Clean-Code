// src/components/PlanifierEntretiens.tsx

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
    <div>
      <h2>Planifier des Entretiens</h2>
      <button onClick={handlePlanifier}>Planifier</button>
    </div>
  );
};

export default PlanifierEntretiens;
