import { Link } from "react-router-dom";
import style from "./LeadForm.module.css";
import React, { useState } from "react";

const UserForm = ({ onSubmit }) => {
  const [campos, setCampos] = useState({
    nome: "",
    email: "",
    celular: "",
    hospital: "",
    cep_hospital: "",
    cme: "",
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
        nome: "",
        email: "",
        celular: "",
        hospital: "",
        cep_hospital: "",
        cme: "",
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
            type="text"
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
            type="text"
            value={campos.celular}
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
          <label>CME (Centro de Materiais Esterelizados)</label>
          <input
            name="cme"
            placeholder="Novo, substituição ou ampliação"
            type="text"
            value={campos.cme}
            onChange={handleChange}
            required
          />
        </div>
        <Link to="/formdimensoes" style={{ textDecoration: "none" }}>
          <button id="buttonFrom" type="submit" className={style.buttonForm}>
            Enviar
          </button>
        </Link>
      </form>
    </div>
  );
};

export default UserForm;
