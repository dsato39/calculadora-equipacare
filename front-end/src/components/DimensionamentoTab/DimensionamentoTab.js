import React from "react";
import style from "./DimensionamentoTab.module.css";
import fakeAutoclaveData from "../../data/autoclavesteste.json";

// import style from "./Dimensionamento.module.css";

const DimensionamentoTab = () => {
  return (
    <div className={style.tabelaGeral}>
      <table className={style.tabela}>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {fakeAutoclaveData.map((objeto, index) => (
            <tr key={index}>
              <td>{objeto.marca}</td>
              <td>{objeto.modelo}</td>
              <td>R$ {objeto.valor_total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DimensionamentoTab;
