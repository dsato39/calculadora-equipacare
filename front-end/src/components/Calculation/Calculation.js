import React, { useEffect, useState } from "react";
import axios from "axios";

const CalculationPage = () => {
  const [id_cliente, setIdCliente] = useState(null);
  const [leadInfo, setLeadInfo] = useState(null);
  const [dimensoesInfo, setDimensoesInfo] = useState(null);

  useEffect(() => {
    const storedIdCliente = localStorage.getItem("id_cliente");
    setIdCliente(storedIdCliente);
  }, []);

  useEffect(() => {
    const dadosCliente = async () => {
      try {
        if (id_cliente) {
          const responseLead = await axios.get(
            `http://localhost:8080/leads/${id_cliente}`
          );
          setLeadInfo(responseLead.data);

          const responseDimensoes = await axios.get(
            `http://localhost:8080/dimensao_hosp/${id_cliente}`
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
    <div>
      <h1>Página de Cálculo</h1>
      {id_cliente ? (
        <div>
          <h2>Informações do Cliente</h2>
          {leadInfo ? (
            <div>
              <p>Nome: {leadInfo.nome}</p>
              <p>Email: {leadInfo.email}</p>
              {/* Adicionar mais campos conforme necessário */}
            </div>
          ) : (
            <p>Carregando informações do cliente...</p>
          )}

          <h2>Dimensões do Hospital</h2>
          {dimensoesInfo ? (
            <div>
              <p>Área total: {dimensoesInfo.area_total}</p>
              <p>Número de leitos: {dimensoesInfo.num_leitos}</p>
              {/* Adicionar mais campos conforme necessário */}
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
