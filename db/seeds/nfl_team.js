const { default: knex } = require('knex');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function seed(knex) {
  return knex('NFLteam')
    .del() // Deletes ALL existing entries
    .then(() => knex('NFLteam').insert([
      {
        conference: 'NFC', home: 'Arizona', team: 'Cardinals', shortName: 'ARZ',
      },
      {
        conference: 'NFC', home: 'Atlanta', team: 'Falcons', shortName: 'ATL',
      },
      {
        conference: 'AFC', home: 'Baltimore', team: 'Ravens', shortName: 'BAL',
      },
      {
        conference: 'AFC', home: 'Buffalo', team: 'Bills', shortName: 'BUF',
      },
      {
        conference: 'NFC', home: 'Carolina', team: 'Panthers', shortName: 'CAR',
      },
      {
        conference: 'NFC', home: 'Chicago', team: 'Bears', shortName: 'CHI',
      },
      {
        conference: 'AFC', home: 'Cincinnati', team: 'Bengals', shortName: 'CIN',
      },
      {
        conference: 'AFC', home: 'Cleveland', team: 'Browns', shortName: 'CLE',
      },
      {
        conference: 'NFC', home: 'Dallas', team: 'Cowboys', shortName: 'DAL',
      },
      {
        conference: 'AFC', home: 'Denver', team: 'Broncos', shortName: 'DEN',
      },
      {
        conference: 'NFC', home: 'Detroit', team: 'Lions', shortName: 'DET',
      },
      {
        conference: 'NFC', home: 'Green Bay', team: 'Packers', shortName: 'GB',
      },
      {
        conference: 'AFC', home: 'Houston', team: 'Texans', shortName: 'HOU',
      },
      {
        conference: 'AFC', home: 'Indianapolis', team: 'Colts', shortName: 'IND',
      },
      {
        conference: 'AFC', home: 'Jacksonville', team: 'Jaguars', shortName: 'JAX',
      },
      {
        conference: 'AFC', home: 'Kansas City', team: 'Chiefs', shortName: 'KC',
      },
      {
        conference: 'AFC', home: 'Las Vegas', team: 'Raiders', shortName: 'LV',
      },
      {
        conference: 'AFC', home: 'Los Angeles', team: 'Chargers', shortName: 'LAC',
      },
      {
        conference: 'NFC', home: 'Los Angeles', team: 'Rams', shortName: 'LAR',
      },
      {
        conference: 'AFC', home: 'Miami', team: 'Dolphins', shortName: 'MIA',
      },
      {
        conference: 'NFC', home: 'Minnesota', team: 'Vikings', shortName: 'MIN',
      },
      {
        conference: 'AFC', home: 'New England', team: 'Patriots', shortName: 'NE',
      },
      {
        conference: 'NFC', home: 'New Orleans', team: 'Saints', shortName: 'NO',
      },
      {
        conference: 'NFC', home: 'New York', team: 'Giants', shortName: 'NYG',
      },
      {
        conference: 'AFC', home: 'New York', team: 'Jets', shortName: 'NYJ',
      },
      {
        conference: 'NFC', home: 'Philadelphia', team: 'Eagles', shortName: 'PHI',
      },
      {
        conference: 'AFC', home: 'Pittsburgh', team: 'Steelers', shortName: 'PIT',
      },
      {
        conference: 'NFC', home: 'San Francisco', team: '49ers', shortName: 'SF',
      },
      {
        conference: 'NFC', home: 'Seattle', team: 'Seahawks', shortName: 'SEA',
      },
      {
        conference: 'NFC', home: 'Tampa Bay', team: 'Buccaneers', shortName: 'TB',
      },
      {
        conference: 'AFC', home: 'Tennessee', team: 'Titans', shortName: 'TEN',
      },
      {
        conference: 'NFC', home: 'Washington', team: 'Commanders', shortName: 'WAS',
      },
    ]));
};
