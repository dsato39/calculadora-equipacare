/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("autoclaves", (table) => {
    table.bigIncrements("id");
    table.string("marca");
    table.string("modelo");
    table.integer("volume_camara");
    table.integer("volume_util_camara");
    table.integer("tempo_ciclo");
    table.integer("tempo_teste_bd");
    table.integer("tempo_aquecimento");
    table.integer("tempo_disp_diario");
    table.float("preco_min");
    table.float("preco_max");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("autoclaves");
};
