import React, { useState } from 'react';
import './App.css';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';

function App() {
  const [listaUsuarios, setListaUsuarios] = useState<{ nome: string, email: string }[]>([]);
  return (
    <div className="App">
      <Formulario setListaUsuarios={setListaUsuarios}/>
      <Lista
        listaUsuarios={listaUsuarios}
      />
    </div>
  );
}

export default App;
