import { Link } from "react-router-dom";
import style from "./DimensionsForm.module.css";
import React, { useState } from "react";

const DimensionsForm = ({ onSubmit }) => {
  const [campos, setCampos] = useState({
    quant_salas_cirurgicas: "",
    cirurgias_sala_dia: "",
    tecidos: "",
    quant_dias_semana: "",
    intervalo_pico: "",
    quant_leitos_uti: "",
    quant_leitos_outros: "",
    quant_autoclaves: "",
    quant_lavadoras: "",
  });

  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampos({
      ...campos,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (typeof onSubmit === "function") {
      onSubmit(campos);
      setCampos({
        quant_salas_cirurgicas: "",
        cirurgias_sala_dia: "",
        tecidos: "",
        quant_dias_semana: "",
        intervalo_pico: "",
        quant_leitos_uti: "",
        quant_leitos_outros: "",
        quant_autoclaves: "",
        quant_lavadoras: "",
      });
      setMensagem("Formulário enviado com sucesso!");
    } else {
      console.error("onSubmit não é uma função válida");
    }
  };

  // const status_cme = ["Novo", "Substituição", "Ampliação"];

  return (
    <div className={style.UserFormGeral}>
      {mensagem && <p>{mensagem}</p>}
      <form onSubmit={handleSubmit}>
        <div className={style.UserForm}>
          <label>Quantidade de salas cirúrgicas</label>
          <input className={style.input}
            name="quant_salas_cirurgicas"
            placeholder="Quantidade de salas cirúrgicas"
            type="integer"
            value={campos.quant_salas_cirurgicas}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Quantidade de cirurgias diárias por sala</label>
          <input className={style.input}
            name="cirurgias_sala_dia"
            placeholder="Quantidade de cirurgias diárias por sala"
            type="integer"
            value={campos.cirurgias_sala_dia}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Processamento de tecidos?</label>
          <input className={style.input}
            name="tecidos"
            placeholder="Sim ou Não"
            type="boolean"
            value={campos.tecidos}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Quantos dias na semana são feitas cirurgias?</label>
          <input className={style.input}
            name="quant_dias_semana"
            placeholder="Quantos dias na semana são feitas cirurgias?"
            type="integer"
            value={campos.quant_dias_semana}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Qual intervalo de pico de funcionamento da CME?</label>
          <input className={style.input}
            name="intervalo_pico"
            placeholder="Qual intervalo de pico de funcionamento da CME?"
            type="integer"
            value={campos.intervalo_pico}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Quantidade de leitos UTI</label>
          <input className={style.input}
            name="quant_leitos_uti"
            placeholder="Quantidade de leitos UTI"
            type="integer"
            value={campos.quant_leitos_uti}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Quantidade de leitos normais</label>
          <input className={style.input}
            name="quant_leitos_outros"
            placeholder="Quantidade de leitos UTI"
            type="integer"
            value={campos.quant_leitos_outros}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Número de autoclaves</label>
          <input className={style.input}
            name="quant_autoclaves"
            placeholder="Número de autoclaves"
            type="integer"
            value={campos.quant_autoclaves}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Número de lavadoras</label>
          <input className={style.input}
            name="quant_lavadoras"
            placeholder="Número de lavadoras"
            type="integer"
            value={campos.quant_lavadoras}
            onChange={handleChange}
            required
          />
        </div>

        <Link to="/dimensionamento" style={{ textDecoration: "none" }}>
          <button id="buttonFrom" type="submit" className={style.buttonForm}>
            Enviar
          </button>
        </Link>
      </form>
    </div>
  );
};

export default DimensionsForm;
