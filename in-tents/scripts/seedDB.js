const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/"
);



const UserSeed = [
    {
        username: "The Dead Zone",
        password: "Stephen King",
        savedPlaces:[],
        date: new Date(Date.now())
    }
];
db.User