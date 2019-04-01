require("dotenv").config();

//Express
const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const passport = require("passport");
require("./services/passport");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)

// Connect to the Mongo DB
const db = require("./config/connection");
db(process.env.MONGODB_URI || "mongodb://localhost/User");

// Serve Static
app.use(express.static("app/build"));

app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/app/build/index.html"));
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



