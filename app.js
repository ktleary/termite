const express = require("express");
const http = require("http");
const bodyparser = require("body-parser");
const winston = require("winston");
const expressWinston = require("express-winston");
const cors = require("cors");
const debug = require("debug");

const app = express();
const server = http.createServer(app);
const port = 3000;
const routes = [];
const debugLog = debug("app");

app.use(bodyparser.json());
app.use(cors());
app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
  })
);
