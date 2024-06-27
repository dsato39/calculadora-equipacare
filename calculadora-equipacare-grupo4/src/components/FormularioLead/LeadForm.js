import { useNavigate } from "react-router-dom";
import style from "./LeadForm.module.css";
import React, { useState } from "react";

const LeadForm = ({ onSubmit }) => {
  const [campos, setCampos] = useState({
    nome: "",
    email: "",
    celular: "",
    cargo_contato: "",
    hospital: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !campos.nome ||
      !campos.email ||
      !campos.celular ||
      !campos.cargo_contato ||
      !campos.hospital ||
      !campos.cnpj_hospital ||
      !campos.cep_hospital ||
      !campos.status_empreend ||
      !campos.eng_clinica ||
      !campos.cme
    ) {
      setMensagem("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (typeof onSubmit === "function") {
      onSubmit(campos);
      setCampos({
        nome: "",
        email: "",
        celular: "",
        cargo_contato: "",
        hospital: "",
        cnpj_hospital: "",
        cep_hospital: "",
        status_empreend: "",
        eng_clinica: "",
        status_eng_clinica: "",
        suporte_eng_clinica: "",
        cme: "",
      });
      setMensagem("Formulário enviado com sucesso!");
      navigate("/formdimensoes");
    } else {
      console.log(typeof onSubmit);
    }
  };

  return (
    <div className={style.UserFormGeral}>
      {mensagem && <p>{mensagem}</p>}
      <form onSubmit={handleSubmit}>
        <div className={style.UserForm}>
          <label>Nome</label>
          <input
            name="nome"
            placeholder="Nome"
            type="text"
            value={campos.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>E-mail</label>
          <input
            name="email"
            placeholder="E-mail"
            type="email"
            value={campos.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Celular</label>
          <input
            name="celular"
            placeholder="Celular"
            type="tel"
            value={campos.celular}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Cargo</label>
          <input
            name="cargo_contato"
            placeholder="Cargo"
            type="text"
            value={campos.cargo_contato}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>Nome do hospital</label>
          <input
            name="hospital"
            placeholder="Nome do hospital"
            type="text"
            value={campos.hospital}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>CNPJ do hospital</label>
          <input
            name="cnpj_hospital"
            placeholder="CNPJ do hospital"
            type="text"
            value={campos.cnpj_hospital}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label>CEP do hospital</label>
          <input
            name="cep_hospital"
            placeholder="CEP do hospital"
            type="text"
            value={campos.cep_hospital}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.UserForm}>
          <label htmlFor="dropdown">Momento atual do empreendimento:</label>
          <select
            name="status_empreend"
            id="dropdown"
            value={campos.status_empreend}
            onChange={handleChange}
            required>
            <option value="">Selecione...</option>
            <option value="Elaboração de projetos">
              Elaboração de projetos
            </option>
            <option value="Visita técnica para avaliação diagnóstica">
              Visita técnica para avaliação diagnóstica
            </option>
            <option value="Dimensionamento e especificação técnica dos equipamentos para aquisição">
              Dimensionamento e especificação técnica dos equipamentos para
              aquisição
            </option>
            <option value="Análise técnica financeira comparativa dos equipamentos">
              Análise técnica financeira comparativa dos equipamentos
            </option>
            <option value="Comissionamento das instalações">
              Comissionamento das instalações
            </option>
            <option value="Outro momento">Outro momento</option>
          </select>
        </div>

        <div className={style.UserForm}>
          <label htmlFor="dropdown">
            Possui engenharia clínica para apoiar o processo de seleção dos
            equipamentos?
          </label>
          <select
            name="eng_clinica"
            id="dropdown"
            value={campos.eng_clinica}
            onChange={handleChange}
            required>
            <option value="">Selecione...</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>

        <div className={style.UserForm}>
          <label htmlFor="dropdown">
            Se sim: sua Engenharia Clínica é própria ou terceirizada?
          </label>
          <select
            name="status_eng_clinica"
            id="dropdown"
            value={campos.status_eng_clinica}
            onChange={handleChange}>
            <option value="">Selecione...</option>
            <option value="Própria">Própria</option>
            <option value="Terceirizada">Terceirizada</option>
          </select>
        </div>

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

        <div className={style.UserForm}>
          <label htmlFor="dropdown">
            CME (Centro de Materiais Esterelizados):
          </label>
          <select
            name="cme"
            id="dropdown"
            value={campos.cme}
            onChange={handleChange}
            required>
            <option value="">Selecione...</option>
            <option value="Novo">Novo</option>
            <option value="Substituição">Substituição</option>
            <option value="Ampliação">Ampliação</option>
          </select>
        </div>

        <button id="buttonForm" type="submit" className={style.buttonForm}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
