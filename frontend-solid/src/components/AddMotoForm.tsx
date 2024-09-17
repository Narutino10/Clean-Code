import { createSignal, Component } from 'solid-js';

interface Moto {
  modele: string;
  kilometrage: number;
  dateDernierEntretien: string;
}

const AddMotoForm: Component = () => {
  const [moto, setMoto] = createSignal<Moto>({
    modele: '',
    kilometrage: 0,
    dateDernierEntretien: '',
  });

  const handleChange = (e: Event & { currentTarget: HTMLInputElement }) => {
    const { name, value } = e.currentTarget;
    setMoto({ ...moto(), [name]: value });
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/motos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(moto()),
      });
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

      <button type="submit">Ajouter la moto</button>
    </form>
  );
};

export default AddMotoForm;
