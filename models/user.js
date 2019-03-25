const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    savedPlaces: [],
    date: { type: Date, default: Date.now }
  });
  
  const User = mongoose.model("User", usersSchema);
  
  module.exports = User;
  