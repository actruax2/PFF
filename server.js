const express = require('express');
const api = require('./api/index');
const config = require('./config');

// Initialize the application
const app = express();

// Configure Express to only look at urlencoded bodies with a Content-Type of "application/json"
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add the api routes to the application
app.use('/api', api);

// Start listening on the configured port
app.listen(config.port, () => {
  console.log(`server (${process.env.NODE_ENV}) running at http://localhost:${config.port}`);
});
