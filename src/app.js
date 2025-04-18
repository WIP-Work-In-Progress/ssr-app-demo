const express = require("express");
const path = require("path");
const app = express();
const homeRoutes = require("./routes/homeRoutes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.use("/", homeRoutes);

module.exports = app;
