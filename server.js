require("dotenv").config();
//Express
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5420;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)

app.use(express.static("app/public"));

// Add routes, both API and view
//app.use(require("./routes"));

// Connect to the Mongo DB
const db = require("./config/connection");
db(process.env.MONGODB_URI || "mongodb://localhost/users");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
