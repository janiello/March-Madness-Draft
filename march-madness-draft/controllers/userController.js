const db = require("../models");

// Defining methods for the booksController
module.exports = {
  create: function(req, res) {
    db.User
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.User
    .find(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
   console.log(req.params.id)
    db.User
      .findById(req.params.id)
      .then(dbModel => {res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  // // create: function(req, res) {
  // //   db.User
  // //     .create(req.body)
  // //     .then(dbModel => res.json(dbModel))
  // //     .catch(err => res.status(422).json(err));
  // // },
  update: function(req, res) {
    console.log(req.body + "what is going on")
    db.User
    .findByIdAndUpdate({_id: req.params.id}, {$set: {score: 6}})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    }
  // remove: function(req, res) {
  //   db.User
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
