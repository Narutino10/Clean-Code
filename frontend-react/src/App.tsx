import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MotoList from './components/MotoList';
import HistoriqueEntretiens from './components/HistoriqueEntretiens';
import PlanifierEntretiens from './components/PlanifierEntretiens';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div>
          <h1>Application de Gestion de Motos</h1>
          <Routes>
            <Route path="/" element={<MotoList />} />
            <Route path="/historique" element={<HistoriqueEntretiens />} />
            <Route path="/planifier" element={<PlanifierEntretiens />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
