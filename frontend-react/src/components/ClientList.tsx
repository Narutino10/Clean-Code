import React, { useEffect, useState } from 'react';
import { getAllClients } from '../services/clientService';

interface Client {
  id: string;
  nom: string;
}

const ClientList: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    getAllClients().then(setClients).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Liste des Clients</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {client.nom}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
