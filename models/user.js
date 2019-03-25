const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

<<<<<<< HEAD
const usersSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  savedPlaces: Array,
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("user", usersSchema);

module.exports = User;
=======
const UserSchema = new Schema({
    email: { type: String, required: true, lowercase: true },
    password: String,
    savedPlaces: [],
    date: { type: Date, default: Date.now }
});

// On save hook, encrypt password
UserSchema.pre("save", function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }

        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            this.password = hash;
            next();
        });
    });
});

// create a method to check a users password
UserSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;

>>>>>>> cbadbadf9b19fd3350663463ab226ac0296110e1
