const express = require('express');
const api = express.Router();

// Include the files containing the routes
const test = require('./test');

// Include the routes themselves
api.use('/test', test);

// Export the api router so it can be used elsewhere
module.exports = api;
