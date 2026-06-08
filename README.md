# Artifact3

A minimal Node.js tutorial server built with [ExpressJS](https://expressjs.com/) that exposes two `GET` endpoints.

## Requirements

- [Node.js](https://nodejs.org/) >= 18

## Usage

Install the dependencies and start the server from the repository root:

```bash
npm install   # installs Express ^5.2.1 and generates package-lock.json
npm start     # runs "node server.js"
```

On startup the server logs:

```text
Server listening on port 3000
```

The listening port is configurable via the `PORT` environment variable (defaults to `3000`):

```bash
PORT=8080 npm start
```

## Endpoints

| Method | Path            | Response       | Status |
| ------ | --------------- | -------------- | ------ |
| `GET`  | `/`             | `Hello world`  | 200    |
| `GET`  | `/good-evening` | `Good evening` | 200    |

## Example Requests

With the server running, query the endpoints with `curl`:

```bash
curl http://localhost:3000/              # -> Hello world
curl http://localhost:3000/good-evening  # -> Good evening
```
