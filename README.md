# Artifact3

A minimal Node.js tutorial that uses the **Express.js** web framework to serve two plain-text HTTP `GET` endpoints.

## Prerequisites

- **Node.js `>= 18`** is required (Express 5 requirement). **Node.js 24 LTS** is the recommended runtime.
- **npm** (bundled with Node.js).

## Installation

Install the project dependencies:

```bash
npm install
```

This installs Express (`express` `^5.2.1`) and resolves the exact dependency versions pinned in `package-lock.json`.

## Usage

Start the server:

```bash
npm start
```

This runs `node server.js` (the `start` script defined in `package.json`). The server listens on port **3000** by default. Override the port with the `PORT` environment variable:

```bash
PORT=8080 npm start
```

## Endpoints

| Method | Path | Response |
|---|---|---|
| `GET` | `/` | `Hello world` |
| `GET` | `/good-evening` | `Good evening` |

With the server running on the default port, you can exercise the endpoints with `curl`:

```bash
curl http://localhost:3000/
# Hello world

curl http://localhost:3000/good-evening
# Good evening
```
