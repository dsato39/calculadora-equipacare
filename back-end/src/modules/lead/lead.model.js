import knex from "../../services/knex";

export const save = (params) => {
  return knex("lead").insert(params);
};
