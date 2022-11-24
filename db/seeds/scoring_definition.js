const { default: knex } = require('knex');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function seed(knex) {
  return knex('scoringDefinition')
    .del() // Deletes ALL existing entries
    .then(() => knex('scoringDefinition').insert([
      { id: 1, scoringType: 'PaYd', ponts: '.25' },
      { id: 2, scoringType: 'PaTD', points: '4' },
      { id: 3, scoringType: 'Pa2Pt', points: '1' },
      { id: 4, scoringType: 'RuYd', points: '1' },
      { id: 5, scoringType: 'RuTD', points: '6' },
      { id: 6, scoringType: 'Ru2Pt', points: '2' },
      { id: 7, scoringType: 'ReYd', points: '1' },
      { id: 8, scoringType: 'ReTD', points: '6' },
      { id: 9, scoringType: 'Re2Pt', points: '2' },
      { id: 10, scoringType: 'PAT', points: '1' },
      { id: 11, scoringType: 'FG_0-29', points: '2' },
      { id: 12, scoringType: 'FG_30-49', points: '3' },
      { id: 13, scoringType: 'FG_50+', points: '4' },
      { id: 14, scoringType: 'Sack', points: '1' },
      { id: 15, scoringType: 'Int', points: '1' },
      { id: 16, scoringType: 'DTD', points: '6' },
      { id: 17, scoringType: 'DFR', points: '1' },
      { id: 18, scoringType: 'DSO', points: '10' },
    ]));
};
