const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/draftboard"
);

const userSeed = [
    {
        username: "Joe",
        teams: [],
        score: 0
    },
    {
        username: "Maeve",
        teams: [],
        score: 0
    },
    {
        name: "Eduardo",
        teams: [],
        score: 0
    },
    {
        username: "Josh",
        teams: [],
        score: 0
    },
    {
        name: "Stephen",
        teams: [],
        score: 0
    },
    {
        name: "Austin",
        teams: [],
        score: 0
    },
    {
        name: "Karsten",
        teams: [],
        score: 0
    },
    {
        name: "Brendan",
        teams: [],
        score: 0
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " users added!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });