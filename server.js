const express = require("express");

// Initialize the application
const app = express();

// Configure Express to only look at urlencoded bodies with a Content-Type of "application/json"
app.use(express.urlencoded());
app.use(express.json());

// Import the exports from the API router index, and add them to the application
const api = require('./api/index')
app.use('/api', api)

// Run on the port set in the .env, or 5000 if not specified
const PORT = process.env.PORT || 5000;

// Start listening on the configured port
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});