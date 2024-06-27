/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("dimensao_hosp", (table) => {
    table.bigIncrements("id");
    table.integer("quant_salas_cirurgicas");
    table.integer("quant_cirurgia_sala_dia");
    table.boolean("process_tecidos");
    table.integer("quant_dias_semana");
    table.integer("interv_pico");
    table.integer("leitos_uti");
    table.integer("leitos_outros");
    table.integer("autoclaves");
    table.integer("lavadoras_termo");
    table.integer("id_cliente").references("id").inTable("lead");
    table.string("email_cliente");
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
