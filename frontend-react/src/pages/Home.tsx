import React from 'react';
import MotoList from '../components/MotoList';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Bienvenue sur la plateforme de gestion de flotte Triumph</h1>
      <MotoList />
    </div>
  );
};

export default Home;
