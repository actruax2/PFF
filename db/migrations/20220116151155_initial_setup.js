/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function up(knex) {
  return knex.schema
    .createTable('user', (table) => {
      table.increments('id').primary();
      table.string('name', 255).notNullable();
      table.string('email', 255).notNullable();
    })
    .createTable('entry', (table) => {
      table.increments('id');
      table.integer('season').notNullable();
      table.string('entryName', 255).notNullable();
      table.increments('user_id').references('id').inTable('user');
      table.timestamp('created').defaultTo(knex.fn.now());
      table.primary(['id', 'user_id']);
      table.unique(['season', 'entryName']);
    })
    .createTable('scoringDefinition', (table) => {
      table.increments('id').primary();
      table.string('scoringType', 255).notNullable();
      table.decimal('points');
    })
    .createTable('NFLteam', (table) => {
      table.string('conference', 3).notNullable();
      table.string('city', 32).notNullable();
      table.string('team', 32).notNullable().unique();
      table.string('shortName', 3).notNullable().unique();
    })
    .createTable('player', (table) => {
      table.increments('id');
      table.string('name', 255).notNullable();
    })
    .createTable('position', (table) => {
      table.string('posAbr', 2).notNullable().unique();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function up(knex) {
  return knex.schema
    .dropTable('user')
    .dropTable('entry')
    .dropTable('scoringDefinition')
    .dropTable('NFLteam')
    .dropTable('player')
    .dropTable('position');
};
