import React from 'react';
import './styles/App.css';
import MotoList from './components/MotoList';
import AddMotoForm from './components/AddMotoForm';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Gestion des Motos</h1>
      </header>

      <section className="main-content">
        <MotoList />
        <AddMotoForm />
      </section>

      <footer className="footer">
        <p>&copy; 2024 Gestion des Motos</p>
      </footer>
    </div>
  );
}

export default App;
