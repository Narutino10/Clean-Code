import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/motos">Liste des Motos</Link></li>
        <li><Link to="/add-moto">Ajouter Moto</Link></li>
        <li><Link to="/entretiens">Historique Entretiens</Link></li>
        <li><Link to="/planifier-entretiens">Planifier Entretiens</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
