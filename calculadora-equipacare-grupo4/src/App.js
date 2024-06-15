import React, { useState } from 'react';
import UserForm from './componentsFront/UserForm';
import Navbar from './componentsFront/NavBar'; 
import Button from './componentsFront/Button'; 
import Footer from './componentsFront/Footer';
import ButtonCheckbox from './componentsFront/ButtonCheckbox';
import Banner from './componentsFront/Banner/Banner';
import Calculadora from './componentsFront/Calculadora/calculadora';
import Beneficio from './componentsFront/Beneficio/beneficio';



function App() {
  const [mensagem, setMensagem] = useState('');

  const onSubmit = (data) => {
    // Lógica para lidar com o envio do formulário
    console.log('Dados do formulário:', data);
    setMensagem('Formulário enviado com sucesso!');
  };

  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <Calculadora/>
      <Beneficio /> 
      <UserForm onSubmit={onSubmit} />
      <ButtonCheckbox />
      <Button onClick={onSubmit} />
     
      <Footer />
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default App;