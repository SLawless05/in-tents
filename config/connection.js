// const db = require("../models");

// // Defining methods for the booksController
// module.exports = {
//     create: function (req, res) {
//         db./* database name*/
//             // .create(req.body) creating the user 
//             // .then(dbModel => res.json(dbModel)) sending them to thier profile page 
//             // .catch(err => res.status(422).json(err)); catching error
//     },
//     findById: function (req, res) {
//         db./* database name*/
//             // .findById(req.params.id) when loging we select thier profile by id 
//             // .then(dbModel => res.json(dbModel)) sending them to thier profile  page 
//             // .catch(err => res.status(422).json(err)); catching error
//     },
//     update: function (req, res) {
//         db./* database name*/
//             // .findOneAndUpdate({ _id: req.params.id }, req.body) updating thier profile page to hold thier saved places that they want continous alerts
//             // .then(dbModel => res.json(dbModel)) reloading thier profile page to display thier saved places 
//             // .catch(err => res.status(422).json(err)); catching error
//     },
//     remove: function (req, res) {
//         db./* database name*/
//             // .findById({ _id: req.params.id }) selecting a saved place by the id given to it 
//             // .then(dbModel => dbModel.remove()) remoing that place from thier page
//             // .then(dbModel => res.json(dbModel)) relaoding thier page so that they don't have the place that was deleted 
//             // .catch(err => res.status(422).json(err));catching the error
//     },
//     findAll: function (req, res) {
//         db./* database name*/
//             // .find(req.query)finding all the places that they have saved
//             // .then(dbModel => res.json(dbModel))displaying them to thier page 
//             // .catch(err => res.status(422).json(err)); catching the error
//     }
// };
