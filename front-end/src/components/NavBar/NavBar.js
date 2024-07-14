import React from "react";

import style from "./navbar.module.css";

const Navbar = () => {
  const logoUrl = "https://equipacare.com.br/wp-content/uploads/logo-eqpc.png"; 

  return (
    <div className={style.navbar}>
      <img src={logoUrl} alt="LogoEquipacare" className={style.logo} />
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