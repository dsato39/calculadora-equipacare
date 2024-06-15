import React from 'react';
import logo from '../Imagens/logoCompleto.svg';

import style from './navbar.module.css';


const Navbar = () => {
    return (
        <div className={style.navbar}>
            <img src={logo} alt="LogoEquipacare" className={style.logo} />
        <div className={style.Menu}>
            <p>HOME</p> 
            <p>CURSOS</p>
            <p>A EQUIPACARE</p> 
            <p>ATENDIMENTO</p>
            <p>LOGIN</p> 
            <p>CADASTRE-SE</p>    
            <p>CALCULADORA</p>
        </div>
        
        </div>
    );
};

export default Navbar;