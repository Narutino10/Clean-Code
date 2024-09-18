import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMotoById, updateMoto } from '../services/motoService';
import '../styles/EditMotoForm.css';

const EditMotoForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [moto, setMoto] = useState<any>(null);

  useEffect(() => {
    const fetchMoto = async () => {
      const fetchedMoto = await getMotoById(id!);
      setMoto(fetchedMoto);
    };
    fetchMoto();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await updateMoto(id!, moto);
      alert('Moto mise à jour avec succès');
      navigate('/motos');
    } catch (error) {
      alert('Erreur lors de la mise à jour');
    }
  };

  if (!moto) return <p>Chargement...</p>;

  return (
    <form className="edit-moto-form" onSubmit={handleSubmit}>
      <h2>Modifier la Moto</h2>
      <div className="form-group">
        <label>Modèle :</label>
        <input type="text" value={moto.modele} onChange={(e) => setMoto({ ...moto, modele: e.target.value })} />
      </div>
      <div className="form-group">
        <label>Kilométrage :</label>
        <input type="number" value={moto.kilometrage} onChange={(e) => setMoto({ ...moto, kilometrage: parseInt(e.target.value) })} />
      </div>
      <div className="form-group">
        <label>Date du Dernier Entretien :</label>
        <input type="date" value={moto.dateDernierEntretien} onChange={(e) => setMoto({ ...moto, dateDernierEntretien: e.target.value })} />
      </div>
      <button type="submit">Modifier</button>
    </form>
  );
};

export default EditMotoForm;
