import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Calculation.module.css";

const CalculationPage = () => {
  const [id_cliente, setIdCliente] = useState(null);
  const [leadInfo, setLeadInfo] = useState(null);
  const [dimensoesInfo, setDimensoesInfo] = useState(null);

  useEffect(() => {
    const storedIdCliente = localStorage.getItem("leadId");
    setIdCliente(storedIdCliente);
  }, []);

  useEffect(() => {
    const dadosCliente = async () => {
      try {
        if (id_cliente) {
          const responseLead = await axios.get(
            `http://localhost:8080/${id_cliente}`
          );
          setLeadInfo(responseLead.data);

          const responseDimensoes = await axios.get(
            `http://localhost:8080/dimensions/${id_cliente}`
          );
          setDimensoesInfo(responseDimensoes.data);
        }
      } catch (error) {
        console.error("Erro ao buscar informações do cliente:", error);
      }
    };

    dadosCliente();
  }, [id_cliente]);

  return (
    <div className={style.Calculation}>
      <h1>Página de Cálculo</h1>
      {id_cliente ? (
        <div>
          <h2>Informações do Cliente</h2>
          {leadInfo ? (
            <div>
              <p>Nome: {leadInfo.nome}</p>
              <p>Email: {leadInfo.email}</p>
              <p>Celular: {leadInfo.celular}</p>
              <p>Cargo: {leadInfo.cargo}</p>
              <p>Nome do Hospital: {leadInfo.nome_hospital}</p>
              <p>CNPJ do Hospital: {leadInfo.cnpj_hospital}</p>
              <p>CEP do Hospital: {leadInfo.cep_hospital}</p>
              <p>Status do empreendimento: {leadInfo.status_empreend}</p>
              <p>Possui engenharia clínica: {leadInfo.eng_clinica}</p>
              <p>Status engenharia clínica: {leadInfo.status_eng_clinica}</p>
              <p>
                Do que sente falta no suporte da engenharia clínica:{" "}
                {leadInfo.suporte_eng_clinica}
              </p>
              <p>CME: {leadInfo.cme}</p>
            </div>
          ) : (
            <p>Carregando informações do cliente...</p>
          )}

          <h2>Dimensões do Hospital</h2>
          {dimensoesInfo ? (
            <div>
              <p>
                Número de salas cirúrgicas:{" "}
                {dimensoesInfo.quant_salas_cirurgicas}
              </p>
              <p>
                Quantidade diária de cirurgias por sala:{" "}
                {dimensoesInfo.quant_cirurgia_sala_dia}
              </p>
              <p>Possui processamento de tecidos: {dimensoesInfo.tecidos}</p>
              <p>
                Quantidade de dias de cirurgias na semana:{" "}
                {dimensoesInfo.quant_dias_semana}
              </p>
              <p>
                Intervalo de pico de funcionamento da CME:{" "}
                {dimensoesInfo.interv_pico}
              </p>
              <p>Quantidade de leitos de UTI: {dimensoesInfo.leitos_uti}</p>
              <p>
                Quantidade de leitos de internação:{" "}
                {dimensoesInfo.leitos_internacao}
              </p>
              <p>Quantidade de leitos de RPA: {dimensoesInfo.leitos_rpa}</p>
              <p>
                Quantidade de leitos de observação:{" "}
                {dimensoesInfo.leitos_observacao}
              </p>
              <p>
                Quantidade de leitos de hospital dia:{" "}
                {dimensoesInfo.leitos_hospdia}
              </p>
            </div>
          ) : (
            <p>Carregando dimensões do hospital...</p>
          )}
        </div>
      ) : (
        <p>Cliente não especificado.</p>
      )}
    </div>
  );
};

export default CalculationPage;
