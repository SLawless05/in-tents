const mongoose = require("mongoose");

<<<<<<< HEAD
module.exports = function (databaseURL) {
    mongoose.connect(databaseURL, { useNewUrlParser: true }, () => console.log("connection to mongodb"));
    mongoose.Promise = Promise;
=======
module.exports = function(databaseURL){
  mongoose.connect(databaseURL, { useNewUrlParser: true }, () => console.log("connection to mongodb"));
  mongoose.Promise = Promise;
>>>>>>> fede52dfbb5c16a81a6e2e53816e020b30c7c163
}