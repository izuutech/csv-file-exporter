const express = require("express");
const mainRoute = express.Router();
const main = require("../controllers/main.controller");

mainRoute.get("/", main.homepage);

module.exports = mainRoute;
