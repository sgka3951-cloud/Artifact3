'use strict';

/**
 * server.js — Express application entry point for the Artifact3 tutorial.
 *
 * This is the single source file of the project. It demonstrates a minimal
 * Express.js (v5) HTTP server that exposes two read-only, plain-text GET
 * endpoints:
 *
 *   - GET /              -> "Hello world"
 *   - GET /good-evening  -> "Good evening"
 *
 * Module system: CommonJS (`require`), matching package.json which does not set
 * `"type": "module"`. The `express` dependency (declared as ^5.2.1 in
 * package.json) is resolved from `node_modules/` after `npm install`.
 *
 * This file is referenced by `main` in package.json and launched by the npm
 * `start` script (`node server.js`).
 */

// ---------------------------------------------------------------------------
// Dependencies
// ---------------------------------------------------------------------------
// Import the Express web framework. `express` is a factory function used to
// create an application instance that acts as the central request dispatcher
// (front controller) for all incoming HTTP requests.
const express = require('express');

// ---------------------------------------------------------------------------
// Application setup
// ---------------------------------------------------------------------------
// Instantiate the Express application. A single app instance handles routing,
// the middleware pipeline, and response generation for every request.
const app = express();

// Externalized configuration (twelve-factor): the listen port is read from the
// PORT environment variable and falls back to 3000 when it is not provided.
// This allows the deployment environment to control the port without code
// changes (e.g. `PORT=8080 npm start`).
const PORT = process.env.PORT || 3000;

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------
// Baseline endpoint. Reproduces the original tutorial behavior by returning the
// exact plain-text body "Hello world". `res.send` with a string sets a
// text/html content type and writes the body verbatim (no added punctuation,
// JSON wrapping, or markup).
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Second endpoint. Returns the exact plain-text body "Good evening".
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// ---------------------------------------------------------------------------
// Server startup
// ---------------------------------------------------------------------------
// Start the HTTP listener. In Express 5 the `app.listen` callback receives any
// startup error as its first argument (rather than throwing), so the callback
// inspects `err` and logs a failure before returning; otherwise it logs the
// port the server is listening on.
app.listen(PORT, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
    return;
  }
  console.log(`Server listening on port ${PORT}`);
});
