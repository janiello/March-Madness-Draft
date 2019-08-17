var mongoose = require("mongoose");

var Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    id: ObjectId,
    username: String,
    teams: [],
    score: Number
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
