import knex from "../../services/knex.js";

export const saveDimensions = async (params) => {
  try {
    const [insertedRow] = await knex("dimensao_hosp")
      .insert(params)
      .returning("id");
    return insertedRow.id;
  } catch (error) {
    throw new Error(`Erro ao salvar as dimensões: ${error.message}`);
  }
};

export const findByDimensionId = async (id_cliente) => {
  try {
    const lead = await knex("dimensao_hosp").where({ id_cliente }).first();
    return lead;
  } catch (error) {
    throw new Error(`Erro ao buscar lead por cliente_id: ${error.message}`);
  }
};
