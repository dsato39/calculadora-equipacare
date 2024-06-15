import React from "react";
import style from "./Banner.module.css";
import ImagemFumdo from "../../Imagens/ImgFumdo.svg";

const Banner = () => {
  return (
    <div className={style.Banner}>
      <img src={ImagemFumdo} alt="LogoEquipacare" className={style.logo} />
    </div>
  );
};

export default Banner;
