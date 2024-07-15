import { useNavigate } from "react-router-dom";
import style from "./DimensionsForm.module.css";
import React, { useState } from "react";
import axios from "axios";

const DimensionsForm = () => {
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
    email_cliente: "",
  });

  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampos({
      ...campos,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const processTecidos = campos.tecidos === "Sim" ? 1 : 0;

    const dataToSend = {
      quant_salas_cirurgicas: campos.quant_salas_cirurgicas,
      cirurgias_sala_dia: campos.cirurgias_sala_dia,
      tecidos: processTecidos,
      quant_dias_semana: campos.quant_dias_semana,
      intervalo_pico: campos.intervalo_pico,
      quant_leitos_uti: campos.quant_leitos_uti,
      quant_leitos_outros: campos.quant_leitos_outros,
      id_cliente: localStorage.getItem("leadId"),
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/dimensions",
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setMensagem("Formulário enviado com sucesso!");
        setCampos({
          quant_salas_cirurgicas: "",
          cirurgias_sala_dia: "",
          tecidos: "",
          quant_dias_semana: "",
          intervalo_pico: "",
          quant_leitos_uti: "",
          quant_leitos_outros: "",
        });
        navigate("/formresult");
      } else {
        setMensagem(`Erro: ${response.data.error}`);
      }
    } catch (error) {
      setMensagem(`Erro: ${error.message}`);
    }
  };

  return (
    <div className={style.UserFormGeral}>
      {mensagem && <p>{mensagem}</p>}
      <form onSubmit={handleSubmit}>
        {/* Campos do formulário */}
        <div className={style.UserForm}>
          <label>Quantidade de salas cirúrgicas</label>
          <input
            className={style.input}
            name="quant_salas_cirurgicas"
            placeholder="Quantidade de salas cirúrgicas"
            type="number"
            value={campos.quant_salas_cirurgicas}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Quantidade de cirurgias diárias por sala</label>
          <input
            className={style.input}
            name="cirurgias_sala_dia"
            placeholder="Quantidade de cirurgias diárias por sala"
            type="number"
            value={campos.cirurgias_sala_dia}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Processamento de tecidos?</label>
          <select
            className={style.input}
            name="tecidos"
            value={campos.tecidos}
            onChange={handleChange}
            required>
            <option value="">Selecione</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>

        <div className={style.UserForm}>
          <label>Quantos dias na semana são feitas cirurgias?</label>
          <input
            className={style.input}
            name="quant_dias_semana"
            placeholder="Quantos dias na semana são feitas cirurgias?"
            type="number"
            value={campos.quant_dias_semana}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Qual intervalo de pico de funcionamento da CME?</label>
          <input
            className={style.input}
            name="intervalo_pico"
            placeholder="Qual intervalo de pico de funcionamento da CME?"
            type="number"
            value={campos.intervalo_pico}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Quantidade de leitos UTI</label>
          <input
            className={style.input}
            name="quant_leitos_uti"
            placeholder="Quantidade de leitos UTI"
            type="number"
            value={campos.quant_leitos_uti}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Quantidade de leitos normais</label>
          <input
            className={style.input}
            name="quant_leitos_outros"
            placeholder="Quantidade de leitos UTI"
            type="number"
            value={campos.quant_leitos_outros}
            onChange={handleChange}
            required
          />
        </div>

        <button id="buttonFrom" type="submit" className={style.buttonForm}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default DimensionsForm;
