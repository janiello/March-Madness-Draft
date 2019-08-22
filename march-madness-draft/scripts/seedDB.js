const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://user:CanoTuba2012!@ds211708.mlab.com:11708/heroku_5d916bgb"
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
        username: "Eduardo",
        teams: [],
        score: 0
    },
    {
        username: "Josh",
        teams: [],
        score: 0
    },
    {
        username: "Stephen",
        teams: [],
        score: 0
    },
    {
        username: "Austin",
        teams: [],
        score: 0
    },
    {
        username: "Karsten",
        teams: [],
        score: 0
    },
    {
        username: "Brendan",
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