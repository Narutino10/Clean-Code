import { createSignal, onMount, Component } from 'solid-js';
import { useParams, useNavigate } from '@solidjs/router';

interface Moto {
  id: string;
  modele: string;
  kilometrage: number;
  dateDernierEntretien: string;
}

const MotoDetail: Component = () => {
  const params = useParams<{ id: string }>();
  const [moto, setMoto] = createSignal<Moto | null>(null);

  onMount(() => {
    fetch(`${import.meta.env.VITE_API_URL}/motos/${params.id}`)
      .then(response => response.json())
      .then(data => setMoto(data))
      .catch(error => console.error(error));
  });

  if (!moto()) return <div>Loading...</div>;

  return (
    <div>
      <h2>{moto()?.modele}</h2>
      <p>Kilométrage : {moto()?.kilometrage} km</p>
      <p>Date du dernier entretien : {moto()?.dateDernierEntretien}</p>
    </div>
  );
};

export default MotoDetail;
