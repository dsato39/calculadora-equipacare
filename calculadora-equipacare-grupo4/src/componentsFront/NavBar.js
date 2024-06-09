import React from 'react';
import logo from '../Imagens/logoCompleto.svg';
import iconeFace from '../Imagens/Icones/iconeFace.svg';
import style from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <img src={logo} alt="LogoEquipacare" className={style.logo} />
            <img className={style.logoFace} src={iconeFace} alt="LogoFace" />
            <p>Subtítulo</p>
            <p>Home</p>
        </div>
    );
};

export default Navbar;