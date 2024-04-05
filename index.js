require("dotenv").config();
const express = require("express");
const expresslayouts = require("express-ejs-layouts");
PORT = 8000 || process.env.PORT;
const connectdb = require("./server/config/db");
connectdb();
const { flash } = require("express-flash-message");
const session = require("express-session");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

app.use(flash({ sessionKeyName: "flashMessage" }));

app.use(expresslayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", require("./server/routes/customer"));

app.get("*", (req, resp) => {
  resp.status(404).render("404");
});

app.listen(PORT, () => {
  console.log("SERVER START");
});
