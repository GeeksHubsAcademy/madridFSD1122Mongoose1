
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true,
        unique: true,
        immutable: true
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;