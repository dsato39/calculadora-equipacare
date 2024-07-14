import React from "react";
import style from "./Banner.module.css";
import imgBanner from "../../Imagens/Banner.svg";

const Banner = () => {
  return (
    <div
      className={style.Banner}
      style={{
        backgroundImage: `url(${imgBanner})`,
        height: "800px",
        width: "100%",
      }}></div>
  );
};

export default Banner;
