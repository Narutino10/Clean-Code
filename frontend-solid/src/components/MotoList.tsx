import { createSignal, onMount, For, Component } from 'solid-js';

interface Moto {
  id: string;
  modele: string;
  kilometrage: number;
}

const MotoList: Component = () => {
  const [motos, setMotos] = createSignal<Moto[]>([]);

  onMount(() => {
    fetch(`${import.meta.env.VITE_API_URL}/motos`)
      .then(response => response.json())
      .then(data => setMotos(data))
      .catch(error => console.error(error));
  });

  return (
    <ul>
      <For each={motos()}>
        {(moto) => (
          <li>{moto.modele} - {moto.kilometrage} km</li>
        )}
      </For>
    </ul>
  );
};

export default MotoList;
