import React, { useState, useEffect } from "react";
import style from "./Beneficio.module.css";
import iconePlanejamento from "../../Imagens/Icones/iconePlanejamento.svg";
import iconeResultado from "../../Imagens/Icones/iconeResultado.svg";
import iconeFacilidadedeUso from "../../Imagens/Icones/IconeFacilidadeUso.svg";
import iconeConformidade from "../../Imagens/Icones/iconeConformidade.svg";

const Beneficio = () => {
  const [titulo, setTitulo] = useState("");
  const tituloOriginal = "Benefícios da Nossa Calculadora";
  const tempoDeEspera = 100; 
  const tempoDeEsperaApagar = 1500; 

  useEffect(() => {
    let isMounted = true;
    const textoAlvo = tituloOriginal + " ";

    const typeAndErase = () => {
      let currentText = "";
      let eraseText = false;
      
      const type = () => {
        if (isMounted) {
          if (!eraseText && currentText.length < textoAlvo.length) {
            currentText = textoAlvo.substring(0, currentText.length + 1);
            setTitulo(currentText);
            setTimeout(type, tempoDeEspera);
          } else {
            eraseText = true;
            setTimeout(erase, tempoDeEsperaApagar);
          }
        }
      };

      const erase = () => {
        if (isMounted) {
          if (currentText.endsWith("Benefícios ")) {
            eraseText = false;
            setTimeout(type, tempoDeEspera);
          } else {
            if (currentText.length > 0) {
              currentText = currentText.substring(0, currentText.length - 1);
              setTitulo(currentText);
              setTimeout(erase, tempoDeEspera / 2);
            } else {
              eraseText = false;
              setTimeout(type, tempoDeEspera);
            }
          }
        }
      };

      type();
    };

    typeAndErase();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={style.Beneficio}>
      <div className={style.titulo}>
        <h1>{titulo}</h1>
      </div>
      <div className={style.texto}>
        <div className={style.beneficio}>
          <img src={iconePlanejamento} alt="Planejamento" />
          <h2>Planejamento Eficiente</h2>
          <p className={style.texto1}>
            Obtenha uma análise completa das suas necessidades de equipamentos
            de esterilização, baseada em dados específicos do seu projeto
          </p>
        </div>
        <div className={style.beneficio}>
          <img src={iconeResultado} alt="Resultado" />
          <h2>Resultados Personalizados</h2>
          <p>
            Nossa calculadora gera um relatório detalhado com a quantidade de
            equipamentos e as marcas que melhor atendem às suas necessidades
          </p>
        </div>
        <div className={style.beneficio}>
          <img src={iconeFacilidadedeUso} alt="Facilidade" />
          <h2>Facilidade de Uso</h2>
          <p>
            Interface amigável e intuitiva, projetada para facilitar o uso por
            profissionais de saúde e administradores hospitalares
          </p>
        </div>
        <div className={style.beneficio}>
          <img src={iconeConformidade} alt="Conformidade" />
          <h2>Conformidade e Segurança Avançada</h2>
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