import React from 'react';
import style from './button.module.css'
const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={style.button}>
      Enviar Formulário
    </button>
  );
};

export default Button;