/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("lavadoras_termo", (table) => {
    table.bigIncrements("id");
    table.string("marca");
    table.string("modelo");
    table.integer("capacidade_bandejas");
    table.integer("capacidade_traqueias");
    table.integer("tempo_ciclo");
    table.integer("quant_bandejas_ue");
    table.integer("intervalo_ciclos");
    table.integer("quantidade_traqueias_cirurgia");
    table.integer("quantidade_traqueias_leitodia");
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
  return knex.schema.dropTable("lavadoras_termo");
};
