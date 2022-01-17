const express = require('express');
const api = require('./api/index');

// Initialize the application
const app = express();

// Configure Express to only look at urlencoded bodies with a Content-Type of "application/json"
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add the api routes to the application
app.use('/api', api);

// Run on the port set in the .env, or 5000 if not specified
const PORT = process.env.PORT || 5000;

// Start listening on the configured port
app.listen(PORT, () => {
  console.log(`server (${process.env.NODE_ENV}) running at http://localhost:${PORT}`);
});
