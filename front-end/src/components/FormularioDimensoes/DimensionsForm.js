import { useNavigate } from "react-router-dom";
import style from "./LeadForm.module.css";
import React, { useState } from "react";
import axios from "axios";

const LeadForm = () => {
  const [campos, setCampos] = useState({
    nome: "",
    email: "",
    celular: "",
    cargo: "",
    nome_hospital: "",
    cnpj_hospital: "",
    cep_hospital: "",
    status_empreend: "",
    eng_clinica: "",
    status_eng_clinica: "",
    suporte_eng_clinica: "",
    cme: "",
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
    console.log("Submitting form", campos);

    if (
      !campos.nome ||
      !campos.email ||
      !campos.celular ||
      !campos.cargo ||
      !campos.nome_hospital ||
      !campos.cnpj_hospital ||
      !campos.cep_hospital ||
      !campos.status_empreend ||
      !campos.eng_clinica ||
      !campos.cme
    ) {
      setMensagem("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/", campos, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const generatedId = response.data.id;
        localStorage.setItem("leadId", generatedId);
        setMensagem("Formulário enviado com sucesso!");
        setCampos({
          nome: "",
          email: "",
          celular: "",
          cargo: "",
          nome_hospital: "",
          cnpj_hospital: "",
          cep_hospital: "",
          status_empreend: "",
          eng_clinica: "",
          status_eng_clinica: "",
          suporte_eng_clinica: "",
          cme: "",
        });
        navigate("/formdimensoes");
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
        {[
          { label: "Nome", name: "nome", type: "text", required: true },
          { label: "E-mail", name: "email", type: "email", required: true },
          { label: "Celular", name: "celular", type: "tel", required: true },
          { label: "Cargo", name: "cargo", type: "text", required: true },
          {
            label: "Nome do hospital",
            name: "nome_hospital",
            type: "text",
            required: true,
          },
          {
            label: "CNPJ do hospital",
            name: "cnpj_hospital",
            type: "text",
            required: true,
          },
          {
            label: "CEP do hospital",
            name: "cep_hospital",
            type: "text",
            required: true,
          },
        ].map(({ label, name, type, required }) => (
          <div key={name} className={style.UserForm}>
            <label>{label}</label>
            <input
              name={name}
              placeholder={label}
              type={type}
              value={campos[name]}
              onChange={handleChange}
              required={required}
            />
          </div>
        ))}

        {[
          {
            label: "Momento atual do empreendimento",
            name: "status_empreend",
            options: [
              "Elaboração de projetos",
              "Visita técnica para avaliação diagnóstica",
              "Dimensionamento e especificação técnica dos equipamentos para aquisição",
              "Análise técnica financeira comparativa dos equipamentos",
              "Comissionamento das instalações",
              "Outro momento",
            ],
            required: true,
          },
          {
            label:
              "Possui engenharia clínica para apoiar o processo de seleção dos equipamentos?",
            name: "eng_clinica",
            options: ["Sim", "Não"],
            required: true,
          },
          {
            label: "Se sim: sua Engenharia Clínica é própria ou terceirizada?",
            name: "status_eng_clinica",
            options: ["Própria", "Terceirizada"],
          },
          {
            label: "CME (Centro de Materiais Esterelizados)",
            name: "cme",
            options: ["Novo", "Substituição", "Ampliação"],
            required: true,
          },
        ].map(({ label, name, options, required }) => (
          <div key={name} className={style.UserForm}>
            <label htmlFor="dropdown">{label}</label>
            <select
              name={name}
              id="dropdown"
              value={campos[name]}
              onChange={handleChange}
              required={required}>
              <option value="">Selecione...</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}

        <div className={style.UserForm}>
          <label>
            Do que sente mais falta no suporte da engenharia clinica?
          </label>
          <input
            name="suporte_eng_clinica"
            placeholder="Do que sente mais falta no suporte da engenharia clinica?"
            type="text"
            value={campos.suporte_eng_clinica}
            onChange={handleChange}
          />
        </div>

        <button id="buttonForm" type="submit" className={style.buttonForm}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
