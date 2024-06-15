import React from "react";
import style from "./Beneficio.module.css";
import iconePlanejamento from "../../Imagens/Icones/iconePlanejamento.svg";
import iconeResultado from "../../Imagens/Icones/iconeResultado.svg";
import iconeFacilidadedeUso from "../../Imagens/Icones/IconeFacilidadeUso.svg";
import iconeConformidade from "../../Imagens/Icones/iconeConformidade.svg";

const Beneficio = () => {
  return (
    <div className={style.beneficios}>
      <h1>Benefícios da Nossa Calculadora</h1>
      <div className={style.textos}>
        <div className={style.beneficio}>
          <img src={iconePlanejamento} alt="Planejamneto" />
          <h3>Planejamento Eficiente</h3>
          <p>
            Obtenha uma análise completa das suas necessidades de equipamentos
            de esterilização, baseada em dados específicos do seu projeto
          </p>
        </div>
        <div className={style.beneficio}>
          <img src={iconeResultado} alt="Resultado" />
          <h3>Resultados Personalizados</h3>
          <p>
            Nossa calculadora gera um relatório detalhado com a quantidade de
            equipamentos e as marcas que melhor atendem às suas necessidades
          </p>
        </div>
        <div className={style.beneficio}>
          <img src={iconeFacilidadedeUso} alt="Facilidade" />
          <h3>Facilidade de Uso</h3>
          <p>
            Interface amigável e intuitiva, projetada para facilitar o uso por
            profissionais de saúde e administradores hospitalares
          </p>
        </div>
        <div className={style.beneficio}>
          <img src={iconeConformidade} alt="Conformidade" />
          <h3>Conformidade e Segurança Avançada</h3>
          <p>
            Nosso relatório assegura que sua CME está em plena conformidade com
            as normas e melhores práticas de saúde, diminuindo o risco de
            infecções hospitalares e protegendo a saúde dos pacientes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Beneficio;
