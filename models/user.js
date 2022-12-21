
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String
    },
    dni: {
        type: String,
        required: true,
        unique: true,
        immutable: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password : {
        type: String,
        required: true
    },
    phone: {
        type: Number

    },
    nationality: {
        type: String
    }

});

const User = mongoose.model("User", userSchema);
module.exports = User;