const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        // creating the user accout
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, {$push:{savedPlaces: req.body.newPlace}})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        // updating the favorite locations to contain any that are added
    },
    findOneById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        // loading the favorite places of the user
    },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        // removing a favorite location from a profile 
    }
};



// db.test.update({"heros.nickname":"test", "heros.spells.spell_id":1}, {$set:{"heros.0.spells.1.level":3}});