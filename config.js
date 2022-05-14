const config = {};

// The network port that the back-end process runs on
config.port = process.env.PORT || 5000;

// The PostgresDB Connection String to the database
config.pgdb_connection = process.env.PGDB_CONNECTION || 'postgresql://postgres:password@localhost/pff';

module.exports = config;
