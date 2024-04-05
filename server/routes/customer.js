const express = require("express");
const routes = express.Router();
const customerController = require("../controllers/customerController");

routes.get("/", customerController.homePage);
routes.get("/add", customerController.addCustomer);
routes.post("/add", customerController.postCustomer);

module.exports = routes;
