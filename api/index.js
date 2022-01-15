const express = require('express');
const api = express.Router();

// Include the files containing the routes
const state = require('./state');

// Include the routes themselves
api.use('/state', state);

// Export the api router so it can be used elsewhere
module.exports = api;
