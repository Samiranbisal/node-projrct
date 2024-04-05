const Customer = require("../models/Customers");
const mongoose = require("mongoose");

exports.homePage = async (req, resp) => {
  const locals = {
    title: "Nodejs",
    descriptions: "Free node js user",
  };
  resp.render("index", locals);
};

exports.addCustomer = async (req, resp) => {
  const locals = {
    title: "Add New Customer",
    descriptions: "Free node js user",
  };
  resp.render("customer/add", locals);
};

exports.postCustomer = async (req, resp) => {
  console.log(req.body);
  const customer = new Customer({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Phone_No: req.body.Phone_No,
    Email: req.body.Email,
    Details: req.body.Details,
  });

  try {
    await Customer.create(customer);
    resp.redirect("/");
  } catch (error) {
    console.log(error);
  }
  resp.end();
};
