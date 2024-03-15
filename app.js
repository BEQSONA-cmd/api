require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const requestLogger = require("morgan");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");

const app = express();

const limiter = rateLimit({
    windowMs: 900,
    max: 500,
});

app.set('trust proxy', true);
app.use(requestLogger("dev"));
app.use(cors());

app.use(bodyParser.json({ limit: "1mb" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//app.use(limiter);
console.clear();

const routesPath = path.join(__dirname, "routes");
fs.readdirSync(routesPath).forEach((file) => {
    if (file.endsWith(".js")) {
        const route = require(path.join(routesPath, file));
        let listening = "/" + path.parse(file).name;
        app.use(listening, route);
        console.log(`📁 Route ${file} listening on ${listening}`);
    }
    console.log("");
});

module.exports = app;
