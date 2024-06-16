import style from './userForm.module.css';
import React, { useState } from 'react';

const UserForm = ({ onSubmit }) => {
  const [campos, setCampos] = useState({
    dado1: '', dado2: '', dado3: '', dado4: '', dado5: '', dado6: '', dado7: '', dado8: '',
  });

  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampos({
      ...campos,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (typeof onSubmit === 'function') {
      onSubmit(campos);
      setCampos({ dado1: '', dado2: '', dado3: '', dado4: '', dado5: '', dado6: '', dado7: '', dado8: '' });
      setMensagem('Formulário enviado com sucesso!');
    } else {
      console.error('onSubmit não é uma função válida');
    }
  };

  return (
    <div className={style.UserFormGeral}>
      {mensagem && <p>{mensagem}</p>}
      <form onSubmit={handleSubmit}>
        <div className={style.UserForm}>
          <h1>Cadastre-se</h1>
          <label>Nome:</label>
          <input name="Nome" placeholder="Qual é o seu nome completo?" type="text" value={campos.nome} onChange={handleChange} required />
        </div>

        <div className={style.UserForm}>
          <label>E-mail:</label>
          <input name="E-mail" placeholder="Qual é o seu e-mail" type="text" value={campos.email} onChange={handleChange} required />
        </div>

        <div className={style.UserForm}>
          <label>Telefone:</label>
          <input name="Telefone" placeholder="Qual é o número do seu telefone?" type="text" value={campos.number} onChange={handleChange} required />
        </div>

        <button id="buttonFrom" type="submit" className={style.buttonForm}>Cadastre-se</button>
      </form>
    </div>
  );
};

export default UserForm;