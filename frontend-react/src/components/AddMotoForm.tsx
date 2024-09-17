import React, { useState } from 'react';
import axios from 'axios';

interface Moto {
  modele: string;
  kilometrage: number;
  dateDernierEntretien: string;
}

const AddMotoForm: React.FC = () => {
  const [moto, setMoto] = useState<Moto>({
    modele: '',
    kilometrage: 0,
    dateDernierEntretien: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMoto({
      ...moto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/motos`, moto);
      alert('Moto ajoutée avec succès');
      setMoto({ modele: '', kilometrage: 0, dateDernierEntretien: '' });
    } catch (error) {
      console.error('Erreur :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Modèle :</label>
      <input
        type="text"
        name="modele"
        value={moto.modele}
        onChange={handleChange}
        required
      />

      <label>Kilométrage :</label>
      <input
        type="number"
        name="kilometrage"
        value={moto.kilometrage}
        onChange={handleChange}
        required
      />

      <label>Date du dernier entretien :</label>
      <input
        type="date"
        name="dateDernierEntretien"
        value={moto.dateDernierEntretien}
        onChange={handleChange}
        required
      />

      <button type="submit">Ajouter la moto</button>
    </form>
  );
};

export default AddMotoForm;