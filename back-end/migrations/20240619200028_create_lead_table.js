/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("lead", (table) => {
    table.bigIncrements("id");
    table.string("nome");
    table.string("email");
    table.string("celular");
    table.string("cargo");
    table.string("nome_hospital");
    table.string("cnpj_hospital");
    table.string("cep_hospital");
    table.string("status_empreend");
    table.string("eng_clinica");
    table.string("status_eng_clinica");
    table.string("suporte_eng_clinica");
    table.string("cme");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("lead");
};
