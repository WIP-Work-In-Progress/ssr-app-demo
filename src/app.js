const express = require("express");
const path = require("path");
const app = express();

const homeRoutes = require("./routes/views/homeRoutes");
const userRoutes = require("./routes/api/userRoutes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homeRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
