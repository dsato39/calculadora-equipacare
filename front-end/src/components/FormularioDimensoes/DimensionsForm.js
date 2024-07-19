import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./DimensionsForm.module.css";

const DimensionsForm = () => {
  const [campos, setCampos] = useState({
    quant_salas_cirurgicas: "",
    quant_cirurgia_sala_dia: "",
    process_tecidos: "",
    quant_dias_semana: "",
    interv_pico: "",
    leitos_uti: "",
    leitos_internacao: "",
    leitos_rpa: "",
    leitos_observacao: "",
    leitos_hospdia: "",
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

    const processTecidos = campos.process_tecidos === "Sim" ? 1 : 0;

    const dataToSend = {
      quant_salas_cirurgicas: campos.quant_salas_cirurgicas,
      quant_cirurgia_sala_dia: campos.quant_cirurgia_sala_dia,
      process_tecidos: processTecidos,
      quant_dias_semana: campos.quant_dias_semana,
      interv_pico: campos.interv_pico,
      leitos_uti: campos.leitos_uti,
      leitos_internacao: campos.leitos_internacao,
      leitos_rpa: campos.leitos_rpa,
      leitos_observacao: campos.leitos_observacao,
      leitos_hospdia: campos.leitos_hospdia,
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
          quant_cirurgia_sala_dia: "",
          process_tecidos: "",
          quant_dias_semana: "",
          interv_pico: "",
          leitos_uti: "",
          leitos_internacao: "",
          leitos_rpa: "",
          leitos_observacao: "",
          leitos_hospdia: "",
        });

        navigate("/calculation", {
          state: { id_cliente: localStorage.getItem("leadId") },
        });
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
            name="quant_cirurgia_sala_dia"
            placeholder="Quantidade de cirurgias diárias por sala"
            type="number"
            value={campos.quant_cirurgia_sala_dia}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Processamento de tecidos?</label>
          <select
            className={style.input}
            name="process_tecidos"
            value={campos.process_tecidos}
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
            name="interv_pico"
            placeholder="Qual intervalo de pico de funcionamento da CME?"
            type="number"
            value={campos.interv_pico}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Quantidade de leitos UTI</label>
          <input
            className={style.input}
            name="leitos_uti"
            placeholder="Quantidade de leitos UTI"
            type="number"
            value={campos.leitos_uti}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Quantidade de leitos internação</label>
          <input
            className={style.input}
            name="leitos_internacao"
            placeholder="Quantidade de leitos internação"
            type="number"
            value={campos.leitos_internacao}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Quantidade de leitos RPA</label>
          <input
            className={style.input}
            name="leitos_rpa"
            placeholder="Quantidade de leitos RPA"
            type="number"
            value={campos.leitos_rpa}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Quantidade de leitos observações</label>
          <input
            className={style.input}
            name="leitos_observacao"
            placeholder="Quantidade de leitos observações"
            type="number"
            value={campos.leitos_observacao}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Quantidade de leitos Hospital Dia</label>
          <input
            className={style.input}
            name="leitos_hospdia"
            placeholder="Quantidade de leitos Hospital Dia"
            type="number"
            value={campos.leitos_hospdia}
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
