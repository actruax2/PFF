/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function seed(knex) {
  return knex('users')
    .del() // Deletes ALL existing entries
    .then(() => knex('users').insert([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ]));
};
