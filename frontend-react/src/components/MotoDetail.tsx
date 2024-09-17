// src/components/MotoDetail.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Moto {
  id: string;
  modele: string;
  kilometrage: number;
  dateDernierEntretien: string;
}

const MotoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [moto, setMoto] = useState<Moto | null>(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/motos/${id}`)
      .then(response => setMoto(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!moto) return <div>Loading...</div>;

  return (
    <div>
      <h2>{moto.modele}</h2>
      <p>Kilométrage : {moto.kilometrage} km</p>
      <p>Date du dernier entretien : {moto.dateDernierEntretien}</p>
    </div>
  );
};

export default MotoDetail;
