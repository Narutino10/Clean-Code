// src/App.tsx

import { Router, Route, Routes } from '@solidjs/router';
import HelloWorld from './components/HelloWorld';
import MotoList from './components/MotoList';
import AddMotoForm from './components/AddMotoForm';
import MotoDetail from './components/MotoDetail';
import EditMotoForm from './components/EditMotoForm';

const App: Component = () => {
  return (
    <Router>
      <nav>
        <a href="/hello">Hello World</a> | <a href="/motos">Liste des Motos</a> | <a href="/motos/add">Ajouter une Moto</a>
      </nav>
      <Routes>
        <Route path="/hello" component={HelloWorld} />
        <Route path="/motos" component={MotoList} />
        <Route path="/motos/add" component={AddMotoForm} />
        <Route path="/motos/:id" component={MotoDetail} />
        <Route path="/motos/:id/edit" component={EditMotoForm} />
      </Routes>
    </Router>
  );
};

export default App;
