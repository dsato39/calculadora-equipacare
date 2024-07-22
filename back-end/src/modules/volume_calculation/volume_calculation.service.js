import knex from "../../services/knex.js";

export const saveVolumeCalculation = async (calculationData) => {
  try {
    const [insertedRow] = await knex("volume_calculation").insert(
      calculationData
    );
    return insertedRow;
  } catch (error) {
    throw new Error(`Erro ao salvar os cálculos: ${error.message}`);
  }
};
