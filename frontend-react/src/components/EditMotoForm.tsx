import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate  } from 'react-router-dom';

interface Moto {
  modele: string;
  kilometrage: number;
  dateDernierEntretien: string;
}

const EditMotoForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useNavigate ();
  const [moto, setMoto] = useState<Moto>({
    modele: '',
    kilometrage: 0,
    dateDernierEntretien: '',
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/motos/${id}`)
      .then(response => setMoto(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMoto({
      ...moto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/motos/${id}`, moto);
      alert('Moto mise à jour avec succès');
      history.push('/motos');
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

      <button type="submit">Mettre à jour la moto</button>
    </form>
  );
};

export default EditMotoForm;
