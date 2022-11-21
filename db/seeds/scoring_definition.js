const { default: knex } = require('knex');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function seed(knex) {
  return knex('scoringDefinition')
    .del() // Deletes ALL existing entries
    .then(() => knex('scoringDefinition').insert([
      { id: 1, scoringType: 'PaYd' },
      { id: 2, scoringType: 'PaTD' },
      { id: 3, scoringType: 'Pa2Pt' },
      { id: 4, scoringType: 'RuYd' },
      { id: 5, scoringType: 'RuTD' },
      { id: 6, scoringType: 'Ru2Pt' },
      { id: 7, scoringType: 'ReYd' },
      { id: 8, scoringType: 'ReTD' },
      { id: 9, scoringType: 'Re2Pt' },
      { id: 10, scoringType: 'PAT' },
      { id: 11, scoringType: 'FG' },
      { id: 12, scoringType: 'Sack' },
      { id: 13, scoringType: 'Int' },
      { id: 14, scoringType: 'DTD' },
      { id: 15, scoringType: 'DSO' },
    ]));
};
