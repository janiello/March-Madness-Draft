var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    teams: [],
    score: Number
});

var User = mongoose.model("User", UserSchema);

module.exports = User;