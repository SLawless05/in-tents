const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/users"
);



const UserSeed = [
    {
        username: "The Dead Zone",
        password: "##############",
        savedPlaces:[],
        date: new Date(Date.now())
    }
];
db.Users
  .remove({})
  .then(() => db.Book.collection.insertMany(UserSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });