import knex from "../../services/knex.js";

export const save = async (params) => {
  try {
    const [insertedRow] = await knex("lead").insert(params).returning("id");
    return insertedRow.id;
  } catch (error) {
    throw new Error(`Erro ao salvar o lead: ${error.message}`);
  }
};

export const findByLeadId = async (id) => {
  try {
    const lead = await knex("lead").where({ id }).first();
    return lead;
  } catch (error) {
    throw new Error(`Erro ao buscar lead por cliente_id: ${error.message}`);
  }
};
