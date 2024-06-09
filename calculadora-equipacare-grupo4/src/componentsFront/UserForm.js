import style from './userForm.module.css'
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
      setCampos({ dado1: '', dado2: '', dado3: '', dado4: '', dado5: '', dado6: '', dado7: '', dado8: ''
      });
      setMensagem('Formulário enviado com sucesso!');
    } else {
      console.error('onSubmit não é uma função válida');
    }
  };
//Campos de Formulários 
  return (
    <div>
      {mensagem && <p>{mensagem}</p>}
      <form onSubmit={handleSubmit}>
        <div className={style.UserForm}>
          <label>Dado 1:</label>
           <input name="dado1" placeholder="Digite o Dado 1" type="text" value={campos.dado1} onChange={handleChange} required/>
        </div>

        <div className={style.UserForm} >
          <label>Dado 2:</label>
           <input name="dado2" placeholder="Digite o Dado 2" type="text" value={campos.dado2} onChange={handleChange} required/>
        </div>

        <div className={style.UserForm} >
          <label>Dado 3:</label>
           <input name="dado3" placeholder="Digite o Dado 3" type="text" value={campos.dado3}onChange={handleChange}required/>
        </div>

        <div className={style.UserForm} >
          <label>Dado 4:</label>
            <input name="dado4"placeholder="Digite o Dado 4" type="text" value={campos.dado4} onChange={handleChange}required/>
        </div>

        <div className={style.UserForm} >
          <label>Dado 5:</label>
           <input name="dado5" placeholder="Digite o Dado 5" type="text" value={campos.dado5} onChange={handleChange} required/>
        </div>

        <div className={style.UserForm} >
          <label>Dado 6:</label>
           <input name="dado6" placeholder="Digite o Dado 6" type="text" value={campos.dado6} onChange={handleChange} required/>
        </div>
        
        <div className={style.UserForm} >
          <label>Dado 7:</label>
           <input name="dado7" placeholder="Digite o Dado 7" type="text" value={campos.dado7} onChange={handleChange} required/>
        </div>

        <div className={style.UserForm} >
          <label>Dado 8:</label>
           <input name="dado8" placeholder="Digite o Dado 8" type="text" value={campos.dado8} onChange={handleChange} required/>
        </div>
        <button id="buttonFrom" type="submit" className={style.buttonForm}>Enviar</button>
      </form>
    </div>
  );
};

export default UserForm;