const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const mealsRoute = require("./routes/mealsRoute");

const app = express();

app.use(cors());

app.use(morgan("tiny"));

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

app.use(express.static(path.join(__dirname, "/public")));

app.use("/api/v1/meals", mealsRoute);

module.exports = app;
