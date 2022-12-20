
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    }
});

const Car = mongoose.model("Car", carSchema);
module.exports = Car;