import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Pagina2 from './componentsFrontPg2/Home/Pagina2';
import Conclusao from './componentsFrontPg2/Home/Conclusao';
import UserForm from './componentsFront/Formulario/UserForm';
import Navbar from './componentsFront/NavBar/NavBar';
import Banner from './componentsFront/Banner/Banner';
import Calculadora from './componentsFront/Calculadora/calculadora';
import Beneficio from './componentsFront/Beneficio/beneficio';

function App() {
  const [mensagem, setMensagem] = useState("");

  const onSubmit = (data) => {
    // Lógica para lidar com o envio do formulário
    console.log("Dados do formulário:", data);
    setMensagem("Formulário enviado com sucesso!");
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Banner />
        <Calculadora />
        <Beneficio />
        <UserForm onSubmit={onSubmit} />
        {mensagem && <p>{mensagem}</p>} 
        <nav>
          <ul>
            <li>
              <Link to="/">Pagina2</Link>
            </li>
            <li>
              <Link to="/Conclusao">Conclusao</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Pagina2 />} />
          <Route path="/Conclusao" element={<Conclusao/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;