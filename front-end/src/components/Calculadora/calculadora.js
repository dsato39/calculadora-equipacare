import React from "react";
import style from "./calculadora.module.css";
import imagemcalculadora from "./imagemCalculadora.svg";

const Calculadora = () => {
  return (
    <div className={style.calculadora}>
      <div className={style.texto}>
        <h1>Descubra</h1>
        <p>
          A calculadora CME é uma solução que avalia dados hospitalares para
          determinar a quantidade de materiais esterelizados necessários, sugerindo os equipamentos
          perfeitos para maximizar a eficiência e a conformidade da sua Central de Materiais Esterilizados
        </p>
        <p>
          Descubra como você pode revolucionar o planejamento da sua CME,
          assegurando <br />
          eficiência, qualidade e conformidade com as melhores práticas do
          setor.
        </p>
      </div>
      <img
        src={imagemcalculadora}
        alt="LogoEquipacare"
        className={style.logo}
      />
    </div>
  );
};

export default Calculadora;
