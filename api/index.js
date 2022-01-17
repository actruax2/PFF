const express = require('express');
const state = require('./state');

const api = express.Router();

// Include the routes themselves
api.use('/state', state);

// Export the api router so it can be used elsewhere
module.exports = api;
