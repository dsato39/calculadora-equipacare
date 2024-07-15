/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("dimensao_hosp", (table) => {
    table.bigIncrements("id");
    table.integer("quant_salas_cirurgicas");
    table.integer("quant_cirurgia_sala_dia");
    table.integer("process_tecidos");
    table.integer("quant_dias_semana");
    table.integer("interv_pico");
    table.integer("leitos_uti");
    table.integer("leitos_internacao");
    table.integer("leitos_rpa");
    table.integer("leitos_observacao");
    table.integer("leitos_hospdia");
    table.integer("id_cliente").references("id").inTable("lead");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("dimensao_hosp");
};
