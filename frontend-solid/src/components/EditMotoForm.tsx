import { createSignal, onMount, Component } from 'solid-js';
import { useParams, useNavigate } from '@solidjs/router';

interface Moto {
  modele: string;
  kilometrage: number;
  dateDernierEntretien: string;
}

const EditMotoForm: Component = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [moto, setMoto] = createSignal<Moto>({
    modele: '',
    kilometrage: 0,
    dateDernierEntretien: '',
  });

  onMount(() => {
    fetch(`${import.meta.env.VITE_API_URL}/motos/${params.id}`)
      .then(response => response.json())
      .then(data => setMoto(data))
      .catch(error => console.error(error));
  });

  const handleChange = (e: Event & { currentTarget: HTMLInputElement }) => {
    const { name, value } = e.currentTarget;
    setMoto({ ...moto(), [name]: value });
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/motos/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(moto()),
      });
      alert('Moto mise à jour avec succès');
      navigate('/motos');
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
        value={moto().modele}
        onInput={handleChange}
        required
      />

      <label>Kilométrage :</label>
      <input
        type="number"
        name="kilometrage"
        value={moto().kilometrage}
        onInput={handleChange}
        required
      />

      <label>Date du dernier entretien :</label>
      <input
        type="date"
        name="dateDernierEntretien"
        value={moto().dateDernierEntretien}
        onInput={handleChange}
        required
      />

      <button type="submit">Mettre à jour la moto</button>
    </form>
  );
};

export default EditMotoForm;
