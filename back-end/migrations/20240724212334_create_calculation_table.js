/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("volume_calculation", (table) => {
    table.bigIncrements("id");
    table.integer("volume_cirurgias");
    table.integer("volume_uti");
    table.integer("volume_outros");
    table.integer("volume_total_diario");
    table.integer("id_cliente").references("id").inTable("lead");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("volume_calculation");
};
