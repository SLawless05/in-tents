const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/User"
);

const userSeed = [
  {
    username: "The Dead Zone",
    password: "##############",
    savedPlaces: ["Yosemite National Park", "Grand Canyon National Park", "YellowStone National Park", "Petrified Forest National Park", "Suguaro National Park"],
    date: new Date(Date.now())
  },
  {
    username: "Sunny",
    password: "#########",
    savedPlaces: ["Yosemite National Park", "YellowStone National Park", "Petrified Forest National Park", "Suguaro National Park"],
    date: new Date(Date.now())
  }
]


db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log("records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
