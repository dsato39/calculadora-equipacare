import knex from "../../services/knex.js";

export const save = (params) => {
  return knex("lead").insert(params);
};
