var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GroupSchema = new Schema({
    GroupName: {
        type: String,
        unique: true
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

var Group = mongoose.model("Group", GroupSchema);

module.exports = Group;