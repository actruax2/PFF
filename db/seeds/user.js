const { default: knex } = require('knex');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function seed(knex) {
  return knex('user')
    .del() // Deletes ALL existing entries
    .then(() => knex('user').insert([
      { id: 1, name: 'Alice', email: 'alice@anaddress.com' },
      { id: 2, name: 'Bob', email: 'bob@email.com' },
      { id: 3, name: 'Charlie', email: 'chuck@something.com' },
    ]));
};
