import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MotoList from './components/MotoList';
import AddMotoForm from './components/AddMotoForm';
import EditMotoForm from './components/EditMotoForm';
import HistoriqueEntretiens from './components/HistoriqueEntretiens';
import PlanifierEntretiens from './components/PlanifierEntretiens';
import Navbar from './components/Navbar';
import PieceList from './components/PieceList';
import AddPieceForm from './components/AddPieceForm';
import EntretienList from './components/EntretienList';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MotoList />} />
          <Route path="/motos" element={<MotoList />} />
          <Route path="/add-moto" element={<AddMotoForm />} />
          <Route path="/edit-moto/:id" element={<EditMotoForm />} />
          <Route path="/entretiens" element={<HistoriqueEntretiens motoId="1" />} />
          <Route path="/planifier-entretiens" element={<PlanifierEntretiens />} />
          <Route path="/pieces" element={<PieceList />} /> 
          <Route path="/add-piece" element={<AddPieceForm />} /> 
          <Route path="/entretiens" element={<EntretienList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
