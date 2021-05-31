const express = require("express");
const http = require("http");
const bodyparser = require("body-parser");
const winston = require("winston");
const expressWinston = require("express-winston");
const cors = require("cors");
const { processUrl } = require("./story/story.route");

const app = express();
const server = http.createServer(app);
const port = 3000;

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

app.use(
	expressWinston.errorLogger({
		transports: [new winston.transports.Console()],
		format: winston.format.combine(
			winston.format.colorize(),
			winston.format.json()
		),
	})
);

app.get("/favicon.ico", (req, res) => {
	res.sendFile("favicon.ico", { root: __dirname });
});
app.get("/", (req, res) => {
	res.status(204).send("Termite Viewer");
});

app.route("/story").get(processUrl);

server.listen(port, () => {
	console.info(`Server running at http://localhost:${port}`);
});
