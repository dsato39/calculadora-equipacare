import React from 'react';
import logo from '../Imagens/logoCompleto.svg';
import iconeFace from '../Imagens/Icones/iconeFace.svg';
import style from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <img src={logo} alt="LogoEquipacare" className={style.logo} />
      
            
            <p>Home</p>
        </div>
    );
};

export default Navbar;