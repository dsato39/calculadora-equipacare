import knex from "../../services/knex.js";

export const getFormDataByClientId = async (id_cliente) => {
  return await knex("dimensao_hosp").where({ id_cliente }).first();
};
