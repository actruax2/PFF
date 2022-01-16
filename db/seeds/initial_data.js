/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('users')
    .del() // Deletes ALL existing entries
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Charlie'}
      ]);
    });
};
