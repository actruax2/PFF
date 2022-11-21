const { default: knex } = require('knex');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function seed(knex) {
  return knex('position')
    .del() // Deletes ALL existing entries
    .then(() => knex('position').insert([
      { posAbr: 'QB' },
      { posAbr: 'RB' },
      { posAbr: 'WR' },
      { posAbr: 'TE' },
      { posAbr: 'K' },
      { posAbr: 'D' },
    ]));
};
