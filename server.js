// Express application entry point for the Artifact3 tutorial server.
// Introduces ExpressJS to host multiple HTTP endpoints with minimal boilerplate.
const express = require('express');

// Instantiate the Express application.
const app = express();

// Port is configurable via the PORT environment variable; defaults to 3000.
const PORT = process.env.PORT || 3000;

// Baseline endpoint: preserves the original tutorial behavior by returning "Hello world".
app.get('/', (req, res) => {
  res.send('Hello world');
});

// New endpoint added per the feature request: returns the response "Good evening".
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Start the HTTP server and log the listening port for local development.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
