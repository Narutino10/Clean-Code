import React, { useState } from 'react';
import { createPiece } from '../services/pieceDetacheeService';
import '../styles/AddPieceForm.css';

const AddPieceForm: React.FC = () => {
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [seuilCritique, setSeuilCritique] = useState<number>(0);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await createPiece({ nom, prix, stock, seuilCritique });
      alert('Pièce ajoutée avec succès !');
      setNom('');
      setPrix(0);
      setStock(0);
      setSeuilCritique(0);
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'ajout de la pièce.");
    }
  };

  return (
    <form className="add-piece-form" onSubmit={handleSubmit}>
      <h2>Ajouter une Pièce Détachée</h2>
      <div className="form-group">
        <label>Nom :</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Prix :</label>
        <input
          type="number"
          value={prix}
          onChange={(e) => setPrix(parseFloat(e.target.value))}
          required
        />
      </div>
      <div className="form-group">
        <label>Stock :</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(parseInt(e.target.value))}
          required
        />
      </div>
      <div className="form-group">
        <label>Seuil Critique :</label>
        <input
          type="number"
          value={seuilCritique}
          onChange={(e) => setSeuilCritique(parseInt(e.target.value))}
          required
        />
      </div>
      <button type="submit">Ajouter la Pièce</button>
    </form>
  );
};

export default AddPieceForm;
